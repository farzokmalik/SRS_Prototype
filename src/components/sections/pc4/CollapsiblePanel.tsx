import React from 'react';
import { ChevronDown } from 'lucide-react';

const accordionBarStyle: React.CSSProperties = {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '0.75rem',
  padding: '0.75rem 1rem',
  background: 'linear-gradient(180deg, hsl(207 72% 44%) 0%, hsl(207 72% 38%) 100%)',
  color: '#fff',
  border: 'none',
  cursor: 'pointer',
  textAlign: 'left',
};

const accordionShellStyle: React.CSSProperties = {
  border: '1px solid hsl(var(--border))',
  borderRadius: 'var(--radius-md)',
  overflow: 'hidden',
  marginBottom: '1rem',
};

const chevronCircleStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '1.75rem',
  height: '1.75rem',
  borderRadius: '999px',
  background: 'hsl(0 0% 100% / 0.2)',
};

type Props = {
  title: string;
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
  titleAlign?: 'left' | 'center';
};

export function CollapsiblePanel({
  title,
  open,
  onToggle,
  children,
  titleAlign = 'left',
}: Props) {
  const chevron = (
    <span style={chevronCircleStyle}>
      <ChevronDown
        size={18}
        strokeWidth={2.5}
        style={{
          transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
          transition: 'transform 0.2s ease',
        }}
      />
    </span>
  );

  return (
    <div style={accordionShellStyle}>
      <button
        type="button"
        onClick={onToggle}
        style={{
          ...accordionBarStyle,
          ...(titleAlign === 'center' ? { justifyContent: 'stretch' } : {}),
        }}
        aria-expanded={open}
      >
        {titleAlign === 'center' ? (
          <div style={{ display: 'flex', width: '100%', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ width: '2.25rem', flexShrink: 0 }} aria-hidden />
            <span
              style={{
                flex: 1,
                textAlign: 'center',
                fontWeight: 700,
                fontSize: '0.875rem',
                letterSpacing: '0.02em',
              }}
            >
              {title}
            </span>
            <div style={{ width: '2.25rem', flexShrink: 0, display: 'flex', justifyContent: 'flex-end' }}>{chevron}</div>
          </div>
        ) : (
          <>
            <span style={{ fontWeight: 700, fontSize: '0.875rem', letterSpacing: '0.02em' }}>{title}</span>
            {chevron}
          </>
        )}
      </button>
      {open ? (
        <div style={{ padding: '1rem', background: 'hsl(142 40% 96% / 0.5)' }}>
          {children}
        </div>
      ) : null}
    </div>
  );
}
