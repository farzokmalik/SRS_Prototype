import React from 'react';
import { useForm } from '../../../../context/FormContext';
import { InputField } from '../../../ui/FormElements';

export const Section1_ProjectName: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.pc3a?.s1 || { projectName: '' };

  const handleChange = (val: string) => {
    updateSection('pc3a', { s1: { projectName: val } });
  };

  return (
    <div className="space-y-6">
      <div className="card shadow-sm">
        <div className="space-y-6" style={{ maxWidth: '800px' }}>
          <InputField 
            label="Project Name" 
            placeholder="Enter the full name of the project as per PC-I"
            value={data.projectName}
            onChange={(e: any) => handleChange(e.target.value)}
            required
          />
        </div>
      </div>
    </div>
  );
};
