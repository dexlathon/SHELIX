import React, { useState } from 'react';
import {
  RotateCcw,
  Smartphone,
  Monitor,
  Moon,
  Sun,
  Palette,
  User,
  LogIn,
  Sparkles,
  Crown,
  Bot
} from 'lucide-react';
import { BitmojiRenderer } from './BitmojiCreator';
import { SheSyncIcon } from './SheSyncLogo';
import TopCornerHealthEmoji from './TopCornerHealthEmoji';
import { THEMES } from '../data/themes';
import { LANGUAGES } from '../data/translations';

export default function Navbar({
  onReset,
  isExpanded,
  onToggleExpand,
  currentTab,
  isNightMode,
  onToggleNightMode,
  currentThemeId,
  onSelectTheme,
  currentLang,
  onSelectLang,
  user,
  assessment,
  subscription,
  onOpenProfile,
  onOpenAuth,
  onOpenAIAssistant,
  onOpenSubscription,
  t
}) {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <>
      <header className="mobile-app-header">
        <div
          className="app-brand"
          onClick={onOpenProfile}
          style={{ cursor: 'pointer' }}
          title="Click to customize Girl Bitmoji or upload photo"
          role="button"
          tabIndex={0}
        >
          {/* Active User Avatar (Custom Photo or Customized Bitmoji) */}
          <div style={{ position: 'relative' }}>
            {user?.customPhoto && user?.avatarType === 'custom' ? (
              <img
                src={user.customPhoto}
                alt={user.name}
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '2px solid var(--primary)',
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
                size={44}
              />
            )}

            {user?.isLoggedIn && (
              <div
                style={{
                  position: 'absolute',
                  bottom: '0',
                  right: '0',
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  backgroundColor: '#059669',
                  border: '2px solid #FFFFFF'
                }}
                title="Account Logged In"
              />
            )}
          </div>
          
          <div className="brand-title-wrap">
            <div className="brand-name" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <SheSyncIcon size={24} />
              <span>{t.appTitle}</span>
              <span className="brand-badge">{t.mlBadge}</span>
            </div>
            <div className="brand-sub">
              {user?.isLoggedIn ? user.name : t.subtitle}
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          {/* Top Corner Dynamic Health Status Emoji */}
          <TopCornerHealthEmoji assessment={assessment} user={user} />

          {/* Premium Pro / 30-Day Trial Crown Button */}
          <button
            className="header-action-btn"
            onClick={onOpenSubscription}
            title={subscription?.isPremium ? "PCOS Pro Active" : "30-Day Trial Active - Upgrade to Pro"}
            aria-label="PCOS Pro Subscription"
            style={{
              backgroundColor: subscription?.isPremium ? '#FEF3C7' : 'var(--bg-subtle)',
              borderColor: '#F59E0B',
              color: '#D97706'
            }}
          >
            <Crown size={16} color="#D97706" />
          </button>

          {/* AI Health Assistant Header Button */}
          <button
            className="header-action-btn active-pill"
            onClick={onOpenAIAssistant}
            title="Chat with Maya AI Health Assistant"
            aria-label="Maya AI Assistant"
            style={{ backgroundColor: 'var(--primary)', color: '#FFFFFF', position: 'relative' }}
          >
            <Sparkles size={16} />
          </button>

          {/* User Account / Profile Button */}
          <button
            className="header-action-btn"
            onClick={user?.isLoggedIn ? onOpenProfile : onOpenAuth}
            title={user?.isLoggedIn ? `Account: ${user.email}` : "Sign In with Email"}
            aria-label="Account"
          >
            {user?.isLoggedIn ? <User size={17} /> : <LogIn size={17} />}
          </button>

          {/* Night Mode Toggle */}
          <button
            className={`header-action-btn ${isNightMode ? 'active-pill' : ''}`}
            onClick={onToggleNightMode}
            title={isNightMode ? t.dayMode : t.nightMode}
            aria-label="Toggle Night Mode"
          >
            {isNightMode ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          {/* Theme & Language Drawer Toggle */}
          <button
            className={`header-action-btn ${showSettings ? 'active-pill' : ''}`}
            onClick={() => setShowSettings(!showSettings)}
            title="Theme & Language Settings"
            aria-label="Settings"
          >
            <Palette size={17} />
          </button>

          {/* Reset Quiz Button */}
          <button
            className="header-action-btn"
            onClick={onReset}
            title="Reset"
            aria-label="Reset Quiz"
          >
            <RotateCcw size={16} />
          </button>
        </div>
      </header>

      {/* Settings Bar for Themes & Languages */}
      {showSettings && (
        <div className="header-settings-bar">
          {/* Color Themes */}
          <div className="settings-group">
            <span className="settings-label">{t.theme}:</span>
            <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
              {THEMES.map((th) => (
                <button
                  key={th.id}
                  className={`theme-color-dot ${currentThemeId === th.id ? 'active' : ''}`}
                  style={{ backgroundColor: th.primary }}
                  onClick={() => onSelectTheme(th.id)}
                  title={th.name}
                  aria-label={th.name}
                />
              ))}
            </div>
          </div>

          {/* Language Switcher */}
          <div className="settings-group">
            <span className="settings-label">{t.language}:</span>
            <select
              className="lang-select-dropdown"
              value={currentLang}
              onChange={(e) => onSelectLang(e.target.value)}
              aria-label="Select Language"
            >
              {LANGUAGES.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.flag} {lang.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </>
  );
}
