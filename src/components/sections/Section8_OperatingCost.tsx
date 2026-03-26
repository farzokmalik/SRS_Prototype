import React from 'react';
import { useForm } from '../../context/FormContext';
import { InputField, SelectField } from '../ui/FormElements';
import { Plus, Trash2, Search } from 'lucide-react';

export const Section8_OperatingCost: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.section8;

  const handleUpdate = (updates: any) => {
    updateSection('section8', { ...data, ...updates });
  };

  const addEstimate = () => {
    handleUpdate({ estimates: [...data.estimates, { item: '', quantity: '', unit: '', rate: '' }] });
  };

  const updateEstimate = (index: number, updates: any) => {
    const newEstimates = [...data.estimates];
    newEstimates[index] = { ...newEstimates[index], ...updates };
    handleUpdate({ estimates: newEstimates });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
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
        <div style={{ position: 'relative' }}>
          <label className="label">Object Code Search</label>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
             <input className="input" placeholder="e.g. Basic Pay" value={data.objectCode} onChange={(e) => handleUpdate({ objectCode: e.target.value })} />
             <button className="btn btn-primary" style={{ padding: '0 1rem' }}><Search size={18} /></button>
          </div>
        </div>
      </div>

      {data.objectCode && (
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <h3 style={{ fontSize: '1rem' }}>Local Cost Estimates for {data.objectCode}</h3>
            <button className="btn btn-secondary" onClick={addEstimate}><Plus size={16} /> Add Item</button>
          </div>
          
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ textAlign: 'left', borderBottom: '1px solid var(--border)' }}>
                <th style={{ padding: '0.75rem', fontSize: '0.875rem' }}>Item</th>
                <th style={{ padding: '0.75rem', fontSize: '0.875rem' }}>Quantity</th>
                <th style={{ padding: '0.75rem', fontSize: '0.875rem' }}>Unit</th>
                <th style={{ padding: '0.75rem', fontSize: '0.875rem' }}>Rate</th>
                <th style={{ padding: '0.75rem' }}></th>
              </tr>
            </thead>
            <tbody>
              {data.estimates.map((est: any, idx: number) => (
                <tr key={idx} style={{ borderBottom: '1px solid var(--border)' }}>
                  <td style={{ padding: '0.5rem' }}><input className="input" value={est.item} onChange={(e) => updateEstimate(idx, { item: e.target.value })} /></td>
                  <td style={{ padding: '0.5rem' }}><input className="input" type="number" value={est.quantity} onChange={(e) => updateEstimate(idx, { quantity: e.target.value })} /></td>
                  <td style={{ padding: '0.5rem' }}><input className="input" value={est.unit} onChange={(e) => updateEstimate(idx, { unit: e.target.value })} /></td>
                  <td style={{ padding: '0.5rem' }}><input className="input" type="number" value={est.rate} onChange={(e) => updateEstimate(idx, { rate: e.target.value })} /></td>
                  <td style={{ padding: '0.5rem' }}>
                    <button className="btn" style={{ color: 'var(--error)' }} onClick={() => handleUpdate({ estimates: data.estimates.filter((_: any, i: number) => i !== idx) })}>
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
