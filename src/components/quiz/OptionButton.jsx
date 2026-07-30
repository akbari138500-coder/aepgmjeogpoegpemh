export default function OptionButton({ option, marker, isSelected, isCorrect, isWrong, isDisabled, onClick }) {
  let className = 'option-btn';
  if (isCorrect) className += ' option-btn--correct animate-correct';
  else if (isWrong) className += ' option-btn--wrong animate-wrong';
  else if (isSelected) className += ' option-btn--selected';
  else if (isDisabled) className += ' option-btn--disabled';

  return (
    <button
      className={className}
      onClick={isDisabled ? undefined : onClick}
      disabled={isDisabled}
      type="button"
    >
      <span className="option-btn__marker">{marker}</span>
      <span>{option.text}</span>
    </button>
  );
}
