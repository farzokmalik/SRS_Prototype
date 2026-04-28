import React from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { useForm } from '../../../context/FormContext';
import { InputField } from '../../ui/FormElements';

type PdRow = {
  nameDesignation: string;
  fromDate: string;
  toDate: string;
  present: boolean;
};

const emptyRow = (): PdRow => ({
  nameDesignation: '',
  fromDate: '',
  toDate: '',
  present: false,
});

const addRowButtonStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.4rem',
  color: 'hsl(var(--success))',
  background: '#fff',
  border: '1px solid hsl(var(--border))',
};

export const Section16_ProjectDirectors: React.FC = () => {
  const { formData, updateSection } = useForm();
  const s16 = (formData.pc4.s16 || {}) as Record<string, unknown>;

  const handleUpdate = (updates: Record<string, unknown>) => {
    updateSection('pc4', { s16: { ...s16, ...updates } });
  };

  const rows: PdRow[] = Array.isArray(s16.pdRows)
    ? (s16.pdRows as PdRow[]).length > 0
      ? (s16.pdRows as PdRow[]).map((r) => ({ ...emptyRow(), ...r }))
      : [emptyRow()]
    : [emptyRow()];

  const setRows = (next: PdRow[]) => handleUpdate({ pdRows: next });

  const addRow = () => setRows([...rows, emptyRow()]);

  const removeRow = (i: number) => {
    if (rows.length <= 1) return;
    setRows(rows.filter((_, idx) => idx !== i));
  };

  const patchRow = (i: number, patch: Partial<PdRow>) => {
    const next = [...rows];
    next[i] = { ...emptyRow(), ...next[i], ...patch };
    setRows(next);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
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
            List of project directors (PDs) since inception
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

              <div className="input-group" style={{ marginBottom: '1.25rem' }}>
                <label className="label">[PC-IV-16.1] Name &amp; designation</label>
                <textarea
                  className="input"
                  rows={3}
                  placeholder="Name and designation…"
                  value={row.nameDesignation}
                  onChange={(e) => patchRow(idx, { nameDesignation: e.target.value })}
                  style={{ width: '100%', minHeight: '4rem', resize: 'vertical', fontSize: '0.875rem', background: '#fff', paddingTop: '0.5rem' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1rem' }}>
                <InputField
                  label="[PC-IV-16.2] From"
                  type="date"
                  value={row.fromDate}
                  onChange={(e) => patchRow(idx, { fromDate: e.target.value })}
                />
                <InputField
                  label="[PC-IV-16.3] To"
                  type="date"
                  value={row.toDate}
                  onChange={(e) => patchRow(idx, { toDate: e.target.value })}
                />
              </div>

              <label
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  cursor: 'pointer',
                  fontSize: '0.9375rem',
                  color: 'hsl(var(--text-main))',
                }}
              >
                <input
                  type="checkbox"
                  checked={row.present}
                  onChange={(e) => patchRow(idx, { present: e.target.checked })}
                  style={{ width: '1.15rem', height: '1.15rem', accentColor: 'hsl(var(--accent))', cursor: 'pointer' }}
                />
                [PC-IV-16.4] Present (currently in role)
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
