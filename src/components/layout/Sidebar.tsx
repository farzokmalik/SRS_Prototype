import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../context/FormContext';
import { useFormConfig } from '../../context/FormConfigContext';
import { 
  CheckCircle2, 
  Circle, 
  ChevronRight,
  ChevronLeft,
  ShieldCheck
} from 'lucide-react';

export const Sidebar: React.FC = () => {
  const { currentSection, setSection, formData, dirtySections, visitedSections } = useForm();
  const { label, title, sections, totalSections } = useFormConfig();
  const navigate = useNavigate();

  const isCompleted = (id: number) => {
    // Primary: user has actively interacted with the section
    if (dirtySections.includes(id)) return true;
    // Fallback: meaningful non-default data exists
    const sectionData = (formData as any)[`section${id}`];
    if (!sectionData) return false;
    const ignoredDefaults = ['No', 'New Scheme', 'Existing Scheme'];
    return Object.values(sectionData).some(val => {
      if (val === '' || val === null || val === undefined) return false;
      if (Array.isArray(val)) return val.length > 0;
      if (typeof val === 'string' && ignoredDefaults.includes(val)) return false;
      return true;
    });
  };

  return (
    <aside style={{
      width: '320px',
      height: '100vh',
      background: 'hsl(var(--primary))',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      position: 'fixed',
      left: 0,
      top: 0,
      zIndex: 100,
      boxShadow: 'var(--shadow-lg)'
    }}>
      <div style={{ padding: '2rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
          <div style={{ background: 'hsl(var(--accent))', padding: '0.5rem', borderRadius: 'var(--radius-md)' }}>
            <ShieldCheck size={24} color="white" />
          </div>
          <h1 style={{ color: 'white', fontSize: '1.25rem', fontWeight: 800 }}>{label} Form</h1>
        </div>
        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{title}</p>
        <button
          onClick={() => navigate('/')}
          style={{
            marginTop: '1rem',
            display: 'flex', alignItems: 'center', gap: '0.4rem',
            background: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: 'var(--radius-md)',
            padding: '0.5rem 0.875rem',
            color: 'rgba(255,255,255,0.7)',
            fontSize: '0.8rem',
            fontWeight: 500,
            cursor: 'pointer',
            transition: 'all 0.15s',
            fontFamily: 'inherit',
            width: '100%',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.14)'; e.currentTarget.style.color = '#fff'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; }}
        >
          <ChevronLeft size={15} /> Back to Dashboard
        </button>
      </div>

      <nav style={{ 
        flex: 1, 
        overflowY: 'auto', 
        padding: '1.5rem 1rem',
        scrollbarWidth: 'none'
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
          {sections.map((section) => {
            const active = currentSection === section.id;
            const completed = isCompleted(section.id);
            
            return (
              <button
                key={section.id}
                onClick={() => setSection(section.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  width: '100%',
                  padding: '1rem',
                  borderRadius: 'var(--radius-md)',
                  background: active ? 'rgba(255,255,255,0.08)' : 'transparent',
                  color: active ? 'white' : 'rgba(255,255,255,0.6)',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  fontFamily: 'Outfit, sans-serif',
                  fontSize: '0.875rem'
                }}
              >
                {active && (
                  <div style={{
                    position: 'absolute',
                    left: 0,
                    top: '20%',
                    bottom: '20%',
                    width: '4px',
                    backgroundColor: 'hsl(var(--accent))',
                    borderRadius: '0 4px 4px 0',
                    boxShadow: '0 0 10px hsl(var(--accent))'
                  }} />
                )}
                
                <div style={{ flexShrink: 0 }}>
                  {completed ? (
                    <CheckCircle2 size={18} color="hsl(var(--success))" />
                  ) : active ? (
                    <Circle size={18} color="hsl(var(--accent))" fill="hsl(var(--accent))" strokeWidth={3} />
                  ) : visitedSections.includes(section.id) ? (
                    <Circle size={18} color="rgba(255,255,255,0.4)" strokeWidth={2} />
                  ) : (
                    <Circle size={18} color="rgba(255,255,255,0.15)" />
                  )}
                </div>
                
                <span style={{ 
                  flex: 1,
                  fontWeight: active ? 600 : 400,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                }}>
                  {label === 'PC-N' && section.id === 1 ? 'A' : (label === 'PC-N' ? section.id - 1 : section.id)}. {section.title}
                </span>
                
                {active && <ChevronRight size={16} color="rgba(255,255,255,0.3)" />}
              </button>
            );
          })}
        </div>
      </nav>

      <div style={{ padding: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.1)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem', fontSize: '0.75rem' }}>
          <span style={{ color: 'rgba(255,255,255,0.5)' }}>Overall Progress</span>
          <span style={{ color: 'white', fontWeight: 600 }}>{Math.round((currentSection / totalSections) * 100)}%</span>
        </div>
        <div style={{ height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '10px', overflow: 'hidden' }}>
          <div style={{ 
            width: `${(currentSection / totalSections) * 100}%`, 
            height: '100%', 
            background: 'linear-gradient(90deg, hsl(var(--accent)), #60A5FA)',
            transition: 'width 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
          }} />
        </div>
      </div>
    </aside>
  );
};
