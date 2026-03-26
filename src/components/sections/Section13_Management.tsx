import React from 'react';
import { useForm } from '../../context/FormContext';
import { RTEditor } from '../ui/RTEditor';

export const Section13_Management: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.section13;

  const handleUpdate = (updates: any) => {
    updateSection('section13', { ...data, ...updates });
  };

  return (
    <div className="card">
      <RTEditor 
        label="Management Structure and Manpower Requirements" 
        value={data.management} 
        onChange={(val) => handleUpdate({ management: val })} 
      />
    </div>
  );
};
