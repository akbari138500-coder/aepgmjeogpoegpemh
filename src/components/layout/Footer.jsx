import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__grid">
          <div className="footer__brand-col">
            <div className="footer__brand">
              <svg viewBox="0 0 24 24" width="32" height="32" stroke="#00ED64" strokeWidth="2" fill="none">
                 <path d="M12 2 C16 2, 18 6, 17 10 C16 14, 14 18, 13 20 C12 22, 12 22, 12 22 C12 22, 12 22, 11 20 C10 18, 8 14, 7 10 C6 6, 8 2, 12 2 Z" />
              </svg>
              <span>دنتالرن</span>
            </div>
            <p>پلتفرم جامع آموزش و آمادگی آزمون‌های علوم پایه و بالینی دندانپزشکی.</p>
          </div>
          <div className="footer__col">
            <h4 className="footer__col-title">لینک‌های سریع</h4>
            <ul className="footer__list">
              <li><Link to="/">خانه</Link></li>
              <li><Link to="/basic-sciences">علوم پایه</Link></li>
              <li><Link to="/clinical">بالینی</Link></li>
              <li><Link to="/dashboard">داشبورد</Link></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4 className="footer__col-title">منابع</h4>
            <ul className="footer__list">
              <li><a href="#">کتاب‌ها</a></li>
              <li><a href="#">مقالات</a></li>
              <li><a href="#">سوالات متداول</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4 className="footer__col-title">تماس با ما</h4>
            <ul className="footer__list">
              <li>ایمیل: info@dentalearn.ir</li>
              <li>تلفن: ۰۲۱-۱۲۳۴۵۶۷۸</li>
              <li>شهر: تهران</li>
            </ul>
            <div className="footer__social">
              <a href="#" aria-label="Telegram">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none"><path d="M21.198 2.433a2.242 2.242 0 0 0-1.022.215l-18.6 7.222c-1.341.521-1.31 2.376.046 2.846l4.636 1.6 11.238-7.14c.484-.308.924.116.546.54l-8.995 8.1-.285 4.316c.394.593 1.258.647 1.722.109l3.181-3.692 4.904 3.655c1.173.874 2.872.235 3.037-1.229l2.766-24.5a2.242 2.242 0 0 0-3.209-2.042z"></path></svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" aria-label="Twitter">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} دنتالرن. تمامی حقوق محفوظ است.</p>
        </div>
      </div>
    </footer>
  );
}
