import React, { useEffect } from 'react';
import { useForm } from '../../../context/FormContext';
import { InputField } from '../../ui/FormElements';
import { Plus, Trash2 } from 'lucide-react';

export const Section7_Schedule: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.pc4p.s7;

  const handleUpdate = (updates: any) => {
    updateSection('pc4p', { s7: { ...data, ...updates } });
  };

  const addExtension = () => {
    handleUpdate({ extensions: [...(data.extensions || []), { date: '', months: '', days: '', authority: '' }] });
  };

  const removeExtension = (index: number) => {
    handleUpdate({ extensions: data.extensions.filter((_: any, i: number) => i !== index) });
  };

  const updateExtension = (index: number, updates: any) => {
    const newExtensions = [...data.extensions];
    newExtensions[index] = { ...newExtensions[index], ...updates };
    handleUpdate({ extensions: newExtensions });
  };

  useEffect(() => {
    if (data.actualCommencement && data.actualCompletion) {
      const start = new Date(data.actualCommencement);
      const end = new Date(data.actualCompletion);
      const diffTime = Math.abs(end.getTime() - start.getTime());
      const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
      if (data.duration !== diffMonths.toString()) {
        handleUpdate({ duration: diffMonths.toString() });
      }
    }
  }, [data.actualCommencement, data.actualCompletion]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div className="card">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          <InputField 
            label="Planned Commencement" 
            type="date" 
            required 
            value={data.plannedCommencement}
            onChange={(e) => handleUpdate({ plannedCommencement: e.target.value })}
          />
          <InputField 
            label="Actual Commencement" 
            type="date" 
            required 
            value={data.actualCommencement}
            onChange={(e) => handleUpdate({ actualCommencement: e.target.value })}
          />
          <InputField 
            label="Planned Completion" 
            type="date" 
            required 
            value={data.plannedCompletion}
            onChange={(e) => handleUpdate({ plannedCompletion: e.target.value })}
          />
          <InputField 
            label="Actual Completion" 
            type="date" 
            required 
            value={data.actualCompletion}
            onChange={(e) => handleUpdate({ actualCompletion: e.target.value })}
          />
        </div>
        <div style={{ marginTop: '1.5rem' }}>
          <InputField 
            label="Calculated Duration (Months)" 
            readOnly 
            value={data.duration}
            placeholder="Auto-calculated from actual dates"
          />
        </div>
      </div>

      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 600 }}>Program Extensions</h3>
          <button className="btn btn-secondary" onClick={addExtension} style={{ padding: '0.4rem 0.8rem', fontSize: '0.875rem' }}>
            <Plus size={16} /> Add Extension
          </button>
        </div>
        <div className="table-responsive">
          <table className="table" style={{ borderCollapse: 'separate', borderSpacing: '1rem 1rem', marginTop: '-1rem', marginLeft: '-1rem', width: 'calc(100% + 1rem)' }}>
            <thead>
              <tr>
                <th style={{ width: '25%', background: 'transparent', border: 'none', color: 'hsl(var(--text-muted))', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', paddingBottom: '0.5rem',textAlign: 'left' }}>Extension Date</th>
                <th style={{ width: '12%', background: 'transparent', border: 'none', color: 'hsl(var(--text-muted))', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', paddingBottom: '0.5rem',textAlign: 'left' }}>Months</th>
                <th style={{ width: '12%', background: 'transparent', border: 'none', color: 'hsl(var(--text-muted))', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', paddingBottom: '0.5rem',textAlign: 'left' }}>Days</th>
                <th style={{ width: '41%', background: 'transparent', border: 'none', color: 'hsl(var(--text-muted))', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', paddingBottom: '0.5rem',textAlign: 'left' }}>Notifying Authority</th>
                <th style={{ width: '10%', background: 'transparent', border: 'none', color: 'hsl(var(--text-muted))', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', paddingBottom: '0.5rem', textAlign: 'center' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.extensions.length === 0 && (
                <tr><td colSpan={5} style={{ textAlign: 'center', padding: '3rem', color: 'hsl(var(--text-muted))', background: 'hsl(var(--bg-main))', borderRadius: 'var(--radius-md)', border: '1px dashed hsl(var(--border))' }}>No extensions recorded</td></tr>
              )}
              {data.extensions.map((ext: any, idx: number) => (
                <tr key={idx}>
                  <td style={{ padding: '0 0.5rem 0 0' }}><input type="date" className="input" style={{ background: '#fff' }} value={ext.date} onChange={(e) => updateExtension(idx, { date: e.target.value })} /></td>
                  <td style={{ padding: '0 0.5rem' }}><input type="number" className="input" style={{ background: '#fff' }} placeholder="0" value={ext.months} onChange={(e) => updateExtension(idx, { months: e.target.value })} /></td>
                  <td style={{ padding: '0 0.5rem' }}><input type="number" className="input" style={{ background: '#fff' }} placeholder="0" value={ext.days} onChange={(e) => updateExtension(idx, { days: e.target.value })} /></td>
                  <td style={{ padding: '0 0.5rem' }}><input type="text" className="input" style={{ background: '#fff' }} placeholder="Enter authority name..." value={ext.authority} onChange={(e) => updateExtension(idx, { authority: e.target.value })} /></td>
                  <td style={{ padding: '0 0 0 0.5rem', textAlign: 'center' }}>
                    <button 
                      className="btn btn-secondary" 
                      onClick={() => removeExtension(idx)} 
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
