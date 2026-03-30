import React from 'react';
import { useForm } from '../../context/FormContext';
import { RTEditor } from '../ui/RTEditor';
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
      <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
        <div style={{ padding: '1.25rem 1.5rem 1rem', display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', borderBottom: '1px solid hsl(var(--border))' }}>
          <div /> {/* Spacer for centering */}
          <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'hsl(var(--primary))', letterSpacing: '0.01em', textAlign: 'center', margin: 0 }}>{title}</h3>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button onClick={handleAdd} className="btn btn-secondary" style={{ padding: '0.4rem 0.85rem', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', fontWeight: 600 }}>
               <Plus size={14} /> Add Row
            </button>
          </div>
        </div>
        
        <div style={{ overflowX: 'auto' }}>
          {/* Table Header */}
          <div style={{ padding: '0.85rem 1rem', background: 'rgba(23,107,210,0.08)', borderBottom: '1px solid hsl(var(--border))' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '60px 80px 1.5fr 1.5fr 1.5fr 1.5fr 1.5fr 80px 110px 110px 40px', gap: '0.75rem', color: 'hsl(var(--primary))', fontSize: '0.7rem', fontWeight: 800, minWidth: '1200px' }}>
              <div style={{ textAlign: 'center', whiteSpace: 'nowrap' }}>SR. NO.</div>
              <div style={{ textAlign: 'center', whiteSpace: 'nowrap' }}>POSTS</div>
              <div>DESIGNATION</div>
              <div>JOB DESCRIPTION</div>
              <div>QUALIFICATIONS</div>
              <div>SKILLS</div>
              <div>EXPERIENCE</div>
              <div>AGE</div>
              <div>SALARY</div>
              <div>EMP. TYPE</div>
            </div>
          </div>
          
          {/* Rows */}
          {items.length === 0 ? (
            <p style={{ padding: '2rem', textAlign: 'center', fontSize: '0.875rem', color: 'hsl(var(--text-muted))' }}>No manpower details defined. Click "Add Row" to start.</p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ minWidth: '1200px' }}>
              {items.map((item: any, idx: number) => (
                <div key={item.id} style={{ display: 'grid', gridTemplateColumns: '60px 80px 1.5fr 1.5fr 1.5fr 1.5fr 1.5fr 80px 110px 110px 40px', gap: '0.75rem', padding: '0.75rem 1rem', borderBottom: '1px solid hsl(var(--border) / 0.5)', alignItems: 'center' }}>
                <div style={{ textAlign: 'center', fontSize: '0.875rem', fontWeight: 600, color: 'hsl(var(--text-main))' }}>{idx + 1}</div>
                <input type="number" className="input" placeholder="0" value={item.noOfPosts} onChange={(e) => handleUpdateItem(idx, { noOfPosts: e.target.value })} style={{ textAlign: 'center', padding: '0.625rem 0.5rem' }} />
                <input className="input" placeholder="Designation" value={item.designation} onChange={(e) => handleUpdateItem(idx, { designation: e.target.value })} style={{ padding: '0.625rem 0.75rem' }} />
                <input className="input" placeholder="Description" value={item.jobDescription} onChange={(e) => handleUpdateItem(idx, { jobDescription: e.target.value })} style={{ padding: '0.625rem 0.75rem' }} />
                <input className="input" placeholder="Qualifications" value={item.qualifications} onChange={(e) => handleUpdateItem(idx, { qualifications: e.target.value })} style={{ padding: '0.625rem 0.75rem' }} />
                <input className="input" placeholder="Skills" value={item.skills || ''} onChange={(e) => handleUpdateItem(idx, { skills: e.target.value })} style={{ padding: '0.625rem 0.75rem' }} />
                <input className="input" placeholder="Experience" value={item.experience || ''} onChange={(e) => handleUpdateItem(idx, { experience: e.target.value })} style={{ padding: '0.625rem 0.75rem' }} />
                <input type="number" className="input" placeholder="Age" value={item.age || ''} onChange={(e) => handleUpdateItem(idx, { age: e.target.value })} style={{ padding: '0.625rem 0.75rem' }} />
                <input type="number" className="input" placeholder="Salary" value={item.salary || ''} onChange={(e) => handleUpdateItem(idx, { salary: e.target.value })} style={{ padding: '0.625rem 0.75rem' }} />
                
                <select className="input" value={item.employmentType || ''} onChange={(e) => handleUpdateItem(idx, { employmentType: e.target.value })} style={{ padding: '0.625rem 0.75rem' }}>
                  <option value="">Select...</option>
                  <option value="Permanent">Permanent</option>
                  <option value="Contract">Contract</option>
                  <option value="Daily Wages">Daily Wages</option>
                </select>

                <button 
                  className="btn btn-secondary" 
                  style={{ height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'hsl(var(--error) / 0.1)', color: 'hsl(var(--error))', border: 'none', padding: 0 }} 
                  onClick={() => handleRemove(idx)}
                  title="Remove Row"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div className="card">
        <RTEditor 
          label="Management Structure and General Requirements" 
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
