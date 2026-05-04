import React from 'react';
import { History, TrendingUp, X } from 'lucide-react';

import { useForm } from '../../context/FormContext';

export const PoolLedger: React.FC = () => {
  const { formData } = useForm();
  const [showReport, setShowReport] = React.useState(false);
  const [selectedTransaction, setSelectedTransaction] = React.useState<any>(null);
  const [showSingleReport, setShowSingleReport] = React.useState(false);
  
  const transactions = Array.isArray(formData.reappropriationTransactions) 
    ? formData.reappropriationTransactions 
    : [];

  const surrenders = transactions.filter(t => t.type === 'Surrender');
  const allocations = transactions.filter(t => t.type === 'Allocation');

  const formatDate = (dateString: string) => {
    if (!dateString) return '---';
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString; // Return original if invalid
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const SingleRowReport = ({ transaction }: { transaction: any }) => {
    if (!transaction) return null;
    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0,0,0,0.5)',
        zIndex: 10001,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        backdropFilter: 'blur(4px)'
      }} className="modal-overlay">
        <div className="card printable-area" style={{
          width: '100%',
          maxWidth: '800px',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '3rem',
          background: '#fff',
          position: 'relative',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        }}>
          <button 
            onClick={() => setShowSingleReport(false)}
            style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'transparent', border: 'none', cursor: 'pointer', color: 'hsl(var(--text-muted))' }}
          >
            <X size={24} />
          </button>

          {/* Formal Report Header */}
          <div style={{ textAlign: 'center', marginBottom: '3rem', borderBottom: '2px solid #000', paddingBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.5rem' }}>Government of the Punjab</h2>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.5rem' }}>Planning & Development Board</h3>
            <h4 style={{ fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase', color: 'hsl(var(--text-muted))' }}>Transaction Advice / Report</h4>
            <div style={{ marginTop: '1rem', fontSize: '0.75rem', display: 'flex', justifyContent: 'center', gap: '2rem' }}>
              <span><strong>Transaction ID:</strong> {transaction.id}</span>
              <span><strong>Date:</strong> {formatDate(transaction.date)}</span>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2.5rem' }}>
             <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <p style={{ fontSize: '0.75rem', color: 'hsl(var(--text-muted))', textTransform: 'uppercase', fontWeight: 700, margin: 0 }}>Type</p>
                <p style={{ fontSize: '1rem', fontWeight: 700, margin: 0, color: transaction.type === 'Surrender' ? 'hsl(var(--success))' : 'hsl(var(--error))' }}>{transaction.type}</p>
             </div>
             <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <p style={{ fontSize: '0.75rem', color: 'hsl(var(--text-muted))', textTransform: 'uppercase', fontWeight: 700, margin: 0 }}>Amount</p>
                <p style={{ fontSize: '1.25rem', fontWeight: 800, margin: 0 }}>Rs. {transaction.amount?.toLocaleString()}</p>
             </div>
             <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <p style={{ fontSize: '0.75rem', color: 'hsl(var(--text-muted))', textTransform: 'uppercase', fontWeight: 700, margin: 0 }}>Sector</p>
                <p style={{ fontSize: '1rem', fontWeight: 600, margin: 0 }}>{transaction.sector}</p>
             </div>
             <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <p style={{ fontSize: '0.75rem', color: 'hsl(var(--text-muted))', textTransform: 'uppercase', fontWeight: 700, margin: 0 }}>Object Code</p>
                <p style={{ fontSize: '1rem', fontWeight: 600, margin: 0 }}>{transaction.objectCode}</p>
             </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', padding: '1.5rem', background: 'hsl(var(--bg-main) / 0.5)', borderRadius: 'var(--radius-md)', marginBottom: '3rem' }}>
             <div>
                <p style={{ fontSize: '0.75rem', color: 'hsl(var(--text-muted))', textTransform: 'uppercase', fontWeight: 700, marginBottom: '0.5rem' }}>Source</p>
                <p style={{ fontSize: '0.9375rem', fontWeight: 600, margin: 0 }}>{transaction.source}</p>
             </div>
             <div>
                <p style={{ fontSize: '0.75rem', color: 'hsl(var(--text-muted))', textTransform: 'uppercase', fontWeight: 700, marginBottom: '0.5rem' }}>Target</p>
                <p style={{ fontSize: '0.9375rem', fontWeight: 600, margin: 0 }}>{transaction.target}</p>
             </div>
          </div>

          {/* Signature Section */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '4rem', marginTop: '4rem', textAlign: 'center' }}>
            <div style={{ borderTop: '1px solid #000', paddingTop: '0.5rem', fontSize: '0.75rem', fontWeight: 700 }}>Initiated By<br/><span style={{ fontWeight: 400, color: 'hsl(var(--text-muted))' }}>Section Officer</span></div>
            <div style={{ borderTop: '1px solid #000', paddingTop: '0.5rem', fontSize: '0.75rem', fontWeight: 700 }}>Authorized By<br/><span style={{ fontWeight: 400, color: 'hsl(var(--text-muted))' }}>Director General</span></div>
          </div>

          <div style={{ marginTop: '4rem', display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
            <button className="btn btn-secondary" onClick={() => setShowSingleReport(false)}>Close</button>
            <button className="btn btn-primary" onClick={() => window.print()} style={{ background: 'hsl(var(--success))' }}>Print Report</button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <style>
        {`
          @media print {
            /* Global reset */
            @page {
              margin: 0.5in;
              size: auto;
            }
            body, html {
              margin: 0 !important;
              padding: 0 !important;
              height: auto !important;
              overflow: visible !important;
              background: white !important;
            }
            /* Hide the entire app structure except the report path */
            /* We use visibility hidden on body and then selectively show */
            body * {
              visibility: hidden;
            }
            /* Selective visibility for the report and its ancestors */
            .fade-in, .modal-overlay, .printable-area, .printable-area * {
              visibility: visible;
            }
            /* Reset the ledger container to be a simple block */
            .fade-in {
              display: block !important;
              position: absolute !important;
              top: 0 !important;
              left: 0 !important;
              width: 100% !important;
              margin: 0 !important;
              padding: 0 !important;
            }
            /* Hide the ledger table itself */
            section.card {
              display: none !important;
            }
            /* Force modal to be top-level and transparent background */
            .modal-overlay {
              position: absolute !important;
              top: 0 !important;
              left: 0 !important;
              width: 100% !important;
              height: auto !important;
              background: white !important;
              backdrop-filter: none !important;
              display: block !important;
              z-index: 99999 !important;
              padding: 0 !important;
              margin: 0 !important;
            }
            /* The actual report card */
            .printable-area {
              position: relative !important;
              top: 0 !important;
              left: 0 !important;
              width: 100% !important;
              max-width: 100% !important;
              height: auto !important;
              max-height: none !important;
              overflow: visible !important;
              margin: 0 !important;
              padding: 1.5rem !important;
              background: white !important;
              box-shadow: none !important;
              border: none !important;
            }
            /* Hide all interactive elements */
            .btn, button, .no-print, .actions-column {
              display: none !important;
            }
          }
        `}
      </style>

      {/* Full Report Modal */}
      {showReport && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.5)',
          zIndex: 10000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          backdropFilter: 'blur(4px)'
        }} className="modal-overlay">
          <div className="card printable-area" style={{
            width: '100%',
            maxWidth: '1000px',
            maxHeight: '90vh',
            overflowY: 'auto',
            padding: '3rem',
            background: '#fff',
            position: 'relative',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          }}>
            <button 
              onClick={() => setShowReport(false)}
              style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'transparent', border: 'none', cursor: 'pointer', color: 'hsl(var(--text-muted))' }}
            >
              <X size={24} />
            </button>

            {/* Formal Report Header */}
            <div style={{ textAlign: 'center', marginBottom: '3rem', borderBottom: '2px solid #000', paddingBottom: '1.5rem' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.5rem' }}>Government of the Punjab</h2>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.5rem' }}>Planning & Development Board</h3>
              <h4 style={{ fontSize: '1rem', fontWeight: 600, textTransform: 'uppercase', color: 'hsl(var(--text-muted))' }}>Re-Appropriation (Surrender & Allocation) Statement</h4>
              <div style={{ marginTop: '1rem', fontSize: '0.875rem', display: 'flex', justifyContent: 'center', gap: '2rem' }}>
                <span><strong>Date:</strong> {new Date().toLocaleDateString()}</span>
                <span><strong>Fiscal Year:</strong> 2024-25</span>
              </div>
            </div>

            {/* Summary Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2.5rem' }}>
              <div style={{ padding: '1.5rem', background: 'hsl(var(--success) / 0.05)', borderRadius: 'var(--radius-md)', border: '1px solid hsl(var(--success) / 0.1)' }}>
                <p style={{ fontSize: '0.75rem', fontWeight: 700, color: 'hsl(var(--success))', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Total Surrenders (Savings)</p>
                <p style={{ fontSize: '1.5rem', fontWeight: 800 }}>Rs. {surrenders.reduce((acc, t) => acc + t.amount, 0).toLocaleString()}</p>
              </div>
              <div style={{ padding: '1.5rem', background: 'hsl(var(--error) / 0.05)', borderRadius: 'var(--radius-md)', border: '1px solid hsl(var(--error) / 0.1)' }}>
                <p style={{ fontSize: '0.75rem', fontWeight: 700, color: 'hsl(var(--error))', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Total Allocations (Excess)</p>
                <p style={{ fontSize: '1.5rem', fontWeight: 800 }}>Rs. {allocations.reduce((acc, t) => acc + t.amount, 0).toLocaleString()}</p>
              </div>
            </div>

            {/* Formal Table */}
            <div style={{ border: '1px solid #000', marginBottom: '3rem' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.8125rem' }}>
                <thead>
                  <tr style={{ background: '#f2f2f2', borderBottom: '1px solid #000' }}>
                    <th colSpan={4} style={{ padding: '0.75rem', textAlign: 'center', borderRight: '1.5px solid #000', fontWeight: 700, textTransform: 'uppercase' }}>Savings / Surrenders</th>
                    <th colSpan={4} style={{ padding: '0.75rem', textAlign: 'center', fontWeight: 700, textTransform: 'uppercase' }}>Excess / Allocations</th>
                  </tr>
                  <tr style={{ background: '#fafafa', borderBottom: '1.5px solid #000' }}>
                    <th style={{ padding: '0.6rem', borderRight: '1px solid #ddd' }}>Sector</th>
                    <th style={{ padding: '0.6rem', borderRight: '1px solid #ddd', width: '20%' }}>Scheme</th>
                    <th style={{ padding: '0.6rem', borderRight: '1px solid #ddd' }}>Object</th>
                    <th style={{ padding: '0.6rem', borderRight: '1.5px solid #000', textAlign: 'right' }}>Amount</th>
                    
                    <th style={{ padding: '0.6rem', borderRight: '1px solid #ddd' }}>Sector</th>
                    <th style={{ padding: '0.6rem', borderRight: '1px solid #ddd', width: '20%' }}>Scheme</th>
                    <th style={{ padding: '0.6rem', borderRight: '1px solid #ddd' }}>Object</th>
                    <th style={{ padding: '0.6rem', textAlign: 'right' }}>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: Math.max(surrenders.length, allocations.length, 1) }).map((_, idx) => (
                    <tr key={idx} style={{ borderBottom: '1px solid #ddd' }}>
                      <td style={{ padding: '0.6rem', borderRight: '1px solid #ddd' }}>{surrenders[idx]?.sector || ''}</td>
                      <td style={{ padding: '0.6rem', borderRight: '1px solid #ddd', fontSize: '0.75rem' }}>{surrenders[idx]?.source || ''}</td>
                      <td style={{ padding: '0.6rem', borderRight: '1px solid #ddd' }}>{surrenders[idx]?.objectCode || ''}</td>
                      <td style={{ padding: '0.6rem', borderRight: '1.5px solid #000', textAlign: 'right', fontWeight: 600 }}>
                        {surrenders[idx] ? surrenders[idx].amount.toLocaleString() : ''}
                      </td>
                      
                      <td style={{ padding: '0.6rem', borderRight: '1px solid #ddd' }}>{allocations[idx]?.sector || ''}</td>
                      <td style={{ padding: '0.6rem', borderRight: '1px solid #ddd', fontSize: '0.75rem' }}>{allocations[idx]?.target || ''}</td>
                      <td style={{ padding: '0.6rem', borderRight: '1px solid #ddd' }}>{allocations[idx]?.objectCode || ''}</td>
                      <td style={{ padding: '0.6rem', textAlign: 'right', fontWeight: 600 }}>
                        {allocations[idx] ? allocations[idx].amount.toLocaleString() : ''}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Signature Section */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4rem', marginTop: '4rem', textAlign: 'center' }}>
              <div style={{ borderTop: '1px solid #000', paddingTop: '0.5rem', fontSize: '0.75rem', fontWeight: 700 }}>Prepared By<br/><span style={{ fontWeight: 400, color: 'hsl(var(--text-muted))' }}>Section Officer</span></div>
              <div style={{ borderTop: '1px solid #000', paddingTop: '0.5rem', fontSize: '0.75rem', fontWeight: 700 }}>Verified By<br/><span style={{ fontWeight: 400, color: 'hsl(var(--text-muted))' }}>Deputy Director</span></div>
              <div style={{ borderTop: '1px solid #000', paddingTop: '0.5rem', fontSize: '0.75rem', fontWeight: 700 }}>Approved By<br/><span style={{ fontWeight: 400, color: 'hsl(var(--text-muted))' }}>Director General</span></div>
            </div>

            <div style={{ marginTop: '4rem', display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
              <button className="btn btn-secondary" onClick={() => setShowReport(false)}>Close Preview</button>
              <button className="btn btn-primary" onClick={() => window.print()} style={{ background: 'hsl(var(--success))' }}>Print Report</button>
            </div>
          </div>
        </div>
      )}

      {/* Single Row Report Modal */}
      {showSingleReport && <SingleRowReport transaction={selectedTransaction} />}

      {/* Ledger Table */}
      <section className="card" style={{ padding: '0' }}>
        <div style={{ padding: '1.5rem', borderBottom: '1px solid hsl(var(--border))', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ width: '32px', height: '32px', background: 'hsl(var(--accent-soft))', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'hsl(var(--accent))' }}>
              <History size={18} />
            </div>
            <h3 style={{ fontSize: '1.125rem', margin: 0, fontWeight: 700 }}>Pool Ledger (In-flow & Out-flow)</h3>
          </div>
          
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button 
              className="btn btn-primary" 
              onClick={() => setShowReport(true)}
              style={{ fontSize: '0.75rem', padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'hsl(var(--success))' }}
            >
              <TrendingUp size={14} /> Generate Full Report
            </button>
          </div>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: 'hsl(var(--bg-main))' }}>
                <th style={{ padding: '1rem 1.5rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: 700, color: 'hsl(var(--text-muted))', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>Date</th>
                <th style={{ padding: '1rem 1.5rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: 700, color: 'hsl(var(--text-muted))', textTransform: 'uppercase' }}>Type</th>
                <th style={{ padding: '1rem 1.5rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: 700, color: 'hsl(var(--text-muted))', textTransform: 'uppercase' }}>Sector</th>
                <th style={{ padding: '1rem 1.5rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: 700, color: 'hsl(var(--text-muted))', textTransform: 'uppercase' }}>Object Code</th>
                <th style={{ padding: '1rem 1.5rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: 700, color: 'hsl(var(--text-muted))', textTransform: 'uppercase' }}>Source</th>
                <th style={{ padding: '1rem 1.5rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: 700, color: 'hsl(var(--text-muted))', textTransform: 'uppercase' }}>Target</th>
                <th style={{ padding: '1rem 1.5rem', textAlign: 'right', fontSize: '0.75rem', fontWeight: 700, color: 'hsl(var(--text-muted))', textTransform: 'uppercase' }}>Amount</th>
                <th style={{ padding: '1rem 1.5rem', textAlign: 'center', fontSize: '0.75rem', fontWeight: 700, color: 'hsl(var(--text-muted))', textTransform: 'uppercase' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {[...transactions].reverse().map((item) => (
                <tr key={item.id} style={{ borderBottom: '1px solid hsl(var(--border))' }}>
                  <td style={{ padding: '1.25rem 1.5rem', fontSize: '0.875rem', whiteSpace: 'nowrap' }}>{formatDate(item.date)}</td>
                  <td style={{ padding: '1.25rem 1.5rem' }}>
                    <span style={{ 
                      fontSize: '0.75rem', 
                      fontWeight: 700, 
                      padding: '0.25rem 0.6rem', 
                      borderRadius: 'var(--radius-sm)',
                      background: item.type === 'Surrender' ? 'hsl(var(--success) / 0.1)' : 'hsl(var(--error) / 0.1)',
                      color: item.type === 'Surrender' ? 'hsl(var(--success))' : 'hsl(var(--error))',
                    }}>
                      {item.type}
                    </span>
                  </td>
                  <td style={{ padding: '1.25rem 1.5rem', fontSize: '0.875rem', fontWeight: 600, color: 'hsl(var(--primary))' }}>
                    {item.sector || 'N/A'}
                  </td>
                  <td style={{ padding: '1.25rem 1.5rem', fontSize: '0.8125rem', color: 'hsl(var(--text-muted))' }}>
                    {item.objectCode || '---'}
                  </td>
                  <td style={{ padding: '1.25rem 1.5rem', fontSize: '0.875rem', fontWeight: 500 }}>{item.source}</td>
                  <td style={{ padding: '1.25rem 1.5rem', fontSize: '0.875rem', fontWeight: 500 }}>{item.target}</td>
                  <td style={{ padding: '1.25rem 1.5rem', textAlign: 'right', fontSize: '0.875rem', fontWeight: 700, color: item.type === 'Surrender' ? 'hsl(var(--success))' : 'hsl(var(--error))' }}>
                    {item.type === 'Surrender' ? '+' : '-'} Rs. {item.amount.toLocaleString()}
                  </td>
                  <td style={{ padding: '1.25rem 1.5rem', textAlign: 'center' }}>
                    <button 
                      onClick={() => {
                        setSelectedTransaction(item);
                        setShowSingleReport(true);
                      }}
                      className="btn btn-secondary" 
                      style={{ fontSize: '0.7rem', padding: '0.4rem 0.75rem', fontWeight: 700 }}
                    >
                      Report
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};
