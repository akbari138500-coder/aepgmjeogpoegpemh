import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__grid">
        <div className="footer__col">
          <h3 className="footer__brand-desc">DentaLearn</h3>
          <p>پلتفرم آموزشی هوشمند دندانپزشکی برای دانشجویان و متخصصان. جامع‌ترین منبع آزمون‌ها و کیس‌های بالینی.</p>
        </div>
        <div className="footer__col">
          <h4 className="footer__col-title">دسترسی سریع</h4>
          <ul className="footer__list">
            <li><Link to="/">صفحه اصلی</Link></li>
            <li><Link to="/basic-sciences">علوم پایه</Link></li>
            <li><Link to="/clinical">دروس بالینی</Link></li>
            <li><Link to="/dashboard">داشبورد</Link></li>
          </ul>
        </div>
        <div className="footer__col">
          <h4 className="footer__col-title">منابع</h4>
          <ul className="footer__list">
            <li><Link to="/resources/books">کتاب‌ها</Link></li>
            <li><Link to="/resources/articles">مقالات</Link></li>
            <li><Link to="/faq">سوالات متداول</Link></li>
          </ul>
        </div>
        <div className="footer__col">
          <h4 className="footer__col-title">ارتباط با ما</h4>
          <ul className="footer__list">
            <li>پشتیبانی: support@dentalearn.ir</li>
            <li>تلفن: ۰۲۱-۱۲۳۴۵۶۷۸</li>
            <li>تهران، ایران</li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <p>تمامی حقوق برای پلتفرم DentaLearn محفوظ است &copy; ۱۴۰۳</p>
      </div>
    </footer>
  );
}
