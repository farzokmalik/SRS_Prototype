import React, { useState } from 'react';
import { Plus, ArrowDownToLine, CheckCircle2, X } from 'lucide-react';
import { InputField, SelectField, TextAreaField } from '../ui/FormElements';
import { useForm } from '../../context/FormContext';

interface ReappRow {
  id: string;
  gsNo: string;
  mainSector: string;
  sector: string;
  projectName: string;
  schemeType: string;
  grantNumber: string;
  loaNumber: string;
  objectCode: string;
  amount: string;
}

const SECTOR_OPTIONS = [
  'Agriculture', 'Communication & Works', 'Energy', 'Environment', 'Finance', 'Health', 'Higher Education', 'Industry', 'Irrigation', 'Local Government'
];

const PROJECT_OPTIONS = [
  'Punjab Solar Energy Optimization Project', 'Smart Agriculture Initiative Phase II', 'Healthcare Infrastructure Expansion', 'Rural Road Connectivity Program'
];

const GRANT_OPTIONS = ['Grant 12', 'Grant 15', 'Grant 21', 'Grant 36'];
const OBJECT_CODE_OPTIONS = ['A01101 - Basic Pay', 'A03901 - Stationary', 'A13001 - Transport', 'A05270 - Others'];

export const SurrenderForm: React.FC = () => {
  const { formData, setTransactions, setSection } = useForm();
  const [showTable, setShowTable] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [lastAmount, setLastAmount] = useState(0);
  const [rows, setRows] = useState<ReappRow[]>([
    {
      id: '1',
      gsNo: '76',
      mainSector: 'Social Sectors',
      sector: 'Agriculture',
      projectName: 'Punjab Solar Energy Optimization Project',
      schemeType: 'Ongoing',
      grantNumber: 'Grant 12',
      loaNumber: 'LOA-2024-001',
      objectCode: 'A01101 - Basic Pay',
      amount: '5000000',
    }
  ]);
  
  const [surrenderDetails, setSurrenderDetails] = useState({
    year: '2024-25',
    costType: 'Local',
    surrenderAmount: '',
    reason: 'Project optimization and redistribution of unutilized funds from personnel and operational heads.',
  });

  // Calculate total from rows in real-time
  const totalReapp = rows.reduce((sum, row) => sum + (parseFloat(row.amount) || 0), 0);

  // Sync surrenderAmount with totalReapp
  React.useEffect(() => {
    setSurrenderDetails(prev => ({ ...prev, surrenderAmount: totalReapp.toString() }));
  }, [totalReapp]);

  const handleGetDetails = () => {
    setShowTable(true);
  };

  const handleSurrender = () => {
    if (!totalReapp) return;

    const newTransaction = {
      id: Math.random().toString(36).substr(2, 9),
      date: new Date().toISOString().split('T')[0],
      type: 'Surrender',
      source: rows[0]?.projectName || 'Development Project',
      target: `Surrender Pool (${rows[0]?.sector || 'General'})`,
      amount: totalReapp,
      status: 'Completed',
      sector: rows[0]?.sector || 'General',
      objectCode: rows[0]?.objectCode || '---'
    };

    const transactions = Array.isArray(formData.reappropriationTransactions) 
      ? formData.reappropriationTransactions 
      : [];

    setTransactions([...transactions, newTransaction]);
    setLastAmount(totalReapp);
    setShowSuccess(true);
    setShowTable(false);
  };


  const updateRow = (id: string, updates: Partial<ReappRow>) => {
    setRows(rows.map(r => r.id === id ? { ...r, ...updates } : r));
  };

  return (
    <div className="fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '2rem', position: 'relative' }}>
      {/* Success Modal */}
      {showSuccess && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'transparent',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          pointerEvents: 'none' // Allow clicking through the empty space if needed, though usually modals block
        }}>
          <div className="card" style={{
            pointerEvents: 'auto', // Re-enable pointer events for the modal itself
            width: '100%',
            maxWidth: '450px',
            padding: '3rem 2.5rem',
            textAlign: 'center',
            position: 'relative',
            border: '1px solid hsl(var(--success) / 0.2)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            background: '#fff',
            animation: 'scaleUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
          }}>
            <button 
              onClick={() => setShowSuccess(false)}
              style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', background: 'transparent', border: 'none', color: 'hsl(var(--text-muted))', cursor: 'pointer', padding: '0.5rem' }}
            >
              <X size={20} />
            </button>
            
            <div style={{ 
              width: '88px', 
              height: '88px', 
              background: 'hsl(var(--success) / 0.1)', 
              borderRadius: 'var(--radius-full)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              color: 'hsl(var(--success))',
              margin: '0 auto 1.5rem',
            }}>
              <CheckCircle2 size={44} strokeWidth={2.5} />
            </div>
            
            <h2 style={{ fontSize: '1.75rem', fontWeight: 750, marginBottom: '0.75rem', color: 'hsl(var(--primary))', letterSpacing: '-0.02em' }}>Surrender Successful</h2>
            <p style={{ color: 'hsl(var(--text-muted))', fontSize: '1rem', lineHeight: 1.6, marginBottom: '2.5rem' }}>
              Your surrender of <span style={{ fontWeight: 700, color: 'hsl(var(--success))' }}>Rs. {lastAmount.toLocaleString()}</span> has been processed and added to the global pool.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <button 
                className="btn btn-primary" 
                onClick={() => {
                  setShowSuccess(false);
                  setSection(3); // Navigate to Pool Ledger
                }}
                style={{ width: '100%', padding: '0.875rem', fontSize: '1rem' }}
              >
                View Pool Ledger
              </button>
              <button 
                className="btn btn-secondary" 
                onClick={() => setShowSuccess(false)}
                style={{ width: '100%', padding: '0.875rem', border: 'none', fontSize: '0.9375rem' }}
              >
                Continue Surrendering
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Source Selection */}
      <section className="card">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
          {/* <div style={{ width: '32px', height: '32px', background: 'hsl(var(--accent-soft))', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'hsl(var(--accent))' }}>
            <ArrowUpFromLine size={18} />
          </div> */}
          <h3 style={{ fontSize: '1.125rem', margin: 0 }}>Source Selection (Project to Surrender From)</h3>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', alignItems: 'flex-end' }}>
          <SelectField 
            label="Year" 
            value={surrenderDetails.year}
            onChange={(e) => setSurrenderDetails({ ...surrenderDetails, year: e.target.value })}
            options={['2023-24', '2024-25', '2025-26']}
          />
          <SelectField 
            label="Funding Cost Type" 
            value={surrenderDetails.costType}
            onChange={(e) => setSurrenderDetails({ ...surrenderDetails, costType: e.target.value })}
            options={['Local', 'Foreign']}
          />
          <button className="btn btn-primary" onClick={handleGetDetails} style={{ height: '42px', marginBottom: '1.5rem' }}>Get Project Details</button>
        </div>
      </section>

      {/* Re-appropriation Details Section */}
      {showTable && (
        <>
          <section className="card" style={{ padding: '2rem', animation: 'fadeIn 0.4s ease-out' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div style={{ width: '32px', height: '32px', background: 'hsl(var(--accent-soft))', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'hsl(var(--accent))' }}>
                <Plus size={18} />
              </div>
              <h3 style={{ fontSize: '1.125rem', margin: 0 }}>Project Details to Surrender</h3>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
              <InputField 
                label="GS No." 
                placeholder="Enter GS No."
                value={rows[0].gsNo}
                onChange={(e) => updateRow(rows[0].id, { gsNo: e.target.value })}
              />
              
              <SelectField 
                label="Main Sector"
                value={rows[0].mainSector}
                onChange={(e) => updateRow(rows[0].id, { mainSector: e.target.value })}
                options={['Social Sectors', 'Infrastructure Sectors', 'Production Sectors', 'Services Sectors']}
              />

              <SelectField 
                label="Sector"
                value={rows[0].sector}
                onChange={(e) => updateRow(rows[0].id, { sector: e.target.value })}
                options={SECTOR_OPTIONS}
              />

              <SelectField 
                label="Project Name"
                value={rows[0].projectName}
                onChange={(e) => updateRow(rows[0].id, { projectName: e.target.value })}
                options={PROJECT_OPTIONS}
              />

              <SelectField 
                label="Scheme Type"
                value={rows[0].schemeType}
                onChange={(e) => updateRow(rows[0].id, { schemeType: e.target.value })}
                options={['Ongoing', 'New']}
              />

              <SelectField 
                label="Grant Number"
                value={rows[0].grantNumber}
                onChange={(e) => updateRow(rows[0].id, { grantNumber: e.target.value })}
                options={GRANT_OPTIONS}
              />

              <SelectField 
                label="LOA Number"
                value={rows[0].loaNumber}
                onChange={(e) => updateRow(rows[0].id, { loaNumber: e.target.value })}
                options={['LOA-2024-001', 'LOA-2024-005']}
              />

              <SelectField 
                label="Object Code"
                value={rows[0].objectCode}
                onChange={(e) => updateRow(rows[0].id, { objectCode: e.target.value })}
                options={OBJECT_CODE_OPTIONS}
              />

              <InputField 
                label="Amount to Surrender (Rs.)"
                type="number"
                placeholder="0.00"
                value={rows[0].amount}
                onChange={(e) => updateRow(rows[0].id, { amount: e.target.value })}
                style={{ fontWeight: 700, color: 'hsl(var(--error))' }}
              />
            </div>
          </section>

      {/* Surrender Details */}
      <section className="card">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
          <div style={{ width: '32px', height: '32px', background: 'hsl(var(--accent-soft))', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'hsl(var(--accent))' }}>
            <ArrowDownToLine size={18} />
          </div>
          <h3 style={{ fontSize: '1.125rem', margin: 0 }}>Surrender Details</h3>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <InputField 
              label="Surrender Amount" 
              type="number" 
              placeholder="Enter amount to surrender" 
              value={surrenderDetails.surrenderAmount}
              onChange={(e) => setSurrenderDetails({ ...surrenderDetails, surrenderAmount: e.target.value })}
              required 
            />
          </div>
        </div>

        <TextAreaField 
          label="Reason for Surrender" 
          placeholder="Explain why these funds are being surrendered to the pool..." 
          rows={4}
          value={surrenderDetails.reason}
          onChange={(e) => setSurrenderDetails({ ...surrenderDetails, reason: e.target.value })}
          required
        />

        <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'flex-end' }}>
          <button 
            className="btn btn-primary" 
            onClick={handleSurrender}
            style={{ background: 'hsl(var(--error))', minWidth: '200px' }}
          >
            Surrender to Pool
          </button>
        </div>
      </section>
      </>
      )}
    </div>
  );
};
