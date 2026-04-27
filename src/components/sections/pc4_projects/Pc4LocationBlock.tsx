import React from 'react';
import { useForm } from '../../../context/FormContext';
import { InputField, MultiSelectDropdown } from '../../ui/FormElements';

const DISTRICTS: Record<string, string[]> = {
  Bahawalpur: ['Bahawalpur', 'Bahawalnagar', 'Rahim Yar Khan'],
  'Dera Ghazi Khan': ['Dera Ghazi Khan', 'Layyah', 'Muzaffargarh', 'Rajanpur', 'Kot Addu', 'Taunsa Sharif'],
  Faisalabad: ['Faisalabad', 'Chiniot', 'Toba Tek Singh', 'Jhang'],
  Gujranwala: ['Gujranwala', 'Hafizabad', 'Mandi Bahauddin', 'Narowal', 'Sialkot'],
  Gujrat: ['Gujrat', 'Mandi Bahauddin', 'Hafizabad', 'Wazirabad'],
  Lahore: ['Lahore', 'Kasur', 'Nankana Sahib', 'Sheikhupura'],
  Multan: ['Multan', 'Lodhran', 'Khanewal', 'Vehari'],
  Rawalpindi: ['Rawalpindi', 'Jhelum', 'Chakwal', 'Attock', 'Murree', 'Talagang'],
  Sahiwal: ['Sahiwal', 'Pakpattan', 'Okara'],
  Sargodha: ['Sargodha', 'Khushab', 'Mianwali', 'Bhakkar'],
};

const ALL_DISTRICTS = [...new Set(Object.values(DISTRICTS).flat())].sort((a, b) => a.localeCompare(b));

const NA_SEATS = Array.from({ length: 40 }, (_, i) => `NA-${115 + i}`);
const PP_SEATS = Array.from({ length: 40 }, (_, i) => `PP-${135 + i}`);

const TEHSIL_OPTIONS = [
  'Lahore City',
  'Shalimar',
  'Raiwind',
  'Kasur',
  'Okara',
  'Multan City',
  'Rawalpindi',
  'Faisalabad City',
  'Gujranwala City',
  'Sargodha',
  'Bahawalpur',
  'Dera Ghazi Khan',
  'Sahiwal',
  'Jhang',
  'Sheikhupura',
];

const UNION_COUNCIL_OPTIONS = [
  'Model Town',
  'Gulberg',
  'Data Gunj Bakhsh',
  'Shalimar',
  'Ravi',
  'Samanabad',
  'Wahga',
  'Iqbal Town',
  'Nishtar Town',
  'Aziz Bhatti',
  'Chungi Amar Sadhu',
  'Sabzazar',
  'Johar Town',
  'Ferozewala',
  'Muridke',
];

export type Pc4LocationState = {
  districts: string[];
  tehsils: string[];
  na: string[];
  pp: string[];
  unionCouncils: string[];
  latitude: string;
  longitude: string;
};

const emptyLocation = (): Pc4LocationState => ({
  districts: [],
  tehsils: [],
  na: [],
  pp: [],
  unionCouncils: [],
  latitude: '',
  longitude: '',
});

function resolveLocation(pc4: Record<string, unknown>): Pc4LocationState {
  const loc = pc4.location as Pc4LocationState | undefined;
  if (loc && typeof loc === 'object') {
    const hasAny =
      (loc.districts?.length ?? 0) > 0 ||
      (loc.tehsils?.length ?? 0) > 0 ||
      (loc.na?.length ?? 0) > 0 ||
      (loc.pp?.length ?? 0) > 0 ||
      (loc.unionCouncils?.length ?? 0) > 0 ||
      (loc.latitude ?? '') !== '' ||
      (loc.longitude ?? '') !== '';
    if (hasAny) {
      return { ...emptyLocation(), ...loc };
    }
  }

  const s13 = pc4.s13 as Record<string, unknown> | undefined;
  if (
    s13 &&
    !Array.isArray(s13.objectiveAchievementRows) &&
    (Array.isArray(s13.districts) ||
      Array.isArray(s13.tehsils) ||
      typeof s13.latitude === 'string' ||
      typeof s13.longitude === 'string')
  ) {
    return {
      ...emptyLocation(),
      districts: (s13.districts as string[]) ?? [],
      tehsils: (s13.tehsils as string[]) ?? [],
      na: (s13.na as string[]) ?? [],
      pp: (s13.pp as string[]) ?? [],
      unionCouncils: (s13.unionCouncils as string[]) ?? [],
      latitude: (s13.latitude as string) ?? '',
      longitude: (s13.longitude as string) ?? '',
    };
  }

  return emptyLocation();
}

/** Geographic location (PC-IV); stored under `pc4.location` so section 13 can be objectives. */
export const Pc4LocationBlock: React.FC = () => {
  const { formData, updateSection } = useForm();
  const pc4 = formData.pc4 as Record<string, unknown>;
  const data = resolveLocation(pc4);

  const handleUpdate = (updates: Partial<Pc4LocationState>) => {
    updateSection('pc4', { location: { ...data, ...updates } });
  };

  return (
    <div
      style={{
        marginTop: '0.5rem',
        paddingTop: '1.5rem',
        borderTop: '1px solid hsl(var(--border))',
      }}
    >
      <h3
        style={{
          fontSize: '1rem',
          fontWeight: 600,
          marginBottom: '1.5rem',
          marginTop: 0,
        }}
      >
        Geographic location
      </h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        <MultiSelectDropdown
          label="District"
          options={ALL_DISTRICTS}
          value={data.districts}
          onChange={(next) => handleUpdate({ districts: next })}
        />
        <MultiSelectDropdown
          label="Tehsil"
          options={TEHSIL_OPTIONS}
          value={data.tehsils}
          onChange={(next) => handleUpdate({ tehsils: next })}
        />
        <MultiSelectDropdown
          label="NA (National Assembly)"
          options={NA_SEATS}
          value={data.na}
          onChange={(next) => handleUpdate({ na: next })}
        />
        <MultiSelectDropdown
          label="PP (Provincial Assembly)"
          options={PP_SEATS}
          value={data.pp}
          onChange={(next) => handleUpdate({ pp: next })}
        />
        <MultiSelectDropdown
          label="Union Council"
          options={UNION_COUNCIL_OPTIONS}
          value={data.unionCouncils}
          onChange={(next) => handleUpdate({ unionCouncils: next })}
        />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1.5rem' }}>
        <InputField
          label="Latitude"
          placeholder="Enter Latitude (1.00–10.00)"
          value={data.latitude}
          onChange={(e) => handleUpdate({ latitude: e.target.value })}
        />
        <InputField
          label="Longitude"
          placeholder="Enter Longitude (1.00–10.00)"
          value={data.longitude}
          onChange={(e) => handleUpdate({ longitude: e.target.value })}
        />
      </div>
    </div>
  );
};
