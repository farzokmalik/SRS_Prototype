import React from 'react';
import { useForm } from '../../../context/FormContext';
import { InputField, SelectField, FileUpload } from '../../ui/FormElements';
import { MapPin } from 'lucide-react';

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
const NA_SEATS = Array.from({ length: 20 }, (_, i) => `NA-${120 + i}`);
const PP_SEATS = Array.from({ length: 20 }, (_, i) => `PP-${140 + i}`);

const SUB_SECTORS = [
  'School Education', 'Higher Education', 'Special Education', 'Literacy & Non-Formal Education',
  'Sports & Youth Affairs', 'Specialized Health Care & Medical Education', 'Health & Population',
  'Water Supply & Sanitation', 'Social Welfare', 'Women Development', 'LG&CD',
  'Roads', 'Irrigation', 'Energy', 'Public Buildings', 'Urban Development',
  'Agriculture', 'Cooperatives', 'Forestry', 'Wildlife', 'Fisheries',
  'Price Control & Commodities Management', 'Livestock & Dairy Development',
  'Industries, Commerce & Investment', 'Skill Development & Entrepreneurship',
  'Mines & Minerals', 'Tourism', 'Governance & Information Technology',
  'Labour & HR Development', 'Transport', 'Emergency Service (1122)',
  'Environment & Climate Change', 'Information & Culture', 'Archaeology',
  'Auqaf & Religious Affairs', 'Human Rights & Minority Affairs',
  'Planning & Development', 'Special Programme / Initiatives'
];


export const Section3_Location: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.section3;

  const handleUpdate = (updates: any) => {
    updateSection('section3', updates);
  };

  const selectedDivision = data.division || '';
  const districtOptions = selectedDivision ? (DISTRICTS[selectedDivision] || []) : [];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
      <div className="card" style={{ gridColumn: 'span 2' }}>
        <h3 style={{ fontSize: '1rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <MapPin size={18} color="hsl(var(--neutral-500))" /> Location Details
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
          <SelectField
            label="Division"
            value={selectedDivision}
            onChange={e => handleUpdate({ division: e.target.value, district: '' })}
            options={DIVISIONS.map(d => ({ value: d, label: d }))}
          />
          <SelectField
            label="District"
            value={data.district || ''}
            // disabled={!selectedDivision}
            onChange={e => handleUpdate({ district: e.target.value })}
            options={districtOptions.map(d => ({ value: d, label: d }))}
          />
          <SelectField
            label="National Assembly (NA)"
            value={data.na?.[0] || ''}
            onChange={e => handleUpdate({ na: [e.target.value] })}
            options={NA_SEATS.map(s => ({ value: s, label: s }))}
          />
          <SelectField
            label="Provincial Assembly (PP)"
            value={data.pp?.[0] || ''}
            onChange={e => handleUpdate({ pp: [e.target.value] })}
            options={PP_SEATS.map(s => ({ value: s, label: s }))}
          />
        </div>
      </div>

      <div className="card">
        <InputField label="Latitude" type="number" step="0.000001" value={data.lat} onChange={(e) => handleUpdate({ lat: e.target.value })} />
        <InputField label="Longitude" type="number" step="0.000001" value={data.long} onChange={(e) => handleUpdate({ long: e.target.value })} />
        <InputField label="Map URL" placeholder="https://google.com/maps/..." value={data.mapUrl} onChange={(e) => handleUpdate({ mapUrl: e.target.value })} />
      </div>

      <div className="card">
         <FileUpload 
           label="Location Attachment"
           files={data.attachments || []}
           onUpload={(files) => handleUpdate({ attachments: files })}
           onRemove={(idx) => handleUpdate({ attachments: data.attachments.filter((_: any, i: number) => i !== idx) })}
           description="Upload Location Map / Layout Plan"
         />
         <div style={{ marginTop: '1rem' }}>
           <SelectField 
             label="Sponsoring Agency" 
             value={data.sponsoringAgency} 
             onChange={(e) => handleUpdate({ sponsoringAgency: e.target.value })}
             options={SUB_SECTORS.map(s => ({ value: s, label: s }))}
           />
         </div>
      </div>

      <div className="card" style={{ gridColumn: 'span 2' }}>
        <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Responsible Authorities</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
           <SelectField 
             label="Executing Agency" 
             value={data.executingAgencies?.[0] || ''}
             onChange={(e) => handleUpdate({ executingAgencies: [e.target.value] })}
             options={SUB_SECTORS.map(s => ({ value: s, label: s }))}
           />
           <SelectField 
             label="Federal Ministry" 
             value={data.federalMinistry}
             onChange={(e) => handleUpdate({ federalMinistry: e.target.value })}
             options={[{ value: 'Planning', label: 'Ministry of Planning' }, { value: 'Finance', label: 'Ministry of Finance' }]}
           />
           <SelectField 
             label="Operation & Maintenance" 
             value={data.omAgency}
             onChange={(e) => handleUpdate({ omAgency: e.target.value })}
             options={[{ value: 'Executing', label: 'Executing Agency' }, { value: 'User Dept', label: 'User Department' }]}
           />
        </div>
      </div>
    </div>
  );
};
