import React from 'react';
import { useForm } from '../../../context/FormContext';
import { InputField, SelectField } from '../../ui/FormElements';
import { Trash2 } from 'lucide-react';

const YEARS = ['2023-24', '2024-25', '2025-26', '2026-27', '2027-28', '2028-29', '2029-30'];

export const Section10_FinancialPhasing: React.FC = () => {
  const { formData, updateSection } = useForm();
  const sectionData = formData.section10 || {};
  const phasing = (Array.isArray(sectionData.phasing) && sectionData.phasing.length > 0)
    ? sectionData.phasing
    : [{ year: '', local: '', foreign: '', total: '' }];

  const handleChange = (list: any[]) => {
    updateSection('section10', { phasing: list });
  };

  const addRow = () => {
    handleChange([...phasing, { year: '', local: '', foreign: '', total: '' }]);
  };

  const updateRow = (idx: number, field: string, val: string) => {
    const list = [...phasing];
    list[idx] = { ...list[idx], [field]: val };
    handleChange(list);
  };

  const removeRow = (idx: number) => {
    const list = [...phasing];
    list.splice(idx, 1);
    handleChange(list.length > 0 ? list : [{ year: '', local: '', foreign: '', total: '' }]);
  };

  return (
    <div className="space-y-6">
      <div className="card shadow-sm">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid hsl(var(--border))', paddingBottom: '1rem' }}>
          <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'hsl(var(--primary))', margin: 0 }}>Financial Phasing</h4>
          <button type="button" onClick={addRow} className="btn btn-secondary btn-sm shadow-sm" style={{ padding: '0.6rem 1.25rem', borderRadius: 'var(--radius-lg)' }}>
            Add Phasing Year
          </button>
        </div>
        
        <div style={{ padding: '0 1rem' }}>
          {/* Headers */}
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(180px, 1fr) 1fr 1fr 1fr 48px', gap: '1.5rem', marginBottom: '0.75rem' }}>
            <div style={{ textAlign: 'left', fontSize: '0.94rem', fontWeight: 700, color: 'hsl(var(--text-main) / 0.8)' }}>Year</div>
            <div style={{ textAlign: 'left', fontSize: '0.94rem', fontWeight: 700, color: 'hsl(var(--text-main) / 0.8)' }}>Local Amount</div>
            <div style={{ textAlign: 'left', fontSize: '0.94rem', fontWeight: 700, color: 'hsl(var(--text-main) / 0.8)' }}>Foreign Amount</div>
            <div style={{ textAlign: 'left', fontSize: '0.94rem', fontWeight: 700, color: 'hsl(var(--text-main) / 0.8)' }}>Total Amount</div>
            <div></div>
          </div>

          {/* Rows */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {phasing.map((row: any, idx: number) => (
              <div key={idx} style={{ display: 'grid', gridTemplateColumns: 'minmax(180px, 1fr) 1fr 1fr 1fr 48px', gap: '1.5rem', alignItems: 'center' }}>
                <SelectField label="" options={YEARS} value={row.year} onChange={(e: any) => updateRow(idx, 'year', e.target.value)} />
                <InputField label="" type="number" value={row.local} onChange={(e: any) => updateRow(idx, 'local', e.target.value)} />
                <InputField label="" type="number" value={row.foreign} onChange={(e: any) => updateRow(idx, 'foreign', e.target.value)} />
                <InputField label="" type="number" value={row.total} onChange={(e: any) => updateRow(idx, 'total', e.target.value)} />
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
