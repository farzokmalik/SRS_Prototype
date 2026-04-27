import React from 'react';
import { useForm } from '../../../context/FormContext';
import { Plus, Trash2 } from 'lucide-react';

export const Section5_PhysicalOutput: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.pc5p.s5;

  const handleUpdate = (updates: any) => {
    updateSection('pc5p', { s5: [...updates] });
  };

  const addItem = () => {
    handleUpdate([...data, { item: '', unit: '', planned: '', actual: '' }]);
  };

  const updateItem = (idx: number, updates: any) => {
    const newData = [...data];
    newData[idx] = { ...newData[idx], ...updates };
    handleUpdate(newData);
  };

  const removeItem = (idx: number) => {
    handleUpdate(data.filter((_: any, i: number) => i !== idx));
  };

  return (
    <div className="card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
        <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'hsl(var(--primary))', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Physical Output Analysis</h3>
        <button className="btn btn-secondary" onClick={addItem} style={{ padding: '0.5rem 1rem', fontSize: '0.8125rem' }}>
          <Plus size={16} /> Add Output Item
        </button>
      </div>

      <div className="table-responsive">
        <table className="table" style={{ borderCollapse: 'separate', borderSpacing: '1rem 0.75rem', marginTop: '-1rem', marginLeft: '-1rem', width: 'calc(100% + 1rem)' }}>
          <thead>
            <tr>
              <th style={{ width: '30%', background: 'transparent', border: 'none', color: 'hsl(var(--text-muted))', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', paddingBottom: '0.5rem', textAlign: 'left' }}>Output Item / Facility</th>
              <th style={{ width: '15%', background: 'transparent', border: 'none', color: 'hsl(var(--text-muted))', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', paddingBottom: '0.5rem', textAlign: 'left' }}>Unit</th>
              <th style={{ width: '15%', background: 'transparent', border: 'none', color: 'hsl(var(--text-muted))', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', paddingBottom: '0.5rem', textAlign: 'left' }}>Planned Qty</th>
              <th style={{ width: '15%', background: 'transparent', border: 'none', color: 'hsl(var(--text-muted))', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', paddingBottom: '0.5rem', textAlign: 'left' }}>Actual Qty</th>
              <th style={{ width: '15%', background: 'transparent', border: 'none', color: 'hsl(var(--text-muted))', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', paddingBottom: '0.5rem', textAlign: 'left' }}>Variance</th>
              <th style={{ width: '50px' }}></th>
            </tr>
          </thead>
          <tbody>
            {data.length === 0 && (
              <tr><td colSpan={6} style={{ textAlign: 'center', padding: '3rem', color: 'hsl(var(--text-muted))', background: 'hsl(var(--bg-main) / 0.3)', borderRadius: 'var(--radius-lg)', border: '1px dashed hsl(var(--border))' }}>No output items recorded yet.</td></tr>
            )}
            {data.map((row: any, idx: number) => {
              const variance = (Number(row.actual || 0) - Number(row.planned || 0)).toFixed(2);
              return (
                <tr key={idx}>
                  <td style={{ padding: '0' }}><input className="input" style={{ background: '#fff' }} placeholder="e.g. Roads constructed" value={row.item} onChange={(e) => updateItem(idx, { item: e.target.value })} /></td>
                  <td style={{ padding: '0' }}><input className="input" style={{ background: '#fff' }} placeholder="Km" value={row.unit} onChange={(e) => updateItem(idx, { unit: e.target.value })} /></td>
                  <td style={{ padding: '0' }}><input type="number" className="input" style={{ background: '#fff' }} placeholder="0" value={row.planned} onChange={(e) => updateItem(idx, { planned: e.target.value })} /></td>
                  <td style={{ padding: '0' }}><input type="number" className="input" style={{ background: '#fff' }} placeholder="0" value={row.actual} onChange={(e) => updateItem(idx, { actual: e.target.value })} /></td>
                  <td style={{ padding: '0' }}>
                    <div className="input" style={{ background: 'hsl(var(--bg-main) / 0.3)', display: 'flex', alignItems: 'center', fontWeight: 700, color: Number(variance) < 0 ? 'hsl(var(--error))' : Number(variance) > 0 ? 'hsl(var(--success))' : 'inherit' }}>
                      {variance}
                    </div>
                  </td>
                  <td style={{ padding: '0', textAlign: 'center' }}>
                    <button className="btn btn-secondary" onClick={() => removeItem(idx)} style={{ color: 'hsl(var(--error))', padding: '0.5rem', border: 'none', background: 'transparent' }}><Trash2 size={16} /></button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const Section6_ProjectIncome: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.pc5p.s6;

  const handleUpdate = (updates: any) => {
    updateSection('pc5p', { s6: [...updates] });
  };

  const addItem = () => {
    handleUpdate([...data, { type: '', planned: '', assumptions: '', actual: '' }]);
  };

  const updateItem = (idx: number, updates: any) => {
    const newData = [...data];
    newData[idx] = { ...newData[idx], ...updates };
    handleUpdate(newData);
  };

  const removeItem = (idx: number) => {
    handleUpdate(data.filter((_: any, i: number) => i !== idx));
  };

  const totalPlanned = data.reduce((sum: number, row: any) => sum + Number(row.planned || 0), 0);
  const totalActual = data.reduce((sum: number, row: any) => sum + Number(row.actual || 0), 0);
  const totalVariance = (totalActual - totalPlanned).toFixed(2);

  return (
    <div className="card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
        <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'hsl(var(--primary))', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Program Income Analysis</h3>
        <button className="btn btn-secondary" onClick={addItem} style={{ padding: '0.5rem 1rem', fontSize: '0.8125rem' }}>
          <Plus size={16} /> Add Income Source
        </button>
      </div>

      <div className="table-responsive">
        <table className="table" style={{ borderCollapse: 'separate', borderSpacing: '1rem 0.75rem', marginTop: '-1rem', marginLeft: '-1rem', width: 'calc(100% + 1rem)' }}>
          <thead>
            <tr>
              <th style={{ width: '25%', background: 'transparent', border: 'none', color: 'hsl(var(--text-muted))', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', paddingBottom: '0.5rem', textAlign: 'left' }}>Source / Type</th>
              <th style={{ width: '15%', background: 'transparent', border: 'none', color: 'hsl(var(--text-muted))', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', paddingBottom: '0.5rem', textAlign: 'left' }}>Planned (M)</th>
              <th style={{ width: '25%', background: 'transparent', border: 'none', color: 'hsl(var(--text-muted))', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', paddingBottom: '0.5rem', textAlign: 'left' }}>Assumptions</th>
              <th style={{ width: '15%', background: 'transparent', border: 'none', color: 'hsl(var(--text-muted))', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', paddingBottom: '0.5rem', textAlign: 'left' }}>Actual (M)</th>
              <th style={{ width: '15%', background: 'transparent', border: 'none', color: 'hsl(var(--text-muted))', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', paddingBottom: '0.5rem', textAlign: 'left' }}>Variance</th>
              <th style={{ width: '50px' }}></th>
            </tr>
          </thead>
          <tbody>
            {data.length === 0 && (
              <tr><td colSpan={6} style={{ textAlign: 'center', padding: '3rem', color: 'hsl(var(--text-muted))', background: 'hsl(var(--bg-main) / 0.3)', borderRadius: 'var(--radius-lg)', border: '1px dashed hsl(var(--border))' }}>No income sources recorded yet.</td></tr>
            )}
            {data.map((row: any, idx: number) => {
              const variance = (Number(row.actual || 0) - Number(row.planned || 0)).toFixed(2);
              return (
                <tr key={idx}>
                  <td style={{ padding: '0' }}><input className="input" style={{ background: '#fff' }} placeholder="Income type" value={row.type} onChange={(e) => updateItem(idx, { type: e.target.value })} /></td>
                  <td style={{ padding: '0' }}><input type="number" className="input" style={{ background: '#fff' }} placeholder="0.00" value={row.planned} onChange={(e) => updateItem(idx, { planned: e.target.value })} /></td>
                  <td style={{ padding: '0' }}><input className="input" style={{ background: '#fff' }} placeholder="Basis of calc" value={row.assumptions} onChange={(e) => updateItem(idx, { assumptions: e.target.value })} /></td>
                  <td style={{ padding: '0' }}><input type="number" className="input" style={{ background: '#fff' }} placeholder="0.00" value={row.actual} onChange={(e) => updateItem(idx, { actual: e.target.value })} /></td>
                  <td style={{ padding: '0' }}>
                    <div className="input" style={{ background: 'hsl(var(--bg-main) / 0.3)', display: 'flex', alignItems: 'center', fontWeight: 700, color: Number(variance) < 0 ? 'hsl(var(--error))' : Number(variance) > 0 ? 'hsl(var(--success))' : 'inherit' }}>
                      {variance}
                    </div>
                  </td>
                  <td style={{ padding: '0', textAlign: 'center' }}>
                    <button className="btn btn-secondary" onClick={() => removeItem(idx)} style={{ color: 'hsl(var(--error))', padding: '0.5rem', border: 'none', background: 'transparent' }}><Trash2 size={16} /></button>
                  </td>
                </tr>
              );
            })}
          </tbody>
          {data.length > 0 && (
            <tfoot>
              <tr>
                <td style={{ textAlign: 'right', fontWeight: 800, color: 'hsl(var(--primary))', fontSize: '0.75rem', textTransform: 'uppercase' }}>Grand Totals (M):</td>
                <td style={{ padding: '0.75rem', fontWeight: 800, color: 'hsl(var(--primary))' }}>{totalPlanned.toFixed(2)}</td>
                <td style={{ background: 'transparent' }}></td>
                <td style={{ padding: '0.75rem', fontWeight: 800, color: 'hsl(var(--primary))' }}>{totalActual.toFixed(2)}</td>
                <td style={{ padding: '0.75rem', fontWeight: 800, color: Number(totalVariance) < 0 ? 'hsl(var(--error))' : 'hsl(var(--primary))' }}>{totalVariance}</td>
                <td style={{ background: 'transparent' }}></td>
              </tr>
            </tfoot>
          )}
        </table>
      </div>
    </div>
  );
};

export const Section7_EconomicBenefits: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.pc5p.s7;

  const handleUpdate = (updates: any) => {
    updateSection('pc5p', { s7: [...updates] });
  };

  const addItem = () => {
    handleUpdate([...data, { description: '', unit: '', planned: '', actual: '' }]);
  };

  const updateItem = (idx: number, updates: any) => {
    const newData = [...data];
    newData[idx] = { ...newData[idx], ...updates };
    handleUpdate(newData);
  };

  const removeItem = (idx: number) => {
    handleUpdate(data.filter((_: any, i: number) => i !== idx));
  };

  return (
    <div className="card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
        <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'hsl(var(--primary))', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Economic Benefits</h3>
        <button className="btn btn-secondary" onClick={addItem} style={{ padding: '0.5rem 1rem', fontSize: '0.8125rem' }}>
          <Plus size={16} /> Add Economic Benefit
        </button>
      </div>

      <div className="table-responsive">
        <table className="table" style={{ borderCollapse: 'separate', borderSpacing: '1rem 0.75rem', marginTop: '-1rem', marginLeft: '-1rem', width: 'calc(100% + 1rem)' }}>
          <thead>
            <tr>
              <th style={{ width: '40%', background: 'transparent', border: 'none', color: 'hsl(var(--text-muted))', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', paddingBottom: '0.5rem', textAlign: 'left' }}>Benefit Description</th>
              <th style={{ width: '20%', background: 'transparent', border: 'none', color: 'hsl(var(--text-muted))', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', paddingBottom: '0.5rem', textAlign: 'left' }}>Unit</th>
              <th style={{ width: '15%', background: 'transparent', border: 'none', color: 'hsl(var(--text-muted))', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', paddingBottom: '0.5rem', textAlign: 'left' }}>Planned</th>
              <th style={{ width: '15%', background: 'transparent', border: 'none', color: 'hsl(var(--text-muted))', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', paddingBottom: '0.5rem', textAlign: 'left' }}>Actual</th>
              <th style={{ width: '50px' }}></th>
            </tr>
          </thead>
          <tbody>
            {data.length === 0 && (
              <tr><td colSpan={5} style={{ textAlign: 'center', padding: '3rem', color: 'hsl(var(--text-muted))', background: 'hsl(var(--bg-main) / 0.3)', borderRadius: 'var(--radius-lg)', border: '1px dashed hsl(var(--border))' }}>No economic benefits recorded.</td></tr>
            )}
            {data.map((row: any, idx: number) => (
              <tr key={idx}>
                <td style={{ padding: '0' }}><input className="input" style={{ background: '#fff' }} placeholder="Benefit details" value={row.description} onChange={(e) => updateItem(idx, { description: e.target.value })} /></td>
                <td style={{ padding: '0' }}><input className="input" style={{ background: '#fff' }} placeholder="Unit" value={row.unit} onChange={(e) => updateItem(idx, { unit: e.target.value })} /></td>
                <td style={{ padding: '0' }}><input type="number" className="input" style={{ background: '#fff' }} placeholder="0" value={row.planned} onChange={(e) => updateItem(idx, { planned: e.target.value })} /></td>
                <td style={{ padding: '0' }}><input type="number" className="input" style={{ background: '#fff' }} placeholder="0" value={row.actual} onChange={(e) => updateItem(idx, { actual: e.target.value })} /></td>
                <td style={{ padding: '0', textAlign: 'center' }}>
                  <button className="btn btn-secondary" onClick={() => removeItem(idx)} style={{ color: 'hsl(var(--error))', padding: '0.5rem', border: 'none', background: 'transparent' }}><Trash2 size={16} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
