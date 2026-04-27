import React from 'react';
import { useForm } from '../../../context/FormContext';
import { FileUpload } from '../../ui/FormElements';
import { RTEditor } from '../../ui/RTEditor';

type SimpleFileMeta = { name: string; size: string; type: string; date: string };

const normalizeSimpleFiles = (list: unknown): SimpleFileMeta[] =>
  ((list as (SimpleFileMeta & { title?: string })[]) || []).map((f) => ({
    name: f.name || f.title || 'File',
    size: f.size ?? '',
    type: f.type ?? '',
    date: f.date ?? '',
  }));

export const Section21_ImpactEvaluation: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.pc4.s21;

  const handleUpdate = (updates: Record<string, unknown>) => {
    updateSection('pc4', { s21: { ...data, ...updates } });
  };

  const attachments = normalizeSimpleFiles(data.attachments);

  const orgHtml = typeof data.organizationalManagementHtml === 'string' ? data.organizationalManagementHtml : '';
  const capHtml = typeof data.capacityDepartmentHtml === 'string' ? data.capacityDepartmentHtml : '';
  const decHtml = typeof data.decisionMakingProcessHtml === 'string' ? data.decisionMakingProcessHtml : '';
  const otherHtml = typeof data.anyOtherHtml === 'string' ? data.anyOtherHtml : '';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      <div className="card">
        <RTEditor
          label="Organizational management"
          value={orgHtml}
          onChange={(v) => handleUpdate({ organizationalManagementHtml: v })}
        />
      </div>

      <div className="card">
        <RTEditor
          label="Capacity of the department concerned"
          value={capHtml}
          onChange={(v) => handleUpdate({ capacityDepartmentHtml: v })}
        />
      </div>

      <div className="card">
        <RTEditor
          label="Decision making process"
          value={decHtml}
          onChange={(v) => handleUpdate({ decisionMakingProcessHtml: v })}
        />
      </div>

      <div className="card">
        <RTEditor label="Any other" value={otherHtml} onChange={(v) => handleUpdate({ anyOtherHtml: v })} />
      </div>

      <div className="card">
        <FileUpload
          label="Attachment(s)"
          files={attachments}
          onUpload={(files) => handleUpdate({ attachments: files })}
          onRemove={(i) => handleUpdate({ attachments: attachments.filter((_: unknown, j: number) => j !== i) })}
          description="Upload supporting documents"
        />
      </div>
    </div>
  );
};

export const Section22_ImpactAnalysis: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.pc4.s22;

  const handleUpdate = (updates: Record<string, unknown>) => {
    updateSection('pc4', { s22: { ...data, ...updates } });
  };

  const attachments = normalizeSimpleFiles(data.attachments);

  const idHtml = typeof data.projectIdentificationHtml === 'string' ? data.projectIdentificationHtml : '';
  const prepHtml = typeof data.projectPreparationHtml === 'string' ? data.projectPreparationHtml : '';
  const apprHtml = typeof data.projectApprovalHtml === 'string' ? data.projectApprovalHtml : '';
  const finHtml = typeof data.projectFinancingHtml === 'string' ? data.projectFinancingHtml : '';
  const implHtml = typeof data.projectImplementationHtml === 'string' ? data.projectImplementationHtml : '';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      <div className="card">
        <RTEditor
          label="Project identification"
          value={idHtml}
          onChange={(v) => handleUpdate({ projectIdentificationHtml: v })}
        />
      </div>

      <div className="card">
        <RTEditor
          label="Project preparation"
          value={prepHtml}
          onChange={(v) => handleUpdate({ projectPreparationHtml: v })}
        />
      </div>

      <div className="card">
        <RTEditor
          label="Project approval"
          value={apprHtml}
          onChange={(v) => handleUpdate({ projectApprovalHtml: v })}
        />
      </div>

      <div className="card">
        <RTEditor
          label="Project financing"
          value={finHtml}
          onChange={(v) => handleUpdate({ projectFinancingHtml: v })}
        />
      </div>

      <div className="card">
        <RTEditor
          label="Project implementation"
          value={implHtml}
          onChange={(v) => handleUpdate({ projectImplementationHtml: v })}
        />
      </div>

      <div className="card">
        <FileUpload
          label="Attachment(s)"
          files={attachments}
          onUpload={(files) => handleUpdate({ attachments: files })}
          onRemove={(i) => handleUpdate({ attachments: attachments.filter((_: unknown, j: number) => j !== i) })}
          description="Upload supporting documents"
        />
      </div>
    </div>
  );
};

export const Section23_Suggestions: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = (formData.pc4.suggestions || {}) as Record<string, unknown>;

  const handleUpdate = (updates: Record<string, unknown>) => {
    updateSection('pc4', { suggestions: { ...data, ...updates } });
  };

  const html = typeof data.suggestionsHtml === 'string' ? data.suggestionsHtml : '';
  const attachments = normalizeSimpleFiles(data.attachments);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      <div className="card">
        <RTEditor
          label="Suggestions for future planning and implementation of similar projects"
          value={html}
          onChange={(v) => handleUpdate({ suggestionsHtml: v })}
        />
      </div>

      <div className="card">
        <FileUpload
          label="Attachment(s)"
          files={attachments}
          onUpload={(files) => handleUpdate({ attachments: files })}
          onRemove={(i) => handleUpdate({ attachments: attachments.filter((_: unknown, j: number) => j !== i) })}
          description="Upload supporting documents"
        />
      </div>
    </div>
  );
};

function parseRawAmount(s: string): number {
  const n = parseFloat(s);
  return Number.isFinite(n) ? n : 0;
}

/** Read-only helper: raw amount divided by 1,000,000 (same pattern as item-wise / recurring sections). */
function formatPointMillionLabel(rawStr: string): string {
  const raw = parseRawAmount(rawStr);
  if (raw === 0) return '—';
  const m = raw / 1_000_000;
  const t = m.toFixed(6).replace(/\.?0+$/, '');
  return t === '' ? '0' : t;
}

function StackedAmountWithPointValue({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
      <input
        type="number"
        step="any"
        className="input"
        style={{ background: '#fff', width: '100%', fontSize: '0.875rem' }}
        placeholder="0"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <input
        type="text"
        readOnly
        className="input"
        style={{
          background: 'hsl(var(--bg-main))',
          width: '100%',
          fontSize: '0.75rem',
          cursor: 'default',
        }}
        value={formatPointMillionLabel(value)}
        aria-label="Value in millions (derived)"
      />
    </div>
  );
}

export const Section23_EconomicAnalysis: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.pc4.s23;

  const handleUpdate = (updates: any) => {
    updateSection('pc4', { s23: { ...data, ...updates } });
  };

  const updateField = (row: string, col: string, val: string) => {
    const newValues = { ...data };
    (newValues as any)[row] = { ...(newValues as any)[row], [col]: val };
    handleUpdate(newValues);
  };

  const sections = [
    {
      key: 'financial',
      title: 'Financial',
      showRsMillion: true,
      metrics: [
        { id: 'npvFinancial', label: 'Net present value (NPV)' },
        { id: 'bcrFinancial', label: 'Benefit cost ratio (BCR)' },
        { id: 'ifrr', label: 'Internal Financial Rate of Return (IFRR)' },
        { id: 'unitCost', label: 'Unit cost analysis' },
      ],
    },
    {
      key: 'economic',
      title: 'Economic',
      showRsMillion: false,
      metrics: [
        { id: 'npvEconomic', label: 'Net present value (NPV)' },
        { id: 'bcrEconomic', label: 'Benefit cost ratio (BCR)' },
        { id: 'ierr', label: 'Internal Economic Rate of Return (IERR)' },
      ],
    },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
      {sections.map((block) => (
        <React.Fragment key={block.key}>
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              justifyContent: 'space-between',
              gap: '1rem',
              flexWrap: 'wrap',
            }}
          >
            <h3
              style={{
                fontSize: '1.125rem',
                fontWeight: 700,
                margin: 0,
                color: 'hsl(var(--text-main))',
                letterSpacing: '-0.01em',
              }}
            >
              {block.title}
            </h3>
            {block.showRsMillion ? (
              <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'hsl(var(--text-muted))' }}>
                (Rs. Million)
              </span>
            ) : null}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {block.metrics.map((m) => {
              const row = data[m.id as keyof typeof data] as { pci?: string; completion?: string } | undefined;
              return (
                <div key={m.id} className="card" style={{ padding: '1rem 1.25rem' }}>
                  <p
                    style={{
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      margin: '0 0 1rem',
                      color: 'hsl(var(--text-main))',
                      lineHeight: 1.35,
                    }}
                  >
                    {m.label}
                  </p>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '1rem',
                    }}
                  >
                    <div>
                      <label className="label" style={{ fontSize: '0.75rem', marginBottom: '0.35rem' }}>
                        As per PC-I
                      </label>
                      <StackedAmountWithPointValue
                        value={row?.pci ?? ''}
                        onChange={(v) => updateField(m.id, 'pci', v)}
                      />
                    </div>
                    <div>
                      <label className="label" style={{ fontSize: '0.75rem', marginBottom: '0.35rem' }}>
                        After completion
                      </label>
                      <StackedAmountWithPointValue
                        value={row?.completion ?? ''}
                        onChange={(v) => updateField(m.id, 'completion', v)}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};
