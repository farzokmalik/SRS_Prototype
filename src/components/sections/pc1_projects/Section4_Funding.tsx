import React from 'react';
import { useForm } from '../../../context/FormContext';
import { InputField, SelectField, RadioGroup } from '../../ui/FormElements';
import { RTEditor } from '../../ui/RTEditor';
import { Search } from 'lucide-react';

export const Section4_Funding: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.section4;

  const handleUpdate = (updates: any) => {
    updateSection('section4', { ...data, ...updates });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div className="card">
        <SelectField 
          label="Source of Funding" 
          value={data.fundingSource}
          onChange={(e) => handleUpdate({ fundingSource: e.target.value })}
          options={[
            { value: 'ADP', label: 'Scheme Listed in ADP CFY' },
            { value: 'Re-appropriation', label: 'Re-appropriation' },
            { value: 'Other', label: 'Other' }
          ]}
        />

        {data.fundingSource === 'ADP' && (
          <div style={{ marginTop: '1rem', padding: '1rem', background: '#f8f9fa', borderRadius: 'var(--radius-md)' }}>
            <div style={{ position: 'relative', marginBottom: '1rem' }}>
              <label className="label">Search GS No.</label>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <input className="input" placeholder="Enter GS No to pull data" value={data.gsNoSearch} onChange={(e) => handleUpdate({ gsNoSearch: e.target.value })} />
                <button className="btn btn-primary" style={{ padding: '0 1.5rem' }}><Search size={18} /></button>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
              <InputField label="SMDP Scheme No" value={data.smdpNo} readOnly />
              <InputField label="GS No." value={data.gsNoResult} readOnly />
              <div className="input-group">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                  <label className="label">Total Allocation</label>
                  <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'hsl(var(--accent))' }}>Millions</span>
                </div>
                <input className="input" value={data.totalAllocation} readOnly />
              </div>
            </div>
          </div>
        )}

        {data.fundingSource === 'Re-appropriation' && (
          <div style={{ marginTop: '1rem' }}>
            <RadioGroup 
              label="Re-appropriation Type" 
              name="reapp"
              value={data.reappropriationType}
              onChange={(val) => handleUpdate({ reappropriationType: val })}
              options={[{ value: 'Inter', label: 'Inter-Sectoral' }, { value: 'Intra', label: 'Intra-Sectoral' }]}
            />
          </div>
        )}
      </div>

      <div className="card">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', alignItems: 'flex-start' }}>
          <div className="input-group">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <label className="label">Proposed Allocation</label>
              <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'hsl(var(--accent))' }}>Millions</span>
            </div>
            <input className="input" placeholder="Millions" value={data.proposedAllocation} onChange={(e) => handleUpdate({ proposedAllocation: e.target.value })} />
          </div>
           <RadioGroup 
             label="Purpose of Funding" 
             name="purpose"
             value={data.purpose}
             onChange={(val) => handleUpdate({ purpose: val })}
             options={[{ value: 'Pending', label: 'Pending Liability' }, { value: 'Court', label: 'Court Case' }, { value: 'Sub', label: 'Sub-Scheme' }]}
           />
        </div>
        <RTEditor label="Comments" value={data.comments} onChange={(val) => handleUpdate({ comments: val })} />
      </div>
    </div>
  );
};
