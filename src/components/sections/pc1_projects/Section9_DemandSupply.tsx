import React from 'react';
import { useForm } from '../../../context/FormContext';
import { RTEditor } from '../../ui/RTEditor';
import { FileUpload } from '../../ui/FormElements';

export const Section9_DemandSupply: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.section9;

  const handleUpdate = (updates: any) => {
    updateSection('section9', { ...data, ...updates });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div className="card">
        <RTEditor 
          label="[PC-I-9.1] Demand and Supply Analysis" 
          value={data.data} 
          onChange={(val) => handleUpdate({ data: val })} 
        />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        <div className="card">
          <FileUpload 
            label="[PC-I-9.2] Attachments"
            files={data.attachments || []}
            onUpload={(files) => handleUpdate({ attachments: files })}
            onRemove={(idx) => handleUpdate({ attachments: data.attachments.filter((_: any, i: number) => i !== idx) })}
            description="Upload analysis reports"
          />
        </div>
        <div className="card">
          <FileUpload 
            label="[PC-I-9.3] Annexures"
            files={data.annexures || []}
            onUpload={(files) => handleUpdate({ annexures: files })}
            onRemove={(idx) => handleUpdate({ annexures: data.annexures.filter((_: any, i: number) => i !== idx) })}
            description="Add annexures"
          />
        </div>
      </div>
    </div>
  );
};
