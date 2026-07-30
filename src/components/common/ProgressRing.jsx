import { toPersianNumber } from '../../utils/helpers';

export default function ProgressRing({ size = 120, strokeWidth = 6, percentage = 0, label }) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  let strokeColor = 'var(--color-primary)';
  if (percentage >= 80) strokeColor = 'var(--color-success)';
  else if (percentage >= 60) strokeColor = 'var(--color-primary)';
  else if (percentage >= 40) strokeColor = 'var(--color-warning)';
  else strokeColor = 'var(--color-error)';

  return (
    <div className="progress-ring" style={{ width: size, height: size }}>
      <svg className="progress-ring__svg" width={size} height={size}>
        <circle
          className="progress-ring__bg"
          strokeWidth={strokeWidth}
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <circle
          className="progress-ring__fill"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference} ${circumference}`}
          style={{ strokeDashoffset }}
          strokeLinecap="round"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
      </svg>
      <div className="progress-ring__label">
        <span className="progress-ring__value" style={{ color: strokeColor }}>
          {label || `${toPersianNumber(Math.round(percentage))}٪`}
        </span>
      </div>
    </div>
  );
}
