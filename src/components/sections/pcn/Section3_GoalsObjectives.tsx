import React from 'react';
import { useForm } from '../../../context/FormContext';
import { TextAreaField } from '../../ui/FormElements';

export const Section3_GoalsObjectives: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.section3 || { objectives: '' };

  const handleChange = (value: string) => {
    updateSection('section3', { objectives: value });
  };

  return (
    <div className="space-y-6">
      <div className="card shadow-sm">
        
        <div style={{ maxWidth: '1200px' }}>
          <TextAreaField 
            label="[PCN-3.1] Objectives Statement" 
            rows={10}
            placeholder="Clearly state the primary and secondary goals of the project..."
            value={data.objectives}
            onChange={(e: any) => handleChange(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

