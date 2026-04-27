import React from 'react';
import { useForm } from '../../context/FormContext';
import { RTEditor } from '../ui/RTEditor';
import { FileUpload } from '../ui/FormElements';

export const PC2Section6_Description: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.section6;

  const handleUpdate = (updates: any) => {
    updateSection('section6', { ...data, ...updates });
  };

  const fileGrid = { display: 'grid' as const, gridTemplateColumns: '1fr 1fr', gap: '1.5rem' };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Justification of Project */}
      <div className="card">
        <RTEditor
          label="[PC-II-5.1] Justification of Project"
          required
          value={data.justification || ''}
          onChange={(val) => handleUpdate({ justification: val })}
        />
      </div>
      <div style={fileGrid}>
        <div className="card">
          <FileUpload
            label="[PC-II-5.2] Attachments"
            files={data.justificationAttachments || []}
            onUpload={(files) => handleUpdate({ justificationAttachments: files })}
            onRemove={(idx) => handleUpdate({ justificationAttachments: (data.justificationAttachments || []).filter((_: any, i: number) => i !== idx) })}
            description="Upload justification documents"
          />
        </div>
        <div className="card">
          <FileUpload
            label="[PC-II-5.3] Annexures"
            files={data.justificationAnnexures || []}
            onUpload={(files) => handleUpdate({ justificationAnnexures: files })}
            onRemove={(idx) => handleUpdate({ justificationAnnexures: (data.justificationAnnexures || []).filter((_: any, i: number) => i !== idx) })}
            description="Add annexures"
          />
        </div>
      </div>

      {/* Scope of the Project */}
      <div className="card">
        <RTEditor
          label="[PC-II-5.4] Scope of the Project"
          required
          value={data.scope || ''}
          onChange={(val) => handleUpdate({ scope: val })}
        />
      </div>
      <div style={fileGrid}>
        <div className="card">
          <FileUpload
            label="[PC-II-5.5] Attachments"
            files={data.scopeAttachments || []}
            onUpload={(files) => handleUpdate({ scopeAttachments: files })}
            onRemove={(idx) => handleUpdate({ scopeAttachments: (data.scopeAttachments || []).filter((_: any, i: number) => i !== idx) })}
            description="Upload scope documents"
          />
        </div>
        <div className="card">
          <FileUpload
            label="[PC-II-5.5] Annexures"
            files={data.scopeAnnexures || []}
            onUpload={(files) => handleUpdate({ scopeAnnexures: files })}
            onRemove={(idx) => handleUpdate({ scopeAnnexures: (data.scopeAnnexures || []).filter((_: any, i: number) => i !== idx) })}
            description="Add annexures"
          />
        </div>
      </div>

      {/* Sectoral Specific Information */}
      <div className="card">
        <RTEditor
          label="[PC-II-5.6] Sectoral Specific Information"
          required
          value={data.sectoralInfo || ''}
          onChange={(val) => handleUpdate({ sectoralInfo: val })}
        />
      </div>
      <div style={fileGrid}>
        <div className="card">
          <FileUpload
            label="[PC-II-5.7] Attachments"
            files={data.sectoralAttachments || []}
            onUpload={(files) => handleUpdate({ sectoralAttachments: files })}
            onRemove={(idx) => handleUpdate({ sectoralAttachments: (data.sectoralAttachments || []).filter((_: any, i: number) => i !== idx) })}
            description="Upload sectoral documents"
          />
        </div>
        <div className="card">
          <FileUpload
            label="[PC-II-5.7] Annexures"
            files={data.sectoralAnnexures || []}
            onUpload={(files) => handleUpdate({ sectoralAnnexures: files })}
            onRemove={(idx) => handleUpdate({ sectoralAnnexures: (data.sectoralAnnexures || []).filter((_: any, i: number) => i !== idx) })}
            description="Add annexures"
          />
        </div>
      </div>
    </div>
  );
};
