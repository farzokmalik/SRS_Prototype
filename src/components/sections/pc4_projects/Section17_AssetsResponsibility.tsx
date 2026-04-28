import React from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { useForm } from '../../../context/FormContext';
import { InputField } from '../../ui/FormElements';

const AGENCY_OPTIONS = [
  { value: '', label: 'Choose…' },
  { value: 'Punjab Information Technology Board', label: 'Punjab Information Technology Board' },
  { value: 'Zakat and Ushr Punjab', label: 'Zakat and Ushr' },
  { value: 'School Education Department', label: 'School Education Department' },
  { value: 'Health Department', label: 'Health Department' },
  { value: 'Planning & Development Board', label: 'Planning & Development Board' },
  { value: 'Agriculture Department', label: 'Agriculture Department' },
  { value: 'Irrigation Department', label: 'Irrigation Department' },
  { value: 'LG&CD Department', label: 'LG&CD Department' },
  { value: 'Livestock & Dairy Development', label: 'Livestock & Dairy Development' },
];

type AssetRow = {
  agency: string;
  item: string;
  description: string;
  specification: string;
  location: string;
  unit: string;
  quantity: string;
  costRupee: string;
};

const emptyAssetRow = (): AssetRow => ({
  agency: '',
  item: '',
  description: '',
  specification: '',
  location: '',
  unit: '0',
  quantity: '',
  costRupee: '',
});

function parseRaw(s: string): number {
  const n = parseFloat(s);
  return Number.isFinite(n) ? n : 0;
}

function formatMillionLabel(rawStr: string): string {
  const raw = parseRaw(rawStr);
  if (raw === 0) return '—';
  const m = raw / 1_000_000;
  const t = m.toFixed(6).replace(/\.?0+$/, '');
  return t === '' ? '0' : t;
}

function lineTotalRupee(qty: string, cost: string): number {
  const q = parseRaw(qty);
  const c = parseRaw(cost);
  if (q === 0 || c === 0) return 0;
  const t = q * c;
  return Number.isFinite(t) ? t : 0;
}

function StackedCostInput({ raw, onChange }: { raw: string; onChange: (v: string) => void }) {
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

function StackedTotalDisplay({ qty, cost }: { qty: string; cost: string }) {
  const total = lineTotalRupee(qty, cost);
  const top = total === 0 ? '—' : String(total);
  const bottom = formatMillionLabel(String(total));
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

const addRowButtonStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.4rem',
  color: 'hsl(var(--success))',
  background: '#fff',
  border: '1px solid hsl(var(--border))',
};

function rowIsBlank(r: AssetRow): boolean {
  return (
    !r.agency &&
    !r.item &&
    !r.description &&
    !r.specification &&
    !r.location &&
    (r.unit === '0' || r.unit === '') &&
    !r.quantity &&
    !r.costRupee
  );
}

function normalizeAssetRows(pc4: Record<string, unknown>, s17: Record<string, unknown>): AssetRow[] {
  const rows = s17.assetRows as AssetRow[] | undefined;
  const s20 = pc4.s20 as { assets?: { name: string; type: string }[]; assetOwnershipAgency?: string } | undefined;

  if (Array.isArray(rows) && rows.length > 0) {
    const mapped = rows.map((r) => ({ ...emptyAssetRow(), ...r }));
    if (mapped.length === 1 && rowIsBlank(mapped[0]) && s20?.assets && s20.assets.length > 0) {
      return s20.assets.map((a) => ({
        ...emptyAssetRow(),
        item: a.name ?? '',
        description: a.type ?? '',
      }));
    }
    return mapped;
  }

  if (s20?.assets && s20.assets.length > 0) {
    return s20.assets.map((a) => ({
      ...emptyAssetRow(),
      item: a.name ?? '',
      description: a.type ?? '',
    }));
  }

  return [emptyAssetRow()];
}

export const Section17_AssetsResponsibility: React.FC = () => {
  const { formData, updateSection } = useForm();
  const pc4 = formData.pc4 as Record<string, unknown>;
  const s17 = (formData.pc4.s17 || {}) as Record<string, unknown>;

  const handleS17 = (updates: Record<string, unknown>) => {
    updateSection('pc4', { s17: { ...s17, ...updates } });
  };

  const rows = normalizeAssetRows(pc4, s17);

  const setRows = (next: AssetRow[]) => handleS17({ assetRows: next });

  const addRow = () => setRows([...rows, emptyAssetRow()]);

  const removeRow = (i: number) => {
    if (rows.length <= 1) return;
    setRows(rows.filter((_, idx) => idx !== i));
  };

  const patchRow = (i: number, patch: Partial<AssetRow>) => {
    const next = [...rows];
    next[i] = { ...emptyAssetRow(), ...next[i], ...patch };
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
            Responsibilities / ownership of assets
          </h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'hsl(var(--text-muted))' }}>(Rs.)</span>
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

              <div className="input-group" style={{ marginBottom: '1.25rem' }}>
                <label className="label">[PC-IV-17.1] Indicate agency</label>
                <select
                  className="select"
                  style={{ width: '100%', minHeight: '42px', background: '#fff' }}
                  value={row.agency}
                  onChange={(e) => patchRow(idx, { agency: e.target.value })}
                >
                  {AGENCY_OPTIONS.map((o) => (
                    <option key={o.value || 'empty'} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }}>
                <InputField
                  label="[PC-IV-17.2] Item"
                  placeholder="Item"
                  value={row.item}
                  onChange={(e) => patchRow(idx, { item: e.target.value })}
                />
                <InputField
                  label="[PC-IV-17.3] Description"
                  placeholder="Description"
                  value={row.description}
                  onChange={(e) => patchRow(idx, { description: e.target.value })}
                />
              </div>

              <div className="input-group" style={{ marginBottom: '1.25rem' }}>
                <label className="label">[PC-IV-17.4] Specification</label>
                <textarea
                  className="input"
                  rows={3}
                  value={row.specification}
                  onChange={(e) => patchRow(idx, { specification: e.target.value })}
                  style={{ width: '100%', minHeight: '3.5rem', resize: 'vertical', fontSize: '0.875rem', background: '#fff', paddingTop: '0.5rem' }}
                />
              </div>

              <div className="input-group" style={{ marginBottom: '1.25rem' }}>
                <label className="label">[PC-IV-17.5] Physical Location</label>
                <textarea
                  className="input"
                  rows={3}
                  value={row.location}
                  onChange={(e) => patchRow(idx, { location: e.target.value })}
                  style={{ width: '100%', minHeight: '3.5rem', resize: 'vertical', fontSize: '0.875rem', background: '#fff', paddingTop: '0.5rem' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }}>
                <InputField
                  label="[PC-IV-17.6] Unit"
                  placeholder="Unit"
                  value={row.unit}
                  onChange={(e) => patchRow(idx, { unit: e.target.value })}
                />
                <InputField
                  label="[PC-IV-17.7] Quantity"
                  type="number"
                  step="any"
                  placeholder="0"
                  value={row.quantity}
                  onChange={(e) => patchRow(idx, { quantity: e.target.value })}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                <div className="input-group">
                  <label className="label">[PC-IV-17.8] Cost (Rs.)</label>
                  <StackedCostInput raw={row.costRupee} onChange={(v) => patchRow(idx, { costRupee: v })} />
                </div>
                <div className="input-group">
                  <label className="label">[PC-IV-17.9] Total Value (Rs.)</label>
                  <StackedTotalDisplay qty={row.quantity} cost={row.costRupee} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
