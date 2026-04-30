import React from 'react';
import { TrendingUp, BookOpen, TrendingDown } from 'lucide-react';
import { useForm } from '../../context/FormContext';

export const PoolStatsCards: React.FC = () => {
  const { formData } = useForm();
  const transactions = Array.isArray(formData.reappropriationTransactions) 
    ? formData.reappropriationTransactions 
    : [];

  const totalSurrenders = transactions
    .filter((t: any) => t.type === 'Surrender')
    .reduce((acc: number, curr: any) => acc + curr.amount, 0);
    
  const totalAllocations = transactions
    .filter((t: any) => t.type === 'Allocation')
    .reduce((acc: number, curr: any) => acc + curr.amount, 0);
    
  const currentBalance = totalSurrenders - totalAllocations;

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
      {/* Total Surrenders Card (Now First) */}
      <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
        <div style={{ width: '48px', height: '48px', background: 'hsl(var(--success) / 0.1)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'hsl(var(--success))' }}>
          <TrendingUp size={24} />
        </div>
        <div>
          <p style={{ fontSize: '0.75rem', fontWeight: 700, color: 'hsl(var(--text-muted))', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Total Surrenders</p>
          <h3 style={{ fontSize: '1.5rem', margin: 0 }}>Rs. {totalSurrenders.toLocaleString()}</h3>
        </div>
      </div>

      {/* Current Balance Card (Now Second) */}
      <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
        <div style={{ width: '48px', height: '48px', background: 'hsl(var(--accent-soft))', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'hsl(var(--accent))' }}>
          <BookOpen size={24} />
        </div>
        <div>
          <p style={{ fontSize: '0.75rem', fontWeight: 700, color: 'hsl(var(--text-muted))', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Current Pool Balance</p>
          <h3 style={{ fontSize: '1.5rem', margin: 0 }}>Rs. {currentBalance.toLocaleString()}</h3>
        </div>
      </div>

      {/* Total Allocations Card */}
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
  );
};
