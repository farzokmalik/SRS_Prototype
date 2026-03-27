import React, { useState, useRef, useEffect } from 'react';
import { useForm } from '../../context/FormContext';
import { InputField, SelectField } from '../ui/FormElements';
import { Calculator, Search, Plus, Trash2, ChevronDown, ChevronUp } from 'lucide-react';
import { CostEstimationDetail } from './CostEstimationDetail';

const OBJECT_CODES = [
  { code: 'A01101', name: 'Pay of Officers' },
  { code: 'A01102', name: 'Pay of Other Staff' },
  { code: 'A01201', name: 'Regular Allowances' },
  { code: 'A01202', name: 'Other Allowances' },
  { code: 'A03101', name: 'Utilities - Electricity' },
  { code: 'A03102', name: 'Utilities - Gas' },
  { code: 'A03103', name: 'Utilities - Water' },
  { code: 'A03201', name: 'Communication - Telephone' },
  { code: 'A03301', name: 'Traveling Allowance' },
  { code: 'A03801', name: 'Maintenance of Buildings' },
  { code: 'A03802', name: 'Maintenance of Transport' },
  { code: 'A03803', name: 'Maintenance of Machinery' },
  { code: 'A03901', name: 'Office Stationery' },
  { code: 'A03902', name: 'Printing and Publication' },
  { code: 'A04101', name: 'Purchase of Furniture' },
  { code: 'A04201', name: 'Purchase of Machinery & Equipment' },
  { code: 'A04301', name: 'Purchase of Transport' },
  { code: 'A05101', name: 'Construction of Buildings' },
  { code: 'A05102', name: 'Construction of Roads' },
  { code: 'A05103', name: 'Construction of Bridges' },
  { code: 'A05201', name: 'Repair of Buildings' },
  { code: 'A05301', name: 'Civil Works - Others' },
  { code: 'A06101', name: 'Transfer Payments - Grants' },
  { code: 'A06201', name: 'Transfer Payments - Subsidies' },
  { code: 'A07101', name: 'Commodities & Services' },
  { code: 'A08101', name: 'Investment - Shares' },
  { code: 'A08201', name: 'Investment - Loans' },
  { code: 'A09101', name: 'Physical Assets - Land' },
  { code: 'A09201', name: 'Physical Assets - IT Equipment' },
  { code: 'A09301', name: 'Physical Assets - Software' },
  { code: 'A10101', name: 'Consultancy Services' },
  { code: 'A10201', name: 'Training & Capacity Building' },
  { code: 'A10301', name: 'Research & Development' },
  { code: 'A10401', name: 'Survey & Investigation' },
  { code: 'A10501', name: 'Feasibility Study' },
  { code: 'A11101', name: 'Contingency Reserve' },
  { code: 'A11201', name: 'Miscellaneous Expenses' },
];

function getProjectYears(startDate: string, endDate: string): string[] {
  if (!startDate || !endDate) return [];
  const start = new Date(startDate);
  const end = new Date(endDate);
  if (isNaN(start.getTime()) || isNaN(end.getTime())) return [];

  const startYear = start.getFullYear();
  const endYear = end.getFullYear();
  const years: string[] = [];
  for (let y = startYear; y <= endYear; y++) {
    years.push(`${y}-${y + 1}`);
  }
  return years.length > 0 ? years : [];
}

interface ObjectCodeSearchProps {
  onAdd: (code: { code: string; name: string }) => void;
  addedCodes: string[];
}

const ObjectCodeSearch: React.FC<ObjectCodeSearchProps> = ({ onAdd, addedCodes }) => {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const q = query.toLowerCase();
  const filtered = OBJECT_CODES.filter(
    (oc) =>
      !addedCodes.includes(oc.code) &&
      (oc.code.toLowerCase().includes(q) || oc.name.toLowerCase().includes(q)),
  );

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <label className="label">
        Search Object Code <span style={{ color: 'hsl(var(--error))' }}>*</span>
      </label>
      <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.4rem' }}>
        <div style={{ position: 'relative', flex: 1 }}>
          <Search
            size={16}
            style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: 'hsl(var(--text-muted))' }}
          />
          <input
            className="input"
            placeholder="Type code or name to search..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setOpen(true);
            }}
            onFocus={() => setOpen(true)}
            style={{ paddingLeft: '2.25rem' }}
          />
        </div>
      </div>

      {open && query.length > 0 && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            zIndex: 50,
            marginTop: '0.25rem',
            maxHeight: '240px',
            overflow: 'auto',
            background: 'white',
            border: '1px solid hsl(var(--border))',
            borderRadius: 'var(--radius-md)',
            boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
          }}
        >
          {filtered.length === 0 ? (
            <div style={{ padding: '1rem', textAlign: 'center', color: 'hsl(var(--text-muted))', fontSize: '0.875rem' }}>
              No matching object codes found
            </div>
          ) : (
            filtered.map((oc) => (
              <div
                key={oc.code}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '0.6rem 0.75rem',
                  cursor: 'pointer',
                  borderBottom: '1px solid hsl(var(--border) / 0.5)',
                  transition: 'background 0.15s',
                }}
                onMouseOver={(e) => (e.currentTarget.style.background = 'hsl(var(--bg-main))')}
                onMouseOut={(e) => (e.currentTarget.style.background = 'transparent')}
              >
                <div>
                  <span style={{ fontWeight: 600, fontSize: '0.875rem', color: 'hsl(var(--primary))' }}>{oc.code}</span>
                  <span style={{ marginLeft: '0.5rem', fontSize: '0.875rem', color: 'hsl(var(--text-main))' }}>{oc.name}</span>
                </div>
                <button
                  className="btn btn-primary"
                  style={{ padding: '0.25rem 0.75rem', fontSize: '0.75rem' }}
                  onClick={(e) => {
                    e.stopPropagation();
                    onAdd(oc);
                    setQuery('');
                    setOpen(false);
                  }}
                >
                  <Plus size={14} /> Add
                </button>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export const PC2Section7_CostEstimation: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.section7;
  const section2 = formData.section2;
  const section1 = formData.section1;

  const [expandedPlans, setExpandedPlans] = useState<Record<number, boolean>>({});
  const [detailView, setDetailView] = useState<{ planIndex: number; year: string; costType: 'local' | 'foreign'; objectCode: string; objectName: string } | null>(null);

  const handleUpdate = (updates: any) => {
    updateSection('section7', updates);
  };

  const isForeign = section2.foreignFunding === 'Yes';
  const comp = section2.financialComponents || '';

  const localCostFromS2 = (): number => {
    const cap = parseFloat(section2.localCapitalCost || '0') || 0;
    const rev = parseFloat(section2.localRevenueCost || '0') || 0;
    if (comp === 'Capital') return cap;
    if (comp === 'Revenue') return rev;
    if (comp === 'Both') return cap + rev;
    return 0;
  };

  const foreignCostFromS2 = (): number => {
    if (!isForeign) return 0;
    const cap = parseFloat(section2.foreignCapitalCost || '0') || 0;
    const rev = parseFloat(section2.foreignRevenueCost || '0') || 0;
    if (comp === 'Capital') return cap;
    if (comp === 'Revenue') return rev;
    if (comp === 'Both') return cap + rev;
    return 0;
  };

  const plans: any[] = data.plans || [];

  const totalAllocatedLocal = plans.reduce((sum: number, plan: any) => {
    return sum + (plan.yearData || []).reduce((s: number, yd: any) => s + (parseFloat(yd.localCost || '0') || 0), 0);
  }, 0);



  const localCost = localCostFromS2();
  const foreignCost = foreignCostFromS2();
  const remainingLocal = localCost - totalAllocatedLocal;
  const remainingForeign = 0;

  const projectYears = getProjectYears(section1.startDate, section1.endDate);

  const addObjectCode = (oc: { code: string; name: string }) => {
    const newPlan = {
      objectCode: oc.code,
      objectName: oc.name,
      yearData: [] as any[],
    };
    handleUpdate({ plans: [...plans, newPlan] });
    setExpandedPlans((prev) => ({ ...prev, [plans.length]: true }));
  };

  const removePlan = (index: number) => {
    handleUpdate({ plans: plans.filter((_: any, i: number) => i !== index) });
  };

  const getYearCosts = (plan: any, year: string) => {
    const entry = (plan.yearData || []).find((yd: any) => yd.year === year);
    return { localCost: entry?.localCost || '', foreignCost: entry?.foreignCost || '' };
  };

  const updateYearData = (planIndex: number, year: string, updates: any) => {
    const newPlans = [...plans];
    const existingData = [...(newPlans[planIndex].yearData || [])];
    const idx = existingData.findIndex((yd: any) => yd.year === year);
    if (idx >= 0) {
      existingData[idx] = { ...existingData[idx], ...updates };
    } else {
      existingData.push({ year, localCost: '', foreignCost: '', ...updates });
    }
    newPlans[planIndex] = { ...newPlans[planIndex], yearData: existingData };
    handleUpdate({ plans: newPlans });
  };

  const toggleExpand = (index: number) => {
    setExpandedPlans((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const addedCodes = plans.map((p: any) => p.objectCode);

  const fmt = (n: number) => (n ? n.toFixed(2) : '0.00');

  const cardStyle = (color: string) => ({
    padding: '1rem 1.25rem',
    borderRadius: 'var(--radius-md)',
    background: color,
    flex: 1,
    minWidth: 0,
  });

  if (detailView) {
    return (
      <CostEstimationDetail
        context={detailView}
        onBack={() => setDetailView(null)}
      />
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Cost Summary Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: isForeign ? 'repeat(4, 1fr)' : 'repeat(2, 1fr)', gap: '1rem' }}>
        <div style={cardStyle('hsl(var(--primary))')}>
          <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.65)', marginBottom: '0.25rem' }}>Local Cost</p>
          <p style={{ fontSize: '1.35rem', fontWeight: 700, color: '#fff' }}>{fmt(localCost)} M</p>
        </div>
        <div style={cardStyle(remainingLocal < 0 ? 'hsl(var(--error))' : 'hsl(210, 60%, 45%)')}>
          <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.65)', marginBottom: '0.25rem' }}>Remaining Local</p>
          <p style={{ fontSize: '1.35rem', fontWeight: 700, color: '#fff' }}>{fmt(remainingLocal)} M</p>
        </div>
        {isForeign && (
          <>
            <div style={cardStyle('hsl(250, 50%, 45%)')}>
              <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.65)', marginBottom: '0.25rem' }}>Foreign Cost</p>
              <p style={{ fontSize: '1.35rem', fontWeight: 700, color: '#fff' }}>{fmt(foreignCost)} M</p>
            </div>
            <div style={cardStyle(remainingForeign < 0 ? 'hsl(var(--error))' : 'hsl(250, 40%, 55%)')}>
              <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.65)', marginBottom: '0.25rem' }}>Remaining Foreign</p>
              <p style={{ fontSize: '1.35rem', fontWeight: 700, color: '#fff' }}>{fmt(remainingForeign)} M</p>
            </div>
          </>
        )}
      </div>

      {/* Financial Plan Fields */}
      <div className="card">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <SelectField
            label="Financial Components"
            required
            value={data.finComponent || ''}
            onChange={(e) => handleUpdate({ finComponent: e.target.value })}
            options={[
              { value: 'Capital', label: 'Capital' },
              { value: 'Revenue', label: 'Revenue' },
            ]}
          />
          <SelectField
            label="Grant Number"
            required
            value={data.grantNo || ''}
            onChange={(e) => handleUpdate({ grantNo: e.target.value })}
            options={[
              { value: 'PC21002', label: 'Land Revenue - (PC21002)' },
              { value: 'PC21015', label: 'Education - (PC21015)' },
              { value: 'PC21021', label: 'Health - (PC21021)' },
              { value: 'PC21031', label: 'Agriculture - (PC21031)' },
              { value: 'PC21041', label: 'Communication - (PC21041)' },
              { value: 'PC21051', label: 'Housing - (PC21051)' },
            ]}
          />
          <SelectField
            label="Cost Center"
            value={data.costCenter || ''}
            onChange={(e) => handleUpdate({ costCenter: e.target.value })}
            options={[
              { value: 'OTHERS', label: 'OTHERS- (OTHERS)' },
              { value: 'LH4001', label: 'LH4001 - Lahore City' },
              { value: 'RW5001', label: 'RW5001 - Rawalpindi' },
              { value: 'FD6001', label: 'FD6001 - Faisalabad' },
              { value: 'ML7001', label: 'ML7001 - Multan' },
            ]}
          />
          <InputField
            label="LO No."
            placeholder="e.g. LO00000890"
            value={data.loNo || ''}
            onChange={(e) => handleUpdate({ loNo: e.target.value })}
          />
          <SelectField
            label="Funding Cost Type"
            required
            value={data.fundingType || ''}
            onChange={(e) => handleUpdate({ fundingType: e.target.value })}
            options={[
              { value: 'Local', label: 'Local Cost' },
              { value: 'Foreign', label: 'Foreign Cost' },
            ]}
          />
          <InputField
            label="Fund Center (Controlling)"
            placeholder="e.g. LE0987"
            value={data.fundCenter || ''}
            onChange={(e) => handleUpdate({ fundCenter: e.target.value })}
          />
          <SelectField
            label="A/C To be Credited"
            value={data.acToCredit || ''}
            onChange={(e) => handleUpdate({ acToCredit: e.target.value })}
            options={[
              { value: 'Account-I', label: 'Account-I' },
              { value: 'Account-II', label: 'Account-II' },
              { value: 'Account-III', label: 'Account-III' },
              { value: 'Account-IV', label: 'Account-IV' },
            ]}
          />
          <InputField
            label="Function Code"
            placeholder="Enter function code"
            value={data.functionCode || ''}
            onChange={(e) => handleUpdate({ functionCode: e.target.value })}
          />
        </div>
      </div>

      {/* Object Code Search */}
      <div className="card">
        <ObjectCodeSearch onAdd={addObjectCode} addedCodes={addedCodes} />
      </div>

      {/* Added Plans */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 style={{ fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Calculator size={20} color="hsl(var(--primary))" /> Cost Estimation Plans ({plans.length})
        </h3>
      </div>

      {plans.length === 0 ? (
        <div
          style={{
            textAlign: 'center',
            padding: '4rem',
            background: '#fff',
            borderRadius: 'var(--radius-lg)',
            border: '1px dashed hsl(var(--border))',
          }}
        >
          <Calculator size={32} color="hsl(var(--text-muted))" style={{ marginBottom: '0.5rem' }} />
          <p style={{ color: 'hsl(var(--text-muted))' }}>No object codes added yet. Search and add one above.</p>
        </div>
      ) : (
        plans.map((plan: any, index: number) => {
          const isExpanded = expandedPlans[index] ?? false;
          const planLocalTotal = (plan.yearData || []).reduce(
            (s: number, yd: any) => s + (parseFloat(yd.localCost || '0') || 0),
            0,
          );
          const planForeignTotal = (plan.yearData || []).reduce(
            (s: number, yd: any) => s + (parseFloat(yd.foreignCost || '0') || 0),
            0,
          );

          return (
            <div key={index} className="card" style={{ padding: 0, overflow: 'hidden' }}>
              {/* Header */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '1rem 1.25rem',
                  cursor: 'pointer',
                  background: isExpanded ? 'hsl(var(--bg-main))' : 'transparent',
                  transition: 'background 0.2s',
                }}
                onClick={() => toggleExpand(index)}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  <div>
                    <span style={{ fontWeight: 700, fontSize: '0.9375rem', color: 'hsl(var(--primary))' }}>
                      {plan.objectCode}
                    </span>
                    <span style={{ marginLeft: '0.5rem', fontSize: '0.875rem', color: 'hsl(var(--text-main))' }}>
                      {plan.objectName}
                    </span>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span style={{ fontSize: '0.8rem', color: 'hsl(var(--text-muted))' }}>
                    Local: {fmt(planLocalTotal)} M
                    {isForeign && ` | Foreign: ${fmt(planForeignTotal)} M`}
                  </span>
                  <button
                    className="btn btn-secondary"
                    style={{ padding: '0.35rem 0.6rem', color: 'hsl(var(--error))' }}
                    onClick={(e) => {
                      e.stopPropagation();
                      removePlan(index);
                    }}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>

              {/* Year Data */}
              {isExpanded && (
                <div style={{ padding: '1rem 1.25rem', borderTop: '1px solid hsl(var(--border))' }}>
                  {projectYears.length === 0 ? (
                    <p style={{ textAlign: 'center', color: 'hsl(var(--text-muted))', fontSize: '0.875rem', padding: '1rem 0' }}>
                      No project years defined. Set Start & End dates in Section 1.
                    </p>
                  ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      {/* Table Header */}
                      <div
                        style={{
                          display: 'grid',
                          gridTemplateColumns: isForeign ? '1.2fr 1fr 1fr auto' : '1.2fr 1fr auto',
                          gap: '0.75rem',
                          padding: '0.5rem 0',
                          borderBottom: '2px solid hsl(var(--border))',
                          alignItems: 'center',
                        }}
                      >
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'hsl(var(--text-muted))', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                          Year
                        </span>
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'hsl(var(--text-muted))', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                          Local Cost (Million)
                        </span>
                        {isForeign && (
                          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'hsl(var(--text-muted))', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                            Foreign Cost (Million)
                          </span>
                        )}
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'hsl(var(--text-muted))', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                          Actions
                        </span>
                      </div>

                      {/* Rows — driven by project years from Section 1 */}
                      {projectYears.map((year) => {
                        const costs = getYearCosts(plan, year);
                        return (
                          <div
                            key={year}
                            style={{
                              display: 'grid',
                              gridTemplateColumns: isForeign ? '1.2fr 1fr 1fr auto' : '1.2fr 1fr auto',
                              gap: '0.75rem',
                              alignItems: 'center',
                              padding: '0.5rem 0',
                              borderBottom: '1px solid hsl(var(--border) / 0.5)',
                            }}
                          >
                            <div
                              style={{
                                padding: '0.5rem 0.75rem',
                                background: 'hsl(var(--bg-main))',
                                borderRadius: 'var(--radius-sm)',
                                fontSize: '0.9rem',
                                fontWeight: 600,
                                color: 'hsl(var(--text-main))',
                              }}
                            >
                              {year}
                            </div>
                            <input
                              className="input"
                              type="number"
                              placeholder="0.00"
                              value={costs.localCost}
                              onChange={(e) => updateYearData(index, year, { localCost: e.target.value })}
                            />
                            {isForeign && (
                              <input
                                className="input"
                                type="number"
                                placeholder="0.00"
                                value={costs.foreignCost}
                                onChange={(e) => updateYearData(index, year, { foreignCost: e.target.value })}
                              />
                            )}
                            <div style={{ display: 'flex', gap: '0.4rem' }}>
                              <button
                                className="btn btn-secondary"
                                style={{ padding: '0.35rem 0.65rem', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.3rem', whiteSpace: 'nowrap' }}
                                onClick={() => setDetailView({ planIndex: index, year, costType: 'local', objectCode: plan.objectCode, objectName: plan.objectName })}
                              >
                                <Plus size={14} /> Local Cost Est.
                              </button>
                              {isForeign && (
                                <button
                                  className="btn btn-secondary"
                                  style={{ padding: '0.35rem 0.65rem', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.3rem', whiteSpace: 'nowrap' }}
                                  onClick={() => setDetailView({ planIndex: index, year, costType: 'foreign', objectCode: plan.objectCode, objectName: plan.objectName })}
                                >
                                  <Plus size={14} /> Foreign Cost Est.
                                </button>
                              )}
                            </div>
                          </div>
                        );
                      })}

                      {/* Row Totals */}
                      <div
                        style={{
                          display: 'grid',
                          gridTemplateColumns: isForeign ? '1.2fr 1fr 1fr auto' : '1.2fr 1fr auto',
                          gap: '0.75rem',
                          padding: '0.6rem 0',
                          borderTop: '2px solid hsl(var(--border))',
                          marginTop: '0.25rem',
                        }}
                      >
                        <span style={{ fontSize: '0.875rem', fontWeight: 700, color: 'hsl(var(--text-main))' }}>Total</span>
                        <span style={{ fontSize: '0.875rem', fontWeight: 700, color: 'hsl(var(--primary))' }}>
                          {fmt(planLocalTotal)} M
                        </span>
                        {isForeign && (
                          <span style={{ fontSize: '0.875rem', fontWeight: 700, color: 'hsl(250, 50%, 45%)' }}>
                            {fmt(planForeignTotal)} M
                          </span>
                        )}
                        <span />
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })
      )}
    </div>
  );
};
