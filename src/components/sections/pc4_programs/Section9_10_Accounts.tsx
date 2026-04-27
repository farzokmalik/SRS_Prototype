import React from 'react';
import { useForm } from '../../../context/FormContext';
import { InputField, MultiCheckGroup, RadioGroup } from '../../ui/FormElements';

export const Section9_Financing: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.pc4p.s9;

  const handleUpdate = (updates: any) => {
    updateSection('pc4p', { s9: { ...data, ...updates } });
  };

  const updateFinancing = (row: string, col: string, val: string) => {
    const newFinancing = { ...data.financing };
    const currentValues = { ...newFinancing[row], [col]: val };
    
    // Auto-calculate Total if Local or FE changes
    if (col === 'local' || col === 'fe') {
      const total = (parseFloat(currentValues.local) || 0) + (parseFloat(currentValues.fe) || 0);
      currentValues.total = total.toFixed(2);
    }
    
    newFinancing[row] = currentValues;
    handleUpdate({ financing: newFinancing });
  };

  return (
    <div className="card">
      <div className="table-responsive">
        <table className="table" style={{ borderCollapse: 'separate', borderSpacing: '1rem 0.825rem', marginTop: '-0.825rem', marginLeft: '-1rem', width: 'calc(100% + 1rem)' }}>
          <thead>
            <tr>
              <th style={{ width: '20%', background: 'transparent', border: 'none', color: 'hsl(var(--text-muted))', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', paddingBottom: '0.5rem', textAlign: 'left' }}>Source</th>
              <th style={{ width: '26.6%', background: 'transparent', border: 'none', color: 'hsl(var(--text-muted))', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', paddingBottom: '0.5rem', textAlign: 'left' }}>Local</th>
              <th style={{ width: '26.6%', background: 'transparent', border: 'none', color: 'hsl(var(--text-muted))', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', paddingBottom: '0.5rem', textAlign: 'left' }}>FE-Grant</th>
              <th style={{ width: '26.6%', background: 'transparent', border: 'none', color: 'hsl(var(--text-muted))', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', paddingBottom: '0.5rem', textAlign: 'left' }}>Total</th>
            </tr>
          </thead>
          <tbody>
            {['federal', 'provincial', 'donors'].map((row) => (
              <tr key={row}>
                <td style={{ fontWeight: 600, color: 'hsl(var(--text-main))', paddingRight: '1rem' }}>{row === 'donors' ? 'Donors/Others' : `${row.charAt(0).toUpperCase() + row.slice(1)} Share`}</td>
                <td><input type="number" className="input" style={{ background: '#fff' }} placeholder="0.00" value={data.financing[row].local} onChange={(e) => updateFinancing(row, 'local', e.target.value)} /></td>
                <td><input type="number" className="input" style={{ background: '#fff' }} placeholder="0.00" value={data.financing[row].fe} onChange={(e) => updateFinancing(row, 'fe', e.target.value)} /></td>
                <td><input type="number" className="input" style={{ background: '#fff', fontWeight: 600 }} placeholder="0.00" value={data.financing[row].total} readOnly /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div style={{ marginTop: '1.5rem' }}>
        <InputField 
          label="Exchange Rate Note" 
          placeholder="Enter details about exchange rate used" 
          value={data.exchangeRateNote}
          onChange={(e) => handleUpdate({ exchangeRateNote: e.target.value })}
        />
      </div>
    </div>
  );
};

export const Section10_Accounts: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.pc4p.s10;

  const handleUpdate = (updates: any) => {
    updateSection('pc4p', { s10: { ...data, ...updates } });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div className="card" style={{ padding: '2rem' }}>
        <div style={{ marginBottom: '2.5rem' }}>
          <MultiCheckGroup 
            label="Account Types Opened" 
            columns={4}
            options={['PLA', 'Assignment', 'Current', 'Saving', 'Other']}
            value={data.accounts}
            onChange={(vals) => handleUpdate({ accounts: vals })}
          />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', borderTop: '1px solid hsl(var(--border) / 0.5)', paddingTop: '2rem' }}>
          <RadioGroup 
            label="Account Status" 
            options={[
              { value: 'lapsable', label: 'Lapsable' }, 
              { value: 'non-lapsable', label: 'Non-lapsable' }
            ]}
            value={data.lapsable}
            onChange={(val) => handleUpdate({ lapsable: val })}
            name="accountType"
          />
          <RadioGroup 
            label="Closure Status" 
            options={[
              { value: 'closed', label: 'Closed' }, 
              { value: 'not-closed', label: 'Not Closed' }
            ]}
            value={data.closureStatus}
            onChange={(val) => handleUpdate({ closureStatus: val })}
            name="closureStatus"
          />
        </div>

        {(data.closureStatus === 'closed' || data.closureStatus === 'not-closed') && (
          <div style={{ marginTop: '2.5rem', paddingTop: '2rem', borderTop: '1px dashed hsl(var(--border))', animation: 'fadeIn 0.3s ease' }}>
            {data.closureStatus === 'closed' ? (
              <InputField 
                label="Date of Closure" 
                type="date" 
                value={data.closureDate} 
                onChange={(e) => handleUpdate({ closureDate: e.target.value })} 
              />
            ) : (
              <InputField 
                label="Reasons for Not Closing" 
                placeholder="Explain why accounts are still open" 
                value={data.closureReasons} 
                onChange={(e) => handleUpdate({ closureReasons: e.target.value })} 
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};
