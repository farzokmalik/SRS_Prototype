import React from 'react';
import { useForm } from '../../../context/FormContext';
import { Plus, Trash2 } from 'lucide-react';

export const Section16_ClimateCoBenefits: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.pc4p.s16;

  const handleUpdate = (updates: any) => {
    updateSection('pc4p', { s16: { ...data, ...updates } });
  };

  const addRow = (type: 'adaptation' | 'mitigation') => {
    handleUpdate({ [type]: [...(data[type] || []), { description: '', cost: '' }] });
  };

  const removeRow = (type: 'adaptation' | 'mitigation', index: number) => {
    handleUpdate({ [type]: data[type].filter((_: any, i: number) => i !== index) });
  };

  const updateRow = (type: 'adaptation' | 'mitigation', index: number, updates: any) => {
    const newItems = [...data[type]];
    newItems[index] = { ...newItems[index], ...updates };
    handleUpdate({ [type]: newItems });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'hsl(var(--primary))', margin: 0 }}>Climate Adaptation Measures</h3>
          <button className="btn btn-secondary" onClick={() => addRow('adaptation')} style={{ padding: '0.4rem 0.8rem', fontSize: '0.875rem' }}>
            <Plus size={16} /> Add Adaptation
          </button>
        </div>
        <div className="table-responsive">
          <table className="table" style={{ borderCollapse: 'separate', borderSpacing: '1rem 0.75rem', marginTop: '-0.75rem', marginLeft: '-1rem', width: 'calc(100% + 1rem)' }}>
            <thead>
              <tr>
                <th style={{ width: '70%', background: 'transparent', border: 'none', color: 'hsl(var(--text-muted))', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', paddingBottom: '0.5rem', textAlign: 'left' }}>Description of Activity</th>
                <th style={{ width: '20%', background: 'transparent', border: 'none', color: 'hsl(var(--text-muted))', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', paddingBottom: '0.5rem', textAlign: 'left' }}>Actual Cost</th>
                <th style={{ width: '10%', background: 'transparent', border: 'none', color: 'hsl(var(--text-muted))', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', paddingBottom: '0.5rem', textAlign: 'center' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.adaptation.length === 0 && (
                <tr><td colSpan={3} style={{ textAlign: 'center', padding: '3rem', color: 'hsl(var(--text-muted))', background: 'hsl(var(--bg-main))', borderRadius: 'var(--radius-md)', border: '1px dashed hsl(var(--border))' }}>No activities recorded</td></tr>
              )}
              {data.adaptation.map((row: any, idx: number) => (
                <tr key={idx}>
                  <td style={{ padding: '0 0.5rem 0 0' }}><input className="input" style={{ background: '#fff' }} value={row.description} onChange={(e) => updateRow('adaptation', idx, { description: e.target.value })} /></td>
                  <td style={{ padding: '0 0.5rem' }}><input type="number" className="input" style={{ background: '#fff' }} placeholder="0.00" value={row.cost} onChange={(e) => updateRow('adaptation', idx, { cost: e.target.value })} /></td>
                  <td style={{ padding: '0 0 0 0.5rem', textAlign: 'center' }}>
                    <button 
                      className="btn btn-secondary" 
                      onClick={() => removeRow('adaptation', idx)} 
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

      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'hsl(var(--primary))', margin: 0 }}>Climate Mitigation Measures</h3>
          <button className="btn btn-secondary" onClick={() => addRow('mitigation')} style={{ padding: '0.4rem 0.8rem', fontSize: '0.875rem' }}>
            <Plus size={16} /> Add Mitigation
          </button>
        </div>
        <div className="table-responsive">
          <table className="table" style={{ borderCollapse: 'separate', borderSpacing: '1rem 0.75rem', marginTop: '-0.75rem', marginLeft: '-1rem', width: 'calc(100% + 1rem)' }}>
            <thead>
              <tr>
                <th style={{ width: '70%', background: 'transparent', border: 'none', color: 'hsl(var(--text-muted))', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', paddingBottom: '0.5rem', textAlign: 'left' }}>Description of Activity</th>
                <th style={{ width: '20%', background: 'transparent', border: 'none', color: 'hsl(var(--text-muted))', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', paddingBottom: '0.5rem', textAlign: 'left' }}>Actual Cost</th>
                <th style={{ width: '10%', background: 'transparent', border: 'none', color: 'hsl(var(--text-muted))', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', paddingBottom: '0.5rem', textAlign: 'center' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.mitigation.length === 0 && (
                <tr><td colSpan={3} style={{ textAlign: 'center', padding: '3rem', color: 'hsl(var(--text-muted))', background: 'hsl(var(--bg-main))', borderRadius: 'var(--radius-md)', border: '1px dashed hsl(var(--border))' }}>No activities recorded</td></tr>
              )}
              {data.mitigation.map((row: any, idx: number) => (
                <tr key={idx}>
                  <td style={{ padding: '0 0.5rem 0 0' }}><input className="input" style={{ background: '#fff' }} value={row.description} onChange={(e) => updateRow('mitigation', idx, { description: e.target.value })} /></td>
                  <td style={{ padding: '0 0.5rem' }}><input type="number" className="input" style={{ background: '#fff' }} placeholder="0.00" value={row.cost} onChange={(e) => updateRow('mitigation', idx, { cost: e.target.value })} /></td>
                  <td style={{ padding: '0 0 0 0.5rem', textAlign: 'center' }}>
                    <button 
                      className="btn btn-secondary" 
                      onClick={() => removeRow('mitigation', idx)} 
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
    </div>
  );
};

export const Section17_ProjectIncome: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.pc4p.s17;

  const handleUpdate = (updates: any) => {
    updateSection('pc4p', { s17: { ...data, ...updates } });
  };

  const addYear = () => {
    handleUpdate({ income: [...(data.income || []), { year: '', estimated: '', actual: '' }] });
  };

  const removeYear = (index: number) => {
    handleUpdate({ income: data.income.filter((_: any, i: number) => i !== index) });
  };

  const updateYear = (index: number, updates: any) => {
    const newIncome = [...data.income];
    newIncome[index] = { ...newIncome[index], ...updates };
    handleUpdate({ income: newIncome });
  };

  return (
    <div className="card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'hsl(var(--primary))', margin: 0 }}>Program Income / Revenue Generation</h3>
        <button className="btn btn-secondary" onClick={addYear} style={{ padding: '0.4rem 0.8rem', fontSize: '0.875rem' }}>
          <Plus size={16} /> Add Year
        </button>
      </div>
      <div className="table-responsive">
        <table className="table" style={{ borderCollapse: 'separate', borderSpacing: '1rem 0.75rem', marginTop: '-0.75rem', marginLeft: '-1rem', width: 'calc(100% + 1rem)' }}>
          <thead>
            <tr>
              <th style={{ width: '40%', background: 'transparent', border: 'none', color: 'hsl(var(--text-muted))', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', paddingBottom: '0.5rem', textAlign: 'left' }}>Year</th>
              <th style={{ width: '25%', background: 'transparent', border: 'none', color: 'hsl(var(--text-muted))', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', paddingBottom: '0.5rem', textAlign: 'left' }}>Estimated Income</th>
              <th style={{ width: '25%', background: 'transparent', border: 'none', color: 'hsl(var(--text-muted))', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', paddingBottom: '0.5rem', textAlign: 'left' }}>Actual Income</th>
              <th style={{ width: '10%', background: 'transparent', border: 'none', color: 'hsl(var(--text-muted))', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', paddingBottom: '0.5rem', textAlign: 'center' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.income.length === 0 && (
              <tr><td colSpan={4} style={{ textAlign: 'center', padding: '3rem', color: 'hsl(var(--text-muted))', background: 'hsl(var(--bg-main))', borderRadius: 'var(--radius-md)', border: '1px dashed hsl(var(--border))' }}>No income data recorded</td></tr>
            )}
            {data.income.map((row: any, idx: number) => (
              <tr key={idx}>
                <td style={{ padding: '0 0.5rem 0 0' }}><input className="input" style={{ background: '#fff' }} placeholder="e.g. 2024-25" value={row.year} onChange={(e) => updateYear(idx, { year: e.target.value })} /></td>
                <td style={{ padding: '0 0.5rem' }}><input type="number" className="input" style={{ background: '#fff' }} placeholder="0.00" value={row.estimated} onChange={(e) => updateYear(idx, { estimated: e.target.value })} /></td>
                <td style={{ padding: '0 0.5rem' }}><input type="number" className="input" style={{ background: '#fff' }} placeholder="0.00" value={row.actual} onChange={(e) => updateYear(idx, { actual: e.target.value })} /></td>
                <td style={{ padding: '0 0 0 0.5rem', textAlign: 'center' }}>
                  <button 
                    className="btn btn-secondary" 
                    onClick={() => removeYear(idx)} 
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
