import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { subjects } from '../data/subjects';
import { sampleQuestions } from '../data/sampleQuestions';
import { toPersianNumber, getSubjectById } from '../utils/helpers';
import QuestionCard from '../components/quiz/QuestionCard';
import QuizResult from '../components/quiz/QuizResult';

export default function QuestionBank() {
  const { subjectId } = useParams();
  const navigate = useNavigate();
  
  const [subject, setSubject] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState({});
  const [quizFinished, setQuizFinished] = useState(false);
  const [bookmarkedQuestions, setBookmarkedQuestions] = useState(new Set());
  
  useEffect(() => {
    // Mock fetching data
    const subj = getSubjectById(subjects, subjectId);
    if (!subj) return;
    
    setSubject(subj);
    
    // Get questions for this subject or mock empty array
    const subjQuestions = sampleQuestions[subjectId] || [];
    setQuestions(subjQuestions);
  }, [subjectId]);

  if (!subject) {
    return (
      <div className="container empty-state">
        <div className="empty-state__icon">🔍</div>
        <h2 className="empty-state__title">درس مورد نظر یافت نشد.</h2>
        <button onClick={() => navigate('/basic-sciences')} className="btn btn--primary">
          بازگشت به لیست دروس
        </button>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="container empty-state">
        <div className="empty-state__icon">📚</div>
        <h2 className="empty-state__title">هنوز سوالی برای درس {subject.name} ثبت نشده است.</h2>
        <p className="empty-state__text">به زودی سوالات این بخش اضافه خواهد شد.</p>
        <button onClick={() => navigate('/basic-sciences')} className="btn btn--outline" style={{ marginTop: 'var(--space-4)' }}>
          بازگشت به لیست دروس
        </button>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];
  const isAnswered = showResults[currentIndex];
  const isLastQuestion = currentIndex === questions.length - 1;

  const handleSelectAnswer = (optionId) => {
    if (isAnswered) return;
    
    setSelectedAnswers(prev => ({ ...prev, [currentIndex]: optionId }));
    setShowResults(prev => ({ ...prev, [currentIndex]: true }));
  };

  const handleNext = () => {
    if (isLastQuestion) {
      setQuizFinished(true);
    } else {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const handleToggleBookmark = () => {
    setBookmarkedQuestions(prev => {
      const newBookmarks = new Set(prev);
      if (newBookmarks.has(currentIndex)) {
        newBookmarks.delete(currentIndex);
      } else {
        newBookmarks.add(currentIndex);
      }
      return newBookmarks;
    });
  };

  const calculateScore = () => {
    let correct = 0;
    let wrong = 0;
    let unanswered = 0;

    questions.forEach((q, idx) => {
      const answer = selectedAnswers[idx];
      if (answer === undefined) {
        unanswered++;
      } else if (answer === q.correctAnswer) {
        correct++;
      } else {
        wrong++;
      }
    });

    return { correct, wrong, unanswered };
  };

  const handleRetry = () => {
    setCurrentIndex(0);
    setSelectedAnswers({});
    setShowResults({});
    setQuizFinished(false);
  };

  if (quizFinished) {
    const { correct, wrong, unanswered } = calculateScore();
    return (
      <div className="container quiz-container">
        <QuizResult 
          totalQuestions={questions.length}
          correctAnswers={correct}
          wrongAnswers={wrong}
          unanswered={unanswered}
          subjectName={subject.name}
          onRetry={handleRetry}
          onBackToSubjects={() => navigate('/basic-sciences')}
        />
      </div>
    );
  }

  const progressPercentage = ((currentIndex + 1) / questions.length) * 100;

  return (
    <div className="container quiz-container" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Quiz Header */}
      <div className="quiz-header">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate('/basic-sciences')} className="btn btn--ghost" style={{ padding: 0 }} aria-label="بستن آزمون">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <div>
            <h2 className="quiz-header__title" style={{ fontSize: 'var(--text-lg)', fontWeight: '700', color: 'var(--color-primary)' }}>{subject.name}</h2>
            <div style={{ color: 'var(--text-tertiary)', fontSize: 'var(--text-sm)', marginTop: '2px' }}>
              سوال {toPersianNumber(currentIndex + 1)} از {toPersianNumber(questions.length)}
            </div>
          </div>
        </div>
        
        <button 
          onClick={handleToggleBookmark}
          className="btn btn--ghost"
          style={{ padding: 'var(--space-2)' }}
          title="نشان کردن سوال"
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill={bookmarkedQuestions.has(currentIndex) ? "var(--color-gold)" : "none"} 
            stroke={bookmarkedQuestions.has(currentIndex) ? "var(--color-gold)" : "currentColor"} 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
        </button>
      </div>

      {/* Progress Bar */}
      <div className="quiz-progress-bar">
        <div className="quiz-progress-bar__fill" style={{ width: `${progressPercentage}%` }}></div>
      </div>

      {/* Question Card Area */}
      <div style={{ flex: 1 }}>
        <QuestionCard 
          question={currentQuestion}
          questionNumber={toPersianNumber(currentIndex + 1)}
          totalQuestions={questions.length}
          selectedAnswer={selectedAnswers[currentIndex]}
          onSelectAnswer={handleSelectAnswer}
          showResult={isAnswered}
        />
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center" style={{ marginTop: 'var(--space-8)', paddingTop: 'var(--space-4)', borderTop: '1px solid var(--glass-border)' }}>
        <button 
          className="btn btn--outline" 
          onClick={handlePrev}
          disabled={currentIndex === 0}
          style={{ opacity: currentIndex === 0 ? 0 : 1, visibility: currentIndex === 0 ? 'hidden' : 'visible' }}
        >
          سوال قبلی
        </button>
        
        <button 
          className={`btn ${isAnswered ? 'btn--primary' : 'btn--outline'}`}
          onClick={handleNext}
          style={{ minWidth: '140px' }}
        >
          {isLastQuestion && isAnswered ? 'پایان آزمون' : 'سوال بعدی'}
        </button>
      </div>
      
    </div>
  );
}
