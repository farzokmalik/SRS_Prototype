import React from 'react';
import { useForm } from '../../../../context/FormContext';
import { InputField, SelectField } from '../../../ui/FormElements';

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const YEARS = ['2023', '2024', '2025', '2026', '2027'];

export const Section1_MonthlyContext: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.pc3b?.s1 || { projectName: '', month: '', year: '' };

  const handleChange = (field: string, val: string) => {
    updateSection('pc3b', { s1: { ...data, [field]: val } });
  };

  return (
    <div className="space-y-6">
      <div className="card shadow-sm">
        <div className="space-y-6" style={{ maxWidth: '800px' }}>
          <InputField 
            label="Project Name" 
            placeholder="Search or enter project name"
            value={data.projectName}
            onChange={(e: any) => handleChange('projectName', e.target.value)}
            required
          />
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <SelectField 
              label="Reporting Month" 
              value={data.month}
              onChange={(e: any) => handleChange('month', e.target.value)}
              options={MONTHS.map(m => ({ value: m, label: m }))}
              required
            />
            <SelectField 
              label="Reporting Year" 
              value={data.year}
              onChange={(e: any) => handleChange('year', e.target.value)}
              options={YEARS.map(y => ({ value: y, label: y }))}
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
};
