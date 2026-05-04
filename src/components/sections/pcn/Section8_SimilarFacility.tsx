import React from 'react';
import { useForm } from '../../../context/FormContext';
import { InputField, RadioGroup } from '../../ui/FormElements';

export const Section8_SimilarFacility: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.section8 || { hasFacility: 'No', facilityTitle: '', facilityLocation: '' };

  const handleChange = (field: string, value: string) => {
    updateSection('section8', { [field]: value });
  };

  return (
    <div className="space-y-6">
      <div className="card shadow-sm">
        
        <div className="space-y-6" style={{ maxWidth: '1200px' }}>
          <RadioGroup 
            label="[PCN-8.1] Is there a nearest similar facility?"
            name="hasFacility"
            options={[
              { label: 'Yes', value: 'Yes' },
              { label: 'No', value: 'No' }
            ]}
            value={data.hasFacility}
            onChange={(val) => handleChange('hasFacility', val)}
          />

          {data.hasFacility === 'Yes' && (
            <div className="animate-fade-in grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField 
                label="[PCN-8.2] Facility Title" 
                placeholder="e.g. District General Hospital"
                value={data.facilityTitle || ''}
                onChange={(e: any) => handleChange('facilityTitle', e.target.value)}
                required
              />
              <InputField 
                label="[PCN-8.3] Facility Location" 
                placeholder="e.g. 5km North of Project Site"
                value={data.facilityLocation || ''}
                onChange={(e: any) => handleChange('facilityLocation', e.target.value)}
                required
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
