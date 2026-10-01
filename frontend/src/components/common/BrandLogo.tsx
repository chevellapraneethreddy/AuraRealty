import React from 'react';

interface BrandLogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  variant = 'dark',
  size = 'md',
  showTagline = true,
}) => {
  const isLight = variant === 'light';

  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-11 h-11',
  };

  const titleSizes = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Geometric Modern Icon */}
      <div
        className={`${iconSizes[size]} rounded-xl bg-gradient-to-br from-[#E07A5F] via-[#D4755B] to-[#9C4128] flex items-center justify-center shadow-md shadow-[#D4755B]/20 relative overflow-hidden flex-shrink-0 group-hover:scale-105 transition-transform`}
      >
        <svg
          viewBox="0 0 40 40"
          className="w-4/5 h-4/5 text-white"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 7 L32 31 L26 31 L20 19 L14 31 L8 31 Z"
            fill="currentColor"
            fillOpacity="0.95"
          />
          <path
            d="M20 14 L27 28 L23 28 L20 22 L17 28 L13 28 Z"
            fill="#F4A261"
          />
          <rect x="15" y="25" width="10" height="2" rx="1" fill="currentColor" />
        </svg>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col">
        <span
          className={`font-fraunces ${titleSizes[size]} font-bold tracking-tight leading-none ${
            isLight ? 'text-white' : 'text-[#111827]'
          }`}
        >
          Aura<span className="text-[#D4755B]">Realty</span>
        </span>
        {showTagline && (
          <span
            className={`font-space-mono text-[9px] font-semibold tracking-[0.22em] uppercase mt-1 leading-none ${
              isLight ? 'text-[#9CA3AF]' : 'text-[#6B7280]'
            }`}
          >
            INTELLIGENT LIVING
          </span>
        )}
      </div>
    </div>
  );
};

export default BrandLogo;
