import React, { useState } from 'react';
import {
  X,
  Check,
  LogOut,
  Upload,
  Image as ImageIcon,
  Sparkles,
  User,
  Sliders,
  Trash2
} from 'lucide-react';
import { BitmojiRenderer, BITMOJI_PRESETS } from './BitmojiCreator';

export default function ProfileModal({
  isOpen,
  onClose,
  user,
  subscription,
  onUpdateProfile,
  onLogout,
  onOpenAuth,
  onOpenSubscription,
  t
}) {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState('bitmoji'); // 'bitmoji', 'upload'
  const [name, setName] = useState(user?.name || 'Sarah Mitchell');
  
  // Custom Bitmoji Config
  const [bitmojiConfig, setBitmojiConfig] = useState(
    user?.bitmojiConfig || {
      hairStyle: 'waves',
      hairColor: '#2D150B',
      skinTone: '#FFEDD5',
      outfitColor: '#1D4ED8',
      accessory: 'flower'
    }
  );

  // Custom Uploaded Photo (Base64)
  const [customPhoto, setCustomPhoto] = useState(user?.customPhoto || null);
  const [isSaved, setIsSaved] = useState(false);

  // Handle Photo File Upload
  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCustomPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    onUpdateProfile({
      ...user,
      name,
      customPhoto,
      bitmojiConfig,
      avatarType: customPhoto && activeTab === 'upload' ? 'custom' : 'bitmoji'
    });
    setIsSaved(true);
    setTimeout(() => {
      setIsSaved(false);
      onClose();
    }, 600);
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px'
      }}
      onClick={onClose}
    >
      <div
        className="doctor-report-view"
        style={{
          width: '100%',
          maxWidth: '500px',
          maxHeight: '92vh',
          overflowY: 'auto'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="doctor-report-header">
          <div>
            <div className="report-clinic-title">Customize Profile & Bitmoji</div>
            <div className="report-date">
              {user?.isLoggedIn ? `Account: ${user.email}` : 'Guest Profile'}
            </div>
          </div>
          <button className="header-action-btn" onClick={onClose} title="Close">
            <X size={16} />
          </button>
        </div>

        {/* Live Profile Picture / Bitmoji Preview Card */}
        <div
          style={{
            backgroundColor: 'var(--bg-subtle)',
            border: '2px solid var(--border-mid)',
            borderRadius: '16px',
            padding: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '16px'
          }}
        >
          {customPhoto && activeTab === 'upload' ? (
            <img
              src={customPhoto}
              alt="Custom Profile"
              style={{
                width: '72px',
                height: '72px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '3px solid var(--primary)',
                flexShrink: 0
              }}
            />
          ) : (
            <BitmojiRenderer
              hairStyle={bitmojiConfig.hairStyle}
              hairColor={bitmojiConfig.hairColor}
              skinTone={bitmojiConfig.skinTone}
              outfitColor={bitmojiConfig.outfitColor}
              accessory={bitmojiConfig.accessory}
              size={72}
            />
          )}

          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '16px', fontWeight: '800', color: 'var(--text-main)' }}>
                {name || 'Health User'}
              </span>
              <span className={`progress-category-pill ${user?.isLoggedIn ? 'pill-emerald' : 'pill-amber'}`}>
                {user?.isLoggedIn ? 'Synced' : 'Guest'}
              </span>
            </div>
            <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
              {user?.isLoggedIn ? user.email : 'Log in to save assessments to your email'}
            </span>
          </div>
        </div>

        {/* Studio Tabs: Bitmoji Customizer vs Custom Photo Upload */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
          <button
            type="button"
            className={`btn-secondary ${activeTab === 'bitmoji' ? 'active-pill' : ''}`}
            onClick={() => setActiveTab('bitmoji')}
            style={{
              justifyContent: 'center',
              borderColor: activeTab === 'bitmoji' ? 'var(--primary)' : 'var(--border-mid)',
              backgroundColor: activeTab === 'bitmoji' ? 'var(--primary-subtle)' : 'var(--bg-card)'
            }}
          >
            <Sparkles size={16} color="var(--primary)" />
            Girl Bitmoji Studio
          </button>
          <button
            type="button"
            className={`btn-secondary ${activeTab === 'upload' ? 'active-pill' : ''}`}
            onClick={() => setActiveTab('upload')}
            style={{
              justifyContent: 'center',
              borderColor: activeTab === 'upload' ? 'var(--primary)' : 'var(--border-mid)',
              backgroundColor: activeTab === 'upload' ? 'var(--primary-subtle)' : 'var(--bg-card)'
            }}
          >
            <Upload size={16} color="var(--primary)" />
            Upload Custom Photo
          </button>
        </div>

        {/* TAB 1: BITMOJI CUSTOMIZER STUDIO */}
        {activeTab === 'bitmoji' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {/* Quick Presets */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={{ fontSize: '12px', fontWeight: '800', color: 'var(--text-main)' }}>
                Quick Girl Presets:
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '6px' }}>
                {BITMOJI_PRESETS.map((preset) => (
                  <button
                    key={preset.id}
                    type="button"
                    onClick={() => setBitmojiConfig(preset)}
                    style={{
                      background: 'var(--bg-subtle)',
                      border: '1.5px solid var(--border-mid)',
                      borderRadius: '10px',
                      padding: '6px 4px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '4px',
                      cursor: 'pointer'
                    }}
                  >
                    <BitmojiRenderer
                      hairStyle={preset.hairStyle}
                      hairColor={preset.hairColor}
                      skinTone={preset.skinTone}
                      outfitColor={preset.outfitColor}
                      accessory={preset.accessory}
                      size={36}
                    />
                    <span style={{ fontSize: '10.5px', fontWeight: '800', color: 'var(--text-main)' }}>
                      {preset.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Hair Style */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={{ fontSize: '12px', fontWeight: '800', color: 'var(--text-main)' }}>
                Hair Style:
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '6px' }}>
                {[
                  { id: 'waves', label: 'Long Waves' },
                  { id: 'ponytail', label: 'Ponytail' },
                  { id: 'curls', label: 'Curls' },
                  { id: 'bob', label: 'Bob Cut' }
                ].map((st) => (
                  <button
                    key={st.id}
                    type="button"
                    onClick={() => setBitmojiConfig((prev) => ({ ...prev, hairStyle: st.id }))}
                    className={`progress-category-pill ${bitmojiConfig.hairStyle === st.id ? 'pill-teal' : 'pill-dark'}`}
                    style={{ cursor: 'pointer', border: 'none', justifyContent: 'center', fontSize: '10.5px' }}
                  >
                    {st.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Hair Color */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={{ fontSize: '12px', fontWeight: '800', color: 'var(--text-main)' }}>
                Hair Color:
              </label>
              <div style={{ display: 'flex', gap: '8px' }}>
                {[
                  { color: '#2D150B', label: 'Brunette' },
                  { color: '#09090B', label: 'Jet Black' },
                  { color: '#9A3412', label: 'Auburn' },
                  { color: '#CA8A04', label: 'Honey Blonde' }
                ].map((hc) => (
                  <button
                    key={hc.color}
                    type="button"
                    onClick={() => setBitmojiConfig((prev) => ({ ...prev, hairColor: hc.color }))}
                    style={{
                      backgroundColor: hc.color,
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      border: bitmojiConfig.hairColor === hc.color ? '3px solid #FFFFFF' : '2px solid var(--border-dark)',
                      boxShadow: bitmojiConfig.hairColor === hc.color ? '0 0 0 2px var(--primary)' : 'none',
                      cursor: 'pointer'
                    }}
                    title={hc.label}
                  />
                ))}
              </div>
            </div>

            {/* Skin Tone */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={{ fontSize: '12px', fontWeight: '800', color: 'var(--text-main)' }}>
                Skin Tone:
              </label>
              <div style={{ display: 'flex', gap: '8px' }}>
                {[
                  { color: '#FFEDD5', label: 'Fair Warm' },
                  { color: '#FED7AA', label: 'Warm Peach' },
                  { color: '#F59E0B', label: 'Honey Olive' },
                  { color: '#D97706', label: 'Rich Caramel' }
                ].map((sk) => (
                  <button
                    key={sk.color}
                    type="button"
                    onClick={() => setBitmojiConfig((prev) => ({ ...prev, skinTone: sk.color }))}
                    style={{
                      backgroundColor: sk.color,
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      border: bitmojiConfig.skinTone === sk.color ? '3px solid #FFFFFF' : '2px solid var(--border-dark)',
                      boxShadow: bitmojiConfig.skinTone === sk.color ? '0 0 0 2px var(--primary)' : 'none',
                      cursor: 'pointer'
                    }}
                    title={sk.label}
                  />
                ))}
              </div>
            </div>

            {/* Accessory */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={{ fontSize: '12px', fontWeight: '800', color: 'var(--text-main)' }}>
                Accessories:
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '6px' }}>
                {[
                  { id: 'flower', label: 'Flower Clip' },
                  { id: 'glasses', label: 'Glasses' },
                  { id: 'stethoscope', label: 'Stethoscope' },
                  { id: 'pearls', label: 'Pearls' }
                ].map((acc) => (
                  <button
                    key={acc.id}
                    type="button"
                    onClick={() => setBitmojiConfig((prev) => ({ ...prev, accessory: acc.id }))}
                    className={`progress-category-pill ${bitmojiConfig.accessory === acc.id ? 'pill-teal' : 'pill-dark'}`}
                    style={{ cursor: 'pointer', border: 'none', justifyContent: 'center', fontSize: '10.5px' }}
                  >
                    {acc.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: CUSTOM PHOTO UPLOAD */}
        {activeTab === 'upload' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', alignItems: 'center', padding: '10px 0' }}>
            {customPhoto ? (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                <img
                  src={customPhoto}
                  alt="Custom Upload"
                  style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '4px solid var(--primary)'
                  }}
                />
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={() => setCustomPhoto(null)}
                  style={{ color: 'var(--red)', fontSize: '12px', padding: '6px 14px' }}
                >
                  <Trash2 size={14} />
                  Remove Photo
                </button>
              </div>
            ) : (
              <label
                style={{
                  width: '100%',
                  border: '2px dashed var(--border-dark)',
                  borderRadius: '16px',
                  padding: '30px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '10px',
                  cursor: 'pointer',
                  backgroundColor: 'var(--bg-subtle)'
                }}
              >
                <Upload size={36} color="var(--primary)" />
                <span style={{ fontSize: '14px', fontWeight: '800', color: 'var(--text-main)' }}>
                  Click to Upload Your Profile Picture
                </span>
                <span style={{ fontSize: '11.5px', color: 'var(--text-muted)' }}>
                  Supports JPG, PNG, WEBP from your device or camera
                </span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  style={{ display: 'none' }}
                />
              </label>
            )}
          </div>
        )}

        {/* Edit Name Field */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <label style={{ fontSize: '12px', fontWeight: '700', color: 'var(--text-muted)' }}>
            Display Name
          </label>
          <input
            type="text"
            className="bmi-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            style={{
              backgroundColor: 'var(--bg-subtle)',
              border: '1.5px solid var(--border-mid)',
              borderRadius: '10px',
              padding: '10px 12px',
              fontSize: '14px'
            }}
          />
        </div>

        {/* Membership & Subscription Status Section */}
        <div
          style={{
            backgroundColor: subscription?.isPremium ? '#0F172A' : '#FEF3C7',
            border: `2px solid ${subscription?.isPremium ? '#334155' : '#F59E0B'}`,
            borderRadius: '14px',
            padding: '12px 14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '10px'
          }}
        >
          <div>
            <div
              style={{
                fontSize: '13px',
                fontWeight: '800',
                color: subscription?.isPremium ? '#F8FAFC' : '#92400E'
              }}
            >
              {subscription?.isPremium ? `Plan: ${subscription.planName}` : '30-Day Free Trial Active'}
            </div>
            <div
              style={{
                fontSize: '11px',
                color: subscription?.isPremium ? '#94A3B8' : '#B45309',
                fontWeight: '600'
              }}
            >
              {subscription?.isPremium
                ? `Expires: ${subscription.expiryDate || 'Active'}`
                : `${subscription?.trialDaysLeft || 28} days remaining in your free month`}
            </div>
          </div>

          <button
            type="button"
            className="btn-primary"
            onClick={() => {
              onClose();
              onOpenSubscription();
            }}
            style={{
              padding: '6px 12px',
              fontSize: '11.5px',
              backgroundColor: '#F59E0B',
              borderColor: '#F59E0B',
              color: '#000000',
              fontWeight: '900',
              flex: 'none'
            }}
          >
            {subscription?.isPremium ? 'Manage' : 'Upgrade Pro'}
          </button>
        </div>

        {/* Save & Account Buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '4px' }}>
          <button className="btn-primary" onClick={handleSave}>
            <Check size={18} />
            {isSaved ? 'Saved Profile!' : 'Save Changes'}
          </button>

          {user?.isLoggedIn ? (
            <button
              className="btn-secondary"
              onClick={() => {
                onLogout();
                onClose();
              }}
              style={{ justifyContent: 'center', color: 'var(--red)' }}
            >
              <LogOut size={16} />
              Sign Out of {user.email}
            </button>
          ) : (
            <button
              className="btn-secondary"
              onClick={() => {
                onClose();
                onOpenAuth();
              }}
              style={{ justifyContent: 'center' }}
            >
              Sign In with Email to Sync Assessments
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
