import React from 'react';
import { useForm } from '../../../context/FormContext';
import { MultiCheckGroup, TextAreaField } from '../../ui/FormElements';

const GROWTH_AREAS = [
  'Agriculture & Livestock', 'Industrial Value Addition', 'Information Technology', 
  'Energy Efficiency', 'Human Capital Development', 'Tourism & Culture', 
  'Urban Development', 'Small & Medium Enterprises (SMEs)'
];

export const Section15_GrowthStrategy: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.section15 || { applicableAreas: [], alignmentReason: '' };

  const handleChange = (field: string, value: any) => {
    updateSection('section15', { [field]: value });
  };

  return (
    <div className="space-y-6">
      <div className="card shadow-sm">
        
        <div className="space-y-8" style={{ maxWidth: '1200px' }}>
          <MultiCheckGroup 
            label="[PC-N-15.1] Applicable Growth Strategy Areas"
            options={GROWTH_AREAS}
            value={data.applicableAreas}
            onChange={(val) => handleChange('applicableAreas', val)}
            columns={3}
          />

          <TextAreaField 
            label="[PC-N-15.2] Alignment Reason & Justification" 
            rows={8}
            placeholder="Provide a detailed explanation of how the project aligns with the selected growth strategy areas..."
            value={data.alignmentReason}
            onChange={(e: any) => handleChange('alignmentReason', e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};
