import React from 'react';
import { useForm } from '../../../../context/FormContext';
import { InputField } from '../../../ui/FormElements';

export const Section2_FinancialStatus: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.pc3b?.s2 || { psdpFunding: '500.00', cashPlanReq: '125.00', releases: '', expenditure: '' };

  const handleChange = (field: string, val: string) => {
    updateSection('pc3b', { s2: { ...data, [field]: val } });
  };

  return (
    <div className="space-y-6">
      <div className="card shadow-sm">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', maxWidth: '1000px' }}>
          <div style={{ position: 'relative' }}>
            <InputField 
              label="PSDP Funding (Rs. Million)" 
              value={data.psdpFunding}
              disabled
              style={{ background: 'hsl(var(--bg-main) / 0.5)' }}
            />
            <span style={{ position: 'absolute', top: '0', right: '0', fontSize: '0.7rem', fontWeight: 600, color: 'hsl(var(--text-muted))', background: 'hsl(var(--bg-main))', padding: '0.15rem 0.4rem', borderRadius: '4px' }}>Pre-filled</span>
          </div>
          
          <div style={{ position: 'relative' }}>
            <InputField 
              label="Qtr Cash Plan Requirement" 
              value={data.cashPlanReq}
              disabled
              style={{ background: 'hsl(var(--bg-main) / 0.5)' }}
            />
            <span style={{ position: 'absolute', top: '0', right: '0', fontSize: '0.7rem', fontWeight: 600, color: 'hsl(var(--text-muted))', background: 'hsl(var(--bg-main))', padding: '0.15rem 0.4rem', borderRadius: '4px' }}>Pre-filled</span>
          </div>

          <InputField 
            label="Releases During Month (Rs. M)" 
            type="number"
            placeholder="0.00"
            value={data.releases}
            onChange={(e: any) => handleChange('releases', e.target.value)}
          />

          <InputField 
            label="Expenditure During Month (Rs. M)" 
            type="number"
            placeholder="0.00"
            value={data.expenditure}
            onChange={(e: any) => handleChange('expenditure', e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};
