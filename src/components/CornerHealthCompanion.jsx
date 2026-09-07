import React, { useState } from 'react';
import {
  Heart,
  Smile,
  AlertCircle,
  Sparkles,
  ChevronUp,
  X,
  Activity,
  Utensils,
  Stethoscope,
  TrendingUp,
  ShieldCheck
} from 'lucide-react';
import { BitmojiRenderer } from './BitmojiCreator';

export default function CornerHealthCompanion({
  assessment,
  bmiData,
  user,
  onOpenAIAssistant,
  onOpenDoctorsModal,
  onNavigateTab,
  t
}) {
  const [isOpen, setIsOpen] = useState(false);

  // Compute emotion & health parameters
  const score = assessment?.compositeScore ?? 0;
  const isOptimal = score < 35;
  const isModerate = score >= 35 && score < 65;
  const isSevere = score >= 65;

  let emotion = 'happy';
  let badgeColor = '#059669'; // Emerald
  let moodIcon = '🌟';
  let moodTitle = 'Optimal Balance';
  let moodSub = 'Low Symptom Burden';
  let emotionalMessage = 'Your hormonal and metabolic signals look steady and balanced. Keep nourishing your body with high-protein breakfasts and daily movement!';

  if (isModerate) {
    emotion = 'concerned';
    badgeColor = '#D97706'; // Amber
    moodIcon = '🌿';
    moodTitle = 'Mild Imbalance';
    moodSub = 'Active Signs Flagged';
    emotionalMessage = 'Early androgenic or cycle irregularities detected. Prioritize low-GI complex carbs, spearmint tea, and stress reduction to regain balance.';
  } else if (isSevere) {
    emotion = 'distressed';
    badgeColor = '#DC2626'; // Ruby Red
    moodIcon = '❤️‍🩹';
    moodTitle = 'High Symptom Load';
    moodSub = 'Care & Rest Advised';
    emotionalMessage = 'Significant metabolic or hormonal strain flagged. Your body is asking for clinical support—consult a local gynecologist or endocrinologist.';
  }

  return (
    <>
      {/* Floating Corner Health Avatar Button (Bottom-Left) */}
      <div
        style={{
          position: 'absolute',
          bottom: '74px',
          left: '16px',
          zIndex: 45
        }}
      >
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          title={`Patient Health Status: ${moodTitle} (${moodIcon}) - Click for details`}
          aria-label="Health Mood Companion"
          style={{
            background: 'var(--bg-card)',
            border: `2.5px solid ${badgeColor}`,
            borderRadius: 'var(--radius-full)',
            padding: '4px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            cursor: 'pointer',
            boxShadow: '0 4px 14px rgba(0, 0, 0, 0.22)',
            transition: 'all 0.15s ease'
          }}
        >
          {/* Avatar with Emotion */}
          <div style={{ position: 'relative' }}>
            <BitmojiRenderer
              hairStyle={user?.bitmojiConfig?.hairStyle || 'waves'}
              hairColor={user?.bitmojiConfig?.hairColor || '#2D150B'}
              skinTone={user?.bitmojiConfig?.skinTone || '#FFEDD5'}
              outfitColor={user?.bitmojiConfig?.outfitColor || 'var(--primary)'}
              accessory={user?.bitmojiConfig?.accessory || 'flower'}
              emotion={emotion}
              size={36}
            />

            {/* Emotional Indicator Mini Badge */}
            <div
              style={{
                position: 'absolute',
                bottom: '-2px',
                right: '-2px',
                width: '14px',
                height: '14px',
                borderRadius: '50%',
                backgroundColor: badgeColor,
                color: '#FFFFFF',
                fontSize: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1.5px solid #FFFFFF',
                fontWeight: '900'
              }}
            >
              {isOptimal ? '✓' : isModerate ? '!' : '⚠'}
            </div>
          </div>

          <div
            style={{
              paddingRight: '6px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              lineHeight: 1.1
            }}
          >
            <span style={{ fontSize: '10px', fontWeight: '800', color: badgeColor, textTransform: 'uppercase' }}>
              {moodTitle}
            </span>
            <span style={{ fontSize: '9px', color: 'var(--text-light)', fontWeight: '700' }}>
              {score}% match
            </span>
          </div>
        </button>
      </div>

      {/* Expanded Health Emotion Popover Modal */}
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            bottom: '130px',
            left: '16px',
            right: '16px',
            maxWidth: '320px',
            backgroundColor: 'var(--bg-card)',
            border: `2px solid ${badgeColor}`,
            borderRadius: '20px',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.28)',
            padding: '16px',
            zIndex: 48,
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}
        >
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '18px' }}>{moodIcon}</span>
              <div>
                <div style={{ fontSize: '13.5px', fontWeight: '800', color: 'var(--text-main)' }}>
                  {moodTitle}
                </div>
                <div style={{ fontSize: '10.5px', color: badgeColor, fontWeight: '700' }}>
                  {moodSub} • {score}% Symptom Risk
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="header-action-btn"
              style={{ width: '26px', height: '26px', padding: 0 }}
              title="Close"
            >
              <X size={14} />
            </button>
          </div>

          {/* Center Avatar Emotion Showcase */}
          <div
            style={{
              backgroundColor: 'var(--bg-subtle)',
              borderRadius: '14px',
              padding: '12px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              border: '1.5px solid var(--border-light)'
            }}
          >
            <BitmojiRenderer
              hairStyle={user?.bitmojiConfig?.hairStyle || 'waves'}
              hairColor={user?.bitmojiConfig?.hairColor || '#2D150B'}
              skinTone={user?.bitmojiConfig?.skinTone || '#FFEDD5'}
              outfitColor={user?.bitmojiConfig?.outfitColor || 'var(--primary)'}
              accessory={user?.bitmojiConfig?.accessory || 'flower'}
              emotion={emotion}
              size={56}
            />
            <p style={{ fontSize: '11.5px', color: 'var(--text-main)', margin: 0, lineHeight: '1.4', fontWeight: '600' }}>
              "{emotionalMessage}"
            </p>
          </div>

          {/* Mini Health Vitals Strip */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '6px', textAlign: 'center' }}>
            <div style={{ backgroundColor: 'var(--bg-subtle)', padding: '6px 4px', borderRadius: '8px' }}>
              <div style={{ fontSize: '9.5px', color: 'var(--text-light)', fontWeight: '700' }}>PCOS Match</div>
              <div style={{ fontSize: '12.5px', fontWeight: '900', color: badgeColor }}>{score}%</div>
            </div>

            <div style={{ backgroundColor: 'var(--bg-subtle)', padding: '6px 4px', borderRadius: '8px' }}>
              <div style={{ fontSize: '9.5px', color: 'var(--text-light)', fontWeight: '700' }}>BMI</div>
              <div style={{ fontSize: '12.5px', fontWeight: '900', color: 'var(--text-main)' }}>
                {bmiData?.bmi || 24.5}
              </div>
            </div>

            <div style={{ backgroundColor: 'var(--bg-subtle)', padding: '6px 4px', borderRadius: '8px' }}>
              <div style={{ fontSize: '9.5px', color: 'var(--text-light)', fontWeight: '700' }}>Cycle</div>
              <div style={{ fontSize: '11px', fontWeight: '800', color: 'var(--text-main)' }}>
                {isOptimal ? 'Regular' : 'Irregular'}
              </div>
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div style={{ display: 'flex', gap: '6px', marginTop: '2px' }}>
            <button
              type="button"
              className="btn-primary"
              onClick={() => {
                setIsOpen(false);
                onOpenAIAssistant();
              }}
              style={{
                flex: 1,
                padding: '7px 8px',
                fontSize: '11px',
                borderRadius: '8px'
              }}
            >
              <Sparkles size={12} />
              Ask Maya
            </button>

            {isSevere ? (
              <button
                type="button"
                className="btn-secondary"
                onClick={() => {
                  setIsOpen(false);
                  onOpenDoctorsModal();
                }}
                style={{
                  flex: 1,
                  padding: '7px 8px',
                  fontSize: '11px',
                  borderRadius: '8px',
                  borderColor: '#DC2626',
                  color: '#DC2626'
                }}
              >
                <Stethoscope size={12} />
                Find Doctors
              </button>
            ) : (
              <button
                type="button"
                className="btn-secondary"
                onClick={() => {
                  setIsOpen(false);
                  onNavigateTab('diet');
                }}
                style={{
                  flex: 1,
                  padding: '7px 8px',
                  fontSize: '11px',
                  borderRadius: '8px'
                }}
              >
                <Utensils size={12} />
                Meal Guide
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}
