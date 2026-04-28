import React from 'react';
import { useForm } from '../../../../context/FormContext';
import { InputField, TextAreaField } from '../../../ui/FormElements';
import { Plus, Trash2 } from 'lucide-react';

export const Section3_PhysicalStatus: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.pc3b?.s3 || { physicalStatus: [], narrative: '' };

  const handleChange = (field: string, val: any) => {
    updateSection('pc3b', { s3: { ...data, [field]: val } });
  };

  const addRow = () => {
    const newList = [...(data.physicalStatus || []), { item: '', unit: '', qty: '' }];
    handleChange('physicalStatus', newList);
  };

  const removeRow = (idx: number) => {
    const newList = data.physicalStatus.filter((_: any, i: number) => i !== idx);
    handleChange('physicalStatus', newList);
  };

  const updateRow = (idx: number, field: string, val: string) => {
    const newList = [...data.physicalStatus];
    newList[idx] = { ...newList[idx], [field]: val };
    handleChange('physicalStatus', newList);
  };

  return (
    <div className="space-y-6">
      <div className="card shadow-sm">
        <TextAreaField 
          label="[PC-III(b)-2.1] Physical Highlights (Monthly Narrative)" 
          placeholder="Describe the major physical achievements during this month..."
          rows={6}
          value={data.narrative}
          onChange={(e: any) => handleChange('narrative', e.target.value)}
        />
        
        <div style={{ height: '1px', background: 'hsl(var(--border) / 0.5)', margin: '2rem 0' }} />

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'hsl(var(--primary))' }}>Detailed Physical Status</h4>
            <p style={{ fontSize: '0.8125rem', color: 'hsl(var(--text-muted))' }}>Itemized breakdown of monthly achievements.</p>
          </div>
          <button type="button" onClick={addRow} className="btn btn-secondary btn-sm">
            <Plus size={16} /> Add Physical Item
          </button>
        </div>

        <div className="card" style={{ background: 'hsl(var(--bg-main) / 0.1)', borderColor: 'hsl(var(--border) / 0.6)' }}>
           {/* Header */}
           <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'minmax(200px, 2fr) 1fr 1fr 48px', 
            gap: '1rem', 
            padding: '0.75rem 1rem',
            borderBottom: '1px solid hsl(var(--border))',
            background: 'hsl(var(--bg-main) / 0.2)'
          }}>
          {[  
            { code: 'PC-III(b)-2.2', label: 'Item Description' },
            { code: 'PC-III(b)-2.3', label: 'Unit' },
            { code: 'PC-III(b)-2.4', label: 'Qty Achieved' },
          ].map(({ code, label }) => (
            <div key={code} style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
              <span style={{ fontSize: '0.58rem', fontWeight: 700, color: 'hsl(var(--primary))', letterSpacing: '0.02em', whiteSpace: 'nowrap' }}>[{code}]</span>
              <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'hsl(var(--text-muted))' }}>{label}</span>
            </div>
          ))}
          <div />
          </div>

          <div className="divide-y divide-border">
            {data.physicalStatus.length === 0 ? (
              <div style={{ padding: '3rem', textAlign: 'center', color: 'hsl(var(--text-muted))' }}>No records.</div>
            ) : (
              data.physicalStatus.map((item: any, idx: number) => (
                <div key={idx} style={{ display: 'grid', gridTemplateColumns: 'minmax(200px, 2fr) 1fr 1fr 48px', gap: '1rem', padding: '1rem', alignItems: 'center' }}>
                  <InputField label="" placeholder="e.g. Concrete Layer" value={item.item} onChange={(e: any) => updateRow(idx, 'item', e.target.value)} />
                  <InputField label="" placeholder="e.g. Cft" value={item.unit} onChange={(e: any) => updateRow(idx, 'unit', e.target.value)} />
                  <InputField label="" placeholder="0" type="number" value={item.qty} onChange={(e: any) => updateRow(idx, 'qty', e.target.value)} />
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
