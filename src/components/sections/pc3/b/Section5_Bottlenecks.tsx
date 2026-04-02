import React, { useState } from 'react';
import { useForm } from '../../../../context/FormContext';
import { InputField, TextAreaField } from '../../../ui/FormElements';
import { Plus, X } from 'lucide-react';

const PREDEFINED_BOTTLENECKS = [
  'Land Acquisition',
  'Procurement Problems',
  'Staff Turnover',
  'Contractor Issues',
  'Funds Release delay',
  'Litigation',
  'Security issues',
  'Design/Technical Issues',
  'Weather conditions',
  'Inter-departmental coordination',
  'Site accessibility',
  'Material shortage',
  'Utility shifting',
  'Scope changes'
];

export const Section5_Bottlenecks: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.pc3b?.s5 || { bottlenecks: [], customOptions: [], remarks: '' };
  const [newOption, setNewOption] = useState('');

  const handleChange = (field: string, val: any) => {
    updateSection('pc3b', { s5: { ...data, [field]: val } });
  };

  const toggleBottleneck = (opt: string) => {
    const current = data.bottlenecks || [];
    if (current.includes(opt)) {
      handleChange('bottlenecks', current.filter((s: string) => s !== opt));
    } else {
      handleChange('bottlenecks', [...current, opt]);
    }
  };

  const addCustomOption = () => {
    if (!newOption.trim()) return;
    const options = data.customOptions || [];
    if (!options.includes(newOption.trim())) {
      const updatedOptions = [...options, newOption.trim()];
      const updatedBottlenecks = [...(data.bottlenecks || []), newOption.trim()];
      updateSection('pc3b', { 
        s5: { ...data, customOptions: updatedOptions, bottlenecks: updatedBottlenecks } 
      });
    }
    setNewOption('');
  };

  const removeCustomOption = (opt: string) => {
    const updatedOptions = (data.customOptions || []).filter((o: string) => o !== opt);
    const updatedBottlenecks = (data.bottlenecks || []).filter((o: string) => o !== opt);
    updateSection('pc3b', { 
      s5: { ...data, customOptions: updatedOptions, bottlenecks: updatedBottlenecks } 
    });
  };

  const isAnyChecked = (data.bottlenecks?.length || 0) > 0;

  return (
    <div className="space-y-6">
      <div className="card shadow-sm">
        <div style={{ marginBottom: '2rem' }}>
          <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'hsl(var(--primary))', marginBottom: '0.5rem' }}>Identify Problems / Bottlenecks</h4>
          <p style={{ fontSize: '0.875rem', color: 'hsl(var(--text-muted))' }}>Select all that apply to the current reporting period.</p>
        </div>

        <div className="space-y-8">
          {/* Predefined Grid */}
          <div className="card" style={{ background: 'hsl(var(--bg-main) / 0.1)', border: '1px solid hsl(var(--border) / 0.5)', padding: '1.5rem' }}>
            <h5 style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '1.25rem', color: 'hsl(var(--text-main))' }}>Predefined Categories</h5>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.25rem' }}>
              {PREDEFINED_BOTTLENECKS.map((opt, i) => (
                <label key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer', fontSize: '0.9rem' }}>
                  <input 
                    type="checkbox" 
                    checked={data.bottlenecks?.includes(opt)} 
                    onChange={() => toggleBottleneck(opt)}
                    style={{ width: '18px', height: '18px', accentColor: 'hsl(var(--accent))' }}
                  />
                  {opt}
                </label>
              ))}
            </div>
          </div>

          {/* Custom Options / Add More */}
          <div className="card" style={{ background: 'hsl(var(--bg-main) / 0.1)', border: '1px solid hsl(var(--border) / 0.5)', padding: '1.5rem' }}>
             <h5 style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '1.25rem', color: 'hsl(var(--text-main))' }}>Custom Bottlenecks</h5>
             
             {/* Custom List */}
             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.25rem', marginBottom: (data.customOptions?.length || 0) > 0 ? '2rem' : '0' }}>
               {(data.customOptions || []).map((opt: string, i: number) => (
                 <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', background: 'white', padding: '0.5rem 0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid hsl(var(--border))', position: 'relative' }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer', flex: 1, minWidth: 0 }}>
                      <input 
                        type="checkbox" 
                        checked={data.bottlenecks?.includes(opt)} 
                        onChange={() => toggleBottleneck(opt)}
                        style={{ width: '18px', height: '18px', accentColor: 'hsl(var(--accent))' }}
                      />
                      <span style={{ fontSize: '0.85rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{opt}</span>
                    </label>
                    <button 
                      onClick={() => removeCustomOption(opt)}
                      style={{ background: 'none', border: 'none', padding: '0.2rem', cursor: 'pointer', color: 'hsl(var(--text-muted))' }}
                    >
                      <X size={14} />
                    </button>
                 </div>
               ))}
             </div>

             {/* Add Button Area */}
             <div style={{ display: 'flex', gap: '0.75rem', maxWidth: '500px' }}>
                <div style={{ flex: 1 }}>
                  <InputField 
                    label=""
                    placeholder="Enter other specific bottlenecks..."
                    value={newOption}
                    onChange={(e: any) => setNewOption(e.target.value)}
                    onKeyDown={(e: any) => e.key === 'Enter' && addCustomOption()}
                  />
                </div>
                <button 
                  className="btn btn-secondary" 
                  onClick={addCustomOption}
                  style={{ height: '42px', marginTop: '0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  <Plus size={18} /> Add More
                </button>
             </div>
          </div>

          {/* Remarks Section */}
          <div 
            className="card" 
            style={{ 
              background: isAnyChecked ? 'hsl(var(--bg-main) / 0.3)' : 'hsl(var(--bg-main) / 0.1)', 
              border: isAnyChecked ? '1px solid hsl(var(--accent) / 0.3)' : '1px solid hsl(var(--border) / 0.3)',
              transition: 'all 0.3s ease',
              opacity: isAnyChecked ? 1 : 0.6,
            }}
          >
            <TextAreaField 
              label="General Remarks / Action Taken"
              placeholder={isAnyChecked ? "Describe actions taken to resolve the identified issues..." : "Select at least one problem to enable remarks..."}
              rows={8}
              value={data.remarks}
              onChange={(e: any) => handleChange('remarks', e.target.value)}
              disabled={!isAnyChecked}
            />
            {!isAnyChecked && (
              <p style={{ fontSize: '0.75rem', color: 'hsl(var(--text-muted))', marginTop: '0.75rem', fontStyle: 'italic' }}>
                Note: This field is activated only when a bottleneck is identified.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
