import React from 'react';
import {
  Clock,
  Sparkles,
  ShieldAlert
} from 'lucide-react';
import IconResolver from './IconResolver';
import { FoodIconResolver } from './FoodIcons';
import { DIET_PLANS } from '../data/dietPlans';

export default function DietPlanView({ assessment, t }) {
  const trans = t || {
    dailyNutrition: 'Personalized Daily Nutrition',
    protein: 'Protein',
    healthyFats: 'Healthy Fats',
    lowGiCarbs: 'Low-GI Carbs',
    corePillars: 'Core Dietary Pillars',
    evidenceBacked: 'Evidence-Backed',
    dailyMealTimeline: 'Daily Meal Timeline',
    milestones: '6 Targeted Milestones',
    whyItWorks: 'Why it works',
    superfoodsTitle: 'Hormone Superfoods to Add',
    avoidTitle: 'Inflammatory Triggers to Avoid'
  };

  const dietKey = assessment?.phenotype?.dietKey || 'insulin_metabolic_reset';
  const plan = DIET_PLANS[dietKey] || DIET_PLANS.insulin_metabolic_reset;

  return (
    <div className="diet-plan-container">
      {/* Hero Banner */}
      <div className="diet-hero-banner">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span className="progress-category-pill pill-dark">
            {plan.badge}
          </span>
          <span style={{ fontSize: '11.5px', fontWeight: '800', color: '#DBEAFE' }}>
            {trans.dailyNutrition}
          </span>
        </div>

        <h2 className="diet-plan-title">{plan.title}</h2>
        <p className="diet-plan-subtitle">{plan.heroSummary}</p>

        {/* Macro split pills */}
        <div className="macros-row">
          <div className="macro-box">
            <div className="macro-val">{plan.macroSplit.protein}</div>
            <div className="macro-lbl">{trans.protein}</div>
          </div>
          <div className="macro-box">
            <div className="macro-val">{plan.macroSplit.healthyFats}</div>
            <div className="macro-lbl">{trans.healthyFats}</div>
          </div>
          <div className="macro-box">
            <div className="macro-val">{plan.macroSplit.complexCarbs}</div>
            <div className="macro-lbl">{trans.lowGiCarbs}</div>
          </div>
        </div>
      </div>

      {/* Core Principles */}
      <div className="subscores-card">
        <div className="card-heading">
          <span>{trans.corePillars}</span>
          <span style={{ fontSize: '11px', color: 'var(--text-light)', fontWeight: '700' }}>{trans.evidenceBacked}</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          {plan.principles.map((pr, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: 'var(--bg-subtle)',
                border: '1.5px solid var(--border-mid)',
                borderRadius: '12px',
                padding: '12px',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary)' }}>
                <IconResolver name={pr.icon} size={18} color="var(--primary)" strokeWidth={2.5} />
                <span style={{ fontSize: '12.5px', fontWeight: '800', color: 'var(--text-main)' }}>
                  {pr.title}
                </span>
              </div>
              <p style={{ fontSize: '11.5px', color: 'var(--text-muted)', lineHeight: '1.35' }}>
                {pr.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Daily Meal Schedule Timeline with Semi-Realistic Vector Icons */}
      <div className="subscores-card">
        <div className="card-heading">
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Clock size={18} color="var(--primary)" />
            {trans.dailyMealTimeline}
          </span>
          <span className="progress-category-pill pill-blue">
            {trans.milestones}
          </span>
        </div>

        <div className="timeline-list">
          {plan.dailySchedule.map((meal, index) => (
            <div key={index} className="timeline-card">
              <div className="timeline-header">
                <span className="timeline-time-badge">{meal.time}</span>
                <span className="timeline-meal-type">{meal.period}</span>
              </div>

              <div className="timeline-dish-header">
                <div className="large-food-icon-box">
                  <FoodIconResolver name={meal.iconKey || 'salad'} size={34} />
                </div>
                <div className="timeline-dish-title">{meal.title}</div>
              </div>

              <ul className="timeline-food-items">
                {meal.items.map((item, i) => (
                  <li key={i} className="timeline-food-item">
                    <div style={{ minWidth: '26px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <FoodIconResolver name={item.iconKey || 'salad'} size={24} />
                    </div>
                    <span>{typeof item === 'string' ? item : item.name}</span>
                  </li>
                ))}
              </ul>

              <div className="benefit-tag">
                <span style={{ fontWeight: '800', color: 'var(--primary)' }}>{trans.whyItWorks}: </span>
                {meal.benefit}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recommended Superfoods with Semi-Realistic Vector Icons */}
      <div className="subscores-card">
        <div className="card-heading">
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--emerald)' }}>
            <Sparkles size={18} color="var(--emerald)" strokeWidth={2.5} />
            {trans.superfoodsTitle}
          </span>
        </div>

        <div className="superfoods-grid">
          {plan.superfoods.map((sf, idx) => (
            <div key={idx} className="superfood-tile">
              <div className="superfood-top-row">
                <div className="superfood-large-icon">
                  <FoodIconResolver name={sf.iconKey || 'salad'} size={28} />
                </div>
                <div className="superfood-name">{sf.name}</div>
              </div>
              <div className="superfood-role">{sf.role}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Foods to Avoid with Semi-Realistic Vector Warning Icons */}
      <div className="subscores-card">
        <div className="card-heading">
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--red)' }}>
            <ShieldAlert size={18} color="var(--red)" strokeWidth={2.5} />
            {trans.avoidTitle}
          </span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          {plan.foodsToAvoid.map((avoid, idx) => (
            <div key={idx} className="avoid-tile">
              <div className="avoid-top-row">
                <div className="avoid-large-icon">
                  <FoodIconResolver name={avoid.iconKey || 'soda'} size={28} />
                </div>
                <div className="avoid-name">{avoid.name}</div>
              </div>
              <div className="avoid-reason">{avoid.reason}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
