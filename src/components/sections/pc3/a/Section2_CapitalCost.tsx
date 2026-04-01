import React from 'react';
import { useForm } from '../../../../context/FormContext';
import { InputField } from '../../../ui/FormElements';

export const Section2_CapitalCost: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.pc3a?.s2 || { capitalCost: '' };

  const handleChange = (val: string) => {
    updateSection('pc3a', { s2: { capitalCost: val } });
  };

  return (
    <div className="space-y-6">
      <div className="card shadow-sm">
        <InputField 
          label="Approved Capital Cost (Rs. Million)" 
          type="number"
          placeholder="0.00"
          value={data.capitalCost}
          onChange={(e: any) => handleChange(e.target.value)}
          required
        />
      </div>
    </div>
  );
};
