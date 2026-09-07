import React from 'react';
import { Home, ClipboardList, Activity, Utensils, FlaskConical } from 'lucide-react';

export default function BottomNav({ currentTab, onSelectTab, isQuizComplete, t }) {
  const trans = t || {
    tabHome: 'Home',
    tabQuiz: 'Quiz',
    tabResults: 'Results',
    tabDiet: 'Diet Plan',
    tabTests: 'Lab Tests'
  };

  return (
    <nav className="bottom-nav-bar" aria-label="Mobile Navigation">
      <button
        className={`nav-tab-item ${currentTab === 'home' ? 'active' : ''}`}
        onClick={() => onSelectTab('home')}
        type="button"
      >
        {currentTab === 'home' && <div className="nav-indicator-dot" />}
        <Home className="nav-tab-icon" strokeWidth={currentTab === 'home' ? 2.5 : 2} />
        <span className="nav-tab-label">{trans.tabHome || 'Home'}</span>
      </button>

      <button
        className={`nav-tab-item ${currentTab === 'quiz' ? 'active' : ''}`}
        onClick={() => onSelectTab('quiz')}
        type="button"
      >
        {currentTab === 'quiz' && <div className="nav-indicator-dot" />}
        <ClipboardList className="nav-tab-icon" strokeWidth={currentTab === 'quiz' ? 2.5 : 2} />
        <span className="nav-tab-label">{trans.tabQuiz}</span>
      </button>

      <button
        className={`nav-tab-item ${currentTab === 'results' ? 'active' : ''}`}
        onClick={() => onSelectTab('results')}
        type="button"
      >
        {currentTab === 'results' && <div className="nav-indicator-dot" />}
        <Activity className="nav-tab-icon" strokeWidth={currentTab === 'results' ? 2.5 : 2} />
        <span className="nav-tab-label">{trans.tabResults}</span>
      </button>

      <button
        className={`nav-tab-item ${currentTab === 'diet' ? 'active' : ''}`}
        onClick={() => onSelectTab('diet')}
        type="button"
      >
        {currentTab === 'diet' && <div className="nav-indicator-dot" />}
        <Utensils className="nav-tab-icon" strokeWidth={currentTab === 'diet' ? 2.5 : 2} />
        <span className="nav-tab-label">{trans.tabDiet}</span>
      </button>

      <button
        className={`nav-tab-item ${currentTab === 'tests' ? 'active' : ''}`}
        onClick={() => onSelectTab('tests')}
        type="button"
      >
        {currentTab === 'tests' && <div className="nav-indicator-dot" />}
        <FlaskConical className="nav-tab-icon" strokeWidth={currentTab === 'tests' ? 2.5 : 2} />
        <span className="nav-tab-label">{trans.tabTests}</span>
      </button>
    </nav>
  );
}
