import React from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { useForm } from '../../../context/FormContext';
import { InputField } from '../../ui/FormElements';

function parseRaw(s: string): number {
  const n = parseFloat(s);
  return Number.isFinite(n) ? n : 0;
}

function totalRaw(local: string, foreign: string): number {
  return parseRaw(local) + parseRaw(foreign);
}

/** Million / “point” line under raw Rs. (same as Section 11) */
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

function StackedTotalReadOnly({ localRaw, foreignRaw }: { localRaw: string; foreignRaw: string }) {
  const rawTot = totalRaw(localRaw, foreignRaw);
  const top = rawTot === 0 ? '—' : String(rawTot);
  const bottom = formatMillionLabel(rawTot === 0 ? '' : String(rawTot));
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
        value={top}
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
        value={bottom}
      />
    </div>
  );
}

type LF = { local: string; foreign: string };

type PhasingRow = {
  yearPhase: string;
  objectCode: string;
  pciPhasing: LF;
  adpAllocation: LF;
  pdReleases: LF;
  controllingReleases: LF;
  expenditure: LF;
  lapsableFunds: LF;
};

const emptyLF = (): LF => ({ local: '', foreign: '' });

const emptyRow = (): PhasingRow => ({
  yearPhase: '',
  objectCode: '',
  pciPhasing: emptyLF(),
  adpAllocation: emptyLF(),
  pdReleases: emptyLF(),
  controllingReleases: emptyLF(),
  expenditure: emptyLF(),
  lapsableFunds: emptyLF(),
});

function normalizeLF(raw: unknown): LF {
  if (!raw || typeof raw !== 'object') return emptyLF();
  const o = raw as Record<string, unknown>;
  return {
    local: typeof o.local === 'string' ? o.local : '',
    foreign: typeof o.foreign === 'string' ? o.foreign : '',
  };
}

function normalizePhasingRow(raw: unknown): PhasingRow {
  const base = emptyRow();
  if (!raw || typeof raw !== 'object') return base;
  const r = raw as Record<string, unknown>;
  return {
    yearPhase: typeof r.yearPhase === 'string' ? r.yearPhase : '',
    objectCode: typeof r.objectCode === 'string' ? r.objectCode : '',
    pciPhasing: normalizeLF(r.pciPhasing),
    adpAllocation: normalizeLF(r.adpAllocation),
    pdReleases: normalizeLF(r.pdReleases),
    controllingReleases: normalizeLF(r.controllingReleases),
    expenditure: normalizeLF(r.expenditure),
    lapsableFunds: normalizeLF(r.lapsableFunds),
  };
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

type LFKey = 'pciPhasing' | 'adpAllocation' | 'pdReleases' | 'controllingReleases' | 'expenditure' | 'lapsableFunds';

export const Section9_FinancialPhasing: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.pc4.s9;

  const handleUpdate = (updates: Record<string, unknown>) => {
    updateSection('pc4', { s9: { ...data, ...updates } });
  };

  const rawRows =
    Array.isArray(data.phasingRows) && data.phasingRows.length > 0 ? data.phasingRows : [emptyRow()];
  const rows = rawRows.map((r: unknown) => normalizePhasingRow(r));

  const setRows = (next: PhasingRow[]) => handleUpdate({ phasingRows: next });

  const addRow = () => setRows([...rows, emptyRow()]);
  const removeRow = (i: number) => {
    if (rows.length <= 1) return;
    setRows(rows.filter((_: PhasingRow, idx: number) => idx !== i));
  };

  const patchRow = (i: number, patch: Partial<PhasingRow>) => {
    const next = [...rows];
    next[i] = { ...emptyRow(), ...next[i], ...patch };
    setRows(next);
  };

  const patchLF = (i: number, key: LFKey, patch: Partial<LF>) => {
    const next = [...rows];
    const row = next[i];
    next[i] = { ...row, [key]: { ...row[key], ...patch } };
    setRows(next);
  };

  const sumLF = (key: LFKey) => {
    const sl = rows.reduce((a: number, r: PhasingRow) => a + parseRaw(r[key].local), 0);
    const sf = rows.reduce((a: number, r: PhasingRow) => a + parseRaw(r[key].foreign), 0);
    return { local: sl, foreign: sf, total: sl + sf };
  };

  const fmtRawLine = (n: number) => (n === 0 ? '—' : String(n));

  const lfGroups: { key: LFKey; title: string; localNo: string; foreignNo: string }[] = [
    { key: 'pciPhasing', title: 'PC-I Phasing', localNo: '9.3', foreignNo: '9.4' },
    { key: 'adpAllocation', title: 'ADP Allocation', localNo: '9.5', foreignNo: '9.6' },
    { key: 'pdReleases', title: 'P&D Releases', localNo: '9.7', foreignNo: '9.8' },
    { key: 'controllingReleases', title: 'Controlling Releases', localNo: '9.9', foreignNo: '9.10' },
    { key: 'expenditure', title: 'Expenditure', localNo: '9.11', foreignNo: '9.12' },
    { key: 'lapsableFunds', title: 'Lapsable Funds', localNo: '9.13', foreignNo: '9.14' },
  ];

  const renderLFBlock = (idx: number, key: LFKey, title: string, localNo: string, foreignNo: string) => {
    const lf = rows[idx][key];
    return (
      <div key={key}>
        <p
          style={{
            ...sectionLabelStyle,
            margin: key === 'pciPhasing' ? '0 0 0.75rem' : '1.25rem 0 0.75rem',
          }}
        >
          {title}
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
          <div className="input-group" style={{ marginBottom: 0 }}>
            <label className="label">{`[PC-IV-${localNo}] ${title} — Local`}</label>
            <StackedRawMillionInput raw={lf.local} onChange={(v) => patchLF(idx, key, { local: v })} />
          </div>
          <div className="input-group" style={{ marginBottom: 0 }}>
            <label className="label">{`[PC-IV-${foreignNo}] ${title} — Foreign`}</label>
            <StackedRawMillionInput raw={lf.foreign} onChange={(v) => patchLF(idx, key, { foreign: v })} />
          </div>
          <div className="input-group" style={{ marginBottom: 0 }}>
            <label className="label">Total</label>
            <StackedTotalReadOnly localRaw={lf.local} foreignRaw={lf.foreign} />
          </div>
        </div>
      </div>
    );
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
            Financial phasing & expenditure
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
          {rows.map((row: PhasingRow, idx: number) => (
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

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '0.5rem' }}>
                <InputField
                  label="[PC-IV-9.1] Year / Phase"
                  placeholder="e.g. 2024-25"
                  value={row.yearPhase}
                  onChange={(e) => patchRow(idx, { yearPhase: e.target.value })}
                />
                <InputField
                  label="[PC-IV-9.2] Object Code"
                  placeholder="e.g. To Others"
                  value={row.objectCode}
                  onChange={(e) => patchRow(idx, { objectCode: e.target.value })}
                />
              </div>

              {lfGroups.map(({ key, title, localNo, foreignNo }) => renderLFBlock(idx, key, title, localNo, foreignNo))}
            </div>
          ))}
        </div>
      </div>

      <div
        className="card"
        style={{
          background: '#fff',
          border: '1px solid hsl(var(--border))',
          borderLeft: '4px solid hsl(var(--accent))',
          boxShadow: '0 1px 3px hsl(var(--text-main) / 0.08)',
        }}
      >
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
          [PC-IV-9.15] Total
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr 1fr 1fr',
            gap: '0.75rem',
            alignItems: 'end',
            fontSize: '0.65rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            color: 'hsl(var(--text-muted))',
            marginBottom: '0.5rem',
          }}
        >
          <span />
          <span style={{ textAlign: 'right' }}>Local</span>
          <span style={{ textAlign: 'right' }}>Foreign</span>
          <span style={{ textAlign: 'right' }}>Total</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {lfGroups.map(({ key, title }) => {
            const s = sumLF(key);
            return (
              <div
                key={key}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1.2fr 1fr 1fr 1fr',
                  gap: '0.75rem',
                  alignItems: 'start',
                  fontSize: '0.875rem',
                }}
              >
                <span style={{ fontWeight: 600, color: 'hsl(var(--text-main))', paddingTop: '0.2rem' }}>{title}</span>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontWeight: 600 }}>{fmtRawLine(s.local)}</div>
                  <div style={{ fontSize: '0.75rem', color: 'hsl(var(--text-muted))', marginTop: '0.2rem' }}>
                    {formatMillionLabel(s.local === 0 ? '' : String(s.local))}
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontWeight: 600 }}>{fmtRawLine(s.foreign)}</div>
                  <div style={{ fontSize: '0.75rem', color: 'hsl(var(--text-muted))', marginTop: '0.2rem' }}>
                    {formatMillionLabel(s.foreign === 0 ? '' : String(s.foreign))}
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontWeight: 600 }}>{fmtRawLine(s.total)}</div>
                  <div style={{ fontSize: '0.75rem', color: 'hsl(var(--text-muted))', marginTop: '0.2rem' }}>
                    {formatMillionLabel(s.total === 0 ? '' : String(s.total))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
