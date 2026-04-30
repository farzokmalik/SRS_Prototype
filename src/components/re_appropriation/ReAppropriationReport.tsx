import React, { useState } from 'react';
import { Search, FileText, Filter } from 'lucide-react';
import { SelectField } from '../ui/FormElements';
import { useForm } from '../../context/FormContext';

export const ReAppropriationReport: React.FC = () => {
  const [filters, setFilters] = useState({
    mainSector: 'Social Sectors',
    sector: 'School Education',
    fiscalYear: '2023-2024',
    schemeType: 'All',
    fromDate: '',
    toDate: '',
    gsNo: '',
    state: 'saved',
    useFromDate: false,
  });

  const { formData } = useForm();
  const [showReport, setShowReport] = useState(false);

  const transactions = Array.isArray(formData.reappropriationTransactions) 
    ? formData.reappropriationTransactions 
    : [];

  const surrenders = transactions.filter(t => t.type === 'Surrender');
  const allocations = transactions.filter(t => t.type === 'Allocation');

  return (
    <div className="fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Filter Form Card */}
      <section className="card" style={{ padding: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2.5rem', borderBottom: '1px solid hsl(var(--border))', paddingBottom: '1.25rem' }}>
          <div style={{ width: '40px', height: '40px', background: 'hsl(var(--accent-soft))', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'hsl(var(--accent))' }}>
            <FileText size={22} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.125rem', margin: 0, fontWeight: 700 }}>DEPARTMENTAL RE-APPROPRIATION REPORT</h3>
            <p style={{ fontSize: '0.75rem', color: 'hsl(var(--text-muted))' }}>Generate and view detailed re-appropriation reports by sector and fiscal year.</p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <SelectField 
              label="Main Sector" 
              value={filters.mainSector}
              onChange={(e) => setFilters({...filters, mainSector: e.target.value})}
              options={['Social Sectors', 'Infrastructure Sectors', 'Production Sectors', 'Services Sectors']}
            />
            <SelectField 
              label="Sector" 
              value={filters.sector}
              onChange={(e) => setFilters({...filters, sector: e.target.value})}
              options={['School Education', 'Health', 'Agriculture', 'Energy', 'Finance']}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <SelectField 
              label="Fiscal Year" 
              value={filters.fiscalYear}
              onChange={(e) => setFilters({...filters, fiscalYear: e.target.value})}
              options={['2022-2023', '2023-2024', '2024-2025']}
            />
            <SelectField 
              label="Scheme Type" 
              value={filters.schemeType}
              onChange={(e) => setFilters({...filters, schemeType: e.target.value})}
              options={['All', 'Ongoing', 'New']}
            />
          </div>
        </div>

        <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid hsl(var(--border))', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <button 
            className="btn btn-primary" 
            onClick={() => setShowReport(true)}
            style={{ minWidth: '180px', height: '48px', background: 'hsl(var(--success))' }}
          >
            <Search size={18} /> Show Report
          </button>
        </div>
      </section>

      {/* Report Output Section */}
      <section className="card" style={{ minHeight: '400px', display: 'flex', flexDirection: 'column', padding: 0, overflow: 'hidden' }}>
        <div style={{ padding: '1.5rem 2rem', background: 'hsl(var(--bg-main) / 0.5)', borderBottom: '1px solid hsl(var(--border))', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>DEPARTMENTAL RE-APPROPRIATION REPORT</h3>
          {showReport && (
            <button onClick={() => window.print()} className="btn btn-secondary" style={{ fontSize: '0.75rem' }}>
              Download PDF / Print
            </button>
          )}
        </div>
        
        {!showReport ? (
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'hsl(var(--text-muted))', padding: '4rem' }}>
            <div style={{ width: '64px', height: '64px', background: 'hsl(var(--bg-main))', borderRadius: 'var(--radius-full)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <Filter size={32} />
            </div>
            <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>No Report Generated</p>
            <p style={{ fontSize: '0.875rem', textAlign: 'center', maxWidth: '300px' }}>Select the criteria above and click "Show Report" to view departmental data.</p>
          </div>
        ) : (
          <div className="fade-in" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
             {/* Dynamic Report Table */}
             <div style={{ position: 'relative' }}>
               <h4 style={{ fontSize: '0.9375rem', fontWeight: 700, marginBottom: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                 <span>Summary of Surrenders and Allocations</span>
                 <span style={{ fontSize: '0.6875rem', color: 'hsl(var(--text-muted))', fontWeight: 500 }}>(Amount in Rs.)</span>
               </h4>
               
               <div style={{ border: '1px solid #000', overflowX: 'auto' }}>
                 <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.75rem', textAlign: 'left' }}>
                   <thead>
                     <tr style={{ background: '#f0f0f0', borderBottom: '1px solid #000' }}>
                       <th colSpan={4} style={{ padding: '0.6rem', textAlign: 'center', borderRight: '1.5px solid #000', fontWeight: 700 }}>Surrenders (Savings)</th>
                       <th colSpan={4} style={{ padding: '0.6rem', textAlign: 'center', fontWeight: 700 }}>Allocations (Excess)</th>
                     </tr>
                     <tr style={{ background: '#f8f8f8', borderBottom: '1.5px solid #000' }}>
                       <th style={{ padding: '0.5rem', borderRight: '1px solid #ddd' }}>Date</th>
                       <th style={{ padding: '0.5rem', borderRight: '1px solid #ddd' }}>Sector</th>
                       <th style={{ padding: '0.5rem', borderRight: '1px solid #ddd' }}>Object Code</th>
                       <th style={{ padding: '0.5rem', borderRight: '1px solid #ddd', width: '20%' }}>Source Project</th>
                       <th style={{ padding: '0.5rem', borderRight: '1.5px solid #000', textAlign: 'right' }}>Amount</th>
                       
                       <th style={{ padding: '0.5rem', borderRight: '1px solid #ddd' }}>Date</th>
                       <th style={{ padding: '0.5rem', borderRight: '1px solid #ddd' }}>Sector</th>
                       <th style={{ padding: '0.5rem', borderRight: '1px solid #ddd' }}>Object Code</th>
                       <th style={{ padding: '0.5rem', borderRight: '1px solid #ddd', width: '20%' }}>Target Project</th>
                       <th style={{ padding: '0.5rem', textAlign: 'right' }}>Amount</th>
                     </tr>
                   </thead>
                   <tbody>
                     {Array.from({ length: Math.max(surrenders.length, allocations.length, 1) }).map((_, idx) => (
                     <tr key={idx} style={{ borderBottom: '1px solid #ddd' }}>
                         {/* Surrender Side */}
                         <td style={{ padding: '0.5rem', borderRight: '1px solid #ddd' }}>{surrenders[idx]?.date || ''}</td>
                         <td style={{ padding: '0.5rem', borderRight: '1px solid #ddd' }}>{surrenders[idx]?.sector || ''}</td>
                         <td style={{ padding: '0.5rem', borderRight: '1px solid #ddd' }}>{surrenders[idx]?.objectCode || ''}</td>
                         <td style={{ padding: '0.5rem', borderRight: '1px solid #ddd' }}>{surrenders[idx]?.source || ''}</td>
                         <td style={{ padding: '0.5rem', borderRight: '1.5px solid #000', textAlign: 'right', fontWeight: 600 }}>
                           {surrenders[idx] ? surrenders[idx].amount.toLocaleString() : ''}
                         </td>
                         
                         {/* Allocation Side */}
                         <td style={{ padding: '0.5rem', borderRight: '1px solid #ddd' }}>{allocations[idx]?.date || ''}</td>
                         <td style={{ padding: '0.5rem', borderRight: '1px solid #ddd' }}>{allocations[idx]?.sector || ''}</td>
                         <td style={{ padding: '0.5rem', borderRight: '1px solid #ddd' }}>{allocations[idx]?.objectCode || ''}</td>
                         <td style={{ padding: '0.5rem', borderRight: '1px solid #ddd' }}>{allocations[idx]?.target || ''}</td>
                         <td style={{ padding: '0.5rem', textAlign: 'right', fontWeight: 600 }}>
                           {allocations[idx] ? allocations[idx].amount.toLocaleString() : ''}
                         </td>
                       </tr>
                     ))}
                   </tbody>
                   <tfoot>
                     <tr style={{ background: '#f8f8f8', borderTop: '1.5px solid #000', fontWeight: 700 }}>
                       <td colSpan={4} style={{ padding: '0.6rem', textAlign: 'right', borderRight: '1px solid #ddd' }}>Total Surrenders:</td>
                       <td style={{ padding: '0.6rem', textAlign: 'right', borderRight: '1.5px solid #000' }}>
                         {surrenders.reduce((acc, t) => acc + t.amount, 0).toLocaleString()}
                       </td>
                       
                       <td colSpan={4} style={{ padding: '0.6rem', textAlign: 'right', borderRight: '1px solid #ddd' }}>Total Allocations:</td>
                       <td style={{ padding: '0.6rem', textAlign: 'right' }}>
                         {allocations.reduce((acc, t) => acc + t.amount, 0).toLocaleString()}
                       </td>
                     </tr>
                   </tfoot>
                 </table>
               </div>
             </div>
          </div>
        )}
      </section>
    </div>
  );
};
