import React from 'react';

// Semi-Realistic Girl with Beautiful Long Flowing Hair Vector Avatar
export default function GirlAvatar({ size = 48, className = '' }) {
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
      {/* Royal Blue Circular Background */}
      <circle cx="60" cy="60" r="58" fill="#1D4ED8" stroke="#93C5FD" strokeWidth="3" />

      {/* Back Flowing Long Hair (Extends down shoulders and back) */}
      <path
        d="M24 65C22 45 32 18 60 18C88 18 98 45 96 65C95 85 92 105 88 115C86 118 80 118 78 112C74 102 78 78 78 68C78 52 74 38 60 38C46 38 42 52 42 68C42 78 46 102 42 112C40 118 34 118 32 115C28 105 25 85 24 65Z"
        fill="#2D150B"
      />
      {/* Hair shadow waves */}
      <path
        d="M26 68C26 88 32 108 34 114C36 106 38 88 38 72C38 56 42 42 50 36C40 40 32 52 28 64"
        fill="#1C0D07"
      />
      <path
        d="M94 68C94 88 88 108 86 114C84 106 82 88 82 72C82 56 78 42 70 36C80 40 88 52 92 64"
        fill="#1C0D07"
      />

      {/* Shoulders & Royal Blue Top */}
      <path
        d="M28 118C28 102 42 94 60 94C78 94 92 102 92 118V120H28V118Z"
        fill="#1E40AF"
      />
      {/* Collarbone / Neckline */}
      <path
        d="M50 94L60 104L70 94"
        stroke="#DBEAFE"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Neck */}
      <path d="M52 74V92C52 96 55 98 60 98C65 98 68 96 68 92V74H52Z" fill="#FED7AA" />
      {/* Neck Shadow */}
      <path d="M52 74C56 78 64 78 68 74V78C64 82 56 82 52 78V74Z" fill="#FDBA74" />

      {/* Head / Face Base */}
      <path
        d="M40 52C40 38 48 28 60 28C72 28 80 38 80 52C80 66 71 76 60 76C49 76 40 66 40 52Z"
        fill="#FFEDD5"
      />

      {/* Ears */}
      <ellipse cx="39" cy="54" rx="4" ry="6" fill="#FED7AA" />
      <ellipse cx="81" cy="54" rx="4" ry="6" fill="#FED7AA" />
      {/* Pearl / Gold Stud Earrings */}
      <circle cx="39.5" cy="58" r="2.2" fill="#F59E0B" />
      <circle cx="80.5" cy="58" r="2.2" fill="#F59E0B" />

      {/* Front Long Hair Strands & Styled Bangs */}
      {/* Crown Volume */}
      <path
        d="M32 46C34 28 44 20 60 20C76 20 86 28 88 46C86 34 76 25 60 25C44 25 34 34 32 46Z"
        fill="#3F1D0B"
      />
      {/* Left Front Flowing Hair Strand */}
      <path
        d="M34 42C38 32 50 28 58 34C52 38 44 45 40 58C36 72 38 88 36 102C35 106 32 106 32 100C32 86 30 68 34 42Z"
        fill="#3F1D0B"
      />
      {/* Right Front Flowing Hair Strand */}
      <path
        d="M86 42C82 32 70 28 62 34C68 38 76 45 80 58C84 72 82 88 84 102C85 106 88 106 88 100C88 86 90 68 86 42Z"
        fill="#3F1D0B"
      />
      {/* Hair Shine Highlight Strands */}
      <path
        d="M48 24C54 22 66 22 72 24C68 25 52 25 48 24Z"
        fill="#78350F"
      />
      <path
        d="M36 50C38 65 37 82 36 94"
        stroke="#78350F"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M84 50C82 65 83 82 84 94"
        stroke="#78350F"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Eyebrows */}
      <path d="M46 46C50 43.5 54 44.5 55 46.5" stroke="#3F1D0B" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M74 46C70 43.5 66 44.5 65 46.5" stroke="#3F1D0B" strokeWidth="2.2" strokeLinecap="round" />

      {/* Delicate Long-Eyelash Eyes */}
      <ellipse cx="49.5" cy="52" rx="3.8" ry="4.5" fill="#1E293B" />
      <ellipse cx="70.5" cy="52" rx="3.8" ry="4.5" fill="#1E293B" />
      {/* Eye Pupils & Highlights */}
      <circle cx="51" cy="50.5" r="1.6" fill="#FFFFFF" />
      <circle cx="72" cy="50.5" r="1.6" fill="#FFFFFF" />
      <circle cx="48.5" cy="53.5" r="0.8" fill="#FFFFFF" />
      <circle cx="69.5" cy="53.5" r="0.8" fill="#FFFFFF" />

      {/* Eyelashes */}
      <path d="M45 49.5C48 48 52 48 55 50" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" />
      <path d="M65 50C68 48 72 48 75 49.5" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" />
      <path d="M55 49L57 47" stroke="#0F172A" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M65 49L63 47" stroke="#0F172A" strokeWidth="1.6" strokeLinecap="round" />

      {/* Cute Nose */}
      <path d="M60 52V58C60 59.5 58.5 60.5 57 60" stroke="#FB923C" strokeWidth="1.8" strokeLinecap="round" />

      {/* Rosy Cheeks */}
      <ellipse cx="44" cy="59" rx="3.8" ry="2.2" fill="#F43F5E" fillOpacity="0.4" />
      <ellipse cx="76" cy="59" rx="3.8" ry="2.2" fill="#F43F5E" fillOpacity="0.4" />

      {/* Smiling Lips */}
      <path
        d="M54 66C57 68.5 63 68.5 66 66"
        stroke="#E11D48"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M56 66.5C58 69 62 69 64 66.5"
        fill="#FB7185"
      />

      {/* Cute Hair Accessory / Flower Clip in Hair */}
      <circle cx="34" cy="36" r="4.5" fill="#38BDF8" stroke="#FFFFFF" strokeWidth="1.2" />
      <circle cx="34" cy="36" r="1.8" fill="#FEF08A" />
    </svg>
  );
}
