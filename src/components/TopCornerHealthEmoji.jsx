import React, { useState } from 'react';
import { BitmojiRenderer } from './BitmojiCreator';

export default function TopCornerHealthEmoji({
  assessment,
  user
}) {
  const [showTooltip, setShowTooltip] = useState(false);

  const score = assessment?.compositeScore ?? 0;
  const isOptimal = score < 35;
  const isModerate = score >= 35 && score < 65;
  const isSevere = score >= 65;

  let emotion = 'happy';
  let emojiChar = '😊';
  let badgeColor = '#059669'; // Emerald
  let moodTitle = 'Optimal & Healthy';
  let moodDesc = 'Low symptom risk. Balanced hormonal signals!';
  let indicatorSymbol = '✓';

  if (isModerate) {
    emotion = 'concerned';
    emojiChar = '😐';
    badgeColor = '#D97706'; // Amber
    moodTitle = 'Mild Imbalance';
    moodDesc = 'Moderate androgen / cycle signals detected.';
    indicatorSymbol = '!';
  } else if (isSevere) {
    emotion = 'distressed';
    emojiChar = '😫';
    badgeColor = '#DC2626'; // Red
    moodTitle = 'High Symptom Load';
    moodDesc = 'Severe metabolic / hormonal markers flagged.';
    indicatorSymbol = '⚠';
  }

  return (
    <div
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* Top Corner Health Emoji Button */}
      <button
        type="button"
        onClick={() => setShowTooltip(!showTooltip)}
        title={`Patient Health: ${moodTitle} (${score}% risk)`}
        aria-label="Patient Health Status Emoji"
        style={{
          background: 'var(--bg-card)',
          border: `2px solid ${badgeColor}`,
          borderRadius: '50%',
          width: '38px',
          height: '38px',
          padding: 0,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15)',
          flexShrink: 0
        }}
      >
        {/* Render girl bitmoji with health emotion */}
        <BitmojiRenderer
          hairStyle={user?.bitmojiConfig?.hairStyle || 'waves'}
          hairColor={user?.bitmojiConfig?.hairColor || '#2D150B'}
          skinTone={user?.bitmojiConfig?.skinTone || '#FFEDD5'}
          outfitColor={user?.bitmojiConfig?.outfitColor || 'var(--primary)'}
          accessory={user?.bitmojiConfig?.accessory || 'flower'}
          emotion={emotion}
          size={34}
        />

        {/* Emotion Symbol Badge in Corner */}
        <span
          style={{
            position: 'absolute',
            bottom: '-2px',
            right: '-2px',
            width: '13px',
            height: '13px',
            borderRadius: '50%',
            backgroundColor: badgeColor,
            color: '#FFFFFF',
            fontSize: '8px',
            fontWeight: '900',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1.5px solid #FFFFFF'
          }}
        >
          {indicatorSymbol}
        </span>
      </button>

      {/* Interactive Tooltip Popover */}
      {showTooltip && (
        <div
          style={{
            position: 'absolute',
            top: '44px',
            right: 0,
            backgroundColor: 'var(--bg-card)',
            border: `2px solid ${badgeColor}`,
            borderRadius: '12px',
            padding: '10px 12px',
            boxShadow: '0 6px 18px rgba(0,0,0,0.22)',
            zIndex: 99,
            width: '210px',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
            pointerEvents: 'none'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ fontSize: '16px' }}>{emojiChar}</span>
            <span style={{ fontSize: '12px', fontWeight: '800', color: badgeColor }}>
              {moodTitle}
            </span>
          </div>
          <div style={{ fontSize: '11px', color: 'var(--text-main)', lineHeight: '1.35', fontWeight: '600' }}>
            {moodDesc}
          </div>
          <div style={{ fontSize: '10px', color: 'var(--text-light)', fontWeight: '700', marginTop: '2px' }}>
            Rotterdam Match: {score}%
          </div>
        </div>
      )}
    </div>
  );
}
