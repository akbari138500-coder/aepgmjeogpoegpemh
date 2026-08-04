import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { subjects } from '../data/subjects';
import { toPersianNumber } from '../utils/helpers';

export default function Home() {
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
    <div className="page">
      <section className="hero">
        <div className="hero__content">
          <div className="hero__text reveal stagger-1">
            <div className="hero__badge">پلتفرم آموزش دندانپزشکی</div>
            <h1 className="hero__title">
              آمادگی کامل برای آزمون <span className="highlight">علوم پایه</span>
            </h1>
            <p className="hero__subtitle">
              دنتالرن با ارائه سوالات طبقه‌بندی شده و شبیه‌سازی آزمون‌ها، شما را در مسیر موفقیت در آزمون‌های علوم پایه و بالینی دندانپزشکی همراهی می‌کند.
            </p>
            <div className="hero__actions">
              <Link to="/quiz" className="btn btn--primary btn--lg">شروع آزمون</Link>
              <Link to="/basic-sciences" className="btn btn--outline btn--lg">مشاهده دروس</Link>
            </div>
            <div className="hero__stats">
              <div className="hero__stat">
                <div className="hero__stat-value">{toPersianNumber(15000)}+</div>
                <div className="hero__stat-label">تعداد سوالات</div>
              </div>
              <div className="hero__stat">
                <div className="hero__stat-value">{toPersianNumber(5000)}+</div>
                <div className="hero__stat-label">کاربران فعال</div>
              </div>
              <div className="hero__stat">
                <div className="hero__stat-value">{toPersianNumber(12)}</div>
                <div className="hero__stat-label">دروس تخصصی</div>
              </div>
            </div>
          </div>
          <div className="hero__visual reveal stagger-2">
            <svg viewBox="0 0 300 300" width="300" height="300" xmlns="http://www.w3.org/2000/svg">
              <rect width="300" height="300" fill="transparent" />
              <path d="M150 50 C200 50, 230 100, 210 150 C190 200, 160 250, 150 280 C140 250, 110 200, 90 150 C70 100, 100 50, 150 50 Z" fill="none" stroke="#00ED64" strokeWidth="8" />
              <path d="M150 50 L150 150 M110 100 L190 100" stroke="#001E2B" strokeWidth="4" />
              <circle cx="150" cy="150" r="30" fill="#00ED64" fillOpacity="0.2" />
            </svg>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="section-header reveal stagger-1">
            <span className="section-header__eyebrow">چرا دنتالرن؟</span>
            <h2 className="section-header__title">امکانات پلتفرم ما</h2>
            <p className="section-header__desc">با ابزارهای پیشرفته دنتالرن، یادگیری خود را هدفمند و موثر کنید.</p>
          </div>
          <div className="grid grid--3">
            <div className="feature-card reveal stagger-2">
              <div className="feature-card__icon">
                <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="2" fill="none">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </div>
              <h3 className="feature-card__title">جامع‌ترین منابع</h3>
              <p className="feature-card__desc">دسترسی به هزاران سوال طبقه‌بندی شده از آزمون‌های سال‌های گذشته.</p>
            </div>
            <div className="feature-card reveal stagger-3">
              <div className="feature-card__icon">
                <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="2" fill="none">
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="6"></circle>
                  <circle cx="12" cy="12" r="2"></circle>
                </svg>
              </div>
              <h3 className="feature-card__title">شبیه‌ساز آزمون</h3>
              <p className="feature-card__desc">تجربه محیط واقعی آزمون با زمان‌بندی و شرایط استاندارد.</p>
            </div>
            <div className="feature-card reveal stagger-4">
              <div className="feature-card__icon">
                <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="2" fill="none">
                  <line x1="18" y1="20" x2="18" y2="10"></line>
                  <line x1="12" y1="20" x2="12" y2="4"></line>
                  <line x1="6" y1="20" x2="6" y2="14"></line>
                </svg>
              </div>
              <h3 className="feature-card__title">تحلیل پیشرفت</h3>
              <p className="feature-card__desc">مشاهده نمودارهای پیشرفت و شناسایی نقاط ضعف و قوت.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header reveal stagger-1">
            <span className="section-header__eyebrow">دروس پایه</span>
            <h2 className="section-header__title">شروع یادگیری دروس</h2>
          </div>
          <div className="grid grid--4">
            {subjects.slice(0, 4).map((subject, index) => (
              <Link to={`/basic-sciences/${subject.id}`} key={subject.id} className={`subject-card reveal stagger-${(index % 4) + 2}`}>
                <div className="subject-card__icon">{subject.icon}</div>
                <div className="subject-card__content">
                  <h3 className="subject-card__title">{subject.name}</h3>
                  <p className="subject-card__desc">{subject.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-dark">
        <div className="container">
          <div className="grid grid--3">
            <div className="stat reveal stagger-1">
              <div className="stat__value">{toPersianNumber(100)}٪</div>
              <div className="stat__label">پوشش سرفصل‌ها</div>
            </div>
            <div className="stat reveal stagger-2">
              <div className="stat__value">{toPersianNumber(24)}/{toPersianNumber(7)}</div>
              <div className="stat__label">دسترسی به منابع</div>
            </div>
            <div className="stat reveal stagger-3">
              <div className="stat__value">{toPersianNumber(50)}+</div>
              <div className="stat__label">استاد مجرب</div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section reveal">
        <div className="container">
          <h2 className="cta-section__title">آماده‌اید تا شروع کنید؟</h2>
          <p className="cta-section__desc">همین امروز به جمع هزاران دانشجوی دندانپزشکی دنتالرن بپیوندید.</p>
          <Link to="/register" className="btn btn--primary btn--lg cta-section__btn">ثبت نام رایگان</Link>
        </div>
      </section>
    </div>
  );
}
