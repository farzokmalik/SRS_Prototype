import React from 'react';
import { useForm } from '../../../../context/FormContext';
import { InputField } from '../../../ui/FormElements';
import { Plus, Trash2 } from 'lucide-react';

const COLUMNS = [
  { code: 'PC-III(a)-3.1', label: 'Item Description' },
  { code: 'PC-III(a)-3.2', label: 'Unit' },
  { code: 'PC-III(a)-3.3', label: 'CY Target' },
  { code: 'PC-III(a)-3.4', label: 'Q1' },
  { code: 'PC-III(a)-3.5', label: 'Q2' },
  { code: 'PC-III(a)-3.6', label: 'Q3' },
  { code: 'PC-III(a)-3.7', label: 'Q4' },
];

const GRID = 'minmax(220px, 2.5fr) 90px 110px 76px 76px 76px 76px 44px';

export const Section6_QuarterlyWorkPlan: React.FC = () => {
  const { formData, updateSection } = useForm();
  const list = formData.pc3a?.s6?.quarterlyWorkPlan || [];

  const addRow = () => {
    const newList = [...list, { description: '', unit: '', target: '', q1: '', q2: '', q3: '', q4: '' }];
    updateSection('pc3a', { s6: { quarterlyWorkPlan: newList } });
  };

  const removeRow = (idx: number) => {
    const newList = list.filter((_: any, i: number) => i !== idx);
    updateSection('pc3a', { s6: { quarterlyWorkPlan: newList } });
  };

  const updateRow = (idx: number, field: string, val: string) => {
    const newList = [...list];
    newList[idx] = { ...newList[idx], [field]: val };
    updateSection('pc3a', { s6: { quarterlyWorkPlan: newList } });
  };

  return (
    <div className="space-y-6">
      <div className="card shadow-sm">
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1.5rem', borderBottom: '1px solid hsl(var(--border))', paddingBottom: '1rem' }}>
          <button type="button" onClick={addRow} className="btn btn-secondary btn-sm shadow-sm" style={{ padding: '0.6rem 1.25rem', borderRadius: 'var(--radius-lg)' }}>
            <Plus size={16} /> Add Quarterly Plan Item
          </button>
        </div>

        <div className="card" style={{ background: 'hsl(var(--bg-main) / 0.1)', borderColor: 'hsl(var(--border) / 0.6)', overflowX: 'auto' }}>
          {/* Header */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: GRID,
            gap: '0.75rem',
            padding: '0.85rem 1rem',
            borderBottom: '2px solid hsl(var(--border))',
            background: 'hsl(var(--bg-main) / 0.35)',
            minWidth: '920px',
            alignItems: 'end',
          }}>
            {COLUMNS.map(({ code, label }) => (
              <div key={code} style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                <span style={{
                  fontSize: '0.58rem',
                  fontWeight: 700,
                  color: 'hsl(var(--primary))',
                  letterSpacing: '0.02em',
                  whiteSpace: 'nowrap',
                }}>[{code}]</span>
                <span style={{
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  color: 'hsl(var(--text-muted))',
                }}>{label}</span>
              </div>
            ))}
            <div />
          </div>

          {/* Rows */}
          <div className="divide-y divide-border" style={{ minWidth: '920px' }}>
            {list.length === 0 ? (
              <div style={{ padding: '3rem', textAlign: 'center', color: 'hsl(var(--text-muted))' }}>
                No records added.
              </div>
            ) : (
              list.map((item: any, idx: number) => (
                <div key={idx} style={{ display: 'grid', gridTemplateColumns: GRID, gap: '0.75rem', padding: '0.75rem 1rem', alignItems: 'center' }}>
                  <InputField label="" placeholder="e.g. Earth Work" value={item.description} onChange={(e: any) => updateRow(idx, 'description', e.target.value)} />
                  <InputField label="" placeholder="No." value={item.unit} onChange={(e: any) => updateRow(idx, 'unit', e.target.value)} />
                  <InputField label="" placeholder="0" type="number" value={item.target} onChange={(e: any) => updateRow(idx, 'target', e.target.value)} />
                  <InputField label="" placeholder="0" type="number" value={item.q1} onChange={(e: any) => updateRow(idx, 'q1', e.target.value)} />
                  <InputField label="" placeholder="0" type="number" value={item.q2} onChange={(e: any) => updateRow(idx, 'q2', e.target.value)} />
                  <InputField label="" placeholder="0" type="number" value={item.q3} onChange={(e: any) => updateRow(idx, 'q3', e.target.value)} />
                  <InputField label="" placeholder="0" type="number" value={item.q4} onChange={(e: any) => updateRow(idx, 'q4', e.target.value)} />
                  <button
                    type="button"
                    onClick={() => removeRow(idx)}
                    className="btn btn-secondary btn-sm"
                    style={{ background: 'none', border: 'none', color: 'hsl(var(--error))', cursor: 'pointer', padding: '0.5rem' }}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
