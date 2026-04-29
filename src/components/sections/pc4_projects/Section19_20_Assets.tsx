import React from 'react';
import { useForm } from '../../../context/FormContext';
import { FileUpload } from '../../ui/FormElements';
import { RTEditor } from '../../ui/RTEditor';

type FileMeta = { name: string; size: string; type: string; date: string };

const normalizeFileList = (list: unknown): FileMeta[] =>
  ((list as FileMeta[]) || []).map((f) => ({
    name: f.name || (f as FileMeta & { title?: string }).title || 'File',
    size: f.size ?? '',
    type: f.type ?? '',
    date: f.date ?? '',
  }));

export const Section19_SustainabilityMechanism: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.pc4.s19;

  const handleUpdate = (updates: Record<string, unknown>) => {
    updateSection('pc4', { s19: { ...data, ...updates } });
  };

  const html = typeof data.sustainabilityHtml === 'string' ? data.sustainabilityHtml : '';
  const attachments = normalizeFileList(data.attachments);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      <div className="card">
        <RTEditor
          label="[PC-IV-19.1] Sustainability Plan"
          value={html}
          onChange={(v) => handleUpdate({ sustainabilityHtml: v })}
        />
      </div>

      <div className="card">
        <FileUpload
          label="[PC-IV-19.2] Evidence"
          files={attachments}
          onUpload={(files) => handleUpdate({ attachments: files })}
          onRemove={(i) => handleUpdate({ attachments: attachments.filter((_: unknown, j: number) => j !== i) })}
          description="Upload supporting documents"
        />
      </div>
    </div>
  );
};

export { Section17_AssetsResponsibility as Section20_Assets } from './Section17_AssetsResponsibility';
