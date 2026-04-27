import React from 'react';
import { useForm } from '../../../context/FormContext';
import { InputField, FileUpload } from '../../ui/FormElements';

export const Section26_AdditionalInfo: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.pc4.s26;

  const handleUpdate = (updates: any) => {
    updateSection('pc4', { s26: { ...data, ...updates } });
  };

  return (
    <div className="card">
      <div style={{}}>
        <textarea 
          className="input" 
          style={{ minHeight: '300px', paddingTop: '0.75rem' }} 
          placeholder="Enter any other relevant information not covered in previous sections..."
          value={data.additionalInfo}
          onChange={(e) => handleUpdate({ additionalInfo: e.target.value })}
        />
      </div>
    </div>
  );
};

export const Section27_Submission: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.pc4.s27;

  const handleUpdate = (updates: any) => {
    updateSection('pc4', { s27: { ...data, ...updates } });
  };

  return (
    <div className="card">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        <InputField label="Name" required value={data.name} onChange={(e) => handleUpdate({ name: e.target.value })} />
        <InputField label="Designation" required value={data.designation} onChange={(e) => handleUpdate({ designation: e.target.value })} />
        <InputField label="Telephone" required value={data.telephone} onChange={(e) => handleUpdate({ telephone: e.target.value })} />
        <InputField label="Email" type="email" required value={data.email} onChange={(e) => handleUpdate({ email: e.target.value })} />
        <InputField label="Date" type="date" required value={data.date} onChange={(e) => handleUpdate({ date: e.target.value })} />
        <div />
        <div style={{ gridColumn: 'span 2' }}>
          <FileUpload 
            label="Signature (Scanned Copy)" 
            files={data.signature || []}
            onUpload={(files) => handleUpdate({ signature: files })}
            onRemove={(idx) => handleUpdate({ signature: data.signature.filter((_: any, i: number) => i !== idx) })}
          />
        </div>
      </div>
    </div>
  );
};
