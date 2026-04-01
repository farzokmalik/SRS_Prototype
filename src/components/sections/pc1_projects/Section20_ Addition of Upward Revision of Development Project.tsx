import React from 'react';
import { useForm } from '../../../context/FormContext';
import { InputField, SelectField, TextAreaField, RadioGroup, FileUpload } from '../../ui/FormElements';
import { RTEditor } from '../../ui/RTEditor';
import { Trash2 } from 'lucide-react';

const APPROVAL_STATUSES = ['Original', '1st Revised', '2nd Revised', '3rd Revised', 'Subsequent Revision'];
const APPROVAL_FORUMS = ['PDWP', 'CDWP', 'ECNEC', 'DDSC', 'DSSC', 'Ministerial Committee'];
const YEARS = Array.from({ length: 10 }, (_, i) => `20${23 + i}-20${24 + i}`);

export const Section2_RevisionHistory: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.section2 || {};

  const history = data.history || [
    { status: 'Original', cost: '', date: '', forum: '', remarks: '' }
  ];

  const financialProgress = data.financialProgress || [
    { year: '', gsNo: '', original: '', revised: '', pdReleases: '', fdReleases: '', utilization: '', percentage: '' }
  ];

  const currentProposal = data.currentProposal || {
    revisionRequiredDueTo: [
      { reason: 'Revision of MRS rates', yesNo: 'No', costImpact: '' },
      { reason: 'Increase in scope of the scheme', yesNo: 'No', costImpact: '' },
      { reason: 'Both revision in MRS rates and increase in scope of the scheme', yesNo: 'No', costImpact: '' }
    ],
    proposedRevisedCost: ''
  };

  const scopeComparison = data.scopeComparison || [
    { approved: '', proposed: '', increase: '', justification: '' }
  ];

  const futureFunding = data.futureFunding || [
    { year: '', allocation: '' }
  ];

  const handleUpdate = (updates: any) => {
    updateSection('section2', { ...data, ...updates });
  };

  const addRow = (field: string, list: any[], template: any) => {
    handleUpdate({ [field]: [...list, template] });
  };

  const removeRow = (field: string, list: any[], index: number) => {
    if (list.length <= 1) return;
    const newList = [...list];
    newList.splice(index, 1);
    handleUpdate({ [field]: newList });
  };

  const updateRow = (field: string, list: any[], index: number, updates: any) => {
    const newList = [...list];
    newList[index] = { ...newList[index], ...updates };
    handleUpdate({ [field]: newList });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* 1. Approval History */}
      <div className="card shadow-sm">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid hsl(var(--border))', paddingBottom: '1rem' }}>
          <h3 style={{ fontSize: '1.125rem', fontWeight: 600 }}>
            Addition of Upward Revision of Development Project
          </h3>
          <button type="button" onClick={() => addRow('history', history, { status: '', cost: '', date: '', forum: '', remarks: '' })} className="btn btn-secondary btn-sm">
            Add Revision
          </button>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table className="form-table">
            <thead>
              <tr>
                <th style={{ width: '20%' }}>Approval Status</th>
                <th style={{ width: '15%' }}>Cost (M)</th>
                <th style={{ width: '15%' }}>Date</th>
                <th style={{ width: '20%' }}>Forum</th>
                <th>Remarks</th>
                <th style={{ width: '50px' }}></th>
              </tr>
            </thead>
            <tbody>
              {history.map((row: any, idx: number) => (
                <tr key={idx}>
                  <td><SelectField label="" value={row.status} onChange={(e: any) => updateRow('history', history, idx, { status: e.target.value })} options={APPROVAL_STATUSES} /></td>
                  <td><InputField label="" type="number" value={row.cost} onChange={(e: any) => updateRow('history', history, idx, { cost: e.target.value })} /></td>
                  <td><InputField label="" type="date" value={row.date} onChange={(e: any) => updateRow('history', history, idx, { date: e.target.value })} /></td>
                  <td><SelectField label="" value={row.forum} onChange={(e: any) => updateRow('history', history, idx, { forum: e.target.value })} options={APPROVAL_FORUMS} /></td>
                  <td><InputField label="" value={row.remarks} onChange={(e: any) => updateRow('history', history, idx, { remarks: e.target.value })} /></td>
                  <td style={{ verticalAlign: 'middle' }}>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                      <button onClick={() => removeRow('history', history, idx)} style={{ background: 'none', border: 'none', color: 'hsl(var(--text-muted))', cursor: 'pointer', padding: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 2. Year Wise Financial Progress */}
      <div className="card shadow-sm">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid hsl(var(--border))', paddingBottom: '1rem' }}>
          <h3 style={{ fontSize: '1.125rem', fontWeight: 600 }}>
            Year Wise Financial Progress
          </h3>
          <button type="button" onClick={() => addRow('financialProgress', financialProgress, { year: '', gsNo: '', original: '', revised: '', pdReleases: '', fdReleases: '', utilization: '', percentage: '' })} className="btn btn-secondary btn-sm">
            Add Year
          </button>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table className="form-table">
            <thead>
              <tr>
                <th style={{ width: '12%' }}>Year</th>
                <th style={{ width: '12%' }}>GS No</th>
                <th>Orig. Alloc</th>
                <th>Rev. Alloc</th>
                <th>P&D Rel.</th>
                <th>FD Rel.</th>
                <th>Utilization</th>
                <th style={{ width: '8%' }}>% Exp.</th>
                <th style={{ width: '40px' }}></th>
              </tr>
            </thead>
            <tbody>
              {financialProgress.map((row: any, idx: number) => (
                <tr key={idx}>
                  <td><SelectField label="" value={row.year} options={YEARS} onChange={(e: any) => updateRow('financialProgress', financialProgress, idx, { year: e.target.value })} /></td>
                  <td><InputField label="" value={row.gsNo} onChange={(e: any) => updateRow('financialProgress', financialProgress, idx, { gsNo: e.target.value })} /></td>
                  <td><InputField label="" type="number" value={row.original} onChange={(e: any) => updateRow('financialProgress', financialProgress, idx, { original: e.target.value })} /></td>
                  <td><InputField label="" type="number" value={row.revised} onChange={(e: any) => updateRow('financialProgress', financialProgress, idx, { revised: e.target.value })} /></td>
                  <td><InputField label="" type="number" value={row.pdReleases} onChange={(e: any) => updateRow('financialProgress', financialProgress, idx, { pdReleases: e.target.value })} /></td>
                  <td><InputField label="" type="number" value={row.fdReleases} onChange={(e: any) => updateRow('financialProgress', financialProgress, idx, { fdReleases: e.target.value })} /></td>
                  <td><InputField label="" type="number" value={row.utilization} onChange={(e: any) => updateRow('financialProgress', financialProgress, idx, { utilization: e.target.value })} /></td>
                  <td><InputField label="" value={row.percentage} onChange={(e: any) => updateRow('financialProgress', financialProgress, idx, { percentage: e.target.value })} /></td>
                  <td style={{ verticalAlign: 'middle' }}>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                      <button type="button" onClick={() => removeRow('financialProgress', financialProgress, idx)}
                        style={{ background: 'none', border: 'none', color: 'hsl(var(--text-muted))', cursor: 'pointer', padding: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 3. Current Proposal */}
      <div className="card shadow-sm">
        <div style={{ borderBottom: '1px solid hsl(var(--border))', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.125rem', fontWeight: 600 }}>
            Current Proposal Details
          </h3>
        </div>
        <p style={{ fontSize: '0.875rem', color: 'hsl(var(--text-muted))', marginBottom: '1rem' }}>
          Proposed Revised Cost: <strong>{currentProposal.proposedRevisedCost} (Million)</strong>
        </p>
        <div style={{ overflowX: 'auto', padding: '0 1rem' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={{ padding: '1rem', borderBottom: '1px solid hsl(var(--border))', textAlign: 'left', fontSize: '0.9rem', fontWeight: 700, color: 'hsl(var(--text-main) / 0.8)' }}>
                  Whether Revision is Required Due To
                </th>
                <th style={{ width: '300px', padding: '1rem', borderBottom: '1px solid hsl(var(--border))', textAlign: 'center', fontSize: '0.9rem', fontWeight: 700, color: 'hsl(var(--text-main) / 0.8)' }}>
                  YES/NO
                </th>
                <th style={{ width: '220px', padding: '1rem', borderBottom: '1px solid hsl(var(--border))', textAlign: 'center', fontSize: '0.9rem', fontWeight: 700, color: 'hsl(var(--text-main) / 0.8)' }}>
                  Cost Impact
                </th>
              </tr>
            </thead>
            <tbody>
              {currentProposal.revisionRequiredDueTo.map((row: any, idx: number) => (
                <tr key={idx}>
                  <td style={{ padding: '1.5rem 1rem', borderBottom: '1px solid hsl(var(--border) / 0.4)', color: 'hsl(var(--text-main) / 0.9)', fontWeight: 500 }}>
                    {row.reason}
                  </td>
                  <td style={{ padding: '1.5rem 1rem', borderBottom: '1px solid hsl(var(--border) / 0.4)', verticalAlign: 'middle' }}>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                      <RadioGroup 
                        label="" 
                        name={`rev_${idx}`} 
                        options={[{ value: 'Yes', label: 'Yes' }, { value: 'No', label: 'No' }]} 
                        value={row.yesNo} 
                        onChange={(val) => {
                          const newDueTo = [...currentProposal.revisionRequiredDueTo];
                          newDueTo[idx].yesNo = val;
                          handleUpdate({ currentProposal: { ...currentProposal, revisionRequiredDueTo: newDueTo } });
                        }} 
                      />
                    </div>
                  </td>
                  <td style={{ padding: '1.5rem 1rem', borderBottom: '1px solid hsl(var(--border) / 0.4)', verticalAlign: 'middle' }}>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                      <div style={{ width: '100%', maxWidth: '200px' }}>
                        <InputField 
                          label="" 
                          type="number" 
                          value={row.costImpact} 
                          onChange={(e: any) => {
                            const newDueTo = [...currentProposal.revisionRequiredDueTo];
                            newDueTo[idx].costImpact = e.target.value;
                            handleUpdate({ currentProposal: { ...currentProposal, revisionRequiredDueTo: newDueTo } });
                          }} 
                        />
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 4. Scope Comparison */}
      <div className="card shadow-sm">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid hsl(var(--border))', paddingBottom: '1rem' }}>
          <h3 style={{ fontSize: '1.125rem', fontWeight: 600 }}>
            Approved vs Revised Scope
          </h3>
          <button type="button" onClick={() => addRow('scopeComparison', scopeComparison, { approved: '', proposed: '', increase: '', justification: '' })} className="btn btn-secondary btn-sm shadow-sm" style={{ padding: '0.6rem 1.25rem', borderRadius: 'var(--radius-lg)' }}>
            Add Scope Item
          </button>
        </div>
        
        <div style={{ padding: '0 1rem' }}>
          {/* Headers */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1.2fr 48px', gap: '1.5rem', marginBottom: '1rem', paddingRight: '48px' }}>
            <div style={{ textAlign: 'center', fontSize: '0.94rem', fontWeight: 700, color: 'hsl(var(--text-main) / 0.8)' }}>Approved Scope</div>
            <div style={{ textAlign: 'center', fontSize: '0.94rem', fontWeight: 700, color: 'hsl(var(--text-main) / 0.8)' }}>Proposed Revised Scope</div>
            <div style={{ textAlign: 'center', fontSize: '0.94rem', fontWeight: 700, color: 'hsl(var(--text-main) / 0.8)' }}>Increase in Scope</div>
            <div style={{ textAlign: 'center', fontSize: '0.94rem', fontWeight: 700, color: 'hsl(var(--text-main) / 0.8)' }}>Justification</div>
            <div></div>
          </div>

          {/* Rows */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {scopeComparison.map((row: any, idx: number) => (
              <div key={idx} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1.2fr 48px', gap: '1.5rem', alignItems: 'center' }}>
                <TextAreaField label="" value={row.approved} rows={4} onChange={(e: any) => updateRow('scopeComparison', scopeComparison, idx, { approved: e.target.value })} />
                <TextAreaField label="" value={row.proposed} rows={4} onChange={(e: any) => updateRow('scopeComparison', scopeComparison, idx, { proposed: e.target.value })} />
                <TextAreaField label="" value={row.increase} rows={4} onChange={(e: any) => updateRow('scopeComparison', scopeComparison, idx, { increase: e.target.value })} />
                <TextAreaField label="" value={row.justification} rows={4} onChange={(e: any) => updateRow('scopeComparison', scopeComparison, idx, { justification: e.target.value })} />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <button type="button" onClick={() => removeRow('scopeComparison', scopeComparison, idx)}
                    style={{ background: 'none', border: 'none', color: 'hsl(var(--text-muted))', cursor: 'pointer', padding: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 5. Quantitative Details */}
      <div className="card shadow-sm">
        <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1.25rem' }}>Details in Quantitative / Physical Terms</h3>
        <RTEditor 
          label="" 
          value={data.quantitativeDetails} 
          onChange={(val) => handleUpdate({ quantitativeDetails: val })} 
        />
      </div>

      <div className="card shadow-sm">
        <FileUpload 
          label="Site Map Attachment(s)" 
          files={data.siteMapAttachments || []} 
          onUpload={(files) => handleUpdate({ siteMapAttachments: files })} 
          onRemove={(idx) => handleUpdate({ siteMapAttachments: data.siteMapAttachments.filter((_: any, i: number) => i !== idx) })} 
          description="Upload Site Map / Layout Plan"
        />
      </div>

      {/* 6. Future Funding Plan */}
      <div className="card shadow-sm">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid hsl(var(--border))', paddingBottom: '1rem' }}>
          <h3 style={{ fontSize: '1.125rem', fontWeight: 600 }}>
            Future Funding Plan
          </h3>
          <button type="button" onClick={() => addRow('futureFunding', futureFunding, { year: '', allocation: '' })} className="btn btn-secondary btn-sm shadow-sm" style={{ padding: '0.6rem 1.25rem', borderRadius: 'var(--radius-lg)' }}>
            Add Year
          </button>
        </div>
        
        <div style={{ padding: '0 1rem' }}>
          {/* Headers */}
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(200px, 1fr) minmax(200px, 1fr) 48px', gap: '1.5rem', marginBottom: '0.75rem', maxWidth: '800px' }}>
            <div style={{ textAlign: 'center', fontSize: '0.94rem', fontWeight: 700, color: 'hsl(var(--text-main) / 0.8)' }}>Year</div>
            <div style={{ textAlign: 'center', fontSize: '0.94rem', fontWeight: 700, color: 'hsl(var(--text-main) / 0.8)' }}>Allocation (Million)</div>
            <div></div>
          </div>

          {/* Rows */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '800px' }}>
            {futureFunding.map((row: any, idx: number) => (
              <div key={idx} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 48px', gap: '1.5rem', alignItems: 'center' }}>
                <SelectField label="" value={row.year} options={YEARS} onChange={(e: any) => updateRow('futureFunding', futureFunding, idx, { year: e.target.value })} />
                <InputField label="" type="number" value={row.allocation} onChange={(e: any) => updateRow('futureFunding', futureFunding, idx, { allocation: e.target.value })} />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <button type="button" onClick={() => removeRow('futureFunding', futureFunding, idx)}
                    style={{ background: 'none', border: 'none', color: 'hsl(var(--text-muted))', cursor: 'pointer', padding: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 7. Implementation Period */}
      <div className="card shadow-sm">
        <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1.25rem' }}>Period of Implementation</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          <InputField label="Approved (Months)" type="number" value={data.implementationApproved} onChange={(e: any) => handleUpdate({ implementationApproved: e.target.value })} />
          <InputField label="Revised (Months)" type="number" value={data.implementationRevised} onChange={(e: any) => handleUpdate({ implementationRevised: e.target.value })} />
        </div>
        <div style={{ marginTop: '1.5rem' }}>
          <TextAreaField 
            label="Operation & Maintenance after completion of the project" 
            value={data.omPostCompletion} 
            onChange={(e: any) => handleUpdate({ omPostCompletion: e.target.value })} 
          />
        </div>
      </div>

      {/* 8. Annual Income */}
      <div className="card shadow-sm">
        <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1.25rem' }}>Annual Income after completion</h3>
        <RTEditor 
          label="" 
          value={data.annualIncome} 
          onChange={(val) => handleUpdate({ annualIncome: val })} 
        />
      </div>

      {/* 9. Recommendation & Attachments */}
      <div className="card shadow-sm" style={{ borderTop: '4px solid hsl(var(--accent))' }}>
        <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '1.5rem' }}>
          Recommendation
        </h3>
        <RTEditor 
          label="Proposed Recommendation / Approval Notes" 
          value={data.recommendation} 
          onChange={(val) => handleUpdate({ recommendation: val })} 
        />
        <div style={{ marginTop: '2rem' }}>
          <FileUpload 
            label="General Revision Attachments" 
            files={data.generalAttachments || []} 
            onUpload={(files) => handleUpdate({ generalAttachments: files })} 
            onRemove={(idx) => handleUpdate({ generalAttachments: (data.generalAttachments || []).filter((_: any, i: number) => i !== idx) })} 
            description="Upload any other supporting documents (Briefs, Presentation, etc.)"
          />
        </div>
      </div>
    </div>
  );
};
