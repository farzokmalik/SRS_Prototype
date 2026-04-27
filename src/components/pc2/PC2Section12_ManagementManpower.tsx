import React from 'react';
import { useForm } from '../../context/FormContext';
import { InputField, FileUpload } from '../ui/FormElements';
import { RTEditor } from '../ui/RTEditor';
import { Plus, Trash2, Download } from 'lucide-react';

type CoreTeamMember = {
  noOfPosts: string;
  designation: string;
  jobDescription: string;
  qualifications: string;
  skills: string;
  experience: string;
  manMonth: string;
  salary: string;
};

const createEmptyMember = (): CoreTeamMember => ({
  noOfPosts: '',
  designation: '',
  jobDescription: '',
  qualifications: '',
  skills: '',
  experience: '',
  manMonth: '',
  salary: '',
});

export const PC2Section12_ManagementManpower: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.section12;

  const handleUpdate = (updates: any) => {
    updateSection('section12', { ...data, ...updates });
  };

  const team: CoreTeamMember[] = data.coreTeamExperts || [];

  const addMember = () => {
    handleUpdate({ coreTeamExperts: [...team, createEmptyMember()] });
  };

  const removeMember = (index: number) => {
    handleUpdate({ coreTeamExperts: team.filter((_: any, i: number) => i !== index) });
  };

  const updateMember = (index: number, updates: Partial<CoreTeamMember>) => {
    const updated = [...team];
    updated[index] = { ...updated[index], ...updates };
    handleUpdate({ coreTeamExperts: updated });
  };

  const downloadSampleResponsibilityMatrix = () => {
    const csv = [
      'Role,Responsibility,Primary Owner,Supporting Team,Timeline',
      'Project Director,Overall coordination and approvals,Project Director,Planning Unit,Throughout project',
      'Team Lead (Consultant),Lead study design and execution,Consultant Team Lead,Core Team,Month 1-6',
      'Data Analyst,Data collection and analysis,Data Analyst,Field Team,Month 1-4',
      'Client Focal Person,Facilitation and stakeholder coordination,Client Agency,Department Team,Throughout project',
    ].join('\n');

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'sample-responsibility-matrix.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div className="card">
        <RTEditor
          label="[PC-II-11.1] Management Structure / Manpower Requirement Information"
          value={data.managementManpowerInfo || ''}
          onChange={(val) => handleUpdate({ managementManpowerInfo: val })}
          required
          headerRight={
            <button
              className="btn btn-secondary"
              onClick={downloadSampleResponsibilityMatrix}
              style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}
            >
              <Download size={16} /> Download Sample: Responsibility Matrix
            </button>
          }
        />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        <div className="card">
          <FileUpload
            label="[PC-II-11.9] Attachments"
            files={data.attachments || []}
            onUpload={(files) => handleUpdate({ attachments: files })}
            onRemove={(idx) =>
              handleUpdate({
                attachments: (data.attachments || []).filter((_: any, i: number) => i !== idx),
              })
            }
            description="Upload management and manpower documents"
          />
        </div>
        <div className="card">
          <FileUpload
            label="[PC-II-11.9] Annexures"
            files={data.annexures || []}
            onUpload={(files) => handleUpdate({ annexures: files })}
            onRemove={(idx) =>
              handleUpdate({
                annexures: (data.annexures || []).filter((_: any, i: number) => i !== idx),
              })
            }
            description="Add annexures"
          />
        </div>
      </div>

      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 700 }}>Proposed Core Team of Experts</h3>
          <button className="btn btn-primary" onClick={addMember} style={{ padding: '0.45rem 0.9rem' }}>
            <Plus size={16} /> Add Expert
          </button>
        </div>

        {team.length === 0 ? (
          <p style={{ color: 'hsl(var(--text-muted))', fontSize: '0.875rem' }}>
            No expert added yet. Click "Add Expert" to create a card.
          </p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {team.map((member, index) => (
              <div key={index} className="card" style={{ margin: 0, border: '1px solid hsl(var(--border))', background: 'hsl(var(--bg-main) / 0.35)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8rem' }}>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700 }}>Expert {index + 1}</h4>
                  <button
                    className="btn btn-secondary"
                    style={{ padding: '0.35rem 0.6rem', color: 'hsl(var(--error))' }}
                    onClick={() => removeMember(index)}
                  >
                    <Trash2 size={14} />
                  </button>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.9rem' }}>
                  <InputField
                    label="No. of Posts"
                    type="number"
                    value={member.noOfPosts || ''}
                    onChange={(e) => updateMember(index, { noOfPosts: e.target.value })}
                  />
                  <InputField
                    label="[PC-II-11.1] Designation"
                    value={member.designation || ''}
                    onChange={(e) => updateMember(index, { designation: e.target.value })}
                  />
                  <InputField
                    label="Job Description"
                    value={member.jobDescription || ''}
                    onChange={(e) => updateMember(index, { jobDescription: e.target.value })}
                  />
                  <InputField
                    label="[PC-II-11.3] Qualifications"
                    value={member.qualifications || ''}
                    onChange={(e) => updateMember(index, { qualifications: e.target.value })}
                  />
                  <InputField
                    label="Skills"
                    value={member.skills || ''}
                    onChange={(e) => updateMember(index, { skills: e.target.value })}
                  />
                  <InputField
                    label="[PC-II-11.4] Experience"
                    value={member.experience || ''}
                    onChange={(e) => updateMember(index, { experience: e.target.value })}
                  />
                  <InputField
                    label="[PC-II-11.5] Man Month"
                    type="number"
                    value={member.manMonth || ''}
                    onChange={(e) => updateMember(index, { manMonth: e.target.value })}
                  />
                  <InputField
                    label="[PC-II-11.6] Salary"
                    type="number"
                    value={member.salary || ''}
                    onChange={(e) => updateMember(index, { salary: e.target.value })}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
