import React from 'react';
import {
  AlertTriangle,
  ShieldCheck,
  Activity,
  Utensils,
  FlaskConical,
  FileText,
  Stethoscope,
  Calendar,
  Sparkles,
  MapPin,
  HeartPulse
} from 'lucide-react';
import IconResolver from './IconResolver';
import { BitmojiRenderer } from './BitmojiCreator';

export default function AssessmentResultView({
  assessment,
  bmiData,
  user,
  onNavigateTab,
  onOpenDoctorModal,
  onOpenDoctorsModal,
  t
}) {
  if (!assessment) return null;

  const trans = t || {
    assistantName: 'Maya • Health Assistant',
    assistantGreeting: '"I\'ve analyzed your symptom patterns across Rotterdam criteria. Here is your personalized profile & daily guide!"',
    symptomMatch: 'Symptom Match',
    primaryDriver: 'Primary Driver',
    pillarBreakdown: 'Symptom Pillar Breakdown',
    rotterdamAxes: 'Rotterdam Axes',
    menstrualPillar: 'Menstrual & Ovulatory',
    androgenPillar: 'Androgen Excess Markers',
    metabolicPillar: 'Metabolic & Glycemic',
    keyIndicators: 'Identified Key Indicators',
    flagged: 'Flagged',
    doctorAdvisoryTitle: 'Healthcare Professional Advisory',
    doctorAdvisoryHigh: 'Your symptom pattern strongly suggests discussing these results with an OB-GYN, Endocrinologist, or Primary Care Physician for formal ultrasound imaging and bloodwork.',
    doctorAdvisoryLow: 'While your likelihood is currently low, continue monitoring any new menstrual changes, acne flare-ups, or unexplained weight shifts.',
    viewDoctorSummary: 'View / Print Doctor Consultation Summary',
    customDietBtn: 'Custom Diet Plan',
    dietSub: 'Daily meals & superfoods',
    labTestsBtn: 'Health Lab Tests',
    testsSub: 'Targeted bloodwork checklist'
  };

  const { compositeScore, riskCategory, riskBadgeColor, riskDescription, phenotype, subscores, flaggedSymptoms, shouldSeeDoctor } = assessment;

  const riskClass = compositeScore >= 65 ? 'risk-high' : compositeScore >= 35 ? 'risk-med' : 'risk-low';

  return (
    <div className="results-container">
      {/* Friendly Female Health Advisor / User Profile Card */}
      <div
        style={{
          backgroundColor: 'var(--bg-card)',
          border: '2px solid var(--primary-border)',
          borderRadius: '16px',
          padding: '14px 16px',
          display: 'flex',
          alignItems: 'center',
          gap: '14px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
        }}
      >
        {user?.customPhoto && user?.avatarType === 'custom' ? (
          <img
            src={user.customPhoto}
            alt="User"
            style={{
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '2.5px solid var(--primary)',
              flexShrink: 0
            }}
          />
        ) : (
          <BitmojiRenderer
            hairStyle={user?.bitmojiConfig?.hairStyle || 'waves'}
            hairColor={user?.bitmojiConfig?.hairColor || '#2D150B'}
            skinTone={user?.bitmojiConfig?.skinTone || '#FFEDD5'}
            outfitColor={user?.bitmojiConfig?.outfitColor || 'var(--primary)'}
            accessory={user?.bitmojiConfig?.accessory || 'flower'}
            size={52}
          />
        )}

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          <div style={{ fontSize: '14px', fontWeight: '800', color: 'var(--primary)' }}>
            {user?.name || trans.assistantName}
          </div>
          <div style={{ fontSize: '12px', color: 'var(--text-muted)', lineHeight: '1.35', fontWeight: '500' }}>
            {trans.assistantGreeting}
          </div>
        </div>
      </div>

      {/* Hero Score Card */}
      <div className="score-hero-card">
        <div className={`score-badge-solid score-badge-${riskBadgeColor}`}>
          {compositeScore >= 65 ? <AlertTriangle size={16} /> : compositeScore >= 35 ? <Activity size={16} /> : <ShieldCheck size={16} />}
          <span>{riskCategory}</span>
        </div>

        <div className={`score-gauge-ring ${riskClass}`}>
          <div className="score-big-num">
            {compositeScore}
            <span className="score-percent-sign">%</span>
          </div>
          <div className="score-sub-label">{trans.symptomMatch}</div>
        </div>

        <p className="hero-description-text">
          {riskDescription}
        </p>
      </div>

      {/* Phenotype Identification Box */}
      <div className="phenotype-highlight-card">
        <div className="phenotype-header">
          <div className="phenotype-icon-box">
            <IconResolver name={phenotype.icon || 'Sparkles'} size={26} color="#FFFFFF" strokeWidth={2.4} />
          </div>
          <div className="phenotype-title-wrap">
            <div className="phenotype-code">{phenotype.code}</div>
            <div className="phenotype-name">{phenotype.name}</div>
          </div>
        </div>

        <p className="phenotype-desc">{phenotype.description}</p>

        <div className="phenotype-driver-pill">
          <span style={{ color: 'var(--primary)', fontWeight: '800' }}>{trans.primaryDriver}:</span>
          <span>{phenotype.primaryDriver}</span>
        </div>
      </div>

      {/* Subscores Category Breakdown */}
      <div className="subscores-card">
        <div className="card-heading">
          <span>{trans.pillarBreakdown}</span>
          <span style={{ fontSize: '11.5px', fontWeight: '700', color: 'var(--text-light)' }}>{trans.rotterdamAxes}</span>
        </div>

        {/* Menstrual */}
        <div className="subscore-item">
          <div className="subscore-label-row">
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Calendar size={18} color="var(--primary)" strokeWidth={2.4} />
              {trans.menstrualPillar}
            </span>
            <span style={{ fontWeight: '800' }}>{subscores.menstrual}%</span>
          </div>
          <div className="subscore-bar-bg">
            <div
              className="subscore-bar-fill"
              style={{
                width: `${subscores.menstrual}%`,
                backgroundColor: 'var(--primary)'
              }}
            />
          </div>
        </div>

        {/* Androgens */}
        <div className="subscore-item">
          <div className="subscore-label-row">
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Sparkles size={18} color="#4338CA" strokeWidth={2.4} />
              {trans.androgenPillar}
            </span>
            <span style={{ fontWeight: '800' }}>{subscores.androgen}%</span>
          </div>
          <div className="subscore-bar-bg">
            <div
              className="subscore-bar-fill"
              style={{
                width: `${subscores.androgen}%`,
                backgroundColor: '#4338CA'
              }}
            />
          </div>
        </div>

        {/* Metabolic */}
        <div className="subscore-item">
          <div className="subscore-label-row">
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Activity size={18} color="#B45309" strokeWidth={2.4} />
              {trans.metabolicPillar}
            </span>
            <span style={{ fontWeight: '800' }}>{subscores.metabolic}%</span>
          </div>
          <div className="subscore-bar-bg">
            <div
              className="subscore-bar-fill"
              style={{
                width: `${subscores.metabolic}%`,
                backgroundColor: '#B45309'
              }}
            />
          </div>
        </div>
      </div>

      {/* Flagged Concerning Symptoms */}
      {flaggedSymptoms && flaggedSymptoms.length > 0 && (
        <div className="subscores-card">
          <div className="card-heading">
            <span>{trans.keyIndicators}</span>
            <span className="progress-category-pill pill-amber">
              {flaggedSymptoms.length} {trans.flagged}
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {flaggedSymptoms.map((sym, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 12px',
                  backgroundColor: 'var(--bg-subtle)',
                  borderRadius: '12px',
                  border: '1.5px solid var(--border-light)'
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '13.5px', fontWeight: '800', color: 'var(--text-main)' }}>
                    {sym.response}
                  </span>
                  <span style={{ fontSize: '11.5px', color: 'var(--text-light)', fontWeight: '500' }}>{sym.title}</span>
                </div>
                <span
                  className={`progress-category-pill ${sym.severity === 'high' ? 'pill-red' : 'pill-amber'}`}
                  style={{ fontSize: '10.5px' }}
                >
                  {sym.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Doctor Consultation Advisory Box */}
      <div className="doctor-advisory-box">
        <div className="doctor-advisory-title">
          <Stethoscope size={22} color="var(--red)" />
          <span>{trans.doctorAdvisoryTitle}</span>
        </div>
        <p className="doctor-advisory-text">
          {shouldSeeDoctor
            ? trans.doctorAdvisoryHigh
            : trans.doctorAdvisoryLow}
        </p>
        <div style={{ display: 'flex', gap: '8px', marginTop: '6px', flexWrap: 'wrap' }}>
          <button
            className="btn-primary"
            onClick={onOpenDoctorsModal}
            style={{
              flex: 1,
              backgroundColor: '#DC2626',
              borderColor: '#DC2626',
              fontSize: '12.5px',
              padding: '10px 14px'
            }}
          >
            <MapPin size={16} />
            {trans.findDoctorsBtn || 'Find Local Specialists'}
          </button>

          <button
            className="btn-dark"
            onClick={onOpenDoctorModal}
            style={{ flex: 1, fontSize: '12.5px', padding: '10px 14px' }}
          >
            <FileText size={16} />
            {trans.viewDoctorSummary}
          </button>
        </div>
      </div>

      {/* Recommended Next Steps Jump Grid */}
      <div className="quick-actions-grid">
        <div
          className="action-tile-btn"
          onClick={() => onNavigateTab('diet')}
          role="button"
          tabIndex={0}
        >
          <div className="action-tile-icon" style={{ backgroundColor: 'var(--primary)' }}>
            <Utensils size={24} />
          </div>
          <div className="action-tile-title">{trans.customDietBtn}</div>
          <div className="action-tile-sub">{trans.dietSub}</div>
        </div>

        <div
          className="action-tile-btn"
          onClick={() => onNavigateTab('tests')}
          role="button"
          tabIndex={0}
        >
          <div className="action-tile-icon" style={{ backgroundColor: '#4338CA' }}>
            <FlaskConical size={24} />
          </div>
          <div className="action-tile-title">{trans.labTestsBtn}</div>
          <div className="action-tile-sub">{trans.testsSub}</div>
        </div>
      </div>
    </div>
  );
}
