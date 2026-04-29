import React from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { useForm } from '../../../context/FormContext';
import { FileUpload } from '../../ui/FormElements';

type ExpRow = {
  totalRupee: string;
  totalMillionDisplay: string;
  localCapital: string;
  localRevenue: string;
  foreignCapital: string;
  foreignRevenue: string;
  lineTotal: string;
};

type PciApproved = {
  costKind: string;
  localCapital: string;
  localRevenue: string;
  foreignCapital: string;
  foreignRevenue: string;
};

type CostBlock = {
  pciApproved: PciApproved;
  actualExpenditure: ExpRow;
};

const COST_KIND_OPTIONS = [
  { value: 'original', label: 'Original' },
  { value: 'revised', label: 'Revised' },
  { value: 'actual', label: 'Actual' },
];

const emptyRow = (): ExpRow => ({
  totalRupee: '',
  totalMillionDisplay: '',
  localCapital: '',
  localRevenue: '',
  foreignCapital: '',
  foreignRevenue: '',
  lineTotal: '',
});

const emptyPciApproved = (): PciApproved => ({
  costKind: 'original',
  localCapital: '',
  localRevenue: '',
  foreignCapital: '',
  foreignRevenue: '',
});

const emptyCostBlock = (): CostBlock => ({
  pciApproved: emptyPciApproved(),
  actualExpenditure: emptyRow(),
});

function parseRaw(s: string): number {
  const n = parseFloat(s);
  return Number.isFinite(n) ? n : 0;
}

/** Million line under inputs; shows 0 when amount is zero (PC-IV section 6 pattern). */
function formatMillionLabelSection6(rawStr: string): string {
  const raw = parseRaw(rawStr);
  if (raw === 0) return '0';
  const m = raw / 1_000_000;
  const t = m.toFixed(6).replace(/\.?0+$/, '');
  return t === '' ? '0' : t;
}

function lineSumRaw(row: Pick<ExpRow, 'localCapital' | 'localRevenue' | 'foreignCapital' | 'foreignRevenue'>): number {
  return (
    parseRaw(row.localCapital) +
    parseRaw(row.localRevenue) +
    parseRaw(row.foreignCapital) +
    parseRaw(row.foreignRevenue)
  );
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
        value={formatMillionLabelSection6(raw)}
      />
    </div>
  );
}

function ReadOnlyStackedTotal({ rawStr }: { rawStr: string }) {
  const raw = parseRaw(rawStr);
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
        value={raw === 0 ? '—' : String(raw)}
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
        value={formatMillionLabelSection6(rawStr)}
      />
    </div>
  );
}

const normalizeExpenditureRow = (r: Record<string, unknown>): ExpRow => {
  const base = emptyRow();
  return {
    ...base,
    totalRupee: String(r.totalRupee ?? ''),
    totalMillionDisplay: String(r.totalMillionDisplay ?? ''),
    localCapital: String(r.localCapital ?? ''),
    localRevenue: String(r.localRevenue ?? ''),
    foreignCapital: String(r.foreignCapital ?? ''),
    foreignRevenue: String(r.foreignRevenue ?? ''),
    lineTotal: String(r.lineTotal ?? ''),
  };
};

const normalizePciApproved = (raw: unknown): PciApproved => {
  const r = (raw as Record<string, unknown>) || {};
  return {
    ...emptyPciApproved(),
    costKind: typeof r.costKind === 'string' && r.costKind ? r.costKind : 'original',
    localCapital: String(r.localCapital ?? ''),
    localRevenue: String(r.localRevenue ?? ''),
    foreignCapital: String(r.foreignCapital ?? ''),
    foreignRevenue: String(r.foreignRevenue ?? ''),
  };
};

function normalizeCostBlocks(data: Record<string, unknown>): CostBlock[] {
  const modern = data.costRows as unknown[] | undefined;
  if (Array.isArray(modern) && modern.length > 0) {
    return modern.map((item: unknown) => {
      const r = item as Record<string, unknown>;
      return {
        pciApproved: normalizePciApproved(r.pciApproved),
        actualExpenditure: normalizeExpenditureRow((r.actualExpenditure ?? r) as Record<string, unknown>),
      };
    });
  }

  const legacyPci = normalizePciApproved(data.pciApproved);
  const rawActual = data.actualExpenditureRows;
  const actualList = Array.isArray(rawActual) && rawActual.length > 0 ? (rawActual as unknown[]) : [emptyRow()];
  return actualList.map((a, i) => ({
    pciApproved: i === 0 ? legacyPci : emptyPciApproved(),
    actualExpenditure: normalizeExpenditureRow(a as Record<string, unknown>),
  }));
}

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

const sectionLabelStyle: React.CSSProperties = {
  fontSize: '0.7rem',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.04em',
  color: 'hsl(var(--text-muted))',
  margin: '1.25rem 0 0.75rem',
};

export const Section6_TotalCost: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.pc4.s6 as Record<string, unknown>;

  const handleUpdate = (updates: Record<string, unknown>) => {
    updateSection('pc4', { s6: { ...data, ...updates } });
  };

  const blocks = normalizeCostBlocks(data);

  const setBlocks = (next: CostBlock[]) => {
    const nextS6: Record<string, unknown> = { ...data, costRows: next };
    delete nextS6.pciApproved;
    delete nextS6.actualExpenditureRows;
    updateSection('pc4', { s6: nextS6 });
  };

  const annexures = normalizeFileList(data.annexures);

  const addRow = () => setBlocks([...blocks, emptyCostBlock()]);
  const removeRow = (i: number) => {
    if (blocks.length <= 1) return;
    setBlocks(blocks.filter((_: CostBlock, idx: number) => idx !== i));
  };

  const patchPci = (i: number, patch: Partial<PciApproved>) => {
    const next = [...blocks];
    next[i] = {
      ...emptyCostBlock(),
      ...next[i],
      pciApproved: { ...emptyPciApproved(), ...next[i].pciApproved, ...patch },
    };
    setBlocks(next);
  };

  const patchActual = (i: number, patch: Partial<ExpRow>) => {
    const next = [...blocks];
    const merged = { ...emptyRow(), ...next[i].actualExpenditure, ...patch };
    const sum = lineSumRaw(merged);
    merged.lineTotal = sum === 0 ? '' : String(sum);
    next[i] = { ...next[i], actualExpenditure: merged };
    setBlocks(next);
  };

  const blockDividerStyle = (idx: number): React.CSSProperties =>
    idx > 0
      ? {
          marginTop: '1.5rem',
          paddingTop: '1.5rem',
          borderTop: '1px solid hsl(var(--border))',
        }
      : {};

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
          PC-I cost (approved) and actual expenditure
        </h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'hsl(var(--text-muted))' }}>
            (Rs. Million)
          </span>
          <button type="button" className="btn btn-secondary" title="Add block (PC-I + actual)" onClick={addRow} style={addRowButtonStyle}>
            <Plus size={16} />
            Add row
          </button>
        </div>
      </div>

      <div className="card">
        {blocks.map((block, idx) => {
          const pci = block.pciApproved;
          const pciLineRaw = lineSumRaw(pci);
          const pciLineStr = pciLineRaw === 0 ? '' : String(pciLineRaw);
          const row = block.actualExpenditure;
          const rowLineRaw = lineSumRaw(row);
          const rowLineStr = rowLineRaw === 0 ? '' : String(rowLineRaw);

          return (
            <div key={idx} style={blockDividerStyle(idx)}>
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
                {blocks.length > 1 && (
                  <button
                    type="button"
                    className="btn btn-secondary"
                    title="Remove this block"
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

              <p style={{ ...sectionLabelStyle, marginTop: 0 }}>PC-I cost (approved)</p>
              <div className="input-group" style={{ marginBottom: '1.25rem' }}>
                <label className="label" style={{ fontWeight: 600, fontSize: '0.8125rem' }}>[PC-IV-6.1] Cost Kind</label>
                <select
                  className="select"
                  style={{
                    width: '100%',
                    maxWidth: '320px',
                    minHeight: '40px',
                    backgroundColor: '#fff',
                    borderRadius: '8px',
                  }}
                  value={pci.costKind}
                  onChange={(e) => patchPci(idx, { costKind: e.target.value })}
                >
                  {COST_KIND_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="table-responsive" style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
                <table className="table" style={{ borderCollapse: 'separate', borderSpacing: '0.4rem 0.4rem', width: '100%', minWidth: '800px', marginLeft: '-0.4rem' }}>
                  <thead>
                    <tr>
                      <th style={{ background: 'transparent', border: 'none', color: 'hsl(var(--text-muted))', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', textAlign: 'left', paddingBottom: '0.5rem', width: '20%' }}>[PC-IV-6.2] Local — capital</th>
                      <th style={{ background: 'transparent', border: 'none', color: 'hsl(var(--text-muted))', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', textAlign: 'left', paddingBottom: '0.5rem', width: '20%' }}>[PC-IV-6.3] Local — revenue</th>
                      <th style={{ background: 'transparent', border: 'none', color: 'hsl(var(--text-muted))', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', textAlign: 'left', paddingBottom: '0.5rem', width: '20%' }}>[PC-IV-6.4] Foreign — capital</th>
                      <th style={{ background: 'transparent', border: 'none', color: 'hsl(var(--text-muted))', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', textAlign: 'left', paddingBottom: '0.5rem', width: '20%' }}>[PC-IV-6.5] Foreign — revenue</th>
                      <th style={{ background: 'transparent', border: 'none', color: 'hsl(var(--text-muted))', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', textAlign: 'left', paddingBottom: '0.5rem', width: '20%' }}>[PC-IV-6.6] Total Approved Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><StackedRawMillionInput raw={pci.localCapital} onChange={(v) => patchPci(idx, { localCapital: v })} /></td>
                      <td><StackedRawMillionInput raw={pci.localRevenue} onChange={(v) => patchPci(idx, { localRevenue: v })} /></td>
                      <td><StackedRawMillionInput raw={pci.foreignCapital} onChange={(v) => patchPci(idx, { foreignCapital: v })} /></td>
                      <td><StackedRawMillionInput raw={pci.foreignRevenue} onChange={(v) => patchPci(idx, { foreignRevenue: v })} /></td>
                      <td><ReadOnlyStackedTotal rawStr={pciLineStr} /></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p style={{ ...sectionLabelStyle, marginTop: '1.5rem' }}>Actual expenditure</p>
              <div className="table-responsive" style={{ overflowX: 'auto' }}>
                <table className="table" style={{ borderCollapse: 'separate', borderSpacing: '0.4rem 0.4rem', width: '100%', minWidth: '960px', marginLeft: '-0.4rem' }}>
                  <thead>
                    <tr>
                      <th style={{ background: 'transparent', border: 'none', color: 'hsl(var(--text-muted))', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', textAlign: 'left', paddingBottom: '0.5rem', width: '16.6%' }}>[PC-IV-6.7] Total (Rs.)</th>
                      <th style={{ background: 'transparent', border: 'none', color: 'hsl(var(--text-muted))', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', textAlign: 'left', paddingBottom: '0.5rem', width: '16.6%' }}>[PC-IV-6.8] Local — capital</th>
                      <th style={{ background: 'transparent', border: 'none', color: 'hsl(var(--text-muted))', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', textAlign: 'left', paddingBottom: '0.5rem', width: '16.6%' }}>[PC-IV-6.9] Local — revenue</th>
                      <th style={{ background: 'transparent', border: 'none', color: 'hsl(var(--text-muted))', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', textAlign: 'left', paddingBottom: '0.5rem', width: '16.6%' }}>[PC-IV-6.10] Foreign — capital</th>
                      <th style={{ background: 'transparent', border: 'none', color: 'hsl(var(--text-muted))', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', textAlign: 'left', paddingBottom: '0.5rem', width: '16.6%' }}>[PC-IV-6.11] Foreign — revenue</th>
                      <th style={{ background: 'transparent', border: 'none', color: 'hsl(var(--text-muted))', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', textAlign: 'left', paddingBottom: '0.5rem', width: '16.6%' }}>[PC-IV-6.12] Total Actual Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><StackedRawMillionInput raw={row.totalRupee} onChange={(v) => patchActual(idx, { totalRupee: v })} /></td>
                      <td><StackedRawMillionInput raw={row.localCapital} onChange={(v) => patchActual(idx, { localCapital: v })} /></td>
                      <td><StackedRawMillionInput raw={row.localRevenue} onChange={(v) => patchActual(idx, { localRevenue: v })} /></td>
                      <td><StackedRawMillionInput raw={row.foreignCapital} onChange={(v) => patchActual(idx, { foreignCapital: v })} /></td>
                      <td><StackedRawMillionInput raw={row.foreignRevenue} onChange={(v) => patchActual(idx, { foreignRevenue: v })} /></td>
                      <td><ReadOnlyStackedTotal rawStr={rowLineStr} /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          );
        })}
      </div>

      <div className="card">
        <FileUpload
          label="[PC-IV-6.13] Annexures"
          files={annexures}
          onUpload={(files) => handleUpdate({ annexures: files })}
          onRemove={(i) => handleUpdate({ annexures: annexures.filter((_: unknown, j: number) => j !== i) })}
          description="Add annexures"
        />
      </div>
    </div>
  );
};
