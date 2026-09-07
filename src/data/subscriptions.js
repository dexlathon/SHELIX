// Subscription Tiers, Pricing, and Premium Feature Metadata

export const SUBSCRIPTION_PLANS = [
  {
    id: 'plan_monthly',
    name: 'Monthly Pro',
    tagline: 'Flexible month-to-month care after 30-day trial',
    price: '₹299',
    period: '/ month',
    billingNote: 'Billed monthly. Cancel anytime.',
    badge: 'Popular',
    isBestValue: false,
    features: [
      'Unlimited 24/7 Maya AI Clinical Consultations',
      'Personalized 30-Day Bio-Individual Meal Timelines',
      'Comprehensive Seed-Cycling & Grocery Planners',
      'Advanced Diagnostic Lab Markers OCR Interpreter',
      '10% Discount on Doctor Video Consultations',
      'Unlimited Doctor Consultation Brief PDF Exports'
    ]
  },
  {
    id: 'plan_annual',
    name: 'Annual Care (Best Value)',
    tagline: 'Complete 1-Year Hormone Balancing Protocol',
    price: '₹1,499',
    period: '/ year',
    monthlyEquivalent: '₹125 / month (Save 58%)',
    billingNote: 'Billed annually at ₹1,499. 7-Day Money-Back Guarantee.',
    badge: 'Best Value • 58% Off',
    isBestValue: true,
    features: [
      'Everything in Monthly Pro, plus:',
      'Priority Response Time with Senior Maya AI Engine',
      '15% Discount on Verified OB-GYN & Endo Bookings',
      'Exclusive Bitmoji Wardrobe (Scrubs, Silk, Florals)',
      'Direct WhatsApp Symptom Tracking Alerts',
      'Family Sharing (Up to 2 Accounts)'
    ]
  },
  {
    id: 'plan_lifetime',
    name: 'Lifetime Wellness',
    tagline: 'Permanent one-time investment for life',
    price: '₹3,999',
    period: 'one-time',
    billingNote: 'Pay once, own forever. Zero recurring fees.',
    badge: 'VIP Lifetime',
    isBestValue: false,
    features: [
      'All Future Pro Features & AI Models Included for Life',
      'VIP Dedicated Doctor Concierge Support',
      'Unlimited PDF Reports, Meal Plans & Scans',
      'Exclusive Access to Clinical Webinar Sessions'
    ]
  }
];

export const FREE_TRIAL_DAYS = 30;

export function getSubscriptionStatus() {
  try {
    const saved = localStorage.getItem('pcos_subscription_status');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (!parsed.isPremium && parsed.trialEndDate) {
        const diffMs = new Date(parsed.trialEndDate).getTime() - Date.now();
        const daysLeft = Math.max(0, Math.ceil(diffMs / (1000 * 60 * 60 * 24)));
        parsed.trialDaysLeft = daysLeft;
      }
      return parsed;
    }
  } catch (e) {
    // ignore
  }

  // Default: 30-day trial starting from user's first visit
  const now = new Date();
  const trialEndDate = new Date();
  trialEndDate.setDate(now.getDate() + FREE_TRIAL_DAYS);

  const defaultSub = {
    isPremium: false,
    planId: 'trial',
    planName: '30-Day Free Trial',
    trialDaysLeft: FREE_TRIAL_DAYS,
    trialEndDate: trialEndDate.toISOString(),
    startDate: now.toISOString()
  };

  try {
    localStorage.setItem('pcos_subscription_status', JSON.stringify(defaultSub));
  } catch (e) {
    // ignore
  }

  return defaultSub;
}

export function saveSubscription(subData) {
  try {
    localStorage.setItem('pcos_subscription_status', JSON.stringify(subData));
  } catch (e) {
    // ignore
  }
}
