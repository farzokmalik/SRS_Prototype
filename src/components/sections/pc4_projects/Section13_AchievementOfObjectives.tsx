import React from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { useForm } from '../../../context/FormContext';

type ObjectiveRow = {
  asContainedInPci: string;
  actualAchievement: string;
};

const emptyRow = (): ObjectiveRow => ({
  asContainedInPci: '',
  actualAchievement: '',
});

const addRowButtonStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.4rem',
  color: 'hsl(var(--success))',
  background: '#fff',
  border: '1px solid hsl(var(--border))',
};

export const Section13_AchievementOfObjectives: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.pc4.s13;

  const handleUpdate = (updates: Record<string, unknown>) => {
    updateSection('pc4', { s13: { ...data, ...updates } });
  };

  const rows: ObjectiveRow[] =
    Array.isArray(data.objectiveAchievementRows) && data.objectiveAchievementRows.length > 0
      ? (data.objectiveAchievementRows as ObjectiveRow[]).map((r) => ({
          ...emptyRow(),
          ...r,
        }))
      : [emptyRow()];

  const setRows = (next: ObjectiveRow[]) => handleUpdate({ objectiveAchievementRows: next });

  const addRow = () => {
    setRows([...rows, emptyRow()]);
  };

  const removeRow = (i: number) => {
    if (rows.length <= 1) return;
    setRows(rows.filter((_, idx) => idx !== i));
  };

  const patchRow = (i: number, patch: Partial<ObjectiveRow>) => {
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
          Achievement of objectives
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
                  <label className="label">As contained in the PC-I</label>
                  <textarea
                    className="input"
                    rows={4}
                    placeholder="As per PC-I…"
                    value={row.asContainedInPci}
                    onChange={(e) => patchRow(idx, { asContainedInPci: e.target.value })}
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
                  <label className="label">Actual achievement</label>
                  <textarea
                    className="input"
                    rows={4}
                    placeholder="Describe actual achievement…"
                    value={row.actualAchievement}
                    onChange={(e) => patchRow(idx, { actualAchievement: e.target.value })}
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
