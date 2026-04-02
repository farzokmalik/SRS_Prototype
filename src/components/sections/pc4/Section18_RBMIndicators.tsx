import React from 'react';
import { useForm } from '../../../context/FormContext';
import { Plus, Trash2 } from 'lucide-react';

export const Section18_RBMIndicators: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.pc4.s18;

  const handleUpdate = (updates: any) => {
    updateSection('pc4', { s18: { ...data, ...updates } });
  };

  const addRow = () => {
    handleUpdate({ 
      indicators: [
        ...(data.indicators || []), 
        { input: '', output: '', outputIndicator: '', outcomeIndicator: '', baseline: '', target: '', targetedImpact: '', impactIndicator: '' }
      ] 
    });
  };

  const removeRow = (index: number) => {
    handleUpdate({ indicators: data.indicators.filter((_: any, i: number) => i !== index) });
  };

  const updateRow = (index: number, updates: any) => {
    const newItems = [...data.indicators];
    newItems[index] = { ...newItems[index], ...updates };
    handleUpdate({ indicators: newItems });
  };

  return (
    <div className="card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'hsl(var(--primary))', margin: 0 }}>Strategic RBM & Evaluation Indicators</h3>
        <button className="btn btn-secondary" onClick={addRow} style={{ padding: '0.4rem 0.8rem', fontSize: '0.875rem' }}>
          <Plus size={16} /> Add Indicator
        </button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
        {data.indicators.length === 0 && (
          <div style={{ textAlign: 'center', padding: '5rem', border: '1px dashed hsl(var(--border))', borderRadius: 'var(--radius-lg)', color: 'hsl(var(--text-muted))', background: 'hsl(var(--bg-main) / 0.3)' }}>
            <p style={{ fontWeight: 600, fontSize: '1.125rem', marginBottom: '0.5rem' }}>No indicators defined yet</p>
            <p style={{ fontSize: '0.875rem' }}>Click "Add Indicator" above to start defining your Results Based Monitoring framework.</p>
          </div>
        )}
        {data.indicators.map((row: any, idx: number) => (
          <div key={idx} style={{ 
            padding: '2rem', 
            background: '#fff', 
            borderRadius: 'var(--radius-lg)', 
            border: '1px solid hsl(var(--border))',
            boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05)',
            position: 'relative',
            animation: 'fadeIn 0.3s ease'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '1px dashed hsl(var(--border))' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'hsl(var(--primary))', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Indicator #{idx + 1}
              </span>
              <button 
                className="btn btn-secondary" 
                onClick={() => removeRow(idx)} 
                style={{ 
                  color: 'hsl(var(--error))', 
                  borderColor: 'hsl(var(--error) / 0.2)',
                  background: 'hsl(var(--error) / 0.02)',
                  fontSize: '0.75rem',
                  padding: '0.4rem 0.8rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <Trash2 size={14} /> Remove Indicator
              </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
              <div>
                <label className="label" style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>Input</label>
                <textarea className="input" style={{ background: '#fff', minHeight: '100px', fontSize: '0.875rem' }} placeholder="Resource/Input required..." value={row.input} onChange={(e) => updateRow(idx, { input: e.target.value })} />
              </div>
              <div>
                <label className="label" style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>Output</label>
                <textarea className="input" style={{ background: '#fff', minHeight: '100px', fontSize: '0.875rem' }} placeholder="Immediate results..." value={row.output} onChange={(e) => updateRow(idx, { output: e.target.value })} />
              </div>
              <div>
                <label className="label" style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>Output Indicator</label>
                <textarea className="input" style={{ background: '#fff', minHeight: '100px', fontSize: '0.875rem' }} placeholder="Achievement metric..." value={row.outputIndicator} onChange={(e) => updateRow(idx, { outputIndicator: e.target.value })} />
              </div>
              <div>
                <label className="label" style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>Outcome Indicator</label>
                <textarea className="input" style={{ background: '#fff', minHeight: '100px', fontSize: '0.875rem' }} placeholder="Intermediate change..." value={row.outcomeIndicator} onChange={(e) => updateRow(idx, { outcomeIndicator: e.target.value })} />
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div>
                  <label className="label" style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>Baseline</label>
                  <input className="input" style={{ background: '#fff', fontSize: '0.875rem' }} placeholder="Start value" value={row.baseline} onChange={(e) => updateRow(idx, { baseline: e.target.value })} />
                </div>
                <div>
                  <label className="label" style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>Target</label>
                  <input className="input" style={{ background: '#fff', fontSize: '0.875rem' }} placeholder="End value" value={row.target} onChange={(e) => updateRow(idx, { target: e.target.value })} />
                </div>
              </div>
              
              <div>
                <label className="label" style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>Targeted Impact</label>
                <textarea className="input" style={{ background: '#fff', minHeight: '100px', fontSize: '0.875rem' }} placeholder="Long term vision..." value={row.targetedImpact} onChange={(e) => updateRow(idx, { targetedImpact: e.target.value })} />
              </div>
              
              <div style={{ gridColumn: 'span 2' }}>
                <label className="label" style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>Impact Indicator</label>
                <textarea className="input" style={{ background: '#fff', minHeight: '100px', fontSize: '0.875rem' }} placeholder="Impact metric..." value={row.impactIndicator} onChange={(e) => updateRow(idx, { impactIndicator: e.target.value })} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
