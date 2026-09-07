// PCOS Pattern Classification Engine & ML-inspired Scoring
// Based on Rotterdam Consensus Criteria, AES (Androgen Excess Society) guidelines, and Metabolic Markers

export function calculateBMI(heightCm, weightKg) {
  if (!heightCm || !weightKg || heightCm <= 0 || weightKg <= 0) return null;
  const heightMeters = heightCm / 100;
  const bmi = weightKg / (heightMeters * heightMeters);
  const rounded = parseFloat(bmi.toFixed(1));

  let category = 'Normal';
  let color = 'emerald';
  let riskBonus = 0;

  if (rounded < 18.5) {
    category = 'Underweight';
    color = 'amber';
    riskBonus = 5;
  } else if (rounded >= 18.5 && rounded <= 24.9) {
    category = 'Optimal Range';
    color = 'emerald';
    riskBonus = 0;
  } else if (rounded >= 25 && rounded <= 29.9) {
    category = 'Overweight';
    color = 'amber';
    riskBonus = 12;
  } else if (rounded >= 30 && rounded <= 34.9) {
    category = 'Obesity Class I';
    color = 'orange';
    riskBonus = 22;
  } else {
    category = 'Obesity Class II+';
    color = 'red';
    riskBonus = 30;
  }

  return { bmi: rounded, category, color, riskBonus };
}

export function classifyPCOSPattern(answers, bmiData, questionsList) {
  let menstrualPoints = 0;
  let maxMenstrual = 90;

  let androgenPoints = 0;
  let maxAndrogen = 100;

  let metabolicPoints = 0;
  let maxMetabolic = 95;

  const flaggedSymptoms = [];

  // Iterate answers
  questionsList.forEach((q) => {
    const selectedOptionId = answers[q.id];
    if (!selectedOptionId) return;

    const opt = q.options.find((o) => o.id === selectedOptionId);
    if (!opt) return;

    if (opt.points.menstrual) menstrualPoints += opt.points.menstrual;
    if (opt.points.androgen) androgenPoints += opt.points.androgen;
    if (opt.points.metabolic) metabolicPoints += opt.points.metabolic;

    // Track severe indicators
    if (
      (opt.points.menstrual >= 25) ||
      (opt.points.androgen >= 25) ||
      (opt.points.metabolic >= 25)
    ) {
      flaggedSymptoms.push({
        category: q.category,
        title: q.title,
        response: opt.label,
        tag: opt.tag,
        severity: 'high'
      });
    } else if (
      (opt.points.menstrual >= 15) ||
      (opt.points.androgen >= 15) ||
      (opt.points.metabolic >= 15)
    ) {
      flaggedSymptoms.push({
        category: q.category,
        title: q.title,
        response: opt.label,
        tag: opt.tag,
        severity: 'medium'
      });
    }
  });

  // Factor in BMI
  if (bmiData && bmiData.riskBonus > 0) {
    metabolicPoints += bmiData.riskBonus;
    if (bmiData.bmi >= 28) {
      flaggedSymptoms.push({
        category: 'metabolic',
        title: 'Elevated BMI Metric',
        response: `${bmiData.bmi} kg/m² (${bmiData.category})`,
        tag: 'Adiposity Indicator',
        severity: bmiData.bmi >= 30 ? 'high' : 'medium'
      });
    }
  }

  // Normalize sub-scores 0 - 100%
  const menstrualScore = Math.min(100, Math.round((menstrualPoints / maxMenstrual) * 100));
  const androgenScore = Math.min(100, Math.round((androgenPoints / maxAndrogen) * 100));
  const metabolicScore = Math.min(100, Math.round((metabolicPoints / maxMetabolic) * 100));

  // Weighted Clinical Probability Formula
  // Rotterdam criteria heavily weights Menstrual + Androgen criteria, with Metabolic as a key amplifier
  const rawWeightedScore = (menstrualScore * 0.40) + (androgenScore * 0.35) + (metabolicScore * 0.25);
  const compositeScore = Math.min(99, Math.max(5, Math.round(rawWeightedScore)));

  // Determine Risk Category
  let riskCategory = 'Low Risk';
  let riskBadgeColor = 'emerald';
  let riskDescription = 'Your responses indicate low correlation with standard PCOS symptom patterns. Normal physiological variations or mild stress factors may be present.';

  if (compositeScore >= 65) {
    riskCategory = 'High Likelihood';
    riskBadgeColor = 'red';
    riskDescription = 'Strong symptom alignment with established clinical PCOS phenotypes. Significant indicators observed across ovulatory, androgenic, and metabolic markers.';
  } else if (compositeScore >= 35) {
    riskCategory = 'Moderate Probability';
    riskBadgeColor = 'amber';
    riskDescription = 'Mild to moderate symptom clusters associated with PCOS or related hormonal imbalances. Further clinical lab evaluation is recommended.';
  }

  // Phenotype Classification (NIH / Rotterdam criteria)
  let phenotype = {
    code: 'Normal Pattern',
    name: 'Asymptomatic / Low Phenotypic Overlap',
    description: 'Minimal hormonal or ovulatory disruptions detected.',
    primaryDriver: 'None',
    dietKey: 'balanced_wellness',
    icon: 'ShieldCheck'
  };

  if (compositeScore >= 35) {
    if (menstrualScore >= 50 && androgenScore >= 45 && metabolicScore >= 40) {
      phenotype = {
        code: 'Phenotype A',
        name: 'Classic Complete PCOS (Metabolic + Androgenic)',
        description: 'Presents the complete triad: ovulatory irregularity, elevated androgen markers (hair/acne), and metabolic/insulin resistance.',
        primaryDriver: 'Insulin Resistance & Hyperandrogenism',
        dietKey: 'insulin_metabolic_reset',
        icon: 'Flame'
      };
    } else if (menstrualScore >= 50 && androgenScore >= 45 && metabolicScore < 40) {
      phenotype = {
        code: 'Phenotype B',
        name: 'Hyperandrogenic Anovulatory PCOS',
        description: 'Characterized by irregular/absent cycles and prominent androgen signs, with normal or mild metabolic disruption (often seen in Lean PCOS).',
        primaryDriver: 'Ovarian & Adrenal Androgen Excess',
        dietKey: 'anti_androgen_hormone',
        icon: 'Sparkles'
      };
    } else if (menstrualScore < 45 && androgenScore >= 45) {
      phenotype = {
        code: 'Phenotype C',
        name: 'Ovulatory / Androgenic PCOS',
        description: 'Cyclical bleeding remains relatively regular, but clear signs of elevated androgens and potential polycystic ovarian morphology exist.',
        primaryDriver: 'Follicular & Androgen Sensitivity',
        dietKey: 'anti_androgen_hormone',
        icon: 'Zap'
      };
    } else if (menstrualScore >= 45 && metabolicScore >= 40 && androgenScore < 40) {
      phenotype = {
        code: 'Phenotype D',
        name: 'Non-Androgenic / Metabolic-Ovulatory PCOS',
        description: 'Irregular cycles paired with insulin resistance, sugar cravings, and weight challenges, without severe hirsutism or cystic acne.',
        primaryDriver: 'Insulin-Mediated Ovulatory Suppression',
        dietKey: 'insulin_metabolic_reset',
        icon: 'Activity'
      };
    } else if (androgenScore >= 40 && metabolicScore < 30) {
      phenotype = {
        code: 'Adrenal / Stress Subtype',
        name: 'Adrenal-Dominant PCOS / DHEA-S Pattern',
        description: 'Driven primarily by adrenal stress hormones and androgen receptor sensitivity rather than high insulin.',
        primaryDriver: 'Adrenal HPA-Axis Stress',
        dietKey: 'anti_androgen_hormone',
        icon: 'Feather'
      };
    } else {
      phenotype = {
        code: 'Mild Hormonal Imbalance',
        name: 'Subclinical Ovulatory or Metabolic Pattern',
        description: 'Subtle hormonal fluctuations requiring supportive lifestyle pacing and cycle tracking.',
        primaryDriver: 'Mild Endocrine Imbalance',
        dietKey: 'ovulatory_cycle_support',
        icon: 'Compass'
      };
    }
  }

  // Doctor Recommendation Advisory
  const shouldSeeDoctor = compositeScore >= 35 || flaggedSymptoms.some(s => s.severity === 'high');

  return {
    compositeScore,
    riskCategory,
    riskBadgeColor,
    riskDescription,
    phenotype,
    shouldSeeDoctor,
    subscores: {
      menstrual: menstrualScore,
      androgen: androgenScore,
      metabolic: metabolicScore
    },
    flaggedSymptoms,
    calculatedAt: new Date().toISOString()
  };
}
