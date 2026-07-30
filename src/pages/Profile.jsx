import { toPersianNumber } from '../utils/helpers';

export default function Profile() {
  return (
    <div className="container page-content" style={{ padding: '2rem 1rem', maxWidth: '800px', margin: '0 auto' }}>
      <header style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', color: 'var(--text-primary)' }}>پروفایل کاربری</h1>
      </header>

      {/* User Info Card */}
      <div className="card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '2rem', textAlign: 'center' }}>
        <div style={{ 
          width: '100px', 
          height: '100px', 
          borderRadius: '50%', 
          background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          fontSize: '2.5rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
          boxShadow: '0 4px 15px rgba(10, 77, 74, 0.3)'
        }}>
          دد
        </div>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>دانشجوی دندانپزشکی</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>دانشگاه علوم پزشکی تهران - ورودی {toPersianNumber(1399)}</p>
        
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
          <button className="btn btn--accent" style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem' }}>ویرایش پروفایل</button>
        </div>
      </div>

      {/* Stats Summary */}
      <div className="grid grid--2" style={{ marginBottom: '2rem', gap: '1rem' }}>
        <div className="card" style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '0.2rem' }}>تاریخ عضویت</div>
            <div style={{ fontWeight: 'bold' }}>{toPersianNumber('1402/05/12')}</div>
          </div>
          <div style={{ fontSize: '1.5rem' }}>📅</div>
        </div>
        <div className="card" style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '0.2rem' }}>اشتراک فعال</div>
            <div style={{ fontWeight: 'bold', color: 'var(--primary)' }}>طرح جامع یک‌ساله</div>
          </div>
          <div style={{ fontSize: '1.5rem' }}>💎</div>
        </div>
      </div>

      {/* Settings Placeholder */}
      <div className="card" style={{ padding: '1.5rem' }}>
        <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: 'var(--text-primary)', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>تنظیمات حساب کاربری</h3>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', background: 'var(--bg-secondary)', borderRadius: '8px' }}>
            <span>تغییر رمز عبور</span>
            <button className="btn btn--text">ویرایش</button>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', background: 'var(--bg-secondary)', borderRadius: '8px' }}>
            <span>تنظیمات اطلاع‌رسانی</span>
            <button className="btn btn--text">ویرایش</button>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', background: 'var(--bg-secondary)', borderRadius: '8px' }}>
            <span>حالت تاریک (Dark Mode)</span>
            <label className="switch" style={{ position: 'relative', display: 'inline-block', width: '50px', height: '24px' }}>
              <input type="checkbox" style={{ opacity: 0, width: 0, height: 0 }} />
              <span style={{ 
                position: 'absolute', cursor: 'pointer', top: 0, left: 0, right: 0, bottom: 0, 
                backgroundColor: '#ccc', transition: '.4s', borderRadius: '34px' 
              }}>
                <span style={{ 
                  position: 'absolute', content: '""', height: '16px', width: '16px', 
                  left: '4px', bottom: '4px', backgroundColor: 'white', transition: '.4s', borderRadius: '50%'
                }}></span>
              </span>
            </label>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', background: '#fef2f2', borderRadius: '8px', color: '#ef4444', marginTop: '1rem', cursor: 'pointer' }}>
            <span style={{ fontWeight: 'bold' }}>خروج از حساب کاربری</span>
            <span>🚪</span>
          </div>
        </div>
      </div>

    </div>
  );
}
