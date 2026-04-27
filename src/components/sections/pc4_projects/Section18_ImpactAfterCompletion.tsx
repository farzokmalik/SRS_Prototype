import React from 'react';
import { useForm } from '../../../context/FormContext';
import { FileUpload } from '../../ui/FormElements';
import { RTEditor } from '../../ui/RTEditor';

type FileMeta = { name: string; size: string; type: string; date: string };

const normalizeFileList = (list: unknown): FileMeta[] =>
  ((list as (FileMeta & { title?: string })[]) || []).map((f) => ({
    name: f.name || 'File',
    size: f.size ?? '',
    type: f.type ?? '',
    date: f.date ?? '',
  }));

export const Section18_ImpactAfterCompletion: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.pc4.s18;

  const handleUpdate = (updates: Record<string, unknown>) => {
    updateSection('pc4', { s18: { ...data, ...updates } });
  };

  const financial = typeof data.financialHtml === 'string' ? data.financialHtml : '';
  const economic = typeof data.economicHtml === 'string' ? data.economicHtml : '';
  const social = typeof data.socialHtml === 'string' ? data.socialHtml : '';
  const environment = typeof data.environmentHtml === 'string' ? data.environmentHtml : '';
  const technological = typeof data.technologicalHtml === 'string' ? data.technologicalHtml : '';
  const anyOther = typeof data.anyOtherHtml === 'string' ? data.anyOtherHtml : '';
  const attachments = normalizeFileList(data.impactAttachments);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      <div className="card">
        <RTEditor label="Financial" value={financial} onChange={(v) => handleUpdate({ financialHtml: v })} />
      </div>

      <div className="card">
        <RTEditor label="Economic" value={economic} onChange={(v) => handleUpdate({ economicHtml: v })} />
      </div>

      <div className="card">
        <RTEditor
          label="Social (Education, Health, Employment, Area Development Etc.)"
          value={social}
          onChange={(v) => handleUpdate({ socialHtml: v })}
        />
      </div>

      <div className="card">
        <RTEditor label="Environment" value={environment} onChange={(v) => handleUpdate({ environmentHtml: v })} />
      </div>

      <div className="card">
        <RTEditor label="Technological" value={technological} onChange={(v) => handleUpdate({ technologicalHtml: v })} />
      </div>

      <div className="card">
        <RTEditor label="Any other" value={anyOther} onChange={(v) => handleUpdate({ anyOtherHtml: v })} />
      </div>

      <div className="card">
        <FileUpload
          label="Attachment(s)"
          files={attachments}
          onUpload={(files) => handleUpdate({ impactAttachments: files })}
          onRemove={(i) =>
            handleUpdate({ impactAttachments: attachments.filter((_: unknown, j: number) => j !== i) })
          }
          description="Upload supporting documents"
        />
      </div>
    </div>
  );
};
