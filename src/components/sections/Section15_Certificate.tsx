import React from 'react';
import { useForm } from '../../context/FormContext';
import { InputField, FileUpload } from '../ui/FormElements';
import { Award } from 'lucide-react';

export const Section15_Certificate: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.section15;

  const handleUpdate = (updates: any) => {
    updateSection('section15', { ...data, ...updates });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div className="card">
        <h3 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Award size={20} color="var(--primary)" /> Focal Person Information
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
          <InputField label="Focal Person Name" value={data.name} onChange={(e) => handleUpdate({ name: e.target.value })} />
          <InputField label="Designation" value={data.designation} onChange={(e) => handleUpdate({ designation: e.target.value })} />
          <InputField label="Email" type="email" value={data.email} onChange={(e) => handleUpdate({ email: e.target.value })} />
          <InputField label="Tel No." value={data.tel} onChange={(e) => handleUpdate({ tel: e.target.value })} />
          <InputField label="Fax No." value={data.fax} onChange={(e) => handleUpdate({ fax: e.target.value })} />
          <InputField label="Address" value={data.address} onChange={(e) => handleUpdate({ address: e.target.value })} />
        </div>
      </div>

      <div className="card">
         <FileUpload 
           label="Official Certificate"
           files={data.attachments || []}
           onUpload={(files) => handleUpdate({ attachments: files })}
           onRemove={(idx) => handleUpdate({ attachments: data.attachments.filter((_: any, i: number) => i !== idx) })}
           description="Click to upload certificate signed by Secretary/Chief Engineer"
         />
      </div>
    </div>
  );
};
