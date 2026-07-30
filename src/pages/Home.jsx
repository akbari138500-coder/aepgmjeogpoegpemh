import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { subjects, clinicalSpecialties } from '../data/subjects';
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
    <div className="home-page">
      {/* Hero Section */}
      <section 
        className="hero" 
        style={{
          background: 'linear-gradient(135deg, #0A4D4A 0%, #073937 50%, #1A1A2E 100%)',
          padding: '8rem 2rem 6rem',
          color: 'white',
          textAlign: 'center',
          borderRadius: '0 0 40px 40px',
          marginBottom: '4rem'
        }}
      >
        <div className="container reveal fade-up">
          <h1 className="font-en" style={{ fontSize: '4rem', marginBottom: '1rem', fontWeight: 800 }}>
            🦷 DentaLearn
          </h1>
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#a7f3d0' }}>
            پلتفرم آموزشی هوشمند برای دانشجویان دندانپزشکی ایران
          </h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '3rem', maxWidth: '800px', margin: '0 auto 3rem', opacity: 0.9 }}>
            آمادگی آزمون علوم پایه با بیش از ۳۵۰۰ سوال واقعی و یادگیری بالینی مبتنی بر کیس‌های واقعی
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/basic-sciences" className="btn btn--accent" style={{ padding: '1rem 2rem', fontSize: '1.1rem', borderRadius: '50px' }}>
              شروع آزمون علوم پایه
            </Link>
            <Link to="/clinical" className="btn btn--outline" style={{ padding: '1rem 2rem', fontSize: '1.1rem', borderRadius: '50px', borderColor: 'white', color: 'white' }}>
              مشاهده کیس‌های بالینی
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container section reveal fade-up">
        <div className="grid grid--4 stagger-group">
          <div className="card card--glass stat-card stagger-item" style={{ textAlign: 'center', padding: '2rem' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--primary)', marginBottom: '0.5rem' }}>+۳,۷۸۰</div>
            <div style={{ color: 'var(--text-secondary)' }}>سوال چهارگزینه‌ای</div>
          </div>
          <div className="card card--glass stat-card stagger-item" style={{ textAlign: 'center', padding: '2rem' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--primary)', marginBottom: '0.5rem' }}>+۲۵۰</div>
            <div style={{ color: 'var(--text-secondary)' }}>کیس بالینی واقعی</div>
          </div>
          <div className="card card--glass stat-card stagger-item" style={{ textAlign: 'center', padding: '2rem' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--primary)', marginBottom: '0.5rem' }}>۱۱</div>
            <div style={{ color: 'var(--text-secondary)' }}>درس علوم پایه</div>
          </div>
          <div className="card card--glass stat-card stagger-item" style={{ textAlign: 'center', padding: '2rem' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--primary)', marginBottom: '0.5rem' }}>۹</div>
            <div style={{ color: 'var(--text-secondary)' }}>تخصص بالینی</div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container section reveal fade-up" style={{ marginTop: '4rem' }}>
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '3rem' }}>چگونه کار می‌کند؟</h2>
        <div className="grid grid--3 stagger-group">
          <div className="card stagger-item" style={{ padding: '2rem', textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📚</div>
            <h3 style={{ marginBottom: '1rem' }}>درس را انتخاب کنید</h3>
            <p style={{ color: 'var(--text-secondary)' }}>از بین ۱۱ درس علوم پایه یا ۹ تخصص بالینی مبحث مورد نظر خود را برای مطالعه انتخاب کنید.</p>
          </div>
          <div className="card stagger-item" style={{ padding: '2rem', textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✏️</div>
            <h3 style={{ marginBottom: '1rem' }}>تست بزنید</h3>
            <p style={{ color: 'var(--text-secondary)' }}>سوالات را پاسخ دهید و فوراً جواب صحیح همراه با توضیحات کامل و رفرنس‌ها را ببینید.</p>
          </div>
          <div className="card stagger-item" style={{ padding: '2rem', textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📈</div>
            <h3 style={{ marginBottom: '1rem' }}>پیشرفت کنید</h3>
            <p style={{ color: 'var(--text-secondary)' }}>با داشبورد تحلیلی ما نقاط ضعف خود را بشناسید و با تمرین بیشتر آنها را تقویت کنید.</p>
          </div>
        </div>
      </section>

      {/* Basic Sciences Preview */}
      <section className="container section reveal fade-up" style={{ marginTop: '4rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h2 className="section-title">آمادگی آزمون علوم پایه</h2>
          <Link to="/basic-sciences" className="btn btn--text" style={{ color: 'var(--primary)' }}>مشاهده همه دروس ⬅️</Link>
        </div>
        <div className="grid grid--4 stagger-group">
          {subjects.slice(0, 4).map((subject, index) => (
            <Link to={`/basic-sciences/${subject.id}`} key={subject.id} className="card subject-card stagger-item" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem', textAlign: 'center' }}>{subject.icon || '📘'}</div>
              <h3 style={{ textAlign: 'center', marginBottom: '0.5rem' }}>{subject.name}</h3>
              <p style={{ textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{subject.description || 'تست‌های طبقه‌بندی شده'}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Clinical Preview */}
      <section className="container section reveal fade-up" style={{ marginTop: '4rem', marginBottom: '4rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h2 className="section-title">یادگیری بالینی مبتنی بر کیس</h2>
          <Link to="/clinical" className="btn btn--text" style={{ color: 'var(--primary)' }}>مشاهده همه تخصص‌ها ⬅️</Link>
        </div>
        <div className="grid grid--3 stagger-group">
          {clinicalSpecialties.slice(0, 3).map((specialty, index) => (
            <Link to={`/clinical?specialty=${specialty.id}`} key={specialty.id} className="card stagger-item" style={{ textDecoration: 'none', color: 'inherit', padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ fontSize: '2.5rem', background: 'var(--bg-secondary)', width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}>
                {specialty.icon || '🦷'}
              </div>
              <div>
                <h3 style={{ marginBottom: '0.25rem' }}>{specialty.name}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{toPersianNumber(specialty.caseCount || 20)} کیس ثبت شده</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="reveal fade-up" 
        style={{
          background: 'linear-gradient(45deg, var(--primary) 0%, var(--primary-dark) 100%)',
          padding: '5rem 2rem',
          color: 'white',
          textAlign: 'center',
          borderRadius: '40px',
          margin: '0 2rem 4rem'
        }}
      >
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>آماده‌اید تا یادگیری را متحول کنید؟</h2>
        <p style={{ fontSize: '1.2rem', marginBottom: '2.5rem', opacity: 0.9 }}>
          همین حالا به جمع هزاران دانشجوی دندانپزشکی در سراسر ایران بپیوندید.
        </p>
        <Link to="/basic-sciences" className="btn btn--accent" style={{ background: 'white', color: 'var(--primary)', padding: '1rem 3rem', fontSize: '1.2rem', borderRadius: '50px', fontWeight: 'bold' }}>
          همین الان شروع کنید!
        </Link>
      </section>
    </div>
  );
}
