import React from 'react';
import { useForm } from '../../../context/FormContext';
import { InputField } from '../../ui/FormElements';
import { Plus, Trash2 } from 'lucide-react';

export const Section19_PDHistory: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.pc4.s19;

  const handleUpdate = (updates: any) => {
    updateSection('pc4', { s19: { ...data, ...updates } });
  };

  const addRow = () => {
    handleUpdate({ pdHistory: [...(data.pdHistory || []), { name: '', fromDate: '', toDate: '' }] });
  };

  const removeRow = (index: number) => {
    handleUpdate({ pdHistory: data.pdHistory.filter((_: any, i: number) => i !== index) });
  };

  const updateRow = (index: number, updates: any) => {
    const newItems = [...data.pdHistory];
    newItems[index] = { ...newItems[index], ...updates };
    handleUpdate({ pdHistory: newItems });
  };

  return (
    <div className="card">
      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginBottom: '1.5rem' }}>
        <button className="btn btn-secondary" onClick={addRow} style={{ padding: '0.4rem 0.8rem', fontSize: '0.875rem' }}>
          <Plus size={16} /> Add PD
        </button>
      </div>
      <div className="table-responsive">
        <table className="table" style={{ borderCollapse: 'separate', borderSpacing: '1rem 0.75rem', marginTop: '-0.75rem', marginLeft: '-1rem', width: 'calc(100% + 1rem)' }}>
          <thead>
            <tr>
              <th style={{ width: '40%', background: 'transparent', border: 'none', color: 'hsl(var(--text-muted))', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', paddingBottom: '0.5rem', textAlign: 'left' }}>Name of Project Director</th>
              <th style={{ width: '25%', background: 'transparent', border: 'none', color: 'hsl(var(--text-muted))', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', paddingBottom: '0.5rem', textAlign: 'left' }}>From Date</th>
              <th style={{ width: '25%', background: 'transparent', border: 'none', color: 'hsl(var(--text-muted))', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', paddingBottom: '0.5rem', textAlign: 'left' }}>To Date</th>
              <th style={{ width: '10%', background: 'transparent', border: 'none', color: 'hsl(var(--text-muted))', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', paddingBottom: '0.5rem', textAlign: 'center' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.pdHistory.length === 0 && (
              <tr><td colSpan={4} style={{ textAlign: 'center', padding: '3rem', color: 'hsl(var(--text-muted))', background: 'hsl(var(--bg-main))', borderRadius: 'var(--radius-md)', border: '1px dashed hsl(var(--border))' }}>No PD history recorded</td></tr>
            )}
            {data.pdHistory.map((pd: any, idx: number) => (
              <tr key={idx}>
                <td style={{ padding: '0 0.5rem 0 0' }}><input className="input" style={{ background: '#fff' }} placeholder="Enter name" value={pd.name} onChange={(e) => updateRow(idx, { name: e.target.value })} /></td>
                <td style={{ padding: '0 0.5rem' }}><input type="date" className="input" style={{ background: '#fff' }} value={pd.fromDate} onChange={(e) => updateRow(idx, { fromDate: e.target.value })} /></td>
                <td style={{ padding: '0 0.5rem' }}><input type="date" className="input" style={{ background: '#fff' }} value={pd.toDate} onChange={(e) => updateRow(idx, { toDate: e.target.value })} /></td>
                <td style={{ padding: '0 0 0 0.5rem', textAlign: 'center' }}>
                  <button 
                    className="btn btn-secondary" 
                    onClick={() => removeRow(idx)} 
                    style={{ 
                      color: 'hsl(var(--error))', 
                      padding: '0.5rem', 
                      height: '42px', 
                      width: '42px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: '#fff'
                    }}
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const Section20_Assets: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.pc4.s20;

  const handleUpdate = (updates: any) => {
    updateSection('pc4', { s20: { ...data, ...updates } });
  };

  const addAsset = () => {
    handleUpdate({ assets: [...(data.assets || []), { name: '', type: 'Moveable' }] });
  };

  const removeAsset = (index: number) => {
    handleUpdate({ assets: data.assets.filter((_: any, i: number) => i !== index) });
  };

  const updateAsset = (index: number, updates: any) => {
    const newAssets = [...data.assets];
    newAssets[index] = { ...newAssets[index], ...updates };
    handleUpdate({ assets: newAssets });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div className="card">
        <div style={{}}>
          <InputField 
            label="Handing Over / Ownership Agency" 
            placeholder="Enter agency name" 
            value={data.assetOwnershipAgency}
            onChange={(e) => handleUpdate({ assetOwnershipAgency: e.target.value })}
          />
        </div>
      </div>

      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 600 }}>List of Assets</h3>
          <button className="btn btn-secondary" onClick={addAsset} style={{ padding: '0.4rem 0.8rem', fontSize: '0.875rem' }}>
            <Plus size={16} /> Add Asset
          </button>
        </div>
        <div className="table-responsive">
          <table className="table" style={{ borderCollapse: 'separate', borderSpacing: '1rem 0.75rem', marginTop: '-0.75rem', marginLeft: '-1rem', width: 'calc(100% + 1rem)' }}>
            <thead>
              <tr>
                <th style={{ width: '60%', background: 'transparent', border: 'none', color: 'hsl(var(--text-muted))', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', paddingBottom: '0.5rem', textAlign: 'left' }}>Asset Name / Description</th>
                <th style={{ width: '30%', background: 'transparent', border: 'none', color: 'hsl(var(--text-muted))', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', paddingBottom: '0.5rem', textAlign: 'left' }}>Nature</th>
                <th style={{ width: '10%', background: 'transparent', border: 'none', color: 'hsl(var(--text-muted))', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', paddingBottom: '0.5rem', textAlign: 'center' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.assets.length === 0 && (
                <tr><td colSpan={3} style={{ textAlign: 'center', padding: '3rem', color: 'hsl(var(--text-muted))', background: 'hsl(var(--bg-main))', borderRadius: 'var(--radius-md)', border: '1px dashed hsl(var(--border))' }}>No assets recorded</td></tr>
              )}
              {data.assets.map((asset: any, idx: number) => (
                <tr key={idx}>
                  <td style={{ padding: '0 0.5rem 0 0' }}><input className="input" style={{ background: '#fff' }} placeholder="e.g. Toyota Hilux" value={asset.name} onChange={(e) => updateAsset(idx, { name: e.target.value })} /></td>
                  <td style={{ padding: '0 0.5rem' }}>
                    <select className="input" style={{ background: '#fff' }} value={asset.type} onChange={(e) => updateAsset(idx, { type: e.target.value })}>
                      <option value="Moveable">Moveable</option>
                      <option value="Immoveable">Immoveable</option>
                    </select>
                  </td>
                  <td style={{ padding: '0 0 0 0.5rem', textAlign: 'center' }}>
                    <button 
                      className="btn btn-secondary" 
                      onClick={() => removeAsset(idx)} 
                      style={{ 
                        color: 'hsl(var(--error))', 
                        padding: '0.5rem', 
                        height: '42px', 
                        width: '42px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: '#fff'
                      }}
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
