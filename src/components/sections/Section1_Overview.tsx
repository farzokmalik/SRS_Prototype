import React, { useEffect } from 'react';
import { useForm } from '../../context/FormContext';
import { InputField, SelectField, MultiCheckGroup, RadioGroup } from '../ui/FormElements';

const SECTOR_OPTIONS = {
  'Social Sectors': ['School Education', 'Higher Education', 'Health', 'Sports', 'Tourism'],
  'Infrastructure Development': ['Roads', 'Bridges', 'Water Supply', 'Sanitation'],
  'Production Sectors': ['Agriculture', 'Livestock', 'Fisheries', 'Industries'],
  'Services Sectors': ['Transport', 'Communication', 'Governance'],
  'Others': ['Miscellaneous'],
  'Special Initiatives': ['CM Package', 'PM Package']
};

export const Section1_Overview: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.section1;

  const handleUpdate = (updates: any) => {
    updateSection('section1', updates);
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
      <div className="card" style={{ gridColumn: 'span 2' }}>
        <InputField 
          label="Project Title" 
          placeholder="Enter the full formal name of the project" 
          required 
          value={data.projectTitle}
          onChange={(e) => handleUpdate({ projectTitle: e.target.value })}
        />
      </div>

      <div className="card">
        <SelectField 
          label="Project Start Year" 
          required 
          value={data.startYear}
          onChange={(e) => handleUpdate({ startYear: e.target.value })}
          options={[
            { value: '2023-2024', label: '2023-2024' },
            { value: '2024-2025', label: '2024-2025' },
            { value: '2025-2026', label: '2025-2026' }
          ]}
        />
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <InputField 
            label="Start Date" 
            type="date" 
            required 
            value={data.startDate}
            onChange={(e) => handleUpdate({ startDate: e.target.value })}
          />
          <InputField 
            label="End Date" 
            type="date" 
            required 
            value={data.endDate}
            onChange={(e) => handleUpdate({ endDate: e.target.value })}
          />
        </div>
      </div>

      <div className="card">
        <InputField 
          label="GS No." 
          placeholder="e.g. GS-2024-X10" 
          required 
          value={data.gsNo}
          onChange={(e) => handleUpdate({ gsNo: e.target.value })}
        />
        
        <SelectField 
          label="Administrative Department" 
          required 
          value={data.adminDept}
          onChange={(e) => handleUpdate({ adminDept: e.target.value })}
          options={[
             { value: 'School Education Department', label: 'School Education Department' },
             { value: 'Health Department', label: 'Health Department' },
             { value: 'Planning & Development', label: 'Planning & Development' }
          ]}
        />
      </div>

      <div className="card" style={{ gridColumn: 'span 2' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          <SelectField 
            label="Main Sector" 
            required 
            value={data.mainSector}
            onChange={(e) => handleUpdate({ mainSector: e.target.value, sector: '' })}
            options={Object.keys(SECTOR_OPTIONS).map(s => ({ value: s, label: s }))}
          />
          <SelectField 
            label="Sector" 
            required 
            disabled={!data.mainSector}
            value={data.sector}
            onChange={(e) => handleUpdate({ sector: e.target.value })}
            options={(SECTOR_OPTIONS[data.mainSector as keyof typeof SECTOR_OPTIONS] || []).map(s => ({ value: s, label: s }))}
          />
        </div>
      </div>

      <div className="card">
        <RadioGroup 
          label="Location Type" 
          required 
          name="locationType"
          value={data.locationType}
          onChange={(val) => handleUpdate({ locationType: val })}
          options={[
            { value: 'Rural', label: 'Rural' },
            { value: 'Urban', label: 'Urban' },
            { value: 'Both', label: 'Both' }
          ]}
        />
        
        <SelectField 
          label="Project Status" 
          required 
          value={data.projectStatus}
          onChange={(e) => handleUpdate({ projectStatus: e.target.value })}
          options={[
            { value: 'Approved', label: 'Approved' },
            { value: 'Unapproved', label: 'Unapproved' },
            { value: 'Dropped', label: 'Dropped' }
          ]}
        />
      </div>

      <div className="card">
        <MultiCheckGroup 
          label="Project Status Type" 
          required 
          options={['Programme', 'Flagship/Mega Project', 'PPP', 'PM Package', 'CM Package', 'Block']}
          value={data.statusType}
          onChange={(vals) => handleUpdate({ statusType: vals })}
        />
      </div>
    </div>
  );
};
