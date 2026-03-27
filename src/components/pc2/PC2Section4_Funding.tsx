import React from 'react';
import { useForm } from '../../context/FormContext';
import { InputField, SelectField, RadioGroup } from '../ui/FormElements';
import { RTEditor } from '../ui/RTEditor';
import { Search } from 'lucide-react';

const MOCK_SEARCH_RESULTS: Record<string, any> = {
  '1234': { smdpNo: '01371700086', gsNo: '1385', totalAllocation: '89175000', fundsDiverted: '89175000', balanceFunds: '0', schemeName: 'Disabled Person Management Information System' },
  '5678': { smdpNo: '02451800142', gsNo: '2190', totalAllocation: '45000000', fundsDiverted: '32000000', balanceFunds: '13000000', schemeName: 'Punjab IT Labs Phase-II' },
  '9999': { smdpNo: '03562100203', gsNo: '3401', totalAllocation: '120500000', fundsDiverted: '95000000', balanceFunds: '25500000', schemeName: 'Rural Health Infrastructure Improvement' },
};

const SECTORS = [
  'Social Sectors',
  'Infrastructure Development',
  'Production Sectors',
  'Services Sectors',
  'Others',
  'Special Initiatives',
];

const PURPOSE_OPTIONS = [
  { value: 'Pending Liability', label: 'Pending Liability' },
  { value: 'Court Case', label: 'Court Case' },
  { value: 'Sub Scheme', label: 'Sub Scheme' },
];

export const PC2Section4_Funding: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.section4;

  const handleUpdate = (updates: any) => {
    updateSection('section4', { ...data, ...updates });
  };

  const handleSearch = () => {
    const query = (data.gsNoSearch || '').trim();
    const result = MOCK_SEARCH_RESULTS[query];
    if (result) {
      handleUpdate({
        smdpNo: result.smdpNo,
        gsNoResult: result.gsNo,
        totalAllocation: result.totalAllocation,
        fundsDiverted: result.fundsDiverted,
        balanceFunds: result.balanceFunds,
        schemeName: result.schemeName,
      });
    } else {
      const rand = Math.floor(Math.random() * 90000000) + 10000000;
      handleUpdate({
        smdpNo: `0${Math.floor(Math.random() * 9000000000) + 1000000000}`,
        gsNoResult: String(Math.floor(Math.random() * 9000) + 1000),
        totalAllocation: String(rand),
        fundsDiverted: String(Math.floor(rand * 0.7)),
        balanceFunds: String(Math.floor(rand * 0.3)),
        schemeName: `Scheme-${query || 'Unknown'}`,
      });
    }
  };

  const clearSearchResults = () => {
    handleUpdate({
      gsNoSearch: '',
      smdpNo: '',
      gsNoResult: '',
      totalAllocation: '',
      fundsDiverted: '',
      balanceFunds: '',
      schemeName: '',
    });
  };

  const handleSourceChange = (value: string) => {
    handleUpdate({
      fundingSource: value,
      gsNoSearch: '',
      smdpNo: '',
      gsNoResult: '',
      totalAllocation: '',
      fundsDiverted: '',
      balanceFunds: '',
      schemeName: '',
    });
  };

  const src = data.fundingSource || '';
  const showGsSearch = ['ADP_CFY', 'Programme', 'Reapp_Intra', 'Reapp_Inter'].includes(src);
  const showFundsDiverted = ['Programme', 'Reapp_Intra', 'Reapp_Inter'].includes(src);
  const showBalanceFunds = ['Programme', 'Reapp_Intra', 'Reapp_Inter'].includes(src);
  const showSchemeName = ['Reapp_Intra', 'Reapp_Inter'].includes(src);
  const showPurpose = src === 'Programme';
  const showSector = src === 'Reapp_Inter';
  const showComments = true;
  const showProposedAllocation = src === 'Next_ADP';

  const formatMillions = (val: string) => {
    const num = parseFloat(val);
    if (isNaN(num)) return '';
    return `${(num / 1000000).toFixed(3)} (Million)`;
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Source of Funding */}
      <div className="card">
        <SelectField
          label="Source of Funding"
          required
          value={src}
          onChange={(e) => handleSourceChange(e.target.value)}
          options={[
            { value: 'ADP_CFY', label: 'Scheme Listed in ADP CFY' },
            { value: 'Next_ADP', label: 'Scheme Proposed for Next ADP' },
            { value: 'Programme', label: 'Programme' },
            { value: 'Reapp_Intra', label: 'Re-appropriation (Intra-Sectoral)' },
            { value: 'Reapp_Inter', label: 'Re-appropriation (Inter-Sectoral)' },
          ]}
        />
      </div>

      {/* GS No. Search — for ADP CFY, Programme, Reapp Intra, Reapp Inter */}
      {showGsSearch && (
        <div className="card">
          <label className="label">Search for GS No. <span style={{ color: 'hsl(var(--error))' }}>*</span></label>
          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.4rem' }}>
            <input
              className="input"
              placeholder="Search for... GS No."
              value={data.gsNoSearch || ''}
              onChange={(e) => handleUpdate({ gsNoSearch: e.target.value })}
              style={{ flex: 1 }}
            />
            <button
              className="btn btn-primary"
              style={{ padding: '0 1.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
              onClick={handleSearch}
            >
              <Search size={16} /> Search
            </button>
          </div>

          {/* Auto-filled results */}
          {data.gsNoResult && (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1rem',
                marginTop: '1.25rem',
                padding: '1.25rem',
                background: 'hsl(var(--bg-main))',
                borderRadius: 'var(--radius-md)',
                border: '1px solid hsl(var(--border))',
              }}
            >
              <div className="input-group">
                <label className="label">SMDP Scheme No.</label>
                <input className="input" value={data.smdpNo || ''} readOnly style={{ background: 'hsl(var(--bg-main))', cursor: 'default' }} />
              </div>
              <div className="input-group">
                <label className="label">GS No.</label>
                <input className="input" value={data.gsNoSearch || ''} readOnly style={{ background: 'hsl(var(--bg-main))', cursor: 'default' }} />
              </div>
              <div className="input-group">
                <label className="label">Total Allocation</label>
                <input className="input" value={data.totalAllocation || ''} readOnly style={{ background: 'hsl(var(--bg-main))', cursor: 'default' }} />
                {data.totalAllocation && (
                  <p style={{ fontSize: '0.75rem', color: 'hsl(var(--text-muted))', marginTop: '0.3rem' }}>
                    {formatMillions(data.totalAllocation)}
                  </p>
                )}
              </div>
              {showFundsDiverted && (
                <div className="input-group">
                  <label className="label">Funds Diverted</label>
                  <input className="input" value={data.fundsDiverted || ''} readOnly style={{ background: 'hsl(var(--bg-main))', cursor: 'default' }} />
                  {data.fundsDiverted && (
                    <p style={{ fontSize: '0.75rem', color: 'hsl(var(--text-muted))', marginTop: '0.3rem' }}>
                      {formatMillions(data.fundsDiverted)}
                    </p>
                  )}
                </div>
              )}
              {showBalanceFunds && (
                <div className="input-group">
                  <label className="label">Balance Funds</label>
                  <input className="input" value={data.balanceFunds || ''} readOnly style={{ background: 'hsl(var(--bg-main))', cursor: 'default' }} />
                  {data.balanceFunds && (
                    <p style={{ fontSize: '0.75rem', color: 'hsl(var(--text-muted))', marginTop: '0.3rem' }}>
                      {formatMillions(data.balanceFunds)}
                    </p>
                  )}
                </div>
              )}
              {showSchemeName && (
                <div className="input-group">
                  <label className="label">Scheme Name</label>
                  <input className="input" value={data.schemeName || ''} readOnly style={{ background: 'hsl(var(--bg-main))', cursor: 'default' }} />
                </div>
              )}
              {showSector && (
                <SelectField
                  label="Sector"
                  required
                  value={data.sector || ''}
                  onChange={(e) => handleUpdate({ sector: e.target.value })}
                  options={SECTORS.map(s => ({ value: s, label: s }))}
                />
              )}
            </div>
          )}
        </div>
      )}

      {/* Proposed Allocation — for Scheme Proposed for Next ADP */}
      {showProposedAllocation && (
        <div className="card">
          <InputField
            label="Proposed Allocation"
            placeholder="Enter amount in millions"
            type="number"
            required
            value={data.proposedAllocation || ''}
            onChange={(e) => handleUpdate({ proposedAllocation: e.target.value })}
          />
        </div>
      )}

      {/* Purpose of Funding — for Programme */}
      {showPurpose && (
        <div className="card">
          <RadioGroup
            label="Purpose of Funding"
            required
            name="purposeOfFunding"
            value={data.purpose || ''}
            onChange={(val) => handleUpdate({ purpose: val })}
            options={PURPOSE_OPTIONS}
          />
        </div>
      )}

      {/* Comments — for Programme, Reapp Intra, Reapp Inter */}
      {showComments && (
        <div className="card">
          <RTEditor
            label="Comments"
            value={data.comments || ''}
            onChange={(val) => handleUpdate({ comments: val })}
          />
        </div>
      )}
    </div>
  );
};
