import React from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { useForm } from '../../../context/FormContext';
import { RTEditor } from '../../ui/RTEditor';
import { InputField } from '../../ui/FormElements';

type CompRow = {
  component: string;
  pciLocal: string;
  pciFec: string;
  actualLocal: string;
  actualFec: string;
};

const emptyRow = (): CompRow => ({
  component: '',
  pciLocal: '',
  pciFec: '',
  actualLocal: '',
  actualFec: '',
});

function parseRaw(s: string): number {
  const n = parseFloat(s);
  return Number.isFinite(n) ? n : 0;
}

function totalRaw(local: string, fec: string): number {
  return parseRaw(local) + parseRaw(fec);
}

function formatMillionLabel(rawStr: string): string {
  const raw = parseRaw(rawStr);
  if (raw === 0) return '—';
  const m = raw / 1_000_000;
  const t = m.toFixed(6).replace(/\.?0+$/, '');
  return t === '' ? '0' : t;
}

function StackedRawMillionInput({
  raw,
  onChange,
}: {
  raw: string;
  onChange: (v: string) => void;
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
      <input
        type="number"
        step="any"
        className="input"
        style={{ background: '#fff', width: '100%', fontSize: '0.8125rem' }}
        placeholder="0"
        value={raw}
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
        value={formatMillionLabel(raw)}
      />
    </div>
  );
}

/** Total column: raw sum + million/point line (same stack as Local/FEC) */
function TotalRawOnly({ localRaw, fecRaw }: { localRaw: string; fecRaw: string }) {
  const rawTot = totalRaw(localRaw, fecRaw);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
      <input
        type="text"
        readOnly
        className="input"
        style={{
          background: 'hsl(var(--bg-main))',
          width: '100%',
          fontSize: '0.8125rem',
          fontWeight: 600,
          cursor: 'default',
        }}
        value={rawTot === 0 ? '—' : String(rawTot)}
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
        value={formatMillionLabel(String(rawTot))}
      />
    </div>
  );
}

const addRowButtonStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.4rem',
  color: 'hsl(var(--success))',
  background: '#fff',
  border: '1px solid hsl(var(--border))',
};

const sectionLabelStyle: React.CSSProperties = {
  fontSize: '0.7rem',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.04em',
  color: 'hsl(var(--text-muted))',
  margin: '1.25rem 0 0.75rem',
};

const totalsCardStyle: React.CSSProperties = {
  background: '#fff',
  border: '1px solid hsl(var(--border))',
  borderLeft: '4px solid hsl(var(--accent))',
  boxShadow: '0 1px 3px hsl(var(--text-main) / 0.08)',
};

export const Section12_RecurringCostAfterCompletion: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.pc4.s12;

  const handleUpdate = (updates: Record<string, unknown>) => {
    updateSection('pc4', { s12: { ...data, ...updates } });
  };

  const rows = (
    Array.isArray(data.recurringComponentRows) && data.recurringComponentRows.length > 0
      ? (data.recurringComponentRows as CompRow[])
      : [emptyRow()]
  );

  const setRows = (next: CompRow[]) => handleUpdate({ recurringComponentRows: next });

  const addRow = () => setRows([...rows, emptyRow()]);
  const removeRow = (i: number) => {
    if (rows.length <= 1) return;
    setRows(rows.filter((_: CompRow, idx: number) => idx !== i));
  };

  const patchRow = (i: number, patch: Partial<CompRow>) => {
    const next = [...rows];
    next[i] = { ...emptyRow(), ...next[i], ...patch };
    setRows(next);
  };

  const sumPciL = rows.reduce((a, r) => a + parseRaw(r.pciLocal), 0);
  const sumPciF = rows.reduce((a, r) => a + parseRaw(r.pciFec), 0);
  const sumPciT = sumPciL + sumPciF;
  const sumActL = rows.reduce((a, r) => a + parseRaw(r.actualLocal), 0);
  const sumActF = rows.reduce((a, r) => a + parseRaw(r.actualFec), 0);
  const sumActT = sumActL + sumActF;

  const fmtOneLine = (n: number) => (n === 0 ? '—' : String(n));

  const html = typeof data.managementManpowerHtml === 'string' ? data.managementManpowerHtml : '';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
      >
        <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'hsl(var(--text-muted))' }}>
          (Rs. Million)
        </span>
      </div>

      <div className="card">
        <RTEditor
          label="[PC-IV-12.1] Management structure manpower requirements information"
          value={html}
          onChange={(v) => handleUpdate({ managementManpowerHtml: v })}
        />
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
            Recurring cost after completion (components)
          </h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'hsl(var(--text-muted))' }}>
              (Rs. Million)
            </span>
            <button type="button" className="btn btn-secondary" title="Add row" onClick={addRow} style={addRowButtonStyle}>
              <Plus size={16} />
              Add row
            </button>
          </div>
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

              <InputField
                label="[PC-IV-12.2] Recurring Component"
                placeholder="e.g. A05270"
                value={row.component}
                onChange={(e) => patchRow(idx, { component: e.target.value })}
              />

              <p style={{ ...sectionLabelStyle, marginTop: '1.25rem' }}>PC-I estimates</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                <div className="input-group">
                  <label className="label">[PC-IV-12.3] Local</label>
                  <StackedRawMillionInput raw={row.pciLocal} onChange={(v) => patchRow(idx, { pciLocal: v })} />
                </div>
                <div className="input-group">
                  <label className="label">[PC-IV-12.4] FEC</label>
                  <StackedRawMillionInput raw={row.pciFec} onChange={(v) => patchRow(idx, { pciFec: v })} />
                </div>
                <div className="input-group">
                  <label className="label">Total</label>
                  <TotalRawOnly localRaw={row.pciLocal} fecRaw={row.pciFec} />
                </div>
              </div>

              <p style={sectionLabelStyle}>Actual expenditure</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                <div className="input-group">
                  <label className="label">[PC-IV-12.5] Local</label>
                  <StackedRawMillionInput raw={row.actualLocal} onChange={(v) => patchRow(idx, { actualLocal: v })} />
                </div>
                <div className="input-group">
                  <label className="label">[PC-IV-12.6] FEC</label>
                  <StackedRawMillionInput raw={row.actualFec} onChange={(v) => patchRow(idx, { actualFec: v })} />
                </div>
                <div className="input-group">
                  <label className="label">Total</label>
                  <TotalRawOnly localRaw={row.actualLocal} fecRaw={row.actualFec} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="card" style={totalsCardStyle}>
        <p
          style={{
            fontSize: '0.9375rem',
            fontWeight: 700,
            margin: '0 0 1rem',
            color: 'hsl(var(--text-main))',
            paddingBottom: '0.75rem',
            borderBottom: '1px solid hsl(var(--border))',
          }}
        >
          Total
        </p>
        <p style={{ ...sectionLabelStyle, margin: '0 0 0.75rem' }}>PC-I estimates</p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '0.75rem',
            marginBottom: '1rem',
            fontSize: '0.875rem',
          }}
        >
          <div>
            <div
              style={{
                fontSize: '0.65rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                color: 'hsl(var(--text-muted))',
                marginBottom: '0.35rem',
              }}
            >
              Local
            </div>
            <div style={{ fontWeight: 600 }}>{fmtOneLine(sumPciL)}</div>
          </div>
          <div>
            <div
              style={{
                fontSize: '0.65rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                color: 'hsl(var(--text-muted))',
                marginBottom: '0.35rem',
              }}
            >
              FEC
            </div>
            <div style={{ fontWeight: 600 }}>{fmtOneLine(sumPciF)}</div>
          </div>
          <div>
            <div
              style={{
                fontSize: '0.65rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                color: 'hsl(var(--text-muted))',
                marginBottom: '0.35rem',
              }}
            >
              Total
            </div>
            <div style={{ fontWeight: 600 }}>{fmtOneLine(sumPciT)}</div>
          </div>
        </div>
        <p style={{ ...sectionLabelStyle, margin: '0 0 0.75rem' }}>Actual expenditure</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', fontSize: '0.875rem' }}>
          <div>
            <div
              style={{
                fontSize: '0.65rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                color: 'hsl(var(--text-muted))',
                marginBottom: '0.35rem',
              }}
            >
              Local
            </div>
            <div style={{ fontWeight: 600 }}>{fmtOneLine(sumActL)}</div>
          </div>
          <div>
            <div
              style={{
                fontSize: '0.65rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                color: 'hsl(var(--text-muted))',
                marginBottom: '0.35rem',
              }}
            >
              FEC
            </div>
            <div style={{ fontWeight: 600 }}>{fmtOneLine(sumActF)}</div>
          </div>
          <div>
            <div
              style={{
                fontSize: '0.65rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                color: 'hsl(var(--text-muted))',
                marginBottom: '0.35rem',
              }}
            >
              Total
            </div>
            <div style={{ fontWeight: 600 }}>{fmtOneLine(sumActT)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
