export function toPersianNumber(num) {
  const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return String(num).replace(/[0-9]/g, d => persianDigits[parseInt(d)]);
}

export function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${toPersianNumber(String(mins).padStart(2, '0'))}:${toPersianNumber(String(secs).padStart(2, '0'))}`;
}

export function calculateScore(correct, total) {
  if (total === 0) return 0;
  return Math.round((correct / total) * 100);
}

export function shuffleArray(arr) {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function getSubjectById(subjects, id) {
  return subjects.find(s => s.id === id);
}

export function getDifficultyColor(difficulty) {
  switch(difficulty) {
    case 'beginner': return 'var(--color-success)';
    case 'intermediate': return 'var(--color-warning)';
    case 'advanced': return 'var(--color-error)';
    default: return 'var(--color-primary)';
  }
}
