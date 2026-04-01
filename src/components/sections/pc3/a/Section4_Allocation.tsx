import React from 'react';
import { useForm } from '../../../../context/FormContext';
import { InputField } from '../../../ui/FormElements';

export const Section4_Allocation: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.pc3a?.s4 || { total: '', local: '', fec: '' };

  const handleChange = (field: string, val: string) => {
    updateSection('pc3a', { s4: { ...data, [field]: val } });
  };

  return (
    <div className="space-y-6">
      <div className="card shadow-sm">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', maxWidth: '1000px' }}>
          <InputField 
            label="Total PSDP Allocation (Rs. Million)" 
            type="number"
            placeholder="0.00"
            value={data.total}
            onChange={(e: any) => handleChange('total', e.target.value)}
          />
          <InputField 
            label="Local Component (Rs. Million)" 
            type="number"
            placeholder="0.00"
            value={data.local}
            onChange={(e: any) => handleChange('local', e.target.value)}
          />
          <InputField 
            label="Foreign Exchange Component(Million)" 
            type="number"
            placeholder="0.00"
            value={data.fec}
            onChange={(e: any) => handleChange('fec', e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};
