import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { subjects } from '../data/subjects';
import { toPersianNumber } from '../utils/helpers';

export default function BasicSciences() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredSubjects, setFilteredSubjects] = useState(subjects);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [filteredSubjects]);

  useEffect(() => {
    setFilteredSubjects(
      subjects.filter(subject => subject.name.includes(searchTerm) || subject.description.includes(searchTerm))
    );
  }, [searchTerm]);

  return (
    <div className="page">
      <div className="container">
        <div className="section-header reveal stagger-1">
          <span className="section-header__eyebrow">علوم پایه</span>
          <h1 className="section-header__title">دروس علوم پایه دندانپزشکی</h1>
          <p className="section-header__desc">لیست کامل دروس علوم پایه همراه با بانک سوالات اختصاصی هر درس.</p>
        </div>

        <div className="search-bar reveal stagger-2">
          <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input 
            type="text" 
            placeholder="جستجوی درس..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {filteredSubjects.length > 0 ? (
          <div className="grid grid--3">
            {filteredSubjects.map((subject, index) => (
              <Link to={`/basic-sciences/${subject.id}`} key={subject.id} className={`subject-card reveal stagger-${(index % 4) + 1}`}>
                <div className="subject-card__icon">{subject.icon}</div>
                <div className="subject-card__content">
                  <h3 className="subject-card__title">{subject.name}</h3>
                  <p className="subject-card__desc">{subject.description}</p>
                  <div className="subject-card__progress">
                    <span>{toPersianNumber(subject.questionCount)} سوال</span>
                    <div className="subject-card__progress-bar">
                      <div className="subject-card__progress-fill" style={{ width: '0%' }}></div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="empty-state reveal">
            <div className="empty-state__icon">
              <svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" strokeWidth="1.5" fill="none">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
            <h3 className="empty-state__title">نتیجه‌ای یافت نشد</h3>
            <p className="empty-state__text">هیچ درسی با عبارت جستجو شده مطابقت ندارد. لطفاً عبارت دیگری را امتحان کنید.</p>
          </div>
        )}
      </div>
    </div>
  );
}
