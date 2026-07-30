import ExplanationBox from './ExplanationBox';
import OptionButton from './OptionButton';

const MARKERS = ['الف', 'ب', 'ج', 'د'];

export default function QuestionCard({ question, questionNumber, totalQuestions, selectedAnswer, onSelectAnswer, showResult }) {
  return (
    <div className="question-card animate-fade-in-up">
      <span className="question-card__number">{questionNumber}</span>
      <div className="question-card__year">آزمون سال {question.year}</div>
      <p className="question-card__text">{question.text}</p>
      <div className="options-list">
        {question.options.map((opt, idx) => (
          <OptionButton
            key={opt.id}
            option={opt}
            marker={MARKERS[idx]}
            isSelected={selectedAnswer === opt.id}
            isCorrect={showResult && opt.id === question.correctAnswer}
            isWrong={showResult && selectedAnswer === opt.id && opt.id !== question.correctAnswer}
            isDisabled={showResult}
            onClick={() => onSelectAnswer(opt.id)}
          />
        ))}
      </div>
      {showResult && (
        <ExplanationBox
          explanation={question.explanation}
          isCorrect={selectedAnswer === question.correctAnswer}
        />
      )}
    </div>
  );
}
