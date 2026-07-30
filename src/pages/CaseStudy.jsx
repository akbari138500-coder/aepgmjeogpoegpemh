import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { sampleCases } from '../data/sampleCases';
import { clinicalSpecialties } from '../data/subjects';
import { toPersianNumber, getDifficultyColor } from '../utils/helpers';

export default function CaseStudy() {
  const { caseId } = useParams();
  const navigate = useNavigate();

  const [expandedSections, setExpandedSections] = useState({
    history: true,
    examination: false,
    diagnosis: false,
    treatment: false,
  });
  const [showDiagnosis, setShowDiagnosis] = useState(false);

  const currentCase = sampleCases.find((c) => c.id === caseId);
  const specialty = clinicalSpecialties.find((s) => s.id === currentCase?.specialtyId);

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  if (!currentCase) {
    return (
      <div className="container" style={{ textAlign: 'center', padding: '5rem' }}>
        <div style={{ fontSize: '4rem', marginBottom: 'var(--space-4)' }}>🔍</div>
        <h2>کیس مورد نظر یافت نشد</h2>
        <p style={{ color: 'var(--text-tertiary)', marginTop: 'var(--space-2)', marginBottom: 'var(--space-6)' }}>
          ممکن است آدرس صفحه اشتباه باشد.
        </p>
        <button onClick={() => navigate('/clinical')} className="btn btn--primary">
          بازگشت به دروس بالینی
        </button>
      </div>
    );
  }

  /* Accordion section renderer */
  const Section = ({ id, title, icon, children }) => (
    <div className="card" style={{ padding: 0, overflow: 'hidden', marginBottom: 'var(--space-4)' }}>
      <button
        onClick={() => toggleSection(id)}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 'var(--space-5)',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontFamily: 'var(--font-fa)',
          fontSize: 'var(--text-base)',
          fontWeight: 'var(--font-semibold)',
          color: 'var(--text-primary)',
        }}
      >
        <span style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
          <span>{icon}</span> {title}
        </span>
        <span style={{ transition: 'transform 0.3s', transform: expandedSections[id] ? 'rotate(180deg)' : 'rotate(0)' }}>
          ▼
        </span>
      </button>
      {expandedSections[id] && (
        <div style={{ padding: '0 var(--space-5) var(--space-5)', animation: 'slideDown 0.3s ease' }}>
          {children}
        </div>
      )}
    </div>
  );

  return (
    <div className="container" style={{ maxWidth: 'var(--container-md)', margin: '0 auto', padding: 'var(--space-8) var(--space-4)' }}>
      {/* Back button */}
      <Link
        to="/clinical"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 'var(--space-2)',
          color: 'var(--text-tertiary)',
          marginBottom: 'var(--space-6)',
          fontSize: 'var(--text-sm)',
        }}
      >
        ← بازگشت به دروس بالینی
      </Link>

      {/* Case Header */}
      <header className="animate-fade-in-up" style={{ marginBottom: 'var(--space-8)' }}>
        <div style={{ display: 'flex', gap: 'var(--space-2)', marginBottom: 'var(--space-3)', flexWrap: 'wrap' }}>
          {specialty && (
            <span className="badge badge--primary">{specialty.icon} {specialty.name}</span>
          )}
          <span
            className="badge"
            style={{
              background: getDifficultyColor(currentCase.difficulty) === 'var(--color-success)' ? 'var(--color-success-bg)' :
                getDifficultyColor(currentCase.difficulty) === 'var(--color-warning)' ? 'var(--color-warning-bg)' : 'var(--color-error-bg)',
              color: getDifficultyColor(currentCase.difficulty),
            }}
          >
            {currentCase.difficultyLabel}
          </span>
        </div>
        <h1 style={{ fontSize: 'var(--text-3xl)', lineHeight: 'var(--leading-tight)', marginBottom: 'var(--space-2)' }}>
          {currentCase.title}
        </h1>
      </header>

      {/* Patient Info Card — Always Visible */}
      <div
        className="card animate-fade-in-up stagger-1"
        style={{
          marginBottom: 'var(--space-6)',
          borderRight: '4px solid var(--color-primary)',
          borderRadius: 'var(--radius-sm)',
        }}
      >
        <h3 style={{ fontSize: 'var(--text-base)', marginBottom: 'var(--space-4)', color: 'var(--color-primary)' }}>
          👤 اطلاعات بیمار
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 'var(--space-4)' }}>
          <div>
            <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)', marginBottom: 'var(--space-1)' }}>سن</div>
            <div style={{ fontWeight: 'var(--font-semibold)' }}>{toPersianNumber(currentCase.patientInfo.age)} سال</div>
          </div>
          <div>
            <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)', marginBottom: 'var(--space-1)' }}>جنسیت</div>
            <div style={{ fontWeight: 'var(--font-semibold)' }}>{currentCase.patientInfo.gender}</div>
          </div>
          <div style={{ gridColumn: '1 / -1' }}>
            <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)', marginBottom: 'var(--space-1)' }}>
              شکایت اصلی (Chief Complaint)
            </div>
            <div style={{ fontWeight: 'var(--font-semibold)', lineHeight: 'var(--leading-relaxed)' }}>
              «{currentCase.patientInfo.chiefComplaint}»
            </div>
          </div>
        </div>
      </div>

      {/* Accordion Sections */}
      <div className="animate-fade-in-up stagger-2">
        <Section id="history" title="شرح حال" icon="📋">
          <p style={{ color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)' }}>
            {currentCase.history}
          </p>
        </Section>

        <Section id="examination" title="معاینه بالینی و یافته‌ها" icon="🩺">
          <p style={{ color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)' }}>
            {currentCase.examination}
          </p>
        </Section>

        {/* Diagnosis — Spoiler */}
        <div className="card" style={{ padding: 0, overflow: 'hidden', marginBottom: 'var(--space-4)' }}>
          <button
            onClick={() => toggleSection('diagnosis')}
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 'var(--space-5)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'var(--font-fa)',
              fontSize: 'var(--text-base)',
              fontWeight: 'var(--font-semibold)',
              color: 'var(--text-primary)',
            }}
          >
            <span>🎯 تشخیص</span>
            <span style={{ transition: 'transform 0.3s', transform: expandedSections.diagnosis ? 'rotate(180deg)' : 'rotate(0)' }}>▼</span>
          </button>
          {expandedSections.diagnosis && (
            <div style={{ padding: '0 var(--space-5) var(--space-5)' }}>
              {!showDiagnosis ? (
                <button
                  onClick={() => setShowDiagnosis(true)}
                  className="btn btn--outline btn--full"
                  style={{ padding: 'var(--space-4)', borderStyle: 'dashed' }}
                >
                  👁️ برای مشاهده تشخیص کلیک کنید
                </button>
              ) : (
                <div
                  style={{
                    background: 'var(--color-success-bg)',
                    padding: 'var(--space-5)',
                    borderRadius: 'var(--radius-md)',
                    borderRight: '4px solid var(--color-success)',
                    animation: 'fadeInUp 0.4s ease',
                  }}
                >
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-success)', marginBottom: 'var(--space-2)', fontWeight: 'var(--font-semibold)' }}>
                    تشخیص نهایی:
                  </div>
                  <div style={{ fontSize: 'var(--text-lg)', fontWeight: 'var(--font-bold)', color: 'var(--text-primary)' }}>
                    {currentCase.diagnosis}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        <Section id="treatment" title="طرح درمان" icon="💊">
          <p style={{ color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)', marginBottom: 'var(--space-6)' }}>
            {currentCase.treatmentPlan}
          </p>

          {/* Timeline */}
          {currentCase.timeline && currentCase.timeline.length > 0 && (
            <div className="case-timeline" style={{ marginTop: 'var(--space-4)' }}>
              {currentCase.timeline.map((item, idx) => (
                <div key={idx} className="timeline-item">
                  <div className={`timeline-item__dot ${idx === 0 ? 'timeline-item__dot--active' : ''}`} />
                  <div className="timeline-item__content">
                    <div className="timeline-item__title">
                      مرحله {toPersianNumber(item.step)} — {item.title}
                    </div>
                    <p className="timeline-item__text">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Section>
      </div>

      {/* Key Points */}
      {currentCase.keyPoints && currentCase.keyPoints.length > 0 && (
        <div
          className="card animate-fade-in-up stagger-3"
          style={{ background: 'var(--color-warning-bg)', borderRight: '4px solid var(--color-warning)', borderRadius: 'var(--radius-sm)' }}
        >
          <h3 style={{ fontSize: 'var(--text-base)', marginBottom: 'var(--space-4)', color: 'var(--color-warning)' }}>
            💡 نکات کلیدی آموزنده
          </h3>
          <ul style={{ paddingRight: 'var(--space-5)', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
            {currentCase.keyPoints.map((point, idx) => (
              <li key={idx} style={{ color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)' }}>{point}</li>
            ))}
          </ul>
        </div>
      )}

      {/* References */}
      {currentCase.references && currentCase.references.length > 0 && (
        <div className="animate-fade-in-up stagger-4" style={{ marginTop: 'var(--space-6)' }}>
          <h4 style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)', marginBottom: 'var(--space-3)' }}>📚 منابع:</h4>
          <ul style={{ paddingRight: 'var(--space-5)' }}>
            {currentCase.references.map((ref, idx) => (
              <li key={idx} style={{ fontSize: 'var(--text-sm)', color: 'var(--text-tertiary)', fontFamily: 'var(--font-en)', direction: 'ltr', textAlign: 'left' }}>
                {ref}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
