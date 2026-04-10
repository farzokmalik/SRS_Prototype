import React from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { useForm } from '../../../context/FormContext';

type IncomeRow = {
  asEstimatedInPci: string;
  actual: string;
};

const emptyRow = (): IncomeRow => ({
  asEstimatedInPci: '',
  actual: '',
});

const addRowButtonStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.4rem',
  color: 'hsl(var(--success))',
  background: '#fff',
  border: '1px solid hsl(var(--border))',
};

export const Section14_YearWiseIncome: React.FC = () => {
  const { formData, updateSection } = useForm();
  const s14 = formData.pc4.s14;

  const handleUpdate = (updates: Record<string, unknown>) => {
    updateSection('pc4', { s14: { ...s14, ...updates } });
  };

  const rows: IncomeRow[] =
    Array.isArray(s14.yearWiseIncomeRows) && s14.yearWiseIncomeRows.length > 0
      ? (s14.yearWiseIncomeRows as IncomeRow[]).map((r) => ({
          ...emptyRow(),
          ...r,
        }))
      : [emptyRow()];

  const setRows = (next: IncomeRow[]) => handleUpdate({ yearWiseIncomeRows: next });

  const addRow = () => {
    setRows([...rows, emptyRow()]);
  };

  const removeRow = (i: number) => {
    if (rows.length <= 1) return;
    setRows(rows.filter((_, idx) => idx !== i));
  };

  const patchRow = (i: number, patch: Partial<IncomeRow>) => {
    const next = [...rows];
    next[i] = { ...emptyRow(), ...next[i], ...patch };
    setRows(next);
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
          Year-wise income from services/revenue generation
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
                <label className="label">As estimated in the PC-I</label>
                <textarea
                  className="input"
                  rows={4}
                  placeholder="As estimated in the PC-I…"
                  value={row.asEstimatedInPci}
                  onChange={(e) => patchRow(idx, { asEstimatedInPci: e.target.value })}
                  style={{
                    width: '100%',
                    minHeight: '5rem',
                    resize: 'vertical',
                    fontSize: '0.8125rem',
                    lineHeight: 1.5,
                    paddingTop: '0.5rem',
                  }}
                />
              </div>
              <div className="input-group">
                <label className="label">Actual</label>
                <textarea
                  className="input"
                  rows={4}
                  placeholder="Actual income or achievement…"
                  value={row.actual}
                  onChange={(e) => patchRow(idx, { actual: e.target.value })}
                  style={{
                    width: '100%',
                    minHeight: '5rem',
                    resize: 'vertical',
                    fontSize: '0.8125rem',
                    lineHeight: 1.5,
                    paddingTop: '0.5rem',
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
