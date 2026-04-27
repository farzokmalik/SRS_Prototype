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


export const Section3_Location: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.section3;

  const handleUpdate = (updates: any) => {
    updateSection('section3', updates);
  };

  const selectedDivision = data.division || '';
  const districtOptions = selectedDivision ? (DISTRICTS[selectedDivision] || []) : [];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div className="card">
        <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <MapPin size={18} color="hsl(var(--neutral-500))" /> Location Details
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
          <SelectField
            label="[PC-I-2.1] Division"
            required
            value={selectedDivision}
            onChange={e => handleUpdate({ division: e.target.value, district: '' })}
            options={DIVISIONS.map(d => ({ value: d, label: d }))}
          />
          <SelectField
            label="[PC-I-2.2] District"
            required
            value={data.district || ''}
            onChange={e => handleUpdate({ district: e.target.value })}
            options={districtOptions.map(d => ({ value: d, label: d }))}
          />
          <SelectField
            label="[PC-I-2.3] National Assembly (NA)"
            value={data.na?.[0] || ''}
            onChange={e => handleUpdate({ na: [e.target.value] })}
            options={NA_SEATS.map(s => ({ value: s, label: s }))}
          />
          <SelectField
            label="[PC-I-2.4] Provincial Assembly (PP)"
            value={data.pp?.[0] || ''}
            onChange={e => handleUpdate({ pp: [e.target.value] })}
            options={PP_SEATS.map(s => ({ value: s, label: s }))}
          />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        <div className="card">
          <h3 style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: '1rem' }}>GPS Coordinates</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <InputField label="[PC-I-2.5] Latitude" type="number" step="0.000001" value={data.lat} onChange={(e) => handleUpdate({ lat: e.target.value })} />
            <InputField label="[PC-I-2.6] Longitude" type="number" step="0.000001" value={data.long} onChange={(e) => handleUpdate({ long: e.target.value })} />
          </div>
          <div style={{ marginTop: '1rem' }}>
            <InputField label="[PC-I-2.7] Map URL" placeholder="https://google.com/maps/..." value={data.mapUrl} onChange={(e) => handleUpdate({ mapUrl: e.target.value })} />
          </div>
        </div>

        <div className="card">
           <FileUpload 
             label="[PC-I-2.8] Location Attachment"
             files={data.attachments || []}
             onUpload={(files) => handleUpdate({ attachments: files })}
             onRemove={(idx) => handleUpdate({ attachments: data.attachments.filter((_: any, i: number) => i !== idx) })}
             description="Upload Location Map / Layout Plan (PDF/JPG)"
           />
        </div>
      </div>
    </div>
  );
};
