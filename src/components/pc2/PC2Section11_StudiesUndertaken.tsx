import React, { useMemo } from 'react';
import { useForm } from '../../context/FormContext';
import { InputField, SelectField, RadioGroup, FileUpload } from '../ui/FormElements';
import { RTEditor } from '../ui/RTEditor';
import { Search, Plus, Trash2 } from 'lucide-react';

type Scheme = {
  schemeId: string;
  schemeName: string;
  gsNo: string;
};

const EXISTING_SCHEMES: Scheme[] = [
  { schemeId: 'SCH-1001', schemeName: 'District Health Services Upgrade', gsNo: 'GS-2301' },
  { schemeId: 'SCH-1002', schemeName: 'Rural Water Supply Improvement', gsNo: 'GS-2302' },
  { schemeId: 'SCH-1003', schemeName: 'School Infrastructure Rehabilitation', gsNo: 'GS-2303' },
  { schemeId: 'SCH-1004', schemeName: 'Agriculture Research and Extension', gsNo: 'GS-2304' },
  { schemeId: 'SCH-1005', schemeName: 'Urban Mobility Feasibility Survey', gsNo: 'GS-2305' },
];

const SEARCH_TYPE_OPTIONS = [
  { value: 'gsNo', label: 'GS No.' },
  { value: 'schemeName', label: 'Scheme Name' },
  { value: 'schemeId', label: 'Scheme ID' },
];

const normalize = (value: string) => value.trim().toLowerCase();

export const PC2Section11_StudiesUndertaken: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.section11;

  const handleUpdate = (updates: any) => {
    updateSection('section11', { ...data, ...updates });
  };

  const schemeFilter = data.schemeFilter || 'Existing Schemes';
  const searchType = data.searchType || 'gsNo';
  const searchQuery = data.searchQuery || '';
  const newSchemeName = data.newSchemeName || '';
  const searchResults: Scheme[] = data.searchResults || [];
  const addedSchemes: Scheme[] = data.addedSchemes || [];

  const existingLookup = useMemo(() => {
    return new Set(addedSchemes.map((s) => s.schemeId));
  }, [addedSchemes]);

  const runSearch = () => {
    const q = searchQuery.trim();
    const dummyScheme: Scheme = {
      schemeId: searchType === 'schemeId' && q ? q : 'SCH-2901',
      schemeName: searchType === 'schemeName' && q ? `Scheme ${q}` : 'Dummy Scheme for Search Result',
      gsNo: searchType === 'gsNo' && q ? q : 'GS-2901',
    };
    handleUpdate({ searchResults: [dummyScheme] });
  };

  const addScheme = (scheme: Scheme) => {
    if (existingLookup.has(scheme.schemeId)) return;
    handleUpdate({ addedSchemes: [...addedSchemes, scheme] });
  };

  const removeScheme = (schemeId: string) => {
    handleUpdate({ addedSchemes: addedSchemes.filter((s) => s.schemeId !== schemeId) });
  };

  const addNewScheme = () => {
    const name = newSchemeName.trim();
    if (!name) return;

    const generatedId = `NEW-${String(addedSchemes.length + 1).padStart(4, '0')}`;
    const scheme: Scheme = { schemeId: generatedId, schemeName: name, gsNo: '-' };
    handleUpdate({
      addedSchemes: [...addedSchemes, scheme],
      newSchemeName: '',
    });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div className="card">
        <RadioGroup
          label="Schemes Filter"
          name="schemesFilter"
          value={schemeFilter}
          onChange={(val) => handleUpdate({ schemeFilter: val, searchResults: [] })}
          options={[
            { value: 'Existing Schemes', label: 'Existing Schemes' },
            { value: 'New Schemes', label: 'New Schemes' },
          ]}
        />

        {schemeFilter === 'Existing Schemes' ? (
          <div style={{ marginTop: '1rem', display: 'grid', gridTemplateColumns: '220px 1fr auto', gap: '0.75rem', alignItems: 'end' }}>
            <SelectField
              label="Search Type"
              value={searchType}
              onChange={(e) => handleUpdate({ searchType: e.target.value })}
              options={SEARCH_TYPE_OPTIONS}
            />
            <InputField
              label="Search"
              placeholder="Search for GS No., Scheme ID, Scheme Name"
              value={searchQuery}
              onChange={(e) => handleUpdate({ searchQuery: e.target.value })}
            />
            <div className="input-group">
              <label className="label" style={{ visibility: 'hidden' }}>Action</label>
              <button
                className="btn btn-primary"
                style={{ height: '42px', padding: '0 1.25rem', width: '100%' }}
                onClick={runSearch}
              >
                <Search size={16} /> Search
              </button>
            </div>
          </div>
        ) : (
          <div style={{ marginTop: '1rem', display: 'grid', gridTemplateColumns: '1fr auto', gap: '0.75rem', alignItems: 'end' }}>
            <InputField
              label="Scheme Name"
              placeholder="Enter scheme name"
              value={newSchemeName}
              onChange={(e) => handleUpdate({ newSchemeName: e.target.value })}
            />
            <div className="input-group">
              <label className="label" style={{ visibility: 'hidden' }}>Action</label>
              <button
                className="btn btn-primary"
                style={{ height: '42px', padding: '0 1.25rem', width: '100%' }}
                onClick={addNewScheme}
              >
                <Plus size={16} /> Add
              </button>
            </div>
          </div>
        )}

        {schemeFilter === 'Existing Schemes' && searchResults.length > 0 && (
          <div style={{ marginTop: '1rem', border: '1px solid hsl(var(--border))', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.2fr 1fr auto', gap: '0.75rem', padding: '0.75rem 1rem', background: 'hsl(var(--bg-main))', fontSize: '0.75rem', fontWeight: 700, color: 'hsl(var(--text-muted))', textTransform: 'uppercase' }}>
              <span>Scheme ID</span>
              <span>Scheme Name</span>
              <span>GS No.</span>
              <span>Action</span>
            </div>
            {searchResults.map((scheme) => (
              <div key={scheme.schemeId} style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.2fr 1fr auto', gap: '0.75rem', padding: '0.75rem 1rem', borderTop: '1px solid hsl(var(--border) / 0.6)', alignItems: 'center' }}>
                <span>{scheme.schemeId}</span>
                <span>{scheme.schemeName}</span>
                <span>{scheme.gsNo}</span>
                <button className="btn btn-secondary" style={{ padding: '0.35rem 0.75rem', fontSize: '0.75rem' }} onClick={() => addScheme(scheme)} disabled={existingLookup.has(scheme.schemeId)}>
                  <Plus size={14} /> {existingLookup.has(scheme.schemeId) ? 'Added' : 'Add'}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr auto', gap: '0.75rem', padding: '0.85rem 1rem', background: 'hsl(var(--bg-main))', fontSize: '0.75rem', fontWeight: 700, color: 'hsl(var(--text-muted))', textTransform: 'uppercase', borderBottom: '1px solid hsl(var(--border))' }}>
          <span>Scheme ID</span>
          <span>Scheme Name</span>
          <span>Action</span>
        </div>
        {addedSchemes.length === 0 ? (
          <p style={{ padding: '1rem', color: 'hsl(var(--text-muted))', fontSize: '0.875rem' }}>No schemes added yet.</p>
        ) : (
          addedSchemes.map((scheme) => (
            <div key={scheme.schemeId} style={{ display: 'grid', gridTemplateColumns: '1fr 2fr auto', gap: '0.75rem', padding: '0.75rem 1rem', borderBottom: '1px solid hsl(var(--border) / 0.6)', alignItems: 'center' }}>
              <span>{scheme.schemeId}</span>
              <span>{scheme.schemeName}</span>
              <button className="btn btn-secondary" style={{ padding: '0.35rem 0.65rem', color: 'hsl(var(--error))' }} onClick={() => removeScheme(scheme.schemeId)}>
                <Trash2 size={14} />
              </button>
            </div>
          ))
        )}
      </div>

      <div className="card">
        <RTEditor
          label="Indicate Studies / Surveys Already Undertaken On The Subject"
          value={data.studiesUndertakenText || ''}
          onChange={(val) => handleUpdate({ studiesUndertakenText: val })}
          required
        />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        <div className="card">
          <FileUpload
            label="Attachments"
            files={data.attachments || []}
            onUpload={(files) => handleUpdate({ attachments: files })}
            onRemove={(idx) =>
              handleUpdate({
                attachments: (data.attachments || []).filter((_: any, i: number) => i !== idx),
              })
            }
            description="Upload supporting documents"
          />
        </div>
        <div className="card">
          <FileUpload
            label="Annexures"
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
    </div>
  );
};
