import React from 'react';
import { useForm } from '../../../context/FormContext';
import { TextAreaField, FileUpload } from '../../ui/FormElements';

export const Section2_ProponentInfo: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.section2 || {
    background: '', cropHealth: '', nutritionalData: [], attachments: []
  };

  const handleChange = (field: string, value: any) => {
    updateSection('section2', { [field]: value });
  };

  const updateNutritionalRow = (idx: number, field: string, val: string) => {
    const list = [...(data.nutritionalData || [])];
    list[idx] = { ...list[idx], [field]: val };
    handleChange('nutritionalData', list);
  };

  const addRow = () => {
    handleChange('nutritionalData', [...(data.nutritionalData || []), { nutrient: '', value: '', unit: '' }]);
  };

  return (
    <div className="space-y-6">
      <div className="card shadow-sm">
        
        <div className="space-y-6" style={{ maxWidth: '1000px' }}>
          <TextAreaField 
            label="Background & Rationale" 
            rows={6}
            placeholder="Provide context and high-level reasoning for the proposal..."
            value={data.background}
            onChange={(e: any) => handleChange('background', e.target.value)}
          />

          <TextAreaField 
            label="Specific Crop Health Benefits" 
            rows={4}
            placeholder="Explain the impact on agricultural health and yield..."
            value={data.cropHealth}
            onChange={(e: any) => handleChange('cropHealth', e.target.value)}
          />

          {/* Nutritional Data Table */}
          <div className="card" style={{ background: 'hsl(var(--bg-main) / 0.2)', border: '1px solid hsl(var(--border) / 0.5)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'hsl(var(--text-main) / 0.7)' }}>Nutritional Data Analysis</h4>
              <button type="button" onClick={addRow} className="btn btn-secondary btn-sm">Add Row</button>
            </div>
            <table className="form-table">
              <thead>
                <tr>
                  <th>Nutrient / Parameter</th>
                  <th>Value</th>
                  <th>Unit</th>
                </tr>
              </thead>
              <tbody>
                {(data.nutritionalData || []).map((row: any, idx: number) => (
                  <tr key={idx}>
                    <td><input className="input-clean" value={row.nutrient} onChange={(e) => updateNutritionalRow(idx, 'nutrient', e.target.value)} placeholder="e.g. Protein" /></td>
                    <td><input className="input-clean" value={row.value} onChange={(e) => updateNutritionalRow(idx, 'value', e.target.value)} placeholder="e.g. 15.5" /></td>
                    <td><input className="input-clean" value={row.unit} onChange={(e) => updateNutritionalRow(idx, 'unit', e.target.value)} placeholder="e.g. %" /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <FileUpload 
            label="Image / Figure Upload" 
            description="Upload technical diagrams or proponent figures"
            files={data.attachments || []}
            onUpload={(files) => handleChange('attachments', files)}
            onRemove={(idx) => {
              const newList = [...(data.attachments || [])];
              newList.splice(idx, 1);
              handleChange('attachments', newList);
            }}
          />
        </div>
      </div>
    </div>
  );
};
