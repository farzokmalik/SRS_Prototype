import React from 'react';
import { useForm } from '../../../context/FormContext';
import { InputField } from '../../ui/FormElements';

export const Section1_ProjectTitle: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.section1 || { projectTitle: '' };

  const handleChange = (value: string) => {
    updateSection('section1', { projectTitle: value });
  };

  return (
    <div className="space-y-6">
      <div className="card shadow-sm">
        
        <div style={{ maxWidth: '800px' }}>
          <InputField 
            label="Full Project Title" 
            placeholder="Enter the complete name/title of the project..."
            value={data.projectTitle}
            onChange={(e: any) => handleChange(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

