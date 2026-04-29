import React from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { useForm } from '../../../context/FormContext';
import { FileUpload, InputField, SelectField } from '../../ui/FormElements';

const FINANCIAL_YEAR_OPTIONS = ['2020-2021', '2021-2022', '2022-2023', '2023-2024', '2024-2025', '2025-2026', '2026-2027'].map(
  (y) => ({ value: y, label: y }),
);

const PCI_FORM_OPTIONS = [
  { value: 'Original', label: 'Original' },
  { value: 'Revised', label: 'Revised' },
  { value: 'Supplementary', label: 'Supplementary' },
];

const FORUM_OPTIONS = [
  { value: 'DDSC', label: 'DDSC' },
  { value: 'DDWP', label: 'DDWP' },
  { value: 'CDWP', label: 'CDWP' },
  { value: 'ECNEC', label: 'ECNEC' },
  { value: 'PDWP', label: 'PDWP' },
  { value: 'Other', label: 'Other' },
];

const emptyApprovalRow = () => ({
  pcIForm: '',
  approvedDate: '',
  financialYear: '',
  gestationStart: '',
  gestationEnd: '',
  forum: '',
  projectStatus: '',
  totalCost: '',
  totalCostMillions: '',
});

type ApprovalRow = ReturnType<typeof emptyApprovalRow>;

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

export const Section4_DateOfApprovalForum: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.pc4.s4;

  const handleUpdate = (updates: Record<string, unknown>) => {
    updateSection('pc4', { s4: { ...data, ...updates } });
  };

  const rows = (
    data.approvalRows && data.approvalRows.length > 0 ? data.approvalRows : [emptyApprovalRow()]
  ) as ApprovalRow[];

  const annexures = normalizeFileList(data.annexures);

  const setRows = (next: ApprovalRow[]) => handleUpdate({ approvalRows: next });

  const addRow = () => setRows([...rows, emptyApprovalRow()]);
  const removeRow = (i: number) => {
    if (rows.length <= 1) return;
    setRows(rows.filter((_: unknown, idx: number) => idx !== i));
  };
  const patchRow = (i: number, patch: Partial<ApprovalRow>) => {
    const next = [...rows];
    next[i] = { ...emptyApprovalRow(), ...next[i], ...patch };
    setRows(next);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
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
            Date of approval & forum
          </h3>
          <button
            type="button"
            className="btn btn-secondary"
            title="Add row"
            onClick={addRow}
            style={addRowButtonStyle}
          >
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

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.25rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.25rem' }}>
                <SelectField
                  label="[PC-IV-4.1] PC-I"
                  value={row.pcIForm}
                  onChange={(e) => patchRow(idx, { pcIForm: e.target.value })}
                  options={PCI_FORM_OPTIONS}
                />
                <SelectField
                  label="[PC-IV-4.2] Approval Forum"
                  value={row.forum}
                  onChange={(e) => patchRow(idx, { forum: e.target.value })}
                  options={FORUM_OPTIONS}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.25rem' }}>
                <SelectField
                  label="[PC-IV-4.3] Financial year"
                  value={row.financialYear}
                  onChange={(e) => patchRow(idx, { financialYear: e.target.value })}
                  options={FINANCIAL_YEAR_OPTIONS}
                />
              </div>
            </div>

            <p
              style={{
                fontSize: '0.7rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                color: 'hsl(var(--text-muted))',
                margin: '1.25rem 0 0.75rem',
              }}
            >
              Gestation
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }}>
              <InputField
                label="[PC-IV-4.4] Gestation Start Date"
                type="date"
                value={row.gestationStart}
                onChange={(e) => patchRow(idx, { gestationStart: e.target.value })}
              />
              <InputField
                label="[PC-IV-4.5] Gestation End Date"
                type="date"
                value={row.gestationEnd}
                onChange={(e) => patchRow(idx, { gestationEnd: e.target.value })}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.25rem' }}>
               <InputField
                  label="[PC-IV-4.6] Date of Approval"
                  type="date"
                  value={row.approvedDate}
                  onChange={(e) => patchRow(idx, { approvedDate: e.target.value })}
                />
              <SelectField
                label="[PC-IV-4.7] Project Status"
                value={row.projectStatus ?? ''}
                onChange={(e) => patchRow(idx, { projectStatus: e.target.value })}
                options={[
                  { value: 'Ongoing', label: 'Ongoing' },
                  { value: 'Completed', label: 'Completed' },
                  { value: 'Closed', label: 'Closed' },
                  { value: 'Dropped', label: 'Dropped' },
                ]}
              />
            </div>

            <p
              style={{
                fontSize: '0.7rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                color: 'hsl(var(--text-muted))',
                margin: '1.25rem 0 0.75rem',
              }}
            >
              Total cost
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
              <InputField
                label="[PC-IV-4.8] Amount"
                placeholder="e.g. 55422096"
                value={row.totalCost}
                onChange={(e) => patchRow(idx, { totalCost: e.target.value })}
              />
              <InputField
                label="[PC-IV-4.9] Amount (millions)"
                placeholder="e.g. 55.422096"
                value={row.totalCostMillions}
                onChange={(e) => patchRow(idx, { totalCostMillions: e.target.value })}
              />
            </div>
            </div>
          ))}
        </div>
      </div>

      <div className="card">
        <FileUpload
          label="[PC-IV-4.10] Annexures"
          files={annexures}
          onUpload={(files) => handleUpdate({ annexures: files })}
          onRemove={(i) => handleUpdate({ annexures: annexures.filter((_: unknown, j: number) => j !== i) })}
          description="Upload annexures"
        />
      </div>
    </div>
  );
};
