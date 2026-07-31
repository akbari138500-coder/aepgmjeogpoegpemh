import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__col footer__brand">
            <Link to="/" className="navbar__brand" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'var(--text-main)', textDecoration: 'none' }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <path d="M12 2C9.5 2 7.5 4 7.5 6.5C7.5 9 6 11 4 11C2.5 11 1.5 12 1.5 13.5C1.5 16 3 20 6 20C8 20 9.5 18 10.5 15L12 11L13.5 15C14.5 18 16 20 18 20C21 20 22.5 16 22.5 13.5C22.5 12 21.5 11 20 11C18 11 16.5 9 16.5 6.5C16.5 4 14.5 2 12 2Z" />
              </svg>
              <span className="navbar__title" style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>DentaLearn</span>
            </Link>
            <p style={{ lineHeight: '1.6', color: 'var(--text-muted)' }}>
              پلتفرم جامع آموزش دندانپزشکی، همراه شما در مسیر موفقیت تحصیلی و حرفه‌ای با ارائه بهترین منابع و سوالات استاندارد.
            </p>
          </div>
          
          <div className="footer__col">
            <h4 className="footer__col-title">دسترسی سریع</h4>
            <ul className="footer__list">
              <li><Link to="/">صفحه اصلی</Link></li>
              <li><Link to="/basic-sciences">علوم پایه</Link></li>
              <li><Link to="/clinical">بالینی</Link></li>
              <li><Link to="/dashboard">داشبورد کاربری</Link></li>
            </ul>
          </div>
          
          <div className="footer__col">
            <h4 className="footer__col-title">منابع</h4>
            <ul className="footer__list">
              <li><Link to="/books">کتابخانه دیجیتال</Link></li>
              <li><Link to="/articles">مقالات علمی</Link></li>
              <li><Link to="/faq">سوالات متداول</Link></li>
              <li><Link to="/support">پشتیبانی</Link></li>
            </ul>
          </div>
          
          <div className="footer__col">
            <h4 className="footer__col-title">تماس با ما</h4>
            <ul className="footer__list">
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                info@dentalearn.com
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                ۰۲۱-۱۲۳۴۵۶۷۸
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                تهران، ایران
              </li>
            </ul>
            
            <div className="footer__social" style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
              <a href="#" aria-label="Telegram" style={{ color: 'var(--text-muted)' }}>
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
              </a>
              <a href="#" aria-label="Instagram" style={{ color: 'var(--text-muted)' }}>
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" aria-label="Twitter" style={{ color: 'var(--text-muted)' }}>
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} DentaLearn. تمامی حقوق محفوظ است.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
