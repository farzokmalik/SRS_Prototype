import React from 'react';
import { useForm } from '../../../context/FormContext';
import { RTEditor } from '../../ui/RTEditor';
import { FileUpload } from '../../ui/FormElements';

export const Section10_FinancialPlan: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.section10;

  const handleUpdate = (updates: any) => {
    updateSection('section10', { ...data, ...updates });
  };

  const renderCategory = (label: string, field: string, attachmentsField: string, annexuresField: string, num1: string, num2: string) => (
    <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <RTEditor 
        label={`[${num1}] ${label}`} 
        value={(data as any)[field]} 
        onChange={(val) => handleUpdate({ [field]: val })} 
      />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        <FileUpload 
          label={`[${num2}] ${label} - Attachments / Annexures`}
          files={(data as any)[attachmentsField] || []}
          onUpload={(files) => handleUpdate({ [attachmentsField]: files })}
          onRemove={(idx) => handleUpdate({ [attachmentsField]: (data as any)[attachmentsField].filter((_: any, i: number) => i !== idx) })}
          description="Upload category-specific documents"
        />
        <FileUpload 
          label={`${label} - Additional Annexures`}
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
      {renderCategory("Equity Information", "equity", "equityAttachments", "equityAnnexures", "PCI-10.1", "PCI-10.2")}
      {renderCategory("Debt Information", "debt", "debtAttachments", "debtAnnexures", "PCI-10.3", "PCI-10.4")}
      {renderCategory("Grant Information", "grant", "grantAttachments", "grantAnnexures", "PCI-10.5", "PCI-10.6")}
      {renderCategory("Weighted Cost of Capital", "weightCost", "weightCostAttachments", "weightCostAnnexures", "PCI-10.7", "PCI-10.8")}
    </div>
  );
};
