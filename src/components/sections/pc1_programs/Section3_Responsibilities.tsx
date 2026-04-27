import React from 'react';
import { useForm } from '../../../context/FormContext';
import { SelectField, FileUpload } from '../../ui/FormElements';
import { Users } from 'lucide-react';

const SUB_SECTORS = [
  'School Education', 'Higher Education', 'Special Education', 'Literacy & Non-Formal Education',
  'Sports & Youth Affairs', 'Specialized Health Care & Medical Education', 'Health & Population',
  'Water Supply & Sanitation', 'Social Welfare', 'Women Development', 'LG&CD',
  'Roads', 'Irrigation', 'Energy', 'Public Buildings', 'Urban Development',
  'Agriculture', 'Cooperatives', 'Forestry', 'Wildlife', 'Fisheries',
  'Price Control & Commodities Management', 'Livestock & Dairy Development',
  'Industries, Commerce & Investment', 'Skill Development & Entrepreneurship',
  'Mines & Minerals', 'Tourism', 'Governance & Information Technology',
  'Labour & HR Development', 'Transport', 'Emergency Service (1122)',
  'Environment & Climate Change', 'Information & Culture', 'Archaeology',
  'Auqaf & Religious Affairs', 'Human Rights & Minority Affairs',
  'Planning & Development', 'Special Programme / Initiatives'
];

export const Section3_Responsibilities: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.section3;

  const handleUpdate = (updates: any) => {
    updateSection('section3', updates);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div className="card">
        <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Users size={20} color="hsl(var(--accent))" /> Sponsoring & Executing Agencies
        </h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          <SelectField 
            label="Sponsoring Agency" 
            value={data.sponsoringAgency || ''} 
            onChange={(e) => handleUpdate({ sponsoringAgency: e.target.value })}
            options={SUB_SECTORS.map(s => ({ value: s, label: s }))}
          />
          <SelectField 
            label="Executing Agency" 
            value={data.executingAgencies?.[0] || ''}
            onChange={(e) => handleUpdate({ executingAgencies: [e.target.value] })}
            options={SUB_SECTORS.map(s => ({ value: s, label: s }))}
          />
        </div>
      </div>

      <div className="card">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
           <SelectField 
             label="Federal Ministry (if any)" 
             value={data.federalMinistry || ''}
             onChange={(e) => handleUpdate({ federalMinistry: e.target.value })}
             options={[
               { value: '', label: 'None' },
               { value: 'Planning', label: 'Ministry of Planning' }, 
               { value: 'Finance', label: 'Ministry of Finance' },
               { value: 'Education', label: 'Ministry of Education' }
             ]}
           />
           <SelectField 
             label="Operation & Maintenance Agency" 
             value={data.omAgency || ''}
             onChange={(e) => handleUpdate({ omAgency: e.target.value })}
             options={[
               { value: 'Executing', label: 'Executing Agency' }, 
               { value: 'User Dept', label: 'User Department' },
               { value: 'Other', label: 'Third Party / Other' }
             ]}
           />
        </div>
      </div>

      <div className="card">
        <FileUpload
          label="Agency Attachments"
          files={data.respAttachments || []}
          onUpload={(files) => handleUpdate({ respAttachments: files })}
          onRemove={(idx) => handleUpdate({ respAttachments: (data.respAttachments || []).filter((_: any, i: number) => i !== idx) })}
          description="Upload formal letters, delegation of powers, or agency mandates"
        />
      </div>
    </div>
  );
};
