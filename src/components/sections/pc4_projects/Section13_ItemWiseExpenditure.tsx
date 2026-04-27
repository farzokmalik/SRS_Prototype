import React from 'react';
import { useForm } from '../../../context/FormContext';
import { Plus, Trash2 } from 'lucide-react';

export const Section13_ItemWiseExpenditure: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.pc4.s13;

  const handleUpdate = (updates: any) => {
    updateSection('pc4', { s13: { ...data, ...updates } });
  };

  const addRow = () => {
    handleUpdate({ 
      itemWiseExpenditure: [
        ...(data.itemWiseExpenditure || []), 
        { item: '', pciEstimate: { local: '', fec: '', total: '' }, actual: { local: '', fec: '', total: '' } }
      ] 
    });
  };

  const removeRow = (index: number) => {
    handleUpdate({ itemWiseExpenditure: data.itemWiseExpenditure.filter((_: any, i: number) => i !== index) });
  };

  const updateRow = (index: number, updates: any) => {
    const newItems = [...data.itemWiseExpenditure];
    newItems[index] = { ...newItems[index], ...updates };
    handleUpdate({ itemWiseExpenditure: newItems });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginBottom: '1.5rem' }}>
          <button className="btn btn-secondary" onClick={addRow} style={{ padding: '0.4rem 0.8rem', fontSize: '0.875rem' }}>
            <Plus size={16} /> Add Item
          </button>
        </div>
        <div className="table-responsive">
          <table className="table" style={{ borderCollapse: 'separate', borderSpacing: '0.6rem 0.6rem', marginTop: '-0.6rem', marginLeft: '-0.6rem', width: 'calc(100% + 1.2rem)' }}>
            <thead>
              <tr>
                <th rowSpan={2} style={{ width: '22%', background: 'transparent', border: 'none', color: 'hsl(var(--text-muted))', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', paddingBottom: '0.5rem', textAlign: 'left' }}>Item Description</th>
                <th colSpan={3} style={{ background: 'transparent', border: 'none', color: 'hsl(var(--accent))', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', paddingBottom: '0.5rem', textAlign: 'center', borderBottom: '2px solid hsl(var(--accent) / 0.2)' }}>PC-I estimate</th>
                <th colSpan={3} style={{ background: 'transparent', border: 'none', color: 'hsl(var(--success))', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', paddingBottom: '0.5rem', textAlign: 'center', borderBottom: '2px solid hsl(var(--success) / 0.2)' }}>Actual Expenditure</th>
                <th rowSpan={2} style={{ width: '6%', background: 'transparent', border: 'none', color: 'hsl(var(--text-muted))', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', paddingBottom: '0.5rem', textAlign: 'center' }}>Action</th>
              </tr>
              <tr>
                <th style={{ background: 'transparent', border: 'none', color: 'hsl(var(--text-muted))', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', textAlign: 'center', padding: '0.5rem 0' }}>Local</th>
                <th style={{ background: 'transparent', border: 'none', color: 'hsl(var(--text-muted))', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', textAlign: 'center', padding: '0.5rem 0' }}>FEC</th>
                <th style={{ background: 'transparent', border: 'none', color: 'hsl(var(--text-muted))', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', textAlign: 'center', padding: '0.5rem 0' }}>Total</th>
                <th style={{ background: 'transparent', border: 'none', color: 'hsl(var(--text-muted))', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', textAlign: 'center', padding: '0.5rem 0' }}>Local</th>
                <th style={{ background: 'transparent', border: 'none', color: 'hsl(var(--text-muted))', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', textAlign: 'center', padding: '0.5rem 0' }}>FEC</th>
                <th style={{ background: 'transparent', border: 'none', color: 'hsl(var(--text-muted))', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', textAlign: 'center', padding: '0.5rem 0' }}>Total</th>
              </tr>
            </thead>
            <tbody>
              {data.itemWiseExpenditure.length === 0 && (
                <tr><td colSpan={8} style={{ textAlign: 'center', padding: '3rem', color: 'hsl(var(--text-muted))', background: 'hsl(var(--bg-main))', borderRadius: 'var(--radius-md)', border: '1px dashed hsl(var(--border))' }}>No data entered</td></tr>
              )}
              {data.itemWiseExpenditure.map((row: any, idx: number) => (
                <tr key={idx}>
                  <td style={{ paddingRight: '0.5rem' }}><input className="input" style={{ background: '#fff' }} placeholder="e.g. Machinery" value={row.item} onChange={(e) => updateRow(idx, { item: e.target.value })} /></td>
                  <td style={{ padding: '0 0.25rem' }}><input type="number" className="input" style={{ background: '#fff', textAlign: 'center' }} placeholder="0.00" value={row.pciEstimate.local} onChange={(e) => updateRow(idx, { pciEstimate: { ...row.pciEstimate, local: e.target.value } })} /></td>
                  <td style={{ padding: '0 0.25rem' }}><input type="number" className="input" style={{ background: '#fff', textAlign: 'center' }} placeholder="0.00" value={row.pciEstimate.fec} onChange={(e) => updateRow(idx, { pciEstimate: { ...row.pciEstimate, fec: e.target.value } })} /></td>
                  <td style={{ padding: '0 0.25rem' }}><input type="number" className="input" style={{ background: '#fff', textAlign: 'center' }} placeholder="0.00" value={row.pciEstimate.total} onChange={(e) => updateRow(idx, { pciEstimate: { ...row.pciEstimate, total: e.target.value } })} /></td>
                  <td style={{ padding: '0 0.25rem' }}><input type="number" className="input" style={{ background: '#fff', textAlign: 'center' }} placeholder="0.00" value={row.actual.local} onChange={(e) => updateRow(idx, { actual: { ...row.actual, local: e.target.value } })} /></td>
                  <td style={{ padding: '0 0.25rem' }}><input type="number" className="input" style={{ background: '#fff', textAlign: 'center' }} placeholder="0.00" value={row.actual.fec} onChange={(e) => updateRow(idx, { actual: { ...row.actual, fec: e.target.value } })} /></td>
                  <td style={{ padding: '0 0.25rem' }}><input type="number" className="input" style={{ background: '#fff', textAlign: 'center' }} placeholder="0.00" value={row.actual.total} onChange={(e) => updateRow(idx, { actual: { ...row.actual, total: e.target.value } })} /></td>
                  <td style={{ paddingLeft: '0.5rem', textAlign: 'center' }}>
                    <button 
                      className="btn btn-secondary" 
                      onClick={() => removeRow(idx)} 
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
          </table>
        </div>
      </div>

      <div className="card">
        <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '1.25rem' }}>Climate Co-benefits Sub-table</h3>
        <div className="table-responsive">
          <table className="table" style={{ borderCollapse: 'separate', borderSpacing: '1rem 0.5rem', marginTop: '-0.5rem', marginLeft: '-1rem', width: 'calc(100% + 1rem)' }}>
            <thead>
              <tr>
                <th style={{ background: 'transparent', border: 'none', color: 'hsl(var(--text-muted))', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', paddingBottom: '0.5rem', textAlign: 'left' }}>Climate Indicator</th>
                <th style={{ background: 'transparent', border: 'none', color: 'hsl(var(--text-muted))', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', paddingBottom: '0.5rem', textAlign: 'left' }}>Estimated Cost</th>
                <th style={{ background: 'transparent', border: 'none', color: 'hsl(var(--text-muted))', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', paddingBottom: '0.5rem', textAlign: 'left' }}>Actual Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ fontWeight: 600, color: 'hsl(var(--text-main))' }}>Adaptation</td>
                <td><input type="number" className="input" style={{ background: '#fff' }} placeholder="0.00" value={data.adaptationEstimated} onChange={(e) => handleUpdate({ adaptationEstimated: e.target.value })} /></td>
                <td><input type="number" className="input" style={{ background: '#fff' }} placeholder="0.00" value={data.adaptationActual} onChange={(e) => handleUpdate({ adaptationActual: e.target.value })} /></td>
              </tr>
              <tr>
                <td style={{ fontWeight: 600, color: 'hsl(var(--text-main))' }}>Mitigation</td>
                <td><input type="number" className="input" style={{ background: '#fff' }} placeholder="0.00" value={data.mitigationEstimated} onChange={(e) => handleUpdate({ mitigationEstimated: e.target.value })} /></td>
                <td><input type="number" className="input" style={{ background: '#fff' }} placeholder="0.00" value={data.mitigationActual} onChange={(e) => handleUpdate({ mitigationActual: e.target.value })} /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
