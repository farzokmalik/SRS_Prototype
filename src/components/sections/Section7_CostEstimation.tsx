import React, { useState } from 'react';
import { useForm } from '../../context/FormContext';
import { InputField, SelectField } from '../ui/FormElements';
import { Plus, Trash2, Search, Calculator, Check } from 'lucide-react';
import { CostEstimationModal } from './CostEstimationModal';

const DUMMY_OBJECT_CODES = [
  { code: 'A01101', name: 'Basic Pay' },
  { code: 'A01202', name: 'House Rent Allowance' },
  { code: 'A03201', name: 'Postage and Telegraph' },
  { code: 'A03202', name: 'Telephone and Trunk Call' },
  { code: 'A03303', name: 'Electricity' },
  { code: 'A03402', name: 'Rent for Office Building (Rental)' },
  { code: 'A03805', name: 'Travelling Allowance (Transport)' },
  { code: 'A03807', name: 'POL Charges (Transport)' },
  { code: 'A03901', name: 'Stationery' },
  { code: 'A03902', name: 'Printing and Publication' },
  { code: 'A09201', name: 'Hardware (IT Equipment)' },
  { code: 'A09202', name: 'Software' },
  { code: 'A09601', name: 'Plant and Machinery' },
  { code: 'A09701', name: 'Furniture and Fixtures' },
];

export const Section7_CostEstimation: React.FC = () => {
  const { formData, updateSection } = useForm();
  
  // Ensure robust fallback state
  const data = formData.section7 || {};
  const plans = data.plans || [];

  const [searchQuery, setSearchQuery] = useState('');
  const [activeSearchPlan, setActiveSearchPlan] = useState<number | null>(null);
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    planIndex?: number;
    codeId?: string;
    detailId?: string;
    type?: 'Local' | 'Foreign';
  }>({ isOpen: false });

  const handleUpdate = (updates: any) => {
    updateSection('section7', updates);
  };

  // --- Financial Plans Logic ---
  const addPlan = () => {
    handleUpdate({ plans: [...plans, { 
      finComponent: '', grantNo: '', costCenter: '', loNo: '', fundingType: '', fundCenter: '', acToCredit: '', functionCode: '', objectCodes: [] 
    }] });
  };

  const removePlan = (index: number) => {
    handleUpdate({ plans: plans.filter((_: any, i: number) => i !== index) });
  };

  const updatePlan = (index: number, updates: any) => {
    const newPlans = [...plans];
    newPlans[index] = { ...newPlans[index], ...updates };
    handleUpdate({ plans: newPlans });
  };


  // --- Object Codes Logic ---
  const filteredCodes = DUMMY_OBJECT_CODES.filter(c => 
    c.code.toLowerCase().includes(searchQuery.toLowerCase()) || 
    c.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const selectObjectCode = (planIndex: number, codeItem: typeof DUMMY_OBJECT_CODES[0]) => {
    const planCodes = plans[planIndex].objectCodes || [];
    if (planCodes.some((c: any) => c.code === codeItem.code)) {
      setActiveSearchPlan(null);
      setSearchQuery('');
      return;
    }
    const newCode = {
      id: Math.random().toString(36).substring(7),
      code: codeItem.code,
      name: codeItem.name,
      details: []
    };
    updatePlan(planIndex, { objectCodes: [...planCodes, newCode] });
    setActiveSearchPlan(null);
    setSearchQuery('');
  };

  const removeObjectCode = (planIndex: number, id: string) => {
    const planCodes = plans[planIndex].objectCodes || [];
    updatePlan(planIndex, { objectCodes: planCodes.filter((c: any) => c.id !== id) });
  };

  const addDetailRow = (planIndex: number, codeId: string) => {
    const planCodes = plans[planIndex].objectCodes || [];
    const updated = planCodes.map((c: any) => {
      if (c.id === codeId) {
        return {
          ...c,
          details: [...(c.details || []), { id: Math.random().toString(36).substring(7), year: '2025-2026', localCost: '', foreignCost: '' }]
        };
      }
      return c;
    });
    updatePlan(planIndex, { objectCodes: updated });
  };

  const updateDetailRow = (planIndex: number, codeId: string, detailId: string, updates: any) => {
    const planCodes = plans[planIndex].objectCodes || [];
    const updated = planCodes.map((c: any) => {
      if (c.id === codeId) {
        return {
          ...c,
          details: c.details.map((d: any) => d.id === detailId ? { ...d, ...updates } : d)
        };
      }
      return c;
    });
    updatePlan(planIndex, { objectCodes: updated });
  };

  const removeDetailRow = (planIndex: number, codeId: string, detailId: string) => {
    const planCodes = plans[planIndex].objectCodes || [];
    const updated = planCodes.map((c: any) => {
      if (c.id === codeId) {
        return {
          ...c,
          details: c.details.filter((d: any) => d.id !== detailId)
        };
      }
      return c;
    });
    updatePlan(planIndex, { objectCodes: updated });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
      
      {/* ── Top Summary Header ── */}
      <div className="card" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', background: 'var(--primary)', color: '#0f0e0eff' }}>
        <div style={{ borderRight: '1px solid rgba(255,255,255,0.1)', paddingRight: '1rem' }}>
          <p style={{ opacity: 0.6, fontSize: '0.75rem' }}>Local Cost</p>
          <p style={{ fontSize: '1.25rem', fontWeight: 700 }}>{formData.section2.localCost || '0.00'} M</p>
        </div>
        <div style={{ borderRight: '1px solid rgba(255,255,255,0.1)', paddingRight: '1rem' }}>
          <p style={{ opacity: 0.6, fontSize: '0.75rem' }}>Remaining Local</p>
          <p style={{ fontSize: '1.25rem', fontWeight: 700 }}>0.00 M</p>
        </div>
        <div style={{ borderRight: '1px solid rgba(255,255,255,0.1)', paddingRight: '1rem' }}>
          <p style={{ opacity: 0.6, fontSize: '0.75rem' }}>Foreign Cost</p>
          <p style={{ fontSize: '1.25rem', fontWeight: 700 }}>{formData.section2.foreignCost || '0.00'} M</p>
        </div>
        <div>
          <p style={{ opacity: 0.6, fontSize: '0.75rem' }}>Remaining Foreign</p>
          <p style={{ fontSize: '1.25rem', fontWeight: 700 }}>0.00 M</p>
        </div>
      </div>

      {/* ── PART 1: FINANCIAL PLANS ── */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
           <h3 style={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Calculator size={20} color="hsl(var(--primary))" /> Financial Plans
           </h3>
           <button className="btn btn-primary" onClick={addPlan}>
             <Plus size={18} /> Add Plan
           </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {plans.map((plan: any, index: number) => (
            <div key={index} className="card" style={{ position: 'relative', borderLeft: '4px solid hsl(var(--secondary))' }}>
              <button 
                onClick={() => removePlan(index)} 
                style={{ position: 'absolute', top: 12, right: 12, background: 'none', border: 'none', color: 'hsl(var(--error))', cursor: 'pointer' }}
              >
                <Trash2 size={18} />
              </button>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                 <SelectField 
                   label="Financial Components" 
                   required 
                   value={plan.finComponent}
                   onChange={(e) => updatePlan(index, { finComponent: e.target.value })}
                   options={[{ value: 'Capital', label: 'Capital' }, { value: 'Revenue', label: 'Revenue' }]}
                 />
                 <SelectField 
                   label="Grant Number" 
                   required 
                   value={plan.grantNo}
                   onChange={(e) => updatePlan(index, { grantNo: e.target.value })}
                   options={[{ value: 'PC21015', label: 'PC21015 - Education' }, { value: 'PC21021', label: 'PC21021 - Health' }]}
                 />
                 <SelectField 
                   label="Cost Center" 
                   value={plan.costCenter}
                   onChange={(e) => updatePlan(index, { costCenter: e.target.value })}
                   options={[{ value: 'LH4001', label: 'LH4001 - Lahore City' }]}
                 />
                 <InputField label="LO No." value={plan.loNo} onChange={(e) => updatePlan(index, { loNo: e.target.value })} />
                 <SelectField 
                   label="Funding Cost Type" 
                   required 
                   value={plan.fundingType}
                   onChange={(e) => updatePlan(index, { fundingType: e.target.value })}
                   options={[{ value: 'Local', label: 'Local Cost' }, { value: 'Foreign', label: 'Foreign Cost' }]}
                 />
                 <InputField label="Fund Center (Controlling)" value={plan.fundCenter} onChange={(e) => updatePlan(index, { fundCenter: e.target.value })} />
                 <SelectField 
                   label="A/C To be Credited" 
                   value={plan.acToCredit}
                   onChange={(e) => updatePlan(index, { acToCredit: e.target.value })}
                   options={[{ value: 'Cash', label: 'Cash in Hand' }]}
                 />
                 <InputField label="Function Code" value={plan.functionCode} onChange={(e) => updatePlan(index, { functionCode: e.target.value })} />
                 <div /> {/* Empy space for grid alignment */}
              </div>

              <hr style={{ border: 0, borderTop: '1px solid hsl(var(--border))', margin: '2rem -1.5rem 1.5rem -1.5rem' }} />

              <h5 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'hsl(var(--primary))' }}>
                 Allocated Object Codes
              </h5>

              <div style={{ position: 'relative', marginBottom: '1.5rem' }}>
                <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'hsl(var(--text-muted))' }} />
                <input
                  type="text"
                  placeholder="Search object codes by code or name to tie to this plan..."
                  value={activeSearchPlan === index ? searchQuery : ''}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    if (activeSearchPlan !== index) setActiveSearchPlan(index);
                  }}
                  onFocus={() => {
                    setActiveSearchPlan(index);
                    setSearchQuery('');
                  }}
                  style={{
                    width: '100%', padding: '0.875rem 1rem 0.875rem 2.75rem', fontSize: '0.9375rem',
                    border: '2px solid hsl(var(--border))', borderRadius: 'var(--radius-md)', outline: 'none',
                    transition: 'all 0.2s ease', background: '#fff'
                  }}
                  onFocusCapture={(e) => (e.currentTarget.style.borderColor = 'hsl(var(--accent))')}
                  onBlurCapture={(e) => (e.currentTarget.style.borderColor = 'hsl(var(--border))')}
                />

                {/* Dropdown Results */}
                {activeSearchPlan === index && (
                  <div style={{
                    position: 'absolute', top: '100%', left: 0, right: 0, marginTop: '0.5rem',
                    background: '#fff', border: '1px solid hsl(var(--border))', borderRadius: 'var(--radius-md)',
                    boxShadow: 'var(--shadow-lg)', maxHeight: '300px', overflowY: 'auto', zIndex: 10
                  }}>
                    {filteredCodes.length > 0 ? (
                      filteredCodes.map(code => (
                        <div
                          key={code.code}
                          onClick={() => selectObjectCode(index, code)}
                          style={{
                            padding: '0.75rem 1rem', cursor: 'pointer', display: 'flex', justifyContent: 'space-between',
                            borderBottom: '1px solid hsl(var(--border))', transition: 'background 0.1s'
                          }}
                          onMouseOver={(e) => (e.currentTarget.style.background = 'hsl(var(--bg-main))')}
                          onMouseOut={(e) => (e.currentTarget.style.background = 'transparent')}
                        >
                          <div>
                            <span style={{ fontWeight: 700, color: 'hsl(var(--primary))', marginRight: '0.75rem' }}>{code.code}</span>
                            <span style={{ color: 'hsl(var(--text-main))' }}>{code.name}</span>
                          </div>
                          {(plan.objectCodes || []).some((c: any) => c.code === code.code) && (
                            <Check size={18} color="hsl(var(--success))" />
                          )}
                        </div>
                      ))
                    ) : (
                      <div style={{ padding: '1rem', color: 'hsl(var(--text-muted))', textAlign: 'center' }}>
                        No object codes found.
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Selected Object Codes List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {(plan.objectCodes || []).map((obj: any) => (
                  <div key={obj.id} style={{ padding: '1.5rem', position: 'relative', border: '1px solid hsl(var(--border))', borderRadius: 'var(--radius-md)', borderLeft: '4px solid hsl(var(--primary))', background: '#fff' }}>
                    
                    {/* Object Code Header */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                      <div>
                        <span style={{ 
                          display: 'inline-block', background: 'hsl(var(--primary-light))', color: '#fff',
                          padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 700,
                          marginRight: '0.75rem', letterSpacing: '0.05em'
                        }}>
                          {obj.code}
                        </span>
                        <span style={{ fontSize: '1.125rem', fontWeight: 650 }}>{obj.name}</span>
                      </div>
                      
                      <div style={{ display: 'flex', gap: '0.75rem' }}>
                        <button 
                          className="btn btn-secondary" 
                          onClick={() => addDetailRow(index, obj.id)}
                          style={{ padding: '0.5rem 1rem', fontSize: '0.8125rem' }}
                        >
                          <Plus size={16} /> Add Details
                        </button>
                        <button 
                          onClick={() => removeObjectCode(index, obj.id)} 
                          style={{ background: 'none', border: 'none', color: 'hsl(var(--error))', cursor: 'pointer', padding: '0.5rem' }}
                          title="Remove Object Code"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>

                    {/* Yearly Estimations */}
                    {obj.details && obj.details.length > 0 ? (
                      <div style={{ background: 'hsl(var(--bg-main))', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid hsl(var(--border))' }}>
                        
                        {/* Headers */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 2fr 2fr 240px 40px', gap: '0.75rem', marginBottom: '0.75rem', paddingBottom: '0.5rem', borderBottom: '1px solid hsl(var(--border))', color: 'hsl(var(--text-muted))', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase' }}>
                          <div>Target Year</div>
                          <div><span style={{ color: 'hsl(var(--accent))' }}>Local Cost</span> Est. (M)</div>
                          <div><span style={{ color: 'hsl(var(--warning))' }}>Foreign Cost</span> Est. (M)</div>
                          <div></div>
                          <div></div>
                        </div>

                        {/* Rows */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                          {obj.details.map((detail: any) => (
                            <div key={detail.id} style={{ display: 'grid', gridTemplateColumns: '1.2fr 2fr 2fr 240px 40px', gap: '0.75rem', alignItems: 'center' }}>
                              <SelectField 
                                label=""
                                value={detail.year}
                                onChange={(e) => updateDetailRow(index, obj.id, detail.id, { year: e.target.value })}
                                options={['2024-2025', '2025-2026', '2026-2027', '2027-2028', '2028-2029']}
                                style={{ margin: 0 }}
                              />
                              
                              {/* Local Est Input */}
                              <div style={{ position: 'relative', display: 'flex' }}>
                                <span style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', fontSize: '0.8rem', fontWeight: 600, color: 'hsl(var(--accent))' }}>PKR</span>
                                <input 
                                  type="number" 
                                  placeholder="0.00"
                                  value={detail.localCost} 
                                  onChange={(e) => updateDetailRow(index, obj.id, detail.id, { localCost: e.target.value })}
                                  style={{ width: '100%', padding: '0.6rem 1rem 0.6rem 2.5rem', border: '1.5px solid hsl(var(--border))', borderRadius: 'var(--radius-sm)', outline: 'none' }}
                                />
                              </div>

                              {/* Foreign Est Input */}
                              <div style={{ position: 'relative', display: 'flex' }}>
                                <span style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', fontSize: '0.8rem', fontWeight: 600, color: 'hsl(var(--warning))' }}>USD</span>
                                <input 
                                  type="number" 
                                  placeholder="0.00"
                                  value={detail.foreignCost} 
                                  onChange={(e) => updateDetailRow(index, obj.id, detail.id, { foreignCost: e.target.value })}
                                  style={{ width: '100%', padding: '0.6rem 1rem 0.6rem 2.5rem', border: '1.5px solid hsl(var(--border))', borderRadius: 'var(--radius-sm)', outline: 'none' }}
                                />
                              </div>

                              <div style={{ display: 'flex', gap: '0.5rem' }}>
                                <button 
                                  className="btn btn-primary" 
                                  style={{ padding: '0.5rem 0.75rem', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}
                                  onClick={() => setModalState({ isOpen: true, planIndex: index, codeId: obj.id, detailId: detail.id, type: 'Local' })}
                                >
                                  <Plus size={14} /> Local Cost Est
                                </button>
                                <button 
                                  className="btn btn-primary" 
                                  style={{ padding: '0.5rem 0.75rem', fontSize: '0.75rem', background: 'hsl(var(--warning))', display: 'flex', alignItems: 'center', gap: '0.35rem' }}
                                  onClick={() => setModalState({ isOpen: true, planIndex: index, codeId: obj.id, detailId: detail.id, type: 'Foreign' })}
                                >
                                  <Plus size={14} /> Foreign Cost Est
                                </button>
                              </div>

                              <button 
                                onClick={() => removeDetailRow(index, obj.id, detail.id)}
                                style={{ background: 'none', border: 'none', color: 'hsl(var(--text-muted))', cursor: 'pointer', padding: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                              >
                                <Trash2 size={16} />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div style={{ padding: '1rem', background: 'hsl(var(--bg-main))', borderRadius: 'var(--radius-md)', border: '1px dashed hsl(var(--border))', textAlign: 'center' }}>
                        <p style={{ fontSize: '0.875rem', color: 'hsl(var(--text-muted))' }}>No yearly estimations added. Click &quot;Add Details&quot; to set costs constraint for this code.</p>
                      </div>
                    )}
                    
                  </div>
                ))}
              </div>
            </div>
          ))}
          
          {plans.length === 0 && (
            <div style={{ textAlign: 'center', padding: '3rem', background: '#fff', borderRadius: 'var(--radius-lg)', border: '1px dashed hsl(var(--border))' }}>
              <p style={{ color: 'hsl(var(--text-muted))' }}>No financial plans added yet. Click &quot;Add Plan&quot; to begin.</p>
            </div>
          )}
        </div>
      </div>
      
      {/* Backdrop for click away within active form */}
      {activeSearchPlan !== null && (
        <div 
          style={{ position: 'fixed', inset: 0, zIndex: 9 }} 
          onClick={() => setActiveSearchPlan(null)} 
        />
      )}
      
      <CostEstimationModal 
        isOpen={modalState.isOpen}
        onClose={() => setModalState({ isOpen: false })}
        costTypeLabel={modalState.type || 'Local'}
        defaultObjectCode={
          modalState.planIndex !== undefined && modalState.codeId 
            ? plans[modalState.planIndex]?.objectCodes?.find((c: any) => c.id === modalState.codeId)?.name
            : undefined
        }
        defaultYear={
          modalState.planIndex !== undefined && modalState.codeId && modalState.detailId
            ? plans[modalState.planIndex]?.objectCodes?.find((c: any) => c.id === modalState.codeId)?.details?.find((d: any) => d.id === modalState.detailId)?.year
            : undefined
        }
        initialData={
          modalState.planIndex !== undefined && modalState.codeId && modalState.detailId && modalState.type
            ? plans[modalState.planIndex]?.objectCodes?.find((c: any) => c.id === modalState.codeId)?.details?.find((d: any) => d.id === modalState.detailId)?.[`${modalState.type.toLowerCase()}Data`]
            : undefined
        }
        onSave={(data) => {
          if (modalState.planIndex !== undefined && modalState.codeId && modalState.detailId && modalState.type) {
            const field = modalState.type === 'Local' ? 'localCost' : 'foreignCost';
            updateDetailRow(modalState.planIndex, modalState.codeId, modalState.detailId, {
              [field]: data.totalCost.toFixed(2),
              [`${modalState.type.toLowerCase()}Data`]: data
            });
          }
        }}
      />
    </div>
  );
};
