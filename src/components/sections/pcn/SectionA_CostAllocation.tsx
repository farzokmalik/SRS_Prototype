import React from 'react';
import { useForm } from '../../../context/FormContext';
import { InputField } from '../../ui/FormElements';

export const SectionA_CostAllocation: React.FC = () => {
  const { formData, updateSection } = useForm();
  const data = formData.sectionA || {
    local: '', foreign: '', cap: '', rev: '', total: '',
    tf27_28: '', tf28_29: '', tfBeyond: ''
  };

  const handleChange = (field: string, value: string) => {
    updateSection('sectionA' as any, { [field]: value });
  };

  return (
    <div className="space-y-6">
      <div className="card shadow-sm">
        
        <div style={{ overflowX: 'auto' }}>
          <table className="form-table">
            <thead>
              <tr>
                <th style={{ textAlign: 'center' }}>Local Cost</th>
                <th style={{ textAlign: 'center' }}>Foreign Cost</th>
                <th style={{ textAlign: 'center' }}>Cap.</th>
                <th style={{ textAlign: 'center' }}>Rev.</th>
                <th style={{ textAlign: 'center' }}>Total</th>
                <th style={{ textAlign: 'center' }}>TF 2027-28</th>
                <th style={{ textAlign: 'center' }}>TF 2028-29</th>
                <th style={{ textAlign: 'center' }}>TF Beyond 29-30</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><InputField label="" type="number" value={data.local} onChange={(e: any) => handleChange('local', e.target.value)} /></td>
                <td><InputField label="" type="number" value={data.foreign} onChange={(e: any) => handleChange('foreign', e.target.value)} /></td>
                <td><InputField label="" type="number" value={data.cap} onChange={(e: any) => handleChange('cap', e.target.value)} /></td>
                <td><InputField label="" type="number" value={data.rev} onChange={(e: any) => handleChange('rev', e.target.value)} /></td>
                <td><InputField label="" type="number" value={data.total} onChange={(e: any) => handleChange('total', e.target.value)} /></td>
                <td><InputField label="" type="number" value={data.tf27_28} onChange={(e: any) => handleChange('tf27_28', e.target.value)} /></td>
                <td><InputField label="" type="number" value={data.tf28_29} onChange={(e: any) => handleChange('tf28_29', e.target.value)} /></td>
                <td><InputField label="" type="number" value={data.tfBeyond} onChange={(e: any) => handleChange('tfBeyond', e.target.value)} /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
