import React from 'react';
import { useForm } from '../../context/FormContext';
import { RTEditor } from '../ui/RTEditor';
import { FileUpload } from '../ui/FormElements';

export const Section11_Benefits: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.section11;

  const handleUpdate = (updates: any) => {
    updateSection('section11', { ...data, ...updates });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div className="card">
        <RTEditor label="Social Benefits" value={data.social} onChange={(val) => handleUpdate({ social: val })} />
        <RTEditor label="Environmental Impact Analysis" value={data.environmental} onChange={(val) => handleUpdate({ environmental: val })} />
        <RTEditor label="Economic Analysis" value={data.economic} onChange={(val) => handleUpdate({ economic: val })} />
        <RTEditor label="Financial Analysis" value={data.financial} onChange={(val) => handleUpdate({ financial: val })} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        <div className="card">
          <FileUpload 
            label="Attachments"
            files={data.attachments || []}
            onUpload={(files) => handleUpdate({ attachments: files })}
            onRemove={(idx) => handleUpdate({ attachments: data.attachments.filter((_: any, i: number) => i !== idx) })}
            description="Upload analysis documents"
          />
        </div>
        <div className="card">
          <FileUpload 
            label="Annexures"
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
