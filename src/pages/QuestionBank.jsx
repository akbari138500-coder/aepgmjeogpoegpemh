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
    if (!subj) {
      // In a real app, you might want to show a 404 or redirect
      return;
    }
    
    setSubject(subj);
    
    // Get questions for this subject or mock empty array
    const subjQuestions = sampleQuestions[subjectId] || [];
    setQuestions(subjQuestions);
  }, [subjectId]);

  if (!subject) {
    return (
      <div className="container" style={{ textAlign: 'center', padding: '5rem', color: 'var(--text-secondary)' }}>
        <h2>درس مورد نظر یافت نشد.</h2>
        <button onClick={() => navigate('/basic-sciences')} className="btn btn--outline" style={{ marginTop: '2rem' }}>
          بازگشت به لیست دروس
        </button>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="container" style={{ textAlign: 'center', padding: '5rem', color: 'var(--text-secondary)' }}>
        <h2>هنوز سوالی برای درس {subject.name} ثبت نشده است.</h2>
        <p style={{ marginTop: '1rem' }}>به زودی سوالات این بخش اضافه خواهد شد.</p>
        <button onClick={() => navigate('/basic-sciences')} className="btn btn--outline" style={{ marginTop: '2rem' }}>
          بازگشت به لیست دروس
        </button>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];
  const isAnswered = showResults[currentIndex];
  const isLastQuestion = currentIndex === questions.length - 1;

  const handleSelectAnswer = (optionId) => {
    if (isAnswered) return; // Prevent changing answer after it's submitted
    
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
      <div className="container" style={{ padding: '2rem 1rem', maxWidth: '800px', margin: '0 auto' }}>
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
    <div className="container" style={{ padding: '2rem 1rem', maxWidth: '800px', margin: '0 auto', minHeight: '80vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Quiz Header */}
      <div className="quiz-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', background: 'var(--surface-color)', padding: '1rem 1.5rem', borderRadius: '15px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button onClick={() => navigate('/basic-sciences')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)', fontSize: '1.2rem' }}>
            ✕
          </button>
          <div>
            <h2 style={{ fontSize: '1.2rem', margin: 0, color: 'var(--text-primary)' }}>{subject.name}</h2>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.2rem' }}>
              سوال {toPersianNumber(currentIndex + 1)} از {toPersianNumber(questions.length)}
            </div>
          </div>
        </div>
        
        <button 
          onClick={handleToggleBookmark}
          style={{ 
            background: 'none', 
            border: 'none', 
            cursor: 'pointer', 
            color: bookmarkedQuestions.has(currentIndex) ? '#f59e0b' : 'var(--text-secondary)',
            fontSize: '1.5rem',
            transition: 'color 0.2s'
          }}
          title="نشان کردن سوال"
        >
          {bookmarkedQuestions.has(currentIndex) ? '★' : '☆'}
        </button>
      </div>

      {/* Progress Bar */}
      <div className="quiz-progress-bar" style={{ width: '100%', height: '6px', background: 'var(--bg-secondary)', borderRadius: '3px', marginBottom: '2.5rem', overflow: 'hidden' }}>
        <div style={{ 
          height: '100%', 
          background: 'var(--primary)', 
          width: `${progressPercentage}%`,
          transition: 'width 0.3s ease-out'
        }}></div>
      </div>

      {/* Question Card Area */}
      <div style={{ flex: 1 }}>
        <QuestionCard 
          question={currentQuestion}
          questionNumber={currentIndex + 1}
          totalQuestions={questions.length}
          selectedAnswer={selectedAnswers[currentIndex]}
          onSelectAnswer={handleSelectAnswer}
          showResult={isAnswered}
        />
      </div>

      {/* Navigation Buttons */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)' }}>
        <button 
          className="btn btn--outline" 
          onClick={handlePrev}
          disabled={currentIndex === 0}
          style={{ opacity: currentIndex === 0 ? 0 : 1, visibility: currentIndex === 0 ? 'hidden' : 'visible' }}
        >
          سوال قبلی
        </button>
        
        <button 
          className={`btn ${isAnswered ? 'btn--accent' : 'btn--outline'}`}
          onClick={handleNext}
          style={{ padding: '0.8rem 2.5rem', fontWeight: 'bold' }}
        >
          {isLastQuestion && isAnswered ? 'پایان آزمون' : 'سوال بعدی'}
        </button>
      </div>
      
    </div>
  );
}
