import React, { useState } from 'react';
import { Search, FileText, Filter } from 'lucide-react';
import { InputField, SelectField } from '../ui/FormElements';

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

  const [showReport, setShowReport] = useState(false);

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
          {/* Main Sector & Sector */}
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
              options={['School Education', 'Higher Education', 'Special Education', 'Literacy & NFBE']}
            />
          </div>

          {/* Fiscal Year & Scheme Type */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <SelectField 
              label="Fiscal Year" 
              value={filters.fiscalYear}
              onChange={(e) => setFilters({...filters, fiscalYear: e.target.value})}
              options={['2022-2023', '2023-2024', '2024-2025']}
              required
            />
            <SelectField 
              label="Scheme Type" 
              value={filters.schemeType}
              onChange={(e) => setFilters({...filters, schemeType: e.target.value})}
              options={['All', 'Ongoing', 'New']}
            />
          </div>

          {/* Date Range */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <input 
                  type="checkbox" 
                  id="useFromDate" 
                  checked={filters.useFromDate} 
                  onChange={(e) => setFilters({...filters, useFromDate: e.target.checked})}
                  style={{ width: '16px', height: '16px' }}
                />
                <label htmlFor="useFromDate" className="label" style={{ marginBottom: 0 }}>From Date</label>
              </div>
              <input 
                type="date" 
                className="input" 
                disabled={!filters.useFromDate}
                value={filters.fromDate}
                onChange={(e) => setFilters({...filters, fromDate: e.target.value})}
                style={{ opacity: filters.useFromDate ? 1 : 0.6 }}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label className="label">To Date</label>
              <input 
                type="date" 
                className="input" 
                value={filters.toDate}
                onChange={(e) => setFilters({...filters, toDate: e.target.value})}
              />
            </div>
          </div>

          {/* GS No & State */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
            <InputField 
              label="GS No." 
              placeholder="Enter GS No." 
              value={filters.gsNo}
              onChange={(e) => setFilters({...filters, gsNo: e.target.value})}
            />
          </div>
        </div>

        <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid hsl(var(--border))', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center' }}>
            <p className="label" style={{ marginBottom: 0, color: 'hsl(var(--text-muted))' }}>GET BY STATE</p>
            <div style={{ display: 'flex', gap: '2rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', cursor: 'pointer', fontSize: '0.875rem', fontWeight: 500 }}>
                <input 
                  type="radio" 
                  name="state" 
                  value="saved" 
                  checked={filters.state === 'saved'} 
                  onChange={(e) => setFilters({...filters, state: e.target.value})}
                  style={{ accentColor: 'hsl(var(--primary))' }}
                />
                Saved
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', cursor: 'pointer', fontSize: '0.875rem', fontWeight: 500 }}>
                <input 
                  type="radio" 
                  name="state" 
                  value="committed" 
                  checked={filters.state === 'committed'} 
                  onChange={(e) => setFilters({...filters, state: e.target.value})}
                  style={{ accentColor: 'hsl(var(--primary))' }}
                />
                Committed
              </label>
            </div>
          </div>

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
        <div style={{ padding: '1.5rem 2rem', background: 'hsl(var(--bg-main) / 0.5)', borderBottom: '1px solid hsl(var(--border))' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>DEPARTMENTAL RE-APPROPRIATION REPORT</h3>
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
             {/* Section 1: Surrenders from scheme */}
             <div style={{ position: 'relative' }}>
               <h4 style={{ fontSize: '0.9375rem', fontWeight: 700, marginBottom: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                 <span>Surrenders from scheme</span>
                 <span style={{ fontSize: '0.6875rem', color: 'hsl(var(--text-muted))', fontWeight: 500 }}>(PKR Million)</span>
               </h4>
               
               <div style={{ border: '1px solid #000', overflowX: 'auto' }}>
                 <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.75rem', textAlign: 'left' }}>
                   <thead>
                     <tr style={{ background: '#f0f0f0', borderBottom: '1px solid #000' }}>
                       <th colSpan={5} style={{ padding: '0.6rem', textAlign: 'center', borderRight: '1.5px solid #000', fontWeight: 700 }}>Surrenders</th>
                       <th colSpan={5} style={{ padding: '0.6rem', textAlign: 'center', fontWeight: 700 }}>Excess</th>
                     </tr>
                     <tr style={{ background: '#f8f8f8', borderBottom: '1.5px solid #000' }}>
                       <th style={{ padding: '0.5rem', borderRight: '1px solid #ddd' }}>GS No.</th>
                       <th style={{ padding: '0.5rem', borderRight: '1px solid #ddd' }}>Sector</th>
                       <th style={{ padding: '0.5rem', borderRight: '1px solid #ddd', width: '25%' }}>Scheme Name</th>
                       <th style={{ padding: '0.5rem', borderRight: '1px solid #ddd' }}>Object Code</th>
                       <th style={{ padding: '0.5rem', borderRight: '1.5px solid #000', textAlign: 'right' }}>Surr. Amount</th>
                       
                       <th style={{ padding: '0.5rem', borderRight: '1px solid #ddd' }}>GS No.</th>
                       <th style={{ padding: '0.5rem', borderRight: '1px solid #ddd' }}>Sector</th>
                       <th style={{ padding: '0.5rem', borderRight: '1px solid #ddd', width: '25%' }}>Scheme Name</th>
                       <th style={{ padding: '0.5rem', borderRight: '1px solid #ddd' }}>Object Code</th>
                       <th style={{ padding: '0.5rem', textAlign: 'right' }}>Exc. Amount</th>
                     </tr>
                   </thead>
                   <tbody>
                     {[0, 1, 2].map((idx) => (
                       <tr key={idx} style={{ borderBottom: '1px solid #ddd' }}>
                         {/* Surrender Side */}
                         <td style={{ padding: '0.5rem', borderRight: '1px solid #ddd' }}>{idx === 0 ? '76' : idx === 1 ? '78' : ''}</td>
                         <td style={{ padding: '0.5rem', borderRight: '1px solid #ddd', color: '#666' }}>{idx < 2 ? 'School Education' : ''}</td>
                         <td style={{ padding: '0.5rem', borderRight: '1px solid #ddd', fontSize: '0.6875rem', lineHeight: '1.4' }}>
                           {idx === 0 ? 'New initiatives of SED for imparting Education through Outsourcing of Public Schools (PEIMA)' : 
                            idx === 1 ? 'Daanish Schools and Centres of Excellence Authority' : ''}
                         </td>
                         <td style={{ padding: '0.5rem', borderRight: '1px solid #ddd', whiteSpace: 'nowrap' }}>{idx < 2 ? 'A06470 - Others' : ''}</td>
                         <td style={{ padding: '0.5rem', borderRight: '1.5px solid #000', textAlign: 'right', fontWeight: 600 }}>{idx < 2 ? '5.00' : ''}</td>
                         
                         {/* Excess Side */}
                         <td style={{ padding: '0.5rem', borderRight: '1px solid #ddd' }}>{idx === 0 ? '75' : idx === 1 ? '77' : idx === 2 ? '76' : ''}</td>
                         <td style={{ padding: '0.5rem', borderRight: '1px solid #ddd', color: '#666' }}>School Education</td>
                         <td style={{ padding: '0.5rem', borderRight: '1px solid #ddd', fontSize: '0.6875rem', lineHeight: '1.4' }}>
                           {idx === 0 ? 'Retrofitting of Partially Dangerous School Buildings in Punjab' : 
                            idx === 1 ? 'New Initiatives of SED for imparting Education through Private Participation (PEF)' : 
                            'New initiatives of SED for imparting Education through Outsourcing of Public Schools (PEIMA)'}
                         </td>
                         <td style={{ padding: '0.5rem', borderRight: '1px solid #ddd', whiteSpace: 'nowrap' }}>
                            {idx === 0 ? 'A05270 - To Others' : 'A06470 - Others'}
                         </td>
                         <td style={{ padding: '0.5rem', textAlign: 'right', fontWeight: 600 }}>5.00</td>
                       </tr>
                     ))}
                   </tbody>
                   <tfoot>
                     <tr style={{ background: '#f8f8f8', borderTop: '1.5px solid #000', fontWeight: 700 }}>
                       <td colSpan={4} style={{ padding: '0.6rem', textAlign: 'center', borderRight: '1px solid #ddd' }}>Surrender Total</td>
                       <td style={{ padding: '0.6rem', textAlign: 'right', borderRight: '1.5px solid #000' }}>15.00</td>
                       
                       <td colSpan={4} style={{ padding: '0.6rem', textAlign: 'center', borderRight: '1px solid #ddd' }}>Excess Total</td>
                       <td style={{ padding: '0.6rem', textAlign: 'right' }}>15.00</td>
                     </tr>
                   </tfoot>
                 </table>
               </div>
             </div>

             {/* Section 2: Excess to scheme */}
             <div style={{ position: 'relative' }}>
               <h4 style={{ fontSize: '0.9375rem', fontWeight: 700, marginBottom: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                 <span>Excess to scheme</span>
                 <span style={{ fontSize: '0.6875rem', color: 'hsl(var(--text-muted))', fontWeight: 500 }}>(PKR Million)</span>
               </h4>
               
               <div style={{ border: '1px solid #000', overflowX: 'auto' }}>
                 <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.75rem', textAlign: 'left' }}>
                   <thead>
                     <tr style={{ background: '#f0f0f0', borderBottom: '1px solid #000' }}>
                       <th colSpan={5} style={{ padding: '0.6rem', textAlign: 'center', borderRight: '1.5px solid #000', fontWeight: 700 }}>Excess</th>
                       <th colSpan={5} style={{ padding: '0.6rem', textAlign: 'center', fontWeight: 700 }}>Surrenders</th>
                     </tr>
                     <tr style={{ background: '#f8f8f8', borderBottom: '1.5px solid #000' }}>
                       <th style={{ padding: '0.5rem', borderRight: '1px solid #ddd' }}>GS No.</th>
                       <th style={{ padding: '0.5rem', borderRight: '1px solid #ddd' }}>Sector</th>
                       <th style={{ padding: '0.5rem', borderRight: '1px solid #ddd', width: '25%' }}>Scheme Name</th>
                       <th style={{ padding: '0.5rem', borderRight: '1px solid #ddd' }}>Object Code</th>
                       <th style={{ padding: '0.5rem', borderRight: '1.5px solid #000', textAlign: 'right' }}>Exc. Amount</th>
                       
                       <th style={{ padding: '0.5rem', borderRight: '1px solid #ddd' }}>GS No.</th>
                       <th style={{ padding: '0.5rem', borderRight: '1px solid #ddd' }}>Sector</th>
                       <th style={{ padding: '0.5rem', borderRight: '1px solid #ddd', width: '25%' }}>Scheme Name</th>
                       <th style={{ padding: '0.5rem', borderRight: '1px solid #ddd' }}>Object Code</th>
                       <th style={{ padding: '0.5rem', textAlign: 'right' }}>Surr. Amount</th>
                     </tr>
                   </thead>
                   <tbody>
                     {[0].map((idx) => (
                       <tr key={idx} style={{ borderBottom: '1px solid #ddd' }}>
                         <td style={{ padding: '0.5rem', borderRight: '1px solid #ddd' }}>75</td>
                         <td style={{ padding: '0.5rem', borderRight: '1px solid #ddd' }}>School Education</td>
                         <td style={{ padding: '0.5rem', borderRight: '1px solid #ddd', fontSize: '0.6875rem' }}>Retrofitting of Partially Dangerous School Buildings in Punjab</td>
                         <td style={{ padding: '0.5rem', borderRight: '1px solid #ddd' }}>A05270 - To Others</td>
                         <td style={{ padding: '0.5rem', borderRight: '1.5px solid #000', textAlign: 'right', fontWeight: 600 }}>5.00</td>
                         
                         <td style={{ padding: '0.5rem', borderRight: '1px solid #ddd' }}>76</td>
                         <td style={{ padding: '0.5rem', borderRight: '1px solid #ddd' }}>School Education</td>
                         <td style={{ padding: '0.5rem', borderRight: '1px solid #ddd', fontSize: '0.6875rem' }}>New initiatives of SED for imparting Education through Outsourcing of Public Schools (PEIMA)</td>
                         <td style={{ padding: '0.5rem', borderRight: '1px solid #ddd' }}>A06470 - Others</td>
                         <td style={{ padding: '0.5rem', textAlign: 'right', fontWeight: 600 }}>5.00</td>
                       </tr>
                     ))}
                   </tbody>
                 </table>
               </div>
             </div>
          </div>
        )}
      </section>
    </div>
  );
};
