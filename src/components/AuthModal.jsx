import React, { useState } from 'react';
import { X, Mail, Lock, User, LogIn, UserPlus, CheckCircle2, ShieldCheck, AlertCircle } from 'lucide-react';
import { BitmojiRenderer } from './BitmojiCreator';

export default function AuthModal({
  isOpen,
  onClose,
  onLoginSuccess,
  currentAvatarConfig,
  t
}) {
  if (!isOpen) return null;

  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  // Handle Real User Login / Signup using Local Storage Real User Store
  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    const trimmedEmail = email.trim().toLowerCase();
    if (!trimmedEmail || !trimmedEmail.includes('@') || !trimmedEmail.includes('.')) {
      setError('Please enter a valid email address.');
      return;
    }

    if (!password || password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    // Retrieve existing accounts
    let accounts = {};
    try {
      accounts = JSON.parse(localStorage.getItem('pcos_registered_users') || '{}');
    } catch (err) {
      accounts = {};
    }

    if (isSignUp) {
      // Sign Up Flow
      if (accounts[trimmedEmail]) {
        setError('An account with this email already exists. Please sign in instead.');
        return;
      }

      const displayName = name.trim() || trimmedEmail.split('@')[0];
      const newUser = {
        email: trimmedEmail,
        name: displayName,
        password: password,
        bitmojiConfig: currentAvatarConfig || {
          hairStyle: 'waves',
          hairColor: '#2D150B',
          skinTone: '#FFEDD5',
          outfitColor: '#1D4ED8',
          accessory: 'flower'
        },
        createdAt: new Date().toISOString()
      };

      accounts[trimmedEmail] = newUser;
      localStorage.setItem('pcos_registered_users', JSON.stringify(accounts));
      localStorage.setItem('pcos_active_session', JSON.stringify(newUser));

      setSuccessMsg('Account created successfully! Logging you in...');
      setIsSuccess(true);

      setTimeout(() => {
        onLoginSuccess({
          email: newUser.email,
          name: newUser.name,
          bitmojiConfig: newUser.bitmojiConfig,
          isLoggedIn: true
        });
        onClose();
        setIsSuccess(false);
      }, 700);
    } else {
      // Sign In Flow
      const existingUser = accounts[trimmedEmail];
      if (!existingUser) {
        setError('No account found with this email. Please click "Sign Up Free" below to create one.');
        return;
      }

      if (existingUser.password !== password) {
        setError('Incorrect password. Please verify and try again.');
        return;
      }

      localStorage.setItem('pcos_active_session', JSON.stringify(existingUser));

      setSuccessMsg(`Welcome back, ${existingUser.name}!`);
      setIsSuccess(true);

      setTimeout(() => {
        onLoginSuccess({
          email: existingUser.email,
          name: existingUser.name,
          customPhoto: existingUser.customPhoto || null,
          bitmojiConfig: existingUser.bitmojiConfig,
          isLoggedIn: true
        });
        onClose();
        setIsSuccess(false);
      }, 700);
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px'
      }}
      onClick={onClose}
    >
      <div
        className="doctor-report-view"
        style={{
          width: '100%',
          maxWidth: '440px',
          maxHeight: '90vh',
          overflowY: 'auto'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="doctor-report-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <BitmojiRenderer size={40} />
            <div>
              <div className="report-clinic-title">
                {isSignUp ? 'Create User Account' : 'Sign In with Email'}
              </div>
              <div className="report-date">
                Secure Health Sync & History Tracking
              </div>
            </div>
          </div>
          <button
            className="header-action-btn"
            onClick={onClose}
            title="Close"
          >
            <X size={16} />
          </button>
        </div>

        {isSuccess ? (
          <div style={{ textAlign: 'center', padding: '24px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
            <CheckCircle2 size={48} color="var(--emerald)" />
            <div style={{ fontSize: '16px', fontWeight: '800', color: 'var(--text-main)' }}>
              {successMsg}
            </div>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
              Your symptom assessments, custom diet timelines, and lab test checklist are now connected to your email.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {isSignUp && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <label style={{ fontSize: '12px', fontWeight: '800', color: 'var(--text-main)' }}>
                  Your Full Name
                </label>
                <div style={{ display: 'flex', alignItems: 'center', backgroundColor: 'var(--bg-subtle)', border: '1.5px solid var(--border-mid)', borderRadius: '10px', padding: '10px 12px', gap: '8px' }}>
                  <User size={16} color="var(--text-light)" />
                  <input
                    type="text"
                    placeholder="e.g. Priya Sharma"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    style={{ width: '100%', border: 'none', background: 'transparent', outline: 'none', color: 'var(--text-main)', fontSize: '14px', fontWeight: '600' }}
                  />
                </div>
              </div>
            )}

            {/* Real Email Field */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <label style={{ fontSize: '12px', fontWeight: '800', color: 'var(--text-main)' }}>
                Email Address
              </label>
              <div style={{ display: 'flex', alignItems: 'center', backgroundColor: 'var(--bg-subtle)', border: '1.5px solid var(--border-mid)', borderRadius: '10px', padding: '10px 12px', gap: '8px' }}>
                <Mail size={16} color="var(--text-light)" />
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{ width: '100%', border: 'none', background: 'transparent', outline: 'none', color: 'var(--text-main)', fontSize: '14px', fontWeight: '600' }}
                />
              </div>
            </div>

            {/* Real Password Field */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <label style={{ fontSize: '12px', fontWeight: '800', color: 'var(--text-main)' }}>
                Password (min. 6 characters)
              </label>
              <div style={{ display: 'flex', alignItems: 'center', backgroundColor: 'var(--bg-subtle)', border: '1.5px solid var(--border-mid)', borderRadius: '10px', padding: '10px 12px', gap: '8px' }}>
                <Lock size={16} color="var(--text-light)" />
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  style={{ width: '100%', border: 'none', background: 'transparent', outline: 'none', color: 'var(--text-main)', fontSize: '14px', fontWeight: '600' }}
                />
              </div>
            </div>

            {error && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12.5px', color: 'var(--red)', fontWeight: '700', backgroundColor: 'var(--red-subtle)', padding: '10px 12px', borderRadius: '10px', border: '1px solid var(--red-border)' }}>
                <AlertCircle size={16} color="var(--red)" style={{ minWidth: '16px' }} />
                <span>{error}</span>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="btn-primary"
              style={{ marginTop: '6px' }}
            >
              {isSignUp ? <UserPlus size={18} /> : <LogIn size={18} />}
              {isSignUp ? 'Create User Account' : 'Sign In to Account'}
            </button>

            {/* Toggle Sign-In / Sign-Up */}
            <div style={{ textAlign: 'center', marginTop: '6px', fontSize: '13px', color: 'var(--text-muted)' }}>
              {isSignUp ? 'Already registered?' : "New to SheSync?"}{' '}
              <button
                type="button"
                onClick={() => {
                  setIsSignUp(!isSignUp);
                  setError('');
                }}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--primary)',
                  fontWeight: '800',
                  cursor: 'pointer',
                  textDecoration: 'underline'
                }}
              >
                {isSignUp ? 'Sign In Here' : 'Sign Up Free'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
