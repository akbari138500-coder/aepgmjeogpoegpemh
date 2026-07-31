import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { subjects, clinicalSpecialties } from '../data/subjects';
import { toPersianNumber } from '../utils/helpers';

const Home = () => {
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

  const topBasicSciences = subjects.slice(0, 4);
  const topClinical = clinicalSpecialties.slice(0, 3);

  return (
    <div className="page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero__particles">
          <div className="hero__particle" style={{ top: '10%', left: '20%', width: '10px', height: '10px', animationDelay: '0s' }}></div>
          <div className="hero__particle" style={{ top: '30%', left: '80%', width: '15px', height: '15px', animationDelay: '1s' }}></div>
          <div className="hero__particle" style={{ top: '50%', left: '10%', width: '8px', height: '8px', animationDelay: '2s' }}></div>
          <div className="hero__particle" style={{ top: '70%', left: '70%', width: '12px', height: '12px', animationDelay: '0.5s' }}></div>
          <div className="hero__particle" style={{ top: '20%', left: '60%', width: '18px', height: '18px', animationDelay: '1.5s' }}></div>
          <div className="hero__particle" style={{ top: '80%', left: '30%', width: '9px', height: '9px', animationDelay: '0.8s' }}></div>
          <div className="hero__particle" style={{ top: '90%', left: '90%', width: '14px', height: '14px', animationDelay: '2.5s' }}></div>
          <div className="hero__particle" style={{ top: '40%', left: '40%', width: '11px', height: '11px', animationDelay: '0.3s' }}></div>
        </div>
        
        <div className="container">
          <div className="hero__content reveal">
            <span className="hero__badge">پلتفرم جامع آموزش دندانپزشکی</span>
            <h1 className="hero__title">
              مسیر موفقیت در <span className="gradient-text">دندانپزشکی</span> از اینجا شروع می‌شود
            </h1>
            <p className="hero__subtitle">
              با جامع‌ترین بانک سوالات علوم پایه و بالینی، خود را برای آزمون‌ها آماده کنید و پیشرفت خود را لحظه به لحظه بسنجید.
            </p>
            
            <div className="hero__actions">
              <Link to="/dashboard" className="btn btn--primary btn--lg">شروع یادگیری</Link>
              <Link to="/basic-sciences" className="btn btn--outline btn--lg">مشاهده دوره‌ها</Link>
            </div>
            
            <div className="hero__stats">
              <div className="hero__stat">
                <span className="hero__stat-value">{toPersianNumber(15000)}+</span>
                <span className="hero__stat-label">سوال استاندارد</span>
              </div>
              <div className="hero__stat">
                <span className="hero__stat-value">{toPersianNumber(35)}+</span>
                <span className="hero__stat-label">مبحث تخصصی</span>
              </div>
              <div className="hero__stat">
                <span className="hero__stat-value">{toPersianNumber(10000)}+</span>
                <span className="hero__stat-label">دانشجوی فعال</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-header__badge">مسیر یادگیری</span>
            <h2 className="section-header__title">چگونه کار می‌کند؟</h2>
            <p className="section-header__desc">با سه قدم ساده، مسیر موفقیت خود را در آزمون‌های دندانپزشکی تضمین کنید.</p>
          </div>
          
          <div className="grid grid--3 stagger-group reveal">
            <div className="feature-card stagger-item">
              <div className="feature-card__number">{toPersianNumber('01')}</div>
              <div className="feature-card__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                </svg>
              </div>
              <h3 className="feature-card__title">مطالعه مباحث</h3>
              <p className="feature-card__desc">مباحث مورد نظر خود را از بین دروس علوم پایه یا بالینی انتخاب کنید و به منابع دسترسی داشته باشید.</p>
            </div>
            
            <div className="feature-card stagger-item">
              <div className="feature-card__number">{toPersianNumber('02')}</div>
              <div className="feature-card__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20h9" />
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                </svg>
              </div>
              <h3 className="feature-card__title">آزمون و تمرین</h3>
              <p className="feature-card__desc">با شرکت در آزمون‌های شبیه‌سازی شده و سوالات تالیفی، دانش خود را محک بزنید.</p>
            </div>
            
            <div className="feature-card stagger-item">
              <div className="feature-card__number">{toPersianNumber('03')}</div>
              <div className="feature-card__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 3v18h18" />
                  <path d="M18 17V9" />
                  <path d="M13 17V5" />
                  <path d="M8 17v-3" />
                </svg>
              </div>
              <h3 className="feature-card__title">تحلیل و پیشرفت</h3>
              <p className="feature-card__desc">با استفاده از نمودارهای تحلیلی، نقاط قوت و ضعف خود را شناسایی کرده و پیشرفت کنید.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Basic Sciences Preview */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-header__badge">علوم پایه</span>
            <h2 className="section-header__title">دروس علوم پایه دندانپزشکی</h2>
            <p className="section-header__desc">مهم‌ترین دروس علوم پایه را با سوالات استاندارد و پاسخنامه‌های تشریحی مرور کنید.</p>
          </div>
          
          <div className="grid grid--4 stagger-group reveal">
            {topBasicSciences.map((subject) => (
              <Link to={`/basic-sciences/${subject.id}`} key={subject.id} className="subject-card stagger-item">
                <div className="subject-card__icon">{subject.icon}</div>
                <h3 className="subject-card__name">{subject.name}</h3>
                <span className="subject-card__count">{toPersianNumber(subject.questionCount)} سوال</span>
              </Link>
            ))}
          </div>
          
          <div className="text-center reveal" style={{ marginTop: '2rem' }}>
            <Link to="/basic-sciences" className="btn btn--ghost">مشاهده همه دروس علوم پایه</Link>
          </div>
        </div>
      </section>

      {/* Clinical Preview */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-header__badge">بالینی</span>
            <h2 className="section-header__title">بخش‌های بالینی تخصصی</h2>
            <p className="section-header__desc">کیس‌های کلینیکی و سوالات بورد تخصصی برای آمادگی کامل در بخش‌های بالینی.</p>
          </div>
          
          <div className="grid grid--3 stagger-group reveal">
            {topClinical.map((specialty) => (
              <div key={specialty.id} className="card card--glass stagger-item">
                <div className="card__icon card__icon--primary">{specialty.icon}</div>
                <h3 className="card__title">{specialty.name}</h3>
                <div className="card__desc">{toPersianNumber(specialty.caseCount)} کیس کلینیکی</div>
                <div className="card__footer">
                  <Link to={`/clinical/${specialty.id}`} className="btn btn--sm btn--primary">شروع بخش</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section reveal">
        <div className="container">
          <div className="card card--dark text-center">
            <h2 className="cta-section__title">آماده شروع هستید؟</h2>
            <p className="cta-section__desc">همین امروز ثبت‌نام کنید و به جمع هزاران دانشجوی موفق دندانپزشکی بپیوندید.</p>
            <Link to="/signup" className="btn btn--gradient btn--lg cta-section__btn">ایجاد حساب کاربری رایگان</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
