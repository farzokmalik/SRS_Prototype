import React from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { useForm } from '../../../context/FormContext';

type FinancingRow = {
  source: string;
  local: string;
  foreign: string;
};

const emptyRow = (): FinancingRow => ({ source: '', local: '', foreign: '' });

const SOURCE_OPTIONS = [
  { value: 'Federal Share', label: 'Federal Share' },
  { value: 'Provincial Share', label: 'Provincial Share' },
  { value: 'Donors / Others', label: 'Donors / Others' },
  { value: 'Beneficiary Contribution', label: 'Beneficiary Contribution' },
  { value: 'Bank Loan', label: 'Bank Loan' },
  { value: 'Other', label: 'Other' },
];

function parseNum(s: string): number {
  const n = parseFloat(s);
  return Number.isFinite(n) ? n : 0;
}

function rowSumRupee(r: FinancingRow): number {
  return parseNum(r.local) + parseNum(r.foreign);
}

function formatMillionsFromRupee(rupee: number): string {
  if (rupee === 0) return '—';
  return (rupee / 1_000_000).toFixed(3);
}

function rowTotalRupeeDisplay(r: FinancingRow): string {
  const t = rowSumRupee(r);
  if (t === 0) return '—';
  return t.toLocaleString(undefined, { maximumFractionDigits: 0 });
}

export const Section7_FinancingOfProject: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.pc4.s7;

  const handleUpdate = (updates: Record<string, unknown>) => {
    updateSection('pc4', { s7: { ...data, ...updates } });
  };

  const rows = (
    Array.isArray(data.financingRows) && data.financingRows.length > 0
      ? data.financingRows
      : [emptyRow()]
  ) as FinancingRow[];

  const setRows = (next: FinancingRow[]) => handleUpdate({ financingRows: next });

  const addRow = () => setRows([...rows, emptyRow()]);
  const removeRow = (i: number) => {
    if (rows.length <= 1) return;
    setRows(rows.filter((_: FinancingRow, idx: number) => idx !== i));
  };

  const patchRow = (i: number, patch: Partial<FinancingRow>) => {
    const next = [...rows];
    next[i] = { ...emptyRow(), ...next[i], ...patch };
    setRows(next);
  };

  const sumLocal = rows.reduce((a, r) => a + parseNum(r.local), 0);
  const sumForeign = rows.reduce((a, r) => a + parseNum(r.foreign), 0);
  const sumTotal = sumLocal + sumForeign;

  const cellStackStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.35rem',
  };

  const millionsBoxStyle: React.CSSProperties = {
    background: 'hsl(var(--bg-main))',
    fontWeight: 600,
    cursor: 'default',
    fontSize: '0.875rem',
    color: 'hsl(var(--text-muted))',
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
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
        <div className="table-responsive" style={{ overflowX: 'auto' }}>
          <table
            className="table"
            style={{
              borderCollapse: 'separate',
              borderSpacing: '0.4rem 0.4rem',
              marginTop: '-0.4rem',
              marginLeft: '-0.4rem',
              width: 'calc(100% + 0.4rem)',
              minWidth: '560px',
            }}
          >
            <thead>
              <tr>
                <th
                  style={{
                    width: '28%',
                    background: 'transparent',
                    border: 'none',
                    color: 'hsl(var(--text-muted))',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    textAlign: 'left',
                    paddingBottom: '0.5rem',
                  }}
                >
                  [PC-IV-7.1] Source of Financing
                </th>
                <th
                  style={{
                    width: '18%',
                    background: 'transparent',
                    border: 'none',
                    color: 'hsl(var(--text-muted))',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    textAlign: 'left',
                    paddingBottom: '0.5rem',
                  }}
                >
                  [PC-IV-7.2] Local
                </th>
                <th
                  style={{
                    width: '18%',
                    background: 'transparent',
                    border: 'none',
                    color: 'hsl(var(--text-muted))',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    textAlign: 'left',
                    paddingBottom: '0.5rem',
                  }}
                >
                  [PC-IV-7.3] Foreign
                </th>
                <th
                  style={{
                    width: '18%',
                    background: 'transparent',
                    border: 'none',
                    color: 'hsl(var(--text-muted))',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    textAlign: 'left',
                    paddingBottom: '0.5rem',
                  }}
                >
                  [PC-IV-7.4] Total
                </th>
                <th
                  style={{
                    width: '10%',
                    background: 'transparent',
                    border: 'none',
                    color: 'hsl(var(--text-muted))',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    textAlign: 'left',
                    paddingBottom: '0.5rem',
                  }}
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, idx) => (
                <tr key={idx}>
                  <td style={{ padding: '0 0.25rem 0 0', verticalAlign: 'top' }}>
                    <select
                      className="select"
                      style={{
                        width: '100%',
                        minHeight: '42px',
                        backgroundColor: '#fff',
                      }}
                      value={row.source}
                      onChange={(e) => patchRow(idx, { source: e.target.value })}
                    >
                      <option value="">Select source</option>
                      {SOURCE_OPTIONS.map((o) => (
                        <option key={o.value} value={o.value}>
                          {o.label}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td style={{ padding: '0 0.25rem', verticalAlign: 'top' }}>
                    <div style={cellStackStyle}>
                      <input
                        type="number"
                        step="any"
                        className="input"
                        style={{ background: '#fff' }}
                        placeholder="0"
                        value={row.local}
                        onChange={(e) => patchRow(idx, { local: e.target.value })}
                      />
                      <input
                        type="text"
                        readOnly
                        className="input"
                        style={millionsBoxStyle}
                        value={formatMillionsFromRupee(parseNum(row.local))}
                        aria-label="Local (millions)"
                      />
                    </div>
                  </td>
                  <td style={{ padding: '0 0.25rem', verticalAlign: 'top' }}>
                    <div style={cellStackStyle}>
                      <input
                        type="number"
                        step="any"
                        className="input"
                        style={{ background: '#fff' }}
                        placeholder="0"
                        value={row.foreign}
                        onChange={(e) => patchRow(idx, { foreign: e.target.value })}
                      />
                      <input
                        type="text"
                        readOnly
                        className="input"
                        style={millionsBoxStyle}
                        value={formatMillionsFromRupee(parseNum(row.foreign))}
                        aria-label="Foreign (millions)"
                      />
                    </div>
                  </td>
                  <td style={{ padding: '0 0.25rem', verticalAlign: 'top' }}>
                    <div style={cellStackStyle}>
                      <input
                        type="text"
                        readOnly
                        className="input"
                        style={{
                          background: 'hsl(var(--bg-main))',
                          fontWeight: 600,
                          cursor: 'default',
                        }}
                        value={rowTotalRupeeDisplay(row)}
                        aria-label="Total (Rs.)"
                      />
                      <input
                        type="text"
                        readOnly
                        className="input"
                        style={millionsBoxStyle}
                        value={formatMillionsFromRupee(rowSumRupee(row))}
                        aria-label="Total (millions)"
                      />
                    </div>
                  </td>
                  <td style={{ textAlign: 'left', verticalAlign: 'top' }}>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        gap: '0.5rem',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                      }}
                    >
                      <button
                        type="button"
                        className="btn btn-secondary"
                        title="Add row"
                        onClick={addRow}
                        style={{
                          padding: '0.35rem',
                          width: '36px',
                          height: '36px',
                          color: 'hsl(var(--success))',
                        }}
                      >
                        <Plus size={16} />
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        title="Remove row"
                        onClick={() => removeRow(idx)}
                        style={{
                          padding: '0.35rem',
                          width: '36px',
                          height: '36px',
                          color: 'hsl(var(--error))',
                        }}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              <tr>
                <td
                  style={{
                    fontWeight: 700,
                    color: 'hsl(var(--accent))',
                    fontSize: '0.875rem',
                    paddingTop: '0.5rem',
                    verticalAlign: 'middle',
                  }}
                >
                  Total
                </td>
                <td style={{ fontWeight: 700, fontSize: '0.875rem', paddingTop: '0.5rem', verticalAlign: 'middle' }}>
                  {sumLocal === 0 ? '—' : sumLocal.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </td>
                <td style={{ fontWeight: 700, fontSize: '0.875rem', paddingTop: '0.5rem', verticalAlign: 'middle' }}>
                  {sumForeign === 0 ? '—' : sumForeign.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </td>
                <td style={{ fontWeight: 700, fontSize: '0.875rem', paddingTop: '0.5rem', verticalAlign: 'middle' }}>
                  {sumTotal === 0 ? '—' : sumTotal.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </td>
                <td />
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
