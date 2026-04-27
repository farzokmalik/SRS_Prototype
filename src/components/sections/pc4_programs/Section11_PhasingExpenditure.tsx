import React from 'react';
import { useForm } from '../../../context/FormContext';
import { Plus, Trash2 } from 'lucide-react';

export const Section11_PhasingExpenditure: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.pc4p.s11;

  const handleUpdate = (updates: any) => {
    updateSection('pc4p', { s11: { ...data, ...updates } });
  };

  const addYear = () => {
    handleUpdate({ 
      annualPhasing: [
        ...data.annualPhasing, 
        { 
          year: '', 
          pciPhasing: { total: '', fe: '' }, 
          psdpAllocation: { total: '', fe: '' }, 
          releases: { total: '', fe: '' }, 
          expenditure: { total: '', fe: '' } 
        }
      ] 
    });
  };

  const removeYear = (index: number) => {
    handleUpdate({ annualPhasing: data.annualPhasing.filter((_: any, i: number) => i !== index) });
  };

  const updateYear = (index: number, updates: any) => {
    const newPhasing = [...data.annualPhasing];
    newPhasing[index] = { ...newPhasing[index], ...updates };
    handleUpdate({ annualPhasing: newPhasing });
  };

  const calculateGrandTotals = () => {
    const totals = {
      pciPhasing: { total: 0, fe: 0 },
      psdpAllocation: { total: 0, fe: 0 },
      releases: { total: 0, fe: 0 },
      expenditure: { total: 0, fe: 0 }
    };

    data.annualPhasing.forEach((row: any) => {
      totals.pciPhasing.total += parseFloat(row.pciPhasing.total) || 0;
      totals.pciPhasing.fe += parseFloat(row.pciPhasing.fe) || 0;
      totals.psdpAllocation.total += parseFloat(row.psdpAllocation.total) || 0;
      totals.psdpAllocation.fe += parseFloat(row.psdpAllocation.fe) || 0;
      totals.releases.total += parseFloat(row.releases.total) || 0;
      totals.releases.fe += parseFloat(row.releases.fe) || 0;
      totals.expenditure.total += parseFloat(row.expenditure.total) || 0;
      totals.expenditure.fe += parseFloat(row.expenditure.fe) || 0;
    });

    return totals;
  };

  const totals = calculateGrandTotals();

  return (
    <div className="card">
      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginBottom: '1.5rem' }}>
        <button className="btn btn-secondary" onClick={addYear} style={{ padding: '0.4rem 0.8rem', fontSize: '0.875rem' }}>
          <Plus size={16} /> Add Year
        </button>
      </div>
      <div className="table-responsive">
        <table className="table" style={{ borderCollapse: 'separate', borderSpacing: '0.825rem 0.6rem', marginTop: '-0.6rem', marginLeft: '-0.825rem', width: 'calc(100% + 1.65rem)' }}>
          <thead>
            <tr>
              <th rowSpan={2} style={{ width: '12%', background: 'transparent', border: 'none', color: 'hsl(var(--text-muted))', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', paddingBottom: '0.5rem', textAlign: 'left' }}>Financial Year</th>
              <th colSpan={2} style={{ background: 'hsl(var(--accent) / 0.03)', border: 'none', color: 'hsl(var(--accent))', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', padding: '0.75rem 0', textAlign: 'center', borderBottom: '2px solid hsl(var(--accent) / 0.3)', borderRadius: 'var(--radius-sm) var(--radius-sm) 0 0' }}>PC-I Phasing</th>
              <th colSpan={2} style={{ background: 'hsl(var(--primary) / 0.03)', border: 'none', color: 'hsl(var(--primary))', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', padding: '0.75rem 0', textAlign: 'center', borderBottom: '2px solid hsl(var(--border))', borderRadius: 'var(--radius-sm) var(--radius-sm) 0 0' }}>PSDP Allocation</th>
              <th colSpan={2} style={{ background: 'hsl(var(--primary) / 0.03)', border: 'none', color: 'hsl(var(--primary))', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', padding: '0.75rem 0', textAlign: 'center', borderBottom: '2px solid hsl(var(--border))', borderRadius: 'var(--radius-sm) var(--radius-sm) 0 0' }}>Releases</th>
              <th colSpan={2} style={{ background: 'hsl(var(--success) / 0.03)', border: 'none', color: 'hsl(var(--success))', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', padding: '0.75rem 0', textAlign: 'center', borderBottom: '2px solid hsl(var(--success) / 0.3)', borderRadius: 'var(--radius-sm) var(--radius-sm) 0 0' }}>Expenditure</th>
              <th rowSpan={2} style={{ width: '6%', background: 'transparent', border: 'none', color: 'hsl(var(--text-muted))', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', paddingBottom: '0.5rem', textAlign: 'center' }}>Action</th>
            </tr>
            <tr>
              <th style={{ background: 'hsl(var(--accent) / 0.02)', border: 'none', color: 'hsl(var(--text-muted))', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', textAlign: 'center', padding: '0.4rem 0' }}>Total</th>
              <th style={{ background: 'hsl(var(--accent) / 0.02)', border: 'none', color: 'hsl(var(--text-muted))', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', textAlign: 'center', padding: '0.4rem 0' }}>FE</th>
              <th style={{ background: 'hsl(var(--primary) / 0.02)', border: 'none', color: 'hsl(var(--text-muted))', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', textAlign: 'center', padding: '0.4rem 0' }}>Total</th>
              <th style={{ background: 'hsl(var(--primary) / 0.02)', border: 'none', color: 'hsl(var(--text-muted))', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', textAlign: 'center', padding: '0.4rem 0' }}>FE</th>
              <th style={{ background: 'hsl(var(--primary) / 0.02)', border: 'none', color: 'hsl(var(--text-muted))', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', textAlign: 'center', padding: '0.4rem 0' }}>Total</th>
              <th style={{ background: 'hsl(var(--primary) / 0.02)', border: 'none', color: 'hsl(var(--text-muted))', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', textAlign: 'center', padding: '0.4rem 0' }}>FE</th>
              <th style={{ background: 'hsl(var(--success) / 0.02)', border: 'none', color: 'hsl(var(--text-muted))', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', textAlign: 'center', padding: '0.4rem 0' }}>Total</th>
              <th style={{ background: 'hsl(var(--success) / 0.02)', border: 'none', color: 'hsl(var(--text-muted))', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', textAlign: 'center', padding: '0.4rem 0' }}>FE</th>
            </tr>
          </thead>
          <tbody>
            {data.annualPhasing.length === 0 && (
              <tr><td colSpan={10} style={{ textAlign: 'center', padding: '3rem', color: 'hsl(var(--text-muted))', background: 'hsl(var(--bg-main))', borderRadius: 'var(--radius-md)', border: '1px dashed hsl(var(--border))' }}>No data entered</td></tr>
            )}
            {data.annualPhasing.map((row: any, idx: number) => (
              <tr key={idx}>
                <td style={{ padding: '0' }}><input className="input" style={{ background: '#fff', fontSize: '0.875rem' }} placeholder="2023-24" value={row.year} onChange={(e) => updateYear(idx, { year: e.target.value })} /></td>
                <td style={{ padding: '0' }}><input type="number" className="input" style={{ background: '#fff', textAlign: 'center', fontSize: '0.875rem' }} placeholder="0.00" value={row.pciPhasing.total} onChange={(e) => updateYear(idx, { pciPhasing: { ...row.pciPhasing, total: e.target.value } })} /></td>
                <td style={{ padding: '0' }}><input type="number" className="input" style={{ background: '#fff', textAlign: 'center', fontSize: '0.875rem' }} placeholder="0.00" value={row.pciPhasing.fe} onChange={(e) => updateYear(idx, { pciPhasing: { ...row.pciPhasing, fe: e.target.value } })} /></td>
                <td style={{ padding: '0' }}><input type="number" className="input" style={{ background: '#fff', textAlign: 'center', fontSize: '0.875rem' }} placeholder="0.00" value={row.psdpAllocation.total} onChange={(e) => updateYear(idx, { psdpAllocation: { ...row.psdpAllocation, total: e.target.value } })} /></td>
                <td style={{ padding: '0' }}><input type="number" className="input" style={{ background: '#fff', textAlign: 'center', fontSize: '0.875rem' }} placeholder="0.00" value={row.psdpAllocation.fe} onChange={(e) => updateYear(idx, { psdpAllocation: { ...row.psdpAllocation, fe: e.target.value } })} /></td>
                <td style={{ padding: '0' }}><input type="number" className="input" style={{ background: '#fff', textAlign: 'center', fontSize: '0.875rem' }} placeholder="0.00" value={row.releases.total} onChange={(e) => updateYear(idx, { releases: { ...row.releases, total: e.target.value } })} /></td>
                <td style={{ padding: '0' }}><input type="number" className="input" style={{ background: '#fff', textAlign: 'center', fontSize: '0.875rem' }} placeholder="0.00" value={row.releases.fe} onChange={(e) => updateYear(idx, { releases: { ...row.releases, fe: e.target.value } })} /></td>
                <td style={{ padding: '0' }}><input type="number" className="input" style={{ background: '#fff', textAlign: 'center', fontSize: '0.875rem' }} placeholder="0.00" value={row.expenditure.total} onChange={(e) => updateYear(idx, { expenditure: { ...row.expenditure, total: e.target.value } })} /></td>
                <td style={{ padding: '0' }}><input type="number" className="input" style={{ background: '#fff', textAlign: 'center', fontSize: '0.875rem' }} placeholder="0.00" value={row.expenditure.fe} onChange={(e) => updateYear(idx, { expenditure: { ...row.expenditure, fe: e.target.value } })} /></td>
                <td style={{ paddingLeft: '0.5rem', textAlign: 'center' }}>
                  <button 
                    className="btn btn-secondary" 
                    onClick={() => removeYear(idx)} 
                    style={{ 
                      color: 'hsl(var(--error))', 
                      padding: '0.5rem', 
                      height: '40px', 
                      width: '40px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: '#fff'
                    }}
                  >
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot style={{ borderTop: '1px solid hsl(var(--border))' }}>
            <tr style={{ background: 'hsl(var(--bg-main) / 0.5)', fontWeight: 700, color: 'hsl(var(--primary))' }}>
              <td style={{ padding: '0.75rem 0.5rem', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Grand Total</td>
              <td style={{ textAlign: 'center', padding: '0.75rem 0', color: 'hsl(var(--accent))', fontSize: '0.875rem' }}>{totals.pciPhasing.total.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</td>
              <td style={{ textAlign: 'center', padding: '0.75rem 0', color: 'hsl(var(--accent))', fontSize: '0.875rem' }}>{totals.pciPhasing.fe.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</td>
              <td style={{ textAlign: 'center', padding: '0.75rem 0', fontSize: '0.875rem' }}>{totals.psdpAllocation.total.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</td>
              <td style={{ textAlign: 'center', padding: '0.75rem 0', fontSize: '0.875rem' }}>{totals.psdpAllocation.fe.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</td>
              <td style={{ textAlign: 'center', padding: '0.75rem 0', fontSize: '0.875rem' }}>{totals.releases.total.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</td>
              <td style={{ textAlign: 'center', padding: '0.75rem 0', fontSize: '0.875rem' }}>{totals.releases.fe.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</td>
              <td style={{ textAlign: 'center', padding: '0.75rem 0', color: 'hsl(var(--success))', fontSize: '0.875rem' }}>{totals.expenditure.total.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</td>
              <td style={{ textAlign: 'center', padding: '0.75rem 0', color: 'hsl(var(--success))', fontSize: '0.875rem' }}>{totals.expenditure.fe.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};
