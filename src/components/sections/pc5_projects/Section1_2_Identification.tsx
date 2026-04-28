import React from 'react';
import { useForm } from '../../../context/FormContext';
import { SelectField } from '../../ui/FormElements';

export const Section1_Identification: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.pc5.s1;

  const handleUpdate = (updates: any) => {
    updateSection('pc5', { s1: { ...data, ...updates } });
  };

  return (
    <div className="card">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div>
          <label className="label">[PC-V-1.1] Project Name</label>
          <input 
            className="input" 
            placeholder="Enter the official project title..."
            value={data.projectName}
            onChange={(e) => handleUpdate({ projectName: e.target.value })}
          />
        </div>

        <SelectField 
          label="[PC-V-1.2] Project ID" 
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

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div>
            <label className="label">[PC-V-1.3] Reporting Financial Year</label>
            <select 
              className="select" 
              value={data.reportingYear}
              onChange={(e) => handleUpdate({ reportingYear: e.target.value })}
            >
              <option value="">Select Year...</option>
              {Array.from({ length: 10 }, (_, i) => 2024 - i).map(year => (
                <option key={year} value={`${year}-${(year + 1).toString().slice(2)}`}>
                  {year}-{(year + 1).toString().slice(2)}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="label">[PC-V-1.4] Year Number after Completion</label>
            <div style={{ display: 'flex', gap: '1rem' }}>
              {[1, 2, 3, 4, 5].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => handleUpdate({ yearAfterCompletion: num })}
                  style={{
                    flex: 1,
                    padding: '0.75rem',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid',
                    borderColor: data.yearAfterCompletion === num ? 'hsl(var(--primary))' : 'hsl(var(--border))',
                    background: data.yearAfterCompletion === num ? 'hsl(var(--primary) / 0.1)' : '#fff',
                    color: data.yearAfterCompletion === num ? 'hsl(var(--primary))' : 'hsl(var(--text-main))',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  Year {num}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Section2_Objectives: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.pc5.s2;

  const handleUpdate = (updates: any) => {
    updateSection('pc5', { s2: { ...data, ...updates } });
  };

  return (
    <div className="card">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div>
          <label className="label">[PC-V-2.1] Objectives and Scope (as per PC-I)</label>
          <textarea 
            className="input" 
            style={{ minHeight: '120px', paddingTop: '0.75rem' }}
            placeholder="Pre-filled objectives from PC-I..."
            value={data.objectives}
            onChange={(e) => handleUpdate({ objectives: e.target.value })}
          />
          <p style={{ fontSize: '0.75rem', color: 'hsl(var(--text-muted))', marginTop: '0.5rem' }}>* This field should be pre-filled from the approved PC-I but remains editable for correction.</p>
        </div>

        <div>
          <label className="label">[PC-V-2.2] Extent to which Objectives have been met</label>
          <textarea 
            className="input" 
            style={{ minHeight: '120px', paddingTop: '0.75rem' }}
            placeholder="Describe the accomplishments relative to the stated objectives..."
            value={data.extentMet}
            onChange={(e) => handleUpdate({ extentMet: e.target.value })}
          />
        </div>

        <div>
          <label className="label">[PC-V-2.3] Impact Assessment Status</label>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {['Fully met', 'Partially met', 'Not met'].map((status) => (
              <label key={status} style={{ 
                flex: 1,
                display: 'flex', 
                alignItems: 'center', 
                gap: '1rem', 
                padding: '1rem', 
                background: data.status === status ? 'hsl(var(--primary) / 0.05)' : '#fff',
                border: `1px solid ${data.status === status ? 'hsl(var(--primary))' : 'hsl(var(--border))'}`,
                borderRadius: 'var(--radius-md)',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}>
                <input 
                  type="radio" 
                  name="impactStatus" 
                  checked={data.status === status}
                  onChange={() => handleUpdate({ status })}
                  style={{ width: '1.2rem', height: '1.2rem', accentColor: 'hsl(var(--primary))' }}
                />
                <span style={{ fontSize: '0.875rem', fontWeight: 600, color: data.status === status ? 'hsl(var(--primary))' : 'hsl(var(--text-main))' }}>{status}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
