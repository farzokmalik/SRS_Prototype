import React from 'react';
import { useForm } from '../../../context/FormContext';
import { TextAreaField } from '../../ui/FormElements';

export const Section13_ExpectedOutputs: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.section13 || {
    impact: '', outcome: '', outputs: '', dataSources: '', risks: ''
  };

  const handleChange = (field: string, value: string) => {
    updateSection('section13', { [field]: value });
  };

  return (
    <div className="space-y-8">
      <div className="card shadow-sm">
        
        <div style={{ maxWidth: '1200px', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {/* Sub-section: Impact */}
          <section className="card" style={{ background: 'hsl(var(--bg-main) / 0.1)', border: '1px solid hsl(var(--border) / 0.5)' }}>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1rem', color: 'hsl(var(--primary))' }}>Impact</h4>
            <TextAreaField 
              label="[PCN-13.1] Impact Details" 
              description="poverty reduction, socio-economic improvement, quality of life enhancements"
              rows={4}
              placeholder="Describe the long-term impact..."
              value={data.impact}
              onChange={(e: any) => handleChange('impact', e.target.value)}
            />
          </section>

          {/* Sub-section: Outcome */}
          <section className="card" style={{ background: 'hsl(var(--bg-main) / 0.1)', border: '1px solid hsl(var(--border) / 0.5)' }}>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1rem', color: 'hsl(var(--primary))' }}>Outcome</h4>
            <TextAreaField 
              label="[PCN-13.2] Outcome Details" 
              description="revenue generation, value addition, increase in agricultural yield"
              rows={4}
              placeholder="Describe the intermediate outcomes..."
              value={data.outcome}
              onChange={(e: any) => handleChange('outcome', e.target.value)}
            />
          </section>

          {/* Sub-section: Outputs */}
          <section className="card" style={{ background: 'hsl(var(--bg-main) / 0.1)', border: '1px solid hsl(var(--border) / 0.5)' }}>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1rem', color: 'hsl(var(--primary))' }}>Outputs</h4>
            <TextAreaField 
              label="[PCN-13.3] Output Details" 
              description="nursery plants production, farm income increase, capacity building of farmers"
              rows={4}
              placeholder="Describe the tangible outputs..."
              value={data.outputs}
              onChange={(e: any) => handleChange('outputs', e.target.value)}
            />
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TextAreaField 
              label="[PCN-13.4] Data Sources" 
              rows={3}
              placeholder="Specify the sources of data for monitoring..."
              value={data.dataSources}
              onChange={(e: any) => handleChange('dataSources', e.target.value)}
            />
            <TextAreaField 
              label="[PCN-13.5] Risks & Assumptions" 
              rows={3}
              placeholder="What are the key risks and underlying assumptions..."
              value={data.risks}
              onChange={(e: any) => handleChange('risks', e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
