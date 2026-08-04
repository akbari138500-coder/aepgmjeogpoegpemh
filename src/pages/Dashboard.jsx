import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { subjects } from '../data/subjects';
import { toPersianNumber } from '../utils/helpers';
import ProgressRing from '../components/common/ProgressRing';

export default function Dashboard() {
  const mockSubjectProgress = subjects.slice(0, 5).map((subject, i) => ({
    ...subject,
    progress: Math.floor(Math.random() * 60) + 20
  }));

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
  }, []);

  return (
    <div className="page bg-light">
      <div className="container">
        <div className="section-header reveal stagger-1">
          <h1 className="section-header__title">خوش آمدید، دانشجوی عزیز!</h1>
          <p className="section-header__desc">خلاصه وضعیت آموزشی و پیشرفت شما در اینجا قابل مشاهده است.</p>
        </div>

        <div className="grid grid--3 mb-8">
          <div className="card reveal stagger-1">
            <div className="card__icon">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
            </div>
            <div className="card__content">
              <h3 className="card__title">سوالات پاسخ داده</h3>
              <div className="stat__value text-primary">{toPersianNumber(1284)}</div>
            </div>
          </div>
          <div className="card reveal stagger-2">
            <div className="card__icon">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            </div>
            <div className="card__content">
              <h3 className="card__title">دقت کلی</h3>
              <div className="stat__value text-primary">{toPersianNumber(72)}٪</div>
            </div>
          </div>
          <div className="card reveal stagger-3">
            <div className="card__icon">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            </div>
            <div className="card__content">
              <h3 className="card__title">روزهای متوالی</h3>
              <div className="stat__value text-primary">{toPersianNumber(5)}</div>
            </div>
          </div>
        </div>

        <div className="grid grid--2">
          <div className="card card--flat reveal stagger-4">
            <h3 className="card__title mb-4">پیشرفت کلی</h3>
            <div className="flex-center py-4">
              <ProgressRing 
                size={200} 
                strokeWidth={16} 
                percentage={45} 
                label={`${toPersianNumber(45)}٪`} 
              />
            </div>
            <p className="text-center mt-4">شما ۴۵٪ از مسیر آمادگی آزمون را طی کرده‌اید.</p>
          </div>
          
          <div className="card card--flat reveal stagger-5">
            <h3 className="card__title mb-4">وضعیت دروس</h3>
            <div className="flex-col gap-4">
              {mockSubjectProgress.map(subject => (
                <div key={subject.id} className="subject-progress-item">
                  <div className="flex-between mb-2">
                    <span className="font-medium">{subject.name}</span>
                    <span>{toPersianNumber(subject.progress)}٪</span>
                  </div>
                  <div className="quiz-progress-bar">
                    <div className="quiz-progress-bar__fill" style={{ width: `${subject.progress}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link to="/basic-sciences" className="btn btn--outline">مشاهده همه دروس</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
