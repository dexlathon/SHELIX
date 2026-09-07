import React from 'react';

export function SheSyncIcon({ size = 36, className = '', color = 'var(--primary)' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ flexShrink: 0 }}
    >
      {/* Outer Glow / Shield Container */}
      <rect x="4" y="4" width="92" height="92" rx="26" fill={color} />

      {/* Decorative Inner Sync Ring */}
      <circle cx="50" cy="50" r="38" stroke="#FFFFFF" strokeWidth="2.5" strokeDasharray="6 4" strokeOpacity="0.4" />

      {/* Interlocking S Curves & Sync Loops */}
      {/* First 'S' - Flowing Top-Left to Center */}
      <path
        d="M58 26C45 26 34 32 34 42C34 52 46 54 54 58C62 62 66 66 66 74C66 84 55 88 42 88C34 88 28 85 24 80"
        stroke="#FFFFFF"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Second 'S' - Harmonious Offset Sync Shadow / Parallel Track */}
      <path
        d="M74 20C70 25 66 26 58 26"
        stroke="#F59E0B"
        strokeWidth="6"
        strokeLinecap="round"
      />
      
      <path
        d="M76 42C76 35 70 30 62 28"
        stroke="#FFFFFF"
        strokeWidth="4"
        strokeLinecap="round"
        strokeOpacity="0.8"
      />

      {/* Second 'S' Monogram Element */}
      <path
        d="M42 36C48 36 56 38 60 44C64 50 58 56 50 60C42 64 36 68 36 76C36 82 42 86 50 86"
        stroke="#FDE047"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Biological Sync Sparkle Accents */}
      <circle cx="72" cy="28" r="4" fill="#FDE047" />
      <circle cx="28" cy="72" r="3.5" fill="#FFFFFF" />
      <path d="M50 14L52 18L56 20L52 22L50 26L48 22L44 20L48 18L50 14Z" fill="#FDE047" />
    </svg>
  );
}

export default function SheSyncLogo({
  size = 36,
  withText = true,
  subtitle = 'PCOS & Hormone Health',
  className = ''
}) {
  return (
    <div
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '10px',
        textDecoration: 'none',
        userSelect: 'none'
      }}
    >
      <SheSyncIcon size={size} />

      {withText && (
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span
              style={{
                fontSize: size * 0.48,
                fontWeight: '900',
                color: 'var(--text-main)',
                letterSpacing: '-0.02em'
              }}
            >
              SheSync
            </span>
          </div>

          {subtitle && (
            <span
              style={{
                fontSize: `${Math.max(10, Math.round(size * 0.26))}px`,
                color: 'var(--text-light)',
                fontWeight: '700'
              }}
            >
              {subtitle}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
