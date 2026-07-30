import ProgressRing from '../common/ProgressRing';
import { toPersianNumber, calculateScore } from '../../utils/helpers';

export default function QuizResult({ totalQuestions, correctAnswers, wrongAnswers, unanswered, subjectName, onRetry, onBackToSubjects }) {
  const score = calculateScore(correctAnswers, totalQuestions);

  let message = '';
  let messageEmoji = '';
  if (score >= 80) { message = 'عالی بود!'; messageEmoji = '🎉'; }
  else if (score >= 60) { message = 'خوب بود!'; messageEmoji = '👍'; }
  else if (score >= 40) { message = 'قابل قبول'; messageEmoji = '📝'; }
  else { message = 'نیاز به تمرین بیشتر'; messageEmoji = '💪'; }

  return (
    <div className="quiz-result animate-fade-in-up">
      <div style={{ fontSize: '3rem', marginBottom: 'var(--space-4)' }}>{messageEmoji}</div>
      <h2 style={{ fontSize: 'var(--text-3xl)', marginBottom: 'var(--space-2)' }}>{message}</h2>
      {subjectName && (
        <p style={{ color: 'var(--text-tertiary)', marginBottom: 'var(--space-6)' }}>
          نتیجه آزمون {subjectName}
        </p>
      )}

      <div className="quiz-result__score" style={{ display: 'flex', justifyContent: 'center' }}>
        <ProgressRing
          size={160}
          strokeWidth={8}
          percentage={score}
          label={`${toPersianNumber(score)}٪`}
        />
      </div>

      <div className="quiz-result__stats">
        <div className="quiz-result__stat" style={{ background: 'var(--color-success-bg)' }}>
          <div className="stat__value" style={{ color: 'var(--color-success)' }}>
            {toPersianNumber(correctAnswers)}
          </div>
          <div className="stat__label">پاسخ صحیح</div>
        </div>
        <div className="quiz-result__stat" style={{ background: 'var(--color-error-bg)' }}>
          <div className="stat__value" style={{ color: 'var(--color-error)' }}>
            {toPersianNumber(wrongAnswers)}
          </div>
          <div className="stat__label">پاسخ نادرست</div>
        </div>
        <div className="quiz-result__stat">
          <div className="stat__value" style={{ color: 'var(--text-muted)' }}>
            {toPersianNumber(unanswered)}
          </div>
          <div className="stat__label">بدون پاسخ</div>
        </div>
      </div>

      <div className="quiz-result__actions">
        <button className="btn btn--primary btn--lg" onClick={onRetry}>
          تلاش مجدد
        </button>
        <button className="btn btn--outline btn--lg" onClick={onBackToSubjects}>
          بازگشت به دروس
        </button>
      </div>
    </div>
  );
}
