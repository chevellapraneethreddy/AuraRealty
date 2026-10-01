import React from 'react';

const SimpleFooter: React.FC = () => {
  return (
    <footer className="bg-[#FAF8F4] border-t border-[#E6E0DA] py-8">
      <div className="max-w-[1280px] mx-auto px-8 text-center">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="w-2.5 h-2.5 bg-[#D4755B] rounded-full" />
          <span className="font-fraunces font-bold text-base text-[#1E293B] tracking-tight">
            Aura<span className="text-[#D4755B]">Realty</span>
          </span>
        </div>

        {/* Copyright */}
        <p className="font-manrope font-extralight text-xs text-[#94A3B8]">
          &copy; {new Date().getFullYear()} AuraRealty Technologies Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default SimpleFooter;