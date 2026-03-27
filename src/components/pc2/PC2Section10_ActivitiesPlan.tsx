import React from 'react';
import { useForm } from '../../context/FormContext';
import { RTEditor } from '../ui/RTEditor';
import { FileUpload } from '../ui/FormElements';

export const PC2Section10_ActivitiesPlan: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.section10;

  const handleUpdate = (updates: any) => {
    updateSection('section10', { ...data, ...updates });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div className="card">
        <RTEditor
          label="Activities / Implementation Plan of Scheme / Survey / Feasibility Study"
          value={data.activitiesImplementationPlan || ''}
          onChange={(val) => handleUpdate({ activitiesImplementationPlan: val })}
          required
        />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        <div className="card">
          <FileUpload
            label="Attachments"
            files={data.activitiesImplementationPlanAttachments || []}
            onUpload={(files) => handleUpdate({ activitiesImplementationPlanAttachments: files })}
            onRemove={(idx) =>
              handleUpdate({
                activitiesImplementationPlanAttachments: (data.activitiesImplementationPlanAttachments || []).filter(
                  (_: any, i: number) => i !== idx,
                ),
              })
            }
            description="Upload activity and implementation plan documents"
          />
        </div>
        <div className="card">
          <FileUpload
            label="Annexures"
            files={data.activitiesImplementationPlanAnnexures || []}
            onUpload={(files) => handleUpdate({ activitiesImplementationPlanAnnexures: files })}
            onRemove={(idx) =>
              handleUpdate({
                activitiesImplementationPlanAnnexures: (data.activitiesImplementationPlanAnnexures || []).filter(
                  (_: any, i: number) => i !== idx,
                ),
              })
            }
            description="Add annexures"
          />
        </div>
      </div>
    </div>
  );
};
