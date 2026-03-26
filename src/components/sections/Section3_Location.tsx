import React from 'react';
import { useForm } from '../../context/FormContext';
import { InputField, SelectField, FileUpload } from '../ui/FormElements';
import { MapPin } from 'lucide-react';

const DIVISIONS = ['Lahore', 'Gujranwala', 'Faisalabad', 'Multan', 'Rawalpindi', 'Sargodha', 'DG Khan', 'Bahawalpur'];
const DISTRICTS: Record<string, string[]> = {
  'Lahore':      ['Lahore'],
  'Gujranwala':  ['Gujranwala', 'Sialkot', 'Narowal', 'Gujrat', 'Mandi Bahauddin', 'Hafizabad'],
  'Faisalabad':  ['Faisalabad', 'Jhang', 'Chiniot', 'Toba Tek Singh'],
  'Multan':      ['Multan', 'Khanewal', 'Lodhran', 'Vehari'],
  'Rawalpindi':  ['Rawalpindi', 'Attock', 'Chakwal', 'Jhelum'],
  'Sargodha':    ['Sargodha', 'Khushab', 'Mianwali', 'Bhakkar'],
  'DG Khan':     ['DG Khan', 'Layyah', 'Muzaffargarh', 'Rajanpur'],
  'Bahawalpur':  ['Bahawalpur', 'Bahawalnagar', 'Rahim Yar Khan'],
};
const NA_SEATS = Array.from({ length: 20 }, (_, i) => `NA-${120 + i}`);
const PP_SEATS = Array.from({ length: 20 }, (_, i) => `PP-${140 + i}`);

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
             options={[{ value: 'P&D', label: 'P&D Board' }, { value: 'Finance', label: 'Finance Department' }]}
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
             options={[
               { value: 'C&W Department', label: 'C&W Department' },
               { value: 'HUD & ITD', label: 'HUD & ITD' },
               { value: 'Local Government', label: 'Local Government' },
               { value: 'Irrigation', label: 'Irrigation' }
             ]}
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
