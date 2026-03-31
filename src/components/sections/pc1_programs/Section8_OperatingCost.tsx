import React, { useMemo } from 'react';
import { useForm } from '../../../context/FormContext';
import { InputField, SelectField } from '../../ui/FormElements';
import { Plus, Trash2, Info } from 'lucide-react';

export const Section8_OperatingCost: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.section8;

  const handleUpdate = (updates: any) => {
    updateSection('section8', { ...data, ...updates });
  };

  // Dynamically extract unique Object Codes mapped in Section 7 Plans
  const uniqueObjectCodes = useMemo(() => {
    const section7Plans = formData.section7?.plans || [];
    const allObjectCodes = section7Plans.flatMap((p: any) => p.objectCodes || []);
    // Remove duplicates recursively by id so an object code added twice in diff plans only appears once for Operating Costs
    return Array.from(new Map(allObjectCodes.map((c: any) => [c.id, c])).values());
  }, [formData.section7]);

  const updateEstimateRecord = (objectCodeId: string, newDetails: any[]) => {
    const existing = data.operatingEstimates || [];
    const index = existing.findIndex((e: any) => e.objectCodeId === objectCodeId);
    
    let newEstimates;
    if (index >= 0) {
      newEstimates = [...existing];
      newEstimates[index] = { ...newEstimates[index], details: newDetails };
    } else {
      const sourceObj = uniqueObjectCodes.find((c: any) => c.id === objectCodeId) as any;
      newEstimates = [...existing, { 
        objectCodeId, 
        code: sourceObj.code, 
        name: sourceObj.name, 
        details: newDetails 
      }];
    }
    
    handleUpdate({ operatingEstimates: newEstimates });
  };

  const getDetails = (objId: string) => {
    const record = (data.operatingEstimates || []).find((e: any) => e.objectCodeId === objId);
    return record?.details || [];
  };

  const addYear = (objId: string) => {
    const details = getDetails(objId);
    if (details.length >= 5) return; // Cap at 5 years as requested
    const newDetails = [...details, { id: Date.now().toString(), year: '', localCost: '', foreignCost: '' }];
    updateEstimateRecord(objId, newDetails);
  };

  const updateYear = (objId: string, detailId: string, updates: any) => {
    const details = getDetails(objId);
    const newDetails = details.map((d: any) => d.id === detailId ? { ...d, ...updates } : d);
    updateEstimateRecord(objId, newDetails);
  };

  const removeYear = (objId: string, detailId: string) => {
    const details = getDetails(objId);
    const newDetails = details.filter((d: any) => d.id !== detailId);
    updateEstimateRecord(objId, newDetails);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Top Header Information */}
      <div className="card" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
        <SelectField 
          label="Grant Number" 
          value={data.grantNo} 
          onChange={(e) => handleUpdate({ grantNo: e.target.value })}
          options={[{ value: 'PC21015', label: 'PC21015' }]}
        />
        <SelectField 
          label="Cost Center" 
          value={data.costCenter} 
          onChange={(e) => handleUpdate({ costCenter: e.target.value })}
          options={[{ value: 'LH4001', label: 'LH4001' }]}
        />
        <InputField label="LO No." value={data.loNo} onChange={(e) => handleUpdate({ loNo: e.target.value })} />
        <SelectField 
          label="Running Cost Type" 
          value={data.runningCostType} 
          onChange={(e) => handleUpdate({ runningCostType: e.target.value })}
          options={[{ value: 'Local', label: 'Local Cost' }, { value: 'Foreign', label: 'Foreign Cost' }]}
        />
        <InputField label="Fund Center (Controlling)" value={data.fundCenter} onChange={(e) => handleUpdate({ fundCenter: e.target.value })} />
      </div>

      {uniqueObjectCodes.length === 0 && (
        <div className="card" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', background: 'hsl(var(--accent-soft))', color: 'hsl(var(--accent))', border: '1px solid hsl(var(--accent) / 0.2)' }}>
          <Info size={20} />
          <p style={{ fontSize: '0.9375rem', fontWeight: 500 }}>No Object Codes found. Please add detailed Cost Estimations in Section 7 first to bind 5-Year Operating Costs to them.</p>
        </div>
      )}

      {/* Render a 5-Year Estimations block for each dynamically pulled Object Code */}
      {uniqueObjectCodes.map((obj: any) => {
        const details = getDetails(obj.id);
        const canAddYear = details.length < 5;

        return (
          <div key={obj.id} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '0.75rem', borderBottom: '1px solid hsl(var(--border))' }}>
              <div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'hsl(var(--primary))' }}>{obj.name}</h3>
                <p style={{ fontSize: '0.875rem', color: 'hsl(var(--text-muted))' }}>Object Code: {obj.code}</p>
              </div>
              <button 
                className="btn btn-primary" 
                onClick={() => addYear(obj.id)}
                disabled={!canAddYear}
                style={{ padding: '0.5rem 1rem', fontSize: '0.875rem', opacity: canAddYear ? 1 : 0.5, cursor: canAddYear ? 'pointer' : 'not-allowed' }}
              >
                <Plus size={16} /> Add Year {details.length > 0 ? `(${details.length}/5)` : ''}
              </button>
            </div>

            {details.length > 0 ? (
              <div style={{ background: 'hsl(var(--bg-main))', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid hsl(var(--border))' }}>
                {/* Headers */}
                <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 2fr 2fr 40px', gap: '0.75rem', marginBottom: '0.75rem', paddingBottom: '0.5rem', borderBottom: '1px solid hsl(var(--border))', color: 'hsl(var(--text-muted))', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase' }}>
                  <div>Target Year</div>
                  <div><span style={{ color: 'hsl(var(--accent))' }}>Local Cost</span> Est. (M)</div>
                  <div><span style={{ color: 'hsl(var(--warning))' }}>Foreign Cost</span> Est. (M)</div>
                  <div></div>
                </div>

                {/* Rows */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {details.map((detail: any) => (
                    <div key={detail.id} style={{ display: 'grid', gridTemplateColumns: '1.2fr 2fr 2fr 40px', gap: '0.75rem', alignItems: 'center' }}>
                      <SelectField 
                        label=""
                        value={detail.year}
                        onChange={(e) => updateYear(obj.id, detail.id, { year: e.target.value })}
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
                          onChange={(e) => updateYear(obj.id, detail.id, { localCost: e.target.value })}
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
                          onChange={(e) => updateYear(obj.id, detail.id, { foreignCost: e.target.value })}
                          style={{ width: '100%', padding: '0.6rem 1rem 0.6rem 2.5rem', border: '1.5px solid hsl(var(--border))', borderRadius: 'var(--radius-sm)', outline: 'none' }}
                        />
                      </div>

                      <button 
                        onClick={() => removeYear(obj.id, detail.id)} 
                        style={{ height: '42px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'none', border: 'none', color: 'hsl(var(--error))', cursor: 'pointer', borderRadius: 'var(--radius-sm)' }}
                        title="Remove Year"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <p style={{ fontSize: '0.875rem', color: 'hsl(var(--text-muted))', textAlign: 'center', padding: '1rem' }}>No yearly estimations added yet. Click &quot;Add Year&quot; to begin 5-year tracking.</p>
            )}
          </div>
        );
      })}
    </div>
  );
};
