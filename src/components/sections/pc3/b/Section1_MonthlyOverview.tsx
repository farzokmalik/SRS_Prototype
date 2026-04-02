import React from 'react';
import { useForm } from '../../../../context/FormContext';
import { InputField, SelectField } from '../../../ui/FormElements';

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const YEARS = ['2023', '2024', '2025', '2026', '2027'];

export const Section1_MonthlyOverview: React.FC = () => {
  const { formData, updateSection } = useForm();
  
  const s1 = formData.pc3b?.s1 || { projectName: '', month: '', year: '' };
  const s2 = formData.pc3b?.s2 || { psdpFunding: '500.00', cashPlanReq: '125.00', releases: '', expenditure: '' };

  const handleUpdate = (sectionKey: string, updates: any) => {
    const existing = (formData.pc3b as any)[sectionKey] || {};
    updateSection('pc3b', { [sectionKey]: { ...existing, ...updates } });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Context Card */}
      <div className="card shadow-sm">
        <h3 style={{ fontSize: '0.875rem', fontWeight: 600, color: 'hsl(var(--text-muted))', marginBottom: '1.25rem', textTransform: 'uppercase' }}>
          Reporting Context
        </h3>
        <div className="space-y-6">
          <InputField 
            label="Project Name" 
            placeholder="Search or enter project name"
            value={s1.projectName}
            onChange={(e: any) => handleUpdate('s1', { projectName: e.target.value })}
            required
          />
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <SelectField 
              label="Reporting Month" 
              value={s1.month}
              onChange={(e: any) => handleUpdate('s1', { month: e.target.value })}
              options={MONTHS.map(m => ({ value: m, label: m }))}
              required
            />
            <SelectField 
              label="Reporting Year" 
              value={s1.year}
              onChange={(e: any) => handleUpdate('s1', { year: e.target.value })}
              options={YEARS.map(y => ({ value: y, label: y }))}
              required
            />
          </div>
        </div>
      </div>

      {/* Financial Status Card */}
      <div className="card shadow-sm">
        <h3 style={{ fontSize: '0.875rem', fontWeight: 600, color: 'hsl(var(--text-muted))', marginBottom: '1.25rem', textTransform: 'uppercase' }}>
          Monthly Financial Status
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', maxWidth: '1000px' }}>
          <div style={{ position: 'relative' }}>
            <InputField 
              label="PSDP Funding (Rs. Million)" 
              value={s2.psdpFunding}
              disabled
              style={{ background: 'hsl(var(--bg-main) / 0.5)' }}
            />
            <span style={{ position: 'absolute', top: '0', right: '0', fontSize: '0.7rem', fontWeight: 600, color: 'hsl(var(--text-muted))', background: 'hsl(var(--bg-main))', padding: '0.15rem 0.4rem', borderRadius: '4px' }}>Pre-filled</span>
          </div>
          
          <div style={{ position: 'relative' }}>
            <InputField 
              label="Qtr Cash Plan Requirement" 
              value={s2.cashPlanReq}
              disabled
              style={{ background: 'hsl(var(--bg-main) / 0.5)' }}
            />
            <span style={{ position: 'absolute', top: '0', right: '0', fontSize: '0.7rem', fontWeight: 600, color: 'hsl(var(--text-muted))', background: 'hsl(var(--bg-main))', padding: '0.15rem 0.4rem', borderRadius: '4px' }}>Pre-filled</span>
          </div>

          <InputField 
            label="Releases During Month (Rs. M)" 
            type="number"
            placeholder="0.00"
            value={s2.releases}
            onChange={(e: any) => handleUpdate('s2', { releases: e.target.value })}
          />

          <InputField 
            label="Expenditure During Month (Rs. M)" 
            type="number"
            placeholder="0.00"
            value={s2.expenditure}
            onChange={(e: any) => handleUpdate('s2', { expenditure: e.target.value })}
          />
        </div>
      </div>
    </div>
  );
};
