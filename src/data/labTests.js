// Recommended Health & Diagnostic Lab Tests for PCOS Evaluation

export const ALL_LAB_TESTS = [
  // ---------------- HORMONAL PANEL ----------------
  {
    id: 'test_testosterone',
    category: 'hormonal',
    name: 'Total & Free Testosterone',
    marker: 'Total T, Free T, Bioavailable T',
    categoryLabel: 'Androgen Panel',
    icon: 'Sparkles',
    badgeColor: 'purple',
    priority: 'Essential',
    condition: (subscores) => subscores.androgen >= 25 || subscores.menstrual >= 30,
    whyNeeded: 'Directly confirms biochemical hyperandrogenism (excess male sex hormones), a core pillar of the Rotterdam diagnostic criteria.',
    optimalTiming: 'Morning blood draw (7:00 AM - 9:00 AM) during early follicular phase (Day 2 - 4 of cycle, if cycling).',
    normalRange: 'Free Testosterone < 5 pg/mL, Total Testosterone < 45 ng/dL (varies by lab)',
    keyAction: 'Elevated levels explain hirsutism, cystic breakouts, and hair thinning.'
  },
  {
    id: 'test_dheas',
    category: 'hormonal',
    name: 'DHEA-S (Dehydroepiandrosterone Sulfate)',
    marker: 'DHEA-S',
    categoryLabel: 'Adrenal Androgens',
    icon: 'Activity',
    badgeColor: 'purple',
    priority: 'Essential',
    condition: (subscores) => subscores.androgen >= 25 || subscores.menstrual >= 25,
    whyNeeded: 'Determines whether androgen excess is originating from the adrenal glands (stress-mediated) versus the ovaries.',
    optimalTiming: 'Fasting morning draw.',
    normalRange: 'Age-dependent, typically 65 - 380 µg/dL',
    keyAction: 'If high, indicates Adrenal-Dominant PCOS phenotype requiring stress/cortisol management.'
  },
  {
    id: 'test_lh_fsh',
    category: 'hormonal',
    name: 'LH to FSH Ratio (Luteinizing / Follicle-Stimulating)',
    marker: 'LH & FSH (Day 3)',
    categoryLabel: 'Pituitary / Ovulatory',
    icon: 'Calendar',
    badgeColor: 'teal',
    priority: 'Essential',
    condition: (subscores) => subscores.menstrual >= 25 || subscores.androgen >= 20,
    whyNeeded: 'In PCOS, LH is frequently elevated above FSH (a 2:1 or 3:1 ratio), which arrests follicle maturation and inhibits regular ovulation.',
    optimalTiming: 'Strictly on Day 2, 3, or 4 of menstrual cycle (or random if amenorrheic).',
    normalRange: 'Normal ratio is roughly 1:1. Ratio > 2:1 is suggestive of PCOS.',
    keyAction: 'Explains delayed cycles, lack of LH surge, and string-of-pearls follicle pattern.'
  },
  {
    id: 'test_shbg',
    category: 'hormonal',
    name: 'SHBG (Sex Hormone-Binding Globulin)',
    marker: 'SHBG',
    categoryLabel: 'Hormone Carrier',
    icon: 'Shield',
    badgeColor: 'teal',
    priority: 'Recommended',
    condition: (subscores) => subscores.androgen >= 20 || subscores.metabolic >= 20,
    whyNeeded: 'SHBG is the liver carrier protein that binds free testosterone. High insulin suppresses SHBG, leaving more active "free" testosterone circulating in tissue.',
    optimalTiming: 'Any morning fasting sample.',
    normalRange: 'Typically > 40-50 nmol/L for premenopausal women.',
    keyAction: 'Low SHBG confirms metabolic-androgenic crossover.'
  },

  // ---------------- METABOLIC & INSULIN PANEL ----------------
  {
    id: 'test_fasting_insulin_glucose',
    category: 'metabolic',
    name: 'Fasting Insulin & Glucose (HOMA-IR Score)',
    marker: 'Fasting Serum Insulin + Fasting Plasma Glucose',
    categoryLabel: 'Insulin Resistance',
    icon: 'Zap',
    badgeColor: 'amber',
    priority: 'Crucial Priority',
    condition: (subscores) => subscores.metabolic >= 20 || subscores.menstrual >= 25,
    whyNeeded: 'Standard glucose tests miss early insulin resistance. Fasting insulin catches hyperinsulinemia years before blood sugar or HbA1c turns abnormal.',
    optimalTiming: 'Strict 10-12 hour overnight fast (water only).',
    normalRange: 'Optimal Fasting Insulin < 5-7 µIU/mL (Standard lab range up to 25 is often too broad); HOMA-IR < 1.5',
    keyAction: 'Calculates HOMA-IR = (Fasting Insulin × Fasting Glucose) / 405. Score > 2.0 indicates insulin resistance.'
  },
  {
    id: 'test_hba1c',
    category: 'metabolic',
    name: 'Hemoglobin A1c (HbA1c) & Lipid Profile',
    marker: 'HbA1c, Triglycerides, HDL, LDL, VLDL',
    categoryLabel: 'Cardiometabolic Risk',
    icon: 'PieChart',
    badgeColor: 'amber',
    priority: 'Recommended',
    condition: (subscores) => subscores.metabolic >= 25 || subscores.androgen >= 25,
    whyNeeded: 'Screens for pre-diabetes and classic PCOS lipid triad: high triglycerides, low protective HDL, and elevated small-dense LDL particles.',
    optimalTiming: '12-hour fasting draw.',
    normalRange: 'HbA1c < 5.6%; Triglycerides < 100 mg/dL; HDL > 50 mg/dL',
    keyAction: 'Triglyceride-to-HDL ratio > 2.0 strongly correlates with insulin resistance.'
  },

  // ---------------- IMAGING & RULE-OUT PANEL ----------------
  {
    id: 'test_pelvic_ultrasound',
    category: 'imaging',
    name: 'Pelvic / Transvaginal Ultrasound',
    marker: 'Antral Follicle Count (AFC) & Ovarian Volume',
    categoryLabel: 'Morphology Scan',
    icon: 'Target',
    badgeColor: 'blue',
    priority: 'Diagnostic Benchmark',
    condition: (subscores) => subscores.menstrual >= 20 || subscores.androgen >= 25,
    whyNeeded: 'Visualizes ovarian structure to check for polycystic morphology (>=20 immature follicles per ovary or ovarian volume > 10 mL).',
    optimalTiming: 'Early follicular phase (Days 3-7 of cycle, if cycling).',
    normalRange: 'Normal volume < 10 mL with < 12 follicles per ovary.',
    keyAction: 'Fulfils the morphological criterion of the Rotterdam Consensus.'
  },
  {
    id: 'test_tsh_thyroid',
    category: 'ruleout',
    name: 'Thyroid Panel (TSH, Free T3, Free T4, Anti-TPO)',
    marker: 'TSH + Free T3/T4 + Antibodies',
    categoryLabel: 'Differential Rule-Out',
    icon: 'HeartHandshake',
    badgeColor: 'emerald',
    priority: 'Essential Rule-Out',
    condition: () => true, // Recommended for everyone evaluating PCOS
    whyNeeded: 'Hypothyroidism and Hashimoto’s mimic PCOS symptoms perfectly (irregular periods, weight gain, hair shedding, and fatigue) and must be ruled out.',
    optimalTiming: 'Early morning fasting draw before taking any thyroid medication.',
    normalRange: 'Functional TSH between 1.0 - 2.5 µIU/mL',
    keyAction: 'Essential to ensure menstrual and metabolic symptoms are not caused by an underactive thyroid.'
  },
  {
    id: 'test_prolactin',
    category: 'ruleout',
    name: 'Serum Prolactin',
    marker: 'Prolactin',
    categoryLabel: 'Pituitary Rule-Out',
    icon: 'Compass',
    badgeColor: 'emerald',
    priority: 'Essential Rule-Out',
    condition: (subscores) => subscores.menstrual >= 25,
    whyNeeded: 'Hyperprolactinemia (elevated pituitary prolactin) suppresses ovulation and causes missed periods, mimicking PCOS.',
    optimalTiming: 'Resting morning sample, at least 2 hours after waking (avoid breast stimulation or vigorous exercise prior).',
    normalRange: 'Normal < 20-25 ng/mL for non-pregnant women.',
    keyAction: 'Rules out prolactinoma or pituitary micro-adenoma.'
  },
  {
    id: 'test_vitamin_d',
    category: 'metabolic',
    name: '25-Hydroxy Vitamin D3 & Ferritin',
    marker: 'Vitamin D3 & Serum Ferritin',
    categoryLabel: 'Cellular Nutrients',
    icon: 'Sun',
    badgeColor: 'amber',
    priority: 'Supportive',
    condition: (subscores) => subscores.androgen >= 20 || subscores.metabolic >= 20,
    whyNeeded: 'Vitamin D receptors exist throughout ovarian granulosa cells; deficiency worsens insulin resistance and follicular arrest. Low ferritin drives hair shedding.',
    optimalTiming: 'Routine blood draw.',
    normalRange: 'Optimal Vitamin D: 50 - 80 ng/mL; Optimal Ferritin: 50 - 100 ng/mL for hair density.',
    keyAction: 'Directly addresses hair thinning and accelerates insulin recovery.'
  }
];

export function getRecommendedTests(subscores) {
  return ALL_LAB_TESTS.map((test) => {
    const isRecommended = test.condition(subscores);
    return {
      ...test,
      isRecommended
    };
  });
}
