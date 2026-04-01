import React from 'react';
import { useForm } from '../../../context/FormContext';
import { SelectField, InputField } from '../../ui/FormElements';

export const Section14_Priority: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.section14 || { priority: '', rank: '' };

  const handleChange = (field: string, value: string) => {
    updateSection('section14', { [field]: value });
  };

  return (
    <div className="space-y-6">
      <div className="card shadow-sm">
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', maxWidth: '1200px' }}>
          <SelectField 
            label="Project Priority Level" 
            options={[
              { label: 'High', value: 'High' },
              { label: 'Normal', value: 'Normal' },
              { label: 'Low', value: 'Low' }
            ]}
            value={data.priority}
            onChange={(e: any) => handleChange('priority', e.target.value)}
            required
          />
          <InputField 
            label="Numeric Rank Field" 
            type="number"
            placeholder="e.g. 1, 2, 3..."
            value={data.rank}
            onChange={(e: any) => handleChange('rank', e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};
