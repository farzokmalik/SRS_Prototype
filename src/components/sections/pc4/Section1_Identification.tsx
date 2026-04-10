import React from 'react';
import { useForm } from '../../../context/FormContext';
import { TextAreaField, SelectField } from '../../ui/FormElements';
import { Pc4LocationBlock } from './Pc4LocationBlock';

const ADMIN_DEPARTMENT_OPTIONS = [
  { value: 'School Education Department', label: 'School Education Department' },
  { value: 'Health Department', label: 'Health Department' },
  { value: 'Planning & Development', label: 'Planning & Development' },
  { value: 'Zakat & Ushr Punjab, Lahore', label: 'Zakat & Ushr Punjab, Lahore' },
];

const LOCATION_TYPE_OPTIONS = [
  { value: 'Rural', label: 'Rural' },
  { value: 'Urban', label: 'Urban' },
  { value: 'Both', label: 'Both' },
];

export const Section1_Identification: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.pc4.s1;

  const handleUpdate = (updates: Record<string, unknown>) => {
    updateSection('pc4', { s1: { ...data, ...updates } });
  };

  return (
    <div className="card">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <TextAreaField
          label="Project Title"
          placeholder="Enter project title"
          rows={4}
          value={data.projectTitle ?? ''}
          onChange={(e) => handleUpdate({ projectTitle: e.target.value })}
        />
        <SelectField
          label="Administrative Department"
          value={data.administrativeDepartment ?? ''}
          onChange={(e) => handleUpdate({ administrativeDepartment: e.target.value })}
          options={ADMIN_DEPARTMENT_OPTIONS}
        />
        <SelectField
          label="Location Type"
          value={data.locationType ?? ''}
          onChange={(e) => handleUpdate({ locationType: e.target.value })}
          options={LOCATION_TYPE_OPTIONS}
        />
        <Pc4LocationBlock />
      </div>
    </div>
  );
};
