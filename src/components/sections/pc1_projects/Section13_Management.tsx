import React from 'react';
import { useForm } from '../../../context/FormContext';
import { RTEditor } from '../../ui/RTEditor';
import { Plus, Trash2 } from 'lucide-react';

export const Section13_Management: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.section13;

  const handleUpdate = (updates: any) => {
    updateSection('section13', { ...data, ...updates });
  };

  const renderManpowerTable = (
    title: string,
    dataKey: 'adminManpower' | 'execManpower' | 'postManpower'
  ) => {
    const items = data[dataKey] || [];

    const handleAdd = () => {
      handleUpdate({
        [dataKey]: [...items, { id: Date.now().toString(), noOfPosts: '', designation: '', jobDescription: '', qualifications: '', skills: '', experience: '', age: '', salary: '', employmentType: '' }]
      });
    };

    const handleUpdateItem = (idx: number, updates: any) => {
      const newItems = [...items];
      newItems[idx] = { ...newItems[idx], ...updates };
      handleUpdate({ [dataKey]: newItems });
    };

    const handleRemove = (idx: number) => {
      handleUpdate({ [dataKey]: items.filter((_: any, i: number) => i !== idx) });
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'hsl(var(--primary))', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{title}</h3>
          <button onClick={handleAdd} className="btn btn-secondary" style={{ padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8125rem' }}>
             <Plus size={16} /> Add Personnel
          </button>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {items.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem', border: '1px dashed hsl(var(--border))', borderRadius: 'var(--radius-lg)', background: 'hsl(var(--bg-main) / 0.3)', color: 'hsl(var(--text-muted))' }}>
              <p style={{ fontWeight: 600, fontSize: '0.875rem' }}>No manpower details defined. Click "Add Personnel" to start.</p>
            </div>
          ) : (
            items.map((item: any, idx: number) => (
              <div key={item.id} style={{ 
                padding: '1.75rem', 
                background: '#fff', 
                borderRadius: 'var(--radius-lg)', 
                border: '1px solid hsl(var(--border))',
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05)',
                animation: 'fadeIn 0.3s ease'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px dashed hsl(var(--border))' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'hsl(var(--primary))', background: 'hsl(var(--primary) / 0.1)', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>
                      #{idx + 1}
                    </span>
                    <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'hsl(var(--text-main))' }}>
                      {item.designation || 'New Personnel'}
                    </span>
                  </div>
                  <button 
                    className="btn btn-secondary" 
                    onClick={() => handleRemove(idx)}
                    style={{ 
                      color: 'hsl(var(--error))', 
                      borderColor: 'hsl(var(--error) / 0.2)',
                      background: 'hsl(var(--error) / 0.02)',
                      fontSize: '0.75rem',
                      padding: '0.4rem 0.8rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem'
                    }}
                  >
                    <Trash2 size={14} /> Remove
                  </button>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5rem' }}>
                  {/* Row 1: Basic Post Info */}
                  <div style={{ gridColumn: 'span 2' }}>
                    <label className="label" style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.6rem' }}>[PC-I-13.2] Designation</label>
                    <input className="input" placeholder="e.g. Project Manager" value={item.designation} onChange={(e) => handleUpdateItem(idx, { designation: e.target.value })} style={{ background: '#fff' }} />
                  </div>
                  <div>
                    <label className="label" style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.6rem' }}>[PC-I-13.3] No. of Posts</label>
                    <input type="number" className="input" placeholder="0" value={item.noOfPosts} onChange={(e) => handleUpdateItem(idx, { noOfPosts: e.target.value })} style={{ background: '#fff' }} />
                  </div>

                  {/* Row 2: Description */}
                  <div style={{ gridColumn: 'span 3' }}>
                    <label className="label" style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.6rem' }}>[PC-I-13.4] Job Description</label>
                    <textarea className="input" placeholder="Key responsibilities and duties..." value={item.jobDescription} onChange={(e) => handleUpdateItem(idx, { jobDescription: e.target.value })} style={{ minHeight: '80px', paddingTop: '0.75rem', background: '#fff' }} />
                  </div>

                  {/* Row 3: Qualifications & Skills */}
                  <div style={{ gridColumn: 'span 1.5' }}>
                    <label className="label" style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.6rem' }}>[PC-I-13.5] Qualifications</label>
                    <textarea className="input" placeholder="Required education..." value={item.qualifications} onChange={(e) => handleUpdateItem(idx, { qualifications: e.target.value })} style={{ minHeight: '80px', paddingTop: '0.75rem', background: '#fff' }} />
                  </div>
                  <div style={{ gridColumn: 'span 1.5' }}>
                    <label className="label" style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.6rem' }}>[PC-I-13.6] Skills</label>
                    <textarea className="input" placeholder="Technical/Soft skills..." value={item.skills || ''} onChange={(e) => handleUpdateItem(idx, { skills: e.target.value })} style={{ minHeight: '80px', paddingTop: '0.75rem', background: '#fff' }} />
                  </div>

                  {/* Row 4: Professional Specs */}
                  <div>
                    <label className="label" style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.6rem' }}>[PC-I-13.7] Experience</label>
                    <input className="input" placeholder="e.g. 5 Years" value={item.experience || ''} onChange={(e) => handleUpdateItem(idx, { experience: e.target.value })} style={{ background: '#fff' }} />
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label className="label" style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.6rem' }}>[PC-I-13.8] Age</label>
                      <input type="number" className="input" placeholder="Limit" value={item.age || ''} onChange={(e) => handleUpdateItem(idx, { age: e.target.value })} style={{ background: '#fff' }} />
                    </div>
                    <div>
                      <label className="label" style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.6rem' }}>[PC-I-13.9] Salary</label>
                      <input type="number" className="input" placeholder="PKR" value={item.salary || ''} onChange={(e) => handleUpdateItem(idx, { salary: e.target.value })} style={{ background: '#fff' }} />
                    </div>
                  </div>
                  <div>
                    <label className="label" style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.6rem' }}>[PC-I-13.10] Employment Type</label>
                    <select className="input" value={item.employmentType || ''} onChange={(e) => handleUpdateItem(idx, { employmentType: e.target.value })} style={{ background: '#fff' }}>
                      <option value="">Select...</option>
                      <option value="Permanent">Permanent</option>
                      <option value="Contract">Contract</option>
                      <option value="Daily Wages">Daily Wages</option>
                    </select>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    );
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div className="card">
        <RTEditor 
          label="[PC-I-13.1] Management Structure and General Requirements" 
          value={data.management} 
          onChange={(val) => handleUpdate({ management: val })} 
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {renderManpowerTable('MANPOWER DURING ADMINISTRATIVE IMPLEMENTATION OF THE PROJECT', 'adminManpower')}
        {renderManpowerTable('MANPOWER DURING EXECUTION AND OPERATIONS OF THE PROJECT', 'execManpower')}
        {renderManpowerTable('MANPOWER AFTER COMPLETION OF THE PROJECT', 'postManpower')}
      </div>
    </div>
  );
};
