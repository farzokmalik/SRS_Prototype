import React, { useState } from 'react';
import { CheckCircle2, X, AlertTriangle } from 'lucide-react';
import { InputField, SelectField } from '../ui/FormElements';
import { useForm } from '../../context/FormContext';

interface TargetRow {
  id: string;
  projectId: string;
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

const PROJECT_ID_OPTIONS = ['PID-2024-001', 'PID-2024-076', 'PID-2025-012', 'PID-2025-088'];
const GRANT_OPTIONS = ['Grant 12', 'Grant 15', 'Grant 21', 'Grant 36'];
const OBJECT_CODE_OPTIONS = ['A01101 - Basic Pay', 'A03901 - Stationary', 'A13001 - Transport', 'A05270 - Others'];

export const ReAppropriationForm: React.FC = () => {
  const { formData, setTransactions, setSection } = useForm();
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [lastAmount, setLastAmount] = useState(0);
  const [primaryProjectId, setPrimaryProjectId] = useState('PID-2024-076');
  
  // Calculate total transactions for context
  const transactions = Array.isArray(formData.reappropriationTransactions) 
    ? formData.reappropriationTransactions 
    : [];
  
  const poolBalance = transactions.reduce((acc, t) => {
    return t.type === 'Surrender' ? acc + t.amount : acc - t.amount;
  }, 0);

  const [selectedPool] = useState('Global Surrender Pool');
  const [rows, setRows] = useState<TargetRow[]>([
    {
      id: '1',
      projectId: 'PID-2024-076',
      sector: 'Health',
      projectName: 'Healthcare Infrastructure Expansion',
      grantNumber: 'Grant 21',
      loaNumber: 'LOA-2024-005',
      objectCode: 'A13001 - Transport',
      amount: '5000000',
    }
  ]);
  
  const updateRow = (id: string, updates: Partial<TargetRow>) => {
    setRows(rows.map(r => r.id === id ? { ...r, ...updates } : r));
  };

  const handleSubmit = () => {
    const totalAmount = rows.reduce((acc, curr) => acc + (parseFloat(curr.amount) || 0), 0);
    if (totalAmount <= 0) return;

    if (totalAmount > poolBalance) {
      setErrorMessage(`Insufficient funds in pool. Available balance is Rs. ${poolBalance.toLocaleString()}, but you are trying to allocate Rs. ${totalAmount.toLocaleString()}.`);
      setShowError(true);
      return;
    }

    // Create a transaction for each row
    const newTransactions = rows
      .filter(row => parseFloat(row.amount) > 0)
      .map(row => ({
        id: Math.random().toString(36).substr(2, 9),
        date: new Date().toISOString().split('T')[0],
        type: 'Allocation',
        source: selectedPool,
        target: row.projectName || 'Development Project',
        amount: parseFloat(row.amount),
        status: 'Completed',
        sector: row.sector || 'General',
        objectCode: row.objectCode || '---'
      }));

    setTransactions([...transactions, ...newTransactions]);
    setLastAmount(totalAmount);
    setShowSuccess(true);
  };

  return (
    <div className="fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '2rem', position: 'relative' }}>
      {/* Error Modal */}
      {showError && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.1)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          backdropFilter: 'blur(4px)'
        }}>
          <div className="card" style={{
            width: '100%',
            maxWidth: '450px',
            padding: '3rem 2.5rem',
            textAlign: 'center',
            position: 'relative',
            border: '1px solid hsl(var(--error) / 0.2)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            background: '#fff',
            animation: 'scaleUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
          }}>
            <button 
              onClick={() => setShowError(false)}
              style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', background: 'transparent', border: 'none', color: 'hsl(var(--text-muted))', cursor: 'pointer', padding: '0.5rem' }}
            >
              <X size={20} />
            </button>
            
            <div style={{ 
              width: '88px', 
              height: '88px', 
              background: 'hsl(var(--error) / 0.1)', 
              borderRadius: 'var(--radius-full)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              color: 'hsl(var(--error))',
              margin: '0 auto 1.5rem',
            }}>
              <AlertTriangle size={44} strokeWidth={2.5} />
            </div>
            
            <h2 style={{ fontSize: '1.75rem', fontWeight: 750, marginBottom: '0.75rem', color: 'hsl(var(--error))', letterSpacing: '-0.02em' }}>Insufficient Funds</h2>
            <p style={{ color: 'hsl(var(--text-muted))', fontSize: '1rem', lineHeight: 1.6, marginBottom: '2.5rem' }}>
              {errorMessage}
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <button 
                className="btn btn-primary" 
                onClick={() => setShowError(false)}
                style={{ width: '100%', padding: '0.875rem', fontSize: '1rem', background: 'hsl(var(--error))' }}
              >
                Adjust Amounts
              </button>
            </div>
          </div>
        </div>
      )}

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
          pointerEvents: 'none'
        }}>
          <div className="card" style={{
            pointerEvents: 'auto',
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
            
            <h2 style={{ fontSize: '1.75rem', fontWeight: 750, marginBottom: '0.75rem', color: 'hsl(var(--primary))', letterSpacing: '-0.02em' }}>Re-Appropriation Successful</h2>
            <p style={{ color: 'hsl(var(--text-muted))', fontSize: '1rem', lineHeight: 1.6, marginBottom: '2.5rem' }}>
              Your allocation of <span style={{ fontWeight: 700, color: 'hsl(var(--primary))' }}>Rs. {lastAmount.toLocaleString()}</span> from the pool has been processed successfully.
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
                View Updated Ledger
              </button>
              <button 
                className="btn btn-secondary" 
                onClick={() => setShowSuccess(false)}
                style={{ width: '100%', padding: '0.875rem', border: 'none', fontSize: '0.9375rem' }}
              >
                Continue Allocating
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Project ID Selection at Top - Full Row */}
      <section className="card" style={{ borderLeft: '4px solid hsl(var(--primary))' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.125rem', margin: 0, fontWeight: 700 }}>Project Identification</h3>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label className="label" style={{ fontSize: '0.75rem', color: 'hsl(var(--text-muted))', textTransform: 'uppercase', fontWeight: 700 }}>[RA-2.1] Target Project ID</label>
            <select 
              className="select" 
              value={primaryProjectId}
              onChange={(e) => setPrimaryProjectId(e.target.value)}
              style={{ width: '100%' }}
            >
              <option value="">Select ID</option>
              {PROJECT_ID_OPTIONS.map(id => <option key={id} value={id}>{id}</option>)}
            </select>
          </div>
        </div>
      </section>

      {/* Target & Allocation Details */}
      <section className="card" style={{ padding: '2rem', animation: 'fadeIn 0.4s ease-out' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <h3 style={{ fontSize: '1.125rem', margin: 0, fontWeight: 700 }}>Target Allocation Details</h3>
            {/* <div style={{ padding: '0.5rem 1rem', background: 'hsl(var(--primary) / 0.05)', borderRadius: 'var(--radius-md)', border: '1px solid hsl(var(--primary) / 0.1)' }}>
              <span style={{ fontSize: '0.75rem', color: 'hsl(var(--text-muted))', fontWeight: 700, textTransform: 'uppercase', marginRight: '0.75rem' }}>Available Pool Balance:</span>
              <span style={{ fontWeight: 800, color: 'hsl(var(--primary))' }}>Rs. {poolBalance.toLocaleString()}</span>
            </div> */}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
          <SelectField 
            label="[RA-2.2] Target Sector"
            value={rows[0].sector}
            onChange={(e) => updateRow(rows[0].id, { sector: e.target.value })}
            options={SECTOR_OPTIONS}
          />
          <SelectField 
            label="[RA-2.3] Project Name"
            value={rows[0].projectName}
            onChange={(e) => updateRow(rows[0].id, { projectName: e.target.value })}
            options={PROJECT_OPTIONS}
          />
          <SelectField 
            label="[RA-2.4] Grant Number"
            value={rows[0].grantNumber}
            onChange={(e) => updateRow(rows[0].id, { grantNumber: e.target.value })}
            options={GRANT_OPTIONS}
          />
          <SelectField 
            label="[RA-2.5] LOA Number"
            value={rows[0].loaNumber}
            onChange={(e) => updateRow(rows[0].id, { loaNumber: e.target.value })}
            options={['LOA-2024-001', 'LOA-2024-005']}
          />
          <SelectField 
            label="[RA-2.6] Object Code"
            value={rows[0].objectCode}
            onChange={(e) => updateRow(rows[0].id, { objectCode: e.target.value })}
            options={OBJECT_CODE_OPTIONS}
          />
          <InputField 
            label="[RA-2.7] Allocation Amount (Rs.)"
            type="number"
            placeholder="0.00"
            value={rows[0].amount}
            onChange={(e) => updateRow(rows[0].id, { amount: e.target.value })}
            style={{ fontWeight: 700, color: 'hsl(var(--primary))' }}
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', paddingTop: '1.5rem', borderTop: '1px solid hsl(var(--border))' }}>
          <div style={{ textAlign: 'right' }}>
            <p style={{ fontSize: '0.875rem', color: 'hsl(var(--text-muted))', marginBottom: '1rem' }}>
              Total Re-Appropriation: <span style={{ fontWeight: 700, color: 'hsl(var(--primary))' }}>Rs. {(parseFloat(rows[0].amount) || 0).toLocaleString()}</span>
            </p>
            <button 
              className="btn btn-primary" 
              onClick={handleSubmit}
              style={{ background: 'hsl(var(--success))', minWidth: '240px', padding: '0.875rem' }}
            >
              Submit Re-Appropriation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
