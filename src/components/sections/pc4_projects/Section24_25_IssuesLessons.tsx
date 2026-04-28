import React from 'react';
import { useForm } from '../../../context/FormContext';
import { FileUpload, InputField, TextAreaField } from '../../ui/FormElements';

type FileMeta = { name: string; size: string; type: string; date: string };

const normalizeFileList = (list: unknown): FileMeta[] =>
  ((list as (FileMeta & { title?: string })[]) || []).map((f) => ({
    name: f.name || f.title || 'File',
    size: f.size ?? '',
    type: f.type ?? '',
    date: f.date ?? '',
  }));

export const Section24_Certificate: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.pc4.s24;

  const handleUpdate = (updates: Record<string, unknown>) => {
    updateSection('pc4', { s24: { ...data, ...updates } });
  };

  const attachments = normalizeFileList(data.attachments);
  const annexures = normalizeFileList(data.annexures);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      <div className="card">
        <label className="label" style={{ marginBottom: '1rem', display: 'block' }}>
          Focal Person
        </label>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
          <InputField
            label="[PC-IV-24.1] Focal Person Name"
            placeholder="Full name"
            value={data.focalPersonName}
            onChange={(e) => handleUpdate({ focalPersonName: e.target.value })}
          />
          <InputField
            label="[PC-IV-24.2] Designation"
            placeholder="Designation"
            value={data.designation}
            onChange={(e) => handleUpdate({ designation: e.target.value })}
          />
          <div style={{ gridColumn: '1 / -1' }}>
            <InputField
              label="[PC-IV-24.3] Email"
              type="email"
              placeholder="email@example.com"
              value={data.email}
              onChange={(e) => handleUpdate({ email: e.target.value })}
            />
          </div>
          <InputField
            label="[PC-IV-24.4] Tel. No."
            placeholder="Telephone"
            value={data.tel}
            onChange={(e) => handleUpdate({ tel: e.target.value })}
          />
          <InputField
            label="[PC-IV-24.5] Fax No."
            placeholder="Fax"
            value={data.fax}
            onChange={(e) => handleUpdate({ fax: e.target.value })}
          />
          <div style={{ gridColumn: '1 / -1' }}>
            <TextAreaField
              label="[PC-IV-24.6] Address"
              placeholder="Postal address"
              rows={4}
              value={data.address}
              onChange={(e) => handleUpdate({ address: e.target.value })}
              style={{ minHeight: '100px', paddingTop: '0.5rem', background: '#fff' }}
            />
          </div>
        </div>
      </div>

      <div className="card">
        <FileUpload
          label="[PC-IV-24.7] Attachment(s)"
          files={attachments}
          onUpload={(files) => handleUpdate({ attachments: files })}
          onRemove={(i) => handleUpdate({ attachments: attachments.filter((_: unknown, j: number) => j !== i) })}
          description="Upload supporting documents"
        />
      </div>

      <div className="card">
        <FileUpload
          label="[PC-IV-24.8] Annexure(s)"
          files={annexures}
          onUpload={(files) => handleUpdate({ annexures: files })}
          onRemove={(i) => handleUpdate({ annexures: annexures.filter((_: unknown, j: number) => j !== i) })}
          description="Upload annexures"
        />
      </div>
    </div>
  );
};

function titleFromLegacyAttachmentRows(raw: unknown): string {
  const list = raw as { title?: string }[] | undefined;
  if (!Array.isArray(list)) return '';
  return list.map((x) => (x?.title ?? '').trim()).find(Boolean) ?? '';
}

function resolveBlockTitle(
  data: Record<string, unknown>,
  titleKey: string,
  attachmentsKey: string,
  legacyCovering?: boolean,
): string {
  const direct = String(data[titleKey] ?? '').trim();
  if (direct) return direct;
  if (legacyCovering) {
    const c = String(data.covering ?? '').trim();
    if (c) return c;
  }
  return titleFromLegacyAttachmentRows(data[attachmentsKey]);
}

export const Section25_ProjectAppraisalDocumentation: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.pc4.s25 as Record<string, unknown>;

  const handleUpdate = (updates: Record<string, unknown>) => {
    updateSection('pc4', { s25: { ...data, ...updates } });
  };

  const momsForumTitle = resolveBlockTitle(data, 'momsForumTitle', 'momsForumAttachments');
  const adminTitle = resolveBlockTitle(data, 'administrativeApprovalTitle', 'administrativeApprovalAttachments');
  const issuanceTitle = resolveBlockTitle(data, 'issuanceTitle', 'issuanceAttachments', true);

  const momsForumFiles = normalizeFileList(data.momsForumAttachments);
  const adminFiles = normalizeFileList(data.administrativeApprovalAttachments);
  const issuanceFiles = normalizeFileList(
    (data.issuanceAttachments as unknown) ?? (data.attachments as unknown),
  );

  const block = (
    sectionLabel: string,
    titleValue: string,
    titleKey: string,
    files: FileMeta[],
    filesKey: string,
    titleNo: string,
    attachNo: string,
  ) => (
    <div className="card">
      <label className="label" style={{ marginBottom: '1rem', display: 'block' }}>
        {sectionLabel}
      </label>
      <InputField
        label={`[PC-IV-${titleNo}] Title`}
        placeholder="Enter a title for this item"
        value={titleValue}
        onChange={(e) => handleUpdate({ [titleKey]: e.target.value })}
      />
      <div style={{ marginTop: '1.25rem' }}>
        <FileUpload
          label={`[PC-IV-${attachNo}] Attachment(s)`}
          files={files}
          onUpload={(next) => handleUpdate({ [filesKey]: next })}
          onRemove={(i) => handleUpdate({ [filesKey]: files.filter((_: unknown, j: number) => j !== i) })}
          description="Upload supporting documents"
        />
      </div>
    </div>
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      {block('A. MoMs of approval forum', momsForumTitle, 'momsForumTitle', momsForumFiles, 'momsForumAttachments', '25.1', '25.2')}
      {block(
        'B. Administrative approval',
        adminTitle,
        'administrativeApprovalTitle',
        adminFiles,
        'administrativeApprovalAttachments',
        '25.3',
        '25.4'
      )}
      {block('C. Issuance letter', issuanceTitle, 'issuanceTitle', issuanceFiles, 'issuanceAttachments', '25.5', '25.6')}
    </div>
  );
};
