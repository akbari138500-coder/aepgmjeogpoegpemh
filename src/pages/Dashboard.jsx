import { subjects } from '../data/subjects';
import ProgressRing from '../components/common/ProgressRing';
import { toPersianNumber } from '../utils/helpers';

export default function Dashboard() {
  const mockOverallProgress = 72;
  const mockSubjectProgress = subjects.slice(0, 5).map(s => ({
    ...s,
    progress: Math.floor(Math.random() * 60) + 20,
    answeredQuestions: Math.floor(Math.random() * 150) + 50
  }));

  const weakestSubjects = [...mockSubjectProgress].sort((a, b) => a.progress - b.progress).slice(0, 3);

  return (
    <div className="container page-content" style={{ padding: '2rem 1rem', maxWidth: '1200px', margin: '0 auto' }}>
      <header style={{ marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>خوش آمدید، دانشجوی عزیز! 👋</h1>
        <p style={{ color: 'var(--text-secondary)' }}>داشبورد پیشرفت تحصیلی شما</p>
      </header>

      {/* Top Stats */}
      <div className="grid grid--3 stagger-group" style={{ marginBottom: '3rem' }}>
        <div className="card stagger-item" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <div style={{ background: '#e0f2fe', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.5rem', color: '#0284c7' }}>📝</div>
          <div>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '0.2rem' }}>سوالات پاسخ داده</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: 'var(--text-primary)' }}>{toPersianNumber(1284)}</div>
          </div>
        </div>
        <div className="card stagger-item" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <div style={{ background: '#dcfce7', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.5rem', color: '#16a34a' }}>🎯</div>
          <div>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '0.2rem' }}>دقت کلی</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: 'var(--text-primary)' }}>{toPersianNumber(72)}٪</div>
          </div>
        </div>
        <div className="card stagger-item" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <div style={{ background: '#fef3c7', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.5rem', color: '#d97706' }}>🔥</div>
          <div>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '0.2rem' }}>روزهای متوالی</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: 'var(--text-primary)' }}>{toPersianNumber(5)}</div>
          </div>
        </div>
      </div>

      <div className="grid" style={{ gridTemplateColumns: '1fr 2fr', gap: '2rem', marginBottom: '3rem' }}>
        
        {/* Overall Progress */}
        <div className="card" style={{ padding: '2rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <h2 style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>آمادگی آزمون علوم پایه</h2>
          <ProgressRing size={200} strokeWidth={15} percentage={mockOverallProgress} label={`${toPersianNumber(mockOverallProgress)}٪`} />
          <p style={{ marginTop: '2rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            شما تا کنون به {toPersianNumber(mockOverallProgress)} درصد از اهداف تعیین شده رسیده‌اید. ادامه دهید!
          </p>
        </div>

        {/* Subject Progress */}
        <div className="card" style={{ padding: '2rem' }}>
          <h2 style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>پیشرفت دروس</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {mockSubjectProgress.map(subject => (
              <div key={subject.id}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                  <span style={{ fontWeight: '500' }}>{subject.name}</span>
                  <span style={{ color: 'var(--text-secondary)' }}>{toPersianNumber(subject.progress)}٪ ({toPersianNumber(subject.answeredQuestions)} تست)</span>
                </div>
                <div style={{ width: '100%', height: '8px', background: 'var(--bg-secondary)', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ 
                    height: '100%', 
                    background: subject.progress > 70 ? '#22c55e' : subject.progress > 40 ? 'var(--primary)' : '#f59e0b',
                    width: `${subject.progress}%`,
                    borderRadius: '4px'
                  }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Recommendations */}
      <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        
        <div className="card" style={{ padding: '1.5rem', borderLeft: '4px solid #ef4444' }}>
          <h2 style={{ fontSize: '1.1rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span>📉</span> نقاط ضعف (نیاز به تمرین بیشتر)
          </h2>
          <ul style={{ paddingRight: '1.5rem', color: 'var(--text-secondary)' }}>
            {weakestSubjects.map(s => (
              <li key={s.id} style={{ marginBottom: '0.5rem' }}>
                <strong style={{ color: 'var(--text-primary)' }}>{s.name}</strong> - فقط {toPersianNumber(s.progress)}٪ تسلط
              </li>
            ))}
          </ul>
        </div>

        <div className="card" style={{ padding: '1.5rem', borderLeft: '4px solid var(--primary)' }}>
          <h2 style={{ fontSize: '1.1rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span>💡</span> پیشنهاد مطالعه امروز
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: 1.6 }}>
            با توجه به عملکرد شما، پیشنهاد می‌کنیم امروز روی درس <strong>{weakestSubjects[0]?.name || 'آناتومی'}</strong> تمرکز کنید. زدن حداقل ۵۰ تست از این مبحث توصیه می‌شود.
          </p>
          <button className="btn btn--outline" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>شروع تست زنی</button>
        </div>

      </div>

    </div>
  );
}
