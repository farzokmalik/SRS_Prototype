import React from 'react';
import { useForm } from '../../../context/FormContext';
import { InputField } from '../../ui/FormElements';

export const Section9_GestationPeriod: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.section9 || { startDate: '', endDate: '' };

  const handleChange = (field: string, value: string) => {
    updateSection('section9', { [field]: value });
  };

  return (
    <div className="space-y-6">
      <div className="card shadow-sm">
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', maxWidth: '800px' }}>
          <InputField 
            label="Start Date" 
            type="date"
            value={data.startDate}
            onChange={(e: any) => handleChange('startDate', e.target.value)}
            required
          />
          <InputField 
            label="End Date" 
            type="date"
            value={data.endDate}
            onChange={(e: any) => handleChange('endDate', e.target.value)}
            required
          />
        </div>
      </div>
    </div>
  );
};
