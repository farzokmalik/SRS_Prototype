import React from 'react';
import { useForm } from '../../../context/FormContext';
import { RadioGroup, InputField } from '../../ui/FormElements';
import { RTEditor } from '../../ui/RTEditor';
import { FileUpload } from '../../ui/FormElements';
import { Search } from 'lucide-react';

export const Section14_AdditionalProjects: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.section14;

  const handleUpdate = (updates: any) => {
    updateSection('section14', { ...data, ...updates });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div className="card">
        <RadioGroup 
          label="Scheme Filter" 
          name="schemeFilter"
          value={data.filter}
          onChange={(val) => handleUpdate({ filter: val })}
          options={[{ value: 'Existing Scheme', label: 'Existing Scheme' }, { value: 'New Scheme', label: 'New Scheme' }]}
        />
        
        {data.filter === 'Existing Scheme' && (
          <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
             <div style={{ flex: 1, maxWidth: '300px' }}>
               <InputField label="Search GS No" placeholder="Enter GS No" value={data.gsNo} onChange={(e) => handleUpdate({ gsNo: e.target.value })} />
             </div>
             <button className="btn btn-primary" style={{ height: '42px', marginTop: '28px' }}><Search size={18} /> Search</button>
          </div>
        )}

        {data.filter === 'New Scheme' && (
          <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
             <div style={{ flex: 1, maxWidth: '300px' }}>
               <InputField label="Search Scheme" placeholder="Enter Scheme Name or Keyword" value={data.newSchemeSearch || ''} onChange={(e) => handleUpdate({ newSchemeSearch: e.target.value })} />
             </div>
             <button className="btn btn-primary" style={{ height: '42px', marginTop: '28px' }}><Search size={18} /> Search</button>
          </div>
        )}
      </div>

      <div className="card">
        <RTEditor label="Additional Project Decision Requirement Information" value={data.description} onChange={(val) => handleUpdate({ description: val })} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        <div className="card">
          <FileUpload 
            label="Attachments"
            files={data.attachments || []}
            onUpload={(files) => handleUpdate({ attachments: files })}
            onRemove={(idx) => handleUpdate({ attachments: data.attachments.filter((_: any, i: number) => i !== idx) })}
            description="Upload additional documents"
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
