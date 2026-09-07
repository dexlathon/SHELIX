import React, { useState } from 'react';
import {
  X,
  Crown,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  CreditCard,
  Zap,
  Calendar,
  Lock,
  ArrowRight,
  HelpCircle,
  Clock,
  HeartHandshake
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { SUBSCRIPTION_PLANS, saveSubscription } from '../data/subscriptions';

export default function SubscriptionModal({
  isOpen,
  onClose,
  subscription,
  onUpdateSubscription,
  user,
  t
}) {
  if (!isOpen) return null;

  const [selectedPlanId, setSelectedPlanId] = useState('plan_annual');
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [isProcessing, setIsProcessing] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const selectedPlan = SUBSCRIPTION_PLANS.find((p) => p.id === selectedPlanId) || SUBSCRIPTION_PLANS[1];

  const handleSubscribe = () => {
    setIsProcessing(true);

    setTimeout(() => {
      const updatedSub = {
        isPremium: true,
        planId: selectedPlan.id,
        planName: selectedPlan.name,
        pricePaid: selectedPlan.price,
        subscribedDate: new Date().toISOString(),
        expiryDate:
          selectedPlan.id === 'plan_lifetime'
            ? 'Lifetime'
            : new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toLocaleDateString()
      };

      saveSubscription(updatedSub);
      onUpdateSubscription(updatedSub);
      setIsProcessing(false);
      setSuccessMessage(`Welcome to ${selectedPlan.name}! All premium features are unlocked.`);

      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {
        // ignore
      }
    }, 1200);
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
        zIndex: 110,
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
          maxWidth: '540px',
          height: '90vh',
          maxHeight: '780px',
          display: 'flex',
          flexDirection: 'column',
          padding: 0,
          overflow: 'hidden'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            backgroundColor: '#0F172A',
            color: '#FFFFFF',
            padding: '16px 18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '2px solid #334155'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '8px',
                backgroundColor: '#F59E0B',
                color: '#000000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: '900'
              }}
            >
              <Crown size={22} />
            </div>
            <div>
              <div style={{ fontSize: '16px', fontWeight: '900', display: 'flex', alignItems: 'center', gap: '6px' }}>
                PCOS Pro Membership
                <span
                  style={{
                    backgroundColor: '#F59E0B',
                    color: '#000000',
                    fontSize: '10px',
                    fontWeight: '800',
                    padding: '2px 6px',
                    borderRadius: '4px'
                  }}
                >
                  PREMIUM
                </span>
              </div>
              <div style={{ fontSize: '11.5px', color: '#94A3B8', fontWeight: '600' }}>
                Unlimited Maya AI, Personalized Meal Timelines & Doctor Discounts
              </div>
            </div>
          </div>

          <button
            className="header-action-btn"
            onClick={onClose}
            title="Close"
            style={{ backgroundColor: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.2)', color: '#FFFFFF' }}
          >
            <X size={17} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
            backgroundColor: 'var(--bg-app)'
          }}
        >
          {/* Trial Status Banner */}
          <div
            style={{
              backgroundColor: subscription?.isPremium ? '#ECFDF5' : '#FEF3C7',
              border: `2px solid ${subscription?.isPremium ? '#10B981' : '#F59E0B'}`,
              borderRadius: 'var(--radius-md)',
              padding: '12px 14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '10px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Clock size={20} color={subscription?.isPremium ? '#059669' : '#D97706'} />
              <div>
                <div
                  style={{
                    fontSize: '13px',
                    fontWeight: '800',
                    color: subscription?.isPremium ? '#065F46' : '#92400E'
                  }}
                >
                  {subscription?.isPremium
                    ? `Active Plan: ${subscription.planName}`
                    : `30-Day Free Trial Active (${subscription?.trialDaysLeft || 28} Days Remaining)`}
                </div>
                <div
                  style={{
                    fontSize: '11px',
                    color: subscription?.isPremium ? '#047857' : '#B45309',
                    fontWeight: '600'
                  }}
                >
                  {subscription?.isPremium
                    ? `Valid until: ${subscription.expiryDate || 'Active'}`
                    : 'Upgrade now to guarantee uninterrupted care after your 1-month trial.'}
                </div>
              </div>
            </div>

            {subscription?.isPremium && (
              <span className="progress-category-pill pill-emerald" style={{ fontSize: '10.5px' }}>
                PRO ACTIVE
              </span>
            )}
          </div>

          {/* Success Banner */}
          {successMessage && (
            <div
              style={{
                backgroundColor: '#ECFDF5',
                border: '2px solid #10B981',
                borderRadius: 'var(--radius-md)',
                padding: '12px 14px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              <CheckCircle2 size={20} color="#059669" />
              <div style={{ fontSize: '13px', fontWeight: '800', color: '#065F46' }}>
                {successMessage}
              </div>
            </div>
          )}

          {/* Plan Selection Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <span style={{ fontSize: '13px', fontWeight: '800', color: 'var(--text-main)', textTransform: 'uppercase' }}>
              Choose Your Membership Plan:
            </span>

            {SUBSCRIPTION_PLANS.map((plan) => {
              const isSelected = selectedPlanId === plan.id;

              return (
                <div
                  key={plan.id}
                  onClick={() => setSelectedPlanId(plan.id)}
                  style={{
                    backgroundColor: isSelected ? 'var(--bg-subtle)' : 'var(--bg-card)',
                    border: `2px solid ${isSelected ? 'var(--primary)' : 'var(--border-mid)'}`,
                    borderRadius: 'var(--radius-md)',
                    padding: '14px',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                    position: 'relative',
                    transition: 'all 0.15s ease'
                  }}
                >
                  {plan.badge && (
                    <span
                      style={{
                        position: 'absolute',
                        top: '-10px',
                        right: '14px',
                        backgroundColor: plan.isBestValue ? '#F59E0B' : 'var(--primary)',
                        color: plan.isBestValue ? '#000000' : '#FFFFFF',
                        fontSize: '10px',
                        fontWeight: '900',
                        padding: '2px 8px',
                        borderRadius: '12px',
                        textTransform: 'uppercase'
                      }}
                    >
                      {plan.badge}
                    </span>
                  )}

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <input
                        type="radio"
                        checked={isSelected}
                        onChange={() => setSelectedPlanId(plan.id)}
                        style={{ accentColor: 'var(--primary)', cursor: 'pointer' }}
                      />
                      <span style={{ fontSize: '14.5px', fontWeight: '800', color: 'var(--text-main)' }}>
                        {plan.name}
                      </span>
                    </div>

                    <div style={{ textAlign: 'right' }}>
                      <span style={{ fontSize: '17px', fontWeight: '900', color: 'var(--text-main)' }}>
                        {plan.price}
                      </span>
                      <span style={{ fontSize: '11px', color: 'var(--text-light)', fontWeight: '600' }}>
                        {' '}{plan.period}
                      </span>
                    </div>
                  </div>

                  <div style={{ fontSize: '11.5px', color: 'var(--text-muted)', marginLeft: '22px' }}>
                    {plan.tagline}
                  </div>

                  {plan.monthlyEquivalent && (
                    <div
                      style={{
                        backgroundColor: '#FEF3C7',
                        color: '#92400E',
                        fontSize: '11px',
                        fontWeight: '800',
                        padding: '3px 8px',
                        borderRadius: '6px',
                        alignSelf: 'flex-start',
                        marginLeft: '22px'
                      }}
                    >
                      {plan.monthlyEquivalent}
                    </div>
                  )}

                  {/* Feature Bullets */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '4px', marginLeft: '22px' }}>
                    {plan.features.map((feat, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11.5px', color: 'var(--text-main)' }}>
                        <CheckCircle2 size={13} color="var(--primary)" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Payment Method Selector */}
          <div
            style={{
              backgroundColor: 'var(--bg-card)',
              border: '2px solid var(--border-mid)',
              borderRadius: 'var(--radius-md)',
              padding: '12px 14px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px'
            }}
          >
            <span style={{ fontSize: '12.5px', fontWeight: '800', color: 'var(--text-main)' }}>
              Select Payment Method:
            </span>

            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                type="button"
                className={`progress-category-pill ${paymentMethod === 'upi' ? 'pill-blue' : 'pill-teal'}`}
                onClick={() => setPaymentMethod('upi')}
                style={{ flex: 1, padding: '8px', cursor: 'pointer', fontSize: '11.5px', border: paymentMethod === 'upi' ? '1.5px solid var(--primary)' : '1px solid transparent' }}
              >
                ⚡ UPI / QR
              </button>
              <button
                type="button"
                className={`progress-category-pill ${paymentMethod === 'card' ? 'pill-blue' : 'pill-teal'}`}
                onClick={() => setPaymentMethod('card')}
                style={{ flex: 1, padding: '8px', cursor: 'pointer', fontSize: '11.5px', border: paymentMethod === 'card' ? '1.5px solid var(--primary)' : '1px solid transparent' }}
              >
                💳 Credit / Debit Card
              </button>
              <button
                type="button"
                className={`progress-category-pill ${paymentMethod === 'netbanking' ? 'pill-blue' : 'pill-teal'}`}
                onClick={() => setPaymentMethod('netbanking')}
                style={{ flex: 1, padding: '8px', cursor: 'pointer', fontSize: '11.5px', border: paymentMethod === 'netbanking' ? '1.5px solid var(--primary)' : '1px solid transparent' }}
              >
                🏦 Net Banking
              </button>
            </div>
          </div>

          {/* Security & Guarantee Note */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '11px', color: 'var(--text-light)', fontWeight: '600' }}>
            <ShieldCheck size={16} color="#059669" />
            <span>256-Bit SSL Encrypted • 7-Day Money-Back Guarantee • Cancel Anytime</span>
          </div>
        </div>

        {/* Modal Bottom Actions */}
        <div
          style={{
            backgroundColor: 'var(--bg-card)',
            borderTop: '2px solid var(--border-light)',
            padding: '14px 18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px'
          }}
        >
          <div>
            <div style={{ fontSize: '11px', color: 'var(--text-light)', fontWeight: '700' }}>TOTAL AMOUNT:</div>
            <div style={{ fontSize: '18px', fontWeight: '900', color: 'var(--text-main)' }}>
              {selectedPlan.price}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '8px' }}>
            <button type="button" className="btn-secondary" onClick={onClose} style={{ padding: '10px 14px', fontSize: '12px' }}>
              Close
            </button>
            <button
              type="button"
              className="btn-primary"
              onClick={handleSubscribe}
              disabled={isProcessing}
              style={{
                padding: '10px 20px',
                fontSize: '13px',
                backgroundColor: '#0F172A',
                borderColor: '#0F172A',
                color: '#F59E0B'
              }}
            >
              <Crown size={15} color="#F59E0B" />
              {isProcessing ? 'Activating Pro...' : `Subscribe to ${selectedPlan.name}`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
