import React from 'react';

interface ProgressRingProps {
  progress: number; // 0-100
  size?: number;
  strokeWidth?: number;
  className?: string;
  showPercentage?: boolean;
  color?: string;
}

export const ProgressRing: React.FC<ProgressRingProps> = ({
  progress,
  size = 120,
  strokeWidth = 8,
  className = '',
  showPercentage = true,
  color = 'hsl(var(--primary))'
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;
  
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <svg
        width={size}
        height={size}
        className="progress-ring"
      >
        {/* Background circle */}
        <circle
          stroke="hsl(var(--muted))"
          strokeWidth={strokeWidth}
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        {/* Progress circle */}
        <circle
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
          className="progress-ring-circle"
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: offset
          }}
        />
      </svg>
      {showPercentage && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-foreground">{progress}%</span>
        </div>
      )}
    </div>
  );
};

interface ProgressBarProps {
  progress: number;
  className?: string;
  color?: string;
  height?: number;
  showLabel?: boolean;
  label?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  className = '',
  color = 'bg-primary',
  height = 8,
  showLabel = false,
  label = ''
}) => {
  return (
    <div className={className}>
      {showLabel && (
        <div className="flex justify-between mb-2 text-sm">
          <span className="text-muted-foreground">{label}</span>
          <span className="font-medium text-foreground">{progress}%</span>
        </div>
      )}
      <div 
        className="w-full bg-muted rounded-full overflow-hidden"
        style={{ height }}
      >
        <div
          className={`h-full ${color} rounded-full transition-all duration-500 ease-out`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};
