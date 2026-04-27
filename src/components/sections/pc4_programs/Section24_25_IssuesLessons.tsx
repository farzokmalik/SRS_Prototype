import React from 'react';
import { useForm } from '../../../context/FormContext';

export const Section24_Issues: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.pc4p.s24;

  const handleUpdate = (updates: any) => {
    updateSection('pc4p', { s24: { ...data, ...updates } });
  };

  const fields = [
    { id: 'a', label: 'Organizational Management' },
    { id: 'b', label: 'Capacity of the department concerned' },
    { id: 'c', label: 'Decision making process' },
    { id: 'd', label: 'Climate and disaster risk' },
    { id: 'e', label: 'Any other' }
  ];

  return (
    <div className="card">
      <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'hsl(var(--primary))', marginBottom: '2rem' }}>
        Issues Faced during Implementation
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {fields.map((f) => (
          <div key={f.id}>
            <label className="label" style={{ marginBottom: '0.75rem', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'hsl(var(--text-muted))' }}>
              • {f.label}
            </label>
            <textarea 
              className="input" 
              style={{ minHeight: '120px', paddingTop: '0.75rem', background: '#fff', lineHeight: '1.6' }} 
              placeholder={`Enter details about ${f.label.toLowerCase()}...`}
              value={data[f.id as keyof typeof data]}
              onChange={(e) => handleUpdate({ [f.id]: e.target.value })}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export const Section25_Lessons: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.pc4p.s25;

  const handleUpdate = (updates: any) => {
    updateSection('pc4p', { s25: { ...data, ...updates } });
  };

  const fields = [
    { id: 'a', label: 'Program identification' },
    { id: 'b', label: 'Program preparation' },
    { id: 'c', label: 'Program approval' },
    { id: 'd', label: 'Program financing' },
    { id: 'e', label: 'Program implementation' },
    { id: 'f', label: 'Program vulnerability to climate change' }
  ];

  return (
    <div className="card">
      <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'hsl(var(--primary))', marginBottom: '2rem' }}>
        Lessons Learned
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {fields.map((f, idx) => (
          <div key={f.id}>
            <label className="label" style={{ marginBottom: '0.75rem', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'hsl(var(--text-muted))' }}>
              {String.fromCharCode(97 + idx)}) {f.label}
            </label>
            <textarea 
              className="input" 
              style={{ minHeight: '120px', paddingTop: '0.75rem', background: '#fff', lineHeight: '1.6' }} 
              placeholder={`Enter lessons related to ${f.label.toLowerCase()}...`}
              value={data[f.id as keyof typeof data]}
              onChange={(e) => handleUpdate({ [f.id]: e.target.value })}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
