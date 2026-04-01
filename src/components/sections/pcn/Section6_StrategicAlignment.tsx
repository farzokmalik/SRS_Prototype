import React from 'react';
import { useForm } from '../../../context/FormContext';
import { TextAreaField } from '../../ui/FormElements';

export const Section6_StrategicAlignment: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.section6 || { sectorPlanAlignment: '' };

  const handleChange = (value: string) => {
    updateSection('section6', { sectorPlanAlignment: value });
  };

  return (
    <div className="space-y-6">
      <div className="card shadow-sm">
        
        <div style={{ maxWidth: '1200px' }}>
          <TextAreaField 
            label="Sector Plan Alignment" 
            rows={5}
            placeholder="Explain how this project aligns with the sectoral plans and provincial strategies..."
            value={data.sectorPlanAlignment}
            onChange={(e: any) => handleChange(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};
