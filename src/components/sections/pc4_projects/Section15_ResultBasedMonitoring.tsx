import React from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { useForm } from '../../../context/FormContext';
import { FileUpload } from '../../ui/FormElements';
import { normalizePC4Attachments } from './PC4AttachmentBlock';

type RbmRow = {
  input: string;
  output: string;
  baselineIndicators: string;
  targetsAfterCompletion: string;
  targetImpact: string;
};

const emptyRow = (): RbmRow => ({
  input: '',
  output: '',
  baselineIndicators: '',
  targetsAfterCompletion: '',
  targetImpact: '',
});

const addRowButtonStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.4rem',
  color: 'hsl(var(--success))',
  background: '#fff',
  border: '1px solid hsl(var(--border))',
};

const outcomeLabelStyle: React.CSSProperties = {
  fontSize: '0.7rem',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.04em',
  color: 'hsl(var(--text-muted))',
  margin: '1rem 0 0.75rem',
};

function normalizeRows(pc4: Record<string, unknown>, s15: Record<string, unknown>): RbmRow[] {
  const modern = s15.rbmRows as RbmRow[] | undefined;
  if (Array.isArray(modern)) {
    if (modern.length === 0) return [emptyRow()];
    return modern.map((r) => ({ ...emptyRow(), ...r }));
  }
  const legacy = pc4.s18 as { indicators?: Record<string, string>[] } | undefined;
  const ind = legacy?.indicators;
  if (ind && ind.length > 0) {
    return ind.map((r) => ({
      input: r.input ?? '',
      output: r.output ?? '',
      baselineIndicators: r.baseline ?? '',
      targetsAfterCompletion: r.target ?? '',
      targetImpact: r.targetedImpact ?? '',
    }));
  }
  return [emptyRow()];
}

export const Section15_ResultBasedMonitoring: React.FC = () => {
  const { formData, updateSection } = useForm();
  const pc4 = formData.pc4 as Record<string, unknown>;
  const s15 = (formData.pc4.s15 || {}) as Record<string, unknown>;

  const handleS15 = (updates: Record<string, unknown>) => {
    updateSection('pc4', { s15: { ...s15, ...updates } });
  };

  const rows = normalizeRows(pc4, s15);
  const attachments = normalizePC4Attachments(s15.rbmAttachments);
  const fileUploadList = attachments.map((a) => ({
    name: a.name || a.title || 'File',
    size: a.size,
    type: a.type,
    date: a.date,
  }));

  const setRows = (next: RbmRow[]) => handleS15({ rbmRows: next });

  const addRow = () => {
    setRows([...rows, emptyRow()]);
  };

  const removeRow = (i: number) => {
    if (rows.length <= 1) return;
    setRows(rows.filter((_, idx) => idx !== i));
  };

  const patchRow = (i: number, patch: Partial<RbmRow>) => {
    const next = [...rows];
    next[i] = { ...emptyRow(), ...next[i], ...patch };
    setRows(next);
  };

  const persistAttachmentsFromFileList = (
    next: { name: string; size: string; type: string; date: string }[],
  ) => {
    handleS15({
      rbmAttachments: next.map((f) => {
        const prev = attachments.find(
          (p) => (p.name || p.title) === f.name && p.size === f.size && p.date === f.date,
        );
        return {
          title: prev?.title ?? '',
          name: f.name,
          size: f.size,
          type: f.type,
          date: f.date,
        };
      }),
    });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          flexWrap: 'wrap',
        }}
      >
        <h3 style={{ fontSize: '1rem', fontWeight: 600, margin: 0, color: 'hsl(var(--text-main))' }}>
          Result based monitoring indicators
        </h3>
        <button type="button" className="btn btn-secondary" title="Add row" onClick={addRow} style={addRowButtonStyle}>
          <Plus size={16} />
          Add row
        </button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {rows.map((row, idx) => (
          <div key={idx} className="card" style={{ padding: '1rem 1.25rem' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
                marginBottom: '1rem',
                flexWrap: 'wrap',
              }}
            >
              <span style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'hsl(var(--text-main))' }}>
                SR. NO. {idx + 1}
              </span>
              {rows.length > 1 && (
                <button
                  type="button"
                  className="btn btn-secondary"
                  title="Remove row"
                  onClick={() => removeRow(idx)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    color: 'hsl(var(--error))',
                  }}
                >
                  <Trash2 size={16} />
                  Remove
                </button>
              )}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
              <div className="input-group">
                <label className="label">[PC-IV-15.1] Input</label>
                <textarea
                  className="input"
                  rows={3}
                  value={row.input}
                  onChange={(e) => patchRow(idx, { input: e.target.value })}
                  style={{
                    width: '100%',
                    minHeight: '4rem',
                    resize: 'vertical',
                    fontSize: '0.8125rem',
                    lineHeight: 1.5,
                    paddingTop: '0.5rem',
                  }}
                />
              </div>
              <div className="input-group">
                <label className="label">[PC-IV-15.2] Output</label>
                <textarea
                  className="input"
                  rows={3}
                  value={row.output}
                  onChange={(e) => patchRow(idx, { output: e.target.value })}
                  style={{
                    width: '100%',
                    minHeight: '4rem',
                    resize: 'vertical',
                    fontSize: '0.8125rem',
                    lineHeight: 1.5,
                    paddingTop: '0.5rem',
                  }}
                />
              </div>
            </div>

            <p style={outcomeLabelStyle}>Outcome</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
              <div className="input-group">
                <label className="label">[PC-IV-15.3] Baseline indicators</label>
                <input
                  className="input"
                  value={row.baselineIndicators}
                  onChange={(e) => patchRow(idx, { baselineIndicators: e.target.value })}
                  style={{ width: '100%', fontSize: '0.8125rem', background: '#fff' }}
                />
              </div>
              <div className="input-group">
                <label className="label">[PC-IV-15.4] Targets after completion of project</label>
                <input
                  className="input"
                  value={row.targetsAfterCompletion}
                  onChange={(e) => patchRow(idx, { targetsAfterCompletion: e.target.value })}
                  style={{ width: '100%', fontSize: '0.8125rem', background: '#fff' }}
                />
              </div>
            </div>

            <div className="input-group" style={{ marginTop: '1.25rem' }}>
              <label className="label">[PC-IV-15.5] Target impact</label>
              <textarea
                className="input"
                rows={3}
                value={row.targetImpact}
                onChange={(e) => patchRow(idx, { targetImpact: e.target.value })}
                style={{
                  width: '100%',
                  minHeight: '4rem',
                  resize: 'vertical',
                  fontSize: '0.8125rem',
                  lineHeight: 1.5,
                  paddingTop: '0.5rem',
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="card">
        <FileUpload
          label="[PC-IV-15.6] Attachment(s)"
          files={fileUploadList}
          onUpload={(files) => persistAttachmentsFromFileList(files)}
          onRemove={(i) =>
            handleS15({ rbmAttachments: attachments.filter((_, j) => j !== i) })
          }
          description="Upload supporting documents"
        />
      </div>
    </div>
  );
};
