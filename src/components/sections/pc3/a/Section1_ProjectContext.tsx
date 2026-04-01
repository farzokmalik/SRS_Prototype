import React, { useEffect } from 'react';
import { useForm } from '../../../../context/FormContext';
import { InputField } from '../../../ui/FormElements';

export const Section1_ProjectContext: React.FC = () => {
  const { formData, updateSection } = useForm();
  
  // Extract all relevant data from the old section structure
  const s1 = formData.pc3a?.s1 || { projectName: '' };
  const s2 = formData.pc3a?.s2 || { capitalCost: '' };
  const s3 = formData.pc3a?.s3 || { actual: '', accrued: '', total: '' };
  const s4 = formData.pc3a?.s4 || { total: '', local: '', fec: '' };

  const handleUpdate = (sectionKey: string, updates: any) => {
    const sectionData = (formData.pc3a as any)?.[sectionKey] || {};
    updateSection('pc3a', { [sectionKey]: { ...sectionData, ...updates } });
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
    <div className="space-y-8">
      {/* 1. Project Context */}
      <div className="card shadow-sm">
        <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1.25rem', color: 'hsl(var(--primary))' }}>1. Project Context</h4>
        <div style={{ maxWidth: '1200px' }}>
          <InputField 
            label="Project Name" 
            placeholder="Enter the full name of the project as per PC-I"
            value={s1.projectName}
            onChange={(e: any) => handleUpdate('s1', { projectName: e.target.value })}
            required
          />
        </div>
      </div>

      {/* 2. Financial Status */}
      <div className="card shadow-sm">
        <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1.25rem', color: 'hsl(var(--primary))' }}>2. Approved Capital Cost</h4>
        <div style={{ maxWidth: '400px' }}>
          <InputField 
            label="Cost (Rs. Million)" 
            type="number"
            placeholder="0.00"
            value={s2.capitalCost}
            onChange={(e: any) => handleUpdate('s2', { capitalCost: e.target.value })}
            required
          />
        </div>
      </div>

      {/* 3. Expenditure Details */}
      <div className="card shadow-sm">
        <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1.25rem', color: 'hsl(var(--primary))' }}>3. Expenditure (Rs. Million)</h4>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', maxWidth: '1200px' }}>
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
          <div style={{ position: 'relative' }}>
            <InputField 
              label="Total" 
              type="number"
              placeholder="0.00"
              value={s3.total}
              onChange={() => {}} 
              disabled
              style={{ background: 'hsl(var(--bg-main) / 0.5)', cursor: 'not-allowed' }}
            />
            <span style={{ position: 'absolute', top: '0', right: '0', fontSize: '0.7rem', fontWeight: 600, color: 'hsl(var(--accent))', background: 'hsl(var(--accent-soft))', padding: '0.15rem 0.4rem', borderRadius: '4px' }}>Auto-calculated</span>
          </div>
        </div>
      </div>

      {/* 4. PSDP Allocation */}
      <div className="card shadow-sm">
        <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1.25rem', color: 'hsl(var(--primary))' }}>4. PSDP Allocation (Rs. Million)</h4>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', maxWidth: '1200px' }}>
          <InputField 
            label="Total" 
            type="number"
            placeholder="0.00"
            value={s4.total}
            onChange={(e: any) => handleUpdate('s4', { total: e.target.value })}
          />
          <InputField 
            label="Local" 
            type="number"
            placeholder="0.00"
            value={s4.local}
            onChange={(e: any) => handleUpdate('s4', { local: e.target.value })}
          />
          <InputField 
            label="FEC (Foreign Exchange)" 
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
