import React from 'react';
import { useForm } from '../../../context/FormContext';
import { Plus, Trash2 } from 'lucide-react';

export const Section3_RecurringCost: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.pc5.s3;

  const handleUpdate = (updates: any) => {
    updateSection('pc5', { s3: { ...data, ...updates } });
  };

  const addComponent = () => {
    handleUpdate({ components: [...data.components, { name: '', planned: '', actual: '' }] });
  };

  const updateComponent = (idx: number, updates: any) => {
    const newComponents = [...data.components];
    newComponents[idx] = { ...newComponents[idx], ...updates };
    handleUpdate({ components: newComponents });
  };

  const removeComponent = (idx: number) => {
    handleUpdate({ components: data.components.filter((_: any, i: number) => i !== idx) });
  };

  const variance = (Number(data.actualCost || 0) - Number(data.plannedCost || 0)).toFixed(2);

  return (
    <div className="card">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
        <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'hsl(var(--primary))', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Overall Recurring Cost Per Annum</h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
          <div>
            <label className="label">[PC-V-3.1] Planned Cost (PKR Million)</label>
            <input 
              type="number" 
              className="input" 
              style={{ background: '#fff' }}
              placeholder="0.00"
              value={data.plannedCost}
              onChange={(e) => handleUpdate({ plannedCost: e.target.value })}
            />
          </div>
          <div>
            <label className="label">[PC-V-3.2] Actual Cost (PKR Million)</label>
            <input 
              type="number" 
              className="input" 
              style={{ background: '#fff' }}
              placeholder="0.00"
              value={data.actualCost}
              onChange={(e) => handleUpdate({ actualCost: e.target.value })}
            />
          </div>
          <div>
            <label className="label">[PC-V-3.3] Overall Cost Variance</label>
            <div className="input" style={{ 
              background: 'hsl(var(--bg-main) / 0.3)', 
              display: 'flex', 
              alignItems: 'center', 
              fontWeight: 700,
              color: Number(variance) > 0 ? 'hsl(var(--error))' : 'hsl(var(--success))'
            }}>
              {variance}
            </div>
          </div>
        </div>

        <div style={{ marginTop: '1rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h4 style={{ fontSize: '0.875rem', fontWeight: 700, color: 'hsl(var(--text-main))' }}>Component-wise Breakup</h4>
            <button className="btn btn-secondary" onClick={addComponent} style={{ padding: '0.4rem 0.8rem', fontSize: '0.75rem' }}>
              <Plus size={14} /> Add Component
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {data.components.length === 0 && (
              <div style={{ textAlign: 'center', padding: '2rem', color: 'hsl(var(--text-muted))', border: '1px dashed hsl(var(--border))', borderRadius: '8px' }}>
                No components added
              </div>
            )}
            {data.components.map((c: any, idx: number) => (
              <div key={idx} style={{ 
                padding: '1.25rem', 
                background: 'hsl(var(--bg-main) / 0.1)', 
                borderRadius: 'var(--radius-lg)', 
                border: '1px solid hsl(var(--border))',
                position: 'relative'
              }}>
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 48px', gap: '1.25rem', alignItems: 'end' }}>
                  <div>
                    <label className="label">[PC-V-3.4] Component Name</label>
                    <input className="input" style={{ background: '#fff' }} placeholder="e.g. Salaries" value={c.name} onChange={(e) => updateComponent(idx, { name: e.target.value })} />
                  </div>
                  <div>
                    <label className="label">[PC-V-3.5] Component Planned Cost (M)</label>
                    <input type="number" className="input" style={{ background: '#fff' }} placeholder="0.00" value={c.planned} onChange={(e) => updateComponent(idx, { planned: e.target.value })} />
                  </div>
                  <div>
                    <label className="label">[PC-V-3.6] Component Actual Cost (M)</label>
                    <input type="number" className="input" style={{ background: '#fff' }} placeholder="0.00" value={c.actual} onChange={(e) => updateComponent(idx, { actual: e.target.value })} />
                  </div>
                  <button 
                    className="btn btn-secondary" 
                    onClick={() => removeComponent(idx)}
                    style={{ 
                      color: 'hsl(var(--error))', background: 'hsl(var(--error) / 0.05)',
                      border: 'none', padding: '0.65rem', marginBottom: '1px'
                    }}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Section4_Manpower: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.pc5.s4;

  const handleUpdate = (updates: any) => {
    updateSection('pc5', { s4: [...updates] });
  };

  const addStaff = () => {
    handleUpdate([...data, { category: 'Administrative', designation: '', planned: '', actual: '' }]);
  };

  const updateStaff = (idx: number, updates: any) => {
    const newData = [...data];
    newData[idx] = { ...newData[idx], ...updates };
    handleUpdate(newData);
  };

  const removeStaff = (idx: number) => {
    handleUpdate(data.filter((_: any, i: number) => i !== idx));
  };

  return (
    <div className="card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
        <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'hsl(var(--primary))', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Manpower Performance</h3>
        <button className="btn btn-secondary" onClick={addStaff} style={{ padding: '0.5rem 1rem', fontSize: '0.8125rem' }}>
          <Plus size={16} /> Add Staff Entry
        </button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {data.length === 0 && (
          <div style={{ textAlign: 'center', padding: '4rem', border: '1px dashed hsl(var(--border))', borderRadius: 'var(--radius-lg)', background: 'hsl(var(--bg-main) / 0.3)', color: 'hsl(var(--text-muted))' }}>
            <p style={{ fontWeight: 600, fontSize: '0.875rem' }}>No manpower details recorded. Click "Add Staff Entry" to start.</p>
          </div>
        )}
        {data.map((staff: any, idx: number) => {
          const variance = (Number(staff.actual || 0) - Number(staff.planned || 0));
          return (
            <div key={idx} style={{ 
              padding: '1.5rem', 
              background: '#fff', 
              borderRadius: 'var(--radius-lg)', 
              border: '1px solid hsl(var(--border))',
              position: 'relative',
              animation: 'fadeIn 0.3s ease'
            }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 2fr 1fr 1fr 1fr 48px', gap: '1.25rem', alignItems: 'end' }}>
                <div>
                  <label className="label">[PC-V-4.1] Staff Category</label>
                  <select className="select" style={{ background: '#fff' }} value={staff.category} onChange={(e) => updateStaff(idx, { category: e.target.value })}>
                    <option value="Administrative">Administrative</option>
                    <option value="Technical">Technical</option>
                    <option value="Support">Support</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="label">[PC-V-4.2] Designation</label>
                  <input className="input" style={{ background: '#fff' }} placeholder="e.g. Director" value={staff.designation} onChange={(e) => updateStaff(idx, { designation: e.target.value })} />
                </div>
                <div>
                  <label className="label">[PC-V-4.3] Planned Staffing</label>
                  <input type="number" className="input" style={{ background: '#fff' }} placeholder="0" value={staff.planned} onChange={(e) => updateStaff(idx, { planned: e.target.value })} />
                </div>
                <div>
                  <label className="label">[PC-V-4.4] Actual Staffing</label>
                  <input type="number" className="input" style={{ background: '#fff' }} placeholder="0" value={staff.actual} onChange={(e) => updateStaff(idx, { actual: e.target.value })} />
                </div>
                <div>
                  <label className="label">[PC-V-4.5] Manpower Variance</label>
                  <div className="input" style={{ 
                    background: 'hsl(var(--bg-main) / 0.3)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    fontWeight: 700,
                    color: variance > 0 ? 'hsl(var(--error))' : variance < 0 ? 'hsl(var(--warning))' : 'hsl(var(--success))'
                  }}>
                    {variance > 0 ? `+${variance}` : variance}
                  </div>
                </div>
                <button 
                  className="btn btn-secondary" 
                  onClick={() => removeStaff(idx)}
                  style={{ 
                    color: 'hsl(var(--error))', background: 'hsl(var(--error) / 0.05)',
                    border: 'none', padding: '0.65rem', marginBottom: '1px'
                  }}
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
