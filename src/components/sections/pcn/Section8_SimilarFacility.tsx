import React from 'react';
import { useForm } from '../../../context/FormContext';
import { InputField, RadioGroup } from '../../ui/FormElements';

export const Section8_SimilarFacility: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.section8 || { hasFacility: 'No', facilityTitle: '' };

  const handleChange = (field: string, value: string) => {
    updateSection('section8', { [field]: value });
  };

  return (
    <div className="space-y-6">
      <div className="card shadow-sm">
        
        <div className="space-y-6" style={{ maxWidth: '800px' }}>
          <RadioGroup 
            label="Is there a nearest similar facility?"
            name="hasFacility"
            options={[
              { label: 'Yes', value: 'Yes' },
              { label: 'No / N/A', value: 'No' }
            ]}
            value={data.hasFacility}
            onChange={(val) => handleChange('hasFacility', val)}
          />

          {data.hasFacility === 'Yes' && (
            <div className="animate-fade-in">
              <InputField 
                label="Facility Title & Location" 
                placeholder="Enter the name and proximity of the facility..."
                value={data.facilityTitle}
                onChange={(e: any) => handleChange('facilityTitle', e.target.value)}
                required
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
