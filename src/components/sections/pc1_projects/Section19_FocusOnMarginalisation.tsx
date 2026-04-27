import React from 'react';
import { useForm } from '../../../context/FormContext';

export const Section19_FocusOnMarginalisation: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.section19 || { responses: [] };
  const responses = data.responses || [];

  const handleUpdateResponse = (id: string, field: string, value: string) => {
    const updated = responses.map((r: any) => 
      r.id === id ? { ...r, [field]: value } : r
    );
    updateSection('section19', { responses: updated });
  };

  const categories = Array.from(new Set(responses.map((r: any) => r.category)));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
      
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
            <thead>
              <tr style={{ background: 'hsl(var(--bg-main))', borderBottom: '2px solid hsl(var(--border))', textAlign: 'left' }}>
                <th style={{ padding: '1rem', fontWeight: 700, color: 'hsl(var(--text-muted))', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', width: '80px' }}>SR. NO.</th>
                <th style={{ padding: '1rem', fontWeight: 700, color: 'hsl(var(--text-muted))', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>[PC-I-19.1] CRITERIA</th>
                <th style={{ padding: '1rem', fontWeight: 700, color: 'hsl(var(--text-muted))', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', width: '120px', textAlign: 'center' }}>[PC-I-19.2] YES / NO</th>
                <th style={{ padding: '1rem', fontWeight: 700, color: 'hsl(var(--text-muted))', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', width: '200px' }}>[PC-I-19.3] ACTION</th>
                <th style={{ padding: '1rem', fontWeight: 700, color: 'hsl(var(--text-muted))', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', width: '250px' }}>[PC-I-19.4] COMMENTS <span style={{ color: 'hsl(var(--error))' }}>*</span></th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category: any) => (
                <React.Fragment key={category}>
                  <tr style={{ background: 'hsl(var(--bg-main) / 0.5)' }}>
                    <td colSpan={5} style={{ padding: '0.75rem 1rem', fontWeight: 700, color: 'hsl(var(--text-main))', borderBottom: '1px solid hsl(var(--border))' }}>
                      {category}
                    </td>
                  </tr>
                  {responses
                    .filter((r: any) => r.category === category)
                    .map((row: any) => (
                      <tr key={row.id} style={{ borderBottom: '1px solid hsl(var(--border))' }}>
                        <td style={{ padding: '1rem', textAlign: 'center', color: 'hsl(var(--text-muted))' }}>
                          {row.id}
                        </td>
                        <td style={{ padding: '1rem', lineHeight: '1.5', color: 'hsl(var(--text-main))' }}>
                          {row.criteria}
                        </td>
                        <td style={{ padding: '1rem' }}>
                          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                            <label style={{ cursor: 'pointer' }}>
                              <input 
                                type="radio" 
                                name={`yesNo-${row.id}`} 
                                value="Yes" 
                                checked={row.yesNo === 'Yes'}
                                onChange={(e) => handleUpdateResponse(row.id, 'yesNo', e.target.value)}
                                style={{ accentColor: 'hsl(var(--accent))' }}
                              />
                            </label>
                            <label style={{ cursor: 'pointer' }}>
                              <input 
                                type="radio" 
                                name={`yesNo-${row.id}`} 
                                value="No" 
                                checked={row.yesNo === 'No'}
                                onChange={(e) => handleUpdateResponse(row.id, 'yesNo', e.target.value)}
                                style={{ accentColor: 'hsl(var(--accent))' }}
                              />
                            </label>
                          </div>
                        </td>
                        <td style={{ padding: '1rem' }}>
                          <select 
                            className="select"
                            style={{ padding: '0.4rem', fontSize: '0.8rem' }}
                            value={row.action}
                            onChange={(e) => handleUpdateResponse(row.id, 'action', e.target.value)}
                          >
                            <option value="">Choose...</option>
                            <option value="Action 1">Action 1</option>
                            <option value="Action 2">Action 2</option>
                          </select>
                        </td>
                        <td style={{ padding: '1rem' }}>
                          <textarea 
                            className="input"
                            style={{ minHeight: '60px', padding: '0.5rem', fontSize: '0.8rem', resize: 'vertical' }}
                            placeholder={row.commentsPlaceholder || 'Comments'}
                            value={row.comments}
                            onChange={(e) => handleUpdateResponse(row.id, 'comments', e.target.value)}
                          />
                        </td>
                      </tr>
                    ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    
      
    </div>
  );
};
