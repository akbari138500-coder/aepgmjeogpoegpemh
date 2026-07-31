import { subjects } from '../data/subjects';
import { toPersianNumber } from '../utils/helpers';
import ProgressRing from '../components/common/ProgressRing';
import { useEffect } from 'react';

const Dashboard = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const revealElements = document.querySelectorAll('.reveal, .fade-up, .stagger-item');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const mockSubjectProgress = subjects.slice(0, 5).map(s => ({
    ...s,
    progress: Math.floor(Math.random() * 80) + 10
  }));

  return (
    <div className="page page-content">
      <div className="container">
        <div className="section-header reveal">
          <h1 className="section-header__title">خوش آمدید، دانشجوی عزیز!</h1>
          <p className="section-header__desc">گزارش عملکرد و پیشرفت تحصیلی شما در یک نگاه.</p>
        </div>

        <div className="grid grid--3 stagger-group reveal mb-8">
          <div className="stat card card--glass stagger-item" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
            </div>
            <div>
              <div className="stat__value">{toPersianNumber(1284)}</div>
              <div className="stat__label">سوالات پاسخ داده</div>
            </div>
          </div>
          
          <div className="stat card card--glass stagger-item" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
            </div>
            <div>
              <div className="stat__value">{toPersianNumber(72)}%</div>
              <div className="stat__label">دقت کلی</div>
            </div>
          </div>
          
          <div className="stat card card--glass stagger-item" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect x="3" y="8" width="18" height="14" rx="2"></rect><path d="M3 10h18"></path></svg>
            </div>
            <div>
              <div className="stat__value">{toPersianNumber(5)}</div>
              <div className="stat__label">روزهای متوالی</div>
            </div>
          </div>
        </div>

        <div className="grid grid--2 mb-8 reveal" style={{ alignItems: 'start' }}>
          <div className="card card--glass">
            <h3 className="card__title mb-4">پیشرفت کلی دوره</h3>
            <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem 0' }}>
              <ProgressRing 
                size={200} 
                strokeWidth={12} 
                percentage={45} 
                label={`پیشرفت ${toPersianNumber(45)}%`} 
              />
            </div>
            <p className="text-center text-muted" style={{ fontSize: '0.875rem' }}>شما تقریبا نیمی از مسیر را طی کرده‌اید. به تلاش خود ادامه دهید!</p>
          </div>
          
          <div className="card card--glass">
            <h3 className="card__title mb-4">وضعیت دروس</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {mockSubjectProgress.map(subject => (
                <div key={subject.id} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ fontSize: '1.5rem' }}>{subject.icon}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem', fontSize: '0.875rem' }}>
                      <span>{subject.name}</span>
                      <span>{toPersianNumber(subject.progress)}%</span>
                    </div>
                    <div style={{ height: '8px', background: 'var(--border)', borderRadius: '4px', overflow: 'hidden' }}>
                      <div style={{ width: `${subject.progress}%`, height: '100%', background: 'var(--primary)', borderRadius: '4px' }}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="grid grid--2 reveal">
          <div className="card card--glass" style={{ borderLeft: '4px solid #ef4444' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: '#ef4444' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
              <h3 className="card__title" style={{ margin: 0 }}>نیاز به تمرین بیشتر</h3>
            </div>
            <p className="card__desc">در دروس <strong>آناتومی</strong> و <strong>بافت‌شناسی</strong> دقت شما پایین‌تر از میانگین است. پیشنهاد می‌کنیم تست‌های بیشتری در این مباحث حل کنید.</p>
            <button className="btn btn--outline btn--sm mt-4">مرور مباحث ضعیف</button>
          </div>
          
          <div className="card card--glass" style={{ borderLeft: '4px solid #3b82f6' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: '#3b82f6' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
              <h3 className="card__title" style={{ margin: 0 }}>پیشنهاد مطالعه روزانه</h3>
            </div>
            <p className="card__desc">برنامه امروز شما: مرور <strong>جنین‌شناسی</strong> و حل ۳۰ تست از بخش <strong>فیزیولوژی</strong>.</p>
            <button className="btn btn--primary btn--sm mt-4">شروع برنامه امروز</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
