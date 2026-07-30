import { useState } from 'react';
import { Link } from 'react-router-dom';
import { subjects } from '../data/subjects';
import { toPersianNumber } from '../utils/helpers';

export default function BasicSciences() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSubjects = subjects.filter(subject => 
    subject.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (subject.description && subject.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="container page-content" style={{ padding: '2rem 1rem', maxWidth: '1200px', margin: '0 auto' }}>
      <header className="page-header" style={{ marginBottom: '3rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>آزمون علوم پایه</h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
          درس مورد نظر خود را انتخاب کنید و آزمون را شروع کنید
        </p>
      </header>

      <div className="search-section" style={{ marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
        <input
          type="text"
          placeholder="جستجوی درس... (مثلاً آناتومی)"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: '100%',
            padding: '1rem 1.5rem',
            borderRadius: '50px',
            border: '2px solid var(--border-color)',
            fontSize: '1.1rem',
            outline: 'none',
            transition: 'border-color 0.3s',
            boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
          }}
          className="search-input"
        />
      </div>

      <div className="grid grid--3 stagger-group">
        {filteredSubjects.length > 0 ? (
          filteredSubjects.map((subject, index) => (
            <Link 
              to={`/basic-sciences/${subject.id}`} 
              key={subject.id} 
              className="card subject-card stagger-item" 
              style={{ 
                textDecoration: 'none', 
                color: 'inherit',
                display: 'block',
                padding: '2rem',
                borderRadius: '20px',
                transition: 'transform 0.3s, box-shadow 0.3s',
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                <div style={{ 
                  fontSize: '2.5rem', 
                  background: 'var(--bg-secondary)', 
                  width: '70px', 
                  height: '70px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  borderRadius: '50%',
                  marginLeft: '1rem'
                }}>
                  {subject.icon || '📘'}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.3rem', marginBottom: '0.25rem', color: 'var(--text-primary)' }}>{subject.name}</h3>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--primary)' }}></span>
                    {toPersianNumber(subject.questionCount || 250)} سوال
                  </div>
                </div>
              </div>
              
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.95rem', lineHeight: '1.6' }}>
                {subject.description || `تست‌های طبقه‌بندی شده و جامع ${subject.name} همراه با پاسخنامه تشریحی.`}
              </p>

              <div className="progress-container">
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>
                  <span>میزان پیشرفت</span>
                  <span>{toPersianNumber(Math.floor(Math.random() * 40) + 10)}٪</span>
                </div>
                <div style={{ width: '100%', height: '8px', backgroundColor: 'var(--bg-secondary)', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ 
                    height: '100%', 
                    backgroundColor: 'var(--primary)', 
                    width: `${Math.floor(Math.random() * 40) + 10}%`,
                    borderRadius: '4px'
                  }}></div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '4rem', color: 'var(--text-secondary)' }}>
            <h3>هیچ درسی با این عنوان یافت نشد.</h3>
            <p style={{ marginTop: '1rem' }}>لطفاً عبارت دیگری را جستجو کنید.</p>
          </div>
        )}
      </div>
    </div>
  );
}
