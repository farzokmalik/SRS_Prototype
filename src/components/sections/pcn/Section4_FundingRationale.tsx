import React from 'react';
import { useForm } from '../../../context/FormContext';
import { RadioGroup, TextAreaField } from '../../ui/FormElements';

export const Section4_FundingRationale: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.section4 || { adpFunding: 'No', justification: '' };

  const handleChange = (field: string, value: string) => {
    updateSection('section4', { [field]: value });
  };

  return (
    <div className="space-y-6">
      <div className="card shadow-sm">
        
        <div className="space-y-6" style={{ maxWidth: '800px' }}>
          <RadioGroup 
            label="Does this project qualify for ADP Funding?"
            name="adpFunding"
            options={[
              { label: 'Yes', value: 'Yes' },
              { label: 'No', value: 'No' }
            ]}
            value={data.adpFunding}
            onChange={(val) => handleChange('adpFunding', val)}
          />

          {data.adpFunding === 'Yes' && (
            <div className="animate-fade-in">
              <TextAreaField 
                label="Justification for ADP Funding" 
                rows={4}
                placeholder="Explain why this project is a priority for ADP allocation..."
                value={data.justification}
                onChange={(e: any) => handleChange('justification', e.target.value)}
                required
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
