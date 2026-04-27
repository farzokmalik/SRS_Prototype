import React from 'react';
import { useForm } from '../../../context/FormContext';
import { SelectField, InputField, FileUpload } from '../../ui/FormElements';

export const Section6_Approval: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.pc4.s6;

  const handleUpdate = (updates: any) => {
    updateSection('pc4', { s6: { ...data, ...updates } });
  };

  return (
    <div className="card">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        <SelectField 
          label="Approval Forum" 
          required 
          value={data.approvalForum}
          onChange={(e) => handleUpdate({ approvalForum: e.target.value })}
          options={[
            { value: 'DDWP', label: 'DDWP' },
            { value: 'CDWP', label: 'CDWP' },
            { value: 'ECNEC', label: 'ECNEC' },
            { value: 'PDWP', label: 'PDWP' },
            { value: 'Other', label: 'Other' }
          ]}
        />
        <div />
        <InputField 
          label="Original Approval Date" 
          type="date" 
          required 
          value={data.originalDate}
          onChange={(e) => handleUpdate({ originalDate: e.target.value })}
        />
        <InputField 
          label="Revised Approval Date" 
          type="date" 
          value={data.revisedDate}
          onChange={(e) => handleUpdate({ revisedDate: e.target.value })}
        />
      </div>
      <div style={{ marginTop: '1.5rem' }}>
        <FileUpload 
          label="Decision Copy" 
          files={data.decisionCopy || []}
          onUpload={(files) => handleUpdate({ decisionCopy: files })}
          onRemove={(idx) => handleUpdate({ decisionCopy: data.decisionCopy.filter((_: any, i: number) => i !== idx) })}
        />
      </div>
    </div>
  );
};
