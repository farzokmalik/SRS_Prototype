import React from 'react';
import { useForm } from '../../../context/FormContext';
import { InputField, SelectField } from '../../ui/FormElements';

export const Section1_Identification: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.pc4p.s1;

  const handleUpdate = (updates: any) => {
    updateSection('pc4p', { s1: { ...data, ...updates } });
  };

  return (
    <div className="card">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <SelectField 
          label="Project ID" 
          required 
          value={data.projectId}
          onChange={(e) => handleUpdate({ projectId: e.target.value })}
          options={[
            { value: 'PRJ-001', label: 'PRJ-001' },
            { value: 'PRJ-002', label: 'PRJ-002' },
            { value: 'PRJ-003', label: 'PRJ-003' },
            { value: 'PRJ-004', label: 'PRJ-004' },
            { value: 'PRJ-005', label: 'PRJ-005' }
          ]}
        />
        <InputField 
          label="Program Name (Must match PC-I)" 
          placeholder="Enter the full name of the program" 
          required 
          value={data.programName}
          onChange={(e) => handleUpdate({ programName: e.target.value })}
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
