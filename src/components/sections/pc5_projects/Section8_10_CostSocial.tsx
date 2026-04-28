import React from 'react';
import { useForm } from '../../../context/FormContext';
import { Plus, Trash2, ShieldCheck } from 'lucide-react';

export const Section8_SocialBenefits: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.pc5.s8;

  const handleUpdate = (updates: any) => {
    updateSection('pc5', { s8: [...updates] });
  };

  const addItem = () => {
    handleUpdate([...data, { description: '', targetGroup: '', planned: '', actual: '', extentMet: '' }]);
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
        <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'hsl(var(--primary))', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Social Benefits Analysis</h3>
        <button className="btn btn-secondary" onClick={addItem} style={{ padding: '0.5rem 1rem', fontSize: '0.8125rem' }}>
          <Plus size={16} /> Add Social Benefit
        </button>
      </div>

      <div className="table-responsive">
        <table className="table" style={{ borderCollapse: 'separate', borderSpacing: '1rem 0.75rem', marginTop: '-1rem', marginLeft: '-1rem', width: 'calc(100% + 1rem)' }}>
          <thead>
            <tr>
              {[
                { code: 'PC-V-8.1', label: 'Benefit Description', w: '25%' },
                { code: 'PC-V-8.2', label: 'Target Group', w: '20%' },
                { code: 'PC-V-8.3', label: 'Planned Target', w: '15%' },
                { code: 'PC-V-8.4', label: 'Actual Achievement', w: '15%' },
                { code: 'PC-V-8.5', label: 'Extent Met (%)', w: '15%' },
              ].map(({ code, label, w }) => (
                <th key={code} style={{ width: w, background: 'transparent', border: 'none', paddingBottom: '0.5rem', textAlign: 'left', verticalAlign: 'bottom' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                    <span style={{ fontSize: '0.58rem', fontWeight: 700, color: 'hsl(var(--primary))', letterSpacing: '0.02em', whiteSpace: 'nowrap' }}>[{code}]</span>
                    <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'hsl(var(--text-muted))' }}>{label}</span>
                  </div>
                </th>
              ))}
              <th style={{ width: '50px' }}></th>
            </tr>
          </thead>
          <tbody>
            {data.length === 0 && (
              <tr><td colSpan={6} style={{ textAlign: 'center', padding: '3rem', color: 'hsl(var(--text-muted))', background: 'hsl(var(--bg-main) / 0.3)', borderRadius: 'var(--radius-lg)', border: '1px dashed hsl(var(--border))' }}>No social benefits recorded.</td></tr>
            )}
            {data.map((row: any, idx: number) => (
              <tr key={idx}>
                <td style={{ padding: '0' }}><input className="input" style={{ background: '#fff' }} placeholder="Benefit details" value={row.description} onChange={(e) => updateItem(idx, { description: e.target.value })} /></td>
                <td style={{ padding: '0' }}><input className="input" style={{ background: '#fff' }} placeholder="Beneficiary group" value={row.targetGroup} onChange={(e) => updateItem(idx, { targetGroup: e.target.value })} /></td>
                <td style={{ padding: '0' }}><input className="input" style={{ background: '#fff' }} placeholder="Target" value={row.planned} onChange={(e) => updateItem(idx, { planned: e.target.value })} /></td>
                <td style={{ padding: '0' }}><input className="input" style={{ background: '#fff' }} placeholder="Actual" value={row.actual} onChange={(e) => updateItem(idx, { actual: e.target.value })} /></td>
                <td style={{ padding: '0' }}><input type="number" className="input" style={{ background: '#fff' }} placeholder="0-100" value={row.extentMet} onChange={(e) => updateItem(idx, { extentMet: e.target.value })} /></td>
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

export const Section9_ClimateResilience: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.pc5.s9;

  const handleUpdate = (updates: any) => {
    updateSection('pc5', { s9: { ...data, ...updates } });
  };

  const renderClimateTable = (title: string, dataKey: 'adaptation' | 'mitigation', icon: React.ReactNode, prefixNo: number) => {
    const items = data[dataKey] || [];
    const updateItem = (idx: number, updates: any) => {
      const newItems = [...items];
      newItems[idx] = { ...newItems[idx], ...updates };
      handleUpdate({ [dataKey]: newItems });
    };
    const addItem = () => handleUpdate({ [dataKey]: [...items, { activity: '', planned: '', actual: '', extentMet: '' }] });
    const removeItem = (idx: number) => handleUpdate({ [dataKey]: items.filter((_: any, i: number) => i !== idx) });

    return (
      <div style={{ marginBottom: '3rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {icon}
            <h4 style={{ fontSize: '0.875rem', fontWeight: 700, color: 'hsl(var(--text-main))' }}>{title} Co-benefits</h4>
          </div>
          <button className="btn btn-secondary" onClick={addItem} style={{ padding: '0.4rem 0.8rem', fontSize: '0.75rem' }}>
            <Plus size={14} /> Add {title} Activity
          </button>
        </div>
        <div className="table-responsive">
          <table className="table" style={{ borderCollapse: 'separate', borderSpacing: '0.75rem' }}>
            <thead>
              <tr>
                {[
                  { code: `PC-V-9.${prefixNo}`, label: 'Activity Description', w: '40%' },
                  { code: `PC-V-9.${prefixNo + 1}`, label: 'Planned', w: '20%' },
                  { code: `PC-V-9.${prefixNo + 2}`, label: 'Actual', w: '20%' },
                  { code: `PC-V-9.${prefixNo + 3}`, label: 'Extent Met (%)', w: '15%' },
                ].map(({ code, label, w }) => (
                  <th key={code} style={{ width: w, background: 'transparent', border: 'none', paddingBottom: '0.4rem', textAlign: 'left', verticalAlign: 'bottom' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                      <span style={{ fontSize: '0.58rem', fontWeight: 700, color: 'hsl(var(--primary))', letterSpacing: '0.02em', whiteSpace: 'nowrap' }}>[{code}]</span>
                      <span style={{ fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'hsl(var(--text-muted))' }}>{label}</span>
                    </div>
                  </th>
                ))}
                <th style={{ width: '5%' }}></th>
              </tr>
            </thead>
            <tbody>
              {items.length === 0 && (
                <tr><td colSpan={5} style={{ textAlign: 'center', padding: '2rem', color: 'hsl(var(--text-muted))', border: '1px dashed hsl(var(--border))', borderRadius: '8px' }}>No co-benefits recorded.</td></tr>
              )}
              {items.map((row: any, idx: number) => (
                <tr key={idx}>
                  <td><input className="input" style={{ background: '#fff' }} value={row.activity} onChange={(e) => updateItem(idx, { activity: e.target.value })} /></td>
                  <td><input className="input" style={{ background: '#fff' }} value={row.planned} onChange={(e) => updateItem(idx, { planned: e.target.value })} /></td>
                  <td><input className="input" style={{ background: '#fff' }} value={row.actual} onChange={(e) => updateItem(idx, { actual: e.target.value })} /></td>
                  <td><input type="number" className="input" style={{ background: '#fff' }} value={row.extentMet} onChange={(e) => updateItem(idx, { extentMet: e.target.value })} /></td>
                  <td style={{ textAlign: 'center' }}><button className="btn btn-secondary" onClick={() => removeItem(idx)} style={{ color: 'hsl(var(--error))', border: 'none', background: 'transparent' }}><Trash2 size={16} /></button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  return (
    <div className="card">
      <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'hsl(var(--primary))', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '2.5rem' }}>Climate Resilience Performance</h3>
      
      {renderClimateTable('Adaptation', 'adaptation', <ShieldCheck size={18} color="hsl(var(--primary))" />, 1)}
      {renderClimateTable('Mitigation', 'mitigation', <ShieldCheck size={18} color="hsl(var(--success))" />, 5)}

      <div style={{ padding: '2rem', background: 'hsl(var(--bg-main) / 0.3)', borderRadius: 'var(--radius-lg)', border: '1px solid hsl(var(--border))' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <div>
            <h4 style={{ fontSize: '0.875rem', fontWeight: 700, marginBottom: '0.25rem' }}>Climate-Induced Disasters</h4>
            <p style={{ fontSize: '0.75rem', color: 'hsl(var(--text-muted))' }}>[PC-V-9.9] Has the project faced any climate-induced disasters during the reporting year?</p>
          </div>
          <div style={{ display: 'flex', background: '#fff', padding: '0.4rem', borderRadius: 'var(--radius-md)', border: '1px solid hsl(var(--border))' }}>
            {[true, false].map((val) => (
              <button
                key={val ? 'yes' : 'no'}
                onClick={() => handleUpdate({ disasterOccurred: val })}
                style={{
                  padding: '0.4rem 1.2rem',
                  borderRadius: 'var(--radius-sm)',
                  background: data.disasterOccurred === val ? 'hsl(var(--primary))' : 'transparent',
                  color: data.disasterOccurred === val ? '#fff' : 'hsl(var(--text-muted))',
                  border: 'none', fontWeight: 600, fontSize: '0.75rem', cursor: 'pointer'
                }}
              >
                {val ? 'YES' : 'NO'}
              </button>
            ))}
          </div>
        </div>

        {data.disasterOccurred && (
          <div style={{ animation: 'slideDown 0.3s ease' }}>
            <label className="label">[PC-V-9.10] Risks & Mitigation Measures Taken</label>
            <textarea 
              className="input" 
              style={{ background: '#fff', minHeight: '120px', paddingTop: '0.75rem' }} 
              placeholder="Detail the risks encountered and the mitigation measures implemented..."
              value={data.disasterDetails}
              onChange={(e) => handleUpdate({ disasterDetails: e.target.value })}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export const Section10_CostPerUnit: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.pc5.s10;

  const handleUpdate = (updates: any) => {
    updateSection('pc5', { s10: { ...data, ...updates } });
  };

  const variance = (Number(data.actualCost || 0) - Number(data.plannedCost || 0)).toFixed(2);

  return (
    <div className="card">
      <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'hsl(var(--primary))', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '2.5rem' }}>Cost per Unit Performance</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div>
          <label className="label">[PC-V-10.1] Unit Type / Definition</label>
          <input className="input" style={{ background: '#fff' }} placeholder="e.g. Per Kilometer of Road / Per Student" value={data.unitType} onChange={(e) => handleUpdate({ unitType: e.target.value })} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', alignItems: 'end' }}>
          <div>
            <label className="label">[PC-V-10.2] Planned Cost per Unit (PKR)</label>
            <input type="number" className="input" style={{ background: '#fff' }} placeholder="0.00" value={data.plannedCost} onChange={(e) => handleUpdate({ plannedCost: e.target.value })} />
          </div>
          <div>
            <label className="label">[PC-V-10.3] Actual Cost per Unit (PKR)</label>
            <input type="number" className="input" style={{ background: '#fff' }} placeholder="0.00" value={data.actualCost} onChange={(e) => handleUpdate({ actualCost: e.target.value })} />
          </div>
          <div>
            <label className="label">[PC-V-10.4] Unit Cost Variance</label>
            <div className="input" style={{ background: 'hsl(var(--bg-main) / 0.3)', display: 'flex', alignItems: 'center', fontWeight: 700, color: Number(variance) > 0 ? 'hsl(var(--error))' : 'hsl(var(--success))' }}>{variance}</div>
          </div>
          <div>
            <label className="label">[PC-V-10.5] Weighted Cost of Capital (%)</label>
            <input type="number" className="input" style={{ background: '#fff' }} placeholder="0.00" value={data.wacc} onChange={(e) => handleUpdate({ wacc: e.target.value })} />
          </div>
        </div>
      </div>
    </div>
  );
};
