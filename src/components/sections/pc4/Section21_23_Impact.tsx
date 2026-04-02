import React from 'react';
import { useForm } from '../../../context/FormContext';

export const Section21_ImpactEvaluation: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.pc4.s21;

  const handleUpdate = (updates: any) => {
    updateSection('pc4', { s21: { ...data, ...updates } });
  };

  const impactFields = [
    { id: 'social', label: 'Social Impact (e.g. Health, Education)' },
    { id: 'economic', label: 'Economic Impact (e.g. Income, Growth)' },
    { id: 'environmental', label: 'Environmental Impact' },
    { id: 'technological', label: 'Technological Impact' },
    { id: 'regional', label: 'Regional Development Impact' },
    { id: 'sectoral', label: 'Sectoral Development Impact' },
    { id: 'employment', label: 'Employment Generation Impact' }
  ];

  return (
    <div className="card">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {impactFields.map((field) => (
          <div key={field.id}>
            <label className="label">{field.label}</label>
            <textarea 
              className="input" 
              style={{ minHeight: '100px', paddingTop: '0.5rem' }} 
              placeholder={`Describe the ${field.label.toLowerCase()} of the project...`}
              value={data[field.id as keyof typeof data]}
              onChange={(e) => handleUpdate({ [field.id]: e.target.value })}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export const Section22_ImpactAnalysis: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.pc4.s22;

  const handleUpdate = (updates: any) => {
    updateSection('pc4', { s22: { ...data, ...updates } });
  };

  return (
    <div className="card">
      <div style={{}}>
        <p style={{ fontSize: '0.875rem', color: 'hsl(var(--text-muted))', marginBottom: '1rem' }}>
          Provide a detailed analysis of the project's overall impact on the target population and sector.
        </p>
        <textarea 
          className="input" 
          style={{ minHeight: '400px', paddingTop: '0.75rem', lineHeight: '1.6' }} 
          placeholder="Enter detailed impact analysis..."
          value={data.impactAnalysis}
          onChange={(e) => handleUpdate({ impactAnalysis: e.target.value })}
        />
      </div>
    </div>
  );
};

export const Section23_EconomicAnalysis: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.pc4.s23;

  const handleUpdate = (updates: any) => {
    updateSection('pc4', { s23: { ...data, ...updates } });
  };

  const updateField = (row: string, col: string, val: string) => {
    const newValues = { ...data };
    (newValues as any)[row] = { ...(newValues as any)[row], [col]: val };
    handleUpdate(newValues);
  };

  const sections = [
    {
      title: 'a) Financial Analysis',
      metrics: [
        { id: 'npvFinancial', label: 'Net Present Value (NPV)' },
        { id: 'bcrFinancial', label: 'Benefit Cost Ratio (BCR)' },
        { id: 'ifrr', label: 'Internal Financial Rate of Return (IFRR)' }
      ]
    },
    {
      title: 'b) Economic Analysis',
      metrics: [
        { id: 'npvEconomic', label: 'Net Present Value (NPV)' },
        { id: 'bcrEconomic', label: 'Benefit Cost Ratio (BCR)' },
        { id: 'ierr', label: 'Internal Economic Rate of Return (IERR)' }
      ]
    },
    {
      title: 'c) Others',
      metrics: [
        { id: 'unitCost', label: 'Unit Cost' }
      ]
    }
  ];

  return (
    <div className="card">
      <div className="table-responsive">
        <table className="table" style={{ borderCollapse: 'separate', borderSpacing: '1.5rem 0.825rem', marginTop: '-0.825rem', marginLeft: '-1.5rem', width: 'calc(100% + 1.5rem)' }}>
          <thead>
            <tr>
              <th style={{ width: '40%', background: 'transparent', border: 'none', color: 'hsl(var(--text-muted))', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', paddingBottom: '0.5rem', textAlign: 'left' }}>Analysis Metric</th>
              <th style={{ width: '30%', background: 'transparent', border: 'none', color: 'hsl(var(--text-muted))', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', paddingBottom: '0.5rem', textAlign: 'left' }}>As per PC-I</th>
              <th style={{ width: '30%', background: 'transparent', border: 'none', color: 'hsl(var(--text-muted))', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', paddingBottom: '0.5rem', textAlign: 'left' }}>After Completion</th>
            </tr>
          </thead>
          <tbody>
            {sections.map((section, sIdx) => (
              <React.Fragment key={sIdx}>
                <tr style={{ background: 'hsl(var(--bg-main) / 0.4)' }}>
                  <td colSpan={3} style={{ padding: '0.75rem 1.5rem', fontSize: '0.75rem', fontWeight: 700, color: 'hsl(var(--primary))', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {section.title}
                  </td>
                </tr>
                {section.metrics.map((m) => (
                  <tr key={m.id}>
                    <td style={{ paddingLeft: '2rem', paddingRight: '1rem', color: 'hsl(var(--text-main))', fontSize: '0.875rem', fontWeight: 500 }}>
                      • {m.label}
                    </td>
                    <td style={{ padding: '0' }}>
                      <input 
                        className="input" 
                        style={{ background: '#fff', fontSize: '0.875rem' }} 
                        placeholder="0.00" 
                        value={data[m.id as keyof typeof data]?.pci || ''} 
                        onChange={(e) => updateField(m.id, 'pci', e.target.value)} 
                      />
                    </td>
                    <td style={{ padding: '0' }}>
                      <input 
                        className="input" 
                        style={{ background: '#fff', fontSize: '0.875rem' }} 
                        placeholder="0.00" 
                        value={data[m.id as keyof typeof data]?.completion || ''} 
                        onChange={(e) => updateField(m.id, 'completion', e.target.value)} 
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
  );
};
