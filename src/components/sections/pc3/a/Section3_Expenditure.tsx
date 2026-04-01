import React, { useEffect } from 'react';
import { useForm } from '../../../../context/FormContext';
import { InputField } from '../../../ui/FormElements';

export const Section3_Expenditure: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.pc3a?.s3 || { actual: '', accrued: '', total: '' };

  const handleChange = (field: string, val: string) => {
    updateSection('pc3a', { s3: { ...data, [field]: val } });
  };

  useEffect(() => {
    const actual = parseFloat(data.actual) || 0;
    const accrued = parseFloat(data.accrued) || 0;
    const total = (actual + accrued).toFixed(2);
    if (data.total !== total) {
      updateSection('pc3a', { s3: { ...data, total } });
    }
  }, [data.actual, data.accrued]);

  return (
    <div className="space-y-6">
      <div className="card shadow-sm">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', maxWidth: '1000px' }}>
          <InputField 
            label="Actual Expenditure (Rs. Million)" 
            type="number"
            placeholder="0.00"
            value={data.actual}
            onChange={(e: any) => handleChange('actual', e.target.value)}
          />
          <InputField 
            label="Accrued Expenditure (Rs. Million)" 
            type="number"
            placeholder="0.00"
            value={data.accrued}
            onChange={(e: any) => handleChange('accrued', e.target.value)}
          />
          <div style={{ position: 'relative' }}>
            <InputField 
              label="Total Expenditure (Rs. Million)" 
              type="number"
              placeholder="0.00"
              value={data.total}
              onChange={() => {}} // Read only calculation
              disabled
              style={{ background: 'hsl(var(--bg-main) / 0.5)', cursor: 'not-allowed' }}
            />
            <span style={{ position: 'absolute', top: '0', right: '0', fontSize: '0.7rem', fontWeight: 600, color: 'hsl(var(--accent))', background: 'hsl(var(--accent-soft))', padding: '0.15rem 0.4rem', borderRadius: '4px' }}>Auto-calculated</span>
          </div>
        </div>
      </div>
    </div>
  );
};
