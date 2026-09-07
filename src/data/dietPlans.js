// Personalized Daily Dietary & Nutrition Protocols tailored to PCOS Phenotypes
// Enhanced with semi-realistic food vector icon keys

export const DIET_PLANS = {
  insulin_metabolic_reset: {
    title: 'Low-GI Glycemic & Insulin Reset Protocol',
    subtitle: 'Tailored for Insulin Resistance, Central Adiposity & Sugar Crashes',
    badge: 'Insulin-Focused',
    badgeColor: 'blue',
    heroSummary: 'Stabilizes blood sugar spikes, lowers circulating fasting insulin, and reduces ovarian stimulation of excess androgens through high-fiber, low-glycemic eating.',
    
    macroSplit: {
      protein: '30%',
      healthyFats: '40%',
      complexCarbs: '30%'
    },

    principles: [
      {
        icon: 'TrendingDown',
        title: 'Low Glycemic Load',
        desc: 'Pair all carbs with fiber, protein, or fat to eliminate glucose spikes.'
      },
      {
        icon: 'Flame',
        title: '30g Morning Protein',
        desc: 'Satiates hunger hormones (ghrelin) and prevents mid-day sugar cravings.'
      },
      {
        icon: 'Layers',
        title: 'Fiber Forward (35g+)',
        desc: 'Soluble fiber binds to excess circulating estrogen and cholesterol.'
      },
      {
        icon: 'Clock',
        title: 'Circadian Fasting (12h)',
        desc: 'Overnight rest (8 PM to 8 AM) improves cellular insulin sensitivity.'
      }
    ],

    dailySchedule: [
      {
        time: '7:30 AM',
        period: 'Morning Awakening',
        iconKey: 'lemon',
        title: 'Metabolic Hydration Elixir',
        items: [
          { name: '16 oz warm water with 1 tbsp raw apple cider vinegar (ACV) & fresh lemon', iconKey: 'lemon' },
          { name: '2g Myo-Inositol powder + D-Chiro Inositol (40:1 ratio)', iconKey: 'inositol' }
        ],
        benefit: 'ACV slows gastric emptying and lowers post-prandial glucose by up to 20%.'
      },
      {
        time: '8:30 AM',
        period: 'Breakfast',
        iconKey: 'egg',
        title: 'Savory High-Protein Power Plate',
        items: [
          { name: '2-3 pasture-raised eggs scrambled with sautéed baby spinach & mushrooms', iconKey: 'egg' },
          { name: '1/2 fresh avocado sprinkled with hemp seeds and sea salt', iconKey: 'avocado' },
          { name: 'Organic Japanese green tea or steeped spearmint infusion', iconKey: 'tea' }
        ],
        benefit: 'Delivers 28g protein and healthy monounsaturated fats with zero sugar.'
      },
      {
        time: '12:30 PM',
        period: 'Lunch',
        iconKey: 'salmon',
        title: 'Anti-Inflammatory Mediterranean Bowl',
        items: [
          { name: 'Grilled wild Atlantic salmon fillet or herb-marinated organic tofu (150g)', iconKey: 'salmon' },
          { name: '2 cups mixed arugula, crisp cucumber, cherry tomatoes, and Kalamata olives', iconKey: 'salad' },
          { name: 'Dressing: 2 tbsp extra virgin olive oil + fresh lemon juice + minced garlic', iconKey: 'lemon' }
        ],
        benefit: 'Rich in Omega-3 EPA/DHA to calm systemic follicular inflammation.'
      },
      {
        time: '4:00 PM',
        period: 'Afternoon Snack',
        iconKey: 'seeds',
        title: 'Blood Sugar Stabilizer Snack',
        items: [
          { name: 'Raw walnuts & zinc-rich pumpkin seeds (1 small handful)', iconKey: 'seeds' },
          { name: 'Freshly brewed hot spearmint herbal tea', iconKey: 'tea' }
        ],
        benefit: 'Ceylon cinnamon and zinc improve insulin receptor signaling.'
      },
      {
        time: '7:00 PM',
        period: 'Dinner',
        iconKey: 'broccoli',
        title: 'Cruciferous Hormone-Balancing Stir-Fry',
        items: [
          { name: 'Grass-fed lean beef strips or organic tempeh (140g)', iconKey: 'salmon' },
          { name: 'Abundant steamed broccoli florets, baby kale, and bok choy (DIM rich)', iconKey: 'broccoli' },
          { name: '1/3 cup cauliflower-rice mixed with nutrient-dense wild rice', iconKey: 'salad' }
        ],
        benefit: 'Indole-3-carbinol in cruciferous greens aids hepatic hormone clearance.'
      },
      {
        time: '9:00 PM',
        period: 'Bedtime Routine',
        iconKey: 'tea',
        title: 'Magnesium & Calming Night Tonic',
        items: [
          { name: 'Chamomile or passionflower organic herbal tea', iconKey: 'tea' },
          { name: 'Magnesium Glycinate (300-400mg) for deep restorative REM sleep', iconKey: 'inositol' }
        ],
        benefit: 'Promotes restorative REM sleep for optimal insulin recovery.'
      }
    ],

    superfoods: [
      { name: 'Myo-Inositol & D-Chiro', iconKey: 'inositol', role: 'Restores ovarian insulin sensitivity & ovulatory signaling' },
      { name: 'Organic Spearmint Tea', iconKey: 'tea', role: 'Clinically proven to lower free circulating testosterone' },
      { name: 'Pumpkin & Flax Seeds', iconKey: 'seeds', role: 'Provides Zinc and lignans to bind excess androgens' },
      { name: 'Raw Apple Cider Vinegar', iconKey: 'lemon', role: 'Blunts post-meal glycemic and insulin spikes' },
      { name: 'Wild Salmon & Sardines', iconKey: 'salmon', role: 'Potent Omega-3 EPA/DHA follicular anti-inflammatory' },
      { name: 'Cruciferous Broccoli', iconKey: 'broccoli', role: 'Rich in Sulforaphane to aid liver estrogen detox' }
    ],

    foodsToAvoid: [
      { name: 'Sodas & Sweetened Juices', iconKey: 'soda', reason: 'High-fructose corn syrup directly spikes liver fat and insulin' },
      { name: 'Refined Bakery Pastries', iconKey: 'bakery', reason: 'High glycemic surge triggers compensatory ovarian androgen release' },
      { name: 'Ultra-Processed Seed Oils', iconKey: 'seedoil', reason: 'Canola, soybean, and corn oils drive chronic systemic inflammation' },
      { name: 'Sugary Coffee Syrups', iconKey: 'milk', reason: 'Spikes morning cortisol and disrupts daily glucose rhythm' }
    ]
  },

  anti_androgen_hormone: {
    title: 'Anti-Androgenic & Follicular Support Plan',
    subtitle: 'Tailored for Facial Hair (Hirsutism), Hormonal Cystic Acne & Scalp Thinning',
    badge: 'Androgen-Focused',
    badgeColor: 'purple',
    heroSummary: 'Inhibits 5-alpha reductase enzyme, boosts Sex Hormone-Binding Globulin (SHBG) to mop up excess free testosterone, and clears persistent inflammatory breakouts.',
    
    macroSplit: {
      protein: '25%',
      healthyFats: '45%',
      complexCarbs: '30%'
    },

    principles: [
      {
        icon: 'Sparkles',
        title: '5-Alpha Reductase Blockers',
        desc: 'Incorporate natural botanicals like spearmint, green tea, and reishi.'
      },
      {
        icon: 'Shield',
        title: 'Dairy & Gluten Elimination Trial',
        desc: 'Reduces IGF-1 signaling that overstimulates sebaceous oil glands.'
      },
      {
        icon: 'Zap',
        title: 'Zinc & Lignan Saturation',
        desc: 'Pumpkin seeds and ground flaxseeds increase binding of free androgens.'
      },
      {
        icon: 'Heart',
        title: 'Adrenal De-stressing',
        desc: 'Gentle zone 2 movement prevents spike of adrenal DHEA-S.'
      }
    ],

    dailySchedule: [
      {
        time: '7:30 AM',
        period: 'Morning Awakening',
        iconKey: 'tea',
        title: 'Spearmint Anti-Androgen Infusion',
        items: [
          { name: '1 cup steeped loose-leaf organic spearmint tea with fresh lime', iconKey: 'tea' },
          { name: 'Hydrating mineral water with a pinch of Celtic sea salt', iconKey: 'lemon' }
        ],
        benefit: 'Dual daily cups of spearmint tea lower free testosterone levels.'
      },
      {
        time: '8:30 AM',
        period: 'Breakfast',
        iconKey: 'blueberries',
        title: 'Hormone-Balancing Berry & Seed Bowl',
        items: [
          { name: 'Wild antioxidant-rich blueberries with almond milk protein', iconKey: 'blueberries' },
          { name: '2 tbsp freshly ground flaxseeds + 1 tbsp chia seeds (Seed cycling)', iconKey: 'seeds' },
          { name: 'Fresh sliced avocado with raw pumpkin seeds', iconKey: 'avocado' }
        ],
        benefit: 'Flax lignans bind free testosterone in the bloodstream.'
      },
      {
        time: '12:30 PM',
        period: 'Lunch',
        iconKey: 'salad',
        title: 'Clear Skin Rainbow Nourish Bowl',
        items: [
          { name: 'Poached free-range chicken breast or baked lentils (140g)', iconKey: 'salad' },
          { name: '1/2 avocado with roasted pumpkin seeds (high Zinc for acne)', iconKey: 'avocado' },
          { name: 'Tahini-lemon dressing with fresh Italian parsley', iconKey: 'lemon' }
        ],
        benefit: 'Zinc regulates skin sebum production and speeds wound healing.'
      },
      {
        time: '4:00 PM',
        period: 'Afternoon Snack',
        iconKey: 'seeds',
        title: 'Second Spearmint Tea & Brazil Nuts',
        items: [
          { name: 'Second cup of organic spearmint tea', iconKey: 'tea' },
          { name: '2 Brazil nuts (Selenium for thyroid) + raw pumpkin seeds', iconKey: 'seeds' }
        ],
        benefit: 'Selenium and healthy fats support optimal hormone synthesis.'
      },
      {
        time: '7:00 PM',
        period: 'Dinner',
        iconKey: 'salmon',
        title: 'Gut-Friendly Baked Fish & Greens',
        items: [
          { name: 'Wild Atlantic fish fillet baked with oregano, garlic, and cherry tomatoes', iconKey: 'salmon' },
          { name: 'Steamed broccoli and dark leafy greens with lemon and olive oil', iconKey: 'broccoli' }
        ],
        benefit: 'Easy on digestion and rich in polyphenols that support skin clarity.'
      },
      {
        time: '9:00 PM',
        period: 'Bedtime Routine',
        iconKey: 'turmeric',
        title: 'Adrenal Golden Milk Elixir',
        items: [
          { name: 'Warm golden milk: turmeric + ginger + black pepper pinch', iconKey: 'turmeric' },
          { name: 'Ashwagandha or Holy Basil (Tulsi) for DHEA-S regulation', iconKey: 'tea' }
        ],
        benefit: 'Curcumin downregulates inflammatory cytokine cascades.'
      }
    ],

    superfoods: [
      { name: 'Organic Spearmint Tea', iconKey: 'tea', role: 'Potent anti-androgen: drink 2 cups daily' },
      { name: 'Ground Flaxseeds (Lignans)', iconKey: 'seeds', role: 'Boosts SHBG to safely clear free testosterone' },
      { name: 'Raw Pumpkin Seeds (Zinc)', iconKey: 'seeds', role: 'Inhibits 5-alpha reductase and halts cystic acne' },
      { name: 'Wild Blueberries', iconKey: 'blueberries', role: 'Anthocyanins protect ovarian follicles from oxidative stress' },
      { name: 'Golden Turmeric', iconKey: 'turmeric', role: 'Reduces inflammation in acne lesions and hair follicles' },
      { name: 'Cruciferous Broccoli', iconKey: 'broccoli', role: 'Supports hepatic hormone detoxification' }
    ],

    foodsToAvoid: [
      { name: 'Cow Milk & Whey Protein', iconKey: 'milk', reason: 'High in IGF-1 and androgen precursors that trigger severe cystic acne' },
      { name: 'High Caffeine on Empty Stomach', iconKey: 'milk', reason: 'Spikes adrenal cortisol and exacerbates hair thinning' },
      { name: 'Refined Bakery Pastries', iconKey: 'bakery', reason: 'Disrupts microbiome and increases endotoxemia' },
      { name: 'Ultra-Processed Seed Oils', iconKey: 'seedoil', reason: 'High Omega-6 triggers chronic systemic inflammation' }
    ]
  },

  ovulatory_cycle_support: {
    title: 'Ovulatory Rhythm & Cycle Regularity Plan',
    subtitle: 'Tailored for Irregular / Absent Periods, Oligomenorrhea & Follicular Nourishment',
    badge: 'Cycle-Support',
    badgeColor: 'blue',
    heroSummary: 'Provides dense micronutrients, bioavailable healthy fats, and nervous system regulation to encourage healthy hypothalamic signaling and restore regular monthly ovulation.',
    
    macroSplit: {
      protein: '25%',
      healthyFats: '40%',
      complexCarbs: '35%'
    },

    principles: [
      {
        icon: 'Calendar',
        title: 'Seed Cycling Protocol',
        desc: 'Flax/Pumpkin in Follicular phase; Sesame/Sunflower in Luteal phase.'
      },
      {
        icon: 'Smile',
        title: 'Caloric Adequacy',
        desc: 'Prevent low energy availability (LEA) which shuts down LH surges.'
      },
      {
        icon: 'Sun',
        title: 'Morning Natural Light',
        desc: '15 mins morning sun resets suprachiasmatic nucleus for hormonal rhythm.'
      },
      {
        icon: 'Heart',
        title: 'Nourishing Healthy Fats',
        desc: 'Cholesterol is the essential biochemical backbone of all steroid hormones.'
      }
    ],

    dailySchedule: [
      {
        time: '7:30 AM',
        period: 'Morning Awakening',
        iconKey: 'lemon',
        title: 'Hydration & Adrenal Cocktail',
        items: [
          { name: 'Pure coconut water + fresh citrus juice + pinch of sea salt', iconKey: 'lemon' },
          { name: 'Provides potassium, natural vitamin C, and sodium for adrenal support', iconKey: 'lemon' }
        ],
        benefit: 'Supports adrenal gland function for optimal pituitary signaling.'
      },
      {
        time: '8:30 AM',
        period: 'Breakfast',
        iconKey: 'egg',
        title: 'Warm Oats & Pasture-Raised Eggs',
        items: [
          { name: '2 soft-boiled pasture-raised eggs (Choline for follicular health)', iconKey: 'egg' },
          { name: '1 tbsp ground pumpkin seeds and 1 tbsp ground flaxseeds', iconKey: 'seeds' },
          { name: 'Fresh antioxidant berries with cinnamon', iconKey: 'blueberries' }
        ],
        benefit: 'Choline and complex slow carbs nourish developing follicles.'
      },
      {
        time: '12:30 PM',
        period: 'Lunch',
        iconKey: 'salad',
        title: 'Warm Protein & Greens Bowl',
        items: [
          { name: 'Grilled wild salmon or pasture poultry (150g)', iconKey: 'salmon' },
          { name: 'Fresh avocado with extra virgin olive oil and lemon vinaigrette', iconKey: 'avocado' },
          { name: 'Steamed broccoli and sweet potato cubes', iconKey: 'broccoli' }
        ],
        benefit: 'Beta-carotene and vitamin A support corpus luteum progesterone production.'
      },
      {
        time: '4:00 PM',
        period: 'Afternoon Snack',
        iconKey: 'chocolate',
        title: 'Dark Chocolate & Raw Seeds',
        items: [
          { name: '2 dark chocolate squares (85%+ cacao for magnesium)', iconKey: 'chocolate' },
          { name: 'Handful of raw almonds & sunflower seeds', iconKey: 'seeds' },
          { name: 'Red raspberry leaf or chamomile herbal tea', iconKey: 'tea' }
        ],
        benefit: 'Magnesium relaxes uterine muscles and supports LH/FSH balance.'
      },
      {
        time: '7:00 PM',
        period: 'Dinner',
        iconKey: 'bonebroth',
        title: 'Nourishing Bone Broth & Veggie Stew',
        items: [
          { name: 'Rich grass-fed bone broth bowl with shredded meat and root veggies', iconKey: 'bonebroth' },
          { name: 'Steamed broccoli florets and dark greens', iconKey: 'broccoli' }
        ],
        benefit: 'Collagen and glycine repair gut lining and calm nervous system.'
      },
      {
        time: '9:00 PM',
        period: 'Bedtime Routine',
        iconKey: 'tea',
        title: 'Restorative Sleep & Melatonin Protection',
        items: [
          { name: 'Red raspberry leaf or passionflower herbal infusion', iconKey: 'tea' },
          { name: 'Magnesium Glycinate (300mg) for hormone synthesis', iconKey: 'inositol' }
        ],
        benefit: 'Melatonin is a powerful follicular antioxidant supporting egg quality.'
      }
    ],

    superfoods: [
      { name: 'Pasture-Raised Eggs', iconKey: 'egg', role: 'Rich in Choline, Vitamin D3 & B12 for egg quality' },
      { name: 'Red Raspberry Leaf Tea', iconKey: 'tea', role: 'Traditional uterine tonic supporting pelvic circulation' },
      { name: 'Grass-Fed Bone Broth', iconKey: 'bonebroth', role: 'Glycine and collagen for intestinal barrier and hormone balance' },
      { name: 'Sunflower & Sesame Seeds', iconKey: 'seeds', role: 'Luteal phase support for healthy progesterone levels' },
      { name: 'Fresh Avocados & Olives', iconKey: 'avocado', role: 'Steroid hormone building blocks' },
      { name: 'Cruciferous Broccoli', iconKey: 'broccoli', role: 'Aids liver clearance of used hormones' }
    ],

    foodsToAvoid: [
      { name: 'Severe Calorie Deficit (<1400 kcal)', iconKey: 'soda', reason: 'Causes hypothalamus to perceive famine and halt ovulation' },
      { name: 'Prolonged Fasting (>16 hrs)', iconKey: 'tea', reason: 'Can elevate cortisol and suppress luteinizing hormone' },
      { name: 'Processed Margarine & Trans Fats', iconKey: 'seedoil', reason: 'Interferes with cell membrane fluidity and hormone reception' },
      { name: 'Excess Alcohol & Sugary Drinks', iconKey: 'soda', reason: 'Impedes liver clearance of estrogen and raises free testosterone' }
    ]
  },

  balanced_wellness: {
    title: 'Preventative Hormonal & Metabolic Maintenance',
    subtitle: 'Tailored for Low Risk / General Hormonal Wellness',
    badge: 'Maintenance',
    badgeColor: 'blue',
    heroSummary: 'Maintains optimal insulin sensitivity, supports natural ovulatory vitality, and prevents future endocrine disruptions with nutrient-dense whole foods.',
    
    macroSplit: {
      protein: '25%',
      healthyFats: '35%',
      complexCarbs: '40%'
    },

    principles: [
      {
        icon: 'Heart',
        title: 'Whole Food Diversity',
        desc: 'Aim for 30+ different plant foods per week for microbiome health.'
      },
      {
        icon: 'Activity',
        title: 'Daily Movement & Strength',
        desc: 'Preserves lean muscle mass to optimize baseline metabolic health.'
      },
      {
        icon: 'Smile',
        title: 'Mindful Eating',
        desc: 'Eat in a relaxed state to maximize nutrient absorption and digestion.'
      },
      {
        icon: 'Droplets',
        title: 'Optimal Hydration',
        desc: 'Drink 2.5L clean filtered water with natural electrolytes.'
      }
    ],

    dailySchedule: [
      {
        time: '8:00 AM',
        period: 'Breakfast',
        iconKey: 'egg',
        title: 'Balanced Protein & Berry Scramble',
        items: [
          { name: '2 eggs with sautéed greens and avocado on whole grain toast', iconKey: 'egg' },
          { name: 'Fresh seasonal berries & green tea', iconKey: 'blueberries' }
        ],
        benefit: 'Provides sustained morning energy without glucose crashes.'
      },
      {
        time: '1:00 PM',
        period: 'Lunch',
        iconKey: 'salad',
        title: 'Colorful Mediterranean Grain Bowl',
        items: [
          { name: 'Grilled chicken breast or chickpea salad with quinoa, cucumber, and feta', iconKey: 'salad' },
          { name: 'Extra virgin olive oil and lemon vinaigrette', iconKey: 'lemon' }
        ],
        benefit: 'High in polyphenols, fiber, and clean protein.'
      },
      {
        time: '4:00 PM',
        period: 'Afternoon Snack',
        iconKey: 'seeds',
        title: 'Nuts & Fresh Fruit',
        items: [
          { name: 'Fresh fruit with raw almonds and seeds', iconKey: 'seeds' }
        ],
        benefit: 'Combines fiber and healthy fat for steady blood sugar.'
      },
      {
        time: '7:30 PM',
        period: 'Dinner',
        iconKey: 'salmon',
        title: 'Baked Salmon & Roasted Vegetables',
        items: [
          { name: 'Baked wild salmon with roasted asparagus and mixed green salad', iconKey: 'salmon' }
        ],
        benefit: 'Omega-3 fatty acids and restorative fiber.'
      }
    ],

    superfoods: [
      { name: 'Fresh Avocados & Olives', iconKey: 'avocado', role: 'Polyphenols support cardiovascular and endocrine health' },
      { name: 'Wild Blueberries', iconKey: 'blueberries', role: 'High in antioxidants and low glycemic index' },
      { name: 'Cruciferous Broccoli', iconKey: 'broccoli', role: 'Supports healthy liver metabolism' },
      { name: 'Pasture-Raised Eggs', iconKey: 'egg', role: 'Choline, magnesium, and essential trace minerals' }
    ],

    foodsToAvoid: [
      { name: 'Sugar-Sweetened Sodas', iconKey: 'soda', reason: 'Unnecessary rapid glucose spikes' },
      { name: 'Ultra-Processed Fast Foods', iconKey: 'bakery', reason: 'High trans-fats and chemical additives' }
    ]
  }
};
