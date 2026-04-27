import React from 'react';
import { useForm } from '../../context/FormContext';
import { CheckSquare } from 'lucide-react';

type ChecklistItem = {
  key: string;
  srNo: string;
  label: string;
  isGroupHeader?: boolean;
};

const CHECKLIST_ITEMS: ChecklistItem[] = [
  { key: 'signatureAdministrativeSecretary', srNo: '1', label: '[PC-II-13.1] Signature of the Administrative Secretary' },
  { key: 'studyTorsHeader', srNo: '2', label: '[PC-II-13.2] The Study (TORs of the Consultant)', isGroupHeader: true },
  { key: 'briefBackgroundProject', srNo: '2(i)', label: '[PC-II-13.2] Brief background of The Project' },
  { key: 'objectiveConsultancy', srNo: '2(ii)', label: '[PC-II-13.2] Objective of Consultancy' },
  { key: 'scopeDutiesResponsibilities', srNo: '2(iii)', label: '[PC-II-13.2] Scope, Duties & Responsibilities of Consultants' },
  { key: 'deliverablesTimelines', srNo: '2(iv)', label: '[PC-II-13.2] Deliverables with Timelines' },
  { key: 'timeDurationConsultancy', srNo: '2(v)', label: '[PC-II-13.2] Time Duration of Proposed Consultancy' },
  { key: 'roleClientAgency', srNo: '2(vi)', label: '[PC-II-13.2] Role of Client Agency' },
  { key: 'professionalLiabilities', srNo: '2(vii)', label: '[PC-II-13.2] Professional Liabilities of Consultants' },
  { key: 'coreTeamRequirements', srNo: '2(viii)', label: '[PC-II-13.2] Core Team of Experts along with Qualification, Experience and Man Months Requirements' },
  { key: 'managementStructureManpower', srNo: '3', label: '[PC-II-13.3] Management Structure And Manpower Requirements' },
  { key: 'implementationPlan', srNo: '4', label: '[PC-II-13.3] Implementation Plan (Gantt Chart or Line Chart / Bar Chart)' },
  { key: 'riskAnalysisMitigation', srNo: '5', label: '[PC-II-13.3] Risk Analysis And Proposed Mitigation Measures' },
  { key: 'yearWiseFinancialPhasing', srNo: '6', label: '[PC-II-13.3] Year Wise Financial Phasing' },
];

export const PC2Section14_InitialScrutinyChecklist: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.section14;
  const checklist = data.checklist || {};

  const handleUpdate = (itemKey: string, updates: { status?: 'Yes' | 'No'; paging?: string }) => {
    updateSection('section14', {
      ...data,
      checklist: {
        ...checklist,
        [itemKey]: {
          ...(checklist[itemKey] || { status: '', paging: '' }),
          ...updates,
        },
      },
    });
  };

  return (
    <div className="card">
      <h3 style={{ fontSize: '1.1rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <CheckSquare size={20} color="var(--primary)" /> Initial Scrutiny Checklist
      </h3>

      <div style={{ border: '1px solid hsl(var(--border))', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: 'hsl(var(--bg-main))', borderBottom: '1px solid hsl(var(--border))' }}>
              <th style={{ padding: '0.75rem', fontSize: '0.8rem', textAlign: 'left', width: '90px' }}>SR. NO.</th>
              <th style={{ padding: '0.75rem', fontSize: '0.8rem', textAlign: 'left' }}>CHECKLIST</th>
              <th style={{ padding: '0.75rem', fontSize: '0.8rem', textAlign: 'center', width: '140px' }}>YES / NO</th>
              <th style={{ padding: '0.75rem', fontSize: '0.8rem', textAlign: 'left', width: '120px' }}>PAGING</th>
            </tr>
          </thead>
          <tbody>
            {CHECKLIST_ITEMS.map((item) => {
              const value = checklist[item.key] || { status: '', paging: '' };
              const isSubItem = item.srNo.startsWith('2(');

              return (
                <tr key={item.key} style={{ borderBottom: '1px solid hsl(var(--border) / 0.6)', background: item.isGroupHeader ? 'hsl(var(--bg-main) / 0.6)' : '#fff' }}>
                  <td style={{ padding: '0.7rem 0.75rem', fontSize: '0.875rem', color: 'hsl(var(--text-muted))' }}>
                    {item.srNo}
                  </td>
                  <td style={{ padding: '0.7rem 0.75rem', fontSize: '0.94rem', fontWeight: item.isGroupHeader ? 700 : 500, paddingLeft: isSubItem ? '1.5rem' : '0.75rem' }}>
                    {item.label}
                  </td>
                  <td style={{ padding: '0.7rem 0.75rem' }}>
                    {item.isGroupHeader ? null : (
                      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.82rem' }}>
                          <input
                            type="radio"
                            name={`chk-${item.key}`}
                            checked={value.status === 'Yes'}
                            onChange={() => handleUpdate(item.key, { status: 'Yes' })}
                          />
                          Yes
                        </label>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.82rem' }}>
                          <input
                            type="radio"
                            name={`chk-${item.key}`}
                            checked={value.status === 'No'}
                            onChange={() => handleUpdate(item.key, { status: 'No', paging: '' })}
                          />
                          No
                        </label>
                      </div>
                    )}
                  </td>
                  <td style={{ padding: '0.7rem 0.75rem' }}>
                    {item.isGroupHeader ? null : (
                      <input
                        className="input"
                        style={{ height: '34px', padding: '0.45rem 0.55rem', fontSize: '0.82rem' }}
                        value={value.paging || ''}
                        disabled={value.status !== 'Yes'}
                        onChange={(e) => handleUpdate(item.key, { paging: e.target.value })}
                        placeholder={value.status === 'Yes' ? 'Page no.' : ''}
                      />
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
