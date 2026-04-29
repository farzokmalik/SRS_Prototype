import React, { useState } from 'react';
import { Plus, Trash2, ArrowDownToLine, ArrowUpFromLine, CheckCircle2, X } from 'lucide-react';
import { InputField, SelectField, TextAreaField } from '../ui/FormElements';
import { useForm } from '../../context/FormContext';

interface ReappRow {
  id: string;
  sector: string;
  projectName: string;
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
      sector: 'Agriculture',
      projectName: 'Punjab Solar Energy Optimization Project',
      grantNumber: 'Grant 12',
      loaNumber: 'LOA-2024-001',
      objectCode: 'A01101 - Basic Pay',
      amount: '5000000',
    },
    {
      id: '2',
      sector: 'Agriculture',
      projectName: 'Punjab Solar Energy Optimization Project',
      grantNumber: 'Grant 12',
      loaNumber: 'LOA-2024-001',
      objectCode: 'A03901 - Stationary',
      amount: '2500000',
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
      status: 'Completed'
    };

    const transactions = Array.isArray(formData.reappropriationTransactions) 
      ? formData.reappropriationTransactions 
      : [];

    setTransactions([...transactions, newTransaction]);
    setLastAmount(totalReapp);
    setShowSuccess(true);
    setShowTable(false);
  };

  const addRow = () => {
    setRows([...rows, {
      id: Math.random().toString(36).substr(2, 9),
      sector: '',
      projectName: '',
      grantNumber: '',
      loaNumber: '',
      objectCode: '',
      amount: '',
    }]);
  };

  const removeRow = (id: string) => {
    setRows(rows.filter(r => r.id !== id));
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
                  setSection(2); // Navigate to Ledger
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
          <div style={{ width: '32px', height: '32px', background: 'hsl(var(--accent-soft))', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'hsl(var(--accent))' }}>
            <ArrowUpFromLine size={18} />
          </div>
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

      {/* Re-appropriation Rows */}
      {showTable && (
        <>
          <section className="card" style={{ padding: '2rem', animation: 'fadeIn 0.4s ease-out' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 600 }}>Re-Appropriation Details</h3>
          <button onClick={addRow} className="btn btn-secondary" style={{ fontSize: '0.8125rem', padding: '0.5rem 1rem' }}>
            <Plus size={16} /> Add Re-Appropriation
          </button>
        </div>

        {rows.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '3rem', border: '2px dashed hsl(var(--border))', borderRadius: 'var(--radius-md)', color: 'hsl(var(--text-muted))' }}>
            <p>No re-appropriation rows added. Click the button above to add one.</p>
          </div>
        ) : (
          <div className="table-responsive" style={{ overflowX: 'auto' }}>
            <table className="table" style={{ width: '100%', minWidth: '1000px', borderCollapse: 'separate', borderSpacing: '0 0.75rem' }}>
              <thead>
                <tr>
                  <th style={{ textAlign: 'left', fontSize: '0.75rem', color: 'hsl(var(--text-muted))', textTransform: 'uppercase', padding: '0 1rem' }}>Type</th>
                  <th style={{ textAlign: 'left', fontSize: '0.75rem', color: 'hsl(var(--text-muted))', textTransform: 'uppercase', padding: '0 1rem' }}>Sector</th>
                  <th style={{ textAlign: 'left', fontSize: '0.75rem', color: 'hsl(var(--text-muted))', textTransform: 'uppercase', padding: '0 1rem' }}>Project Name</th>
                  <th style={{ textAlign: 'left', fontSize: '0.75rem', color: 'hsl(var(--text-muted))', textTransform: 'uppercase', padding: '0 1rem' }}>Grant / LOA / Object</th>
                  <th style={{ textAlign: 'left', fontSize: '0.75rem', color: 'hsl(var(--text-muted))', textTransform: 'uppercase', padding: '0 1rem' }}>Amount</th>
                  <th style={{ textAlign: 'center', fontSize: '0.75rem', color: 'hsl(var(--text-muted))', textTransform: 'uppercase', padding: '0 1rem' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.id} style={{ background: 'hsl(var(--error) / 0.03)', border: '1px solid hsl(var(--error) / 0.1)', boxShadow: 'var(--shadow-sm)' }}>
                    <td style={{ padding: '1rem', borderTopLeftRadius: 'var(--radius-md)', borderBottomLeftRadius: 'var(--radius-md)', width: '100px' }}>
                      <span style={{ 
                        fontSize: '0.65rem', 
                        fontWeight: 800, 
                        color: 'hsl(var(--error))', 
                        background: 'hsl(var(--error) / 0.1)', 
                        padding: '0.25rem 0.5rem', 
                        borderRadius: 'var(--radius-sm)',
                        textTransform: 'uppercase'
                      }}>
                        Surrender
                      </span>
                    </td>
                    <td style={{ padding: '1rem', width: '180px' }}>
                      <select 
                        className="select" 
                        value={row.sector}
                        onChange={(e) => updateRow(row.id, { sector: e.target.value })}
                        style={{ fontSize: '0.8125rem', background: 'transparent' }}
                      >
                        <option value="">Select Sector</option>
                        {SECTOR_OPTIONS.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </td>
                    <td style={{ padding: '1rem', width: '220px' }}>
                      <select 
                        className="select" 
                        value={row.projectName}
                        onChange={(e) => updateRow(row.id, { projectName: e.target.value })}
                        style={{ fontSize: '0.8125rem', background: 'transparent' }}
                      >
                        <option value="">Select Project</option>
                        {PROJECT_OPTIONS.map(p => <option key={p} value={p}>{p}</option>)}
                      </select>
                    </td>
                    <td style={{ padding: '1rem' }}>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.5rem' }}>
                        <select className="select" style={{ fontSize: '0.75rem', background: 'transparent' }} value={row.grantNumber} onChange={(e) => updateRow(row.id, { grantNumber: e.target.value })}>
                          <option value="">Grant</option>
                          {GRANT_OPTIONS.map(g => <option key={g} value={g}>{g}</option>)}
                        </select>
                        <select className="select" style={{ fontSize: '0.75rem', background: 'transparent' }} value={row.loaNumber} onChange={(e) => updateRow(row.id, { loaNumber: e.target.value })}>
                          <option value="">LOA</option>
                          <option value="LOA-2024-001">LOA-2024-001</option>
                          <option value="LOA-2024-005">LOA-2024-005</option>
                        </select>
                        <select className="select" style={{ fontSize: '0.75rem', background: 'transparent' }} value={row.objectCode} onChange={(e) => updateRow(row.id, { objectCode: e.target.value })}>
                          <option value="">Object</option>
                          {OBJECT_CODE_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
                        </select>
                      </div>
                    </td>
                    <td style={{ padding: '1rem', width: '150px' }}>
                      <input 
                        type="number" 
                        className="input" 
                        placeholder="0.00"
                        value={row.amount}
                        onChange={(e) => updateRow(row.id, { amount: e.target.value })}
                        style={{ fontSize: '0.8125rem', fontWeight: 600, background: 'transparent', border: '1px solid hsl(var(--error) / 0.2)' }}
                      />
                    </td>
                    <td style={{ padding: '1rem', borderTopRightRadius: 'var(--radius-md)', borderBottomRightRadius: 'var(--radius-md)', textAlign: 'center' }}>
                      <button onClick={() => removeRow(row.id)} className="btn btn-secondary" style={{ padding: '0.4rem', color: 'hsl(var(--error))', background: 'transparent' }} title="Remove Row">
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
                {/* Total Row */}
                <tr style={{ background: 'hsl(var(--error) / 0.08)', borderRadius: 'var(--radius-md)' }}>
                  <td colSpan={4} style={{ padding: '1rem', textAlign: 'right', fontWeight: 700, fontSize: '0.875rem', color: 'hsl(var(--error))' }}>
                    Total Surrender Amount:
                  </td>
                  <td style={{ padding: '1rem', fontWeight: 800, fontSize: '0.875rem', color: 'hsl(var(--error))' }}>
                    Rs. {totalReapp.toLocaleString()}
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </section>

      {/* Surrender Details */}
      <section className="card">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
          <div style={{ width: '32px', height: '32px', background: 'hsl(var(--accent-soft))', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'hsl(var(--accent))' }}>
            <ArrowDownToLine size={18} />
          </div>
          <h3 style={{ fontSize: '1.125rem', margin: 0 }}>Surrender Details</h3>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <InputField label="Available Balance" value="Rs. 45,000,000" readOnly style={{ background: 'hsl(var(--bg-main))', fontWeight: 600, color: 'hsl(var(--success))' }} />
            <InputField 
              label="Surrender Amount" 
              type="number" 
              placeholder="Enter amount to surrender" 
              value={surrenderDetails.surrenderAmount}
              onChange={(e) => setSurrenderDetails({ ...surrenderDetails, surrenderAmount: e.target.value })}
              required 
            />
          </div>
          <TextAreaField 
            label="Reason for Surrender" 
            placeholder="Explain why these funds are being surrendered to the pool..." 
            rows={5}
            value={surrenderDetails.reason}
            onChange={(e) => setSurrenderDetails({ ...surrenderDetails, reason: e.target.value })}
            required
          />
        </div>

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
