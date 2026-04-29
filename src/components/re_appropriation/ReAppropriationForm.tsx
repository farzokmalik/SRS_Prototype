import React, { useState } from 'react';
import { Plus, Trash2, Database, Target, CheckCircle2, X } from 'lucide-react';
import { SelectField } from '../ui/FormElements';
import { useForm } from '../../context/FormContext';

interface TargetRow {
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

export const ReAppropriationForm: React.FC = () => {
  const { formData, setTransactions, setSection } = useForm();
  const [showTable, setShowTable] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [lastAmount, setLastAmount] = useState(0);
  
  // Dynamically calculate pool options from global transactions
  const transactions = Array.isArray(formData.reappropriationTransactions) 
    ? formData.reappropriationTransactions 
    : [];

  // Aggregate balances by Pool/Target
  const poolBalances = transactions.reduce((acc: any, t: any) => {
    const poolName = t.type === 'Surrender' ? t.target : t.source;
    if (!acc[poolName]) acc[poolName] = 0;
    
    if (t.type === 'Surrender') {
      acc[poolName] += t.amount;
    } else {
      acc[poolName] -= t.amount;
    }
    return acc;
  }, {});

  const dynamicPoolOptions = Object.entries(poolBalances)
    .filter(([_, bal]: any) => bal > 0)
    .map(([name, bal]: any) => ({
      value: name,
      label: `${name} - [Bal: Rs. ${bal.toLocaleString()}]`
    }));

  const [selectedPool, setSelectedPool] = useState(dynamicPoolOptions[0]?.value || '');
  const [rows, setRows] = useState<TargetRow[]>([
    {
      id: '1',
      sector: 'Health',
      projectName: 'Healthcare Infrastructure Expansion',
      grantNumber: 'Grant 21',
      loaNumber: 'LOA-2024-005',
      objectCode: 'A13001 - Transport',
      amount: '5000000',
    }
  ]);
  
  const handleGetDetails = () => {
    setShowTable(true);
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
    if (rows.length > 1) {
      setRows(rows.filter(r => r.id !== id));
    }
  };

  const updateRow = (id: string, updates: Partial<TargetRow>) => {
    setRows(rows.map(r => r.id === id ? { ...r, ...updates } : r));
  };

  const handleSubmit = () => {
    const totalAmount = rows.reduce((acc, curr) => acc + (parseFloat(curr.amount) || 0), 0);
    if (totalAmount <= 0) return;

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
        status: 'Completed'
      }));

    setTransactions([...transactions, ...newTransactions]);
    setLastAmount(totalAmount);
    setShowSuccess(true);
    setShowTable(false);
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
                  setSection(2); // Navigate to Ledger
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

      {/* Pool Selection */}
      <section className="card">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
          <div style={{ width: '32px', height: '32px', background: 'hsl(var(--accent-soft))', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'hsl(var(--accent))' }}>
            <Database size={18} />
          </div>
          <h3 style={{ fontSize: '1.125rem', margin: 0 }}>Pool Selection</h3>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '1.5rem', alignItems: 'flex-end', maxWidth: '800px' }}>
          <SelectField 
            label="Source Pool" 
            value={selectedPool}
            onChange={(e) => setSelectedPool(e.target.value)}
            options={dynamicPoolOptions}
            description="Select the source pool categorized by Funding Type, Grant, and Object Code."
            required
          />
          <button 
            className="btn btn-primary" 
            onClick={handleGetDetails}
            style={{ height: '42px', marginBottom: '1.5rem', minWidth: '160px' }}
          >
            Get Pool Details
          </button>
        </div>
      </section>

      {/* Target & Allocation Details */}
      {showTable && (
        <section className="card" style={{ padding: '2rem', animation: 'fadeIn 0.4s ease-out' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
          <div style={{ width: '32px', height: '32px', background: 'hsl(var(--accent-soft))', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'hsl(var(--accent))' }}>
            <Target size={18} />
          </div>
          <h3 style={{ fontSize: '1.125rem', margin: 0 }}>Target Allocation Details</h3>
        </div>

        <div className="table-responsive" style={{ overflowX: 'auto' }}>
          <table className="table" style={{ width: '100%', minWidth: '1000px', borderCollapse: 'separate', borderSpacing: '0 0.75rem' }}>
            <thead>
              <tr>
                <th style={{ textAlign: 'left', fontSize: '0.75rem', color: 'hsl(var(--text-muted))', textTransform: 'uppercase', padding: '0 1rem' }}>Target Sector</th>
                <th style={{ textAlign: 'left', fontSize: '0.75rem', color: 'hsl(var(--text-muted))', textTransform: 'uppercase', padding: '0 1rem' }}>Project Name</th>
                <th style={{ textAlign: 'left', fontSize: '0.75rem', color: 'hsl(var(--text-muted))', textTransform: 'uppercase', padding: '0 1rem' }}>Grant / LOA / Object</th>
                <th style={{ textAlign: 'left', fontSize: '0.75rem', color: 'hsl(var(--text-muted))', textTransform: 'uppercase', padding: '0 1rem' }}>Allocation Amount</th>
                <th style={{ textAlign: 'center', fontSize: '0.75rem', color: 'hsl(var(--text-muted))', textTransform: 'uppercase', padding: '0 1rem' }}></th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.id} style={{ background: '#fff', boxShadow: 'var(--shadow-sm)' }}>
                  <td style={{ padding: '1rem', borderTopLeftRadius: 'var(--radius-md)', borderBottomLeftRadius: 'var(--radius-md)', width: '200px' }}>
                    <select 
                      className="select" 
                      value={row.sector}
                      onChange={(e) => updateRow(row.id, { sector: e.target.value })}
                      style={{ fontSize: '0.8125rem' }}
                    >
                      <option value="">Select Sector</option>
                      {SECTOR_OPTIONS.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </td>
                  <td style={{ padding: '1rem', width: '250px' }}>
                    <select 
                      className="select" 
                      value={row.projectName}
                      onChange={(e) => updateRow(row.id, { projectName: e.target.value })}
                      style={{ fontSize: '0.8125rem' }}
                    >
                      <option value="">Select Project</option>
                      {PROJECT_OPTIONS.map(p => <option key={p} value={p}>{p}</option>)}
                    </select>
                  </td>
                  <td style={{ padding: '1rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.5rem' }}>
                      <select className="select" style={{ fontSize: '0.75rem' }} value={row.grantNumber} onChange={(e) => updateRow(row.id, { grantNumber: e.target.value })}>
                        <option value="">Grant</option>
                        {GRANT_OPTIONS.map(g => <option key={g} value={g}>{g}</option>)}
                      </select>
                      <select className="select" style={{ fontSize: '0.75rem' }} value={row.loaNumber} onChange={(e) => updateRow(row.id, { loaNumber: e.target.value })}>
                        <option value="">LOA</option>
                        <option value="LOA-2024-001">LOA-2024-001</option>
                        <option value="LOA-2024-005">LOA-2024-005</option>
                      </select>
                      <select className="select" style={{ fontSize: '0.75rem' }} value={row.objectCode} onChange={(e) => updateRow(row.id, { objectCode: e.target.value })}>
                        <option value="">Object</option>
                        {OBJECT_CODE_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
                      </select>
                    </div>
                  </td>
                  <td style={{ padding: '1rem', width: '200px' }}>
                    <input 
                      type="number" 
                      className="input" 
                      placeholder="0.00"
                      value={row.amount}
                      onChange={(e) => updateRow(row.id, { amount: e.target.value })}
                      style={{ fontSize: '0.8125rem', fontWeight: 600 }}
                    />
                  </td>
                  <td style={{ padding: '1rem', borderTopRightRadius: 'var(--radius-md)', borderBottomRightRadius: 'var(--radius-md)', textAlign: 'center' }}>
                    <button 
                      onClick={() => removeRow(row.id)} 
                      className="btn btn-secondary" 
                      style={{ padding: '0.4rem', color: 'hsl(var(--error))', visibility: rows.length > 1 ? 'visible' : 'hidden' }}
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
              {/* Total Row */}
              <tr style={{ background: 'hsl(var(--bg-main) / 0.5)', borderRadius: 'var(--radius-md)' }}>
                <td colSpan={3} style={{ padding: '1rem', textAlign: 'right', fontWeight: 700, fontSize: '0.875rem' }}>
                  Total Allocation Amount:
                </td>
                <td style={{ padding: '1rem', fontWeight: 700, fontSize: '0.875rem', color: 'hsl(var(--primary))' }}>
                  Rs. {rows.reduce((acc, curr) => acc + (parseFloat(curr.amount) || 0), 0).toLocaleString()}
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <button onClick={addRow} className="btn btn-secondary" style={{ fontSize: '0.8125rem' }}>
            <Plus size={16} /> Add Multiple Rows
          </button>
          
          <div style={{ textAlign: 'right' }}>
            <p style={{ fontSize: '0.875rem', color: 'hsl(var(--text-muted))', marginBottom: '0.5rem' }}>
              Total Re-Appropriation: <span style={{ fontWeight: 700, color: 'hsl(var(--primary))' }}>Rs. {rows.reduce((acc, curr) => acc + (parseFloat(curr.amount) || 0), 0).toLocaleString()}</span>
            </p>
            <button 
              className="btn btn-primary" 
              onClick={handleSubmit}
              style={{ background: 'hsl(var(--success))', minWidth: '220px' }}
            >
              Submit Re-Appropriation
            </button>
          </div>
        </div>
        </section>
      )}
    </div>
  );
};
