import React, { useEffect } from 'react';
import { useForm } from '../../../../context/FormContext';
import { InputField } from '../../../ui/FormElements';

export const Section7_CashPlan: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.pc3a?.s7 || { q1: '', q2: '', q3: '', q4: '', annualTotal: '' };

  const handleChange = (field: string, val: string) => {
    updateSection('pc3a', { s7: { ...data, [field]: val } });
  };

  useEffect(() => {
    const q1 = parseFloat(data.q1) || 0;
    const q2 = parseFloat(data.q2) || 0;
    const q3 = parseFloat(data.q3) || 0;
    const q4 = parseFloat(data.q4) || 0;
    const total = (q1 + q2 + q3 + q4).toFixed(2);
    if (data.annualTotal !== total) {
      updateSection('pc3a', { s7: { ...data, annualTotal: total } });
    }
  }, [data.q1, data.q2, data.q3, data.q4]);

  return (
    <div className="space-y-6">
      <div className="card shadow-sm">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', maxWidth: '1000px' }}>
          <InputField label="[PC-III(a)-4.1] Q1 Requirement (Rs. M)" type="number" value={data.q1} onChange={(e: any) => handleChange('q1', e.target.value)} />
          <InputField label="[PC-III(a)-4.2] Q2 Requirement (Rs. M)" type="number" value={data.q2} onChange={(e: any) => handleChange('q2', e.target.value)} />
          <InputField label="[PC-III(a)-4.3] Q3 Requirement (Rs. M)" type="number" value={data.q3} onChange={(e: any) => handleChange('q3', e.target.value)} />
          <InputField label="[PC-III(a)-4.4] Q4 Requirement (Rs. M)" type="number" value={data.q4} onChange={(e: any) => handleChange('q4', e.target.value)} />
          
          <div style={{ position: 'relative' }}>
            <InputField 
              label="[PC-III(a)-4.5] Annual Total Requirement" 
              type="number"
              value={data.annualTotal}
              disabled
              style={{ background: 'hsl(var(--bg-main) / 0.5)' }}
            />
            {/* <span style={{ position: 'absolute', top: '0', right: '0', fontSize: '0.7rem', fontWeight: 600, color: 'hsl(var(--accent))', background: 'hsl(var(--accent-soft))', padding: '0.15rem 0.4rem', borderRadius: '4px' }}>Auto-sum</span> */}
          </div>
        </div>
      </div>
    </div>
  );
};
