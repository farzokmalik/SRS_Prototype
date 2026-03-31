import React from 'react';
import { useForm } from '../../../context/FormContext';
import { RTEditor } from '../../ui/RTEditor';
import { FileUpload } from '../../ui/FormElements';

export const Section12_Schedule: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.section12;

  const handleUpdate = (updates: any) => {
    updateSection('section12', { ...data, ...updates });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

      {/* Implementation Schedule Details */}
      <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <RTEditor label="Implementation Schedule Details" value={data.schedule} onChange={(val) => handleUpdate({ schedule: val })} />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', paddingTop: '0.5rem' }}>
          <FileUpload 
            label="Schedule Attachments"
            files={data.scheduleAttachments || []}
            onUpload={(files) => handleUpdate({ scheduleAttachments: files })}
            onRemove={(idx) => handleUpdate({ scheduleAttachments: (data.scheduleAttachments || []).filter((_: any, i: number) => i !== idx) })}
            description="Upload schedule documents"
          />
          <FileUpload 
            label="Schedule Annexures"
            files={data.scheduleAnnexures || []}
            onUpload={(files) => handleUpdate({ scheduleAnnexures: files })}
            onRemove={(idx) => handleUpdate({ scheduleAnnexures: (data.scheduleAnnexures || []).filter((_: any, i: number) => i !== idx) })}
            description="Add schedule annexures"
          />
        </div>
      </div>

      {/* Result-Based Monitoring Indicators */}
      <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <RTEditor label="Result-Based Monitoring Indicators" value={data.monitoring} onChange={(val) => handleUpdate({ monitoring: val })} />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', paddingTop: '0.5rem' }}>
          <FileUpload 
            label="Monitoring Attachments"
            files={data.monitoringAttachments || []}
            onUpload={(files) => handleUpdate({ monitoringAttachments: files })}
            onRemove={(idx) => handleUpdate({ monitoringAttachments: (data.monitoringAttachments || []).filter((_: any, i: number) => i !== idx) })}
            description="Upload monitoring documents"
          />
          <FileUpload 
            label="Monitoring Annexures"
            files={data.monitoringAnnexures || []}
            onUpload={(files) => handleUpdate({ monitoringAnnexures: files })}
            onRemove={(idx) => handleUpdate({ monitoringAnnexures: (data.monitoringAnnexures || []).filter((_: any, i: number) => i !== idx) })}
            description="Add monitoring annexures"
          />
        </div>
      </div>

      {/* Implementation Plan */}
      <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <RTEditor label="Implementation Plan" value={data.implementationPlan} onChange={(val) => handleUpdate({ implementationPlan: val })} />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', paddingTop: '0.5rem' }}>
          <FileUpload 
            label="Plan Attachments"
            files={data.implementationPlanAttachments || []}
            onUpload={(files) => handleUpdate({ implementationPlanAttachments: files })}
            onRemove={(idx) => handleUpdate({ implementationPlanAttachments: (data.implementationPlanAttachments || []).filter((_: any, i: number) => i !== idx) })}
            description="Upload implementation plan documents"
          />
          <FileUpload 
            label="Plan Annexures"
            files={data.implementationPlanAnnexures || []}
            onUpload={(files) => handleUpdate({ implementationPlanAnnexures: files })}
            onRemove={(idx) => handleUpdate({ implementationPlanAnnexures: (data.implementationPlanAnnexures || []).filter((_: any, i: number) => i !== idx) })}
            description="Add plan annexures"
          />
        </div>
      </div>

      {/* M&E Plan */}
      <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <RTEditor label="M&E Plan" value={data.mePlan} onChange={(val) => handleUpdate({ mePlan: val })} />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', paddingTop: '0.5rem' }}>
          <FileUpload 
            label="M&E Attachments"
            files={data.mePlanAttachments || []}
            onUpload={(files) => handleUpdate({ mePlanAttachments: files })}
            onRemove={(idx) => handleUpdate({ mePlanAttachments: (data.mePlanAttachments || []).filter((_: any, i: number) => i !== idx) })}
            description="Upload M&E documents"
          />
          <FileUpload 
            label="M&E Annexures"
            files={data.mePlanAnnexures || []}
            onUpload={(files) => handleUpdate({ mePlanAnnexures: files })}
            onRemove={(idx) => handleUpdate({ mePlanAnnexures: (data.mePlanAnnexures || []).filter((_: any, i: number) => i !== idx) })}
            description="Add M&E annexures"
          />
        </div>
      </div>

      {/* Risk Mitigation Plan */}
      <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <RTEditor label="Risk Mitigation Plan" value={data.riskPlan} onChange={(val) => handleUpdate({ riskPlan: val })} />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', paddingTop: '0.5rem' }}>
          <FileUpload 
            label="Risk Plan Attachments"
            files={data.riskPlanAttachments || []}
            onUpload={(files) => handleUpdate({ riskPlanAttachments: files })}
            onRemove={(idx) => handleUpdate({ riskPlanAttachments: (data.riskPlanAttachments || []).filter((_: any, i: number) => i !== idx) })}
            description="Upload risk plan documents"
          />
          <FileUpload 
            label="Risk Plan Annexures"
            files={data.riskPlanAnnexures || []}
            onUpload={(files) => handleUpdate({ riskPlanAnnexures: files })}
            onRemove={(idx) => handleUpdate({ riskPlanAnnexures: (data.riskPlanAnnexures || []).filter((_: any, i: number) => i !== idx) })}
            description="Add risk plan annexures"
          />
        </div>
      </div>

      {/* Procurement Plan */}
      <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <RTEditor label="Procurement Plan" value={data.procurementPlan} onChange={(val) => handleUpdate({ procurementPlan: val })} />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', paddingTop: '0.5rem' }}>
          <FileUpload 
            label="Procurement Attachments"
            files={data.procurementPlanAttachments || []}
            onUpload={(files) => handleUpdate({ procurementPlanAttachments: files })}
            onRemove={(idx) => handleUpdate({ procurementPlanAttachments: (data.procurementPlanAttachments || []).filter((_: any, i: number) => i !== idx) })}
            description="Upload procurement documents"
          />
          <FileUpload 
            label="Procurement Annexures"
            files={data.procurementPlanAnnexures || []}
            onUpload={(files) => handleUpdate({ procurementPlanAnnexures: files })}
            onRemove={(idx) => handleUpdate({ procurementPlanAnnexures: (data.procurementPlanAnnexures || []).filter((_: any, i: number) => i !== idx) })}
            description="Add procurement annexures"
          />
        </div>
      </div>

    </div>
  );
};
