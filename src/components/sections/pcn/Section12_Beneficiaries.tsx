import React from 'react';
import { useForm } from '../../../context/FormContext';
import { InputField } from '../../ui/FormElements';
import { Trash2 } from 'lucide-react';

export const Section12_Beneficiaries: React.FC = () => {
  const { formData, updateSection } = useForm();
  const sectionData = formData.section12 || {};
  const beneficiaries = (sectionData.beneficiaries && sectionData.beneficiaries.length > 0)
    ? sectionData.beneficiaries
    : [{ type: '', count: '' }];

  const handleChange = (list: any[]) => {
    updateSection('section12', { beneficiaries: list });
  };

  const addRow = () => {
    handleChange([...beneficiaries, { type: '', count: '' }]);
  };

  const updateRow = (idx: number, field: string, val: string) => {
    const list = [...beneficiaries];
    list[idx] = { ...list[idx], [field]: val };
    handleChange(list);
  };

  const removeRow = (idx: number) => {
    const list = [...beneficiaries];
    list.splice(idx, 1);
    handleChange(list.length > 0 ? list : [{ type: '', count: '' }]);
  };

  return (
    <div className="space-y-6">
      <div className="card shadow-sm">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid hsl(var(--border))', paddingBottom: '1rem' }}>
          <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'hsl(var(--primary))', margin: 0 }}>Beneficiaries Breakdown</h4>
          <button type="button" onClick={addRow} className="btn btn-secondary btn-sm shadow-sm" style={{ padding: '0.6rem 1.25rem', borderRadius: 'var(--radius-lg)' }}>
            Add Beneficiary Type
          </button>
        </div>
        
        <div style={{ padding: '0 1rem', maxWidth: '1200px' }}>
          {/* Headers */}
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(250px, 1fr) 1fr 48px', gap: '1.5rem', marginBottom: '0.75rem' }}>
            <div style={{ textAlign: 'left', fontSize: '0.94rem', fontWeight: 700, color: 'hsl(var(--text-main) / 0.8)' }}>Beneficiary Type</div>
            <div style={{ textAlign: 'left', fontSize: '0.94rem', fontWeight: 700, color: 'hsl(var(--text-main) / 0.8)' }}>Number of Beneficiaries</div>
            <div></div>
          </div>

          {/* Rows */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {beneficiaries.map((row: any, idx: number) => (
              <div key={idx} style={{ display: 'grid', gridTemplateColumns: 'minmax(250px, 1fr) 1fr 48px', gap: '1.5rem', alignItems: 'center' }}>
                <InputField label="" value={row.type} onChange={(e: any) => updateRow(idx, 'type', e.target.value)} placeholder="e.g. Small Farmers" />
                <InputField label="" type="number" value={row.count} onChange={(e: any) => updateRow(idx, 'count', e.target.value)} placeholder="e.g. 5000" />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <button type="button" onClick={() => removeRow(idx)} style={{ background: 'none', border: 'none', color: 'hsl(var(--error))', cursor: 'pointer', padding: '0.5rem' }}>
                    <Trash2 size={18} />
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
