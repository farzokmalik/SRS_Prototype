import React from 'react';
import { useForm } from '../../../context/FormContext';
import { SelectField } from '../../ui/FormElements';

/** Department / agency choices (includes values aligned with common Punjab PC forms). */
const AGENCY_OPTIONS = [
  { value: 'Punjab Information Technology Board', label: 'Punjab Information Technology Board' },
  { value: 'Zakat and Ushr Punjab', label: 'Zakat and Ushr' },
  { value: 'School Education Department', label: 'School Education Department' },
  { value: 'Health Department', label: 'Health Department' },
  { value: 'Planning & Development Board', label: 'Planning & Development Board' },
  { value: 'Agriculture Department', label: 'Agriculture Department' },
  { value: 'Irrigation Department', label: 'Irrigation Department' },
  { value: 'LG&CD Department', label: 'LG&CD Department' },
  { value: 'Livestock & Dairy Development', label: 'Livestock & Dairy Development' },
];

const FEDERAL_MINISTRY_OPTIONS = [
  { value: 'Planning', label: 'Ministry of Planning, Development & Special Initiatives' },
  { value: 'Finance', label: 'Ministry of Finance' },
  { value: 'Education', label: 'Ministry of Federal Education and Professional Training' },
  { value: 'IT', label: 'Ministry of Information Technology and Telecommunication' },
];

const OM_AGENCY_OPTIONS = [
  { value: 'Executing', label: 'Executing Agency' },
  { value: 'User Dept', label: 'User Department' },
  { value: 'LG&CD', label: 'Local Government & Community Development' },
  { value: 'Third Party', label: 'Third Party / Other' },
];

export const Section3_AuthoritiesResponsible: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.pc4.s3;

  const handleUpdate = (updates: Record<string, unknown>) => {
    updateSection('pc4', { s3: { ...data, ...updates } });
  };

  return (
    <div className="card">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          <SelectField
            label="[PC-IV-3.1] Sponsoring Authority"
            value={data.sponsoringAgency ?? ''}
            onChange={(e) => handleUpdate({ sponsoringAgency: e.target.value })}
            options={AGENCY_OPTIONS}
          />
          <SelectField
            label="[PC-IV-3.2] Executing Authority"
            value={data.executingAgency ?? ''}
            onChange={(e) => handleUpdate({ executingAgency: e.target.value })}
            options={AGENCY_OPTIONS}
          />
        
          <SelectField
            label="[PC-IV-3.3] Operating / Maintaining Authority"
            value={data.omAgency ?? ''}
            onChange={(e) => handleUpdate({ omAgency: e.target.value })}
            options={OM_AGENCY_OPTIONS}
          />
            <SelectField
            label="[PC-IV-3.4] Federal Ministry"
            value={data.federalMinistry ?? ''}
            onChange={(e) => handleUpdate({ federalMinistry: e.target.value })}
            options={FEDERAL_MINISTRY_OPTIONS}
          />
        </div>
      </div>
    </div>
  );
};
