import React from 'react';
import { useForm } from '../../context/FormContext';
import { InputField, SelectField, RadioGroup, FileUpload } from '../ui/FormElements';
import { Plus, Trash2 } from 'lucide-react';

export const Section2_Cost: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.section2;

  const handleUpdate = (updates: any) => {
    updateSection('section2', { ...data, ...updates });
  };

  const addBeneficiary = () => {
    handleUpdate({ beneficiaryShares: [...data.beneficiaryShares, { adminDept: '', name: '', amount: '' }] });
  };

  const removeBeneficiary = (index: number) => {
    handleUpdate({ beneficiaryShares: data.beneficiaryShares.filter((_: any, i: number) => i !== index) });
  };

  const updateBeneficiary = (index: number, updates: any) => {
    const newShares = [...data.beneficiaryShares];
    newShares[index] = { ...newShares[index], ...updates };
    handleUpdate({ beneficiaryShares: newShares });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div className="card">
        <RadioGroup 
          label="Foreign Funding" 
          required 
          name="foreignFunding"
          value={data.foreignFunding}
          onChange={(val) => handleUpdate({ foreignFunding: val })}
          options={[{ value: 'Yes', label: 'Yes' }, { value: 'No', label: 'No' }]}
        />
        
        {data.foreignFunding === 'Yes' && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem', padding: '1rem', background: '#f8f9fa', borderRadius: 'var(--radius-md)' }}>
            <InputField label="Foreign Exchange Component (FEC)" value={data.fec} onChange={(e) => handleUpdate({ fec: e.target.value })} />
            <InputField label="Foreign Cost" value={data.foreignCost} onChange={(e) => handleUpdate({ foreignCost: e.target.value })} />
            <InputField label="Foreign Capital Cost" value={data.foreignCapitalCost} onChange={(e) => handleUpdate({ foreignCapitalCost: e.target.value })} />
            <InputField label="Foreign Revenue Cost" value={data.foreignRevenueCost} onChange={(e) => handleUpdate({ foreignRevenueCost: e.target.value })} />
            <InputField label="Source of Currency" value={data.source} onChange={(e) => handleUpdate({ source: e.target.value })} />
            <InputField label="Exchange Rate" value={data.exchangeRate} onChange={(e) => handleUpdate({ exchangeRate: e.target.value })} />
          </div>
        )}
      </div>

      <div className="card">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <SelectField 
            label="Project Financial Components" 
            required 
            value={data.financialComponents}
            onChange={(e) => handleUpdate({ financialComponents: e.target.value })}
            options={[{ value: 'Capital', label: 'Capital' }, { value: 'Revenue', label: 'Revenue' }, { value: 'Both', label: 'Both' }]}
          />
          <InputField label="Local Cost (PKR)" placeholder="Millions" value={data.localCost} onChange={(e) => handleUpdate({ localCost: e.target.value })} />
          <SelectField 
            label="Approval Forum" 
            required 
            value={data.approvalForum}
            onChange={(e) => handleUpdate({ approvalForum: e.target.value })}
            options={[{ value: 'DDSC', label: 'DDSC' }, { value: 'CDWP', label: 'CDWP' }, { value: 'PDWP', label: 'PDWP' }]}
          />
          <InputField label="Total Cost (PKR)" placeholder="Millions" value={data.totalCost} onChange={(e) => handleUpdate({ totalCost: e.target.value })} />
        </div>
      </div>

      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h3 style={{ fontSize: '1rem' }}>Beneficiary Shares</h3>
          <button className="btn btn-secondary" onClick={addBeneficiary} style={{ padding: '0.4rem 0.8rem', fontSize: '0.875rem' }}>
            <Plus size={16} /> Add Beneficiary
          </button>
        </div>
        
        {data.beneficiaryShares.map((share: any, index: number) => (
          <div key={index} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 50px', gap: '1rem', alignItems: 'flex-end', marginBottom: '1rem', padding: '1rem', background: '#f8f9fa', borderRadius: 'var(--radius-md)' }}>
            <SelectField 
              label="Admin Department" 
              value={share.adminDept}
              onChange={(e) => updateBeneficiary(index, { adminDept: e.target.value })}
              options={[{ value: 'Edu', label: 'School Education' }, { value: 'Health', label: 'Health' }]}
            />
            <InputField label="Name" value={share.name} onChange={(e) => updateBeneficiary(index, { name: e.target.value })} />
            <InputField label="Amount (Million)" type="number" value={share.amount} onChange={(e) => updateBeneficiary(index, { amount: e.target.value })} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ opacity: 0, fontSize: '0.875rem', fontWeight: 600, pointerEvents: 'none' }}>Action</label>
              <button 
                className="btn btn-secondary" 
                onClick={() => removeBeneficiary(index)} 
                style={{ height: '42px', padding: '0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--error)' }}
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="card">
         <FileUpload 
           label="Financial Attachments"
           files={data.attachments || []}
           onUpload={(files) => handleUpdate({ attachments: files })}
           onRemove={(idx) => handleUpdate({ attachments: data.attachments.filter((_: any, i: number) => i !== idx) })}
           description="Upload relevant cost documents, budgets, and estimates"
         />
      </div>
    </div>
  );
};
