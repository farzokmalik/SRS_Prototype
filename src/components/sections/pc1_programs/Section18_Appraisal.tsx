import React from 'react';
import { useForm } from '../../../context/FormContext';
import { SelectField, InputField, FileUpload } from '../../ui/FormElements';
import { FileText, Save } from 'lucide-react';

export const Section18_Appraisal: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.section18;

  const handleUpdate = (updates: any) => {
    updateSection('section18', { ...data, ...updates });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div className="card">
        <h3 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
           <FileText size={20} color="var(--primary)" /> Appraisal Documentation
        </h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
           <SelectField 
             label="Category" 
             value={data.category}
             onChange={(e) => handleUpdate({ category: e.target.value })}
             options={[
               { value: 'Working Papers', label: 'Working Papers' },
               { value: 'Pre MOMs', label: 'Pre MOMs' },
               { value: 'MOMs', label: 'MOMs' },
               { value: 'Administrative Approval', label: 'Administrative Approval' },
               { value: 'Others', label: 'Others' }
             ]}
           />
           <InputField label="Document Title" value={data.title} onChange={(e) => handleUpdate({ title: e.target.value })} />
        </div>

        <div style={{ marginTop: '1.5rem' }}>
          <FileUpload 
            label="Appraisal Document"
            files={data.attachments || []}
            onUpload={(files) => handleUpdate({ attachments: files })}
            onRemove={(idx) => handleUpdate({ attachments: data.attachments.filter((_: any, i: number) => i !== idx) })}
            description="Choose or drop the final appraisal document"
          />
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1rem' }}>
         <button className="btn btn-primary" style={{ padding: '0.75rem 3rem', fontSize: '1rem' }}>
            <Save size={18} /> Finalize Appraisal
         </button>
         <button className="btn btn-secondary" style={{ padding: '0.75rem 3rem', fontSize: '1rem' }}>
            Cancel
         </button>
      </div>
    </div>
  );
};
