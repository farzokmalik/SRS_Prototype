import React from 'react';
import { useForm } from '../../../../context/FormContext';
import { InputField, TextAreaField, MultiCheckGroup } from '../../../ui/FormElements';

const BOTTLENECKS_OPTIONS = [
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
  const data = formData.pc3b?.s5 || { bottlenecks: [], otherBottleneck: '', remarks: '' };

  const handleChange = (field: string, val: any) => {
    updateSection('pc3b', { s5: { ...data, [field]: val } });
  };

  const isAnyChecked = data.bottlenecks.length > 0 || data.otherBottleneck.trim().length > 0;

  return (
    <div className="space-y-6">
      <div className="card shadow-sm">
        <div style={{ marginBottom: '2rem' }}>
          <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'hsl(var(--primary))', marginBottom: '0.5rem' }}>Identify Problems / Bottlenecks</h4>
          <p style={{ fontSize: '0.875rem', color: 'hsl(var(--text-muted))' }}>Select all that apply to the current reporting period.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="card" style={{ background: 'hsl(var(--bg-main) / 0.1)', border: '1px solid hsl(var(--border) / 0.5)' }}>
             <MultiCheckGroup 
               label="Predefined Bottlenecks"
               options={BOTTLENECKS_OPTIONS}
               value={data.bottlenecks}
               onChange={(vals) => handleChange('bottlenecks', vals)}
             />
             
             <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid hsl(var(--border) / 0.5)' }}>
               <InputField 
                 label="Others (Please specify)"
                 placeholder="Enter other specific bottlenecks..."
                 value={data.otherBottleneck}
                 onChange={(e: any) => handleChange('otherBottleneck', e.target.value)}
               />
             </div>
           </div>

           <div className="space-y-6">
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
                  rows={10}
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
    </div>
  );
};
