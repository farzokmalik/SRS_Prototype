import React from 'react';
import { useForm } from '../../../context/FormContext';
import { InputField } from '../../ui/FormElements';

export const Section1_Identification: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.pc4.s1;

  const handleUpdate = (updates: any) => {
    updateSection('pc4', { s1: { ...data, ...updates } });
  };

  return (
    <div className="card">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <InputField 
          label="Project Name (Must match PC-I)" 
          placeholder="Enter the full name of the project" 
          required 
          value={data.projectName}
          onChange={(e) => handleUpdate({ projectName: e.target.value })}
        />
        <InputField 
          label="Location(s)" 
          placeholder="Enter project location(s)" 
          required 
          value={data.locations}
          onChange={(e) => handleUpdate({ locations: e.target.value })}
        />
      </div>
    </div>
  );
};
