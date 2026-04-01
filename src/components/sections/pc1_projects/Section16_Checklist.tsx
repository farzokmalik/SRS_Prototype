import React from 'react';
import { useForm } from '../../../context/FormContext';

const CHECKLIST_ITEMS = [
  'Signature of the Administrative Secretary',
  'Signature of the Chief Engineer for RCE',
  'Location Map',
  'Implementation Schedule (Gantt Chart)',
  'Procurement Plan',
  'HR Management Plan',
  'Implementation Plan',
  'M&E Plan',
  'Risk Mitigation Plan',
  'Year-Wise Financial Phasing',
  'Year-Wise Physical Phasing',
  'Environmental Impact Analysis',
  'Economic Analysis / Financial Analysis'
];

export const Section16_Checklist: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.section16;

  const handleUpdate = (idx: number, field: string, value: any) => {
    const newList = [...(data.checklist || [])];
    if (!newList[idx]) newList[idx] = { item: CHECKLIST_ITEMS[idx], status: '', paging: '' };
    newList[idx] = { ...newList[idx], [field]: value };
    updateSection('section16', { checklist: newList });
  };

  return (
    <div className="card">
       <h3 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          Initial Scrutiny Checklist
       </h3>
       
       <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ textAlign: 'left', borderBottom: '2px solid var(--border)' }}>
              <th style={{ padding: '1rem', fontSize: '0.875rem' }}>Item Description</th>
              <th style={{ padding: '1rem', fontSize: '0.875rem' }}>Yes / No</th>
              <th style={{ padding: '1rem', fontSize: '0.875rem' }}>Paging</th>
            </tr>
          </thead>
          <tbody>
            {CHECKLIST_ITEMS.map((item, idx) => {
              const val = (data.checklist || [])[idx] || { status: '', paging: '' };
              return (
                <tr key={idx} style={{ borderBottom: '1px solid var(--border)' }}>
                  <td style={{ padding: '1rem', fontSize: '0.875rem' }}>{item}</td>
                  <td style={{ padding: '1rem' }}>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                       <label style={{ display: 'flex', gap: '0.25rem', fontSize: '0.875rem' }}>
                         <input type="radio" name={`s-${idx}`} value="Yes" checked={val.status === 'Yes'} onChange={() => handleUpdate(idx, 'status', 'Yes')} /> Yes
                       </label>
                       <label style={{ display: 'flex', gap: '0.25rem', fontSize: '0.875rem' }}>
                         <input type="radio" name={`s-${idx}`} value="No" checked={val.status === 'No'} onChange={() => handleUpdate(idx, 'status', 'No')} /> No
                       </label>
                    </div>
                  </td>
                  <td style={{ padding: '1rem' }}>
                    <input 
                      className="input" 
                      style={{ padding: '0.4rem', fontSize: '0.875rem' }} 
                      value={val.paging}
                      disabled={val.status !== 'Yes'}
                      onChange={(e) => handleUpdate(idx, 'paging', e.target.value)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
       </table>
    </div>
  );
};
