import React from 'react';
import { useForm } from '../../context/FormContext';
import { RTEditor } from '../ui/RTEditor';
import { FileUpload } from '../ui/FormElements';

export const Section10_FinancialPlan: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.section10;

  const handleUpdate = (updates: any) => {
    updateSection('section10', { ...data, ...updates });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div className="card">
        <RTEditor label="Equity Information" value={data.equity} onChange={(val) => handleUpdate({ equity: val })} />
        <RTEditor label="Debt Information" value={data.debt} onChange={(val) => handleUpdate({ debt: val })} />
        <RTEditor label="Grant Information" value={data.grant} onChange={(val) => handleUpdate({ grant: val })} />
        <RTEditor label="Weighted Cost of Capital" value={data.weightCost} onChange={(val) => handleUpdate({ weightCost: val })} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        <div className="card">
          <FileUpload 
            label="Attachments"
            files={data.attachments || []}
            onUpload={(files) => handleUpdate({ attachments: files })}
            onRemove={(idx) => handleUpdate({ attachments: data.attachments.filter((_: any, i: number) => i !== idx) })}
            description="Upload financial plan documents"
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
