import React, { useState, useEffect } from 'react';
import { formatTime } from '../../utils/helpers';

export default function QuizTimer({ initialSeconds, onTimeUp }) {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    if (seconds <= 0) {
      if (onTimeUp) onTimeUp();
      return;
    }
    const timerId = setInterval(() => {
      setSeconds(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timerId);
  }, [seconds, onTimeUp]);

  const isWarning = seconds <= 300; // 5 minutes warning
  const isDanger = seconds <= 60;   // 1 minute danger

  let timerClass = 'quiz-timer';
  if (isDanger) timerClass += ' quiz-timer--danger';
  else if (isWarning) timerClass += ' quiz-timer--warning';

  return (
    <div className={timerClass}>
      <svg className="quiz-timer__icon" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
      <span className="quiz-timer__text">{formatTime(seconds)}</span>
    </div>
  );
}
