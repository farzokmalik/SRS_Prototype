import React from 'react';
import { useForm } from '../../../../context/FormContext';
import { InputField } from '../../../ui/FormElements';
import { Plus, Trash2 } from 'lucide-react';

export const Section8_Indicators: React.FC = () => {
  const { formData, updateSection } = useForm();
  const list = formData.pc3a?.s8?.indicators || [];

  const addRow = () => {
    const newList = [...list, { name: '', value: '' }];
    updateSection('pc3a', { s8: { indicators: newList } });
  };

  const removeRow = (idx: number) => {
    const newList = list.filter((_: any, i: number) => i !== idx);
    updateSection('pc3a', { s8: { indicators: newList } });
  };

  const updateRow = (idx: number, field: string, val: string) => {
    const newList = [...list];
    newList[idx] = { ...newList[idx], [field]: val };
    updateSection('pc3a', { s8: { indicators: newList } });
  };

  return (
    <div className="space-y-6">
      <div className="card shadow-sm">
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1.5rem', borderBottom: '1px solid hsl(var(--border))', paddingBottom: '1rem' }}>
          <button type="button" onClick={addRow} className="btn btn-secondary btn-sm shadow-sm" style={{ padding: '0.6rem 1.25rem', borderRadius: 'var(--radius-lg)' }}>
            <Plus size={16} /> Add Indicator
          </button>
        </div>

        <div className="card" style={{ background: 'hsl(var(--bg-main) / 0.1)', borderColor: 'hsl(var(--border) / 0.6)' }}>
           {/* Header */}
           <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'minmax(200px, 2fr) 1fr 48px', 
            gap: '1rem', 
            padding: '0.75rem 1rem',
            borderBottom: '1px solid hsl(var(--border))',
            background: 'hsl(var(--bg-main) / 0.2)'
          }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'hsl(var(--text-muted))' }}>Indicator Name</div>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'hsl(var(--text-muted))' }}>Quantified Value</div>
            <div></div>
          </div>

          <div className="divide-y divide-border">
            {list.length === 0 ? (
              <div style={{ padding: '3rem', textAlign: 'center', color: 'hsl(var(--text-muted))' }}>No indicators added.</div>
            ) : (
              list.map((it: any, idx: number) => (
                <div key={idx} style={{ display: 'grid', gridTemplateColumns: 'minmax(200px, 2fr) 1fr 48px', gap: '1rem', padding: '1rem', alignItems: 'center' }}>
                  <InputField label="" placeholder="e.g. Km of road completed" value={it.name} onChange={(e: any) => updateRow(idx, 'name', e.target.value)} />
                  <InputField label="" placeholder="e.g. 50" value={it.value} onChange={(e: any) => updateRow(idx, 'value', e.target.value)} />
                  <button type="button" onClick={() => removeRow(idx)} className="btn btn-secondary btn-sm"                           style={{ background: 'none', border: 'none', color: 'hsl(var(--error))', cursor: 'pointer', padding: '0.5rem' }}
><Trash2 size={16} /></button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
