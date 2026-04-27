import React from 'react';
import { useForm } from '../../../context/FormContext';
import { InputField, TextAreaField } from '../../ui/FormElements';

const LAPSABLE_OPTIONS = [
  { value: '', label: 'Choose…' },
  { value: 'lapsable', label: 'Lapsable' },
  { value: 'non-lapsable', label: 'Non-lapsable' },
];

const NATURE_ROWS = [
  { key: 'pla', label: 'PLA' },
  { key: 'assignment', label: 'Assignment Account' },
  { key: 'current', label: 'Current Account' },
  { key: 'saving', label: 'Saving Account' },
  { key: 'other', label: 'Other' },
] as const;

type NatureKey = (typeof NATURE_ROWS)[number]['key'];

type NatureRowState = { dateOpened: string; lapsable: string };

function emptyNature(): Record<NatureKey, NatureRowState> {
  return {
    pla: { dateOpened: '', lapsable: '' },
    assignment: { dateOpened: '', lapsable: '' },
    current: { dateOpened: '', lapsable: '' },
    saving: { dateOpened: '', lapsable: '' },
    other: { dateOpened: '', lapsable: '' },
  };
}

function normalizeNature(raw: unknown): Record<NatureKey, NatureRowState> {
  const base = emptyNature();
  if (!raw || typeof raw !== 'object') return base;
  const o = raw as Record<string, unknown>;
  for (const { key } of NATURE_ROWS) {
    const row = o[key];
    if (row && typeof row === 'object') {
      const r = row as Record<string, unknown>;
      base[key] = {
        dateOpened: typeof r.dateOpened === 'string' ? r.dateOpened : '',
        lapsable: typeof r.lapsable === 'string' ? r.lapsable : '',
      };
    }
  }
  return base;
}

const sectionTitleStyle: React.CSSProperties = {
  fontSize: '1rem',
  fontWeight: 600,
  margin: '0 0 1.25rem',
  color: 'hsl(var(--text-main))',
};

const accountCardStyle: React.CSSProperties = {
  borderLeft: '4px solid hsl(var(--accent))',
  boxShadow: '0 1px 3px hsl(var(--text-main) / 0.08)',
};

export const Section8_ProjectAccounts: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.pc4.s8;

  const handleUpdate = (updates: Record<string, unknown>) => {
    updateSection('pc4', { s8: { ...data, ...updates } });
  };

  const nature = normalizeNature(data.natureAccounts);

  const patchNature = (key: NatureKey, patch: Partial<NatureRowState>) => {
    handleUpdate({
      natureAccounts: { ...nature, [key]: { ...nature[key], ...patch } },
    });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div>
        <h3 style={sectionTitleStyle}>Nature of account</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {NATURE_ROWS.map(({ key, label }) => (
            <div key={key} className="card" style={accountCardStyle}>
              <p
                style={{
                  fontSize: '0.9375rem',
                  fontWeight: 700,
                  margin: '0 0 1.25rem',
                  paddingBottom: '0.75rem',
                  borderBottom: '1px solid hsl(var(--border))',
                  color: 'hsl(var(--text-main))',
                }}
              >
                {label}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', maxWidth: '28rem' }}>
                <InputField
                  label="Date of opening"
                  type="date"
                  description="mm/dd/yyyy"
                  value={nature[key].dateOpened}
                  onChange={(e) => patchNature(key, { dateOpened: e.target.value })}
                />
                <div className="input-group" style={{ marginBottom: 0 }}>
                  <label className="label">Lapsable / Non-lapsable</label>
                  <select
                    className="select"
                    style={{ width: '100%', minHeight: '42px', background: '#fff' }}
                    value={nature[key].lapsable}
                    onChange={(e) => patchNature(key, { lapsable: e.target.value })}
                  >
                    {LAPSABLE_OPTIONS.map((o) => (
                      <option key={o.value || 'empty'} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="card">
        <h3 style={{ ...sectionTitleStyle, marginBottom: '1.25rem' }}>Status of account</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <TextAreaField
            label="If closed, mention the date"
            placeholder="e.g. account closed on …"
            rows={3}
            value={typeof data.closedDate === 'string' ? data.closedDate : ''}
            onChange={(e) => handleUpdate({ closedDate: e.target.value })}
          />
          <TextAreaField
            label="If not closed, mention reasons thereof and tentative closure date"
            placeholder="Reasons and tentative closure date"
            rows={4}
            value={typeof data.notClosedReasonsTentativeDate === 'string' ? data.notClosedReasonsTentativeDate : ''}
            onChange={(e) => handleUpdate({ notClosedReasonsTentativeDate: e.target.value })}
          />
        </div>
      </div>
    </div>
  );
};
