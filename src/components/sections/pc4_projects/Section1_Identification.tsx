import React from 'react';
import { useForm } from '../../../context/FormContext';
import { InputField, SelectField } from '../../ui/FormElements';
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
          <InputField 
          label="[PC-IV-1.1] Project Title" 
          placeholder="Enter the full name of the project" 
          required 
          value={data.projectName}
          onChange={(e) => handleUpdate({ projectName: e.target.value })}
        />
        <SelectField 
          label="[PC-IV-1.2] Project ID" 
          required 
          value={data.projectId}
          onChange={(e) => handleUpdate({ projectId: e.target.value })}
          options={[
            { value: 'PRJ-001', label: 'PRJ-001' },
            { value: 'PRJ-002', label: 'PRJ-002' },
            { value: 'PRJ-003', label: 'PRJ-003' },
            { value: 'PRJ-004', label: 'PRJ-004' },
            { value: 'PRJ-005', label: 'PRJ-005' }
          ]}
        />
      
        <SelectField
          label="[PC-IV-1.3] Administrative Department"
          value={data.administrativeDepartment ?? ''}
          onChange={(e) => handleUpdate({ administrativeDepartment: e.target.value })}
          options={ADMIN_DEPARTMENT_OPTIONS}
        />
        <SelectField
          label="[PC-IV-1.4] Location type"
          value={data.locationType ?? ''}
          onChange={(e) => handleUpdate({ locationType: e.target.value })}
          options={LOCATION_TYPE_OPTIONS}
        />
        <Pc4LocationBlock />
      </div>
    </div>
  );
};
