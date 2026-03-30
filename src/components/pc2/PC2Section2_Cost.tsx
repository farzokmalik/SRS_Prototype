import React from 'react';
import { useForm } from '../../context/FormContext';
import { InputField, SelectField, RadioGroup, FileUpload } from '../ui/FormElements';
import { Plus, Trash2 } from 'lucide-react';

export const PC2Section2_Cost: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.section2;

  const handleUpdate = (updates: any) => {
    updateSection('section2', { ...data, ...updates });
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
    handleUpdate(cleared);
  };

  const beneficiaryTotal = (): number => {
    return (data.beneficiaryShares || []).reduce(
      (sum: number, s: any) => sum + (parseFloat(s.amount || '0') || 0),
      0,
    );
  };

  const localCostRaw = (): number => {
    const cap = parseFloat(data.localCapitalCost || '0') || 0;
    const rev = parseFloat(data.localRevenueCost || '0') || 0;
    const comp = data.financialComponents;
    if (comp === 'Capital') return cap;
    if (comp === 'Revenue') return rev;
    if (comp === 'Both') return cap + rev;
    return 0;
  };

  const foreignCostRaw = (): number => {
    const cap = parseFloat(data.foreignCapitalCost || '0') || 0;
    const rev = parseFloat(data.foreignRevenueCost || '0') || 0;
    const comp = data.financialComponents;
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
    const foreign = isForeign ? foreignCostRaw() : 0;
    const ben = beneficiaryTotal();
    const t = local + foreign + ben;
    return t ? t.toString() : '';
  };

  const addBeneficiary = () => {
    handleUpdate({ beneficiaryShares: [...(data.beneficiaryShares || []), { adminDept: '', name: '', amount: '' }] });
  };

  const removeBeneficiary = (index: number) => {
    handleUpdate({ beneficiaryShares: data.beneficiaryShares.filter((_: any, i: number) => i !== index) });
  };

  const updateBeneficiary = (index: number, updates: any) => {
    const newShares = [...data.beneficiaryShares];
    newShares[index] = { ...newShares[index], ...updates };
    handleUpdate({ beneficiaryShares: newShares });
  };

  const showCapital = data.financialComponents === 'Capital' || data.financialComponents === 'Both';
  const showRevenue = data.financialComponents === 'Revenue' || data.financialComponents === 'Both';
  const isForeign = data.foreignFunding === 'Yes';

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
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Foreign Funding Toggle + Foreign fields when Yes */}
      <div className="card">
        <RadioGroup
          label="Foreign Funding"
          required
          name="foreignFunding"
          value={data.foreignFunding}
          onChange={(val) => handleUpdate({ foreignFunding: val })}
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

            {data.financialComponents && (
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
                      value={data.foreignCapitalCost || ''}
                      onChange={(e) => handleUpdate({ foreignCapitalCost: e.target.value })}
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
                      value={data.foreignRevenueCost || ''}
                      onChange={(e) => handleUpdate({ foreignRevenueCost: e.target.value })}
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
                value={data.source}
                onChange={(e) => handleUpdate({ source: e.target.value })}
              />
              <InputField
                label="Currency"
                placeholder="Foreign Currency"
                required
                value={data.currency}
                onChange={(e) => handleUpdate({ currency: e.target.value })}
              />
              <InputField
                label="Percentage"
                placeholder="0"
                type="number"
                description="%"
                required
                value={data.percentage}
                onChange={(e) => handleUpdate({ percentage: e.target.value })}
              />
              <InputField
                label="Exchange Rate"
                placeholder="0"
                type="number"
                required
                value={data.exchangeRate}
                onChange={(e) => handleUpdate({ exchangeRate: e.target.value })}
              />
            </div>
          </div>
        )}
      </div>

      {/* Project Financial Components & Local Cost — always shown */}
      <div className="card">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <SelectField
            label="Project Financial Components"
            required
            value={data.financialComponents}
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

        {data.financialComponents && (
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
                  value={data.localCapitalCost || ''}
                  onChange={(e) => handleUpdate({ localCapitalCost: e.target.value })}
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
                  value={data.localRevenueCost || ''}
                  onChange={(e) => handleUpdate({ localRevenueCost: e.target.value })}
                />
              </div>
            )}
          </div>
        )}
      </div>

      {/* Approval & Total Cost */}
      <div className="card">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <SelectField
            label="Approval Forum"
            required
            value={data.approvalForum}
            onChange={(e) => handleUpdate({ approvalForum: e.target.value })}
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

      {/* Beneficiary Shares */}
      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h3 style={{ fontSize: '1rem' }}>Beneficiary Shares</h3>
          <button className="btn btn-secondary" onClick={addBeneficiary} style={{ padding: '0.4rem 0.8rem', fontSize: '0.875rem' }}>
            <Plus size={16} /> Add Beneficiary
          </button>
        </div>

        {(data.beneficiaryShares || []).map((share: any, index: number) => (
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

      {/* Attachments */}
      <div className="card">
        <FileUpload
          label="Financial Attachments"
          files={data.attachments || []}
          onUpload={(files) => handleUpdate({ attachments: files })}
          onRemove={(idx) => handleUpdate({ attachments: (data.attachments || []).filter((_: any, i: number) => i !== idx) })}
          description="Upload relevant cost documents, budgets, and estimates"
        />
      </div>
    </div>
  );
};
