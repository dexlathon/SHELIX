// Context-Aware PCOS AI Assistant Engine (Maya AI)
// Evaluates patient assessment, phenotype, BMI, diet plan, and multi-language support

export function generateAIResponse(userMessage, context, lang = 'en') {
  const query = userMessage.toLowerCase().trim();
  const { assessment, bmiData, user } = context || {};
  const phenotype = assessment?.phenotype?.name || 'PCOS Profile';
  const phenotypeCode = assessment?.phenotype?.code || 'Phenotype A';
  const riskScore = assessment?.compositeScore || 70;
  const bmiVal = bmiData?.bmi || 24.5;
  const patientName = user?.name || 'Patient';

  // ---------------- MULTI-LANGUAGE RESPONSES ----------------

  // 1. TAMIL (தமிழ்)
  if (lang === 'ta') {
    if (query.includes('மருத்துவர்') || query.includes('doctor') || query.includes('தீவிர') || query.includes('வலி') || query.includes('pain') || query.includes('hospital') || query.includes('emergency')) {
      return `⚠️ **அவசர மருத்துவ வழிகாட்டல் & சிறப்பு மருத்துவர்கள்**:

உங்களுக்கு கடுமையான இடுப்பு வலி, 8 நாட்களுக்கு மேல் தொடர் இரத்தப்போக்கு அல்லது தலைசுற்றல் இருந்தால், உடனடியாக மருத்துவரை அணுகவும்:

🏥 **அருகிலுள்ள பிசிஓஎஸ் சிறப்பு மருத்துவர்கள்**:
- **சென்னை**: டாக்டர் அனிதா சௌந்தரராஜன் (அப்பல்லோ ஸ்பெக்ட்ரா) | டாக்டர் கவிதா (ஃபோர்டிஸ் மலர்)
- **கோயம்புத்தூர்**: டாக்டர் செல்வி ராதாகிருஷ்ணன் (KMCH)
- **ஹைதராபாத் / பெங்களூரு**: ரெயின்போ விமன்ஸ் & மணிபால் மருத்துவமனை

🚨 **அவசர உதவி எண்கள்**:
- தேசிய அவசர ஊர்தி: **108**
- பெண்கள் உதவி மையம்: **1091**

செயலியில் உள்ள **"அருகிலுள்ள பிசிஓஎஸ் மருத்துவர்கள்"** பொத்தானை அழுத்தி உடனடி முன்பதிவு செய்யலாம்!`;
    }

    if (query.includes('உணவு') || query.includes('diet') || query.includes('சாப்பிட') || query.includes('breakfast')) {
      return `வணக்கம் ${patientName}! உங்கள் ${phenotypeCode} நிலைக்கு, இன்சுலின் அளவை சீராக்கும் குறைந்த ஜிஐ (Low-GI) உணவுகள் மிகச் சிறந்தவை.

🥑 **பரிந்துரைக்கப்பட்ட உணவுகள்**:
1. **காலை உணவு**: 2-3 முட்டைகள் அல்லது டோஃபு மற்றும் வெண்ணெய் பழம் (Avocado) - 25-30g புரதம்.
2. **மதிய உணவு**: சால்மன் மீன் அல்லது பருப்பு வகைகள், கீரைகள் மற்றும் ஆலிவ் எண்ணெய்.
3. **இரவு பானம்**: தூங்குவதற்கு முன் ஸ்பியர்மிண்ட் (Spearmint) மூலிகைத் தேநீர்.

🚫 **தவிர்க்க வேண்டியவை**: சர்க்கரை பானங்கள், மைதா மற்றும் சுத்திகரிக்கப்பட்ட மாவுச்சத்து உணவுகள்.`;
    }

    if (query.includes('பரிசோதனை') || query.includes('test') || query.includes('இரத்தம்') || query.includes('blood')) {
      return `உங்கள் அறிகுறிகளுக்கு பின்வரும் பரிசோதனைகள் மிகவும் அவசியமானவை:

🧪 **முக்கிய இரத்தப் பரிசோதனைகள்**:
1. **Fasting Insulin & Glucose**: HOMA-IR மதிப்பை அறிய.
2. **Total & Free Testosterone**: ஆண்ட்ரோஜன் ஹார்மோன் அளவை உறுதி செய்ய.
3. **Day 3 LH / FSH Ratio**: அண்டவிடுப்பு சுழற்சியை அறிய.
4. **Pelvic Ultrasound**: சினைப்பையில் நீர்க்கட்டிகள் உள்ளதா எனப் பார்க்க.

இவற்றை மாதவிடாயின் 2-4 ஆம் நாளில் காலையில் வெறும் வயிற்றில் செய்வது சிறந்தது.`;
    }

    if (query.includes('முடி') || query.includes('hair') || query.includes('முகப்பரு') || query.includes('acne')) {
      return `முகப்பரு மற்றும் முடி உதிர்தல் அதிகப்படியான ஆண் ஹார்மோன்களால் (Androgens) ஏற்படுகிறது.

🌿 **இயற்கை தீர்வுகள்**:
- **Spearmint Tea**: தினமும் 2 கப் குடிப்பதால் இலவச டெஸ்டோஸ்டிரோன் குறையும்.
- **பூசணி விதைகள் (Pumpkin Seeds)**: துத்தநாகம் (Zinc) நிறைந்துள்ளதால் முகப்பருவை தடுக்கும்.
- **Myo-Inositol**: சினைப்பையின் செயல்பாட்டை மேம்படுத்தும்.`;
    }

    return `வணக்கம் ${patientName}! உங்கள் தற்போதைய மதிப்பீடு: **${phenotypeCode} (${riskScore}% ஆபத்து)**. 

நான் உங்கள் பிசிஓஎஸ் (PCOS) நல ஆலோசகர். உணவுத் திட்டம், இரத்தப் பரிசோதனைகள் அல்லது தீவிர அறிகுறிகளுக்கான மருத்துவர் விவரங்களை என்னிடம் கேட்கலாம்!`;
  }

  // 2. TELUGU (తెలుగు)
  if (lang === 'te') {
    if (query.includes('డాక్టర్') || query.includes('doctor') || query.includes('హాస్పిటల్') || query.includes('నొప్పి') || query.includes('pain') || query.includes('hospital') || query.includes('emergency')) {
      return `⚠️ **అత్యవసర వైద్య సంరక్షణ & స్థానిక నిపుణులు**:

మీకు తీవ్రమైన కటి/కడుపు నొప్పి (ఓవేరియన్ సిస్ట్ రప్చర్ ప్రమాదం) లేదా 8 రోజులకు మించి అధిక రక్తస్రావం ఉంటే వెంటనే నిపుణులను సంప్రదించండి:

🏥 **ధృవీకరించబడిన స్థానిక వైద్యులు**:
- **హైదరాబాద్**: డా. స్రవంతి రెడ్డి (రెయిన్‌బో హాస్పిటల్స్, బంజారా హిల్స్) | డా. వెంకట్ రమణ రావు (యశోద హాస్పిటల్స్)
- **బెంగళూరు**: డా. దివ్య చంద్రశేఖర్ (మణిపాల్ హాస్పిటల్)
- **చెన్నై**: అపోలో స్పెసియాలిటీ & ఫోర్టిస్ మలార్

🚨 **అత్యవసర హెల్ప్‌లైన్**:
- నేషనల్ ఎమర్జెన్సీ: **108**
- మహిళా హెల్ప్‌లైన్: **1091**

యాప్‌లోని **"స్థానిక వైద్యులు & ఆసుపత్రులు"** బటన్ ద్వారా నేరుగా కాల్ చేయవచ్చు లేదా అపాయింట్‌మెంట్ బుక్ చేయవచ్చు!`;
    }

    if (query.includes('ఆహారం') || query.includes('డైట్') || query.includes('diet') || query.includes('భోజనం')) {
      return `నమస్కారం ${patientName}! మీ **${phenotypeCode}** కొరకు ఇన్సులిన్ స్థాయిలను సమతుల్యం చేసే ఆహారం చాలా ముఖ్యం:

🥑 **సిఫార్సు చేయబడిన భోజనం**:
1. **అల్పాహారం**: 2-3 గుడ్లు, బచ్చలికూర మరియు అవోకాడో (25-30 గ్రాముల ప్రోటీన్).
2. **మధ్యాహ్నం**: సాల్మన్ చేప లేదా పప్పు ధాన్యాలు, ఆకుకూరలు మరియు ఆలివ్ ఆయిల్.
3. **సాయంత్రం**: స్పియర్‌మింట్ హెర్బల్ టీ.

🚫 **నివారించవలసినవి**: తీపి పానీయాలు, మైదా మరియు వేయించిన ఆహారాలు.`;
    }

    if (query.includes('పరీక్షలు') || query.includes('ల్యాబ్') || query.includes('test') || query.includes('రక్తం')) {
      return `మీ ప్రస్తుత లక్షణాల ప్రకారం ఈ ల్యాబ్ పరీక్షలు సిఫార్సు చేయబడ్డాయి:

🧪 **ముఖ్య పరీక్షల జాబితా**:
1. **Fasting Insulin + Fasting Glucose**: ఇన్సులిన్ నిరోధకతను కొలవడానికి.
2. **Total & Free Testosterone**: ఆండ్రోజెన్ హార్మోన్ల స్థాయిని చూడటానికి.
3. **Day 3 LH & FSH Ratio**: రుతుచక్రం మరియు అండం విడుదల కొరకు.
4. **Pelvic Ultrasound Scan**: అండాశయాల స్వరూపం కొరకు.`;
    }

    return `నమస్కారం ${patientName}! మీ ప్రస్తుత విశ్లేషణ: **${phenotypeCode} (${riskScore}% ప్రమాదం)**.

డైట్ ప్లాన్, ల్యాబ్ టెస్ట్‌లు లేదా స్థానిక డాక్టర్ కన్సల్టేషన్ గురించి మీకు ఏవైనా సందేహాలు ఉంటే నన్ను అడగండి!`;
  }

  // 3. HINDI (हिन्दी)
  if (lang === 'hi') {
    if (query.includes('डॉक्टर') || query.includes('doctor') || query.includes('अस्पताल') || query.includes('दर्द') || query.includes('pain') || query.includes('hospital') || query.includes('गंभीर') || query.includes('emergency')) {
      return `⚠️ **गंभीर लक्षण एवं आपातकालीन डॉक्टर परामर्श**:

यदि आपको अचानक तीव्र पेल्विक दर्द (सिस्ट फटने का खतरा) या 8 दिनों से अधिक भारी रक्तस्राव हो रहा है, तो तुरंत निकटतम अस्पताल जाएं:

🏥 **सत्यापित स्थानीय पीसीओएस विशेषज्ञ**:
- **दिल्ली NCR**: डॉ. सुनीता मित्तल (मैक्स सुपर स्पेशियलिटी, साकेत) | डॉ. राजेश खड़गावत (एम्स / एंडोकेयर)
- **मुंबई**: डॉ. पूजा बांडेकर (लीलावती अस्पताल, बांद्रा) | डॉ. अमित जोशी (अंधेरी)
- **बेंगलुरु / चेन्नई**: मणिपाल अस्पताल एवं अपोलो स्पेक्ट्रा

🚨 **आपातकालीन हेल्पलाइन**:
- एम्बुलेंस एवं इमरजेंसी: **108**
- महिला हेल्पलाइन: **1091**

ऐप में **"स्थानीय डॉक्टर एवं अस्पताल"** बटन दबाकर सीधे कॉल या अपॉइंटमेंट बुक करें!`;
    }

    if (query.includes('डाइट') || query.includes('खाना') || query.includes('diet') || query.includes('भोजन')) {
      return `नमस्ते ${patientName}! आपके **${phenotypeCode}** प्रोफाइल के लिए लो-ग्लाइसेमिक (Low-GI) और हाई-प्रोटीन डाइट सबसे असरदार है:

🍳 **दैनिक आहार योजना**:
1. **नाश्ता (Breakfast)**: 2-3 उबले या भुर्जी अंडे + एवोकाडो + ग्रीन टी (28g प्रोटीन)।
2. **दोपहर का भोजन (Lunch)**: ग्रिल्ड फिश या पनीर/दाल + प्रचुर मात्रा में हरी सलाद और जैतून का तेल।
3. **शाम की चाय**: स्पियरमिंट हर्बल टी (Spearmint Tea) जो टेस्टोस्टेरोन कम करती है।

🚫 **परहेज**: कोल्ड ड्रिंक्स, सफेद मैदा, पेस्ट्री और अत्यधिक रिफाइंड तेल।`;
    }

    if (query.includes('टेस्ट') || query.includes('test') || query.includes('खून') || query.includes('जांच')) {
      return `आपके लक्षणों के आधार पर डॉक्टर से ये टेस्ट करवाने की सलाह दी जाती है:

🧪 **प्राथमिक डायग्नोस्टिक टेस्ट**:
1. **फास्टिंग इंसुलिन और ग्लूकोज (HOMA-IR)**: इंसुलिन रेजिस्टेंस की जांच हेतु।
2. **फ्री और टोटल टेस्टोस्टेरोन**: एंड्रोजन हॉर्मोन की पुष्टि के लिए।
3. **LH और FSH रेश्यो (Day 2-4)**: ओव्यूलेशन साइकिल के मूल्यांकन के लिए।
4. **पेल्विक अल्ट्रासाउंड**: ओवरी में फॉलिकल्स की स्थिति देखने के लिए।`;
    }

    return `नमस्ते ${patientName}! आपका वर्तमान मूल्यांकन: **${phenotypeCode} (${riskScore}% जोखिम स्कोर)**।

डाइट, हॉर्मोन टेस्ट या नजदीकी विशेषज्ञ डॉक्टर से परामर्श के संबंध में कुछ भी पूछें!`;
  }

  // 4. ENGLISH (Default)
  if (query.includes('severe') || query.includes('emergency') || query.includes('pain') || query.includes('bleeding') || query.includes('doctor') || query.includes('hospital') || query.includes('clinic') || query.includes('specialist') || query.includes('gynecologist')) {
    return `🚨 **Severe Symptom Red Flags & Local Specialist Guidance**:

If you are experiencing any of the following clinical red flags, seek immediate medical care:
1. **Acute Severe Pelvic Pain**: Sharp, sudden lower quadrant pain may signal an ovarian cyst rupture or torsion.
2. **Prolonged Heavy Bleeding**: Soaking 2+ pads/hour for 2 consecutive hours or bleeding over 8 days.
3. **Amenorrhea > 90 Days**: Absent periods require an OB/GYN evaluation for endometrial lining protection.

🏥 **Verified Local PCOS Specialists Available Near You**:
- **Chennai**: Dr. Anitha Soundararajan (Apollo Spectra) & Dr. Kavitha (Fortis Malar)
- **Hyderabad**: Dr. Sravani Reddy (Rainbow BirthRight) & Dr. Venkat Ramana (Yashoda)
- **Bengaluru**: Dr. Divya Chandrasekhar (Manipal Hospital) & Aster CMI
- **Mumbai**: Dr. Pooja Bandekar (Lilavati Hospital, Bandra)
- **Delhi NCR**: Dr. Sunita Mittal (Max Super Speciality, Saket)
- **Coimbatore**: Dr. Selvi Radhakrishnan (KMCH)

📞 **Emergency Hotlines**:
- National Ambulance & Emergency Triage: **108**
- Women’s Emergency Hotline: **1091**

Tap the **"Find Local PCOS Specialists & Doctors"** button on your dashboard to filter by city, call clinics directly, or book consultations!`;
  }

  if (query.includes('phenotype') || query.includes('profile') || query.includes('result') || query.includes('score')) {
    return `Based on your symptom screening, you align with **${phenotypeCode}: ${phenotype}** with an overall symptom match of **${riskScore}%**.

🔑 **Primary Underlying Driver**: ${assessment?.phenotype?.primaryDriver || 'Insulin Resistance & Hyperandrogenism'}.
- **Menstrual Axis**: ${assessment?.subscores?.menstrual || 0}% likelihood
- **Androgen Axis**: ${assessment?.subscores?.androgen || 0}% likelihood
- **Metabolic Axis**: ${assessment?.subscores?.metabolic || 0}% likelihood

This indicates that stabilizing daily blood glucose and managing androgen receptor sensitivity are your two highest-leverage goals.`;
  }

  if (query.includes('diet') || query.includes('food') || query.includes('eat') || query.includes('breakfast') || query.includes('meal')) {
    return `Here is your customized **Hormone-Balancing Nutrition Strategy**:

🍳 **Optimal Breakfast (Within 90 mins of waking)**:
- 25-30g of protein (Pasture-raised eggs with spinach, or organic protein smoothie with flaxseeds).
- Healthy fats (1/2 avocado, pumpkin seeds).

🥗 **Low-GI Lunch & Dinner Rules**:
- Fill 50% of your plate with cruciferous & fibrous greens (broccoli, kale, arugula to clear excess estrogen).
- Pair any complex carb (quinoa, sweet potato) with clean protein and extra virgin olive oil to eliminate glucose spikes.

🌿 **Key Botanical Superfoods**:
- **Spearmint Tea**: 2 cups daily to lower free circulating testosterone.
- **Myo-Inositol (40:1 ratio)**: Restores ovarian insulin sensitivity.
- **Raw Pumpkin Seeds**: High in bioavailable Zinc to halt 5-alpha reductase and calm cystic acne.`;
  }

  if (query.includes('test') || query.includes('blood') || query.includes('lab') || query.includes('scan') || query.includes('ultrasound')) {
    return `Based on your profile, here are the most critical diagnostic tests to request from your doctor:

🩸 **Top Diagnostic Bloodwork**:
1. **Fasting Insulin & Fasting Glucose**: Calculates your HOMA-IR score (values > 1.5 indicate metabolic resistance).
2. **Total & Free Testosterone + DHEA-S**: Evaluates ovarian vs. adrenal androgen excess.
3. **Day 2–4 LH to FSH Ratio**: A ratio > 2:1 strongly correlates with follicular arrest in PCOS.
4. **Pelvic Transvaginal Ultrasound**: Evaluates Antral Follicle Count (AFC >= 20 per ovary) and ovarian volume (> 10 mL).
5. **TSH & Prolactin**: Essential to rule out thyroid dysfunction or hyperprolactinemia.`;
  }

  if (query.includes('acne') || query.includes('hair') || query.includes('hirsutism') || query.includes('shedding')) {
    return `Hormonal cystic acne along the jawline and hirsutism/hair thinning are driven by **excess free testosterone** converting into DHT via the enzyme *5-alpha reductase*.

✨ **Actionable Targeted Steps**:
1. **Spearmint Infusions**: Drink 2 steeped cups of organic spearmint tea daily (clinical studies show significant free testosterone reduction).
2. **Zinc Saturation**: Eat 2 tbsp raw pumpkin seeds daily or supplement with Zinc Picolinate (30mg).
3. **Limit Dairy & High-GI Sugars**: Dairy raises IGF-1 which over-activates skin sebaceous oil glands.
4. **Flaxseed Lignans**: Ground flaxseeds boost SHBG (the carrier protein that mops up excess testosterone).`;
  }

  if (query.includes('bmi') || query.includes('weight') || query.includes('belly') || query.includes('fat')) {
    return `Your calculated BMI is **${bmiVal} kg/m²** (${bmiData?.category || 'Optimal'}).

In PCOS, stubborn lower abdominal weight gain is primarily an **insulin-mediated response**, not a willpower issue. When cells become resistant to insulin, the body stores circulating glucose as visceral fat and signals intense cravings.

Focusing on **protein pacing (30g per meal)**, circadian overnight fasting (12 hours), and zone 2 walking is vastly more effective than extreme calorie cutting.`;
  }

  // General helpful fallback
  return `Hello ${patientName}! I am **Maya**, your dedicated PCOS Clinical Health Assistant. 

I can help you with:
- 🚨 **Severe Symptoms & Emergency Care**: Identifying red flags and finding verified doctors.
- 👩‍⚕️ **Local PCOS Specialists**: Top OB-GYNs, endocrinologists, and clinics in Chennai, Hyderabad, Bengaluru, Mumbai, Delhi, and Coimbatore.
- 🥗 **Diet & Meal Timing**: Low-GI recipes, superfoods, and glucose stabilization.
- 🧪 **Lab Tests & Bloodwork**: What to test, optimal timing, and targets.
- 📊 **Phenotype Interpretation**: Explaining your ${phenotypeCode} profile.

What would you like to explore today?`;
}
