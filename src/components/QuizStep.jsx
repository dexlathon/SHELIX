import React from 'react';
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';
import IconResolver from './IconResolver';
import BMICalculator from './BMICalculator';
import { QUIZ_CATEGORIES } from '../data/questions';

export default function QuizStep({
  questionIndex,
  totalQuestions,
  currentQuestion,
  answers,
  bmiData,
  onBMIChange,
  onSelectOption,
  onPrev,
  onNext,
  onSubmitQuiz,
  activeCategory,
  onCategorySelect,
  t
}) {
  const trans = t || {
    back: 'Back',
    nextQuestion: 'Next Question',
    analyzePattern: 'Analyze Pattern'
  };

  const selectedOptionId = answers[currentQuestion.id];
  const isLastQuestion = questionIndex === totalQuestions - 1;

  // Localized category titles
  const getCategoryTitle = (catId) => {
    if (catId === 'menstrual') return trans.catMenstrual || 'Menstrual Pattern';
    if (catId === 'androgen') return trans.catAndrogen || 'Androgen Signals';
    if (catId === 'metabolic') return trans.catMetabolic || 'Metabolic & Insulin';
    return catId;
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      {/* Category Tabs */}
      <div className="category-pills-row">
        {QUIZ_CATEGORIES.map((cat) => {
          const isActive = cat.id === currentQuestion.category;
          return (
            <button
              key={cat.id}
              className={`category-tab-btn ${isActive ? 'active' : ''}`}
              onClick={() => onCategorySelect(cat.id)}
            >
              <div className="category-tab-icon">
                <IconResolver name={cat.icon} size={18} strokeWidth={2.5} />
              </div>
              <div className="category-tab-title">{getCategoryTitle(cat.id)}</div>
            </button>
          );
        })}
      </div>

      {/* If we're on the metabolic category first question, include the BMI calculator */}
      {currentQuestion.category === 'metabolic' && currentQuestion.id === 'weight_changes' && (
        <BMICalculator bmiData={bmiData} onBMIChange={onBMIChange} t={t} />
      )}

      {/* Main Question Card */}
      <div className="quiz-card">
        <div className="question-header">
          <div className="question-icon-badge">
            <IconResolver name={currentQuestion.icon} size={26} color="#FFFFFF" strokeWidth={2.4} />
          </div>
          <div className="question-text-wrap">
            <div className="question-title">{currentQuestion.title}</div>
            <div className="question-subtitle">{currentQuestion.subtitle}</div>
          </div>
        </div>

        {/* Options Grid (Large Attractive Icon-Driven Tiles) */}
        <div className="options-grid">
          {currentQuestion.options.map((option) => {
            const isSelected = selectedOptionId === option.id;
            return (
              <div
                key={option.id}
                className={`option-tile ${isSelected ? 'selected' : ''}`}
                onClick={() => onSelectOption(currentQuestion.id, option.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    onSelectOption(currentQuestion.id, option.id);
                  }
                }}
              >
                <div className="option-icon-box">
                  <IconResolver
                    name={option.icon}
                    size={24}
                    strokeWidth={2.4}
                    color={isSelected ? '#FFFFFF' : 'var(--primary)'}
                  />
                </div>

                <div className="option-content">
                  <div className="option-label">
                    <span>{option.label}</span>
                    {option.tag && (
                      <span className="option-tag-badge">{option.tag}</span>
                    )}
                  </div>
                  <div className="option-sublabel">{option.sublabel}</div>
                </div>

                <div className="option-radio-indicator">
                  {isSelected && <div className="option-radio-dot" />}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quiz Navigation Buttons */}
      <div className="quiz-nav-row">
        <button
          className="btn-secondary"
          onClick={onPrev}
          disabled={questionIndex === 0}
        >
          <ArrowLeft size={16} />
          {trans.back}
        </button>

        {isLastQuestion ? (
          <button
            className="btn-primary"
            onClick={onSubmitQuiz}
            disabled={!selectedOptionId}
          >
            <Sparkles size={18} />
            {trans.analyzePattern}
          </button>
        ) : (
          <button
            className="btn-primary"
            onClick={onNext}
            disabled={!selectedOptionId}
          >
            {trans.nextQuestion}
            <ArrowRight size={16} />
          </button>
        )}
      </div>
    </div>
  );
}
