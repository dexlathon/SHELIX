import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles } from 'lucide-react';
import Navbar from './components/Navbar';
import HomeDashboardView from './components/HomeDashboardView';
import QuizStep from './components/QuizStep';
import AssessmentResultView from './components/AssessmentResultView';
import DietPlanView from './components/DietPlanView';
import LabTestsView from './components/LabTestsView';
import DoctorSummaryModal from './components/DoctorSummaryModal';
import ProfileModal from './components/ProfileModal';
import AuthModal from './components/AuthModal';
import AIAssistantChatModal from './components/AIAssistantChatModal';
import LocalDoctorsModal from './components/LocalDoctorsModal';
import SubscriptionModal from './components/SubscriptionModal';
import BottomNav from './components/BottomNav';
import { QUESTIONS, QUIZ_CATEGORIES } from './data/questions';
import { classifyPCOSPattern, calculateBMI } from './engine/mlClassifier';
import { THEMES } from './data/themes';
import { TRANSLATIONS } from './data/translations';
import { getSubscriptionStatus } from './data/subscriptions';

export default function App() {
  const [currentTab, setCurrentTab] = useState('home'); // Default to 'home' Patient Dashboard
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Modals
  const [isDoctorModalOpen, setIsDoctorModalOpen] = useState(false);
  const [isDoctorsModalOpen, setIsDoctorsModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isAIAssistantOpen, setIsAIAssistantOpen] = useState(false);
  const [isSubscriptionModalOpen, setIsSubscriptionModalOpen] = useState(false);

  // Subscription State (30-day free trial or Pro)
  const [subscription, setSubscription] = useState(() => getSubscriptionStatus());

  // User Profile & Authentication State (Checked from active session)
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem('pcos_active_session');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      // ignore
    }
    return {
      name: 'Sarah Mitchell',
      email: '',
      avatarId: 'maya',
      avatarType: 'bitmoji',
      isLoggedIn: false,
      bitmojiConfig: {
        hairStyle: 'waves',
        hairColor: '#2D150B',
        skinTone: '#FFEDD5',
        outfitColor: '#1D4ED8',
        accessory: 'flower'
      }
    };
  });

  // Theme & Night Mode States
  const [currentThemeId, setCurrentThemeId] = useState('royal_blue');
  const [isNightMode, setIsNightMode] = useState(false);

  // Language State
  const [currentLang, setCurrentLang] = useState('en');
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;

  // Apply Theme CSS variables dynamically
  useEffect(() => {
    const theme = THEMES.find((th) => th.id === currentThemeId) || THEMES[0];
    const root = document.documentElement;
    root.style.setProperty('--primary', theme.primary);
    root.style.setProperty('--primary-hover', theme.primaryHover);
    root.style.setProperty('--primary-active', theme.primaryActive);
    root.style.setProperty('--primary-subtle', isNightMode ? theme.primaryActive : theme.primarySubtle);
    root.style.setProperty('--primary-border', isNightMode ? theme.primaryHover : theme.primaryBorder);
  }, [currentThemeId, isNightMode]);

  // BMI Data
  const [bmiData, setBmiData] = useState(() => calculateBMI(165, 76));

  // Answers State
  const [answers, setAnswers] = useState({
    cycle_regularity: 'long',
    period_flow: 'flow_heavy',
    ovulation_signs: 'ov_rare',
    facial_body_hair: 'hair_moderate',
    acne_pattern: 'acne_cystic',
    hair_thinning: 'thinning_moderate',
    weight_changes: 'weight_central',
    skin_insulin_markers: 'skin_acanthosis',
    energy_cravings: 'energy_severe_crash'
  });

  const [isQuizComplete, setIsQuizComplete] = useState(true);
  const [assessment, setAssessment] = useState(null);

  useEffect(() => {
    const result = classifyPCOSPattern(answers, bmiData, QUESTIONS);
    setAssessment(result);
  }, [answers, bmiData]);

  const handleSelectOption = (questionId, optionId) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: optionId
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      handleSubmitQuiz();
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleCategorySelect = (categoryId) => {
    const targetIdx = QUESTIONS.findIndex((q) => q.category === categoryId);
    if (targetIdx !== -1) {
      setCurrentQuestionIndex(targetIdx);
    }
  };

  const handleSubmitQuiz = () => {
    setIsQuizComplete(true);
    setCurrentTab('results');

    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch (e) {
      // ignore
    }
  };

  const handleResetQuiz = () => {
    setAnswers({});
    setCurrentQuestionIndex(0);
    setIsQuizComplete(false);
    setCurrentTab('quiz');
  };

  const handleStartQuizFromHome = () => {
    setCurrentTab('quiz');
  };

  const loadPreset = (presetName) => {
    if (presetName === 'classic_metabolic') {
      setAnswers({
        cycle_regularity: 'irregular',
        period_flow: 'flow_heavy',
        ovulation_signs: 'ov_never',
        facial_body_hair: 'hair_severe',
        acne_pattern: 'acne_cystic',
        hair_thinning: 'thinning_crown',
        weight_changes: 'weight_central',
        skin_insulin_markers: 'skin_acanthosis',
        energy_cravings: 'energy_severe_crash'
      });
      setBmiData(calculateBMI(162, 82));
    } else if (presetName === 'lean_androgenic') {
      setAnswers({
        cycle_regularity: 'long',
        period_flow: 'flow_scanty',
        ovulation_signs: 'ov_rare',
        facial_body_hair: 'hair_moderate',
        acne_pattern: 'acne_cystic',
        hair_thinning: 'thinning_moderate',
        weight_changes: 'weight_stable',
        skin_insulin_markers: 'skin_none',
        energy_cravings: 'energy_cravings_mild'
      });
      setBmiData(calculateBMI(168, 56));
    } else if (presetName === 'normal_baseline') {
      setAnswers({
        cycle_regularity: 'regular',
        period_flow: 'flow_normal',
        ovulation_signs: 'ov_yes',
        facial_body_hair: 'hair_none',
        acne_pattern: 'acne_none',
        hair_thinning: 'thinning_none',
        weight_changes: 'weight_stable',
        skin_insulin_markers: 'skin_none',
        energy_cravings: 'energy_steady'
      });
      setBmiData(calculateBMI(165, 60));
    }
    setIsQuizComplete(true);
    setCurrentTab('home');
  };

  const handleLogout = () => {
    localStorage.removeItem('pcos_active_session');
    setUser({
      name: 'Guest User',
      email: '',
      avatarId: 'maya',
      avatarType: 'bitmoji',
      isLoggedIn: false
    });
  };

  const currentQ = QUESTIONS[currentQuestionIndex];
  const currentCategory = QUIZ_CATEGORIES.find((c) => c.id === currentQ.category);
  const progressPercent = Math.round(((currentQuestionIndex + 1) / QUESTIONS.length) * 100);

  return (
    <div className={`app-viewport-wrapper ${isNightMode ? 'night-mode' : ''}`}>
      {/* Top Quick Profile Switcher bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '12px',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}
      >
        <span style={{ fontSize: '11px', fontWeight: '800', color: isNightMode ? '#94A3B8' : '#64748B', textTransform: 'uppercase' }}>
          {t.quickProfiles}
        </span>
        <button
          className="progress-category-pill pill-red"
          style={{ cursor: 'pointer', border: 'none', fontSize: '11px' }}
          onClick={() => loadPreset('classic_metabolic')}
        >
          {t.highRisk}
        </button>
        <button
          className="progress-category-pill pill-purple"
          style={{ cursor: 'pointer', border: 'none', fontSize: '11px' }}
          onClick={() => loadPreset('lean_androgenic')}
        >
          {t.moderateRisk}
        </button>
        <button
          className="progress-category-pill pill-emerald"
          style={{ cursor: 'pointer', border: 'none', fontSize: '11px' }}
          onClick={() => loadPreset('normal_baseline')}
        >
          {t.lowRisk}
        </button>
      </div>

      {/* Main Simulated Phone Frame */}
      <div className={`mobile-device-frame ${isExpanded ? 'expanded-mode' : ''}`}>
        {/* Phone Top Notch Speaker */}
        <div className="phone-notch-bar">
          <div className="phone-speaker" />
          <div className="phone-camera" />
        </div>

        {/* Mobile App Header with Profile Trigger & Top Corner Health Emoji */}
        {/* Mobile App Header with Profile Trigger & Top Corner Health Emoji */}
        <Navbar
          onReset={handleResetQuiz}
          isExpanded={isExpanded}
          onToggleExpand={() => setIsExpanded(!isExpanded)}
          currentTab={currentTab}
          isNightMode={isNightMode}
          onToggleNightMode={() => setIsNightMode(!isNightMode)}
          currentThemeId={currentThemeId}
          onSelectTheme={setCurrentThemeId}
          currentLang={currentLang}
          onSelectLang={setCurrentLang}
          user={user}
          assessment={assessment}
          subscription={subscription}
          onOpenProfile={() => setIsProfileModalOpen(true)}
          onOpenAuth={() => setIsAuthModalOpen(true)}
          onOpenAIAssistant={() => setIsAIAssistantOpen(true)}
          onOpenSubscription={() => setIsSubscriptionModalOpen(true)}
          t={t}
        />

        {/* Progress bar (Visible in Quiz tab) */}
        {currentTab === 'quiz' && (
          <div className="quiz-progress-section">
            <div className="progress-header">
              <span className={`progress-category-pill pill-${currentCategory?.badgeColor || 'teal'}`}>
                {currentCategory?.title}
              </span>
              <span className="progress-step-text">
                {t.questionOf} {currentQuestionIndex + 1} {t.of} {QUESTIONS.length}
              </span>
            </div>
            <div className="progress-track">
              <div
                className="progress-fill"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        )}

        {/* Scrollable View Area */}
        <main className="app-scroll-content">
          {currentTab === 'home' && (
            <HomeDashboardView
              assessment={assessment}
              bmiData={bmiData}
              user={user}
              subscription={subscription}
              onStartQuiz={handleStartQuizFromHome}
              onNavigateTab={(tab) => setCurrentTab(tab)}
              onOpenDoctorModal={() => setIsDoctorModalOpen(true)}
              onOpenDoctorsModal={() => setIsDoctorsModalOpen(true)}
              onOpenSubscription={() => setIsSubscriptionModalOpen(true)}
              onOpenProfile={() => setIsProfileModalOpen(true)}
              t={t}
            />
          )}

          {currentTab === 'quiz' && (
            <QuizStep
              questionIndex={currentQuestionIndex}
              totalQuestions={QUESTIONS.length}
              currentQuestion={currentQ}
              answers={answers}
              bmiData={bmiData}
              onBMIChange={setBmiData}
              onSelectOption={handleSelectOption}
              onPrev={handlePrev}
              onNext={handleNext}
              onSubmitQuiz={handleSubmitQuiz}
              activeCategory={currentQ.category}
              onCategorySelect={handleCategorySelect}
              t={t}
            />
          )}

          {currentTab === 'results' && (
            <AssessmentResultView
              assessment={assessment}
              bmiData={bmiData}
              user={user}
              onNavigateTab={(tab) => setCurrentTab(tab)}
              onOpenDoctorModal={() => setIsDoctorModalOpen(true)}
              onOpenDoctorsModal={() => setIsDoctorsModalOpen(true)}
              t={t}
            />
          )}

          {currentTab === 'diet' && (
            <DietPlanView assessment={assessment} t={t} />
          )}

          {currentTab === 'tests' && (
            <LabTestsView
              assessment={assessment}
              onOpenDoctorModal={() => setIsDoctorModalOpen(true)}
              t={t}
            />
          )}
        </main>

        {/* Maya AI Floating Action Button (FAB) (Bottom-Right) */}
        <button
          className="maya-fab-btn"
          onClick={() => setIsAIAssistantOpen(true)}
          title="Chat with Maya AI Clinical Assistant"
          aria-label="Maya AI Assistant"
        >
          <Sparkles size={16} />
          <span>Maya AI</span>
        </button>

        {/* Mobile Bottom Navigation Bar */}
        <BottomNav
          currentTab={currentTab}
          onSelectTab={(tab) => setCurrentTab(tab)}
          isQuizComplete={isQuizComplete}
          t={t}
        />
      </div>

      {/* Maya AI Assistant Clinical Chat Modal */}
      <AIAssistantChatModal
        isOpen={isAIAssistantOpen}
        onClose={() => setIsAIAssistantOpen(false)}
        assessment={assessment}
        bmiData={bmiData}
        user={user}
        currentLang={currentLang}
        onOpenDoctorsModal={() => setIsDoctorsModalOpen(true)}
        t={t}
      />

      {/* Local PCOS Specialists & Severe Emergency Care Modal */}
      <LocalDoctorsModal
        isOpen={isDoctorsModalOpen}
        onClose={() => setIsDoctorsModalOpen(false)}
        assessment={assessment}
        user={user}
        onOpenDoctorSummary={() => setIsDoctorModalOpen(true)}
        t={t}
      />

      {/* Subscription & 30-Day Free Trial Modal */}
      <SubscriptionModal
        isOpen={isSubscriptionModalOpen}
        onClose={() => setIsSubscriptionModalOpen(false)}
        subscription={subscription}
        onUpdateSubscription={(sub) => setSubscription(sub)}
        user={user}
        t={t}
      />

      {/* Profile & Avatar Selector Modal */}
      <ProfileModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
        user={user}
        subscription={subscription}
        onUpdateProfile={(updated) => {
          setUser(updated);
          localStorage.setItem('pcos_active_session', JSON.stringify(updated));
        }}
        onLogout={handleLogout}
        onOpenAuth={() => {
          setIsProfileModalOpen(false);
          setIsAuthModalOpen(true);
        }}
        onOpenSubscription={() => {
          setIsProfileModalOpen(false);
          setIsSubscriptionModalOpen(true);
        }}
        t={t}
      />

      {/* Real Email Login & Sign Up Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onLoginSuccess={(loggedInUser) => setUser(loggedInUser)}
        currentAvatarConfig={user.bitmojiConfig}
        t={t}
      />

      {/* Doctor Summary Modal */}
      <DoctorSummaryModal
        isOpen={isDoctorModalOpen}
        onClose={() => setIsDoctorModalOpen(false)}
        assessment={assessment}
        bmiData={bmiData}
        answers={answers}
        questionsList={QUESTIONS}
        t={t}
      />
    </div>
  );
}
