import React from 'react';
import { useForm } from '../../../context/FormContext';
import { TextAreaField, FileUpload, InputField } from '../../ui/FormElements';
import { Trash2, Plus } from 'lucide-react';

export const Section2_ProponentInfo: React.FC = () => {
  const { formData, updateSection } = useForm();
  const sectionData = formData.section2 || {};
  const nutritionalData = (Array.isArray(sectionData.nutritionalData) && sectionData.nutritionalData.length > 0)
    ? sectionData.nutritionalData
    : [{ nutrient: '', value: '', unit: '' }];

  const handleChange = (field: string, value: any) => {
    updateSection('section2', { [field]: value });
  };

  const updateNutritionalRow = (idx: number, field: string, val: string) => {
    const list = [...nutritionalData];
    list[idx] = { ...list[idx], [field]: val };
    handleChange('nutritionalData', list);
  };

  const addRow = () => {
    handleChange('nutritionalData', [...nutritionalData, { nutrient: '', value: '', unit: '' }]);
  };

  const removeRow = (idx: number) => {
    const list = [...nutritionalData];
    list.splice(idx, 1);
    handleChange('nutritionalData', list.length > 0 ? list : [{ nutrient: '', value: '', unit: '' }]);
  };

  return (
    <div className="space-y-6">
      <div className="card shadow-sm">
        <div className="space-y-8" style={{ maxWidth: '1000px' }}>
          {/* Main Context Area */}
          <div className="grid grid-cols-1 gap-6">
            <TextAreaField 
              label="[PCN-2.1] Background & Rationale" 
              rows={5}
              placeholder="Provide strategic context and justification for this intervention..."
              value={sectionData.background || ''}
              onChange={(e: any) => handleChange('background', e.target.value)}
            />

            <TextAreaField 
              label="[PCN-2.2] Specific Crop Health Benefits" 
              rows={4}
              placeholder="Explain how this project directly impacts agricultural productivity..."
              value={sectionData.cropHealth || ''}
              onChange={(e: any) => handleChange('cropHealth', e.target.value)}
            />
          </div>

          <div style={{ height: '1px', background: 'hsl(var(--border) / 0.5)', margin: '1rem 0' }} />

          {/* Attachments Area */}
          <FileUpload 
            label="[PCN-2.3] Image / Figure Upload" 
            description="Attach technical diagrams, proponent charts, or geographical figures (Max 10MB per file)"
            files={sectionData.attachments || []}
            onUpload={(files) => handleChange('attachments', files)}
            onRemove={(idx) => {
              const newList = [...(sectionData.attachments || [])];
              newList.splice(idx, 1);
              handleChange('attachments', newList);
            }}
          />

          <div style={{ height: '1px', background: 'hsl(var(--border) / 0.5)', margin: '1rem 0' }} />

          {/* Nutritional Data Analysis */}
          <section>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <div>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'hsl(var(--primary))' }}>Nutritional Data Analysis</h4>
                <p style={{ fontSize: '0.8125rem', color: 'hsl(var(--text-muted))' }}>Quantitative breakdown of nutritional parameters.</p>
              </div>
              <button 
                type="button" 
                onClick={addRow} 
                className="btn btn-secondary btn-sm"
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}
              >
                <Plus size={16} /> Add Row
              </button>
            </div>

            <div className="card" style={{ background: 'hsl(var(--bg-main) / 0.1)', borderColor: 'hsl(var(--border) / 0.6)' }}>
              {/* Header Row */}
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: '2fr 1fr 1fr 48px', 
                gap: '1rem', 
                padding: '0.75rem 1rem',
                borderBottom: '1px solid hsl(var(--border))',
                background: 'hsl(var(--bg-main) / 0.2)'
              }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'hsl(var(--text-muted))' }}>[PCN-2.4] Nutrient / Parameter</div>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'hsl(var(--text-muted))' }}>[PCN-2.5] Value</div>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'hsl(var(--text-muted))' }}>[PCN-2.6] Unit</div>
                <div></div>
              </div>

              {/* Data Rows */}
              <div className="divide-y divide-border">
                {nutritionalData.map((row: any, idx: number) => (
                  <div 
                    key={idx} 
                    style={{ 
                      display: 'grid', 
                      gridTemplateColumns: '2fr 1fr 1fr 48px', 
                      gap: '1rem', 
                      padding: '1rem',
                      alignItems: 'center',
                      animation: 'fadeIn 0.2s ease-out'
                    }}
                  >
                    <InputField label="" placeholder="e.g. Protein Content" value={row.nutrient} onChange={(e: any) => updateNutritionalRow(idx, 'nutrient', e.target.value)} />
                    <InputField label="" placeholder="e.g. 18.5" value={row.value} onChange={(e: any) => updateNutritionalRow(idx, 'value', e.target.value)} />
                    <InputField label="" placeholder="e.g. %" value={row.unit} onChange={(e: any) => updateNutritionalRow(idx, 'unit', e.target.value)} />
                    <button 
                      type="button" 
                      onClick={() => removeRow(idx)} 
                      style={{ background: 'none', border: 'none', color: 'hsl(var(--error))', cursor: 'pointer', padding: '0.5rem' }} 
                      title="Delete Row"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
