import React from 'react';
import {
  Sparkles,
  ClipboardList,
  Activity,
  Utensils,
  FlaskConical,
  FileText,
  AlertTriangle,
  ShieldCheck,
  Calendar,
  Scale,
  ChevronRight,
  Lightbulb,
  Heart,
  Stethoscope,
  Crown,
  ArrowRight
} from 'lucide-react';
import { BitmojiRenderer } from './BitmojiCreator';

export default function HomeDashboardView({
  assessment,
  bmiData,
  user,
  subscription,
  onStartQuiz,
  onNavigateTab,
  onOpenDoctorModal,
  onOpenDoctorsModal,
  onOpenSubscription,
  onOpenProfile,
  t
}) {
  const trans = t || {
    patientDashboard: 'Patient Health Dashboard',
    patientOverview: 'Existing Health Profile & Screening Summary',
    startQuizBtn: 'Start Symptom Pattern Quiz',
    retakeQuizBtn: 'Retake Screening Quiz',
    existingRiskScore: 'Current Risk Match',
    existingPhenotype: 'Identified Phenotype',
    patientVitals: 'Patient Physical Vitals',
    lastAssessed: 'Last Assessed',
    flaggedIndicators: 'Existing Flagged Symptoms',
    quickHealthActions: 'Quick Health Actions',
    findDoctorsBtn: 'Find Local PCOS Doctors & Clinics',
    doctorsSub: 'Verified OB/GYN, Endo & 24/7 ER',
    emergencyCareTitle: 'Severe Symptom Red Flags & Emergency Care',
    dailyTipTitle: "Maya's Daily PCOS Health Insight",
    dailyTipDesc: 'Pairing morning complex carbohydrates with 25-30g of clean protein prevents insulin surges that trigger ovarian androgen production.'
  };

  const hasAssessment = !!assessment;
  const compositeScore = assessment?.compositeScore || 0;
  const riskCategory = assessment?.riskCategory || 'Not Assessed';
  const riskBadgeColor = assessment?.riskBadgeColor || 'emerald';
  const phenotype = assessment?.phenotype || {
    code: 'Screening Ready',
    name: 'Take quiz to identify Rotterdam phenotype',
    primaryDriver: 'Pending Assessment'
  };
  const subscores = assessment?.subscores || { menstrual: 0, androgen: 0, metabolic: 0 };
  const flaggedSymptoms = assessment?.flaggedSymptoms || [];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {/* 1. Patient Profile Welcome Banner */}
      <div
        style={{
          backgroundColor: 'var(--bg-card)',
          border: '2px solid var(--border-mid)',
          borderRadius: '20px',
          padding: '18px 16px',
          display: 'flex',
          alignItems: 'center',
          gap: '14px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
        }}
      >
        <div onClick={onOpenProfile} style={{ cursor: 'pointer' }} title="Edit Profile">
          {user?.customPhoto && user?.avatarType === 'custom' ? (
            <img
              src={user.customPhoto}
              alt={user.name}
              style={{
                width: '58px',
                height: '58px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '3px solid var(--primary)',
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
              size={58}
            />
          )}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '16px', fontWeight: '800', color: 'var(--text-main)' }}>
              {user?.name || 'Patient'}
            </span>
            <span className={`progress-category-pill ${user?.isLoggedIn ? 'pill-emerald' : 'pill-amber'}`}>
              {user?.isLoggedIn ? 'Account Synced' : 'Guest Mode'}
            </span>
          </div>
          <span style={{ fontSize: '11.5px', color: 'var(--text-muted)' }}>
            {user?.isLoggedIn ? user.email : 'Tap avatar to customize or sign in'}
          </span>
          <span style={{ fontSize: '11px', color: 'var(--text-light)', fontWeight: '600' }}>
            {trans.lastAssessed}: {new Date().toLocaleDateString()}
          </span>
        </div>
      </div>

      {/* 30-Day Free Trial & Pro Membership Card */}
      <div
        style={{
          backgroundColor: subscription?.isPremium ? '#0F172A' : '#FEF3C7',
          border: `2px solid ${subscription?.isPremium ? '#334155' : '#F59E0B'}`,
          borderRadius: '16px',
          padding: '12px 14px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '10px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              backgroundColor: '#F59E0B',
              color: '#000000',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}
          >
            <Crown size={18} />
          </div>
          <div>
            <div
              style={{
                fontSize: '12.5px',
                fontWeight: '800',
                color: subscription?.isPremium ? '#F8FAFC' : '#92400E'
              }}
            >
              {subscription?.isPremium
                ? `PCOS Pro Active (${subscription.planName})`
                : `30-Day Free Trial (${subscription?.trialDaysLeft || 28} Days Remaining)`}
            </div>
            <div
              style={{
                fontSize: '10.5px',
                color: subscription?.isPremium ? '#94A3B8' : '#B45309',
                fontWeight: '600'
              }}
            >
              {subscription?.isPremium
                ? 'Unlimited Maya AI, Personalized Diet & Doctor Discounts'
                : 'Enjoy all features free for 1 month • Upgrade for continuous care'}
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={onOpenSubscription}
          style={{
            backgroundColor: '#F59E0B',
            color: '#000000',
            border: 'none',
            borderRadius: '8px',
            padding: '6px 12px',
            fontSize: '11px',
            fontWeight: '900',
            cursor: 'pointer',
            whiteSpace: 'nowrap'
          }}
        >
          {subscription?.isPremium ? 'Manage' : 'Upgrade'}
        </button>
      </div>

      {/* 2. Primary Quiz Call-to-Action Card */}
      <div
        style={{
          backgroundColor: 'var(--primary)',
          color: '#FFFFFF',
          borderRadius: '20px',
          padding: '20px 18px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          boxShadow: '0 4px 10px rgba(29, 78, 216, 0.2)'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span className="progress-category-pill pill-dark">
            AI Screening Engine
          </span>
          <span style={{ fontSize: '11.5px', fontWeight: '800', color: '#DBEAFE' }}>
            9 Icon Questions
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: '900', lineHeight: '1.25' }}>
            PCOS Symptom Pattern Analyzer
          </h2>
          <p style={{ fontSize: '12.5px', color: '#DBEAFE', lineHeight: '1.4' }}>
            Analyze menstrual irregularity, androgen excess, and insulin resistance patterns to determine your clinical phenotype and customized diet plan.
          </p>
        </div>

        <button
          className="btn-dark"
          onClick={onStartQuiz}
          style={{
            backgroundColor: '#0F172A',
            color: '#FFFFFF',
            borderColor: '#0F172A',
            padding: '12px 18px',
            fontSize: '14px',
            fontWeight: '800',
            marginTop: '4px'
          }}
        >
          <ClipboardList size={18} />
          {hasAssessment ? trans.retakeQuizBtn : trans.startQuizBtn}
          <ArrowRight size={16} />
        </button>
      </div>

      {/* 3. Existing Health Overview & Score Summary */}
      {hasAssessment && (
        <div className="subscores-card">
          <div className="card-heading">
            <span>{trans.patientOverview}</span>
            <span
              className={`progress-category-pill score-badge-${riskBadgeColor}`}
              style={{ fontSize: '10.5px' }}
            >
              {riskCategory}
            </span>
          </div>

          {/* Quick Metrics Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            {/* Risk Score */}
            <div
              style={{
                backgroundColor: 'var(--bg-subtle)',
                border: '1.5px solid var(--border-mid)',
                borderRadius: '14px',
                padding: '12px',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px'
              }}
            >
              <span style={{ fontSize: '11px', color: 'var(--text-light)', fontWeight: '700', textTransform: 'uppercase' }}>
                {trans.existingRiskScore}
              </span>
              <div style={{ fontSize: '24px', fontWeight: '900', color: 'var(--primary)' }}>
                {compositeScore}%
              </div>
              <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                Rotterdam Likelihood
              </span>
            </div>

            {/* Calculated BMI */}
            <div
              style={{
                backgroundColor: 'var(--bg-subtle)',
                border: '1.5px solid var(--border-mid)',
                borderRadius: '14px',
                padding: '12px',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px'
              }}
            >
              <span style={{ fontSize: '11px', color: 'var(--text-light)', fontWeight: '700', textTransform: 'uppercase' }}>
                Body Mass Index (BMI)
              </span>
              <div style={{ fontSize: '22px', fontWeight: '900', color: 'var(--text-main)' }}>
                {bmiData?.bmi || 24.5} <span style={{ fontSize: '12px', color: 'var(--text-light)' }}>kg/m²</span>
              </div>
              <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                {bmiData?.category || 'Optimal'}
              </span>
            </div>
          </div>

          {/* Existing Phenotype Box */}
          <div
            style={{
              backgroundColor: 'var(--primary-subtle)',
              border: '2px solid var(--primary-border)',
              borderRadius: '14px',
              padding: '14px',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--primary)', textTransform: 'uppercase' }}>
                {phenotype.code}
              </span>
              <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: '700' }}>
                Rotterdam Criterion
              </span>
            </div>
            <div style={{ fontSize: '14.5px', fontWeight: '800', color: 'var(--text-main)' }}>
              {phenotype.name}
            </div>
            <div style={{ fontSize: '11.5px', color: 'var(--text-muted)' }}>
              {phenotype.primaryDriver}
            </div>
          </div>

          {/* Pillar Subscores */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '4px' }}>
            <div className="subscore-item">
              <div className="subscore-label-row">
                <span style={{ fontSize: '12px', fontWeight: '700' }}>Menstrual & Ovulatory</span>
                <span style={{ fontSize: '12px', fontWeight: '800' }}>{subscores.menstrual}%</span>
              </div>
              <div className="subscore-bar-bg">
                <div className="subscore-bar-fill" style={{ width: `${subscores.menstrual}%`, backgroundColor: 'var(--primary)' }} />
              </div>
            </div>

            <div className="subscore-item">
              <div className="subscore-label-row">
                <span style={{ fontSize: '12px', fontWeight: '700' }}>Androgen Excess</span>
                <span style={{ fontSize: '12px', fontWeight: '800' }}>{subscores.androgen}%</span>
              </div>
              <div className="subscore-bar-bg">
                <div className="subscore-bar-fill" style={{ width: `${subscores.androgen}%`, backgroundColor: '#4338CA' }} />
              </div>
            </div>

            <div className="subscore-item">
              <div className="subscore-label-row">
                <span style={{ fontSize: '12px', fontWeight: '700' }}>Metabolic & Insulin</span>
                <span style={{ fontSize: '12px', fontWeight: '800' }}>{subscores.metabolic}%</span>
              </div>
              <div className="subscore-bar-bg">
                <div className="subscore-bar-fill" style={{ width: `${subscores.metabolic}%`, backgroundColor: '#B45309' }} />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. Flagged Existing Symptoms Carousel / List */}
      {flaggedSymptoms && flaggedSymptoms.length > 0 && (
        <div className="subscores-card">
          <div className="card-heading">
            <span>{trans.flaggedIndicators}</span>
            <span className="progress-category-pill pill-amber" style={{ fontSize: '10.5px' }}>
              {flaggedSymptoms.length} Reported
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
                  <span style={{ fontSize: '13px', fontWeight: '800', color: 'var(--text-main)' }}>
                    {sym.response}
                  </span>
                  <span style={{ fontSize: '11px', color: 'var(--text-light)' }}>{sym.title}</span>
                </div>
                <span
                  className={`progress-category-pill ${sym.severity === 'high' ? 'pill-red' : 'pill-amber'}`}
                  style={{ fontSize: '10px' }}
                >
                  {sym.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 5. Quick Health Action Hub */}
      <div className="subscores-card">
        <div className="card-heading">
          <span>{trans.quickHealthActions}</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
          <button
            type="button"
            className="action-tile-btn"
            onClick={() => onNavigateTab('results')}
            style={{ padding: '12px 6px' }}
          >
            <div className="action-tile-icon" style={{ backgroundColor: 'var(--primary)', width: '38px', height: '38px' }}>
              <Activity size={20} />
            </div>
            <span style={{ fontSize: '11.5px', fontWeight: '800', color: 'var(--text-main)' }}>
              Assessment
            </span>
          </button>

          <button
            type="button"
            className="action-tile-btn"
            onClick={() => onNavigateTab('diet')}
            style={{ padding: '12px 6px' }}
          >
            <div className="action-tile-icon" style={{ backgroundColor: '#047857', width: '38px', height: '38px' }}>
              <Utensils size={20} />
            </div>
            <span style={{ fontSize: '11.5px', fontWeight: '800', color: 'var(--text-main)' }}>
              Diet Plan
            </span>
          </button>

          <button
            type="button"
            className="action-tile-btn"
            onClick={() => onNavigateTab('tests')}
            style={{ padding: '12px 6px' }}
          >
            <div className="action-tile-icon" style={{ backgroundColor: '#4338CA', width: '38px', height: '38px' }}>
              <FlaskConical size={20} />
            </div>
            <span style={{ fontSize: '11.5px', fontWeight: '800', color: 'var(--text-main)' }}>
              Lab Tests
            </span>
          </button>
        </div>

        {/* Find Local Doctors & Emergency Clinic Button */}
        <button
          className="btn-primary"
          onClick={onOpenDoctorsModal}
          style={{
            marginTop: '6px',
            backgroundColor: '#DC2626',
            borderColor: '#DC2626',
            fontSize: '13px'
          }}
        >
          <Stethoscope size={16} />
          {trans.findDoctorsBtn || 'Find Local PCOS Doctors & Clinics'}
        </button>

        <button
          className="btn-dark"
          onClick={onOpenDoctorModal}
          style={{ marginTop: '2px', fontSize: '13px' }}
        >
          <FileText size={16} />
          {trans.viewDoctorSummary}
        </button>
      </div>

      {/* Severe Symptom Red Flags Warning Banner if High Risk or Acute Symptoms */}
      {compositeScore >= 65 && (
        <div
          style={{
            backgroundColor: '#FEF2F2',
            border: '2px solid #EF4444',
            borderRadius: '16px',
            padding: '14px 16px',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '12px'
          }}
        >
          <div
            style={{
              width: '36px',
              height: '36px',
              minWidth: '36px',
              backgroundColor: '#DC2626',
              color: '#FFFFFF',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <AlertTriangle size={20} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', flex: 1 }}>
            <span style={{ fontSize: '13px', fontWeight: '800', color: '#991B1B', textTransform: 'uppercase' }}>
              {trans.emergencyCareTitle || 'Severe Symptom Alert'}
            </span>
            <p style={{ fontSize: '11.5px', color: '#7F1D1D', margin: 0, lineHeight: '1.4' }}>
              {trans.emergencyCareDesc ||
                'High symptom severity detected. If you have acute pelvic pain, bleeding over 8 days, or sudden crashes, consult a local OB-GYN or Endocrinologist.'}
            </p>
            <button
              type="button"
              onClick={onOpenDoctorsModal}
              style={{
                marginTop: '4px',
                alignSelf: 'flex-start',
                backgroundColor: '#DC2626',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '6px',
                padding: '6px 12px',
                fontSize: '11.5px',
                fontWeight: '800',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <Stethoscope size={13} />
              {trans.findDoctorsBtn || 'Find Local Specialists Now'}
            </button>
          </div>
        </div>
      )}

      {/* 6. Daily AI Health Assistant Tip */}
      <div
        style={{
          backgroundColor: 'var(--bg-subtle)',
          border: '1.5px solid var(--border-mid)',
          borderRadius: '16px',
          padding: '14px 16px',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '12px'
        }}
      >
        <div
          style={{
            width: '36px',
            height: '36px',
            minWidth: '36px',
            backgroundColor: '#FEF3C7',
            color: '#B45309',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Lightbulb size={20} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
          <span style={{ fontSize: '13px', fontWeight: '800', color: 'var(--text-main)' }}>
            {trans.dailyTipTitle}
          </span>
          <p style={{ fontSize: '12px', color: 'var(--text-muted)', lineHeight: '1.35' }}>
            {trans.dailyTipDesc}
          </p>
        </div>
      </div>
    </div>
  );
}
