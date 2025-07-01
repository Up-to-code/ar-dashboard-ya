import React from 'react';

const DownloadSection: React.FC = () => {
  return (
    <div className="pr-5 flex flex-col justify-start items-end gap-3">
      <div className="text-slate-600 text-sm font-extrabold font-['Lama_Sans']">
        حمل التطبيق
      </div>
      <div className="inline-flex justify-end items-start gap-[5px]">
        {/* Google Play Store Button */}
        <div className="w-20 h-7 relative overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
          <div className="w-20 h-7 left-0 top-0 absolute bg-neutral-400" />
          <div className="w-20 h-7 left-[0.61px] top-[0.61px] absolute bg-white" />
          {/* Google Play Store icon elements */}
          <div className="w-3 h-3 left-[6.73px] top-[9.32px] absolute bg-black" />
          <div className="w-[3.18px] h-1 left-[13.15px] top-[5.49px] absolute bg-black" />
          {/* ... rest of the Google Play Store icon elements */}
        </div>
        
        {/* App Store Button */}
        <div className="w-24 h-7 relative overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
          <div className="w-24 h-7 left-0 top-0 absolute bg-white" />
          <div className="w-24 h-7 left-0 top-0 absolute bg-neutral-400" />
          <div className="w-7 h-1 left-[28.76px] top-[4.74px] absolute bg-black" />
          <div className="w-14 h-3 left-[28.63px] top-[11.92px] absolute bg-black" />
          {/* Apple logo gradients */}
          <div className="w-2.5 h-4 left-[6.96px] top-[5.23px] absolute bg-gradient-to-bl from-sky-500 via-sky-500 to-cyan-400" />
          <div className="w-2 h-1.5 left-[15.96px] top-[11.01px] absolute bg-gradient-to-l from-yellow-400 via-yellow-500 to-amber-500" />
          <div className="w-3 h-2 left-[7.27px] top-[14px] absolute bg-gradient-to-bl from-red-500 to-pink-700" />
          <div className="w-3 h-2 left-[7.27px] top-[5px] absolute bg-gradient-to-br from-green-500 via-green-500 to-emerald-500" />
          {/* Shadows and highlights */}
          <div className="w-3 h-1.5 left-[7.28px] top-[16.89px] absolute opacity-20 bg-black" />
          <div className="w-1 h-[2.96px] left-[18.84px] top-[14px] absolute opacity-10 bg-black" />
          <div className="w-4 h-2 left-[6.96px] top-[5px] absolute opacity-25 bg-white" />
        </div>
      </div>
    </div>
  );
};

export default DownloadSection; 