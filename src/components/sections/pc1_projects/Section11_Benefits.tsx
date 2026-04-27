import React from 'react';
import { useForm } from '../../../context/FormContext';
import { RTEditor } from '../../ui/RTEditor';
import { FileUpload } from '../../ui/FormElements';

export const Section11_Benefits: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.section11;

  const handleUpdate = (updates: any) => {
    updateSection('section11', { ...data, ...updates });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      
      {/* Social Benefits */}
      <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <RTEditor label="[PC-I-11.1] Social Benefits" value={data.social} onChange={(val) => handleUpdate({ social: val })} />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', paddingTop: '0.5rem' }}>
          <FileUpload 
            label="[PC-I-11.2] Social Attachments / Annexures"
            files={data.socialAttachments || []}
            onUpload={(files) => handleUpdate({ socialAttachments: files })}
            onRemove={(idx) => handleUpdate({ socialAttachments: (data.socialAttachments || []).filter((_: any, i: number) => i !== idx) })}
            description="Upload social analysis documents"
          />
          <FileUpload 
            label="Social Additional Annexures"
            files={data.socialAnnexures || []}
            onUpload={(files) => handleUpdate({ socialAnnexures: files })}
            onRemove={(idx) => handleUpdate({ socialAnnexures: (data.socialAnnexures || []).filter((_: any, i: number) => i !== idx) })}
            description="Add social annexures"
          />
        </div>
      </div>

      {/* Environmental Impact Analysis */}
      <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <RTEditor label="[PC-I-11.3] Environmental Impact Analysis" value={data.environmental} onChange={(val) => handleUpdate({ environmental: val })} />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', paddingTop: '0.5rem' }}>
          <FileUpload 
            label="[PC-I-11.4] Environmental Attachments / Annexures"
            files={data.environmentalAttachments || []}
            onUpload={(files) => handleUpdate({ environmentalAttachments: files })}
            onRemove={(idx) => handleUpdate({ environmentalAttachments: (data.environmentalAttachments || []).filter((_: any, i: number) => i !== idx) })}
            description="Upload environmental analysis documents"
          />
          <FileUpload 
            label="Environmental Additional Annexures"
            files={data.environmentalAnnexures || []}
            onUpload={(files) => handleUpdate({ environmentalAnnexures: files })}
            onRemove={(idx) => handleUpdate({ environmentalAnnexures: (data.environmentalAnnexures || []).filter((_: any, i: number) => i !== idx) })}
            description="Add environmental annexures"
          />
        </div>
      </div>

      {/* Economic Analysis */}
      <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <RTEditor label="[PC-I-11.5] Economic Analysis" value={data.economic} onChange={(val) => handleUpdate({ economic: val })} />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', paddingTop: '0.5rem' }}>
          <FileUpload 
            label="[PC-I-11.6] Economic Attachments / Annexures"
            files={data.economicAttachments || []}
            onUpload={(files) => handleUpdate({ economicAttachments: files })}
            onRemove={(idx) => handleUpdate({ economicAttachments: (data.economicAttachments || []).filter((_: any, i: number) => i !== idx) })}
            description="Upload economic analysis documents"
          />
          <FileUpload 
            label="Economic Additional Annexures"
            files={data.economicAnnexures || []}
            onUpload={(files) => handleUpdate({ economicAnnexures: files })}
            onRemove={(idx) => handleUpdate({ economicAnnexures: (data.economicAnnexures || []).filter((_: any, i: number) => i !== idx) })}
            description="Add economic annexures"
          />
        </div>
      </div>

      {/* Financial Analysis */}
      <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <RTEditor label="[PC-I-11.7] Financial Analysis" value={data.financial} onChange={(val) => handleUpdate({ financial: val })} />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', paddingTop: '0.5rem' }}>
          <FileUpload 
            label="[PC-I-11.8] Financial Attachments / Annexures"
            files={data.financialAttachments || []}
            onUpload={(files) => handleUpdate({ financialAttachments: files })}
            onRemove={(idx) => handleUpdate({ financialAttachments: (data.financialAttachments || []).filter((_: any, i: number) => i !== idx) })}
            description="Upload financial analysis documents"
          />
          <FileUpload 
            label="Financial Additional Annexures"
            files={data.financialAnnexures || []}
            onUpload={(files) => handleUpdate({ financialAnnexures: files })}
            onRemove={(idx) => handleUpdate({ financialAnnexures: (data.financialAnnexures || []).filter((_: any, i: number) => i !== idx) })}
            description="Add financial annexures"
          />
        </div>
      </div>

    </div>
  );
};
