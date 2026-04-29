import React from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { useForm } from '../../../context/FormContext';
import { FileUpload, InputField } from '../../ui/FormElements';

type ScheduleRow = {
  actualStart: string;
  actualEnd: string;
  totalDuration: string;
  extensionStart: string;
  extensionEnd: string;
};

const emptyRow = (): ScheduleRow => ({
  actualStart: '',
  actualEnd: '',
  totalDuration: '',
  extensionStart: '',
  extensionEnd: '',
});

type FileMeta = { name: string; size: string; type: string; date: string };

const normalizeFileList = (list: unknown): FileMeta[] =>
  ((list as FileMeta[]) || []).map((f) => ({
    name: f.name || (f as FileMeta & { title?: string }).title || 'File',
    size: f.size ?? '',
    type: f.type ?? '',
    date: f.date ?? '',
  }));

const addRowButtonStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.4rem',
  color: 'hsl(var(--success))',
  background: '#fff',
  border: '1px solid hsl(var(--border))',
};

export const Section7_Schedule: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.pc4.s5;

  const handleUpdate = (updates: Record<string, unknown>) => {
    updateSection('pc4', { s5: { ...data, ...updates } });
  };

  const rows = (
    data.scheduleRows && data.scheduleRows.length > 0 ? data.scheduleRows : [emptyRow()]
  ) as ScheduleRow[];

  const annexures = normalizeFileList(data.annexures);

  const setRows = (next: ScheduleRow[]) => handleUpdate({ scheduleRows: next });

  const addRow = () => setRows([...rows, emptyRow()]);
  const removeRow = (i: number) => {
    if (rows.length <= 1) return;
    setRows(rows.filter((_: ScheduleRow, idx: number) => idx !== i));
  };
  const patchRow = (i: number, patch: Partial<ScheduleRow>) => {
    const next = [...rows];
    next[i] = { ...emptyRow(), ...next[i], ...patch };
    setRows(next);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div className="card">
        <h3 style={{ fontSize: '0.9375rem', fontWeight: 600, marginBottom: '0.75rem' }}>
          PC start and end date
        </h3>
        <p
          style={{
            fontSize: '0.75rem',
            fontWeight: 600,
            color: 'hsl(var(--accent))',
            marginBottom: '1rem',
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
          }}
        >
          As per PC I
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          <InputField
            label="Start date"
            type="date"
            value={data.pciStartDate ?? ''}
            onChange={(e) => handleUpdate({ pciStartDate: e.target.value })}
          />
          <InputField
            label="End date"
            type="date"
            value={data.pciEndDate ?? ''}
            onChange={(e) => handleUpdate({ pciEndDate: e.target.value })}
          />
        </div>
      </div>

      <div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            flexWrap: 'wrap',
            marginBottom: '1.25rem',
          }}
        >
          <h3 style={{ fontSize: '1rem', fontWeight: 600, margin: 0, color: 'hsl(var(--text-main))' }}>
            Actual and extension date
          </h3>
          <button type="button" className="btn btn-secondary" title="Add row" onClick={addRow} style={addRowButtonStyle}>
            <Plus size={16} />
            Add row
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {rows.map((row, idx) => (
            <div key={idx} className="card">
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  marginBottom: '1.25rem',
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

            <p
              style={{
                fontSize: '0.7rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                color: 'hsl(var(--text-muted))',
                margin: '0 0 0.75rem',
              }}
            >
              Actual
            </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
                <InputField
                  label="[PC-IV-7.1] Commencement date"
                  type="date"
                  value={row.actualStart}
                  onChange={(e) => patchRow(idx, { actualStart: e.target.value })}
                />
                <InputField
                  label="[PC-IV-7.2] Completion date"
                  type="date"
                  value={row.actualEnd}
                  onChange={(e) => patchRow(idx, { actualEnd: e.target.value })}
                />
                <InputField
                  label="[PC-IV-7.3] Total Duration"
                  placeholder="e.g. 24 Months"
                  readOnly
                  value={row.totalDuration ?? ''}
                  onChange={() => {}}
                />
              </div>

            <p
              style={{
                fontSize: '0.7rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                color: 'hsl(var(--text-muted))',
                margin: '1.25rem 0 0.75rem',
              }}
            >
              Extensions
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
              <InputField
                label="Start date"
                type="date"
                value={row.extensionStart}
                onChange={(e) => patchRow(idx, { extensionStart: e.target.value })}
              />
              <InputField
                label="End date"
                type="date"
                value={row.extensionEnd}
                onChange={(e) => patchRow(idx, { extensionEnd: e.target.value })}
              />
            </div>
          </div>
        ))}
        </div>
      </div>

      <div className="card">
        <FileUpload
          label="Annexures"
          files={annexures}
          onUpload={(files) => handleUpdate({ annexures: files })}
          onRemove={(i) => handleUpdate({ annexures: annexures.filter((_: unknown, j: number) => j !== i) })}
          description="Add annexures"
        />
      </div>
    </div>
  );
};
