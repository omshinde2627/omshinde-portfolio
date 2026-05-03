'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/components/ThemeProvider';

export default function SkyToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';

  const handleToggle = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <label className="relative inline-block cursor-pointer select-none">
      <input
        type="checkbox"
        className="sr-only"
        checked={isDark}
        onChange={handleToggle}
      />
      <div
        className={cn(
          'relative w-[169px] h-[75px] rounded-[187px] overflow-hidden transition-all duration-500 ease-[cubic-bezier(0,_-0.02,_0.4,_1.25)]',
          'shadow-[0_-2px_2px_rgba(0,0,0,0.25),_0_2px_4px_rgba(255,255,255,0.94)]',
          'before:absolute before:inset-0 before:rounded-[187px] before:shadow-[0_1.5px_5.6px_rgba(0,0,0,0.25)_inset]',
          isDark ? 'bg-[#1D1F2C]' : 'bg-[#3D7EAE]'
        )}
      >
        {/* Clouds */}
        <div
          className={cn(
            'absolute w-[37.5px] h-[37.5px] bg-[#F3FDFF] rounded-[187px] transition-all duration-500 ease-[cubic-bezier(0,_-0.02,_0.4,_1.25)]',
            'shadow-[28.1px_9.4px_0_0_#F3FDFF,_-9.4px_-9.4px_0_0_#AACADF,_43.1px_11.3px_0_0_#F3FDFF,_15px_-3.8px_0_0_#AACADF,_65.6px_0_0_0_#F3FDFF,_37.5px_-1.9px_0_0_#AACADF,_88.1px_9.4px_0_0_#F3FDFF,_60px_-9.4px_0_0_#AACADF,_108.8px_-1.9px_0_0_#F3FDFF,_78.8px_0_0_0_#AACADF,_135px_-9.4px_0_0_#F3FDFF,_101.3px_-13.1px_0_0_#AACADF,_138.8px_-52.5px_0_13.1px_#F3FDFF,_120px_-18.8px_0_0_#AACADF,_123.8px_-63.8px_0_13.1px_#AACADF]',
            isDark ? 'bottom-[-121.9px]' : 'bottom-[-18.8px] left-[9.4px]'
          )}
        />

        {/* Stars */}
        <div
          className={cn(
            'absolute left-[9.4px] w-[82.5px] h-auto transition-all duration-500 ease-[cubic-bezier(0,_-0.02,_0.4,_1.25)] text-white',
            isDark ? 'top-1/2 -translate-y-1/2' : 'top-[-100%]'
          )}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144 55" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M135.831 3.00688C135.055 3.85027 134.111 4.29946 133 4.35447C134.111 4.40947 135.055 4.85867 135.831 5.71123C136.607 6.55462 136.996 7.56303 136.996 8.72727C136.996 7.95722 137.172 7.25134 137.525 6.59129C137.886 5.93124 138.372 5.39954 138.98 5.00535C139.598 4.60199 140.268 4.39114 141 4.35447C139.88 4.2903 138.936 3.85027 138.16 3.00688C137.384 2.16348 136.996 1.16425 136.996 0C136.996 1.16425 136.607 2.16348 135.831 3.00688ZM31 23.3545C32.1114 23.2995 33.0551 22.8503 33.8313 22.0069C34.6075 21.1635 34.9956 20.1642 34.9956 19C34.9956 20.1642 35.3837 21.1635 36.1599 22.0069C36.9361 22.8503 37.8798 23.2903 39 23.3545C38.2679 23.3911 37.5976 23.602 36.9802 24.0053C36.3716 24.3995 35.8864 24.9312 35.5248 25.5913C35.172 26.2513 34.9956 26.9572 34.9956 27.7273C34.9956 26.563 34.6075 25.5546 33.8313 24.7112C33.0551 23.8587 32.1114 23.4095 31 23.3545ZM0 36.3545C1.11136 36.2995 2.05513 35.8503 2.83131 35.0069C3.6075 34.1635 3.99559 33.1642 3.99559 32C3.99559 33.1642 4.38368 34.1635 5.15987 35.0069C5.93605 35.8503 6.87982 36.2903 8 36.3545C7.26792 36.3911 6.59757 36.602 5.98015 37.0053C5.37155 37.3995 4.88644 37.9312 4.52481 38.5913C4.172 39.2513 3.99559 39.9572 3.99559 40.7273C3.99559 39.563 3.6075 38.5546 2.83131 37.7112C2.05513 36.8587 1.11136 36.4095 0 36.3545ZM56.8313 24.0069C56.0551 24.8503 55.1114 25.2995 54 25.3545C55.1114 25.4095 56.0551 25.8587 56.8313 26.7112C57.6075 27.5546 57.9956 28.563 57.9956 29.7273C57.9956 28.9572 58.172 28.2513 58.5248 27.5913C58.8864 26.9312 59.3716 26.3995 59.9802 26.0053C60.5976 25.602 61.2679 25.3911 62 25.3545C60.8798 25.2903 59.9361 24.8503 59.1599 24.0069C58.3837 23.1635 57.9956 22.1642 57.9956 21C57.9956 22.1642 57.6075 23.1635 56.8313 24.0069ZM81 25.3545C82.1114 25.2995 83.0551 24.8503 83.8313 24.0069C84.6075 23.1635 84.9956 22.1642 84.9956 21C84.9956 22.1642 85.3837 23.1635 86.1599 24.0069C86.9361 24.8503 87.8798 25.2903 89 25.3545C88.2679 25.3911 87.5976 25.602 86.9802 26.0053C86.3716 26.3995 85.8864 26.9312 85.5248 27.5913C85.172 28.2513 84.9956 28.9572 84.9956 29.7273C84.9956 28.563 84.6075 27.5546 83.8313 26.7112C83.0551 25.8587 82.1114 25.4095 81 25.3545ZM136 36.3545C137.111 36.2995 138.055 35.8503 138.831 35.0069C139.607 34.1635 139.996 33.1642 139.996 32C139.996 33.1642 140.384 34.1635 141.16 35.0069C141.936 35.8503 142.88 36.2903 144 36.3545C143.268 36.3911 142.598 36.602 141.98 37.0053C141.372 37.3995 140.886 37.9312 140.525 38.5913C140.172 39.2513 139.996 39.9572 139.996 40.7273C139.996 39.563 139.607 38.5546 138.831 37.7112C138.055 36.8587 137.111 36.4095 136 36.3545ZM101.831 49.0069C101.055 49.8503 100.111 50.2995 99 50.3545C100.111 50.4095 101.055 50.8587 101.831 51.7112C102.607 52.5546 102.996 53.563 102.996 54.7273C102.996 53.9572 103.172 53.2513 103.525 52.5913C103.886 51.9312 104.372 51.3995 104.98 51.0053C105.598 50.602 106.268 50.3911 107 50.3545C105.88 50.2903 104.936 49.8503 104.16 49.0069C103.384 48.1635 102.996 47.1642 102.996 46C102.996 47.1642 102.607 48.1635 101.831 49.0069Z"
              fill="currentColor"
            />
          </svg>
        </div>

        {/* Circle Container */}
        <div
          className={cn(
            'absolute w-[101.3px] h-[101.3px] rounded-[187px] flex transition-all duration-300 ease-[cubic-bezier(0,_-0.02,_0.35,_1.17)]',
            'shadow-[inset_0_0_0_101.3px_rgba(255,255,255,0.1),_0_0_0_18.8px_rgba(255,255,255,0.1),_0_0_0_37.5px_rgba(255,255,255,0.1)]',
            'bg-white/10',
            isDark
              ? 'left-[calc(100%_-_18.8px_-_101.3px)] hover:left-[calc(100%_-_18.8px_-_101.3px_-_5.6px)]'
              : 'left-[-18.8px] hover:left-[-13.2px]',
            'top-[-18.8px]'
          )}
        >
          {/* Sun/Moon Container */}
          <div className="relative z-[2] w-[63.8px] h-[63.8px] m-auto rounded-[187px] bg-[#ECCA2F] shadow-[1.9px_1.9px_1.9px_0_rgba(254,255,239,0.61)_inset,_0_-1.9px_1.9px_0_#a1872a_inset] drop-shadow-[1.9px_3.8px_3.8px_rgba(0,0,0,0.25)] overflow-hidden transition-all duration-500 ease-[cubic-bezier(0,_-0.02,_0.4,_1.25)]">
            {/* Moon */}
            <div
              className={cn(
                'w-full h-full bg-[#C4C9D1] rounded-[inherit] shadow-[1.9px_1.9px_1.9px_0_rgba(254,255,239,0.61)_inset,_0_-1.9px_1.9px_0_#969696_inset] transition-all duration-500 ease-[cubic-bezier(0,_-0.02,_0.4,_1.25)] relative',
                isDark ? 'translate-x-0' : 'translate-x-full'
              )}
            >
              {/* Moon Spots */}
              <div className="absolute top-[22.5px] left-[9.4px] w-[22.5px] h-[22.5px] rounded-[187px] bg-[#959DB1] shadow-[0_0.9px_1.9px_rgba(0,0,0,0.25)_inset]" />
              <div className="absolute top-[28.1px] left-[41.3px] w-[11.3px] h-[11.3px] rounded-[187px] bg-[#959DB1] shadow-[0_0.9px_1.9px_rgba(0,0,0,0.25)_inset]" />
              <div className="absolute top-[9.4px] left-[24.4px] w-[7.5px] h-[7.5px] rounded-[187px] bg-[#959DB1] shadow-[0_0.9px_1.9px_rgba(0,0,0,0.25)_inset]" />
            </div>
          </div>
        </div>
      </div>
    </label>
  );
}
