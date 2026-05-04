import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
  FileText,
  RefreshCw,
  ClipboardCheck,
  ShieldCheck,
  ArrowRight,
  Lock,
  Bell,
  LogOut,
  LayoutGrid,
  Database,
} from 'lucide-react';

const PC_FORMS = [
   {
    id: 'pcn',
    path: '/PCN',
    label: 'PCN',
    title: 'Project Concept Note',
    description: 'Specialised intervention concept note for strategic alignment, crop health, and geographical coverage proposals.',
    sections: 16,
    icon: FileText,
    available: true,
  },
  {
    id: 'pc1',
    label: 'PC-I',
    title: 'Development Proposal',
    description: 'Prepare and submit new project or program proposals including cost estimates, objectives, and implementation schedule.',
    sections: 20,
    icon: FileText,
    available: true,
    variants: [
      { label: 'Programs', path: '/pc-1-programs' },
      { label: 'Projects', path: '/pc-1' },
    ]
  },
  {
    id: 'pc2',
    path: '/pc-2',
    label: 'PC-II',
    title: 'Feasibility Study',
    description: 'Request approval for survey, feasibility study or investigation of projects prior to finalising the PC-I.',
    sections: 14,
    icon: RefreshCw,
    available: true,
  },
  {
    id: 'pc3',
    label: 'PC-III',
    title: 'Quarterly Progress Report',
    description: 'Submit quarterly monitoring reports on physical and financial progress of ongoing development projects.',
    sections: 10,
    icon: ClipboardCheck,
    available: true,
    variants: [
      { label: 'Form A', path: '/pc-3-a' },
      { label: 'Form B', path: '/pc-3-b' },
    ]
  },
  {
    id: 'pc4',
    label: 'PC-IV',
    title: 'Project Completion Report',
    description: 'File the completion report upon finishing a development project, covering final costs, outcomes and lessons learned.',
    sections: 27,
    icon: ShieldCheck,
    available: true,
    variants: [
      { label: 'Programs', path: '/pc-4-programs' },
      { label: 'Projects', path: '/pc-4' },
    ]
  },
  {
    id: 'pc5',
    label: 'PC-V',
    title: 'Post-Completion Evaluation',
    description: 'Evaluate the impact and effectiveness of a completed project against its original objectives and projected benefits.',
    sections: 17,
    icon: LayoutGrid,
    available: true,
    variants: [
      { label: 'Programs', path: '/pc-5-programs' },
      { label: 'Projects', path: '/pc-5' },
    ]
    },
    {
      id: 're-appropriation',
      path: '/re-appropriation',
      label: 'Financials',
      title: 'Project Re-Appropriation',
      description: 'Manage fund surrenders and allocations through the centralized Surrender Pool. Track in-flow and out-flow ledger.',
      sections: 3,
      icon: Database,
      available: true,
    },
  ];

export const DashboardHome: React.FC = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  return (
    <div style={{ minHeight: '100vh', background: 'hsl(var(--bg-main))' }}>
      {/* Top Bar */}
      <header className="glass" style={{
        borderBottom: '1px solid hsl(var(--border))',
        padding: '0 2rem',
        height: '70px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
        zIndex: 90,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
          <div style={{
            width: '38px', height: '38px',
            background: 'hsl(var(--primary))',
            borderRadius: 'var(--radius-md)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <ShieldCheck size={20} color="#fff" />
          </div>
          <div>
            <p style={{ fontSize: '1rem', fontWeight: 700, color: 'hsl(var(--primary))', lineHeight: 1.2, fontFamily: 'Outfit, sans-serif' }}>
              P&D Board Portal
            </p>
            <p style={{ fontSize: '0.68rem', color: 'hsl(var(--text-muted))', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
              Government of Punjab
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <button className="btn" style={{ padding: '0.5rem', background: 'transparent' }}>
            <Bell size={20} color="hsl(var(--text-muted))" />
          </button>
          <div style={{ height: '28px', width: '1px', background: 'hsl(var(--border))' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}>
            <div style={{
              width: '36px', height: '36px', borderRadius: 'var(--radius-full)',
              background: 'hsl(var(--primary))', color: '#fff',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '0.875rem', fontWeight: 600,
            }}>
              {user?.name?.split(' ').map(n => n[0]).join('') ?? 'U'}
            </div>
            <div style={{ textAlign: 'left' }}>
              <p style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'hsl(var(--primary))' }}>{user?.name}</p>
              <p style={{ fontSize: '0.6875rem', color: 'hsl(var(--text-muted))' }}>{user?.role}</p>
            </div>
          </div>
          <button
            onClick={logout}
            title="Sign out"
            className="btn btn-secondary"
            style={{ padding: '0.5rem', borderRadius: 'var(--radius-md)' }}
          >
            <LogOut size={18} />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '2.5rem 2rem' }}>
        {/* Welcome Section */}
        <div style={{ marginBottom: '2.5rem' }}>
          <p style={{
            color: 'hsl(var(--accent))', fontWeight: 600, fontSize: '0.8125rem',
            textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem',
          }}>
            Dashboard
          </p>
          <h1 style={{ fontSize: '2rem', fontWeight: 650, marginBottom: '0.5rem' }}>
            Welcome back, {user?.name?.split(' ')[0]}
          </h1>
          <p style={{ color: 'hsl(var(--text-muted))', fontSize: '0.9375rem' }}>
            Select a proforma to begin or continue working on a project submission.
          </p>
        </div>

        {/* PC Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '1.25rem',
        }}>
          {PC_FORMS.map((pc, idx) => {
            const Icon = pc.icon;
            const hasVariants = 'variants' in pc && pc.variants;

            return (
              <div
                key={pc.id}
                className="card"
                style={{
                  position: 'relative',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.75rem',
                  textAlign: 'left',
                  opacity: pc.available ? 1 : 0.55,
                  animation: `fadeIn 0.4s cubic-bezier(0.4, 0, 0.2, 1) ${idx * 0.07}s both`,
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => {
                  if (!pc.available) return;
                  e.currentTarget.style.borderColor = 'hsl(var(--accent))';
                  e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'hsl(var(--border))';
                  e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* Top Row: Icon + Badge */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                  <div style={{
                    width: '48px', height: '48px', borderRadius: 'var(--radius-md)',
                    background: 'hsl(var(--accent-soft))',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon size={24} color="hsl(var(--accent))" />
                  </div>
                  {pc.available ? (
                    <span style={{
                      fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase',
                      letterSpacing: '0.06em', color: 'hsl(var(--success))',
                      background: 'hsl(var(--success) / 0.1)', padding: '0.25rem 0.625rem',
                      borderRadius: 'var(--radius-sm)',
                    }}>
                      Available
                    </span>
                  ) : (
                    <span style={{
                      fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase',
                      letterSpacing: '0.06em', color: 'hsl(var(--text-muted))',
                      background: 'hsl(var(--bg-main))', padding: '0.25rem 0.625rem',
                      borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', gap: '4px',
                    }}>
                      <Lock size={11} /> Coming Soon
                    </span>
                  )}
                </div>

                {/* Label + Title */}
                <p style={{
                  fontSize: '0.75rem', fontWeight: 700, color: 'hsl(var(--accent))',
                  letterSpacing: '0.03em', marginBottom: '0.3rem',
                }}>
                  {pc.label}
                </p>
                <h3 style={{
                  fontSize: '1.125rem', fontWeight: 700,
                  marginBottom: '0.5rem', lineHeight: 1.3,
                }}>
                  {pc.title}
                </h3>

                {/* Description */}
                <p style={{
                  fontSize: '0.8125rem', color: 'hsl(var(--text-muted))',
                  lineHeight: 1.6, marginBottom: '1.5rem',
                  flexGrow: 1,
                }}>
                  {pc.description}
                </p>

                {/* Footer / Actions */}
                <div style={{
                  paddingTop: '1.25rem',
                  borderTop: '1px solid hsl(var(--border))',
                }}>
                  {hasVariants && pc.available ? (
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                      {(pc as any).variants.map((variant: any) => (
                        <button
                          key={variant.path}
                          className="btn btn-primary"
                          onClick={() => navigate(variant.path)}
                          style={{
                            padding: '0.5rem 0.5rem',
                            fontSize: '0.8125rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '6px',
                          }}
                        >
                          {variant.label} <ArrowRight size={15} />
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                      {pc.available ? (
                        <button
                          onClick={() => navigate((pc as any).path)}
                          className="btn btn-primary"
                          style={{
                            padding: '0.4rem 1rem',
                            fontSize: '0.8125rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                          }}
                        >
                          Open <ArrowRight size={15} />
                        </button>
                      ) : (
                        <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'hsl(var(--text-muted))', display: 'flex', alignItems: 'center', gap: '4px' }}>
                          Locked
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
