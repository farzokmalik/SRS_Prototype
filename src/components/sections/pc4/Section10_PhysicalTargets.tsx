import React from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { useForm } from '../../../context/FormContext';
import { FileUpload, InputField } from '../../ui/FormElements';

type TargetRow = {
  item: string;
  unit: string;
  quantity: string;
  actualAchievement: string;
  remarks: string;
};

const emptyRow = (): TargetRow => ({
  item: '',
  unit: '',
  quantity: '0',
  actualAchievement: '',
  remarks: '',
});

const ACHIEVEMENT_OPTIONS = [
  { value: '', label: 'Choose…' },
  { value: 'fully-achieved', label: 'Fully achieved' },
  { value: 'partially-achieved', label: 'Partially achieved' },
  { value: 'not-achieved', label: 'Not achieved' },
  { value: 'in-progress', label: 'In progress' },
  { value: 'na', label: 'N/A' },
];

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

export const Section10_PhysicalTargets: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.pc4.s10;

  const handleUpdate = (updates: Record<string, unknown>) => {
    updateSection('pc4', { s10: { ...data, ...updates } });
  };

  const rows = (
    Array.isArray(data.targetRows) && data.targetRows.length > 0
      ? (data.targetRows as TargetRow[])
      : [emptyRow()]
  );

  const attachments = normalizeFileList(data.attachments);

  const setRows = (next: TargetRow[]) => handleUpdate({ targetRows: next });

  const addRow = () => setRows([...rows, emptyRow()]);
  const removeRow = (i: number) => {
    if (rows.length <= 1) return;
    setRows(rows.filter((_: TargetRow, idx: number) => idx !== i));
  };

  const patchRow = (i: number, patch: Partial<TargetRow>) => {
    const next = [...rows];
    next[i] = { ...emptyRow(), ...next[i], ...patch };
    setRows(next);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
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
            Physical targets & achievements
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

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                <InputField
                  label="Items (as per PC-I)"
                  placeholder="Item description"
                  value={row.item}
                  onChange={(e) => patchRow(idx, { item: e.target.value })}
                />
                <InputField
                  label="Unit"
                  placeholder="Unit"
                  value={row.unit}
                  onChange={(e) => patchRow(idx, { unit: e.target.value })}
                />
                <InputField
                  label="Quantity"
                  type="number"
                  step="any"
                  placeholder="0"
                  value={row.quantity}
                  onChange={(e) => patchRow(idx, { quantity: e.target.value })}
                />
                <div className="input-group">
                  <label className="label">Actual achievements</label>
                  <select
                    className="select"
                    style={{ width: '100%', minHeight: '42px', background: '#fff' }}
                    value={row.actualAchievement}
                    onChange={(e) => patchRow(idx, { actualAchievement: e.target.value })}
                  >
                    {ACHIEVEMENT_OPTIONS.map((o) => (
                      <option key={o.value || 'empty'} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div style={{ gridColumn: '1 / -1' }}>
                  <InputField
                    label="Remarks"
                    placeholder="Remarks"
                    value={row.remarks}
                    onChange={(e) => patchRow(idx, { remarks: e.target.value })}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="card">
        <FileUpload
          label="Attachments"
          files={attachments}
          onUpload={(files) => handleUpdate({ attachments: files })}
          onRemove={(i) => handleUpdate({ attachments: attachments.filter((_: unknown, j: number) => j !== i) })}
          description="Upload supporting documents"
        />
      </div>
    </div>
  );
};
