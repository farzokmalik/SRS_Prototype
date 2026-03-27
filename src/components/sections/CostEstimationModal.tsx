import React, { useState, useEffect } from 'react';
import { X, Plus, Trash2 } from 'lucide-react';
import { SelectField } from '../ui/FormElements';

interface CostEstimationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: any) => void;
  initialData?: any;
  defaultObjectCode?: string;
  defaultYear?: string;
  costTypeLabel: 'Local' | 'Foreign';
}

interface TableRow {
  id: string;
  item: string;
  description: string;
  specification: string;
  location: string[];
  unitCost: string;
  quantity: string;
}

interface HRRow {
  id: string;
  designation: string;
  noOfPosts: string;
  monthlySalary: string;
  noOfMonths: string;
}

interface GeneralRow {
  id: string;
  item: string;
  description: string;
  specification: string;
  location: string[];
  unitCost: string;
  quantity: string;
  noOfMonths: string;
}

const DISTRICT_OPTIONS = [
  'Select All',
  'Bahawalnagar', 'Bahawalpur', 'Rahim Yar Khan',
  'Dera Ghazi Khan', 'Layyah', 'Muzaffargarh', 'Rajanpur',
  'Faisalabad', 'Chiniot', 'Jhang', 'Toba Tek Singh',
  'Gujranwala', 'Gujrat', 'Hafizabad', 'Mandi Bahauddin', 'Narowal', 'Sialkot',
  'Lahore', 'Kasur', 'Nankana Sahib', 'Sheikhupura',
  'Multan', 'Khanewal', 'Lodhran', 'Vehari',
  'Rawalpindi', 'Attock', 'Chakwal', 'Jhelum',
  'Sahiwal', 'Okara', 'Pakpattan',
  'Sargodha', 'Bhakkar', 'Khushab', 'Mianwali'
];

export const CostEstimationModal: React.FC<CostEstimationModalProps> = ({ 
  isOpen, onClose, onSave, initialData, defaultObjectCode, defaultYear, costTypeLabel 
}) => {
  const [activeTab, setActiveTab] = useState('One Time');
  
  // Top Form State
  const [topForm, setTopForm] = useState({
    costType: 'Capital Cost',
    grantNo: 'Development - (PC12037)',
    loNo: 'ab11123434',
    costCenter: '213-A C. ((R)) KPT - LR District Charges',
    objectCode: defaultObjectCode || '',
    fundingCostType: costTypeLabel === 'Local' ? 'Local Cost' : 'Foreign Cost',
    financialYear: defaultYear || '2022-2023',
  });

  // Table State
  const [tableRows, setTableRows] = useState<TableRow[]>([
    { id: '1', item: '', description: '', specification: '', location: [], unitCost: '', quantity: '' }
  ]);
  
  // HR Table State
  const [hrRows, setHrRows] = useState<HRRow[]>([
    { id: '1', designation: '', noOfPosts: '0', monthlySalary: '0', noOfMonths: '0' }
  ]);

  // General Table State
  const [generalRows, setGeneralRows] = useState<GeneralRow[]>([
    { id: '1', item: '', description: '', specification: '', location: [], unitCost: '', quantity: '', noOfMonths: '0' }
  ]);
  
  // Location Multi-Select state per row 
  const [openLocationDropdown, setOpenLocationDropdown] = useState<string | null>(null);

  useEffect(() => {
    if (initialData) {
      if (initialData.topForm) setTopForm(initialData.topForm);
      if (initialData.tableRows) setTableRows(initialData.tableRows);
      if (initialData.hrRows) setHrRows(initialData.hrRows);
      if (initialData.generalRows) setGeneralRows(initialData.generalRows);
    }
  }, [initialData]);

  if (!isOpen) return null;

  const handleAddRow = () => {
    setTableRows([...tableRows, { id: Math.random().toString(), item: '', description: '', specification: '', location: [], unitCost: '', quantity: '' }]);
  };

  const handleRemoveRow = (id: string) => {
    setTableRows(tableRows.filter(r => r.id !== id));
  };

  const handleRowChange = (id: string, field: keyof TableRow, value: any) => {
    setTableRows(tableRows.map(r => r.id === id ? { ...r, [field]: value } : r));
  };

  const handleAddHrRow = () => {
    setHrRows([...hrRows, { id: Math.random().toString(), designation: '', noOfPosts: '0', monthlySalary: '0', noOfMonths: '0' }]);
  };

  const handleRemoveHrRow = (id: string) => {
    if (hrRows.length > 1) {
      setHrRows(hrRows.filter(r => r.id !== id));
    }
  };

  const handleHrRowChange = (id: string, field: keyof HRRow, value: any) => {
    setHrRows(hrRows.map(r => r.id === id ? { ...r, [field]: value } : r));
  };

  const handleAddGeneralRow = () => {
    setGeneralRows([...generalRows, { id: Math.random().toString(), item: '', description: '', specification: '', location: [], unitCost: '', quantity: '', noOfMonths: '0' }]);
  };

  const handleRemoveGeneralRow = (id: string) => {
    setGeneralRows(generalRows.filter(r => r.id !== id));
  };

  const handleGeneralRowChange = (id: string, field: keyof GeneralRow, value: any) => {
    setGeneralRows(generalRows.map(r => r.id === id ? { ...r, [field]: value } : r));
  };

  const handleLocationToggle = (rowId: string, location: string, isGeneral: boolean = false) => {
    const tableToUpdate = isGeneral ? generalRows : tableRows;
    const row = tableToUpdate.find((r: any) => r.id === rowId);
    if (!row) return;

    let newLocations = [...row.location];
    
    if (location === 'Select All') {
      if (newLocations.includes('Select All')) {
        newLocations = [];
      } else {
        newLocations = DISTRICT_OPTIONS.slice();
      }
    } else {
      if (newLocations.includes(location)) {
        newLocations = newLocations.filter(l => l !== location && l !== 'Select All');
      } else {
        newLocations.push(location);
        if (newLocations.length === DISTRICT_OPTIONS.length - 1) {
             newLocations.push('Select All');
        }
      }
    }
    
    if (isGeneral) {
      handleGeneralRowChange(rowId, 'location', newLocations);
    } else {
      handleRowChange(rowId, 'location', newLocations);
    }
  };

  const calculateSubTotal = (unitCost: string, qty: string) => {
    const cost = parseFloat(unitCost) || 0;
    const q = parseFloat(qty) || 0;
    return (cost * q).toFixed(2);
  };

  const calculateHrRowTotal = (posts: string, salary: string, months: string) => {
    const p = parseFloat(posts) || 0;
    const s = parseFloat(salary) || 0;
    const m = parseFloat(months) || 0;
    return (p * s * m).toFixed(2);
  };

  const calculateGeneralSubTotal = (unitCost: string, qty: string, months: string) => {
    const cost = parseFloat(unitCost) || 0;
    const q = parseFloat(qty) || 0;
    const m = parseFloat(months) || 0;
    return (cost * q * m).toFixed(2);
  };

  const totalCost = 
    tableRows.reduce((acc, row) => acc + parseFloat(calculateSubTotal(row.unitCost, row.quantity)), 0) +
    hrRows.reduce((acc, row) => acc + parseFloat(calculateHrRowTotal(row.noOfPosts, row.monthlySalary, row.noOfMonths)), 0) +
    generalRows.reduce((acc, row) => acc + parseFloat(calculateGeneralSubTotal(row.unitCost, row.quantity, row.noOfMonths)), 0);

  // Dummy remaining calculation
  const projectTotalAllocation = 500; // Mock allocation
  const remainingCost = projectTotalAllocation - totalCost;

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9999,
      background: 'rgba(10, 22, 40, 0.5)', backdropFilter: 'blur(4px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '2rem'
    }}>
      <div className="card" style={{
        width: '100%', maxWidth: '1200px', height: '90vh', overflow: 'hidden',
        background: '#fff', display: 'flex', flexDirection: 'column', padding: 0
      }}>
        {/* Header */}
        <div style={{ 
          padding: '1.5rem', borderBottom: '1px solid hsl(var(--border))', 
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          background: '#fff', flexShrink: 0
        }}>
          <div>
             <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'hsl(var(--primary))' }}>
               {costTypeLabel} Cost Estimation Details
             </h2>
             <p style={{ fontSize: '0.875rem', color: 'hsl(var(--text-muted))', marginTop: '0.25rem' }}>
               Define detailed estimates for {topForm.objectCode} in {topForm.financialYear}
             </p>
          </div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'hsl(var(--text-muted))' }}>
            <X size={24} />
          </button>
        </div>

        {/* Scrollable Body */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          {/* 1. Top Section */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
             <SelectField label="Cost Type" value={topForm.costType} onChange={(e) => setTopForm({...topForm, costType: e.target.value})} options={['Capital Cost', 'Revenue Cost']} />
             <SelectField label="Grant Number" value={topForm.grantNo} onChange={(e) => setTopForm({...topForm, grantNo: e.target.value})} options={['Development - (PC12037)', 'Education - (PC21015)']} />
             <SelectField label="LO No." value={topForm.loNo} onChange={(e) => setTopForm({...topForm, loNo: e.target.value})} options={['ab11123434', 'cd99887766']} />
             <SelectField label="Cost Center" value={topForm.costCenter} onChange={(e) => setTopForm({...topForm, costCenter: e.target.value})} options={['213-A C. ((R)) KPT - LR District Charges', 'LH4001 Lahore Central']} />
             <SelectField label="Object Code" value={topForm.objectCode} onChange={(e) => setTopForm({...topForm, objectCode: e.target.value})} options={[topForm.objectCode, 'A13001 - Transport', 'A03201 - Postage']} />
             <SelectField label="Funding Cost Type" value={topForm.fundingCostType} onChange={(e) => setTopForm({...topForm, fundingCostType: e.target.value})} options={['Local Cost', 'Foreign Cost']} />
             <SelectField label="Financial Year" value={topForm.financialYear} onChange={(e) => setTopForm({...topForm, financialYear: e.target.value})} options={['2022-2023', '2023-2024', '2024-2025', '2025-2026']} />
          </div>

          {/* 2. Tabs */}
          <div style={{ display: 'flex', borderBottom: '2px solid hsl(var(--border))' }}>
            {['One Time Cost Estimation', 'HR Recurring Cost Estimates', 'General Recurring Cost Estimates'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: '0.75rem 1.5rem', background: 'none', border: 'none',
                  borderBottom: activeTab === tab ? '3px solid hsl(var(--primary))' : '3px solid transparent',
                  color: activeTab === tab ? 'hsl(var(--primary))' : 'hsl(var(--text-muted))',
                  fontWeight: activeTab === tab ? 700 : 500, cursor: 'pointer',
                  marginBottom: '-2px', transition: 'all 0.2s'
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* 3. Table Section */}
          {activeTab === 'One Time Cost Estimation' ? (
            <div style={{ background: 'hsl(var(--bg-main))', borderRadius: 'var(--radius-md)', padding: '1rem', border: '1px solid hsl(var(--border))' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
                <thead>
                  <tr style={{ textAlign: 'left', borderBottom: '2px solid hsl(var(--border))', color: 'hsl(var(--text-muted))' }}>
                    <th style={{ padding: '0.75rem', width: '50px' }}>S.No</th>
                    <th style={{ padding: '0.75rem' }}>Item</th>
                    <th style={{ padding: '0.75rem' }}>Description</th>
                    <th style={{ padding: '0.75rem' }}>Specification</th>
                    <th style={{ padding: '0.75rem', width: '200px' }}>Location (District)</th>
                    <th style={{ padding: '0.75rem', width: '120px' }}>Unit Cost (M)</th>
                    <th style={{ padding: '0.75rem', width: '100px' }}>Qty</th>
                    <th style={{ padding: '0.75rem', width: '130px' }}>Sub-Total (M)</th>
                    <th style={{ padding: '0.75rem', width: '60px' }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {tableRows.map((row, idx) => (
                    <tr key={row.id} style={{ borderBottom: '1px solid hsl(var(--border))' }}>
                      <td style={{ padding: '0.75rem', fontWeight: 600 }}>{idx + 1}</td>
                      <td style={{ padding: '0.5rem' }}>
                        <input type="text" value={row.item} onChange={(e) => handleRowChange(row.id, 'item', e.target.value)} style={{ width: '100%', padding: '0.5rem', border: '1px solid hsl(var(--border))', borderRadius: '4px' }}/>
                      </td>
                      <td style={{ padding: '0.5rem' }}>
                        <input type="text" value={row.description} onChange={(e) => handleRowChange(row.id, 'description', e.target.value)} style={{ width: '100%', padding: '0.5rem', border: '1px solid hsl(var(--border))', borderRadius: '4px' }}/>
                      </td>
                      <td style={{ padding: '0.5rem' }}>
                        <input type="text" value={row.specification} onChange={(e) => handleRowChange(row.id, 'specification', e.target.value)} style={{ width: '100%', padding: '0.5rem', border: '1px solid hsl(var(--border))', borderRadius: '4px' }}/>
                      </td>
                      <td style={{ padding: '0.5rem', position: 'relative' }}>
                        {/* Custom Multi-select Dropdown */}
                        <div 
                           onClick={() => setOpenLocationDropdown(openLocationDropdown === row.id ? null : row.id)}
                           style={{ width: '100%', padding: '0.5rem', border: '1px solid hsl(var(--border))', borderRadius: '4px', background: '#fff', cursor: 'pointer', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
                        >
                          {row.location.length > 0 ? `${row.location.length > 1 && row.location.includes('Select All') ? 'All Districts' : row.location.length + ' Selected'}` : 'Select...'}
                        </div>
                        {openLocationDropdown === row.id && (
                          <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, zIndex: 100, background: '#fff', border: '1px solid hsl(var(--border))', borderRadius: '4px', maxHeight: '200px', overflowY: 'auto', boxShadow: 'var(--shadow-md)' }}>
                            {DISTRICT_OPTIONS.map(opt => (
                              <label key={opt} style={{ display: 'block', padding: '0.5rem', cursor: 'pointer', borderBottom: '1px solid hsl(var(--bg-main))' }}>
                                <input type="checkbox" checked={row.location.includes(opt)} onChange={() => handleLocationToggle(row.id, opt)} style={{ marginRight: '0.5rem' }} />
                                {opt}
                              </label>
                            ))}
                          </div>
                        )}
                      </td>
                      <td style={{ padding: '0.5rem' }}>
                         <input type="number" value={row.unitCost} onChange={(e) => handleRowChange(row.id, 'unitCost', e.target.value)} style={{ width: '100%', padding: '0.5rem', border: '1px solid hsl(var(--border))', borderRadius: '4px', textAlign: 'right' }}/>
                      </td>
                      <td style={{ padding: '0.5rem' }}>
                         <input type="number" value={row.quantity} onChange={(e) => handleRowChange(row.id, 'quantity', e.target.value)} style={{ width: '100%', padding: '0.5rem', border: '1px solid hsl(var(--border))', borderRadius: '4px', textAlign: 'right' }}/>
                      </td>
                      <td style={{ padding: '0.75rem', background: 'hsl(var(--bg-main))', fontWeight: 600, textAlign: 'right' }}>
                         {calculateSubTotal(row.unitCost, row.quantity)}
                      </td>
                      <td style={{ padding: '0.75rem', textAlign: 'center' }}>
                         <button onClick={() => handleRemoveRow(row.id)} style={{ background: 'none', border: 'none', color: 'hsl(var(--error))', cursor: 'pointer' }}>
                           <Trash2 size={16} />
                         </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div style={{ marginTop: '1rem' }}>
                <button className="btn btn-secondary" onClick={handleAddRow} style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
                  <Plus size={16} /> Add Row
                </button>
              </div>
            </div>
          ) : activeTab === 'HR Recurring Cost Estimates' ? (
            <div style={{ background: 'hsl(var(--bg-main))', borderRadius: 'var(--radius-md)', padding: '1rem', border: '1px solid hsl(var(--border))' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
                <thead>
                  <tr style={{ textAlign: 'left', borderBottom: '2px solid hsl(var(--border))', color: 'hsl(var(--text-muted))' }}>
                    <th style={{ padding: '0.75rem', width: '50px' }}>S.No</th>
                    <th style={{ padding: '0.75rem' }}>Designation</th>
                    <th style={{ padding: '0.75rem', width: '120px' }}>No. of Posts (A)</th>
                    <th style={{ padding: '0.75rem', width: '200px' }}>[Object Code Title]</th>
                    <th style={{ padding: '0.75rem', width: '160px' }}>Monthly Salary (B)</th>
                    <th style={{ padding: '0.75rem', width: '110px' }}>Months (C)</th>
                    <th style={{ padding: '0.75rem', width: '140px', textAlign: 'right' }}>Annual Total (M)</th>
                    <th style={{ padding: '0.75rem', width: '60px', textAlign: 'center' }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {hrRows.map((row, idx) => (
                    <tr key={row.id} style={{ borderBottom: '1px solid hsl(var(--border))' }}>
                      <td style={{ padding: '0.75rem', fontWeight: 600 }}>{idx + 1}</td>
                      <td style={{ padding: '0.5rem' }}>
                        <input type="text" value={row.designation} onChange={(e) => handleHrRowChange(row.id, 'designation', e.target.value)} style={{ width: '100%', padding: '0.5rem', border: '1px solid hsl(var(--border))', borderRadius: '4px' }} placeholder="e.g. SPM" />
                      </td>
                      <td style={{ padding: '0.5rem' }}>
                        <input type="number" value={row.noOfPosts} onChange={(e) => handleHrRowChange(row.id, 'noOfPosts', e.target.value)} style={{ width: '100%', padding: '0.5rem', border: '1px solid hsl(var(--border))', borderRadius: '4px', textAlign: 'right' }} />
                      </td>
                      <td style={{ padding: '0.5rem', color: 'hsl(var(--text-muted))' }}>
                        {topForm.objectCode}
                      </td>
                      <td style={{ padding: '0.5rem' }}>
                        <input type="number" value={row.monthlySalary} onChange={(e) => handleHrRowChange(row.id, 'monthlySalary', e.target.value)} style={{ width: '100%', padding: '0.5rem', border: '1px solid hsl(var(--border))', borderRadius: '4px', textAlign: 'right' }} />
                        <div style={{ fontSize: '0.7rem', color: 'hsl(var(--text-muted))', textAlign: 'right', marginTop: '0.25rem' }}>
                           {/* {row.monthlySalary || 0} M */}
                        </div>
                      </td>
                      <td style={{ padding: '0.5rem' }}>
                        <input type="number" value={row.noOfMonths} onChange={(e) => handleHrRowChange(row.id, 'noOfMonths', e.target.value)} style={{ width: '100%', padding: '0.5rem', border: '1px solid hsl(var(--border))', borderRadius: '4px', textAlign: 'right' }} />
                      </td>
                      <td style={{ padding: '0.75rem', textAlign: 'right', background: 'hsl(var(--bg-main))', fontWeight: 600 }}>
                        {calculateHrRowTotal(row.noOfPosts, row.monthlySalary, row.noOfMonths)}
                      </td>
                      <td style={{ padding: '0.75rem', textAlign: 'center' }}>
                        <button onClick={() => handleRemoveHrRow(row.id)} style={{ background: 'none', border: 'none', color: 'hsl(var(--error))', cursor: 'pointer' }}>
                          <Trash2 size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div style={{ marginTop: '1rem' }}>
                <button className="btn btn-secondary" onClick={handleAddHrRow} style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
                  <Plus size={16} /> Add Row
                </button>
              </div>
            </div>
          ) : activeTab === 'General Recurring Cost Estimates' ? (
            <div style={{ background: 'hsl(var(--bg-main))', borderRadius: 'var(--radius-md)', padding: '1rem', border: '1px solid hsl(var(--border))' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
                <thead>
                  <tr style={{ textAlign: 'left', borderBottom: '2px solid hsl(var(--border))', color: 'hsl(var(--text-muted))' }}>
                    <th style={{ padding: '0.75rem', width: '50px' }}>S.No</th>
                    <th style={{ padding: '0.75rem' }}>Item</th>
                    <th style={{ padding: '0.75rem' }}>Description</th>
                    <th style={{ padding: '0.75rem' }}>Specification</th>
                    <th style={{ padding: '0.75rem', width: '180px' }}>Location (District)</th>
                    <th style={{ padding: '0.75rem', width: '100px' }}>Unit Cost (M)</th>
                    <th style={{ padding: '0.75rem', width: '80px' }}>Qty</th>
                    <th style={{ padding: '0.75rem', width: '100px' }}>Months</th>
                    <th style={{ padding: '0.75rem', width: '120px', textAlign: 'right' }}>Sub-Total (M)</th>
                    <th style={{ padding: '0.75rem', width: '60px', textAlign: 'center' }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {generalRows.map((row, idx) => (
                    <tr key={row.id} style={{ borderBottom: '1px solid hsl(var(--border))' }}>
                      <td style={{ padding: '0.75rem', fontWeight: 600 }}>{idx + 1}</td>
                      <td style={{ padding: '0.5rem' }}>
                        <input type="text" value={row.item} onChange={(e) => handleGeneralRowChange(row.id, 'item', e.target.value)} style={{ width: '100%', padding: '0.5rem', border: '1px solid hsl(var(--border))', borderRadius: '4px' }}/>
                      </td>
                      <td style={{ padding: '0.5rem' }}>
                        <textarea value={row.description} onChange={(e) => handleGeneralRowChange(row.id, 'description', e.target.value)} style={{ width: '100%', padding: '0.5rem', border: '1px solid hsl(var(--border))', borderRadius: '4px', resize: 'vertical', minHeight: '36px' }}/>
                      </td>
                      <td style={{ padding: '0.5rem' }}>
                        <textarea value={row.specification} onChange={(e) => handleGeneralRowChange(row.id, 'specification', e.target.value)} style={{ width: '100%', padding: '0.5rem', border: '1px solid hsl(var(--border))', borderRadius: '4px', resize: 'vertical', minHeight: '36px' }}/>
                      </td>
                      <td style={{ padding: '0.5rem', position: 'relative' }}>
                        {/* Custom Multi-select Dropdown */}
                        <div 
                           onClick={() => setOpenLocationDropdown(openLocationDropdown === `gen-${row.id}` ? null : `gen-${row.id}`)}
                           style={{ width: '100%', padding: '0.5rem', border: '1px solid hsl(var(--border))', borderRadius: '4px', background: '#fff', cursor: 'pointer', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
                        >
                          {row.location.length > 0 ? `${row.location.length > 1 && row.location.includes('Select All') ? 'All Districts' : row.location.length + ' Selected'}` : 'Select...'}
                        </div>
                        {openLocationDropdown === `gen-${row.id}` && (
                          <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, zIndex: 100, background: '#fff', border: '1px solid hsl(var(--border))', borderRadius: '4px', maxHeight: '200px', overflowY: 'auto', boxShadow: 'var(--shadow-md)' }}>
                            {DISTRICT_OPTIONS.map(opt => (
                              <label key={opt} style={{ display: 'block', padding: '0.5rem', cursor: 'pointer', borderBottom: '1px solid hsl(var(--bg-main))' }}>
                                <input type="checkbox" checked={row.location.includes(opt)} onChange={() => handleLocationToggle(row.id, opt, true)} style={{ marginRight: '0.5rem' }} />
                                {opt}
                              </label>
                            ))}
                          </div>
                        )}
                      </td>
                      <td style={{ padding: '0.5rem' }}>
                         <input type="number" value={row.unitCost} onChange={(e) => handleGeneralRowChange(row.id, 'unitCost', e.target.value)} style={{ width: '100%', padding: '0.5rem', border: '1px solid hsl(var(--border))', borderRadius: '4px', textAlign: 'right' }}/>
                         <div style={{ fontSize: '0.7rem', color: 'hsl(var(--text-muted))', textAlign: 'right', marginTop: '0.25rem' }}>
                            {/* {row.unitCost || 0} M */}
                         </div>
                      </td>
                      <td style={{ padding: '0.5rem' }}>
                         <input type="number" value={row.quantity} onChange={(e) => handleGeneralRowChange(row.id, 'quantity', e.target.value)} style={{ width: '100%', padding: '0.5rem', border: '1px solid hsl(var(--border))', borderRadius: '4px', textAlign: 'right' }}/>
                      </td>
                      <td style={{ padding: '0.5rem' }}>
                         <input type="number" value={row.noOfMonths} onChange={(e) => handleGeneralRowChange(row.id, 'noOfMonths', e.target.value)} style={{ width: '100%', padding: '0.5rem', border: '1px solid hsl(var(--border))', borderRadius: '4px', textAlign: 'right' }}/>
                      </td>
                      <td style={{ padding: '0.75rem', background: 'hsl(var(--bg-main))', fontWeight: 600, textAlign: 'right' }}>
                         {calculateGeneralSubTotal(row.unitCost, row.quantity, row.noOfMonths)}
                         <div style={{ fontSize: '0.7rem', color: 'hsl(var(--text-muted))', textAlign: 'right', marginTop: '0.25rem', fontWeight: 400 }}>
                            {calculateGeneralSubTotal(row.unitCost, row.quantity, row.noOfMonths)} M
                         </div>
                      </td>
                      <td style={{ padding: '0.75rem', textAlign: 'center' }}>
                         <button onClick={() => handleRemoveGeneralRow(row.id)} style={{ background: 'none', border: 'none', color: 'hsl(var(--error))', cursor: 'pointer' }}>
                           <Trash2 size={16} />
                         </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div style={{ marginTop: '1rem' }}>
                <button className="btn btn-secondary" onClick={handleAddGeneralRow} style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
                  <Plus size={16} /> Add Row
                </button>
              </div>
            </div>
          ) : (
            <div style={{ padding: '4rem', textAlign: 'center', background: 'hsl(var(--bg-main))', borderRadius: 'var(--radius-md)' }}>
              {/* <p style={{ color: 'hsl(var(--text-muted))' }}>The <strong>{activeTab}</strong> component is under development.</p> */}
            </div>
          )}

          {/* 4. Bottom Section (Summary) */}
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'flex-end', borderTop: '1px solid hsl(var(--border))', paddingTop: '1.5rem' }}>
             <div style={{ textAlign: 'right' }}>
               <p style={{ fontSize: '0.875rem', color: 'hsl(var(--text-muted))' }}>Total Cost</p>
               <p style={{ fontSize: '1.5rem', fontWeight: 700, color: 'hsl(var(--primary))' }}>PKR {totalCost.toFixed(2)} M</p>
             </div>
             <div style={{ textAlign: 'right' }}>
               <p style={{ fontSize: '0.875rem', color: 'hsl(var(--text-muted))' }}>Remaining Cost <span style={{fontSize:'0.75rem', fontWeight:'normal'}}>(from 500M)</span></p>
               <p style={{ fontSize: '1.5rem', fontWeight: 700, color: remainingCost >= 0 ? 'hsl(var(--success))' : 'hsl(var(--error))' }}>PKR {remainingCost.toFixed(2)} M</p>
             </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div style={{ padding: '1.5rem', borderTop: '1px solid hsl(var(--border))', background: 'hsl(var(--bg-main))', display: 'flex', justifyContent: 'flex-end', gap: '1rem', flexShrink: 0 }}>
          <button className="btn btn-secondary" onClick={onClose}>Cancel</button>
          <button className="btn btn-primary" onClick={() => {
            onSave({ topForm, tableRows, hrRows, generalRows, totalCost });
            onClose();
          }}>
             Save Estimation Data
          </button>
        </div>
      </div>
    </div>
  );
};
