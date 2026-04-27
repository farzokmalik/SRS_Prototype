import React from 'react';
import { useForm } from '../../../context/FormContext';
import { InputField } from '../../ui/FormElements';

const AgencySection: React.FC<{ title: string; data: any; onUpdate: (updates: any) => void }> = ({ title, data, onUpdate }) => (
  <div className="card">
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <InputField 
        label="Name" 
        placeholder={`Enter ${title} name`} 
        required 
        value={data.name}
        onChange={(e) => onUpdate({ name: e.target.value })}
      />
      <InputField 
        label="Address" 
        placeholder={`Enter ${title} address`} 
        required 
        value={data.address}
        onChange={(e) => onUpdate({ address: e.target.value })}
      />
    </div>
  </div>
);

export const Section3_Sponsoring: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.pc4p.s3;
  return <AgencySection title="Sponsoring Ministry" data={data} onUpdate={(updates) => updateSection('pc4p', { s3: { ...data, ...updates } })} />;
};

export const Section4_Executing: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.pc4p.s4;
  return <AgencySection title="Executing Agency" data={data} onUpdate={(updates) => updateSection('pc4p', { s4: { ...data, ...updates } })} />;
};

export const Section5_OM: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.pc4p.s5;
  return <AgencySection title="O&M Agency" data={data} onUpdate={(updates) => updateSection('pc4p', { s5: { ...data, ...updates } })} />;
};
