import React, { useEffect } from 'react';
import { useForm } from '../../../../context/FormContext';
import { InputField, SelectField } from '../../../ui/FormElements';

export const Section1_Overview: React.FC = () => {
  const { formData, updateSection } = useForm();
  
  // Data for all consolidated parts
  const s1 = formData.pc3a?.s1 || { projectId: '', projectName: '' };
  const s2 = formData.pc3a?.s2 || { capitalCost: '' };
  const s3 = formData.pc3a?.s3 || { actual: '', accrued: '', total: '' };
  const s4 = formData.pc3a?.s4 || { total: '', local: '', fec: '' };

  const handleUpdate = (sectionKey: string, updates: any) => {
    const existing = (formData.pc3a as any)[sectionKey] || {};
    updateSection('pc3a', { [sectionKey]: { ...existing, ...updates } });
  };

  useEffect(() => {
    const actual = parseFloat(s3.actual) || 0;
    const accrued = parseFloat(s3.accrued) || 0;
    const total = (actual + accrued).toFixed(2);
    if (s3.total !== total) {
      handleUpdate('s3', { total });
    }
  }, [s3.actual, s3.accrued]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
      {/* Project ID Selection */}
      <div className="card shadow-sm">
        <SelectField 
          label="Project ID" 
          required 
          value={s1.projectId}
          onChange={(e: any) => handleUpdate('s1', { projectId: e.target.value })}
          options={[
            { value: 'PRJ-001', label: 'PRJ-001' },
            { value: 'PRJ-002', label: 'PRJ-002' },
            { value: 'PRJ-003', label: 'PRJ-003' },
            { value: 'PRJ-004', label: 'PRJ-004' },
            { value: 'PRJ-005', label: 'PRJ-005' }
          ]}
        />
      </div>

      {/* Project Basic Info */}
      <div className="card shadow-sm">
        <InputField 
          label="Project Name" 
          placeholder="Enter the full name of the project as per PC-I"
          value={s1.projectName}
          onChange={(e: any) => handleUpdate('s1', { projectName: e.target.value })}
          required
        />
      </div>

      {/* Capital Cost */}
      <div className="card shadow-sm">
        <InputField 
          label="Approved Capital Cost (Rs. Million)" 
          type="number"
          placeholder="0.00"
          value={s2.capitalCost}
          onChange={(e: any) => handleUpdate('s2', { capitalCost: e.target.value })}
          required
        />
      </div>

      {/* Expenditure Summary */}
      <div className="card shadow-sm">
        <h3 style={{ fontSize: '0.875rem', fontWeight: 600, color: 'hsl(var(--text-muted))', marginBottom: '1rem', textTransform: 'uppercase' }}>
          Expenditure Tracking
        </h3>
        <div className="space-y-4">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <InputField 
              label="Actual" 
              type="number" 
              placeholder="0.00" 
              value={s3.actual} 
              onChange={(e: any) => handleUpdate('s3', { actual: e.target.value })} 
            />
            <InputField 
              label="Accrued" 
              type="number" 
              placeholder="0.00" 
              value={s3.accrued} 
              onChange={(e: any) => handleUpdate('s3', { accrued: e.target.value })} 
            />
          </div>
          <div style={{ position: 'relative' }}>
            <InputField 
              label="Total Expenditure (Rs. Million)" 
              type="number"
              value={s3.total}
              disabled
              style={{ background: 'hsl(var(--bg-main) / 0.5)', cursor: 'not-allowed' }}
            />
            <span style={{ position: 'absolute', top: '0', right: '0', fontSize: '0.7rem', fontWeight: 600, color: 'hsl(var(--accent))', background: 'hsl(var(--accent-soft))', padding: '0.15rem 0.4rem', borderRadius: '4px' }}>Auto</span>
          </div>
        </div>
      </div>

      {/* PSDP Allocation */}
      <div className="card shadow-sm">
        <h3 style={{ fontSize: '0.875rem', fontWeight: 600, color: 'hsl(var(--text-muted))', marginBottom: '1rem', textTransform: 'uppercase' }}>
          Allocation (PSDP/ADP)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <InputField 
            label="Total Allocation" 
            type="number" 
            placeholder="0.00" 
            value={s4.total} 
            onChange={(e: any) => handleUpdate('s4', { total: e.target.value })} 
          />
          <InputField 
            label="Local Component" 
            type="number" 
            placeholder="0.00" 
            value={s4.local} 
            onChange={(e: any) => handleUpdate('s4', { local: e.target.value })} 
          />
          <InputField 
            label="FEC component" 
            type="number" 
            placeholder="0.00" 
            value={s4.fec} 
            onChange={(e: any) => handleUpdate('s4', { fec: e.target.value })} 
          />
        </div>
      </div>
    </div>
  );
};
