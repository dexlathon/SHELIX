import React, { useState } from 'react';
import {
  CheckSquare,
  Square,
  FileDown
} from 'lucide-react';
import { getRecommendedTests } from '../data/labTests';

export default function LabTestsView({ assessment, onOpenDoctorModal, t }) {
  const trans = t || {
    diagnosticPanel: 'Diagnostic Panel',
    targetedIdentified: 'Targeted Tests Identified',
    labTestsHeading: 'Recommended Clinical Lab Tests',
    labTestsSub: 'Take this lab test guide to your physician to request targeted confirmation bloodwork and rule out mimicking conditions.',
    allTests: 'All Tests',
    targeted: 'Targeted',
    hormones: 'Hormones',
    metabolic: 'Metabolic',
    ruleOuts: 'Rule-Outs',
    whyOrdered: 'Why Ordered',
    optimalTiming: 'Optimal Timing',
    optimalTarget: 'Optimal Target',
    generateSummary: 'Generate Doctor Consultation Summary'
  };

  const [filter, setFilter] = useState('all');
  const [checkedTests, setCheckedTests] = useState({});

  const subscores = assessment?.subscores || { menstrual: 40, androgen: 40, metabolic: 40 };
  const allTests = getRecommendedTests(subscores);

  const toggleCheck = (testId) => {
    setCheckedTests((prev) => ({
      ...prev,
      [testId]: !prev[testId]
    }));
  };

  const filteredTests = allTests.filter((test) => {
    if (filter === 'recommended') return test.isRecommended;
    if (filter === 'hormonal') return test.category === 'hormonal';
    if (filter === 'metabolic') return test.category === 'metabolic';
    if (filter === 'ruleout') return test.category === 'ruleout' || test.category === 'imaging';
    return true;
  });

  const recommendedCount = allTests.filter((t) => t.isRecommended).length;

  return (
    <div className="lab-tests-container">
      {/* Hero Header */}
      <div
        style={{
          backgroundColor: '#0F172A',
          color: '#FFFFFF',
          borderRadius: '20px',
          padding: '20px 18px',
          border: '2px solid #1E293B',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span className="progress-category-pill pill-purple">
            {trans.diagnosticPanel}
          </span>
          <span style={{ fontSize: '11.5px', color: '#94A3B8', fontWeight: '800' }}>
            {recommendedCount} {trans.targetedIdentified}
          </span>
        </div>

        <h2 style={{ fontSize: '18px', fontWeight: '800' }}>
          {trans.labTestsHeading}
        </h2>
        <p style={{ fontSize: '13px', color: '#CBD5E1', lineHeight: '1.45' }}>
          {trans.labTestsSub}
        </p>
      </div>

      {/* Filter Tabs */}
      <div style={{ display: 'flex', gap: '6px', overflowX: 'auto', paddingBottom: '2px' }}>
        {[
          { id: 'all', label: trans.allTests },
          { id: 'recommended', label: `${trans.targeted} (${recommendedCount})` },
          { id: 'hormonal', label: trans.hormones },
          { id: 'metabolic', label: trans.metabolic },
          { id: 'ruleout', label: trans.ruleOuts }
        ].map((tab) => (
          <button
            key={tab.id}
            className={`progress-category-pill ${filter === tab.id ? 'pill-blue' : 'pill-dark'}`}
            style={{ cursor: 'pointer', border: 'none', whiteSpace: 'nowrap', fontSize: '11px' }}
            onClick={() => setFilter(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tests List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {filteredTests.map((test) => {
          const isChecked = !!checkedTests[test.id];

          return (
            <div
              key={test.id}
              className={`test-card ${test.isRecommended ? 'recommended' : ''}`}
            >
              <div className="test-top-row">
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', flex: 1 }}>
                  <button
                    type="button"
                    onClick={() => toggleCheck(test.id)}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      padding: '2px',
                      color: isChecked ? 'var(--primary)' : '#94A3B8'
                    }}
                    title="Mark test as discussed or completed"
                  >
                    {isChecked ? <CheckSquare size={24} color="var(--primary)" /> : <Square size={24} />}
                  </button>

                  <div className="test-name-wrap">
                    <div
                      className="test-title"
                      style={{ textDecoration: isChecked ? 'line-through' : 'none' }}
                    >
                      {test.name}
                    </div>
                    <div className="test-marker-code">{test.marker}</div>
                  </div>
                </div>

                <span
                  className={`test-badge pill-${test.badgeColor === 'teal' ? 'blue' : test.badgeColor}`}
                >
                  {test.priority}
                </span>
              </div>

              <div className="test-detail-box">
                <div className="test-detail-row">
                  <span className="test-detail-bold">{trans.whyOrdered}: </span>
                  {test.whyNeeded}
                </div>

                <div className="test-detail-row" style={{ marginTop: '2px' }}>
                  <span className="test-detail-bold" style={{ color: 'var(--primary)' }}>{trans.optimalTiming}: </span>
                  {test.optimalTiming}
                </div>

                <div className="test-detail-row" style={{ marginTop: '2px' }}>
                  <span className="test-detail-bold">{trans.optimalTarget}: </span>
                  {test.normalRange}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Print / Export Report Button */}
      <button
        className="btn-dark"
        onClick={onOpenDoctorModal}
        style={{ marginTop: '8px' }}
      >
        <FileDown size={20} />
        {trans.generateSummary}
      </button>
    </div>
  );
}
