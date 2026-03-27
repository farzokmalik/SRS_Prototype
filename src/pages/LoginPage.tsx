import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { ShieldCheck, Eye, EyeOff, AlertCircle, Lock, Mail } from 'lucide-react';

const DEMO_EMAIL = 'admin@splendidmark.com';
const DEMO_PASSWORD = 'srsprototype';

export const LoginPage: React.FC = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState(DEMO_EMAIL);
  const [password, setPassword] = useState(DEMO_PASSWORD);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Simulate network delay
    await new Promise(r => setTimeout(r, 800));

    const success = login(email, password);
    if (!success) {
      setError('Invalid credentials. Use the pre-filled values to sign in.');
    }
    setLoading(false);
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      background: 'hsl(222, 47%, 9%)',
      fontFamily: "'Inter', system-ui, sans-serif",
    }}>
      {/* ── Left Panel — Branding ── */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '3rem',
        borderRight: '1px solid rgba(255,255,255,0.07)',
        maxWidth: '520px',
      }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
          <div style={{
            width: '40px', height: '40px',
            background: 'hsl(217, 89%, 48%)',
            borderRadius: '6px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
          }}>
            <ShieldCheck size={22} color="#fff" />
          </div>
          <div>
            <p style={{ color: '#fff', fontSize: '1rem', fontWeight: 700, lineHeight: 1, letterSpacing: '-0.01em' }}>
              P&D Board Portal
            </p>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.72rem', marginTop: '3px', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
              Government of Punjab
            </p>
          </div>
        </div>

        {/* Center content */}
        <div>
          <div style={{
            display: 'inline-block',
            background: 'rgba(23,107,210,0.12)',
            border: '1px solid rgba(23,107,210,0.3)',
            borderRadius: '4px',
            padding: '0.3rem 0.75rem',
            fontSize: '0.72rem',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'hsl(217, 89%, 65%)',
            marginBottom: '1.5rem',
          }}>
            Planning & Development Board — Punjab
          </div>

          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: 800,
            color: '#fff',
            lineHeight: 1.15,
            letterSpacing: '-0.03em',
            marginBottom: '1.25rem',
          }}>
            Planning &<br />Development<br />Board Portal
          </h1>

          <p style={{
            color: 'rgba(255,255,255,0.45)',
            fontSize: '0.9375rem',
            lineHeight: 1.65,
            maxWidth: '380px',
          }}>
            A unified platform for submitting, reviewing, and approving PC-I through PC-V project proformas across all departments and ministries.
          </p>

          {/* Stats row */}
          <div style={{
            display: 'flex',
            gap: '2rem',
            marginTop: '2.5rem',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255,255,255,0.07)',
          }}>
            {[
              { value: '1,200+', label: 'Projects Managed' },
              { value: '5', label: 'PC Proformas' },
              { value: '36+', label: 'Departments' },
            ].map(stat => (
              <div key={stat.label}>
                <p style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1 }}>{stat.value}</p>
                <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.75rem', marginTop: '0.35rem', fontWeight: 500 }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <p style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.72rem' }}>
          © {new Date().getFullYear()} Finance Department, Govt. of Punjab. All rights reserved.
        </p>
      </div>

      {/* ── Right Panel — Login Form ── */}
      <div style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '3rem',
        background: 'hsl(210, 40%, 98%)',
      }}>
        <div style={{ width: '100%', maxWidth: '420px' }}>
          {/* Form header */}
          <div style={{ marginBottom: '2.25rem' }}>
            <h2 style={{
              fontSize: '1.625rem',
              fontWeight: 700,
              color: 'hsl(215, 28%, 13%)',
              letterSpacing: '-0.02em',
              marginBottom: '0.5rem',
            }}>
              Sign in to your account
            </h2>
            {/* <p style={{ color: 'hsl(215, 16%, 47%)', fontSize: '0.875rem' }}>
              Use the pre-filled credentials to access the portal.
            </p> */}
          </div>

          {/* Demo credential notice */}
          {/* <div style={{
            background: 'hsl(211, 89%, 97%)',
            border: '1.5px solid hsl(211, 89%, 85%)',
            borderRadius: '6px',
            padding: '0.875rem 1rem',
            marginBottom: '1.75rem',
            display: 'flex',
            gap: '0.625rem',
            alignItems: 'flex-start',
          }}>
            <Lock size={15} color="hsl(211, 89%, 40%)" style={{ marginTop: '2px', flexShrink: 0 }} />
            <div>
              <p style={{ fontSize: '0.8rem', fontWeight: 600, color: 'hsl(211, 60%, 30%)', marginBottom: '0.2rem' }}>
                Demo Credentials Pre-filled
              </p>
              <p style={{ fontSize: '0.76rem', color: 'hsl(211, 40%, 45%)' }}>
                {DEMO_EMAIL} · {DEMO_PASSWORD}
              </p>
            </div>
          </div> */}

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {/* Email */}
            <div style={{ marginBottom: '1.125rem' }}>
              <label style={{
                display: 'block',
                fontSize: '0.8125rem',
                fontWeight: 600,
                color: 'hsl(215, 25%, 27%)',
                marginBottom: '0.4rem',
                letterSpacing: '0.01em',
              }}>
                Email Address
              </label>
              <div style={{ position: 'relative' }}>
                <Mail size={15} style={{
                  position: 'absolute', left: '0.875rem', top: '50%',
                  transform: 'translateY(-50%)', color: 'hsl(215, 16%, 62%)',
                  pointerEvents: 'none',
                }} />
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  style={{
                    width: '100%',
                    padding: '0.625rem 1rem 0.625rem 2.375rem',
                    fontSize: '0.9rem',
                    border: `1.5px solid ${error ? 'hsl(4, 86%, 60%)' : 'hsl(214, 32%, 88%)'}`,
                    borderRadius: '5px',
                    outline: 'none',
                    fontFamily: 'inherit',
                    color: 'hsl(215, 28%, 13%)',
                    background: '#fff',
                    transition: 'border-color 0.15s',
                  }}
                  onFocus={e => (e.target.style.borderColor = 'hsl(217, 89%, 48%)')}
                  onBlur={e => (e.target.style.borderColor = error ? 'hsl(4, 86%, 60%)' : 'hsl(214, 32%, 88%)')}
                />
              </div>
            </div>

            {/* Password */}
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                <label style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'hsl(215, 25%, 27%)', letterSpacing: '0.01em' }}>
                  Password
                </label>
                <button
                  type="button"
                  style={{ fontSize: '0.78rem', color: 'hsl(217, 89%, 48%)', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600 }}
                >
                  Forgot password?
                </button>
              </div>
              <div style={{ position: 'relative' }}>
                <Lock size={15} style={{
                  position: 'absolute', left: '0.875rem', top: '50%',
                  transform: 'translateY(-50%)', color: 'hsl(215, 16%, 62%)',
                  pointerEvents: 'none',
                }} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                  style={{
                    width: '100%',
                    padding: '0.625rem 2.75rem 0.625rem 2.375rem',
                    fontSize: '0.9rem',
                    border: `1.5px solid ${error ? 'hsl(4, 86%, 60%)' : 'hsl(214, 32%, 88%)'}`,
                    borderRadius: '5px',
                    outline: 'none',
                    fontFamily: 'inherit',
                    color: 'hsl(215, 28%, 13%)',
                    background: '#fff',
                    transition: 'border-color 0.15s',
                  }}
                  onFocus={e => (e.target.style.borderColor = 'hsl(217, 89%, 48%)')}
                  onBlur={e => (e.target.style.borderColor = error ? 'hsl(4, 86%, 60%)' : 'hsl(214, 32%, 88%)')}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(s => !s)}
                  style={{
                    position: 'absolute', right: '0.875rem', top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none', border: 'none', cursor: 'pointer',
                    color: 'hsl(215, 16%, 55%)', display: 'flex', padding: '2px',
                  }}
                >
                  {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
            </div>

            {/* Error */}
            {error && (
              <div style={{
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                background: 'hsl(4, 86%, 97%)',
                border: '1.5px solid hsl(4, 86%, 85%)',
                borderRadius: '5px',
                padding: '0.625rem 0.875rem',
                marginBottom: '1.25rem',
              }}>
                <AlertCircle size={15} color="hsl(4, 86%, 44%)" />
                <span style={{ fontSize: '0.8125rem', color: 'hsl(4, 86%, 35%)', fontWeight: 500 }}>{error}</span>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              style={{
                width: '100%',
                padding: '0.6875rem',
                fontSize: '0.9rem',
                fontWeight: 700,
                fontFamily: 'inherit',
                background: loading ? 'hsl(217, 60%, 55%)' : 'hsl(217, 89%, 40%)',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: loading ? 'not-allowed' : 'pointer',
                transition: 'background 0.15s',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
              }}
              onMouseEnter={e => !loading && ((e.currentTarget as HTMLElement).style.background = 'hsl(217, 89%, 45%)')}
              onMouseLeave={e => !loading && ((e.currentTarget as HTMLElement).style.background = 'hsl(217, 89%, 40%)')}
            >
              {loading ? (
                <>
                  <span style={{
                    width: '15px', height: '15px',
                    border: '2px solid rgba(255,255,255,0.3)',
                    borderTopColor: '#fff',
                    borderRadius: '50%',
                    display: 'inline-block',
                    animation: 'spin 0.7s linear infinite',
                  }} />
                  Authenticating…
                </>
              ) : 'Sign In to Portal'}
            </button>
          </form>

          {/* Footer note */}
          <p style={{ textAlign: 'center', fontSize: '0.75rem', color: 'hsl(215, 16%, 62%)', marginTop: '2rem' }}>
            Secure access · Government of Punjab · For authorised personnel only
          </p>
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
};
