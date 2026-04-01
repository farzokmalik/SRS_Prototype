import React from 'react';
import { useForm } from '../../../context/FormContext';
import { InputField } from '../../ui/FormElements';

export const Section11_OperatingCost: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.section11 || {
    maintenance: '', hr: '', operation: '', repairs: '', others: ''
  };

  const handleChange = (field: string, value: string) => {
    updateSection('section11', { [field]: value });
  };

  return (
    <div className="space-y-6">
      <div className="card shadow-sm">
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', maxWidth: '1200px' }}>
          <InputField label="Maintenance Cost" type="number" value={data.maintenance} onChange={(e: any) => handleChange('maintenance', e.target.value)} />
          <InputField label="HR Cost" type="number" value={data.hr} onChange={(e: any) => handleChange('hr', e.target.value)} />
          <InputField label="Operational Cost" type="number" value={data.operation} onChange={(e: any) => handleChange('operation', e.target.value)} />
          <InputField label="Repairs Cost" type="number" value={data.repairs} onChange={(e: any) => handleChange('repairs', e.target.value)} />
          <InputField label="Others" type="number" value={data.others} onChange={(e: any) => handleChange('others', e.target.value)} />
        </div>
      </div>
    </div>
  );
};
