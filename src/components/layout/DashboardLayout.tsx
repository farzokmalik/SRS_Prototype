import React from 'react';
import { Link } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { useForm } from '../../context/FormContext';
import { useFormConfig } from '../../context/FormConfigContext';
import { 
  Bell, 
  Search, 
  ChevronRight,
  Save,
  Send
} from 'lucide-react';

export const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { currentSection, setSection } = useForm();
  const { breadcrumb, sections, totalSections } = useFormConfig();
  const activeSection = sections.find(s => s.id === currentSection);

  const nextSection = () => {
    if (currentSection < totalSections) setSection(currentSection + 1);
  };

  const prevSection = () => {
    if (currentSection > 1) setSection(currentSection - 1);
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'hsl(var(--bg-main))' }}>
      <Sidebar />
      <main style={{ 
        flex: 1, 
        marginLeft: '320px', 
        display: 'flex', 
        flexDirection: 'column',
        position: 'relative',
        minWidth: 0
      }}>
        {/* Modern Premium Header */}
        <header className="glass" style={{ 
          height: '70px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          padding: '0 2rem',
          position: 'sticky',
          top: 0,
          zIndex: 90,
          borderBottom: '1px solid hsl(var(--border))'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'hsl(var(--text-muted))', fontSize: '0.875rem' }}>
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Dashboard</Link>
            <ChevronRight size={14} />
            <span>Proformas</span>
            <ChevronRight size={14} />
            <span style={{ color: 'hsl(var(--primary))', fontWeight: 600 }}>{breadcrumb}</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <div style={{ position: 'relative' }}>
              <Search style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }} size={16} color="hsl(var(--text-muted))" />
              <input 
                placeholder="Search sections..." 
                style={{ 
                  padding: '0.5rem 1rem 0.5rem 2.25rem', 
                  borderRadius: 'var(--radius-full)', 
                  border: '1px solid hsl(var(--border))',
                  fontSize: '0.875rem',
                  width: '240px',
                  background: 'rgba(0,0,0,0.02)',
                  outline: 'none'
                }} 
              />
            </div>
            <button className="btn" style={{ padding: '0.5rem', background: 'transparent' }}><Bell size={20} color="hsl(var(--text-muted))" /></button>
            <div style={{ height: '32px', width: '1px', background: 'hsl(var(--border))' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: 'var(--radius-full)', background: 'hsl(var(--primary))', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.875rem', fontWeight: 600 }}>
                JD
              </div>
              <div style={{ textAlign: 'left' }}>
                <p style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'hsl(var(--primary))' }}>Dr.Khalid</p>
                <p style={{ fontSize: '0.6875rem', color: 'hsl(var(--text-muted))' }}>Admin Officer</p>
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div style={{ padding: '2.5rem', maxWidth: '1200px', margin: '0 auto', width: '100%', flex: 1 }}>
          <div
            style={{
              marginBottom: '2.5rem',
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1fr) auto',
              alignItems: 'center',
              gap: '1rem',
            }}
          >
            <div style={{ minWidth: 0 }}>
              <p style={{ color: 'hsl(var(--accent))', fontWeight: 600, fontSize: '0.8125rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
                Section {activeSection?.id.toString().padStart(2, '0')}
              </p>
              <h1 style={{ fontSize: '2rem', fontWeight: 650, lineHeight: 1.2, margin: 0, overflowWrap: 'anywhere' }}>{activeSection?.title}</h1>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end', whiteSpace: 'nowrap' }}>
              <button className="btn btn-secondary"><Save size={18} /> Save Draft</button>
              <button className="btn btn-primary"><Send size={18} /> Submit Application</button>
            </div>
          </div>

          <div key={currentSection} className="fade-in">
            {children}
          </div>
        </div>

        {/* Sticky Footer Progress */}
        <footer className="glass" style={{ 
          padding: '1.25rem 2.5rem', 
          borderTop: '1px solid hsl(var(--border))', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          position: 'sticky',
          bottom: 0,
          zIndex: 90
        }}>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <div style={{ textAlign: 'left' }}>
              <p style={{ fontSize: '0.6875rem', textTransform: 'uppercase', color: 'hsl(var(--text-muted))', fontWeight: 600 }}>Status</p>
              <p style={{ fontSize: '0.875rem', fontWeight: 700 }}>In Progress</p>
            </div>
            <div style={{ textAlign: 'left' }}>
              <p style={{ fontSize: '0.6875rem', textTransform: 'uppercase', color: 'hsl(var(--text-muted))', fontWeight: 600 }}>Phase</p>
              <p style={{ fontSize: '0.875rem', fontWeight: 700 }}>{currentSection <= 7 ? 'Initial Assessment' : currentSection <= 13 ? 'Technical Planning' : 'Final Submission'}</p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button className="btn btn-secondary" onClick={prevSection} disabled={currentSection === 1}>Previous</button>
            <button className="btn btn-primary" onClick={nextSection} disabled={currentSection === totalSections}>Next Section <ChevronRight size={18} /></button>
          </div>
        </footer>
      </main>
    </div>
  );
};
