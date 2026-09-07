import React, { useState, useEffect } from 'react';
import { Scale, CheckCircle2, AlertCircle } from 'lucide-react';
import { calculateBMI } from '../engine/mlClassifier';

export default function BMICalculator({ bmiData, onBMIChange, t }) {
  const trans = t || {
    bmiMarker: 'Body Mass Index (BMI) Marker',
    metric: 'Metric (cm/kg)',
    usUnits: 'US (ft/lbs)',
    height: 'Height',
    weight: 'Weight',
    calculatedBmi: 'Calculated BMI'
  };

  const [unit, setUnit] = useState('metric');
  const [heightCm, setHeightCm] = useState('165');
  const [weightKg, setWeightKg] = useState('68');

  // Imperial states
  const [feet, setFeet] = useState('5');
  const [inches, setInches] = useState('5');
  const [weightLbs, setWeightLbs] = useState('150');

  useEffect(() => {
    let hCm = 165;
    let wKg = 68;

    if (unit === 'metric') {
      hCm = parseFloat(heightCm) || 0;
      wKg = parseFloat(weightKg) || 0;
    } else {
      const totalInches = (parseFloat(feet) || 0) * 12 + (parseFloat(inches) || 0);
      hCm = totalInches * 2.54;
      wKg = (parseFloat(weightLbs) || 0) * 0.453592;
    }

    if (hCm > 80 && wKg > 20) {
      const calculated = calculateBMI(hCm, wKg);
      onBMIChange(calculated);
    } else {
      onBMIChange(null);
    }
  }, [unit, heightCm, weightKg, feet, inches, weightLbs]);

  return (
    <div className="bmi-calculator-box">
      <div className="bmi-header">
        <div className="bmi-header-left">
          <Scale size={18} color="var(--primary)" />
          <span>{trans.bmiMarker}</span>
        </div>
        <div style={{ display: 'flex', gap: '4px' }}>
          <button
            type="button"
            className={`progress-category-pill ${unit === 'metric' ? 'pill-teal' : 'pill-dark'}`}
            style={{ cursor: 'pointer', border: 'none' }}
            onClick={() => setUnit('metric')}
          >
            {trans.metric}
          </button>
          <button
            type="button"
            className={`progress-category-pill ${unit === 'imperial' ? 'pill-teal' : 'pill-dark'}`}
            style={{ cursor: 'pointer', border: 'none' }}
            onClick={() => setUnit('imperial')}
          >
            {trans.usUnits}
          </button>
        </div>
      </div>

      {unit === 'metric' ? (
        <div className="bmi-inputs-grid">
          <div className="bmi-input-group">
            <label className="bmi-input-label">{trans.height} (cm)</label>
            <div className="bmi-input-field-wrap">
              <input
                type="number"
                className="bmi-input"
                value={heightCm}
                onChange={(e) => setHeightCm(e.target.value)}
                placeholder="165"
                min="100"
                max="250"
              />
              <span className="bmi-unit-label">cm</span>
            </div>
          </div>

          <div className="bmi-input-group">
            <label className="bmi-input-label">{trans.weight} (kg)</label>
            <div className="bmi-input-field-wrap">
              <input
                type="number"
                className="bmi-input"
                value={weightKg}
                onChange={(e) => setWeightKg(e.target.value)}
                placeholder="68"
                min="30"
                max="250"
              />
              <span className="bmi-unit-label">kg</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="bmi-inputs-grid">
          <div className="bmi-input-group">
            <label className="bmi-input-label">{trans.height} (ft & in)</label>
            <div style={{ display: 'flex', gap: '6px' }}>
              <div className="bmi-input-field-wrap" style={{ flex: 1 }}>
                <input
                  type="number"
                  className="bmi-input"
                  value={feet}
                  onChange={(e) => setFeet(e.target.value)}
                  placeholder="5"
                  min="3"
                  max="7"
                />
                <span className="bmi-unit-label">ft</span>
              </div>
              <div className="bmi-input-field-wrap" style={{ flex: 1 }}>
                <input
                  type="number"
                  className="bmi-input"
                  value={inches}
                  onChange={(e) => setInches(e.target.value)}
                  placeholder="5"
                  min="0"
                  max="11"
                />
                <span className="bmi-unit-label">in</span>
              </div>
            </div>
          </div>

          <div className="bmi-input-group">
            <label className="bmi-input-label">{trans.weight} (lbs)</label>
            <div className="bmi-input-field-wrap">
              <input
                type="number"
                className="bmi-input"
                value={weightLbs}
                onChange={(e) => setWeightLbs(e.target.value)}
                placeholder="150"
                min="60"
                max="500"
              />
              <span className="bmi-unit-label">lbs</span>
            </div>
          </div>
        </div>
      )}

      {bmiData && (
        <div className="bmi-result-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {bmiData.bmi >= 25 ? (
              <AlertCircle size={22} color={bmiData.bmi >= 30 ? "#DC2626" : "#D97706"} />
            ) : (
              <CheckCircle2 size={22} color="#059669" />
            )}
            <div>
              <div style={{ fontSize: '11px', fontWeight: '700', color: '#64748B', textTransform: 'uppercase' }}>
                {trans.calculatedBmi}
              </div>
              <div className="bmi-value-text">
                {bmiData.bmi} <span style={{ fontSize: '13px', fontWeight: '600', color: '#64748B' }}>kg/m²</span>
              </div>
            </div>
          </div>

          <span
            className={`progress-category-pill pill-${bmiData.color}`}
            style={{ fontSize: '12px', fontWeight: '800' }}
          >
            {bmiData.category}
          </span>
        </div>
      )}
    </div>
  );
}
