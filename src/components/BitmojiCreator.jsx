import React from 'react';

export function BitmojiRenderer({
  hairStyle = 'waves',
  hairColor = '#2D150B',
  skinTone = '#FFEDD5',
  outfitColor = '#1D4ED8',
  accessory = 'flower',
  emotion = 'happy',
  size = 64,
  className = ''
}) {
  // Determine hair shadow color
  const hairShadow = hairColor === '#09090B' ? '#000000' : '#1C0D07';
  const skinShadow = skinTone === '#FFEDD5' ? '#FED7AA' : skinTone === '#FED7AA' ? '#FDBA74' : '#D97706';

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ borderRadius: '50%', flexShrink: 0 }}
    >
      {/* Background Circle */}
      <circle cx="60" cy="60" r="58" fill={outfitColor} stroke="#FFFFFF" strokeWidth="2.5" />

      {/* Back Hair */}
      {hairStyle === 'waves' && (
        <path
          d="M24 65C22 45 32 18 60 18C88 18 98 45 96 65C95 85 92 105 88 115C86 118 80 118 78 112C74 102 78 78 78 68C78 52 74 38 60 38C46 38 42 52 42 68C42 78 46 102 42 112C40 118 34 118 32 115C28 105 25 85 24 65Z"
          fill={hairColor}
        />
      )}

      {hairStyle === 'ponytail' && (
        <path
          d="M60 18C75 14 96 22 98 48C99 68 88 88 84 100C82 105 76 104 76 98C76 86 86 64 84 50C82 36 70 28 60 26V18Z"
          fill={hairColor}
        />
      )}

      {hairStyle === 'curls' && (
        <g fill={hairColor}>
          <circle cx="34" cy="40" r="14" />
          <circle cx="86" cy="40" r="14" />
          <circle cx="60" cy="24" r="16" />
          <circle cx="28" cy="60" r="13" />
          <circle cx="92" cy="60" r="13" />
          <circle cx="32" cy="80" r="12" />
          <circle cx="88" cy="80" r="12" />
        </g>
      )}

      {hairStyle === 'bob' && (
        <path
          d="M26 50C26 30 38 20 60 20C82 20 94 30 94 50C94 72 88 84 84 84C80 84 80 62 80 50C80 34 72 26 60 26C48 26 40 34 40 50C40 62 40 84 36 84C32 84 26 72 26 50Z"
          fill={hairColor}
        />
      )}

      {/* Shoulders / Top */}
      <path d="M28 118C28 102 42 94 60 94C78 94 92 102 92 118V120H28V118Z" fill={outfitColor} />
      <path d="M50 94L60 104L70 94" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />

      {/* Stethoscope Accessory */}
      {accessory === 'stethoscope' && (
        <>
          <path d="M48 94C48 108 52 112 60 112C68 112 72 108 72 94" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" />
          <circle cx="60" cy="113" r="4" fill="#94A3B8" stroke="#0F172A" strokeWidth="1.5" />
        </>
      )}

      {/* Neck */}
      <path d="M52 74V92C52 96 55 98 60 98C65 98 68 96 68 92V74H52Z" fill={skinTone} />
      <path d="M52 74C56 78 64 78 68 74V78C64 82 56 82 52 78V74Z" fill={skinShadow} />

      {/* Face Base */}
      <path
        d="M40 52C40 38 48 28 60 28C72 28 80 38 80 52C80 66 71 76 60 76C49 76 40 66 40 52Z"
        fill={skinTone}
      />

      {/* Ears */}
      <ellipse cx="39" cy="54" rx="4" ry="6" fill={skinTone} />
      <ellipse cx="81" cy="54" rx="4" ry="6" fill={skinTone} />

      {/* Earrings / Pearls Accessory */}
      {(accessory === 'pearls' || accessory === 'flower') && (
        <>
          <circle cx="39.5" cy="58" r="2.2" fill="#F59E0B" />
          <circle cx="80.5" cy="58" r="2.2" fill="#F59E0B" />
        </>
      )}

      {/* Front Hair Strands */}
      <path
        d="M32 46C34 28 44 20 60 20C76 20 86 28 88 46C86 34 76 25 60 25C44 25 34 34 32 46Z"
        fill={hairColor}
      />

      {hairStyle === 'waves' && (
        <>
          <path d="M34 42C38 32 50 28 58 34C52 38 44 45 40 58C36 72 38 88 36 102C35 106 32 106 32 100C32 86 30 68 34 42Z" fill={hairColor} />
          <path d="M86 42C82 32 70 28 62 34C68 38 76 45 80 58C84 72 82 88 84 102C85 106 88 106 88 100C88 86 90 68 86 42Z" fill={hairColor} />
        </>
      )}

      {/* Dynamic Eyebrows based on health emotion */}
      {emotion === 'happy' && (
        <>
          <path d="M46 45C50 42 54 43 55 45" stroke="#0F172A" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M74 45C70 42 66 43 65 45" stroke="#0F172A" strokeWidth="2.2" strokeLinecap="round" />
        </>
      )}

      {emotion === 'concerned' && (
        <>
          <path d="M46 44L55 47" stroke="#0F172A" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M74 44L65 47" stroke="#0F172A" strokeWidth="2.2" strokeLinecap="round" />
        </>
      )}

      {emotion === 'distressed' && (
        <>
          <path d="M46 48C49 45 53 44 55 43.5" stroke="#0F172A" strokeWidth="2.4" strokeLinecap="round" />
          <path d="M74 48C71 45 67 44 65 43.5" stroke="#0F172A" strokeWidth="2.4" strokeLinecap="round" />
        </>
      )}

      {/* Eyes based on emotion */}
      {emotion === 'happy' ? (
        <>
          <ellipse cx="49.5" cy="52" rx="3.8" ry="4.5" fill="#1E293B" />
          <ellipse cx="70.5" cy="52" rx="3.8" ry="4.5" fill="#1E293B" />
          <circle cx="51" cy="50.5" r="1.6" fill="#FFFFFF" />
          <circle cx="72" cy="50.5" r="1.6" fill="#FFFFFF" />
          <circle cx="48.5" cy="53.5" r="0.8" fill="#FFFFFF" />
          <circle cx="69.5" cy="53.5" r="0.8" fill="#FFFFFF" />
        </>
      ) : emotion === 'concerned' ? (
        <>
          <ellipse cx="49.5" cy="52.5" rx="3.6" ry="4" fill="#1E293B" />
          <ellipse cx="70.5" cy="52.5" rx="3.6" ry="4" fill="#1E293B" />
          <circle cx="50.5" cy="51.5" r="1.3" fill="#FFFFFF" />
          <circle cx="71.5" cy="51.5" r="1.3" fill="#FFFFFF" />
        </>
      ) : (
        /* Distressed / In-Need-of-Care */
        <>
          <ellipse cx="49.5" cy="53" rx="3.6" ry="3.5" fill="#1E293B" />
          <ellipse cx="70.5" cy="53" rx="3.6" ry="3.5" fill="#1E293B" />
          <circle cx="50.5" cy="52" r="1.2" fill="#FFFFFF" />
          <circle cx="71.5" cy="52" r="1.2" fill="#FFFFFF" />
          {/* Subtle lower tired lid */}
          <path d="M46 56C48 57 52 57 53 56" stroke="#CA8A04" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M67 56C68 57 72 57 74 56" stroke="#CA8A04" strokeWidth="1.2" strokeLinecap="round" />
          {/* Sweat / Fatigue Drop on temple */}
          <path d="M78 44C78 42 80 40 80 40C80 40 82 42 82 44C82 45.5 81 46.5 80 46.5C79 46.5 78 45.5 78 44Z" fill="#38BDF8" stroke="#0284C7" strokeWidth="0.8" />
        </>
      )}

      {/* Glasses Accessory */}
      {accessory === 'glasses' && (
        <>
          <rect x="42" y="46" width="15" height="12" rx="3" stroke="#0F172A" strokeWidth="2" fill="rgba(255,255,255,0.2)" />
          <rect x="63" y="46" width="15" height="12" rx="3" stroke="#0F172A" strokeWidth="2" fill="rgba(255,255,255,0.2)" />
          <path d="M57 51H63" stroke="#0F172A" strokeWidth="2" />
        </>
      )}

      {/* Eyelashes (when not wearing glasses) */}
      {accessory !== 'glasses' && emotion !== 'distressed' && (
        <>
          <path d="M45 49.5C48 48 52 48 55 50" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" />
          <path d="M65 50C68 48 72 48 75 49.5" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" />
        </>
      )}

      {/* Nose */}
      <path d="M60 52V58C60 59.5 58.5 60.5 57 60" stroke="#FB923C" strokeWidth="1.8" strokeLinecap="round" />

      {/* Rosy Cheeks */}
      <ellipse cx="44" cy="59" rx={emotion === 'happy' ? 4.5 : 3.5} ry="2.2" fill="#F43F5E" fillOpacity={emotion === 'happy' ? 0.5 : 0.3} />
      <ellipse cx="76" cy="59" rx={emotion === 'happy' ? 4.5 : 3.5} ry="2.2" fill="#F43F5E" fillOpacity={emotion === 'happy' ? 0.5 : 0.3} />

      {/* Dynamic Lips / Mouth based on health emotion */}
      {emotion === 'happy' && (
        <path d="M53 65C56 70 64 70 67 65" stroke="#E11D48" strokeWidth="2.6" strokeLinecap="round" />
      )}

      {emotion === 'concerned' && (
        <path d="M55 67H65" stroke="#E11D48" strokeWidth="2.4" strokeLinecap="round" />
      )}

      {emotion === 'distressed' && (
        <path d="M54 69C57 66.5 63 66.5 66 69" stroke="#E11D48" strokeWidth="2.4" strokeLinecap="round" />
      )}

      {/* Flower Clip Accessory */}
      {accessory === 'flower' && (
        <>
          <circle cx="34" cy="36" r="4.5" fill="#38BDF8" stroke="#FFFFFF" strokeWidth="1.2" />
          <circle cx="34" cy="36" r="1.8" fill="#FEF08A" />
        </>
      )}
    </svg>
  );
}

export const BITMOJI_PRESETS = [
  { id: 'maya', name: 'Maya', hairStyle: 'waves', hairColor: '#2D150B', skinTone: '#FFEDD5', outfitColor: '#1D4ED8', accessory: 'flower' },
  { id: 'sophia', name: 'Dr. Sophia', hairStyle: 'ponytail', hairColor: '#09090B', skinTone: '#FED7AA', outfitColor: '#0D9488', accessory: 'stethoscope' },
  { id: 'ananya', name: 'Ananya', hairStyle: 'curls', hairColor: '#3F1D0B', skinTone: '#FED7AA', outfitColor: '#E11D48', accessory: 'pearls' },
  { id: 'rhea', name: 'Rhea', hairStyle: 'bob', hairColor: '#18181B', skinTone: '#FFEDD5', outfitColor: '#7C3AED', accessory: 'glasses' }
];
