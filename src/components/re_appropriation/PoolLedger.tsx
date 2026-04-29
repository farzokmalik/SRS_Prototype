import React from 'react';
import { History, TrendingUp, TrendingDown, BookOpen } from 'lucide-react';

import { useForm } from '../../context/FormContext';

export const PoolLedger: React.FC = () => {
  const { formData } = useForm();
  const transactions = Array.isArray(formData.reappropriationTransactions) 
    ? formData.reappropriationTransactions 
    : [];

  // Calculate stats from dynamic data
  const totalSurrenders = transactions
    .filter((t: any) => t.type === 'Surrender')
    .reduce((acc: number, curr: any) => acc + curr.amount, 0);
    
  const totalAllocations = transactions
    .filter((t: any) => t.type === 'Allocation')
    .reduce((acc: number, curr: any) => acc + curr.amount, 0);
    
  const currentBalance = totalSurrenders - totalAllocations;

  return (
    <div className="fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Stats Overview */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
        <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <div style={{ width: '48px', height: '48px', background: 'hsl(var(--accent-soft))', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'hsl(var(--accent))' }}>
            <BookOpen size={24} />
          </div>
          <div>
            <p style={{ fontSize: '0.75rem', fontWeight: 700, color: 'hsl(var(--text-muted))', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Current Pool Balance</p>
            <h3 style={{ fontSize: '1.5rem', margin: 0 }}>Rs. {currentBalance.toLocaleString()}</h3>
          </div>
        </div>
        <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <div style={{ width: '48px', height: '48px', background: 'hsl(var(--success) / 0.1)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'hsl(var(--success))' }}>
            <TrendingUp size={24} />
          </div>
          <div>
            <p style={{ fontSize: '0.75rem', fontWeight: 700, color: 'hsl(var(--text-muted))', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Total Surrenders</p>
            <h3 style={{ fontSize: '1.5rem', margin: 0 }}>Rs. {totalSurrenders.toLocaleString()}</h3>
          </div>
        </div>
        <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <div style={{ width: '48px', height: '48px', background: 'hsl(var(--error) / 0.1)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'hsl(var(--error))' }}>
            <TrendingDown size={24} />
          </div>
          <div>
            <p style={{ fontSize: '0.75rem', fontWeight: 700, color: 'hsl(var(--text-muted))', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Total Allocations</p>
            <h3 style={{ fontSize: '1.5rem', margin: 0 }}>Rs. {totalAllocations.toLocaleString()}</h3>
          </div>
        </div>
      </div>

      {/* Ledger Table */}
      <section className="card" style={{ padding: '0' }}>
        <div style={{ padding: '1.5rem', borderBottom: '1px solid hsl(var(--border))', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <History size={20} color="hsl(var(--accent))" />
            <h3 style={{ fontSize: '1.125rem', margin: 0 }}>Pool Ledger (In-flow & Out-flow)</h3>
          </div>
         
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: 'hsl(var(--bg-main))' }}>
                <th style={{ padding: '1rem 1.5rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: 700, color: 'hsl(var(--text-muted))', textTransform: 'uppercase' }}>Date</th>
                <th style={{ padding: '1rem 1.5rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: 700, color: 'hsl(var(--text-muted))', textTransform: 'uppercase' }}>Type</th>
                <th style={{ padding: '1rem 1.5rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: 700, color: 'hsl(var(--text-muted))', textTransform: 'uppercase' }}>Source</th>
                <th style={{ padding: '1rem 1.5rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: 700, color: 'hsl(var(--text-muted))', textTransform: 'uppercase' }}>Target</th>
                <th style={{ padding: '1rem 1.5rem', textAlign: 'right', fontSize: '0.75rem', fontWeight: 700, color: 'hsl(var(--text-muted))', textTransform: 'uppercase' }}>Amount</th>
                <th style={{ padding: '1rem 1.5rem', textAlign: 'center', fontSize: '0.75rem', fontWeight: 700, color: 'hsl(var(--text-muted))', textTransform: 'uppercase' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {[...transactions].reverse().map((item) => (
                <tr key={item.id} style={{ borderBottom: '1px solid hsl(var(--border))' }}>
                  <td style={{ padding: '1.25rem 1.5rem', fontSize: '0.875rem' }}>{item.date}</td>
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
                  <td style={{ padding: '1.25rem 1.5rem', fontSize: '0.875rem', fontWeight: 500 }}>{item.source}</td>
                  <td style={{ padding: '1.25rem 1.5rem', fontSize: '0.875rem', fontWeight: 500 }}>{item.target}</td>
                  <td style={{ padding: '1.25rem 1.5rem', textAlign: 'right', fontSize: '0.875rem', fontWeight: 700, color: item.type === 'Surrender' ? 'hsl(var(--success))' : 'hsl(var(--error))' }}>
                    {item.type === 'Surrender' ? '+' : '-'} Rs. {item.amount.toLocaleString()}
                  </td>
                  <td style={{ padding: '1.25rem 1.5rem', textAlign: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', fontSize: '0.75rem', fontWeight: 600, color: 'hsl(var(--success))' }}>
                      <div style={{ width: '6px', height: '6px', borderRadius: 'var(--radius-full)', background: 'hsl(var(--success))' }} />
                      {item.status}
                    </div>
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
