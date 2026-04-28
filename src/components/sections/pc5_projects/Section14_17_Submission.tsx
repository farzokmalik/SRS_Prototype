import React from 'react';
import { useForm } from '../../../context/FormContext';
import { Plus, Trash2, Calendar, User, Mail, Phone } from 'lucide-react';

export const Section14_LessonsLearned: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.pc5.s14;

  const handleUpdate = (updates: any) => {
    updateSection('pc5', { s14: { ...data, ...updates } });
  };

  const fields = [
    { key: 'operation',   label: '[PC-V-14.1] Project Operation',   placeholder: 'Lessons learned regarding project operations...' },
    { key: 'maintenance', label: '[PC-V-14.2] Maintenance Strategy',  placeholder: 'Maintenance strategy effectiveness and insights...' },
    { key: 'marketing',   label: '[PC-V-14.3] Marketing Strategy',    placeholder: 'Marketing strategy outcomes and adjustments...' },
    { key: 'management',  label: '[PC-V-14.4] Managerial Management', placeholder: 'Managerial performance and organizational insights...' },
    { key: 'climate',     label: '[PC-V-14.5] Climate Resilience',    placeholder: 'Resilience outcomes and any maladaptation issues observed...' },
  ];

  return (
    <div className="card">
      <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'hsl(var(--primary))', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '2rem' }}>Lessons Learned during Project Life Cycle</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {fields.map((f) => (
          <div key={f.key}>
            <label className="label">{f.label}</label>
            <textarea 
              className="input" 
              style={{ background: '#fff', minHeight: '100px', paddingTop: '0.75rem' }} 
              placeholder={f.placeholder}
              value={data[f.key as keyof typeof data]}
              onChange={(e) => handleUpdate({ [f.key]: e.target.value })}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export const Section15_ManagementChanges: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.pc5.s15;

  const handleUpdate = (updates: any) => {
    updateSection('pc5', { s15: { ...data, ...updates } });
  };

  const addChange = () => {
    handleUpdate({ changes: [...data.changes, { name: '', designation: '', date: '' }] });
  };

  const updateChange = (idx: number, updates: any) => {
    const newChanges = [...data.changes];
    newChanges[idx] = { ...newChanges[idx], ...updates };
    handleUpdate({ changes: newChanges });
  };

  const removeChange = (idx: number) => {
    handleUpdate({ changes: data.changes.filter((_: any, i: number) => i !== idx) });
  };

  return (
    <div className="card">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h4 style={{ fontSize: '0.875rem', fontWeight: 700, color: 'hsl(var(--primary))' }}>Changes in Project Management</h4>
            <p style={{ fontSize: '0.75rem', color: 'hsl(var(--text-muted))' }}>[PC-V-15.1] Has there been any change in the project management during the reporting period?</p>
          </div>
          <div style={{ display: 'flex', background: 'hsl(var(--bg-main) / 0.5)', padding: '0.4rem', borderRadius: 'var(--radius-md)' }}>
            {[true, false].map((val) => (
              <button
                key={val ? 'yes' : 'no'}
                onClick={() => handleUpdate({ managementChange: val })}
                style={{
                  padding: '0.4rem 1.2rem',
                  borderRadius: 'var(--radius-sm)',
                  background: data.managementChange === val ? 'hsl(var(--primary))' : 'transparent',
                  color: data.managementChange === val ? '#fff' : 'hsl(var(--text-muted))',
                  border: 'none', fontWeight: 600, fontSize: '0.75rem', cursor: 'pointer'
                }}
              >
                {val ? 'YES' : 'NO'}
              </button>
            ))}
          </div>
        </div>

        {data.managementChange && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', animation: 'slideDown 0.3s ease' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h5 style={{ fontSize: '0.8125rem', fontWeight: 700 }}>Management Records</h5>
              <button className="btn btn-secondary" onClick={addChange} style={{ padding: '0.4rem 0.8rem', fontSize: '0.75rem' }}>
                <Plus size={14} /> Add Personnel Change
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {data.changes.length === 0 && (
                <div style={{ textAlign: 'center', padding: '2rem', border: '1px dashed hsl(var(--border))', borderRadius: '8px', color: 'hsl(var(--text-muted))' }}>
                  No personnel changes recorded.
                </div>
              )}
              {data.changes.map((c: any, idx: number) => (
                <div key={idx} style={{ display: 'grid', gridTemplateColumns: '1.5fr 1.5fr 1fr 40px', gap: '1rem', alignItems: 'center', padding: '1rem', background: '#fff', border: '1px solid hsl(var(--border))', borderRadius: 'var(--radius-md)' }}>
                  <input className="input" placeholder="[PC-V-15.3] Name" value={c.name} onChange={(e) => updateChange(idx, { name: e.target.value })} />
                  <input className="input" placeholder="[PC-V-15.4] Designation" value={c.designation} onChange={(e) => updateChange(idx, { designation: e.target.value })} />
                  <input type="date" className="input" value={c.date} onChange={(e) => updateChange(idx, { date: e.target.value })} title="[PC-V-15.5] Date of Change" />
                  <button onClick={() => removeChange(idx)} style={{ color: 'hsl(var(--error))', border: 'none', background: 'transparent', cursor: 'pointer' }}><Trash2 size={16} /></button>
                </div>
              ))}
            </div>

            <div>
              <label className="label">[PC-V-15.2] Justification for Personnel Changes</label>
              <textarea 
                className="input" 
                style={{ background: '#fff', minHeight: '100px', paddingTop: '0.75rem' }} 
                placeholder="Explain the reasons for frequent changes or specific replacements..."
                value={data.justification}
                onChange={(e) => handleUpdate({ justification: e.target.value })}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export const Section16_Suggestions: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.pc5.s16;

  const handleUpdate = (updates: any) => {
    updateSection('pc5', { s16: { ...data, ...updates } });
  };

  return (
    <div className="card">
      <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'hsl(var(--primary))', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '2rem' }}>Suggestions for Improvement</h3>
      <label className="label" style={{ marginBottom: '0.75rem' }}>[PC-V-16.1] Comprehensive Suggestions</label>
      <textarea 
        className="input" 
        style={{ background: '#fff', minHeight: '250px', paddingTop: '1rem', fontSize: '0.9375rem' }} 
        placeholder="Provide comprehensive suggestions for institutional, technical, or financial improvements based on the project's performance..."
        value={data.suggestions}
        onChange={(e) => handleUpdate({ suggestions: e.target.value })}
      />
    </div>
  );
};

export const Section17_Submission: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.pc5.submission;

  const handleUpdate = (updates: any) => {
    updateSection('pc5', { submission: { ...data, ...updates } });
  };

  return (
    <div className="card">
      <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'hsl(var(--primary))', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '2.5rem' }}>Submission Details</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <label className="label" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.5rem' }}>
              <User size={12} /> [PC-V-17.1] Name of Reporting Officer
            </label>
            <input className="input" placeholder="Full name" value={data.name} onChange={(e) => handleUpdate({ name: e.target.value })} style={{ background: '#fff' }} />
          </div>
          <div>
            <label className="label" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.5rem' }}>
              [PC-V-17.2] Designation
            </label>
            <input className="input" placeholder="Official designation" value={data.designation} onChange={(e) => handleUpdate({ designation: e.target.value })} style={{ background: '#fff' }} />
          </div>
          <div>
            <label className="label" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.5rem' }}>
              <Calendar size={12} /> [PC-V-17.3] Date of Reporting
            </label>
            <input type="date" className="input" value={data.date} onChange={(e) => handleUpdate({ date: e.target.value })} style={{ background: '#fff' }} />
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <label className="label" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.5rem' }}>
              <Phone size={12} /> [PC-V-17.4] Telephone Number
            </label>
            <input className="input" placeholder="+92 XXX XXXXXXX" value={data.telephone} onChange={(e) => handleUpdate({ telephone: e.target.value })} style={{ background: '#fff' }} />
          </div>
          <div>
            <label className="label" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.5rem' }}>
              <Mail size={12} /> [PC-V-17.5] Email Address
            </label>
            <input type="email" className="input" placeholder="officer@department.gov.pk" value={data.email} onChange={(e) => handleUpdate({ email: e.target.value })} style={{ background: '#fff' }} />
          </div>
          <div>
            <label className="label" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.5rem' }}>
              [PC-V-17.6] Signature / Stamp
            </label>
            <div style={{ height: '100px', border: '2px dashed hsl(var(--border))', borderRadius: 'var(--radius-lg)', background: 'hsl(var(--bg-main) / 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'hsl(var(--text-muted))', fontSize: '0.75rem' }}>
              Drop signature image or click to upload
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
