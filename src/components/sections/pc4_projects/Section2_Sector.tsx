import React from 'react';
import { useForm } from '../../../context/FormContext';
import { SelectField } from '../../ui/FormElements';

const SECTOR_OPTIONS = {
  'Social Sectors': [
    'School Education',
    'Higher Education',
    'Special Education',
    'Literacy & Non-Formal Education',
    'Sports & Youth Affairs',
    'Specialized Health Care & Medical Education',
    'Health & Population',
    'Water Supply & Sanitation',
    'Social Welfare',
    'Women Development',
    'LG&CD',
  ],
  'Infrastructure Development': ['Roads', 'Irrigation', 'Energy', 'Public Buildings', 'Urban Development'],
  'Production Sectors': [
    'Agriculture',
    'Cooperatives',
    'Forestry',
    'Wildlife',
    'Fisheries',
    'Price Control & Commodities Management',
    'Livestock & Dairy Development',
    'Industries, Commerce & Investment',
    'Skill Development & Entrepreneurship',
    'Mines & Minerals',
    'Tourism',
  ],
  'Services Sectors': [
    'Governance & Information Technology',
    'Labour & HR Development',
    'Transport',
    'Emergency Service (1122)',
  ],
  Others: [
    'Environment & Climate Change',
    'Information & Culture',
    'Archaeology',
    'Auqaf & Religious Affairs',
    'Human Rights & Minority Affairs',
    'Planning & Development',
  ],
  'Special Initiatives': ['Special Programme / Initiatives'],
};

export const Section2_Sector: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.pc4.s2;

  const handleUpdate = (updates: Record<string, unknown>) => {
    updateSection('pc4', { s2: { ...data, ...updates } });
  };

  return (
    <div className="card">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          <SelectField
            label="Sector"
            value={data.sector ?? ''}
            onChange={(e) => handleUpdate({ sector: e.target.value, subSector: '' })}
            options={Object.keys(SECTOR_OPTIONS).map((s) => ({ value: s, label: s }))}
          />
          <SelectField
            label="Sub-Sector"
            disabled={!data.sector}
            value={data.subSector ?? ''}
            onChange={(e) => handleUpdate({ subSector: e.target.value })}
            options={(SECTOR_OPTIONS[data.sector as keyof typeof SECTOR_OPTIONS] || []).map((s) => ({
              value: s,
              label: s,
            }))}
          />
        </div>
      </div>
    </div>
  );
};
