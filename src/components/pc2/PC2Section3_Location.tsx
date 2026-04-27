import React from 'react';
import { useForm } from '../../context/FormContext';
import { InputField, SelectField, FileUpload } from '../ui/FormElements';
import { MapPin, Building2 } from 'lucide-react';

const DIVISIONS = ['Bahawalpur', 'Dera Ghazi Khan', 'Faisalabad', 'Gujranwala', 'Gujrat', 'Lahore', 'Multan', 'Rawalpindi', 'Sahiwal', 'Sargodha'];
const DISTRICTS: Record<string, string[]> = {
  'Bahawalpur':       ['Bahawalpur', 'Bahawalnagar', 'Rahim Yar Khan'],
  'Dera Ghazi Khan':  ['Dera Ghazi Khan', 'Layyah', 'Muzaffargarh', 'Rajanpur', 'Kot Addu', 'Taunsa Sharif'],
  'Faisalabad':       ['Faisalabad', 'Chiniot', 'Toba Tek Singh', 'Jhang'],
  'Gujranwala':       ['Gujranwala', 'Hafizabad', 'Mandi Bahauddin', 'Narowal', 'Sialkot'],
  'Gujrat':           ['Gujrat', 'Mandi Bahauddin', 'Hafizabad', 'Wazirabad'],
  'Lahore':           ['Lahore', 'Kasur', 'Nankana Sahib', 'Sheikhupura'],
  'Multan':           ['Multan', 'Lodhran', 'Khanewal', 'Vehari'],
  'Rawalpindi':       ['Rawalpindi', 'Jhelum', 'Chakwal', 'Attock', 'Murree', 'Talagang'],
  'Sahiwal':          ['Sahiwal', 'Pakpattan', 'Okara'],
  'Sargodha':         ['Sargodha', 'Khushab', 'Mianwali', 'Bhakkar'],
};

const NA_SEATS = Array.from({ length: 50 }, (_, i) => `NA-${51 + i}`);
const PP_SEATS = Array.from({ length: 50 }, (_, i) => `PP-${1 + i}`);

const UNION_COUNCILS = Array.from({ length: 30 }, (_, i) => `UC-${i + 1}`);

const EXECUTING_AGENCIES = [
  'Punjab Information Technology Board',
  'C&W Department',
  'HUD & ITD',
  'Local Government',
  'Irrigation Department',
  'Public Health Engineering',
  'Punjab Highway Department',
];

const SPONSORING_AGENCIES = [
  'School Education',
  'Health Department',
  'Planning & Development',
  'Finance Department',
  'Higher Education',
  'Industries Department',
  'Agriculture Department',
];

export const PC2Section3_Location: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.section3;

  const handleUpdate = (updates: any) => {
    updateSection('section3', { ...data, ...updates });
  };

  const selectedDivision = data.division || '';
  const districtOptions = selectedDivision ? (DISTRICTS[selectedDivision] || []) : [];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Location Details */}
      <div className="card">
        <h3 style={{ fontSize: '1rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <MapPin size={18} color="hsl(var(--neutral-500))" /> Location Details
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <SelectField
            label="[PC-II-2.1] Division"
            required
            value={selectedDivision}
            onChange={(e) => handleUpdate({ division: e.target.value, district: '' })}
            options={DIVISIONS.map(d => ({ value: d, label: d }))}
          />
          <SelectField
            label="[PC-II-2.2] District"
            required
            value={data.district || ''}
            onChange={(e) => handleUpdate({ district: e.target.value })}
            options={districtOptions.map(d => ({ value: d, label: d }))}
          />
          <SelectField
            label="[PC-II-2.3] National Assembly (NA)"
            value={data.na?.[0] || ''}
            onChange={(e) => handleUpdate({ na: [e.target.value] })}
            options={NA_SEATS.map(s => ({ value: s, label: s }))}
          />
          <SelectField
            label="[PC-II-2.4] Provincial Assembly (PP)"
            value={data.pp?.[0] || ''}
            onChange={(e) => handleUpdate({ pp: [e.target.value] })}
            options={PP_SEATS.map(s => ({ value: s, label: s }))}
          />
          <SelectField
            label="[PC-II-2.5] Union Council"
            value={data.unionCouncil || ''}
            onChange={(e) => handleUpdate({ unionCouncil: e.target.value })}
            options={UNION_COUNCILS.map(u => ({ value: u, label: u }))}
          />
        </div>
      </div>

      {/* Coordinates & Map */}
      <div className="card">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <InputField
            label="[PC-II-2.6] Latitude"
            placeholder="Enter Latitude (1.00-10.00)"
            type="number"
            value={data.lat}
            onChange={(e) => handleUpdate({ lat: e.target.value })}
          />
          <InputField
            label="[PC-II-2.7] Longitude"
            placeholder="Enter Longitude (1.00-10.00)"
            type="number"
            value={data.long}
            onChange={(e) => handleUpdate({ long: e.target.value })}
          />
        </div>
        <div style={{ marginTop: '1rem' }}>
          <InputField
            label="[PC-II-2.8] Map URL"
            placeholder="https://google.com/maps/..."
            value={data.mapUrl}
            onChange={(e) => handleUpdate({ mapUrl: e.target.value })}
          />
        </div>
      </div>

      {/* Location Attachments */}
      <div className="card">
        <FileUpload
          label="[PC-II-2.9] Location Attachment(s)"
          files={data.attachments || []}
          onUpload={(files) => handleUpdate({ attachments: files })}
          onRemove={(idx) => handleUpdate({ attachments: (data.attachments || []).filter((_: any, i: number) => i !== idx) })}
          description="Upload Location Map / Layout Plan"
        />
      </div>

      {/* Responsible Authorities */}
      <div className="card">
        <h3 style={{ fontSize: '1rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Building2 size={18} color="hsl(var(--neutral-500))" /> Responsible Authorities
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <SelectField
            label="[PC-II-2.10] Executing Agency"
            required
            value={data.executingAgencies?.[0] || ''}
            onChange={(e) => handleUpdate({ executingAgencies: [e.target.value] })}
            options={EXECUTING_AGENCIES.map(a => ({ value: a, label: a }))}
          />
          <SelectField
            label="[PC-II-2.11] Sponsoring Agency"
            required
            value={data.sponsoringAgency || ''}
            onChange={(e) => handleUpdate({ sponsoringAgency: e.target.value })}
            options={SPONSORING_AGENCIES.map(a => ({ value: a, label: a }))}
          />
        </div>
      </div>

      {/* Agency Attachments */}
      <div className="card">
        <FileUpload
          label="[PC-II-2.12] Agency Attachment(s)"
          files={data.agencyAttachments || []}
          onUpload={(files) => handleUpdate({ agencyAttachments: files })}
          onRemove={(idx) => handleUpdate({ agencyAttachments: (data.agencyAttachments || []).filter((_: any, i: number) => i !== idx) })}
          description="Upload relevant agency documents"
        />
      </div>
    </div>
  );
};
