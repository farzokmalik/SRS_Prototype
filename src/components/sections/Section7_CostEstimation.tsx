import React from 'react';
import { useForm } from '../../context/FormContext';
import { InputField, SelectField } from '../ui/FormElements';
import { Plus, Trash2, Calculator } from 'lucide-react';

export const Section7_CostEstimation: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.section7;

  const handleUpdate = (updates: any) => {
    updateSection('section7', { ...data, ...updates });
  };

  const addPlan = () => {
    handleUpdate({ plans: [...data.plans, { 
      finComponent: '', grantNo: '', costCenter: '', loNo: '', fundingType: '', fundCenter: '', acToCredit: '', functionCode: '', objectCode: '' 
    }] });
  };

  const removePlan = (index: number) => {
    handleUpdate({ plans: data.plans.filter((_: any, i: number) => i !== index) });
  };

  const updatePlan = (index: number, updates: any) => {
    const newPlans = [...data.plans];
    newPlans[index] = { ...newPlans[index], ...updates };
    handleUpdate({ plans: newPlans });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div className="card" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', background: 'var(--primary)', color: '#fff' }}>
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

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
         <h3 style={{ fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Calculator size={20} color="var(--primary)" /> Financial Plans
         </h3>
         <button className="btn btn-primary" onClick={addPlan}>
           <Plus size={18} /> Add Plan
         </button>
      </div>

      {data.plans.map((plan: any, index: number) => (
        <div key={index} className="card" style={{ position: 'relative' }}>
          <button 
            onClick={() => removePlan(index)} 
            style={{ position: 'absolute', top: 12, right: 12, background: 'none', border: 'none', color: 'var(--error)', cursor: 'pointer' }}
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
             <InputField label="Object Code" value={plan.objectCode} onChange={(e) => updatePlan(index, { objectCode: e.target.value })} />
          </div>
        </div>
      ))}
      
      {data.plans.length === 0 && (
        <div style={{ textAlign: 'center', padding: '4rem', background: '#fff', borderRadius: 'var(--radius-lg)', border: '1px dashed var(--border)' }}>
          <p style={{ color: 'var(--secondary)' }}>No financial plans added yet. Click "Add Plan" to begin.</p>
        </div>
      )}
    </div>
  );
};
