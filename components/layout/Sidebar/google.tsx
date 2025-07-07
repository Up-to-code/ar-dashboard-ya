import Image from 'next/image';
import React from 'react';

const DownloadSection: React.FC = () => {
  return (
    <div className="w-full flex flex-col gap-3 mx-auto  mb-2">
      <span className="font-lama font-bold text-secondary text-right block">حمل التطبيق</span>
      <div className="w-full flex justify-start items-center gap-3">
          <Image src="/icon/apple.svg" alt="apple" width={100} height={40} />
          <Image src="/icon/google.svg" alt="google" width={100} height={40} />
      </div>
    </div>
  );
};

export default DownloadSection; 