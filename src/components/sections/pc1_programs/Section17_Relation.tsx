import React from 'react';
import { useForm } from '../../../context/FormContext';
import { RadioGroup, InputField, FileUpload } from '../../ui/FormElements';
import { Search, Link } from 'lucide-react';

export const Section17_Relation: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.section17;

  const handleUpdate = (updates: any) => {
    updateSection('section17', { ...data, ...updates });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div className="card">
        <h3 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
           <Link size={20} color="var(--primary)" /> Program Relations
        </h3>
        <RadioGroup 
          label="Scheme Filter" 
          name="schemeFilterRelation"
          value={data.filter}
          onChange={(val) => handleUpdate({ filter: val })}
          options={[{ value: 'Existing Scheme', label: 'Existing Scheme' }, { value: 'New Scheme', label: 'New Scheme' }]}
        />
        
        {data.filter === 'Existing Scheme' && (
          <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
             <InputField label="Search GS No" placeholder="Enter GS No" value={data.gsNo} onChange={(e) => handleUpdate({ gsNo: e.target.value })} />
             <button className="btn btn-primary" style={{ height: '42px', marginTop: '28px' }}><Search size={18} /></button>
          </div>
        )}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        <div className="card">
          <FileUpload 
            label="Attachments"
            files={data.attachments || []}
            onUpload={(files) => handleUpdate({ attachments: files })}
            onRemove={(idx) => handleUpdate({ attachments: data.attachments.filter((_: any, i: number) => i !== idx) })}
            description="Upload relationship documents"
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
