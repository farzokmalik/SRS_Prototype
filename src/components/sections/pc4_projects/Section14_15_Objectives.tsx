import React from 'react';
import { useForm } from '../../../context/FormContext';
import { Plus, Trash2 } from 'lucide-react';

export const Section14_RecurringCosts: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.pc4.s14;

  const handleUpdate = (updates: any) => {
    updateSection('pc4', { s14: { ...data, ...updates } });
  };

  const addRow = () => {
    handleUpdate({ recurringCosts: [...(data.recurringCosts || []), { item: '', pciEstimate: '', actual: '', source: '' }] });
  };

  const removeRow = (index: number) => {
    handleUpdate({ recurringCosts: data.recurringCosts.filter((_: any, i: number) => i !== index) });
  };

  const updateRow = (index: number, updates: any) => {
    const newItems = [...data.recurringCosts];
    newItems[index] = { ...newItems[index], ...updates };
    handleUpdate({ recurringCosts: newItems });
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
              <th style={{ width: '35%', background: 'transparent', border: 'none', color: 'hsl(var(--text-muted))', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', paddingBottom: '0.5rem', textAlign: 'left' }}>Item Description</th>
              <th style={{ width: '15%', background: 'transparent', border: 'none', color: 'hsl(var(--text-muted))', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', paddingBottom: '0.5rem', textAlign: 'left' }}>PC-I Estimate</th>
              <th style={{ width: '15%', background: 'transparent', border: 'none', color: 'hsl(var(--text-muted))', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', paddingBottom: '0.5rem', textAlign: 'left' }}>Actual Cost</th>
              <th style={{ width: '25%', background: 'transparent', border: 'none', color: 'hsl(var(--text-muted))', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', paddingBottom: '0.5rem', textAlign: 'left' }}>Source / Agency</th>
              <th style={{ width: '10%', background: 'transparent', border: 'none', color: 'hsl(var(--text-muted))', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', paddingBottom: '0.5rem', textAlign: 'center' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.recurringCosts.length === 0 && (
              <tr><td colSpan={5} style={{ textAlign: 'center', padding: '3rem', color: 'hsl(var(--text-muted))', background: 'hsl(var(--bg-main))', borderRadius: 'var(--radius-md)', border: '1px dashed hsl(var(--border))' }}>No items recorded</td></tr>
            )}
            {data.recurringCosts.map((item: any, idx: number) => (
              <tr key={idx}>
                <td style={{ padding: '0 0.5rem 0 0' }}><input className="input" style={{ background: '#fff' }} placeholder="e.g. Salaries" value={item.item} onChange={(e) => updateRow(idx, { item: e.target.value })} /></td>
                <td style={{ padding: '0 0.5rem' }}><input type="number" className="input" style={{ background: '#fff' }} placeholder="0.00" value={item.pciEstimate} onChange={(e) => updateRow(idx, { pciEstimate: e.target.value })} /></td>
                <td style={{ padding: '0 0.5rem' }}><input type="number" className="input" style={{ background: '#fff' }} placeholder="0.00" value={item.actual} onChange={(e) => updateRow(idx, { actual: e.target.value })} /></td>
                <td style={{ padding: '0 0.5rem' }}><input className="input" style={{ background: '#fff' }} placeholder="e.g. Provincial Govt" value={item.source} onChange={(e) => updateRow(idx, { source: e.target.value })} /></td>
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

export const Section15_ObjectivesAchievement: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.pc4.s15;

  const handleUpdate = (updates: any) => {
    updateSection('pc4', { s15: { ...data, ...updates } });
  };

  const addObjective = () => {
    handleUpdate({ objectives: [...(data.objectives || []), { objective: '', status: 'Achieved', reasons: '' }] });
  };

  const removeObjective = (index: number) => {
    handleUpdate({ objectives: data.objectives.filter((_: any, i: number) => i !== index) });
  };

  const updateObjective = (index: number, updates: any) => {
    const newObjectives = [...data.objectives];
    newObjectives[index] = { ...newObjectives[index], ...updates };
    handleUpdate({ objectives: newObjectives });
  };

  return (
    <div className="card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'hsl(var(--primary))', margin: 0 }}>Objectives Achievement</h3>
        <button className="btn btn-secondary" onClick={addObjective} style={{ padding: '0.4rem 0.8rem', fontSize: '0.875rem' }}>
          <Plus size={16} /> Add Objective
        </button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {data.objectives.length === 0 && (
          <div style={{ textAlign: 'center', padding: '4rem', border: '1px dashed hsl(var(--border))', borderRadius: 'var(--radius-lg)', color: 'hsl(var(--text-muted))', background: 'hsl(var(--bg-main) / 0.3)' }}>
            <p style={{ fontWeight: 600, fontSize: '1rem' }}>No objectives added yet</p>
            <p style={{ fontSize: '0.875rem' }}>Click "Add Objective" to start recording achievements.</p>
          </div>
        )}
        {data.objectives.map((obj: any, idx: number) => (
          <div key={idx} style={{ 
            padding: '2rem', 
            background: '#fff', 
            borderRadius: 'var(--radius-lg)', 
            border: '1px solid hsl(var(--border))',
            boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05)',
            position: 'relative',
            animation: 'fadeIn 0.3s ease'
          }}>
            <div style={{ display: 'flex', gap: '2.5rem' }}>
              <div style={{ flex: 1 }}>
                <label className="label" style={{ marginBottom: '0.75rem', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'hsl(var(--text-muted))' }}>
                  Objective Description
                </label>
                <textarea 
                  className="input" 
                  placeholder="Describe the objective as per PC-I..."
                  style={{ minHeight: '120px', paddingTop: '0.75rem', background: '#fff', lineHeight: '1.6' }} 
                  value={obj.objective} 
                  onChange={(e) => updateObjective(idx, { objective: e.target.value })} 
                />
              </div>
              <div style={{ width: '240px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <label className="label" style={{ marginBottom: '0.75rem', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'hsl(var(--text-muted))' }}>
                    Status
                  </label>
                  <select 
                    className="select" 
                    style={{ background: '#fff' }}
                    value={obj.status} 
                    onChange={(e) => updateObjective(idx, { status: e.target.value })}
                  >
                    <option value="Achieved">✅ Achieved</option>
                    <option value="Partially Achieved">⚠️ Partially Achieved</option>
                    <option value="Not Achieved">❌ Not Achieved</option>
                  </select>
                </div>
                
                <button 
                  className="btn btn-secondary" 
                  onClick={() => removeObjective(idx)} 
                  style={{ 
                    color: 'hsl(var(--error))', 
                    borderColor: 'hsl(var(--error) / 0.1)',
                    background: 'hsl(var(--error) / 0.02)',
                    marginTop: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    padding: '0.75rem'
                  }}
                >
                  <Trash2 size={16} /> Remove Objective
                </button>
              </div>
            </div>

            {(obj.status === 'Partially Achieved' || obj.status === 'Not Achieved') && (
              <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px dashed hsl(var(--border))', animation: 'slideDown 0.3s ease' }}>
                <label className="label" style={{ marginBottom: '0.75rem', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'hsl(var(--error))' }}>
                  Reasons for shortfall / Delay
                </label>
                <textarea 
                  className="input" 
                  placeholder="Explain why the objective was not fully achieved..." 
                  style={{ minHeight: '100px', paddingTop: '0.75rem', background: '#fff' }} 
                  value={obj.reasons} 
                  onChange={(e) => updateObjective(idx, { reasons: e.target.value })} 
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
