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

  const renderCategory = (label: string, field: string, attachmentsField: string, annexuresField: string) => (
    <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <RTEditor 
        label={label} 
        value={(data as any)[field]} 
        onChange={(val) => handleUpdate({ [field]: val })} 
      />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        <FileUpload 
          label={`${label} - Attachments`}
          files={(data as any)[attachmentsField] || []}
          onUpload={(files) => handleUpdate({ [attachmentsField]: files })}
          onRemove={(idx) => handleUpdate({ [attachmentsField]: (data as any)[attachmentsField].filter((_: any, i: number) => i !== idx) })}
          description="Upload category-specific documents"
        />
        <FileUpload 
          label={`${label} - Annexures`}
          files={(data as any)[annexuresField] || []}
          onUpload={(files) => handleUpdate({ [annexuresField]: files })}
          onRemove={(idx) => handleUpdate({ [annexuresField]: (data as any)[annexuresField].filter((_: any, i: number) => i !== idx) })}
          description="Add category-specific annexures"
        />
      </div>
    </div>
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {renderCategory("Financial Plan Equity Information", "equity", "equityAttachments", "equityAnnexures")}
      {renderCategory("Financial Plan Debt Information", "debt", "debtAttachments", "debtAnnexures")}
      {renderCategory("Financial Plan Grant Information", "grant", "grantAttachments", "grantAnnexures")}
      {renderCategory("Financial Plan Weighted Cost of Capital", "weightCost", "weightCostAttachments", "weightCostAnnexures")}
    </div>
  );
};
