import React from 'react';

const ApplicationsSection: React.FC = () => {
  return (
    <div className="w-56 flex flex-col justify-start items-end gap-3">
      <div className="self-stretch pl-4 pr-5 bg-white rounded-[34px] inline-flex justify-between items-center">
        <div className="w-5 h-5 relative overflow-hidden">
          <div className="w-1.5 h-2.5 left-[6.25px] top-[5px] absolute bg-slate-600" />
        </div>
        <div className="flex-1 text-right text-slate-600 text-sm font-extrabold font-['Lama_Sans']">
          التطبيقات
        </div>
      </div>
      <div className="pr-5 flex flex-col justify-start items-end gap-3">
        <div className="inline-flex justify-start items-center gap-2">
          <div className="text-right text-slate-600 text-sm font-semibold font-['Lama_Sans']">
            اضافة تطبيقات
          </div>
          <div className="w-6 h-6 px-2.5 bg-neutral-100 rounded-[20px] flex justify-between items-center cursor-pointer hover:bg-neutral-200 transition-colors">
            <div className="w-3 h-3 relative overflow-hidden">
              <div className="w-1.5 h-1.5 left-[3px] top-[3px] absolute outline outline-1 outline-offset-[-0.52px] outline-slate-600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationsSection; 