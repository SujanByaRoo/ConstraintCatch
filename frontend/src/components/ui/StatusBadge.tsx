import React from 'react';
import { CheckCircle2, XCircle, AlertTriangle, HelpCircle, ShieldAlert } from 'lucide-react';

export type ConstraintStatus = 'PRESERVED' | 'MISSING' | 'MODIFIED' | 'WEAKENED' | 'UNVERIFIED';

interface StatusBadgeProps {
  status: ConstraintStatus;
  size?: 'sm' | 'md';
  showIcon?: boolean;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ 
  status, 
  size = 'md',
  showIcon = true 
}) => {
  const config = {
    PRESERVED: {
      bg: 'bg-teal-500/10 text-teal-300 border-teal-500/30',
      icon: CheckCircle2,
      label: 'PRESERVED',
      dot: 'bg-teal-400',
    },
    MISSING: {
      bg: 'bg-coral-500/10 text-coral-400 border-coral-500/30',
      icon: XCircle,
      label: 'MISSING',
      dot: 'bg-coral-400',
    },
    MODIFIED: {
      bg: 'bg-amber-500/10 text-amber-300 border-amber-500/30',
      icon: AlertTriangle,
      label: 'MODIFIED',
      dot: 'bg-amber-400',
    },
    WEAKENED: {
      bg: 'bg-yellow-500/10 text-yellow-300 border-yellow-500/30',
      icon: ShieldAlert,
      label: 'WEAKENED',
      dot: 'bg-yellow-400',
    },
    UNVERIFIED: {
      bg: 'bg-violet-500/10 text-violet-300 border-violet-500/30',
      icon: HelpCircle,
      label: 'UNVERIFIED',
      dot: 'bg-violet-400',
    },
  }[status];

  const Icon = config.icon;
  const sizeClasses = size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-2.5 py-1 text-xs font-medium';

  return (
    <span 
      className={`inline-flex items-center gap-1.5 rounded-full border font-mono tracking-wider transition-colors duration-150 ${config.bg} ${sizeClasses}`}
    >
      {showIcon && <Icon className={size === 'sm' ? 'w-3 h-3' : 'w-3.5 h-3.5'} />}
      <span>{config.label}</span>
    </span>
  );
};
