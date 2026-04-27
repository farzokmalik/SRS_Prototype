import React from 'react';
import { useForm } from '../../../context/FormContext';
import { RTEditor } from '../../ui/RTEditor';
import { FileUpload } from '../../ui/FormElements';

export const Section6_Description: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.section6;

  const handleUpdate = (updates: any) => {
    updateSection('section6', { ...data, ...updates });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Objective Section */}
      <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <RTEditor 
          label="[PC-I-6.1] Justification of Project" 
          value={data.objective} 
          onChange={(val) => handleUpdate({ objective: val })} 
        />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', paddingTop: '0.5rem' }}>
          <FileUpload 
            label="[PC-I-6.2] Objective Attachments"
            files={data.objectiveAttachments || []}
            onUpload={(files) => handleUpdate({ objectiveAttachments: files })}
            onRemove={(idx) => handleUpdate({ objectiveAttachments: (data.objectiveAttachments || []).filter((_: any, i: number) => i !== idx) })}
            description="Upload objective documents"
          />
          <FileUpload 
            label="[PC-I-6.3] Objective Annexures"
            files={data.objectiveAnnexures || []}
            onUpload={(files) => handleUpdate({ objectiveAnnexures: files })}
            onRemove={(idx) => handleUpdate({ objectiveAnnexures: (data.objectiveAnnexures || []).filter((_: any, i: number) => i !== idx) })}
            description="Add objective annexures"
          />
        </div>
      </div>

      {/* Sectoral Section */}
      <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <RTEditor 
          label="[PC-I-6.4] Sectoral Specific Information" 
          value={data.sectoralInfo} 
          onChange={(val) => handleUpdate({ sectoralInfo: val })} 
        />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', paddingTop: '0.5rem' }}>
          <FileUpload 
            label="[PC-I-6.5] Sectoral Attachments"
            files={data.sectoralInfoAttachments || []}
            onUpload={(files) => handleUpdate({ sectoralInfoAttachments: files })}
            onRemove={(idx) => handleUpdate({ sectoralInfoAttachments: (data.sectoralInfoAttachments || []).filter((_: any, i: number) => i !== idx) })}
            description="Upload sectoral documents"
          />
          <FileUpload 
            label="[PC-I-6.6] Sectoral Annexures"
            files={data.sectoralInfoAnnexures || []}
            onUpload={(files) => handleUpdate({ sectoralInfoAnnexures: files })}
            onRemove={(idx) => handleUpdate({ sectoralInfoAnnexures: (data.sectoralInfoAnnexures || []).filter((_: any, i: number) => i !== idx) })}
            description="Add sectoral annexures"
          />
        </div>
      </div>
    </div>
  );
};
