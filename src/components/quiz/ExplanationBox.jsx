export default function ExplanationBox({ explanation, isCorrect }) {
  return (
    <div className="explanation-box">
      <div className="explanation-box__title">
        <span>{isCorrect ? '✓' : '✗'}</span>
        <span>{isCorrect ? 'پاسخ صحیح!' : 'پاسخ نادرست'}</span>
      </div>
      <p className="explanation-box__text">{explanation}</p>
    </div>
  );
}
