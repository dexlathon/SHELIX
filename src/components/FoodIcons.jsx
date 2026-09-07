import React from 'react';

// Semi-Realistic Vector Food & Nutrition SVG Icons (Clean Solid Vectors, No Cartoonish Emojis)

export function AvocadoIcon({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Outer Skin */}
      <path d="M24 4C14 4 8 16 8 28C8 38 15 44 24 44C33 44 40 38 40 28C40 16 34 4 24 4Z" fill="#14532D" />
      {/* Light Green Flesh */}
      <path d="M24 7C16 7 11 18 11 28C11 36 17 41 24 41C31 41 37 36 37 28C37 18 32 7 24 7Z" fill="#86EFAC" />
      <path d="M24 10C18 10 14 19 14 28C14 34 18 38 24 38C30 38 34 34 34 28C34 19 30 10 24 10Z" fill="#BBF7D0" />
      {/* Brown Seed */}
      <ellipse cx="24" cy="28" rx="7.5" ry="9" fill="#78350F" />
      <ellipse cx="23" cy="27" rx="6" ry="7.5" fill="#92400E" />
      {/* Seed Highlight */}
      <ellipse cx="21.5" cy="24.5" rx="2" ry="3" fill="#B45309" />
    </svg>
  );
}

export function SalmonIcon({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Salmon Steak Cut */}
      <path d="M8 24C8 14 14 8 24 8C34 8 40 14 40 24C40 34 34 40 24 40C14 40 8 34 8 24Z" fill="#EA580C" />
      <path d="M12 24C12 16 16 11 24 11C32 11 36 16 36 24C36 32 32 37 24 37C16 37 12 32 12 24Z" fill="#F97316" />
      {/* White Marbling Lines */}
      <path d="M15 20C20 18 28 18 33 20" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
      <path d="M14 24C20 22 28 22 34 24" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
      <path d="M15 28C20 26 28 26 33 28" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
      {/* Center Bone Hollow */}
      <ellipse cx="24" cy="24" rx="3.5" ry="4.5" fill="#C2410C" />
      {/* Herb Garnish */}
      <path d="M26 13C28 10 32 10 32 10C32 10 32 14 29 16" fill="#15803D" />
    </svg>
  );
}

export function EggPlateIcon({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Egg White */}
      <path d="M24 6C14 6 6 14 6 24C6 32 12 42 22 42C32 42 42 34 42 24C42 12 34 6 24 6Z" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="2" />
      {/* Golden Yolk */}
      <circle cx="23" cy="22" r="9" fill="#D97706" />
      <circle cx="22" cy="21" r="7.5" fill="#F59E0B" />
      <circle cx="20" cy="18.5" r="2.5" fill="#FEF3C7" />
      {/* Chive Speckles */}
      <circle cx="14" cy="28" r="1" fill="#15803D" />
      <circle cx="32" cy="26" r="1.2" fill="#15803D" />
      <circle cx="28" cy="34" r="1" fill="#15803D" />
    </svg>
  );
}

export function LemonIcon({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Lemon Wedge */}
      <path d="M6 24C6 34 14 42 24 42C34 42 42 34 42 24H6Z" fill="#CA8A04" />
      <path d="M9 25C9 33 16 39 24 39C32 39 39 33 39 25H9Z" fill="#FEF08A" />
      {/* Pulp Segments */}
      <path d="M12 27C13 32 17 36 22 37V27H12Z" fill="#FACC15" />
      <path d="M26 27V37C31 36 35 32 36 27H26Z" fill="#FACC15" />
      {/* Fresh Green Mint Leaf */}
      <path d="M24 10C24 10 32 12 34 20C30 20 24 16 24 10Z" fill="#15803D" />
    </svg>
  );
}

export function GreenTeaIcon({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Saucer */}
      <ellipse cx="24" cy="40" rx="16" ry="4" fill="#CBD5E1" />
      {/* Cup Body */}
      <path d="M12 18H36V28C36 34 30 38 24 38C18 38 12 34 12 28V18Z" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="2" />
      {/* Tea Liquid */}
      <ellipse cx="24" cy="20" rx="10" ry="2.5" fill="#15803D" />
      {/* Cup Handle */}
      <path d="M36 20H39C41 20 42 22 42 25C42 28 41 30 39 30H36" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
      {/* Spearmint Leaf */}
      <path d="M22 14C20 9 26 8 28 12C28 16 24 17 22 14Z" fill="#16A34A" />
      <path d="M25 10V15" stroke="#14532D" strokeWidth="1" />
    </svg>
  );
}

export function SaladBowlIcon({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Ceramic Bowl */}
      <path d="M8 22H40C40 32 32 40 24 40C16 40 8 32 8 22Z" fill="#F1F5F9" stroke="#94A3B8" strokeWidth="2" />
      {/* Greens */}
      <circle cx="16" cy="18" r="7" fill="#16A34A" />
      <circle cx="24" cy="16" r="8" fill="#15803D" />
      <circle cx="32" cy="18" r="7" fill="#22C55E" />
      {/* Cherry Tomato */}
      <circle cx="21" cy="18" r="3.5" fill="#DC2626" />
      <circle cx="20" cy="17" r="1" fill="#FFFFFF" />
      {/* Olive */}
      <ellipse cx="28" cy="19" rx="2.8" ry="3.5" fill="#1E293B" />
      {/* Cucumber Slice */}
      <circle cx="29" cy="14" r="3.5" fill="#86EFAC" stroke="#16A34A" strokeWidth="1.5" />
    </svg>
  );
}

export function BroccoliIcon({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Stem */}
      <path d="M21 26H27V40C27 41 26 42 24 42C22 42 21 41 21 40V26Z" fill="#86EFAC" stroke="#16A34A" strokeWidth="1.5" />
      {/* Florets */}
      <circle cx="16" cy="20" r="7" fill="#15803D" />
      <circle cx="32" cy="20" r="7" fill="#15803D" />
      <circle cx="24" cy="14" r="8" fill="#16A34A" />
      <circle cx="20" cy="19" r="6" fill="#22C55E" />
      <circle cx="28" cy="19" r="6" fill="#16A34A" />
    </svg>
  );
}

export function BlueberriesIcon({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Berry 1 */}
      <circle cx="18" cy="26" r="9" fill="#1E3A8A" />
      <circle cx="18" cy="26" r="7.5" fill="#2563EB" />
      <path d="M15 23L18 25L21 23L19 26L21 28L18 27L15 28L17 26L15 23Z" fill="#1E293B" />
      {/* Berry 2 */}
      <circle cx="30" cy="24" r="10" fill="#1E3A8A" />
      <circle cx="30" cy="24" r="8.5" fill="#3B82F6" />
      <circle cx="28" cy="20" r="2" fill="#93C5FD" />
      <path d="M27 21L30 23L33 21L31 24L33 26L30 25L27 26L29 24L27 21Z" fill="#1E293B" />
      {/* Green Leaf */}
      <path d="M32 12C36 10 40 14 38 18C34 18 32 14 32 12Z" fill="#15803D" />
    </svg>
  );
}

export function PumpkinSeedIcon({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Pumpkin / Zinc Seeds */}
      <path d="M16 12C12 20 18 30 24 30C28 24 22 14 16 12Z" fill="#15803D" stroke="#166534" strokeWidth="1.5" />
      <path d="M30 18C34 26 28 36 22 36C18 30 24 20 30 18Z" fill="#16A34A" stroke="#15803D" strokeWidth="1.5" />
      <path d="M22 8C18 16 26 24 32 22C32 16 26 10 22 8Z" fill="#22C55E" stroke="#16A34A" strokeWidth="1.5" />
    </svg>
  );
}

export function InositolIcon({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Bioactive Capsule */}
      <rect x="14" y="16" width="20" height="16" rx="8" transform="rotate(-30 24 24)" fill="#1D4ED8" stroke="#1E40AF" strokeWidth="2" />
      <path d="M17 28L24 16C28 18 30 22 28 26L21 38C17 36 15 32 17 28Z" fill="#60A5FA" />
      {/* Sparkle Nodes */}
      <circle cx="36" cy="12" r="3" fill="#F59E0B" />
      <path d="M36 6V18M30 12H42" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function BoneBrothIcon({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <ellipse cx="24" cy="38" rx="14" ry="3" fill="#CBD5E1" />
      <path d="M10 22H38V28C38 34 32 38 24 38C16 38 10 34 10 28V22Z" fill="#B45309" stroke="#78350F" strokeWidth="2" />
      <ellipse cx="24" cy="22" rx="14" ry="4" fill="#D97706" />
      {/* Herbs on top */}
      <circle cx="20" cy="22" r="1.5" fill="#15803D" />
      <circle cx="26" cy="23" r="1.5" fill="#15803D" />
      {/* Steam lines */}
      <path d="M18 16C17 12 19 10 18 6" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
      <path d="M24 15C23 11 25 9 24 5" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
      <path d="M30 16C29 12 31 10 30 6" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function DarkChocolateIcon({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Chocolate Bar */}
      <rect x="10" y="10" width="28" height="28" rx="4" fill="#451A03" stroke="#290E02" strokeWidth="2" />
      {/* Snapped Segments */}
      <rect x="13" y="13" width="10" height="10" rx="2" fill="#78350F" />
      <rect x="25" y="13" width="10" height="10" rx="2" fill="#78350F" />
      <rect x="13" y="25" width="10" height="10" rx="2" fill="#78350F" />
      <rect x="25" y="25" width="10" height="10" rx="2" fill="#78350F" />
    </svg>
  );
}

export function TurmericIcon({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Golden Turmeric Root & Spoon */}
      <path d="M12 24C12 20 18 16 28 20C36 24 38 30 34 34C28 38 18 34 14 30L12 24Z" fill="#D97706" />
      <path d="M16 26C18 22 24 20 30 24C34 26 34 30 30 32C24 34 18 32 16 26Z" fill="#F59E0B" />
      <circle cx="22" cy="26" r="2" fill="#FEF3C7" />
    </svg>
  );
}

// ---------------- AVOID TRIGGER ICONS ----------------
export function SodaCanIcon({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Can Body */}
      <rect x="16" y="12" width="16" height="26" rx="4" fill="#DC2626" stroke="#991B1B" strokeWidth="2" />
      <ellipse cx="24" cy="12" rx="8" ry="2.5" fill="#E2E8F0" />
      <ellipse cx="24" cy="38" rx="8" ry="2.5" fill="#991B1B" />
      {/* Fizz Waves */}
      <path d="M19 22C24 20 24 26 29 24" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
      {/* Red Warning Line */}
      <circle cx="24" cy="24" r="16" stroke="#DC2626" strokeWidth="3" />
      <line x1="12" y1="12" x2="36" y2="36" stroke="#DC2626" strokeWidth="3" />
    </svg>
  );
}

export function BakeryIcon({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Donut / Pastry */}
      <circle cx="24" cy="24" r="14" fill="#D97706" stroke="#92400E" strokeWidth="2" />
      <circle cx="24" cy="24" r="5" fill="#FFFFFF" />
      {/* Sugar Glaze */}
      <path d="M14 20C17 17 21 16 26 17C31 18 34 22 34 26" stroke="#FEF08A" strokeWidth="3" strokeLinecap="round" />
      {/* Warning Slash */}
      <circle cx="24" cy="24" r="16" stroke="#DC2626" strokeWidth="3" />
      <line x1="12" y1="12" x2="36" y2="36" stroke="#DC2626" strokeWidth="3" />
    </svg>
  );
}

export function SeedOilIcon({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Oil Bottle */}
      <rect x="18" y="16" width="12" height="22" rx="3" fill="#CA8A04" stroke="#854D0E" strokeWidth="2" />
      <rect x="21" y="10" width="6" height="6" fill="#854D0E" />
      {/* Warning Slash */}
      <circle cx="24" cy="24" r="16" stroke="#DC2626" strokeWidth="3" />
      <line x1="12" y1="12" x2="36" y2="36" stroke="#DC2626" strokeWidth="3" />
    </svg>
  );
}

export function MilkCartonIcon({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Milk Carton */}
      <path d="M16 18H32V38H16V18Z" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="2" />
      <path d="M16 18L24 10L32 18H16Z" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="2" />
      <rect x="20" y="24" width="8" height="8" rx="2" fill="#3B82F6" />
      {/* Warning Slash */}
      <circle cx="24" cy="24" r="16" stroke="#DC2626" strokeWidth="3" />
      <line x1="12" y1="12" x2="36" y2="36" stroke="#DC2626" strokeWidth="3" />
    </svg>
  );
}

// Master Food Icon Resolver
export function FoodIconResolver({ name, size = 32 }) {
  switch (name) {
    case 'avocado': return <AvocadoIcon size={size} />;
    case 'salmon': return <SalmonIcon size={size} />;
    case 'egg': return <EggPlateIcon size={size} />;
    case 'tea': return <GreenTeaIcon size={size} />;
    case 'lemon': return <LemonIcon size={size} />;
    case 'salad': return <SaladBowlIcon size={size} />;
    case 'blueberries': return <BlueberriesIcon size={size} />;
    case 'broccoli': return <BroccoliIcon size={size} />;
    case 'seeds': return <PumpkinSeedIcon size={size} />;
    case 'inositol': return <InositolIcon size={size} />;
    case 'bonebroth': return <BoneBrothIcon size={size} />;
    case 'chocolate': return <DarkChocolateIcon size={size} />;
    case 'turmeric': return <TurmericIcon size={size} />;
    case 'soda': return <SodaCanIcon size={size} />;
    case 'bakery': return <BakeryIcon size={size} />;
    case 'seedoil': return <SeedOilIcon size={size} />;
    case 'milk': return <MilkCartonIcon size={size} />;
    default: return <SaladBowlIcon size={size} />;
  }
}
