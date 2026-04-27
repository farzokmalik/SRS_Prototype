import React from 'react';
import { useForm } from '../../../context/FormContext';
import { InputField } from '../../ui/FormElements';

export const Section8_CapitalCost: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.pc4.s8;

  const handleUpdate = (updates: any) => {
    updateSection('pc4', { s8: { ...data, ...updates } });
  };

  const updateCost = (row: string, col: string, val: string) => {
    const newCosts = { ...data.capitalCost };
    const currentValues = { ...newCosts[row], [col]: val };
    
    // Auto-calculate Total if Local or FE changes
    if (col === 'local' || col === 'fe') {
      const total = (parseFloat(currentValues.local) || 0) + (parseFloat(currentValues.fe) || 0);
      currentValues.total = total.toFixed(2);
    }
    
    newCosts[row] = currentValues;
    handleUpdate({ capitalCost: newCosts });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div className="card">
        <div className="table-responsive">
          <table className="table" style={{ borderCollapse: 'separate', borderSpacing: '1rem 0.825rem', marginTop: '-0.825rem', marginLeft: '-1rem', width: 'calc(100% + 1rem)' }}>
            <thead>
              <tr>
                <th style={{ width: '20%', background: 'transparent', border: 'none', color: 'hsl(var(--text-muted))', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', paddingBottom: '0.5rem', textAlign: 'left' }}>Cost Type</th>
                <th style={{ width: '26.6%', background: 'transparent', border: 'none', color: 'hsl(var(--text-muted))', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', paddingBottom: '0.5rem', textAlign: 'left' }}>Local</th>
                <th style={{ width: '26.6%', background: 'transparent', border: 'none', color: 'hsl(var(--text-muted))', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', paddingBottom: '0.5rem', textAlign: 'left' }}>FE-Grant</th>
                <th style={{ width: '26.6%', background: 'transparent', border: 'none', color: 'hsl(var(--text-muted))', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', paddingBottom: '0.5rem', textAlign: 'left' }}>Total</th>
              </tr>
            </thead>
            <tbody>
              {['original', 'revised', 'actual'].map((row) => (
                <tr key={row}>
                  <td style={{ textTransform: 'capitalize', fontWeight: 600, color: 'hsl(var(--text-main))', paddingRight: '1rem' }}>{row}</td>
                  <td><input type="number" className="input" style={{ background: '#fff' }} placeholder="0.00" value={data.capitalCost[row].local} onChange={(e) => updateCost(row, 'local', e.target.value)} /></td>
                  <td><input type="number" className="input" style={{ background: '#fff' }} placeholder="0.00" value={data.capitalCost[row].fe} onChange={(e) => updateCost(row, 'fe', e.target.value)} /></td>
                  <td><input type="number" className="input" style={{ background: '#fff', fontWeight: 600 }} placeholder="0.00" value={data.capitalCost[row].total} readOnly /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="card">
        <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '1.25rem' }}>Climate Co-benefits Expenditure</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          <InputField 
            label="Adaptation Expenditure" 
            placeholder="0.00" 
            value={data.climateCoBenefits.adaptation}
            onChange={(e) => handleUpdate({ climateCoBenefits: { ...data.climateCoBenefits, adaptation: e.target.value } })}
          />
          <InputField 
            label="Mitigation Expenditure" 
            placeholder="0.00" 
            value={data.climateCoBenefits.mitigation}
            onChange={(e) => handleUpdate({ climateCoBenefits: { ...data.climateCoBenefits, mitigation: e.target.value } })}
          />
        </div>
      </div>
    </div>
  );
};
