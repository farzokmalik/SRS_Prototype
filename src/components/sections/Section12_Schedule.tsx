import React from 'react';
import { useForm } from '../../context/FormContext';
import { RTEditor } from '../ui/RTEditor';
import { FileUpload } from '../ui/FormElements';

export const Section12_Schedule: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.section12;

  const handleUpdate = (updates: any) => {
    updateSection('section12', { ...data, ...updates });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div className="card">
        <RTEditor label="Implementation Schedule Details" value={data.schedule} onChange={(val) => handleUpdate({ schedule: val })} />
        <RTEditor label="Result-Based Monitoring Indicators" value={data.monitoring} onChange={(val) => handleUpdate({ monitoring: val })} />
        <RTEditor label="Implementation Plan" value={data.implementationPlan} onChange={(val) => handleUpdate({ implementationPlan: val })} />
        <RTEditor label="M&E Plan" value={data.mePlan} onChange={(val) => handleUpdate({ mePlan: val })} />
        <RTEditor label="Risk Mitigation Plan" value={data.riskPlan} onChange={(val) => handleUpdate({ riskPlan: val })} />
        <RTEditor label="Procurement Plan" value={data.procurementPlan} onChange={(val) => handleUpdate({ procurementPlan: val })} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        <div className="card">
          <FileUpload 
            label="Attachments"
            files={data.attachments || []}
            onUpload={(files) => handleUpdate({ attachments: files })}
            onRemove={(idx) => handleUpdate({ attachments: data.attachments.filter((_: any, i: number) => i !== idx) })}
            description="Upload schedule & plans"
          />
        </div>
        <div className="card">
          <FileUpload 
            label="Annexures"
            files={data.annexures || []}
            onUpload={(files) => handleUpdate({ annexures: files })}
            onRemove={(idx) => handleUpdate({ annexures: data.annexures.filter((_: any, i: number) => i !== idx) })}
            description="Add annexures"
          />
        </div>
      </div>
    </div>
  );
};
