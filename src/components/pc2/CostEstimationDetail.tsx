import React, { useState } from 'react';
import { useForm } from '../../context/FormContext';
import { ArrowLeft, Plus, Trash2, Target, ReceiptText, Wallet } from 'lucide-react';

interface DetailContext {
  planIndex: number;
  year: string;
  costType: 'local' | 'foreign';
  objectCode: string;
  objectName: string;
}

interface Props {
  context: DetailContext;
  onBack: () => void;
}

const DISTRICTS = ['Lahore', 'Rawalpindi', 'Faisalabad', 'Multan', 'Gujranwala', 'Sialkot', 'Bahawalpur', 'Sargodha', 'Sahiwal', 'D.G. Khan'];

const TAB_KEYS = ['oneTime', 'hrRecurring', 'generalRecurring'] as const;
type TabKey = typeof TAB_KEYS[number];

const TAB_LABELS: Record<TabKey, string> = {
  oneTime: '[PC-II-6.1] One Time Cost Estimation',
  hrRecurring: '[PC-II-6.1] HR Recurring Cost Estimates',
  generalRecurring: '[PC-II-6.1] General Recurring Cost Estimates',
};

const emptyOneTimeRow = () => ({ item: '', description: '', specification: '', location: '', unitCost: '', quantity: '', subTotal: '' });
const emptyHRRow = () => ({ designation: '', numPosts: '', objectCodeTitle: '', monthlySalary: '', numMonths: '', annualTotal: '' });
const emptyGeneralRow = () => ({ item: '', description: '', specification: '', location: '', unitCost: '', quantity: '', numMonths: '', subTotal: '' });

export const CostEstimationDetail: React.FC<Props> = ({ context, onBack }) => {
  const { formData, updateSection } = useForm();
  const section2 = formData.section2;
  const section7 = formData.section7;

  const [activeTab, setActiveTab] = useState<TabKey>('oneTime');

  const plan = (section7.plans || [])[context.planIndex] || {};
  const costField = context.costType === 'local' ? 'localCostDetail' : 'foreignCostDetail';
  const yearEntry = (plan.yearData || []).find((yd: any) => yd.year === context.year);
  const detailData = yearEntry?.[costField] || { oneTime: [], hrRecurring: [], generalRecurring: [] };

  const updateDetail = (tabKey: TabKey, rows: any[]) => {
    const plans = [...(section7.plans || [])];
    const yearData = [...(plans[context.planIndex]?.yearData || [])];
    const yIdx = yearData.findIndex((yd: any) => yd.year === context.year);
    const currentDetail = yIdx >= 0 ? (yearData[yIdx][costField] || { oneTime: [], hrRecurring: [], generalRecurring: [] }) : { oneTime: [], hrRecurring: [], generalRecurring: [] };
    const newDetail = { ...currentDetail, [tabKey]: rows };
    if (yIdx >= 0) {
      yearData[yIdx] = { ...yearData[yIdx], [costField]: newDetail };
    } else {
      yearData.push({ year: context.year, localCost: '', foreignCost: '', [costField]: newDetail });
    }
    plans[context.planIndex] = { ...plans[context.planIndex], yearData };
    updateSection('section7', { plans });
  };

  const rows = detailData[activeTab] || [];

  const addRow = () => {
    let newRow: any;
    if (activeTab === 'oneTime') newRow = emptyOneTimeRow();
    else if (activeTab === 'hrRecurring') newRow = emptyHRRow();
    else newRow = emptyGeneralRow();
    updateDetail(activeTab, [...rows, newRow]);
  };

  const removeRow = (idx: number) => {
    updateDetail(activeTab, rows.filter((_: any, i: number) => i !== idx));
  };

  const updateRow = (idx: number, updates: any) => {
    const newRows = [...rows];
    newRows[idx] = { ...newRows[idx], ...updates };
    if (activeTab === 'oneTime' || activeTab === 'generalRecurring') {
      const uc = parseFloat(newRows[idx].unitCost || '0') || 0;
      const qty = parseFloat(newRows[idx].quantity || '0') || 0;
      if (activeTab === 'generalRecurring') {
        const months = parseFloat(newRows[idx].numMonths || '0') || 0;
        newRows[idx].subTotal = (uc * qty * months).toString();
      } else {
        newRows[idx].subTotal = (uc * qty).toString();
      }
    } else if (activeTab === 'hrRecurring') {
      const posts = parseFloat(newRows[idx].numPosts || '0') || 0;
      const salary = parseFloat(newRows[idx].monthlySalary || '0') || 0;
      const months = parseFloat(newRows[idx].numMonths || '0') || 0;
      newRows[idx].annualTotal = (posts * salary * months).toString();
    }
    updateDetail(activeTab, newRows);
  };

  const totalCost = rows.reduce((sum: number, r: any) => {
    const val = parseFloat(r.subTotal || r.annualTotal || '0') || 0;
    return sum + val;
  }, 0);

  const fmt = (n: number) => n.toLocaleString('en-PK');
  const costLabel = context.costType === 'local' ? 'Local' : 'Foreign';

  const headerMeta: Array<{ label: string; value: string }> = [
    {
      label: 'Cost Type',
      value:
        section2.financialComponents === 'Capital'
          ? 'Capital Cost'
          : section2.financialComponents === 'Revenue'
            ? 'Revenue Cost'
            : section2.financialComponents || 'N/A',
    },
    { label: 'Grant Number', value: section7.grantNo || 'N/A' },
    { label: 'LO No.', value: section7.loNo || 'N/A' },
    { label: 'Cost Center', value: section7.costCenter || 'N/A' },
    { label: 'Object Code', value: `${context.objectCode} - ${context.objectName}` },
    { label: 'Funding Type', value: context.costType === 'local' ? 'Local Cost' : 'Foreign Cost' },
    { label: 'Financial Year', value: context.year },
  ];

  const tabBtnStyle = (isActive: boolean): React.CSSProperties => ({
    padding: '0.58rem 1rem',
    fontSize: '0.875rem',
    fontWeight: isActive ? 600 : 500,
    color: isActive ? '#fff' : 'hsl(var(--text-main))',
    background: isActive ? 'hsl(var(--primary))' : 'hsl(var(--bg-main))',
    border: isActive ? '1px solid hsl(var(--primary))' : '1px solid hsl(var(--border))',
    borderRadius: '999px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    whiteSpace: 'nowrap',
  });

  const renderCardHeader = (title: string, index: number) => (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.9rem' }}>
      <h4 style={{ margin: 0, fontSize: '0.92rem', fontWeight: 700 }}>
        {title} #{index + 1}
      </h4>
      <button
        className="btn btn-secondary"
        style={{ padding: '0.35rem 0.6rem', color: 'hsl(var(--error))' }}
        onClick={() => removeRow(index)}
      >
        <Trash2 size={14} />
      </button>
    </div>
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Back button */}
      <button
        className="btn btn-secondary"
        onClick={onBack}
        style={{ alignSelf: 'flex-start', display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem' }}
      >
        <ArrowLeft size={16} /> Back to Cost Estimation
      </button>

      {/* Compact context header to keep focus on entry tables */}
      <div
        className="card"
        style={{
          padding: '1.1rem 1.25rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.9rem',
          background: 'hsl(var(--primary))',
          border: '1px solid hsl(var(--primary))',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '1rem',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ minWidth: 240 }}>
            <p
              style={{
                margin: 0,
                fontSize: '0.72rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'rgba(255,255,255,0.75)',
              }}
            >
              Entry Context
            </p>
            <h3
              style={{
                margin: '0.2rem 0 0',
                fontSize: '1rem',
                fontWeight: 700,
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
              }}
            >
              <Target size={16} color="hsl(var(--primary))" />
              {costLabel} Cost Estimation - {context.year}
            </h3>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <div
              style={{
                minWidth: 180,
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: 'var(--radius-md)',
                padding: '0.6rem 0.8rem',
                background: 'rgba(255,255,255,0.12)',
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: '0.72rem',
                  color: 'rgba(255,255,255,0.78)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                }}
              >
                <Wallet size={14} /> Total Cost
              </p>
              <p
                style={{
                  margin: '0.2rem 0 0',
                  fontSize: '1.02rem',
                  fontWeight: 700,
                  color: '#fff',
                }}
              >
                {totalCost ? `${fmt(totalCost)} PKR` : '0 PKR'}
              </p>
            </div>
            <div
              style={{
                minWidth: 180,
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: 'var(--radius-md)',
                padding: '0.6rem 0.8rem',
                background: 'rgba(255,255,255,0.12)',
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: '0.72rem',
                  color: 'rgba(255,255,255,0.78)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                }}
              >
                <ReceiptText size={14} /> Remaining Cost
              </p>
              <p
                style={{
                  margin: '0.2rem 0 0',
                  fontSize: '1.02rem',
                  fontWeight: 700,
                  color: '#fff',
                }}
              >
                0 PKR
              </p>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '0.55rem', flexWrap: 'wrap' }}>
          {headerMeta.map((meta) => (
            <div
              key={meta.label}
              style={{
                padding: '0.38rem 0.65rem',
                borderRadius: '999px',
                border: '1px solid rgba(255,255,255,0.24)',
                background: 'rgba(255,255,255,0.14)',
                fontSize: '0.78rem',
                color: '#fff',
                maxWidth: '100%',
              }}
            >
              <span style={{ color: 'rgba(255,255,255,0.74)', marginRight: '0.35rem' }}>{meta.label}:</span>
              <span style={{ fontWeight: 600 }}>{meta.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div
        className="card"
        style={{
          padding: 0,
          border: '1px solid hsl(var(--border))',
          boxShadow: '0 4px 18px hsl(var(--primary) / 0.04)',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1rem 1.25rem',
            borderBottom: '1px solid hsl(var(--border))',
            background: 'hsl(var(--bg-main) / 0.55)',
          }}
        >
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {TAB_KEYS.map((key) => (
              <button key={key} style={tabBtnStyle(activeTab === key)} onClick={() => setActiveTab(key)}>
                {TAB_LABELS[key]}
              </button>
            ))}
          </div>
        </div>

        {/* Add button */}
        <div
          style={{
            padding: '0.95rem 1.25rem',
            borderBottom: '1px solid hsl(var(--border))',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
            background: '#fff',
          }}
        >
          <p style={{ margin: 0, fontSize: '0.84rem', color: 'hsl(var(--text-muted))', lineHeight: 1.45 }}>
            Add rows for <span style={{ color: 'hsl(var(--text-main))', fontWeight: 600 }}>{TAB_LABELS[activeTab]}</span>
          </p>
          <button className="btn btn-primary" onClick={addRow} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
            <Plus size={16} /> Add {TAB_LABELS[activeTab]}
          </button>
        </div>

        {/* Card-based entries */}
        <div style={{ background: '#fff', padding: '1rem 1.25rem' }}>
          {activeTab === 'oneTime' && (
            rows.length === 0 ? (
              <p style={{ textAlign: 'center', padding: '3rem 1rem', color: 'hsl(var(--text-muted))' }}>No items added yet</p>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {rows.map((row: any, i: number) => (
                  <div key={i} className="card" style={{ margin: 0, border: '1px solid hsl(var(--border))', background: 'hsl(var(--bg-main) / 0.35)' }}>
                    {renderCardHeader('One Time Cost Entry', i)}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem' }}>
                      <input className="input" value={row.item || ''} onChange={(e) => updateRow(i, { item: e.target.value })} placeholder="[PC-II-6.1] Item" />
                      <input className="input" value={row.description || ''} onChange={(e) => updateRow(i, { description: e.target.value })} placeholder="Description" />
                      <input className="input" value={row.specification || ''} onChange={(e) => updateRow(i, { specification: e.target.value })} placeholder="Specification" />
                      <select className="select" value={row.location || ''} onChange={(e) => updateRow(i, { location: e.target.value })}>
                        <option value="">Select District</option>
                        {DISTRICTS.map((d) => <option key={d} value={d}>{d}</option>)}
                      </select>
                      <input className="input" type="number" value={row.unitCost || ''} onChange={(e) => updateRow(i, { unitCost: e.target.value })} placeholder="[PC-II-6.4] Rate (Unit Cost)" />
                      <input className="input" type="number" value={row.quantity || ''} onChange={(e) => updateRow(i, { quantity: e.target.value })} placeholder="[PC-II-6.3] Quantity" />
                      <input className="input" value={row.subTotal || ''} readOnly style={{ background: 'hsl(var(--bg-main))', cursor: 'default', fontWeight: 600 }} placeholder="[PC-II-6.5] Sub-Total" />
                    </div>
                  </div>
                ))}
              </div>
            )
          )}

          {activeTab === 'hrRecurring' && (
            rows.length === 0 ? (
              <p style={{ textAlign: 'center', padding: '3rem 1rem', color: 'hsl(var(--text-muted))' }}>No items added yet</p>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {rows.map((row: any, i: number) => (
                  <div key={i} className="card" style={{ margin: 0, border: '1px solid hsl(var(--border))', background: 'hsl(var(--bg-main) / 0.35)' }}>
                    {renderCardHeader('HR Recurring Cost Entry', i)}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem' }}>
                      <input className="input" value={row.designation || ''} onChange={(e) => updateRow(i, { designation: e.target.value })} placeholder="[PC-II-6.1] Designation" />
                      <input className="input" type="number" value={row.numPosts || ''} onChange={(e) => updateRow(i, { numPosts: e.target.value })} placeholder="[PC-II-6.3] No. of Posts" />
                      <input className="input" value={context.objectCode + ' - ' + context.objectName} readOnly style={{ background: 'hsl(var(--bg-main))', cursor: 'default', color: 'hsl(var(--text-muted))' }} />
                      <input className="input" type="number" value={row.monthlySalary || ''} onChange={(e) => updateRow(i, { monthlySalary: e.target.value })} placeholder="[PC-II-6.4] Monthly Salary" />
                      <input className="input" type="number" value={row.numMonths || ''} onChange={(e) => updateRow(i, { numMonths: e.target.value })} placeholder="Months" />
                      <input className="input" value={row.annualTotal || ''} readOnly style={{ background: 'hsl(var(--bg-main))', cursor: 'default', fontWeight: 600 }} placeholder="[PC-II-6.5] Annual Total" />
                    </div>
                  </div>
                ))}
              </div>
            )
          )}

          {activeTab === 'generalRecurring' && (
            rows.length === 0 ? (
              <p style={{ textAlign: 'center', padding: '3rem 1rem', color: 'hsl(var(--text-muted))' }}>No items added yet</p>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {rows.map((row: any, i: number) => (
                  <div key={i} className="card" style={{ margin: 0, border: '1px solid hsl(var(--border))', background: 'hsl(var(--bg-main) / 0.35)' }}>
                    {renderCardHeader('General Recurring Cost Entry', i)}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem' }}>
                      <input className="input" value={row.item || ''} onChange={(e) => updateRow(i, { item: e.target.value })} placeholder="[PC-II-6.1] Item" />
                      <input className="input" value={row.description || ''} onChange={(e) => updateRow(i, { description: e.target.value })} placeholder="Description" />
                      <input className="input" value={row.specification || ''} onChange={(e) => updateRow(i, { specification: e.target.value })} placeholder="Specification" />
                      <select className="select" value={row.location || ''} onChange={(e) => updateRow(i, { location: e.target.value })}>
                        <option value="">Select District</option>
                        {DISTRICTS.map((d) => <option key={d} value={d}>{d}</option>)}
                      </select>
                      <input className="input" type="number" value={row.unitCost || ''} onChange={(e) => updateRow(i, { unitCost: e.target.value })} placeholder="[PC-II-6.4] Rate (Unit Cost)" />
                      <input className="input" type="number" value={row.quantity || ''} onChange={(e) => updateRow(i, { quantity: e.target.value })} placeholder="[PC-II-6.3] Quantity" />
                      <input className="input" type="number" value={row.numMonths || ''} onChange={(e) => updateRow(i, { numMonths: e.target.value })} placeholder="No. of Months" />
                      <input className="input" value={row.subTotal || ''} readOnly style={{ background: 'hsl(var(--bg-main))', cursor: 'default', fontWeight: 600 }} placeholder="[PC-II-6.5] Sub-Total" />
                    </div>
                  </div>
                ))}
              </div>
            )
          )}
        </div>
      </div>

    </div>
  );
};
