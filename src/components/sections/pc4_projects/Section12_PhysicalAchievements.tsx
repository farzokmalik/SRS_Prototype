import React from 'react';
import { useForm } from '../../../context/FormContext';
import { Plus, Trash2 } from 'lucide-react';

export const Section12_PhysicalAchievements: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.pc4.s12;

  const handleUpdate = (updates: any) => {
    updateSection('pc4', { s12: { ...data, ...updates } });
  };

  const addRow = () => {
    handleUpdate({ physicalAchievements: [...(data.physicalAchievements || []), { item: '', unit: '', planned: '', actual: '' }] });
  };

  const removeRow = (index: number) => {
    handleUpdate({ physicalAchievements: data.physicalAchievements.filter((_: any, i: number) => i !== index) });
  };

  const updateRow = (index: number, updates: any) => {
    const newItems = [...data.physicalAchievements];
    newItems[index] = { ...newItems[index], ...updates };
    handleUpdate({ physicalAchievements: newItems });
  };

  return (
    <div className="card">
      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginBottom: '1.5rem' }}>
        <button className="btn btn-secondary" onClick={addRow} style={{ padding: '0.4rem 0.8rem', fontSize: '0.875rem' }}>
          <Plus size={16} /> Add Item
        </button>
      </div>
      <div className="table-responsive">
        <table className="table" style={{ borderCollapse: 'separate', borderSpacing: '1rem 0.75rem', marginTop: '-0.75rem', marginLeft: '-1rem', width: 'calc(100% + 1rem)' }}>
          <thead>
            <tr>
              <th style={{ width: '40%', background: 'transparent', border: 'none', color: 'hsl(var(--text-muted))', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', paddingBottom: '0.5rem', textAlign: 'left' }}>Items As per PC-I</th>
              <th style={{ width: '15%', background: 'transparent', border: 'none', color: 'hsl(var(--text-muted))', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', paddingBottom: '0.5rem', textAlign: 'left' }}>Unit</th>
              <th style={{ width: '17.5%', background: 'transparent', border: 'none', color: 'hsl(var(--text-muted))', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', paddingBottom: '0.5rem', textAlign: 'left' }}>Planned Qty</th>
              <th style={{ width: '17.5%', background: 'transparent', border: 'none', color: 'hsl(var(--text-muted))', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', paddingBottom: '0.5rem', textAlign: 'left' }}>Actual Qty</th>
              <th style={{ width: '10%', background: 'transparent', border: 'none', color: 'hsl(var(--text-muted))', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', paddingBottom: '0.5rem', textAlign: 'center' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.physicalAchievements.length === 0 && (
              <tr><td colSpan={5} style={{ textAlign: 'center', padding: '3rem', color: 'hsl(var(--text-muted))', background: 'hsl(var(--bg-main))', borderRadius: 'var(--radius-md)', border: '1px dashed hsl(var(--border))' }}>No items recorded</td></tr>
            )}
            {data.physicalAchievements.map((item: any, idx: number) => (
              <tr key={idx}>
                <td style={{ padding: '0 0.5rem 0 0' }}><input className="input" style={{ background: '#fff' }} placeholder="e.g. Civil Works - Building A" value={item.item} onChange={(e) => updateRow(idx, { item: e.target.value })} /></td>
                <td style={{ padding: '0 0.5rem' }}><input className="input" style={{ background: '#fff' }} placeholder="e.g. Sq Ft" value={item.unit} onChange={(e) => updateRow(idx, { unit: e.target.value })} /></td>
                <td style={{ padding: '0 0.5rem' }}><input type="number" className="input" style={{ background: '#fff' }} placeholder="0" value={item.planned} onChange={(e) => updateRow(idx, { planned: e.target.value })} /></td>
                <td style={{ padding: '0 0.5rem' }}><input type="number" className="input" style={{ background: '#fff' }} placeholder="0" value={item.actual} onChange={(e) => updateRow(idx, { actual: e.target.value })} /></td>
                <td style={{ padding: '0 0 0 0.5rem', textAlign: 'center' }}>
                  <button 
                    className="btn btn-secondary" 
                    onClick={() => removeRow(idx)} 
                    style={{ 
                      color: 'hsl(var(--error))', 
                      padding: '0.5rem', 
                      height: '42px', 
                      width: '42px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: '#fff'
                    }}
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
