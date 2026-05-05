import React from 'react';
import { Network, FileImage, ExternalLink, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DIAGRAMS = [
  {
    id: 'dfd',
    title: 'Data Flow Diagram (DFD)',
    description: 'A comprehensive map showing how data flows through the SRS Prototype, covering all the PC forms',
    url: 'https://drive.google.com/file/d/1z2Qf5HZ4KifRu-26tjvU8PhWI5DWvJXS/view?usp=sharing',
    type: 'Architecture',
  },
  // {
  //   id: 'erd',
  //   title: 'Entity Relationship Diagram (ERD)',
  //   description: 'Detailed database schema showing the relationships between Projects, PC Proformas, Scoring Factors, and Financial Transactions.',
  //   url: '#',
  //   type: 'Database',
  // },
  // {
  //   id: 'workflow',
  //   title: 'Project Approval Workflow',
  //   description: 'Visual process flow of the ADP approval cycle, including rationalization checks and pool allocation logic.',
  //   url: '#',
  //   type: 'Process',
  // },
];

export const DiagramsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: '100vh', background: 'hsl(var(--bg-main))', padding: '3rem 2rem' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '3rem' }}>
          <button 
            onClick={() => navigate('/')}
            style={{ 
              display: 'flex', alignItems: 'center', gap: '0.5rem', 
              background: 'transparent', border: 'none', 
              color: 'hsl(var(--text-muted))', fontWeight: 600, 
              cursor: 'pointer', marginBottom: '1.5rem',
              padding: 0, fontSize: '0.875rem'
            }}
          >
            <ArrowLeft size={16} /> Back to Dashboard
          </button>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1rem' }}>
            <div style={{ 
              width: '56px', height: '56px', background: 'hsl(var(--accent))', 
              borderRadius: 'var(--radius-md)', display: 'flex', 
              alignItems: 'center', justifyContent: 'center', color: 'white' 
            }}>
              <Network size={32} />
            </div>
            <div>
              <h1 style={{ fontSize: '2.25rem', fontWeight: 800, color: 'hsl(var(--primary))', letterSpacing: '-0.02em' }}>
                System Diagrams
              </h1>
              <p style={{ color: 'hsl(var(--text-muted))', fontSize: '1rem' }}>
                Technical documentation and architectural blueprints for the SRS Prototype.
              </p>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {DIAGRAMS.map((d, idx) => (
            <div 
              key={d.id} 
              className="card"
              style={{ 
                display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
                padding: '1.5rem 2rem', borderRadius: 'var(--radius-lg)',
                animation: `fadeIn 0.4s ease-out ${idx * 0.1}s both`,
                border: '1px solid hsl(var(--border))',
                background: 'white',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flex: 1 }}>
                <div style={{ 
                  width: '48px', height: '48px', background: 'hsl(var(--accent-soft))', 
                  borderRadius: 'var(--radius-md)', display: 'flex', 
                  alignItems: 'center', justifyContent: 'center', color: 'hsl(var(--accent))' 
                }}>
                  <FileImage size={24} />
                </div>
                <div style={{ flex: 1, maxWidth: '600px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.25rem' }}>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: 'hsl(var(--primary))' }}>{d.title}</h3>
                    <span style={{ 
                      fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', 
                      letterSpacing: '0.05em', color: 'hsl(var(--accent))',
                      background: 'hsl(var(--accent) / 0.1)', padding: '0.2rem 0.5rem',
                      borderRadius: 'var(--radius-sm)'
                    }}>
                      {d.type}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.875rem', color: 'hsl(var(--text-muted))', lineHeight: 1.5 }}>
                    {d.description}
                  </p>
                </div>
              </div>
              
              <a 
                href={d.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ 
                  display: 'flex', alignItems: 'center', gap: '0.5rem', 
                  padding: '0.625rem 1.25rem', fontSize: '0.875rem',
                  textDecoration: 'none'
                }}
              >
                View Diagram <ExternalLink size={16} />
              </a>
            </div>
          ))}
        </div>

        {/* Info Box */}
        <div style={{ 
          marginTop: '4rem', padding: '2rem', borderRadius: 'var(--radius-lg)', 
          background: 'hsl(var(--primary) / 0.03)', border: '1px dashed hsl(var(--border))',
          textAlign: 'center'
        }}>
          <p style={{ color: 'hsl(var(--text-muted))', fontSize: '0.875rem' }}>
            Looking for a specific diagram? Additional documentation is being generated and will be listed here as it becomes available.
          </p>
        </div>
      </div>
    </div>
  );
};
