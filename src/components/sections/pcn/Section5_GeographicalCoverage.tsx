import React from 'react';
import { useForm } from '../../../context/FormContext';
import { RadioGroup, MultiCheckGroup } from '../../ui/FormElements';

const DISTRICTS = [
  'Bahawalnagar', 'Bahawalpur', 'D.G. Khan', 'Khanewal', 'Layyah', 
  'Lodhran', 'Multan', 'Muzaffargarh', 'R.Y. Khan', 'Rajanpur', 'Vehari'
];

export const Section5_GeographicalCoverage: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.section5 || { type: 'Whole Province', districts: [] };

  const handleChange = (field: string, value: any) => {
    updateSection('section5', { [field]: value });
  };

  return (
    <div className="space-y-6">
      <div className="card shadow-sm">
        
        <div className="space-y-6" style={{ maxWidth: '800px' }}>
          <RadioGroup 
            label="Coverage Selection"
            name="coverageType"
            options={[
              { label: 'Whole Province', value: 'Whole Province' },
              { label: 'Specific Districts', value: 'Specific Districts' }
            ]}
            value={data.type}
            onChange={(val) => handleChange('type', val)}
          />

          {data.type === 'Specific Districts' && (
            <div className="animate-fade-in card" style={{ background: 'hsl(var(--bg-main) / 0.3)', border: '1px dotted hsl(var(--border))' }}>
              <MultiCheckGroup 
                label="Select Districts"
                options={DISTRICTS}
                value={data.districts}
                onChange={(val) => handleChange('districts', val)}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
