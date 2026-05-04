import React from 'react';
import { useForm } from '../../../context/FormContext';
import { SelectField, TextAreaField, MultiCheckGroup } from '../../ui/FormElements';

const SDG_GOALS = [
  'Goal 1: No Poverty', 'Goal 2: Zero Hunger', 'Goal 3: Good Health and Well-being', 
  'Goal 4: Quality Education', 'Goal 5: Gender Equality', 'Goal 6: Clean Water and Sanitation',
  'Goal 7: Affordable and Clean Energy', 'Goal 8: Decent Work and Economic Growth',
  'Goal 9: Industry, Innovation and Infrastructure', 'Goal 10: Reduced Inequalities',
  'Goal 11: Sustainable Cities and Communities', 'Goal 12: Responsible Consumption and Production',
  'Goal 13: Climate Action', 'Goal 14: Life Below Water', 'Goal 15: Life on Land',
  'Goal 16: Peace, Justice and Strong Institutions', 'Goal 17: Partnerships for the Goals'
];

const GROWTH_PILLARS = [
  'Institutional Reform', 'Human Capital Development', 'Public Private Partnership', 
  'Infrastructure Development', 'Digital Transformation', 'Sustainable Environment'
];

export const Section7_SDGCompliance: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.section7 || { sdgGoal: '', explanation: '', pillars: [], pillarExplanation: '' };

  const handleChange = (field: string, value: any) => {
    updateSection('section7', { [field]: value });
  };

  return (
    <div className="space-y-6">
      <div className="card shadow-sm">
        
        <div className="space-y-6" style={{ maxWidth: '1200px' }}>
          <SelectField 
            label="[PCN-7.1] Primary SDG Goal Alignment"
            options={SDG_GOALS}
            value={data.sdgGoal}
            onChange={(e: any) => handleChange('sdgGoal', e.target.value)}
          />

          <TextAreaField 
            label="[PCN-7.2] Compliance Explanation" 
            rows={4}
            placeholder="Describe how the project targets and indicators align with the selected SDG..."
            value={data.explanation}
            onChange={(e: any) => handleChange('explanation', e.target.value)}
          />

          <MultiCheckGroup 
            label="[PCN-7.3] Growth Pillars Alignment"
            options={GROWTH_PILLARS}
            value={data.pillars}
            onChange={(val) => handleChange('pillars', val)}
            columns={3}
          />

          <TextAreaField 
            label="[PCN-7.4] Pillars Justification" 
            rows={4}
            placeholder="Detailed reasoning for alignment with selected growth pillars..."
            value={data.pillarExplanation}
            onChange={(e: any) => handleChange('pillarExplanation', e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};
