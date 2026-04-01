import React from 'react';
import { useForm } from '../../../../context/FormContext';
import { InputField } from '../../../ui/FormElements';
import { Plus, Trash2 } from 'lucide-react';

export const Section5_AnnualWorkPlan: React.FC = () => {
  const { formData, updateSection } = useForm();
  const list = formData.pc3a?.s5?.workPlan || [];

  const addRow = () => {
    const newList = [...list, { description: '', unit: '', pciQty: '', achievement: '', target: '' }];
    updateSection('pc3a', { s5: { workPlan: newList } });
  };

  const removeRow = (idx: number) => {
    const newList = list.filter((_: any, i: number) => i !== idx);
    updateSection('pc3a', { s5: { workPlan: newList } });
  };

  const updateRow = (idx: number, field: string, val: string) => {
    const newList = [...list];
    newList[idx] = { ...newList[idx], [field]: val };
    updateSection('pc3a', { s5: { workPlan: newList } });
  };

  return (
    <div className="space-y-6">
      <div className="card shadow-sm">
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1.5rem', borderBottom: '1px solid hsl(var(--border))', paddingBottom: '1rem' }}>
          <button type="button" onClick={addRow} className="btn btn-secondary btn-sm shadow-sm" style={{ padding: '0.6rem 1.25rem', borderRadius: 'var(--radius-lg)' }}>
            <Plus size={16} /> Add Work Plan Item
          </button>
        </div>

        <div className="card" style={{ background: 'hsl(var(--bg-main) / 0.1)', borderColor: 'hsl(var(--border) / 0.6)' }}>
           {/* Header */}
           <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'minmax(200px, 2fr) 100px 120px 140px 140px 48px', 
            gap: '1rem', 
            padding: '0.75rem 1rem',
            borderBottom: '1px solid hsl(var(--border))',
            background: 'hsl(var(--bg-main) / 0.2)'
          }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'hsl(var(--text-muted))' }}>Item Description</div>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'hsl(var(--text-muted))' }}>Unit</div>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'hsl(var(--text-muted))' }}>PC-I Qty</div>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'hsl(var(--text-muted))' }}>Achievement</div>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'hsl(var(--text-muted))' }}>CY Target</div>
            <div></div>
          </div>

          <div className="divide-y divide-border">
            {list.length === 0 ? (
              <div style={{ padding: '3rem', textAlign: 'center', color: 'hsl(var(--text-muted))' }}>
                No records added. Click "Add Work Plan Item" above to begin.
              </div>
            ) : (
              list.map((item: any, idx: number) => (
                <div key={idx} style={{ display: 'grid', gridTemplateColumns: 'minmax(200px, 2fr) 100px 120px 140px 140px 48px', gap: '1rem', padding: '1rem', alignItems: 'center' }}>
                  <InputField label="" placeholder="e.g. Earth Work" value={item.description} onChange={(e: any) => updateRow(idx, 'description', e.target.value)} />
                  <InputField label="" placeholder="No." value={item.unit} onChange={(e: any) => updateRow(idx, 'unit', e.target.value)} />
                  <InputField label="" placeholder="0" type="number" value={item.pciQty} onChange={(e: any) => updateRow(idx, 'pciQty', e.target.value)} />
                  <InputField label="" placeholder="0" type="number" value={item.achievement} onChange={(e: any) => updateRow(idx, 'achievement', e.target.value)} />
                  <InputField label="" placeholder="0" type="number" value={item.target} onChange={(e: any) => updateRow(idx, 'target', e.target.value)} />
                  <button type="button" onClick={() => removeRow(idx)} className="btn btn-secondary btn-sm"  style={{ background: 'none', border: 'none', color: 'hsl(var(--error))', cursor: 'pointer', padding: '0.5rem' }}
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
