// PCOS Symptom Pattern Assessment Questions
// Designed with concise questions and intuitive icon visual cards

export const QUIZ_CATEGORIES = [
  {
    id: 'menstrual',
    title: 'Menstrual Pattern',
    subtitle: 'Cycle length, regularity & ovulation frequency',
    icon: 'Calendar',
    badgeColor: 'teal'
  },
  {
    id: 'androgen',
    title: 'Androgen Signals',
    subtitle: 'Acne, facial/body hair & scalp thinning',
    icon: 'Sparkles',
    badgeColor: 'purple'
  },
  {
    id: 'metabolic',
    title: 'Metabolic & Insulin',
    subtitle: 'BMI, energy crashes, weight & skin markers',
    icon: 'Activity',
    badgeColor: 'amber'
  }
];

export const QUESTIONS = [
  // ---------------- CATEGORY 1: MENSTRUAL HEALTH ----------------
  {
    id: 'cycle_regularity',
    category: 'menstrual',
    title: 'How regular is your menstrual cycle?',
    subtitle: 'Count from day 1 of one period to day 1 of the next',
    icon: 'CalendarClock',
    options: [
      {
        id: 'regular',
        label: 'Regular (21 - 35 days)',
        sublabel: 'Predictable every month',
        icon: 'CheckCircle2',
        points: { menstrual: 0, androgen: 0, metabolic: 0 },
        tag: 'Normal Range'
      },
      {
        id: 'long',
        label: 'Long Cycles (36 - 60 days)',
        sublabel: 'Fewer than 9 periods per year',
        icon: 'Hourglass',
        points: { menstrual: 25, androgen: 5, metabolic: 10 },
        tag: 'Oligomenorrhea'
      },
      {
        id: 'irregular',
        label: 'Unpredictable / Highly Irregular',
        sublabel: 'Varies by >10 days each cycle',
        icon: 'Shuffle',
        points: { menstrual: 30, androgen: 10, metabolic: 15 },
        tag: 'Irregular Pattern'
      },
      {
        id: 'absent',
        label: 'Missed / Absent (>3 months)',
        sublabel: 'Periods stopped or occur 1-3 times/year',
        icon: 'AlertCircle',
        points: { menstrual: 35, androgen: 15, metabolic: 15 },
        tag: 'Amenorrhea'
      }
    ]
  },
  {
    id: 'period_flow',
    category: 'menstrual',
    title: 'Flow intensity & duration',
    subtitle: 'Typical characteristics when you do bleed',
    icon: 'Droplets',
    options: [
      {
        id: 'flow_normal',
        label: 'Moderate (3 - 7 days)',
        sublabel: 'Smooth flow, normal heaviness',
        icon: 'Smile',
        points: { menstrual: 0, androgen: 0, metabolic: 0 },
        tag: 'Optimal'
      },
      {
        id: 'flow_heavy',
        label: 'Very Heavy / Prolonged (>7 days)',
        sublabel: 'Frequent pad changes & clotting',
        icon: 'Waves',
        points: { menstrual: 15, androgen: 5, metabolic: 5 },
        tag: 'Heavy Bleeding'
      },
      {
        id: 'flow_scanty',
        label: 'Very Light / Spotting Only',
        sublabel: 'Lasts only 1-2 days',
        icon: 'CloudRain',
        points: { menstrual: 15, androgen: 5, metabolic: 5 },
        tag: 'Light Bleeding'
      }
    ]
  },
  {
    id: 'ovulation_signs',
    category: 'menstrual',
    title: 'Do you notice signs of monthly ovulation?',
    subtitle: 'Mid-cycle cervical fluid or mild ovulatory twinge',
    icon: 'Target',
    options: [
      {
        id: 'ov_yes',
        label: 'Yes, Noticeable Monthly',
        sublabel: 'Clear mid-cycle fertile signs',
        icon: 'Check',
        points: { menstrual: 0, androgen: 0, metabolic: 0 },
        tag: 'Ovulatory'
      },
      {
        id: 'ov_rare',
        label: 'Rarely / Inconsistently',
        sublabel: 'Only a couple times a year',
        icon: 'HelpCircle',
        points: { menstrual: 20, androgen: 5, metabolic: 5 },
        tag: 'Possible Anovulation'
      },
      {
        id: 'ov_never',
        label: 'Never / No Clear Signs',
        sublabel: 'No detectable fertile signs',
        icon: 'XCircle',
        points: { menstrual: 25, androgen: 10, metabolic: 10 },
        tag: 'Anovulatory Pattern'
      }
    ]
  },

  // ---------------- CATEGORY 2: ANDROGEN-RELATED ----------------
  {
    id: 'facial_body_hair',
    category: 'androgen',
    title: 'Excess facial or body hair (Hirsutism)',
    subtitle: 'Coarse, dark hair growth in androgen-sensitive zones',
    icon: 'Sparkles',
    options: [
      {
        id: 'hair_none',
        label: 'Minimal / Normal Vellus Hair',
        sublabel: 'Fine soft peach fuzz only',
        icon: 'Feather',
        points: { menstrual: 0, androgen: 0, metabolic: 0 },
        tag: 'None'
      },
      {
        id: 'hair_mild',
        label: 'Mild Coarse Hair',
        sublabel: 'A few dark hairs on upper lip or chin',
        icon: 'Scissors',
        points: { menstrual: 5, androgen: 15, metabolic: 5 },
        tag: 'Mild Hirsutism'
      },
      {
        id: 'hair_moderate',
        label: 'Noticeable / Frequent Growth',
        sublabel: 'Chin, jawline, neck requiring frequent tweezing/waxing',
        icon: 'Flame',
        points: { menstrual: 10, androgen: 30, metabolic: 10 },
        tag: 'Moderate Hirsutism'
      },
      {
        id: 'hair_severe',
        label: 'Significant Facial & Body Hair',
        sublabel: 'Prominent on chin, jaw, chest, stomach, lower back',
        icon: 'AlertTriangle',
        points: { menstrual: 15, androgen: 40, metabolic: 15 },
        tag: 'Elevated Androgens'
      }
    ]
  },
  {
    id: 'acne_pattern',
    category: 'androgen',
    title: 'Acne & Skin breakouts',
    subtitle: 'Frequency and location of persistent blemishes',
    icon: 'ShieldAlert',
    options: [
      {
        id: 'acne_none',
        label: 'Clear / Rare Occasional Spot',
        sublabel: 'Minimal skin inflammation',
        icon: 'Smile',
        points: { menstrual: 0, androgen: 0, metabolic: 0 },
        tag: 'Clear'
      },
      {
        id: 'acne_mild',
        label: 'Mild Period Breakouts',
        sublabel: 'Resolves after period ends',
        icon: 'Sun',
        points: { menstrual: 5, androgen: 10, metabolic: 0 },
        tag: 'Cyclic'
      },
      {
        id: 'acne_cystic',
        label: 'Persistent Cystic / Hormonal Acne',
        sublabel: 'Deep tender bumps along jawline, chin, chest, or back',
        icon: 'Zap',
        points: { menstrual: 10, androgen: 30, metabolic: 10 },
        tag: 'Hormonal Acne'
      }
    ]
  },
  {
    id: 'hair_thinning',
    category: 'androgen',
    title: 'Scalp hair thinning or shedding',
    subtitle: 'Noticeable hair loss along midline part or crown',
    icon: 'Wind',
    options: [
      {
        id: 'thinning_none',
        label: 'Normal Density & Shedding',
        sublabel: 'Full volume, healthy growth',
        icon: 'Check',
        points: { menstrual: 0, androgen: 0, metabolic: 0 },
        tag: 'Healthy'
      },
      {
        id: 'thinning_moderate',
        label: 'Increased Daily Shedding',
        sublabel: 'More hair on brush, ponytail feels thinner',
        icon: 'TrendingDown',
        points: { menstrual: 5, androgen: 15, metabolic: 5 },
        tag: 'Telogen Shedding'
      },
      {
        id: 'thinning_crown',
        label: 'Visible Widening Part / Crown Thinning',
        sublabel: 'Female pattern androgenic hair loss',
        icon: 'AlertOctagon',
        points: { menstrual: 10, androgen: 30, metabolic: 10 },
        tag: 'Androgenic Alopecia'
      }
    ]
  },

  // ---------------- CATEGORY 3: METABOLIC & INSULIN ----------------
  {
    id: 'weight_changes',
    category: 'metabolic',
    title: 'Weight dynamics & stubborn belly fat',
    subtitle: 'Difficulty managing body composition despite diet/exercise',
    icon: 'Scale',
    options: [
      {
        id: 'weight_stable',
        label: 'Stable / Responsive to Diet',
        sublabel: 'Easily maintain or manage weight',
        icon: 'CheckCheck',
        points: { menstrual: 0, androgen: 0, metabolic: 0 },
        tag: 'Normal Metabolic'
      },
      {
        id: 'weight_moderate',
        label: 'Slow Unexplained Weight Gain',
        sublabel: 'Hard to lose even with calorie tracking',
        icon: 'TrendingUp',
        points: { menstrual: 5, androgen: 5, metabolic: 20 },
        tag: 'Metabolic Resistance'
      },
      {
        id: 'weight_central',
        label: 'Rapid Gain / Central Abdominal Adiposity',
        sublabel: 'Weight accumulates predominantly in lower belly ("PCOS belly")',
        icon: 'PieChart',
        points: { menstrual: 10, androgen: 10, metabolic: 30 },
        tag: 'Visceral/Insulin Indicator'
      }
    ]
  },
  {
    id: 'skin_insulin_markers',
    category: 'metabolic',
    title: 'Darkened skin patches or skin tags',
    subtitle: 'Acanthosis nigricans in neck creases, underarms, or groin',
    icon: 'Layers',
    options: [
      {
        id: 'skin_none',
        label: 'None / Even Skin Tone',
        sublabel: 'No velvety patches or tags',
        icon: 'CheckCircle',
        points: { menstrual: 0, androgen: 0, metabolic: 0 },
        tag: 'Normal'
      },
      {
        id: 'skin_tags',
        label: 'A Few Skin Tags',
        sublabel: 'Small skin tags around neck or underarms',
        icon: 'Dot',
        points: { menstrual: 0, androgen: 5, metabolic: 15 },
        tag: 'Mild Marker'
      },
      {
        id: 'skin_acanthosis',
        label: 'Velvety Dark Patches (Acanthosis)',
        sublabel: 'Darkened pigmented crease on back of neck, underarms, knuckles',
        icon: 'AlertCircle',
        points: { menstrual: 5, androgen: 10, metabolic: 35 },
        tag: 'Strong Insulin Marker'
      }
    ]
  },
  {
    id: 'energy_cravings',
    category: 'metabolic',
    title: 'Sugar cravings & post-meal energy crashes',
    subtitle: 'Insulin-driven blood glucose fluctuations',
    icon: 'BatteryLow',
    options: [
      {
        id: 'energy_steady',
        label: 'Steady All-Day Energy',
        sublabel: 'No extreme hunger or crashes',
        icon: 'BatteryCharging',
        points: { menstrual: 0, androgen: 0, metabolic: 0 },
        tag: 'Balanced Glycemia'
      },
      {
        id: 'energy_cravings_mild',
        label: 'Afternoon Slump & Mild Sweet Tooth',
        sublabel: 'Feel sleepy around 3-4 PM',
        icon: 'Coffee',
        points: { menstrual: 0, androgen: 5, metabolic: 15 },
        tag: 'Mild Glycemic Dip'
      },
      {
        id: 'energy_severe_crash',
        label: 'Intense Sugar Cravings + Heavy Brain Fog',
        sublabel: 'Severe shaky fatigue 1-2 hrs after high-carb meals',
        icon: 'ZapOff',
        points: { menstrual: 5, androgen: 10, metabolic: 30 },
        tag: 'Reactive Hypoglycemia'
      }
    ]
  }
];
