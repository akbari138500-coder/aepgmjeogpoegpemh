import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { subjects } from '../data/subjects';
import { toPersianNumber } from '../utils/helpers';

const BasicSciences = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredSubjects, setFilteredSubjects] = useState(subjects);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const revealElements = document.querySelectorAll('.reveal, .fade-up');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredSubjects(subjects);
    } else {
      const lowerQuery = searchQuery.toLowerCase();
      setFilteredSubjects(
        subjects.filter((s) => 
          s.name.toLowerCase().includes(lowerQuery) || 
          s.description.toLowerCase().includes(lowerQuery)
        )
      );
    }
  }, [searchQuery]);

  return (
    <div className="page page-content">
      <div className="container">
        <div className="section-header reveal text-center">
          <h1 className="section-header__title">علوم پایه دندانپزشکی</h1>
          <p className="section-header__desc">گنجینه‌ای از سوالات و درسنامه‌های جامع برای آمادگی در آزمون علوم پایه</p>
        </div>

        <div className="search-bar reveal">
          <svg className="search-bar__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input 
            type="text" 
            className="search-bar__input" 
            placeholder="جستجوی درس یا مبحث..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {filteredSubjects.length > 0 ? (
          <div className="grid grid--3 stagger-group reveal mt-8">
            {filteredSubjects.map((subject) => {
              // Mock random progress for UI demonstration
              const progressPercentage = Math.floor(Math.random() * 60) + 10;
              
              return (
                <Link to={`/basic-sciences/${subject.id}`} key={subject.id} className="subject-card stagger-item">
                  <div className="subject-card__icon">{subject.icon}</div>
                  <h3 className="subject-card__name">{subject.name}</h3>
                  <p className="card__desc">{subject.description}</p>
                  
                  <div className="subject-card__progress">
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                      <span>پیشرفت شما</span>
                      <span>{toPersianNumber(progressPercentage)}%</span>
                    </div>
                    <div style={{ height: '8px', background: 'var(--border)', borderRadius: '4px', overflow: 'hidden' }}>
                      <div className="subject-card__progress-fill" style={{ width: `${progressPercentage}%`, height: '100%', background: 'var(--primary)', borderRadius: '4px' }}></div>
                    </div>
                  </div>
                  
                  <div className="subject-card__count text-center mt-4" style={{ display: 'block', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                    {toPersianNumber(subject.questionCount)} سوال موجود
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="empty-state reveal">
            <div className="empty-state__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>
            <h3 className="empty-state__title">نتیجه‌ای یافت نشد</h3>
            <p className="empty-state__text">با کلمات کلیدی دیگری جستجو کنید.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BasicSciences;
