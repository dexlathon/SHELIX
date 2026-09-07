import React, { useState } from 'react';
import {
  X,
  MapPin,
  Phone,
  Calendar,
  AlertTriangle,
  Stethoscope,
  Activity,
  Sparkles,
  Apple,
  Star,
  ShieldCheck,
  Search,
  ExternalLink,
  Share2,
  Clock,
  CheckCircle2,
  HeartPulse
} from 'lucide-react';
import { CITIES, SPECIALTIES, SEVERE_RED_FLAGS, DOCTORS_DIRECTORY } from '../data/doctors';

export const SpecialtyIcon = ({ specialtyId, size = 18 }) => {
  switch (specialtyId) {
    case 'gynecologist':
      return <Stethoscope size={size} />;
    case 'endocrinologist':
      return <Activity size={size} />;
    case 'dermatologist':
      return <Sparkles size={size} />;
    case 'nutritionist':
      return <Apple size={size} />;
    case 'urgent_care':
      return <AlertTriangle size={size} />;
    default:
      return <Stethoscope size={size} />;
  }
};

export default function LocalDoctorsModal({
  isOpen,
  onClose,
  assessment,
  user,
  onOpenDoctorSummary,
  t
}) {
  if (!isOpen) return null;

  const trans = t || {};
  const [selectedCity, setSelectedCity] = useState('chennai');
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [bookingSuccessDoctor, setBookingSuccessDoctor] = useState(null);

  // Filter doctors list
  const filteredDoctors = DOCTORS_DIRECTORY.filter((doc) => {
    const matchCity = doc.city === selectedCity;
    const matchSpecialty = selectedSpecialty === 'all' || doc.specialty === selectedSpecialty;
    const matchSearch =
      searchQuery.trim() === '' ||
      doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.hospital.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.area.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.focus.toLowerCase().includes(searchQuery.toLowerCase());

    return matchCity && matchSpecialty && matchSearch;
  });

  const handleBook = (doctor) => {
    setBookingSuccessDoctor(doctor);
    setTimeout(() => {
      setBookingSuccessDoctor(null);
    }, 4500);
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
          maxWidth: '560px',
          height: '90vh',
          maxHeight: '780px',
          display: 'flex',
          flexDirection: 'column',
          padding: 0,
          overflow: 'hidden'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div
          style={{
            backgroundColor: 'var(--primary)',
            color: '#FFFFFF',
            padding: '14px 18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '2px solid rgba(255, 255, 255, 0.2)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <HeartPulse size={20} color="#FFFFFF" />
            </div>
            <div>
              <div style={{ fontSize: '15.5px', fontWeight: '800' }}>
                {trans.doctorDirTitle || 'Local PCOS Specialists & Doctors'}
              </div>
              <div style={{ fontSize: '11px', color: '#DBEAFE', fontWeight: '600' }}>
                Verified Doctors, Endocrinologists & 24/7 ER
              </div>
            </div>
          </div>

          <button
            className="header-action-btn"
            onClick={onClose}
            title="Close"
            style={{ backgroundColor: 'rgba(0,0,0,0.2)', borderColor: 'rgba(255,255,255,0.3)', color: '#FFFFFF' }}
          >
            <X size={17} />
          </button>
        </div>

        {/* Scrollable Container */}
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
          {/* SEVERE SYMPTOMS RED FLAG ALERT BOX */}
          <div
            style={{
              backgroundColor: '#FEF2F2',
              border: '2px solid #EF4444',
              borderRadius: 'var(--radius-md)',
              padding: '12px 14px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#991B1B' }}>
              <AlertTriangle size={18} color="#DC2626" />
              <span style={{ fontSize: '13px', fontWeight: '800', textTransform: 'uppercase' }}>
                {trans.emergencyCareTitle || 'Severe Symptom Emergency Red Flags'}
              </span>
            </div>

            <p style={{ fontSize: '11.5px', color: '#7F1D1D', margin: 0, lineHeight: 1.45, fontWeight: '600' }}>
              {trans.emergencyCareDesc ||
                'If you experience acute sharp pelvic pain, soaking 2+ pads/hour, or dizziness, visit an emergency hospital ER immediately.'}
            </p>

            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '2px' }}>
              <a
                href="tel:108"
                className="btn-primary"
                style={{
                  backgroundColor: '#DC2626',
                  borderColor: '#DC2626',
                  color: '#FFFFFF',
                  padding: '6px 12px',
                  fontSize: '11.5px',
                  borderRadius: '6px',
                  textDecoration: 'none'
                }}
              >
                <Phone size={13} />
                {trans.callEmergency || 'Call National Emergency (108)'}
              </a>
              <a
                href="tel:1091"
                className="btn-secondary"
                style={{
                  padding: '6px 12px',
                  fontSize: '11.5px',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  borderColor: '#F87171',
                  color: '#991B1B'
                }}
              >
                <ShieldCheck size={13} />
                Women Helpline (1091)
              </a>
            </div>
          </div>

          {/* Booking Success Toast Banner */}
          {bookingSuccessDoctor && (
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
              <div>
                <div style={{ fontSize: '13px', fontWeight: '800', color: '#065F46' }}>
                  Consultation Request Sent!
                </div>
                <div style={{ fontSize: '11.5px', color: '#047857', fontWeight: '600' }}>
                  The clinic coordinator at {bookingSuccessDoctor.hospital} will call you shortly to confirm your slot.
                </div>
              </div>
            </div>
          )}

          {/* Search & Location Filter Controls */}
          <div
            style={{
              backgroundColor: 'var(--bg-card)',
              border: '2px solid var(--border-mid)',
              borderRadius: 'var(--radius-md)',
              padding: '12px 14px',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px'
            }}
          >
            {/* City Selector */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <MapPin size={16} color="var(--primary)" />
              <span style={{ fontSize: '12.5px', fontWeight: '800', color: 'var(--text-main)' }}>
                {trans.selectCity || 'Select City'}:
              </span>
              <select
                className="lang-select-dropdown"
                style={{ flex: 1, padding: '6px 10px', fontSize: '12.5px' }}
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
              >
                {CITIES.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name} ({c.state})
                  </option>
                ))}
              </select>
            </div>

            {/* Keyword Search */}
            <div style={{ position: 'relative' }}>
              <Search
                size={15}
                color="var(--text-light)"
                style={{ position: 'absolute', left: '10px', top: '10px' }}
              />
              <input
                type="text"
                placeholder="Search by doctor name, hospital, or symptom focus..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '8px 10px 8px 32px',
                  backgroundColor: 'var(--bg-subtle)',
                  border: '1.5px solid var(--border-mid)',
                  borderRadius: '8px',
                  fontSize: '12.5px',
                  color: 'var(--text-main)',
                  outline: 'none'
                }}
              />
            </div>

            {/* Specialty Horizontal Chips */}
            <div
              style={{
                display: 'flex',
                gap: '6px',
                overflowX: 'auto',
                whiteSpace: 'nowrap',
                paddingBottom: '2px'
              }}
            >
              {SPECIALTIES.map((sp) => {
                const isActive = selectedSpecialty === sp.id;
                return (
                  <button
                    key={sp.id}
                    type="button"
                    onClick={() => setSelectedSpecialty(sp.id)}
                    className={`progress-category-pill ${isActive ? 'pill-blue' : 'pill-teal'}`}
                    style={{
                      cursor: 'pointer',
                      fontSize: '11px',
                      border: isActive ? '1.5px solid var(--primary)' : '1px solid transparent',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    <SpecialtyIcon specialtyId={sp.id} size={12} />
                    {sp.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* DOCTORS LISTING */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '13px', fontWeight: '800', color: 'var(--text-main)' }}>
                {filteredDoctors.length} {filteredDoctors.length === 1 ? 'Specialist' : 'Specialists'} in {CITIES.find(c => c.id === selectedCity)?.name}
              </span>
              {assessment && (
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenDoctorSummary();
                  }}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--primary)',
                    fontSize: '11.5px',
                    fontWeight: '800',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  <Share2 size={12} />
                  {trans.shareSummaryWithDoctor || 'View Doctor Brief'}
                </button>
              )}
            </div>

            {filteredDoctors.length === 0 ? (
              <div
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '2px solid var(--border-mid)',
                  borderRadius: 'var(--radius-md)',
                  padding: '24px 16px',
                  textAlign: 'center',
                  color: 'var(--text-light)',
                  fontSize: '13px'
                }}
              >
                No specialists found matching your search in this city. Try selecting "All Specialists" or choosing another city.
              </div>
            ) : (
              filteredDoctors.map((doc) => {
                const isEmergency = doc.specialty === 'urgent_care';

                return (
                  <div
                    key={doc.id}
                    style={{
                      backgroundColor: 'var(--bg-card)',
                      border: `2px solid ${isEmergency ? '#F87171' : 'var(--border-mid)'}`,
                      borderRadius: 'var(--radius-md)',
                      padding: '14px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '10px'
                    }}
                  >
                    {/* Doctor Top Info */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px' }}>
                      <div style={{ display: 'flex', gap: '10px' }}>
                        <div
                          style={{
                            width: '42px',
                            height: '42px',
                            borderRadius: '8px',
                            backgroundColor: isEmergency ? '#FEF2F2' : 'var(--primary-subtle)',
                            color: isEmergency ? '#DC2626' : 'var(--primary)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                          }}
                        >
                          <SpecialtyIcon specialtyId={doc.specialty} size={22} />
                        </div>

                        <div>
                          <div style={{ fontSize: '14px', fontWeight: '800', color: 'var(--text-main)' }}>
                            {doc.name}
                          </div>
                          <div style={{ fontSize: '11.5px', color: 'var(--primary)', fontWeight: '700' }}>
                            {doc.title}
                          </div>
                          <div style={{ fontSize: '10.5px', color: 'var(--text-light)', fontWeight: '600' }}>
                            {doc.qualification}
                          </div>
                        </div>
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '2px' }}>
                        <div
                          style={{
                            backgroundColor: '#FEF3C7',
                            color: '#92400E',
                            padding: '2px 6px',
                            borderRadius: '4px',
                            fontSize: '11px',
                            fontWeight: '800',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '3px'
                          }}
                        >
                          <Star size={11} fill="#F59E0B" color="#F59E0B" />
                          {doc.rating}
                        </div>
                        <span style={{ fontSize: '9.5px', color: 'var(--text-light)', fontWeight: '600' }}>
                          ({doc.reviewCount} reviews)
                        </span>
                      </div>
                    </div>

                    {/* Hospital & Location */}
                    <div
                      style={{
                        backgroundColor: 'var(--bg-subtle)',
                        borderRadius: '6px',
                        padding: '8px 10px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '4px',
                        fontSize: '11.5px'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-main)', fontWeight: '700' }}>
                        <MapPin size={13} color="var(--primary)" />
                        {doc.hospital}
                      </div>
                      <div style={{ fontSize: '11px', color: 'var(--text-light)', marginLeft: '19px' }}>
                        {doc.area}
                      </div>
                      <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginLeft: '19px', fontWeight: '600' }}>
                        🎯 Focus: {doc.focus}
                      </div>
                    </div>

                    {/* Badges row */}
                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', alignItems: 'center' }}>
                      <span className="progress-category-pill pill-blue" style={{ fontSize: '10px' }}>
                        {doc.experience}
                      </span>
                      <span className="progress-category-pill pill-teal" style={{ fontSize: '10px' }}>
                        Fee: {doc.fee}
                      </span>
                      {doc.availableToday && (
                        <span className="progress-category-pill pill-emerald" style={{ fontSize: '10px' }}>
                          {trans.availableTodayBadge || 'Available Today'}
                        </span>
                      )}
                      <span style={{ fontSize: '10.5px', color: 'var(--text-light)', fontWeight: '600', marginLeft: 'auto' }}>
                        🗣️ {doc.languages.join(', ')}
                      </span>
                    </div>

                    {/* Action Buttons */}
                    <div style={{ display: 'flex', gap: '8px', marginTop: '2px' }}>
                      <a
                        href={`tel:${doc.phone.replace(/[^0-9+]/g, '')}`}
                        className="btn-secondary"
                        style={{
                          flex: 1,
                          padding: '8px 12px',
                          fontSize: '12px',
                          borderRadius: '8px',
                          textDecoration: 'none',
                          justifyContent: 'center'
                        }}
                      >
                        <Phone size={13} />
                        {trans.callClinic || 'Call Clinic'}
                      </a>

                      <button
                        type="button"
                        className="btn-primary"
                        onClick={() => handleBook(doc)}
                        style={{
                          flex: 1.3,
                          padding: '8px 12px',
                          fontSize: '12px',
                          borderRadius: '8px'
                        }}
                      >
                        <Calendar size={13} />
                        {trans.bookAppointment || 'Book Appointment'}
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Modal Bottom Footer */}
        <div
          style={{
            backgroundColor: 'var(--bg-card)',
            borderTop: '2px solid var(--border-light)',
            padding: '12px 16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <span style={{ fontSize: '11px', color: 'var(--text-light)', fontWeight: '600' }}>
            Emergency: 108 • Women: 1091
          </span>
          <button type="button" className="btn-secondary" onClick={onClose} style={{ padding: '8px 16px', fontSize: '12px' }}>
            {trans.close || 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
}
