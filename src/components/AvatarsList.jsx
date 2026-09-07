import React from 'react';

// Avatar 1: Maya - Long Flowing Brunette Hair with Floral Accent
export function MayaAvatar({ size = 48, className = '' }) {
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
      <circle cx="60" cy="60" r="58" fill="#1D4ED8" stroke="#93C5FD" strokeWidth="3" />
      {/* Back Long Flowing Hair */}
      <path
        d="M24 65C22 45 32 18 60 18C88 18 98 45 96 65C95 85 92 105 88 115C86 118 80 118 78 112C74 102 78 78 78 68C78 52 74 38 60 38C46 38 42 52 42 68C42 78 46 102 42 112C40 118 34 118 32 115C28 105 25 85 24 65Z"
        fill="#2D150B"
      />
      <path d="M28 118C28 102 42 94 60 94C78 94 92 102 92 118V120H28V118Z" fill="#1E40AF" />
      <path d="M50 94L60 104L70 94" stroke="#DBEAFE" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M52 74V92C52 96 55 98 60 98C65 98 68 96 68 92V74H52Z" fill="#FED7AA" />
      <path d="M40 52C40 38 48 28 60 28C72 28 80 38 80 52C80 66 71 76 60 76C49 76 40 66 40 52Z" fill="#FFEDD5" />
      <ellipse cx="39" cy="54" rx="4" ry="6" fill="#FED7AA" />
      <ellipse cx="81" cy="54" rx="4" ry="6" fill="#FED7AA" />
      <circle cx="39.5" cy="58" r="2.2" fill="#F59E0B" />
      <circle cx="80.5" cy="58" r="2.2" fill="#F59E0B" />
      {/* Front Strands */}
      <path d="M32 46C34 28 44 20 60 20C76 20 86 28 88 46C86 34 76 25 60 25C44 25 34 34 32 46Z" fill="#3F1D0B" />
      <path d="M34 42C38 32 50 28 58 34C52 38 44 45 40 58C36 72 38 88 36 102C35 106 32 106 32 100C32 86 30 68 34 42Z" fill="#3F1D0B" />
      <path d="M86 42C82 32 70 28 62 34C68 38 76 45 80 58C84 72 82 88 84 102C85 106 88 106 88 100C88 86 90 68 86 42Z" fill="#3F1D0B" />
      {/* Facial Features */}
      <path d="M46 46C50 43.5 54 44.5 55 46.5" stroke="#3F1D0B" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M74 46C70 43.5 66 44.5 65 46.5" stroke="#3F1D0B" strokeWidth="2.2" strokeLinecap="round" />
      <ellipse cx="49.5" cy="52" rx="3.8" ry="4.5" fill="#1E293B" />
      <ellipse cx="70.5" cy="52" rx="3.8" ry="4.5" fill="#1E293B" />
      <circle cx="51" cy="50.5" r="1.6" fill="#FFFFFF" />
      <circle cx="72" cy="50.5" r="1.6" fill="#FFFFFF" />
      <path d="M60 52V58C60 59.5 58.5 60.5 57 60" stroke="#FB923C" strokeWidth="1.8" strokeLinecap="round" />
      <ellipse cx="44" cy="59" rx="3.8" ry="2.2" fill="#F43F5E" fillOpacity="0.4" />
      <ellipse cx="76" cy="59" rx="3.8" ry="2.2" fill="#F43F5E" fillOpacity="0.4" />
      <path d="M54 66C57 68.5 63 68.5 66 66" stroke="#E11D48" strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="34" cy="36" r="4.5" fill="#38BDF8" stroke="#FFFFFF" strokeWidth="1.2" />
    </svg>
  );
}

// Avatar 2: Dr. Sophia - Clinician Doctor with Sleek High Ponytail & Stethoscope
export function SophiaAvatar({ size = 48, className = '' }) {
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
      <circle cx="60" cy="60" r="58" fill="#0D9488" stroke="#99F6E4" strokeWidth="3" />
      {/* High Ponytail Tail */}
      <path
        d="M60 18C75 14 96 22 98 48C99 68 88 88 84 100C82 105 76 104 76 98C76 86 86 64 84 50C82 36 70 28 60 26V18Z"
        fill="#18181B"
      />
      {/* Lab Coat / Scrub */}
      <path d="M28 118C28 100 42 92 60 92C78 92 92 100 92 118V120H28V118Z" fill="#F8FAFC" />
      <path d="M60 92V120" stroke="#CBD5E1" strokeWidth="2" />
      {/* Stethoscope */}
      <path d="M48 94C48 108 52 112 60 112C68 112 72 108 72 94" stroke="#0F172A" strokeWidth="3" strokeLinecap="round" />
      <circle cx="60" cy="113" r="4" fill="#94A3B8" stroke="#0F172A" strokeWidth="1.5" />
      {/* Neck */}
      <path d="M52 74V92C52 96 55 98 60 98C65 98 68 96 68 92V74H52Z" fill="#FDE047" fillOpacity="0.4" />
      <path d="M52 74V92C52 96 55 98 60 98C65 98 68 96 68 92V74H52Z" fill="#FED7AA" />
      {/* Head */}
      <path d="M40 52C40 38 48 28 60 28C72 28 80 38 80 52C80 66 71 76 60 76C49 76 40 66 40 52Z" fill="#FFEDD5" />
      {/* Sleek Hair Band & Front */}
      <path d="M36 48C36 30 46 22 60 22C74 22 84 30 84 48C80 36 72 28 60 28C48 28 40 36 36 48Z" fill="#18181B" />
      <ellipse cx="60" cy="22" rx="6" ry="3" fill="#0D9488" />
      {/* Glasses */}
      <rect x="42" y="46" width="14" height="11" rx="3" stroke="#0F172A" strokeWidth="1.8" fill="rgba(255,255,255,0.2)" />
      <rect x="64" y="46" width="14" height="11" rx="3" stroke="#0F172A" strokeWidth="1.8" fill="rgba(255,255,255,0.2)" />
      <path d="M56 50H64" stroke="#0F172A" strokeWidth="1.8" />
      {/* Eyes behind glasses */}
      <circle cx="49" cy="51.5" r="2.8" fill="#1E293B" />
      <circle cx="71" cy="51.5" r="2.8" fill="#1E293B" />
      <circle cx="50" cy="50.5" r="1" fill="#FFFFFF" />
      <circle cx="72" cy="50.5" r="1" fill="#FFFFFF" />
      {/* Lips */}
      <path d="M54 66C57 68 63 68 66 66" stroke="#E11D48" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

// Avatar 3: Elena - Wavy Auburn / Chestnut Hair with Wellness Headband
export function ElenaAvatar({ size = 48, className = '' }) {
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
      <circle cx="60" cy="60" r="58" fill="#BE185D" stroke="#FBCFE8" strokeWidth="3" />
      {/* Voluminous Auburn Hair */}
      <path
        d="M22 60C20 40 30 16 60 16C90 16 100 40 98 60C96 82 92 108 84 116C80 120 74 116 74 110C74 98 84 76 84 62C84 46 76 34 60 34C44 34 36 46 36 62C36 76 46 98 46 110C46 116 40 120 36 116C28 108 24 82 22 60Z"
        fill="#9A3412"
      />
      {/* Wellness Headband */}
      <path d="M32 44C38 32 50 26 60 26C70 26 82 32 88 44" stroke="#F472B6" strokeWidth="7" strokeLinecap="round" />
      {/* Top / Clothes */}
      <path d="M28 118C28 102 42 94 60 94C78 94 92 102 92 118V120H28V118Z" fill="#9D174D" />
      <path d="M52 74V92C52 96 55 98 60 98C65 98 68 96 68 92V74H52Z" fill="#FED7AA" />
      {/* Face */}
      <path d="M40 52C40 38 48 28 60 28C72 28 80 38 80 52C80 66 71 76 60 76C49 76 40 66 40 52Z" fill="#FFEDD5" />
      {/* Front Auburn Curls */}
      <path d="M34 50C38 40 46 42 46 54C46 68 38 84 38 98" stroke="#C2410C" strokeWidth="4" strokeLinecap="round" />
      <path d="M86 50C82 40 74 42 74 54C74 68 82 84 82 98" stroke="#C2410C" strokeWidth="4" strokeLinecap="round" />
      {/* Eyes & Warm Smile */}
      <ellipse cx="49.5" cy="52" rx="3.8" ry="4.5" fill="#1E293B" />
      <ellipse cx="70.5" cy="52" rx="3.8" ry="4.5" fill="#1E293B" />
      <circle cx="51" cy="50.5" r="1.5" fill="#FFFFFF" />
      <circle cx="72" cy="50.5" r="1.5" fill="#FFFFFF" />
      <ellipse cx="43" cy="59" rx="3.8" ry="2.2" fill="#F43F5E" fillOpacity="0.45" />
      <ellipse cx="77" cy="59" rx="3.8" ry="2.2" fill="#F43F5E" fillOpacity="0.45" />
      <path d="M53 66C57 69 63 69 67 66" stroke="#BE185D" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

// Avatar 4: Aria - Radiant Curly Hair with Pearl Hairpin
export function AriaAvatar({ size = 48, className = '' }) {
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
      <circle cx="60" cy="60" r="58" fill="#6D28D9" stroke="#DDD6FE" strokeWidth="3" />
      {/* Curly Dark Hair Cloud */}
      <circle cx="34" cy="40" r="14" fill="#09090B" />
      <circle cx="86" cy="40" r="14" fill="#09090B" />
      <circle cx="60" cy="24" r="16" fill="#09090B" />
      <circle cx="28" cy="60" r="13" fill="#09090B" />
      <circle cx="92" cy="60" r="13" fill="#09090B" />
      <circle cx="32" cy="80" r="12" fill="#09090B" />
      <circle cx="88" cy="80" r="12" fill="#09090B" />
      {/* Top */}
      <path d="M28 118C28 102 42 94 60 94C78 94 92 102 92 118V120H28V118Z" fill="#5B21B6" />
      {/* Neck */}
      <path d="M52 74V92C52 96 55 98 60 98C65 98 68 96 68 92V74H52Z" fill="#D97706" fillOpacity="0.8" />
      {/* Face */}
      <path d="M40 52C40 38 48 28 60 28C72 28 80 38 80 52C80 66 71 76 60 76C49 76 40 66 40 52Z" fill="#F59E0B" fillOpacity="0.85" />
      {/* Pearl Pin in Hair */}
      <circle cx="86" cy="36" r="3.5" fill="#FFFFFF" stroke="#DDD6FE" strokeWidth="1" />
      <circle cx="92" cy="40" r="2.8" fill="#FFFFFF" stroke="#DDD6FE" strokeWidth="1" />
      {/* Hoop Earrings */}
      <circle cx="38" cy="58" r="4" stroke="#F59E0B" strokeWidth="1.8" />
      <circle cx="82" cy="58" r="4" stroke="#F59E0B" strokeWidth="1.8" />
      {/* Eyes & Features */}
      <ellipse cx="49.5" cy="52" rx="3.8" ry="4.5" fill="#09090B" />
      <ellipse cx="70.5" cy="52" rx="3.8" ry="4.5" fill="#09090B" />
      <circle cx="51" cy="50.5" r="1.5" fill="#FFFFFF" />
      <circle cx="72" cy="50.5" r="1.5" fill="#FFFFFF" />
      <path d="M54 66C57 69 63 69 66 66" stroke="#991B1B" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export const AVATAR_OPTIONS = [
  { id: 'maya', name: 'Maya', style: 'Long Flowing Brunette Hair', component: MayaAvatar },
  { id: 'sophia', name: 'Dr. Sophia', style: 'Clinician Ponytail & Stethoscope', component: SophiaAvatar },
  { id: 'elena', name: 'Elena', style: 'Wavy Auburn Hair & Headband', component: ElenaAvatar },
  { id: 'aria', name: 'Aria', style: 'Curly Textured Hair & Pearl Pin', component: AriaAvatar }
];

export function UserAvatarResolver({ avatarId = 'maya', size = 48, className = '' }) {
  switch (avatarId) {
    case 'sophia': return <SophiaAvatar size={size} className={className} />;
    case 'elena': return <ElenaAvatar size={size} className={className} />;
    case 'aria': return <AriaAvatar size={size} className={className} />;
    case 'maya':
    default: return <MayaAvatar size={size} className={className} />;
  }
}
