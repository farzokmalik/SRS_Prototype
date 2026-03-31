import React from 'react';
import { useForm } from '../../context/FormContext';
import { InputField, SelectField, MultiCheckGroup, RadioGroup, FileUpload } from '../ui/FormElements';
import { Plus, Trash2 } from 'lucide-react';

const SECTOR_OPTIONS = {
  // ... (keeping existing SECTOR_OPTIONS)
  'Social Sectors': [
    'School Education',
    'Higher Education',
    'Special Education',
    'Literacy & Non-Formal Education',
    'Sports & Youth Affairs',
    'Specialized Health Care & Medical Education',
    'Health & Population',
    'Water Supply & Sanitation',
    'Social Welfare',
    'Women Development',
    'LG&CD'
  ],
  'Infrastructure Development': [
    'Roads',
    'Irrigation',
    'Energy',
    'Public Buildings',
    'Urban Development'
  ],
  'Production Sectors': [
    'Agriculture',
    'Cooperatives',
    'Forestry',
    'Wildlife',
    'Fisheries',
    'Price Control & Commodities Management',
    'Livestock & Dairy Development',
    'Industries, Commerce & Investment',
    'Skill Development & Entrepreneurship',
    'Mines & Minerals',
    'Tourism'
  ],
  'Services Sectors': [
    'Governance & Information Technology',
    'Labour & HR Development',
    'Transport',
    'Emergency Service (1122)'
  ],
  'Others': [
    'Environment & Climate Change',
    'Information & Culture',
    'Archaeology',
    'Auqaf & Religious Affairs',
    'Human Rights & Minority Affairs',
    'Planning & Development'
  ],
  'Special Initiatives': [
    'Special Programme / Initiatives'
  ]
};

export const PC2Section1_Overview: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data1 = formData.section1;
  const data2 = formData.section2;

  const handleUpdate1 = (updates: any) => {
    updateSection('section1', updates);
  };

  const handleUpdate2 = (updates: any) => {
    updateSection('section2', { ...data2, ...updates });
  };

  const handleComponentChange = (value: string) => {
    const cleared: any = { financialComponents: value };
    if (value === 'Capital') {
      cleared.localRevenueCost = '';
      cleared.foreignRevenueCost = '';
    } else if (value === 'Revenue') {
      cleared.localCapitalCost = '';
      cleared.foreignCapitalCost = '';
    }
    handleUpdate2(cleared);
  };

  const beneficiaryTotal = (): number => {
    return (data2.beneficiaryShares || []).reduce(
      (sum: number, s: any) => sum + (parseFloat(s.amount || '0') || 0),
      0,
    );
  };

  const localCostRaw = (): number => {
    const cap = parseFloat(data2.localCapitalCost || '0') || 0;
    const rev = parseFloat(data2.localRevenueCost || '0') || 0;
    const comp = data2.financialComponents;
    if (comp === 'Capital') return cap;
    if (comp === 'Revenue') return rev;
    if (comp === 'Both') return cap + rev;
    return 0;
  };

  const foreignCostRaw = (): number => {
    const cap = parseFloat(data2.foreignCapitalCost || '0') || 0;
    const rev = parseFloat(data2.foreignRevenueCost || '0') || 0;
    const comp = data2.financialComponents;
    if (comp === 'Capital') return cap;
    if (comp === 'Revenue') return rev;
    if (comp === 'Both') return cap + rev;
    return 0;
  };

  const computeLocalCost = (): string => {
    const ben = beneficiaryTotal();
    const local = localCostRaw();
    const t = local + ben;
    return t ? t.toString() : '';
  };

  const computeForeignCost = (): string => {
    const foreign = foreignCostRaw();
    return foreign ? foreign.toString() : '';
  };

  const computeTotalCost = (): string => {
    const local = localCostRaw();
    const foreign = data2.foreignFunding === 'Yes' ? foreignCostRaw() : 0;
    const ben = beneficiaryTotal();
    const t = local + foreign + ben;
    return t ? t.toString() : '';
  };

  const addBeneficiary = () => {
    handleUpdate2({ beneficiaryShares: [...(data2.beneficiaryShares || []), { adminDept: '', name: '', amount: '' }] });
  };

  const removeBeneficiary = (index: number) => {
    handleUpdate2({ beneficiaryShares: data2.beneficiaryShares.filter((_: any, i: number) => i !== index) });
  };

  const updateBeneficiary = (index: number, updates: any) => {
    const newShares = [...data2.beneficiaryShares];
    newShares[index] = { ...newShares[index], ...updates };
    handleUpdate2({ beneficiaryShares: newShares });
  };

  const showCapital = data2.financialComponents === 'Capital' || data2.financialComponents === 'Both';
  const showRevenue = data2.financialComponents === 'Revenue' || data2.financialComponents === 'Both';
  const isForeign = data2.foreignFunding === 'Yes';

  const costSubgridStyle = {
    display: 'grid' as const,
    gridTemplateColumns: showCapital && showRevenue ? '1fr 1fr' : '1fr',
    gap: '1rem',
    marginTop: '1rem',
    padding: '1.25rem',
    background: 'hsl(var(--bg-main))',
    borderRadius: 'var(--radius-md)',
    border: '1px solid hsl(var(--border))',
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Project Overview Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
        <div className="card" style={{ gridColumn: 'span 2' }}>
          <InputField 
            label="Project Title" 
            placeholder="Enter the full formal name of the project" 
            required 
            value={data1.projectTitle}
            onChange={(e) => handleUpdate1({ projectTitle: e.target.value })}
          />
          <div style={{ marginTop: '1.25rem' }}>
            <InputField 
              label="Meta Tags" 
              placeholder="Enter keywords or tags (e.g. Feasibility, Survey, Research)" 
              value={data1.metaTags}
              onChange={(e) => handleUpdate1({ metaTags: e.target.value })}
            />
          </div>
        </div>

        <div className="card">
          <SelectField 
            label="Project Start Year" 
            required 
            value={data1.startYear}
            onChange={(e) => handleUpdate1({ startYear: e.target.value })}
            options={[
              { value: '2023-2024', label: '2023-2024' },
              { value: '2024-2025', label: '2024-2025' },
              { value: '2025-2026', label: '2025-2026' }
            ]}
          />
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <InputField 
              label="Start Date" 
              type="date" 
              required 
              value={data1.startDate}
              onChange={(e) => handleUpdate1({ startDate: e.target.value })}
            />
            <InputField 
              label="End Date" 
              type="date" 
              required 
              value={data1.endDate}
              onChange={(e) => handleUpdate1({ endDate: e.target.value })}
            />
          </div>
        </div>

        <div className="card">
          <InputField 
            label="GS No." 
            placeholder="e.g. GS-2024-X10" 
            value={data1.gsNo}
            onChange={(e) => handleUpdate1({ gsNo: e.target.value })}
          />
          
          <SelectField 
            label="Administrative Department" 
            required 
            value={data1.adminDept}
            onChange={(e) => handleUpdate1({ adminDept: e.target.value })}
            options={[
               { value: 'School Education Department', label: 'School Education Department' },
               { value: 'Health Department', label: 'Health Department' },
               { value: 'Planning & Development', label: 'Planning & Development' }
            ]}
          />
        </div>

        <div className="card" style={{ gridColumn: 'span 2' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <SelectField 
              label="Main Sector" 
              required 
              value={data1.mainSector}
              onChange={(e) => handleUpdate1({ mainSector: e.target.value, sector: '' })}
              options={Object.keys(SECTOR_OPTIONS).map(s => ({ value: s, label: s }))}
            />
            <SelectField 
              label="Sector" 
              required 
              disabled={!data1.mainSector}
              value={data1.sector}
              onChange={(e) => handleUpdate1({ sector: e.target.value })}
              options={(SECTOR_OPTIONS[data1.mainSector as keyof typeof SECTOR_OPTIONS] || []).map(s => ({ value: s, label: s }))}
            />
          </div>
        </div>

        <div className="card">
          <RadioGroup 
            label="Location Type" 
            name="locationType"
            value={data1.locationType}
            onChange={(val) => handleUpdate1({ locationType: val })}
            options={[
              { value: 'Rural', label: 'Rural' },
              { value: 'Urban', label: 'Urban' },
              { value: 'Both', label: 'Both' }
            ]}
          />
          
          <SelectField 
            label="Project Status" 
            value={data1.projectStatus}
            onChange={(e) => handleUpdate1({ projectStatus: e.target.value })}
            options={[
              { value: 'Approved', label: 'Approved' },
              { value: 'Unapproved', label: 'Unapproved' },
              { value: 'Dropped', label: 'Dropped' }
            ]}
          />
        </div>

        <div className="card">
          <MultiCheckGroup 
            label="Project Status Type" 
            options={['Programme', 'Flagship/Mega Project', 'PPP', 'PM Package', 'CM Package', 'Block']}
            value={data1.statusType}
            onChange={(vals) => handleUpdate1({ statusType: vals })}
          />
        </div>
      </div>

      <div style={{ height: '1px', background: 'hsl(var(--border))', margin: '2rem 0' }} />

      <div style={{ marginBottom: '1.5rem' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'hsl(var(--primary))', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        
          Project Total Cost & Approval Details
        </h2>
        <p style={{ fontSize: '0.875rem', color: 'hsl(var(--text-muted))', marginTop: '0.25rem' }}>
          Provide the financial breakdown and official approval forum for this proposal.
        </p>
      </div>

      {/* Cost & Approval Cards (Transplanted from PC2Section2_Cost) */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div className="card">
          <RadioGroup
            label="Foreign Funding"
            required
            name="foreignFunding"
            value={data2.foreignFunding}
            onChange={(val) => handleUpdate2({ foreignFunding: val })}
            options={[{ value: 'Yes', label: 'Yes' }, { value: 'No', label: 'No' }]}
          />

          {isForeign && (
            <div style={{ marginTop: '1.25rem', padding: '1.25rem', background: 'hsl(var(--bg-main))', borderRadius: 'var(--radius-md)', border: '1px solid hsl(var(--border))', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="input-group">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                    <label className="label">Foreign Cost (PKR)</label>
                    <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'hsl(var(--accent))' }}>Millions</span>
                  </div>
                  <input
                    className="input"
                    value={computeForeignCost()}
                    readOnly
                    placeholder="Auto-calculated"
                    style={{ background: 'hsl(var(--bg-surface))', cursor: 'default' }}
                  />
                  <p style={{ fontSize: '0.75rem', color: 'hsl(var(--text-muted))', marginTop: '0.4rem' }}>
                    Calculated from foreign cost fields
                  </p>
                </div>
              </div>

              {data2.financialComponents && (
                <div style={{ display: 'grid', gridTemplateColumns: showCapital && showRevenue ? '1fr 1fr' : '1fr', gap: '1rem' }}>
                  {showCapital && (
                    <div className="input-group">
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                        <label className="label">Foreign Capital Cost (PKR)</label>
                        <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'hsl(var(--accent))' }}>Millions</span>
                      </div>
                      <input
                        className="input"
                        placeholder="Enter amount"
                        type="number"
                        required
                        value={data2.foreignCapitalCost || ''}
                        onChange={(e) => handleUpdate2({ foreignCapitalCost: e.target.value })}
                      />
                    </div>
                  )}
                  {showRevenue && (
                    <div className="input-group">
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                        <label className="label">Foreign Revenue Cost (PKR)</label>
                        <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'hsl(var(--accent))' }}>Millions</span>
                      </div>
                      <input
                        className="input"
                        placeholder="Enter amount"
                        type="number"
                        required
                        value={data2.foreignRevenueCost || ''}
                        onChange={(e) => handleUpdate2({ foreignRevenueCost: e.target.value })}
                      />
                    </div>
                  )}
                </div>
              )}

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <InputField
                  label="Source of Foreign Funding"
                  placeholder="Source of Foreign Funding"
                  required
                  value={data2.source}
                  onChange={(e) => handleUpdate2({ source: e.target.value })}
                />
                <InputField
                  label="Currency"
                  placeholder="Foreign Currency"
                  required
                  value={data2.currency}
                  onChange={(e) => handleUpdate2({ currency: e.target.value })}
                />
                <InputField
                  label="Percentage"
                  placeholder="0"
                  type="number"
                  description="%"
                  required
                  value={data2.percentage}
                  onChange={(e) => handleUpdate2({ percentage: e.target.value })}
                />
                <InputField
                  label="Exchange Rate"
                  placeholder="0"
                  type="number"
                  required
                  value={data2.exchangeRate}
                  onChange={(e) => handleUpdate2({ exchangeRate: e.target.value })}
                />
              </div>
            </div>
          )}
        </div>

        <div className="card">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <SelectField
              label="Project Financial Components"
              required
              value={data2.financialComponents}
              onChange={(e) => handleComponentChange(e.target.value)}
              options={[
                { value: 'Capital', label: 'Capital' },
                { value: 'Revenue', label: 'Revenue' },
                { value: 'Both', label: 'Both' },
              ]}
            />
            <div className="input-group">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                <label className="label">Local Cost (PKR)</label>
                <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'hsl(var(--accent))' }}>Millions</span>
              </div>
              <input
                className="input"
                value={computeLocalCost()}
                readOnly
                placeholder="Auto-calculated"
                style={{ background: 'hsl(var(--bg-main))', cursor: 'default' }}
              />
              <p style={{ fontSize: '0.75rem', color: 'hsl(var(--text-muted))', marginTop: '0.4rem' }}>
                Calculated from local cost fields & beneficiaries
              </p>
            </div>
          </div>

          {data2.financialComponents && (
            <div style={costSubgridStyle}>
              {showCapital && (
                <div className="input-group">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                    <label className="label">Local Capital Cost (PKR)</label>
                    <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'hsl(var(--accent))' }}>Millions</span>
                  </div>
                  <input
                    className="input"
                    placeholder="Enter amount"
                    type="number"
                    required
                    value={data2.localCapitalCost || ''}
                    onChange={(e) => handleUpdate2({ localCapitalCost: e.target.value })}
                  />
                </div>
              )}
              {showRevenue && (
                <div className="input-group">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                    <label className="label">Local Revenue Cost (PKR)</label>
                    <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'hsl(var(--accent))' }}>Millions</span>
                  </div>
                  <input
                    className="input"
                    placeholder="Enter amount"
                    type="number"
                    required
                    value={data2.localRevenueCost || ''}
                    onChange={(e) => handleUpdate2({ localRevenueCost: e.target.value })}
                  />
                </div>
              )}
            </div>
          )}
        </div>

        <div className="card">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <SelectField
              label="Approval Forum"
              required
              value={data2.approvalForum}
              onChange={(e) => handleUpdate2({ approvalForum: e.target.value })}
              options={[
                { value: 'DDSC', label: 'DDSC' },
                { value: 'CDWP', label: 'CDWP' },
                { value: 'PDWP', label: 'PDWP' },
              ]}
            />
            <div className="input-group">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                <label className="label">Total Cost (PKR)</label>
                <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'hsl(var(--accent))' }}>Millions</span>
              </div>
              <input
                className="input"
                value={computeTotalCost()}
                readOnly
                placeholder="Auto-calculated"
                style={{ background: 'hsl(var(--bg-main))', cursor: 'default' }}
              />
              <p style={{ fontSize: '0.75rem', color: 'hsl(var(--text-muted))', marginTop: '0.4rem' }}>
                Auto-calculated from all cost fields & beneficiaries
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <h3 style={{ fontSize: '1rem' }}>Beneficiary Shares</h3>
            <button className="btn btn-secondary" onClick={addBeneficiary} style={{ padding: '0.4rem 0.8rem', fontSize: '0.875rem' }}>
              <Plus size={16} /> Add Beneficiary
            </button>
          </div>

          {(data2.beneficiaryShares || []).map((share: any, index: number) => (
            <div key={index} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 50px', gap: '1rem', alignItems: 'flex-end', marginBottom: '1rem', padding: '1rem', background: 'hsl(var(--bg-main))', borderRadius: 'var(--radius-md)' }}>
              <SelectField
                label="Admin Department"
                value={share.adminDept}
                onChange={(e) => updateBeneficiary(index, { adminDept: e.target.value })}
                options={[{ value: 'Edu', label: 'School Education' }, { value: 'Health', label: 'Health' }]}
              />
              <InputField label="Name" value={share.name} onChange={(e) => updateBeneficiary(index, { name: e.target.value })} />
              <div className="input-group">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                  <label className="label">Amount</label>
                  <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'hsl(var(--accent))' }}>Millions</span>
                </div>
                <input
                  className="input"
                  type="number"
                  value={share.amount}
                  onChange={(e) => updateBeneficiary(index, { amount: e.target.value })}
                />
              </div>
              <button className="btn btn-secondary" onClick={() => removeBeneficiary(index)} style={{ padding: '0.6rem', color: 'var(--error)' }}>
                <Trash2 size={18} />
              </button>
            </div>
          ))}
        </div>

        <div className="card">
          <FileUpload
            label="Financial Attachments"
            files={data2.attachments || []}
            onUpload={(files) => handleUpdate2({ attachments: files })}
            onRemove={(idx) => handleUpdate2({ attachments: (data2.attachments || []).filter((_: any, i: number) => i !== idx) })}
            description="Upload relevant cost documents, budgets, and estimates"
          />
        </div>
      </div>
    </div>
  );
};
