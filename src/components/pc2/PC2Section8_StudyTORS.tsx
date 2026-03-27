import React from 'react';
import { useForm } from '../../context/FormContext';
import { RTEditor } from '../ui/RTEditor';
import { FileUpload } from '../ui/FormElements';

type TorField = {
  key: string;
  label: string;
  required?: boolean;
};

const TORS_FIELDS: TorField[] = [
  { key: 'briefBackground', label: 'Brief Background of the Project', required: true },
  { key: 'consultancyObjectives', label: 'Objectives of Consultancy', required: true },
  { key: 'consultancyScope', label: 'Scope of Consultancy', required: true },
  { key: 'dutiesResponsibilities', label: 'Duties and Responsibilities of Consultants', required: true },
  { key: 'deliverablesTimelines', label: 'Deliverables with Timelines', required: true },
  { key: 'durationOfConsultancy', label: 'Time Duration of Proposed Consultancy', required: true },
  { key: 'rolesOfClientAgency', label: 'Roles of Client Agency', required: true },
  { key: 'professionalLiabilities', label: 'Professional Liabilities of Consultants', required: true },
  { key: 'coreTeamExperts', label: 'Core Team of Experts Along with Qualification, Experience and Man-Months Requirements', required: true },
  { key: 'projectFinancingModes', label: 'Possibility of Prospective Project Financing and Implementation through Different Modes', required: true },
  { key: 'riskSensitivityMitigation', label: 'Risk and Sensitivity Analysis and Proposed Mitigation Measures', required: true },
  { key: 'forwardBackwardLinkages', label: 'Forward Backward Linkages of the Proposed Study / Survey', required: true },
  { key: 'expectedOutput', label: 'Expected Output of the Proposed Feasibility Study / Survey', required: true },
];

export const PC2Section8_StudyTORS: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.section8;

  const handleUpdate = (updates: any) => {
    updateSection('section8', { ...data, ...updates });
  };

  const fileGrid = { display: 'grid' as const, gridTemplateColumns: '1fr 1fr', gap: '1.5rem' };

  const renderField = (field: TorField) => {
    const attachmentsKey = `${field.key}Attachments`;
    const annexuresKey = `${field.key}Annexures`;
    const attachments = data[attachmentsKey] || [];
    const annexures = data[annexuresKey] || [];

    return (
      <div key={field.key} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        <div className="card">
          <RTEditor
            label={field.label}
            required={field.required}
            value={data[field.key] || ''}
            onChange={(val) => handleUpdate({ [field.key]: val })}
          />
        </div>
        <div style={fileGrid}>
          <div className="card">
            <FileUpload
              label="Attachments"
              files={attachments}
              onUpload={(files) => handleUpdate({ [attachmentsKey]: files })}
              onRemove={(idx) =>
                handleUpdate({
                  [attachmentsKey]: attachments.filter((_: any, i: number) => i !== idx),
                })
              }
              description={`Upload documents for ${field.label.toLowerCase()}`}
            />
          </div>
          <div className="card">
            <FileUpload
              label="Annexures"
              files={annexures}
              onUpload={(files) => handleUpdate({ [annexuresKey]: files })}
              onRemove={(idx) =>
                handleUpdate({
                  [annexuresKey]: annexures.filter((_: any, i: number) => i !== idx),
                })
              }
              description={`Add annexures for ${field.label.toLowerCase()}`}
            />
          </div>
        </div>
      </div>
    );
  };

  const groupAKeys = [
    'briefBackground',
    'consultancyObjectives',
    'consultancyScope',
    'dutiesResponsibilities',
    'rolesOfClientAgency',
    'professionalLiabilities',
    'durationOfConsultancy',
  ];

  const groupA = TORS_FIELDS.filter((field) => groupAKeys.includes(field.key));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {groupA.map(renderField)}
    </div>
  );
};
