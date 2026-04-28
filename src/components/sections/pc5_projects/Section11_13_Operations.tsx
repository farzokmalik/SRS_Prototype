import React from 'react';
import { useForm } from '../../../context/FormContext';

export const Section11_Marketing: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.pc5.s11;

  const handleUpdate = (updates: any) => {
    updateSection('pc5', { s11: { ...data, ...updates } });
  };

  return (
    <div className="card">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div>
          <label className="label">[PC-V-11.1] Marketing Strategies (as per PC-I)</label>
          <textarea 
            className="input" 
            style={{ background: 'hsl(var(--bg-main) / 0.3)', minHeight: '120px', paddingTop: '0.75rem' }} 
            placeholder="Pre-filled marketing strategies..."
            value={data.marketingPCI}
            onChange={(e) => handleUpdate({ marketingPCI: e.target.value })}
          />
        </div>

        <div style={{ padding: '1.5rem', background: 'hsl(var(--bg-main) / 0.2)', borderRadius: 'var(--radius-lg)', border: '1px solid hsl(var(--border))' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h4 style={{ fontSize: '0.875rem', fontWeight: 700, marginBottom: '0.25rem' }}>Difference from PC-I</h4>
              <p style={{ fontSize: '0.75rem', color: 'hsl(var(--text-muted))' }}>[PC-V-11.2] Do the current marketing activities differ significantly from what was planned in PC-I?</p>
            </div>
            <div style={{ display: 'flex', background: '#fff', padding: '0.4rem', borderRadius: 'var(--radius-md)', border: '1px solid hsl(var(--border))' }}>
              {[true, false].map((val) => (
                <button
                  key={val ? 'yes' : 'no'}
                  onClick={() => handleUpdate({ differsFromPCI: val })}
                  style={{
                    padding: '0.4rem 1.2rem',
                    borderRadius: 'var(--radius-sm)',
                    background: data.differsFromPCI === val ? 'hsl(var(--primary))' : 'transparent',
                    color: data.differsFromPCI === val ? '#fff' : 'hsl(var(--text-muted))',
                    border: 'none', fontWeight: 600, fontSize: '0.75rem', cursor: 'pointer'
                  }}
                >
                  {val ? 'YES' : 'NO'}
                </button>
              ))}
            </div>
          </div>

          {data.differsFromPCI && (
            <div style={{ marginTop: '1.5rem', animation: 'slideDown 0.3s ease' }}>
              <label className="label">[PC-V-11.3] Details of Strategy Changes</label>
              <textarea 
                className="input" 
                style={{ background: '#fff', minHeight: '100px', paddingTop: '0.75rem' }} 
                placeholder="Explain the reasons for change and the new strategy adopted..."
                value={data.details}
                onChange={(e) => handleUpdate({ details: e.target.value })}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const Section12_Maintenance: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.pc5.s12;

  const handleUpdate = (updates: any) => {
    updateSection('pc5', { s12: { ...data, ...updates } });
  };

  return (
    <div className="card">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div>
          <label className="label">[PC-V-12.1] Maintenance Arrangements Made</label>
          <textarea 
            className="input" 
            style={{ background: '#fff', minHeight: '120px', paddingTop: '0.75rem' }} 
            placeholder="Detail the plans, budgets, and agencies responsible for asset maintenance..."
            value={data.arrangements}
            onChange={(e) => handleUpdate({ arrangements: e.target.value })}
          />
        </div>

        <div style={{ padding: '1.5rem', background: 'hsl(var(--bg-main) / 0.2)', borderRadius: 'var(--radius-lg)', border: '1px solid hsl(var(--border))' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h4 style={{ fontSize: '0.875rem', fontWeight: 700, marginBottom: '0.25rem' }}>Annual Maintenance Performance</h4>
              <p style={{ fontSize: '0.75rem', color: 'hsl(var(--text-muted))' }}>[PC-V-12.2] Was the planned annual maintenance carried out during the reporting year?</p>
            </div>
            <div style={{ display: 'flex', background: '#fff', padding: '0.4rem', borderRadius: 'var(--radius-md)', border: '1px solid hsl(var(--border))' }}>
              {[true, false].map((val) => (
                <button
                  key={val ? 'yes' : 'no'}
                  onClick={() => handleUpdate({ annualMaintenance: val })}
                  style={{
                    padding: '0.4rem 1.2rem',
                    borderRadius: 'var(--radius-sm)',
                    background: data.annualMaintenance === val ? 'hsl(var(--primary))' : 'transparent',
                    color: data.annualMaintenance === val ? '#fff' : 'hsl(var(--text-muted))',
                    border: 'none', fontWeight: 600, fontSize: '0.75rem', cursor: 'pointer'
                  }}
                >
                  {val ? 'YES' : 'NO'}
                </button>
              ))}
            </div>
          </div>

          {!data.annualMaintenance && (
            <div style={{ marginTop: '1.5rem', animation: 'slideDown 0.3s ease' }}>
              <label className="label">[PC-V-12.3] Reasons for Non-Performance</label>
              <textarea 
                className="input" 
                style={{ background: '#fff', minHeight: '100px', paddingTop: '0.75rem' }} 
                placeholder="Explain the technical or budgetary reasons for not carrying out maintenance..."
                value={data.reasons}
                onChange={(e) => handleUpdate({ reasons: e.target.value })}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const Section13_OutputTargets: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.pc5.s13;

  const handleUpdate = (updates: any) => {
    updateSection('pc5', { s13: { ...data, ...updates } });
  };

  return (
    <div className="card">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div>
          <h4 style={{ fontSize: '0.875rem', fontWeight: 700, marginBottom: '0.25rem', color: 'hsl(var(--primary))' }}>Project Output Targets Achievement</h4>
          <p style={{ fontSize: '0.75rem', color: 'hsl(var(--text-muted))' }}>[PC-V-13.1] To what extent have the output targets for the reporting financial year been achieved?</p>
        </div>

        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {['Yes', 'No', 'Partially'].map((option) => (
            <label key={option} style={{ 
              flex: 1, 
              display: 'flex', 
              alignItems: 'center', 
              gap: '1rem', 
              padding: '1.25rem', 
              background: data.status === option ? 'hsl(var(--primary) / 0.05)' : '#fff',
              border: `1px solid ${data.status === option ? 'hsl(var(--primary))' : 'hsl(var(--border))'}`,
              borderRadius: 'var(--radius-lg)',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}>
              <input 
                type="radio" 
                checked={data.status === option}
                onChange={() => handleUpdate({ status: option })}
                style={{ width: '1.25rem', height: '1.25rem', accentColor: 'hsl(var(--primary))' }}
              />
              <span style={{ fontSize: '0.9375rem', fontWeight: 700, color: data.status === option ? 'hsl(var(--primary))' : 'hsl(var(--text-main))' }}>{option}</span>
            </label>
          ))}
        </div>

        {(data.status === 'No' || data.status === 'Partially') && (
          <div style={{ animation: 'slideDown 0.3s ease' }}>
            <label className="label">[PC-V-13.2] Reasons for Shortfall</label>
            <textarea 
              className="input" 
              style={{ background: '#fff', minHeight: '120px', paddingTop: '0.75rem' }} 
              placeholder="Provide detailed reasons for not achieving the targets..."
              value={data.reasons}
              onChange={(e) => handleUpdate({ reasons: e.target.value })}
            />
          </div>
        )}
      </div>
    </div>
  );
};
