import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  className = '',
  ...props
}) => {
  const baseStyles = "relative inline-flex items-center justify-center font-medium transition-all duration-200 select-none rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-midnight-950 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

  const sizeStyles = {
    sm: "px-3 py-1.5 text-xs gap-1.5",
    md: "px-4 py-2 text-sm gap-2",
    lg: "px-6 py-3 text-base gap-2.5",
  }[size];

  const variantStyles = {
    primary: "bg-cyan-500 hover:bg-cyan-400 text-midnight-950 font-semibold shadow-glow-cyan hover:shadow-cyan-400/40 focus:ring-cyan-400 border border-cyan-300/30",
    secondary: "bg-midnight-800/80 hover:bg-midnight-700/90 text-slate-200 hover:text-white border border-white/[0.08] hover:border-white/[0.2] shadow-glass-sm focus:ring-slate-400",
    danger: "bg-coral-600 hover:bg-coral-500 text-white shadow-glow-coral focus:ring-coral-400 border border-coral-400/30",
    ghost: "bg-transparent hover:bg-white/[0.05] text-slate-300 hover:text-white focus:ring-slate-400",
  }[variant];

  return (
    <button
      className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}
      {...props}
    >
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};
