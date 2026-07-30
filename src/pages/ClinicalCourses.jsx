import { useState } from 'react';
import { Link } from 'react-router-dom';
import { clinicalSpecialties } from '../data/subjects';
import { sampleCases } from '../data/sampleCases';
import { toPersianNumber, getDifficultyColor } from '../utils/helpers';

const DIFFICULTY_MAP = {
  'همه': null,
  'آسان': 'easy',
  'متوسط': 'intermediate',
  'سخت': 'hard',
};

export default function ClinicalCourses() {
  const [activeTab, setActiveTab] = useState('همه');
  const tabs = ['همه', 'آسان', 'متوسط', 'سخت'];

  const filteredCases = activeTab === 'همه'
    ? sampleCases
    : sampleCases.filter((c) => c.difficulty === DIFFICULTY_MAP[activeTab]);

  return (
    <div className="container" style={{ maxWidth: 'var(--container-xl)', margin: '0 auto', padding: 'var(--space-8) var(--space-4)' }}>
      {/* Header */}
      <header className="animate-fade-in-up" style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
        <h1 style={{ fontSize: 'var(--text-4xl)', marginBottom: 'var(--space-4)' }}>دروس بالینی</h1>
        <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
          یادگیری مبتنی بر کیس‌های واقعی دندانپزشکی. تشخیص، طرح درمان و مدیریت بیمار را با سناریوهای بالینی تمرین کنید.
        </p>
      </header>

      {/* Specialties Grid */}
      <section style={{ marginBottom: 'var(--space-16)' }}>
        <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-6)' }}>تخصص‌های بالینی</h2>
        <div className="grid grid--3">
          {clinicalSpecialties.map((specialty, idx) => (
            <div
              key={specialty.id}
              className={`subject-card animate-fade-in-up stagger-${idx + 1}`}
              style={{ cursor: 'default' }}
            >
              <div
                className="subject-card__icon"
                style={{ background: `${specialty.color}18`, fontSize: 'var(--text-2xl)' }}
              >
                {specialty.icon}
              </div>
              <div className="subject-card__info">
                <div className="subject-card__name">{specialty.name}</div>
                <div className="subject-card__count">{toPersianNumber(specialty.caseCount)} کیس بالینی</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cases Section */}
      <section>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-6)', flexWrap: 'wrap', gap: 'var(--space-4)' }}>
          <h2 style={{ fontSize: 'var(--text-2xl)' }}>جدیدترین کیس‌ها</h2>
          <div className="tabs">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`tab ${activeTab === tab ? 'tab--active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid--2">
          {filteredCases.map((c, idx) => {
            const specialty = clinicalSpecialties.find((s) => s.id === c.specialtyId);
            return (
              <Link
                to={`/clinical/${c.id}`}
                key={c.id}
                className={`case-card animate-fade-in-up stagger-${idx + 1}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <div className="case-card__body">
                  <div style={{ display: 'flex', gap: 'var(--space-2)', marginBottom: 'var(--space-3)', flexWrap: 'wrap' }}>
                    {specialty && (
                      <span className="case-card__specialty">{specialty.icon} {specialty.name}</span>
                    )}
                    <span
                      className="badge"
                      style={{
                        background: getDifficultyColor(c.difficulty) === 'var(--color-success)' ? 'var(--color-success-bg)' :
                          getDifficultyColor(c.difficulty) === 'var(--color-warning)' ? 'var(--color-warning-bg)' : 'var(--color-error-bg)',
                        color: getDifficultyColor(c.difficulty),
                      }}
                    >
                      {c.difficultyLabel}
                    </span>
                  </div>

                  <h3 className="case-card__title" style={{ fontSize: 'var(--text-base)', lineHeight: 'var(--leading-normal)' }}>
                    {c.title}
                  </h3>

                  <div className="case-card__meta" style={{ marginTop: 'var(--space-3)' }}>
                    <span>بیمار: {toPersianNumber(c.patientInfo.age)} ساله، {c.patientInfo.gender}</span>
                  </div>

                  <p style={{
                    fontSize: 'var(--text-sm)',
                    color: 'var(--text-tertiary)',
                    marginTop: 'var(--space-3)',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    lineHeight: 'var(--leading-relaxed)',
                  }}>
                    {c.patientInfo.chiefComplaint}
                  </p>

                  <div style={{ marginTop: 'var(--space-4)', display: 'flex', justifyContent: 'flex-end' }}>
                    <span style={{ color: 'var(--color-primary)', fontSize: 'var(--text-sm)', fontWeight: 'var(--font-semibold)' }}>
                      مشاهده کیس ←
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}

          {filteredCases.length === 0 && (
            <div className="empty-state" style={{ gridColumn: '1 / -1' }}>
              <div className="empty-state__icon">🔍</div>
              <div className="empty-state__title">کیسی با این سطح یافت نشد</div>
              <div className="empty-state__text">سطح دیگری را انتخاب کنید</div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
