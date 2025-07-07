import Image from "next/image";
import React from "react";

const ApplicationsSection: React.FC = () => {
  return (
    <div className="w-full flex flex-col gap-3">
      <div className="w-full flex justify-between items-center gap-3 mt-6">
        <span className=" font-lama font-bold text-secondary">التطبيقات</span>

        <Image
          src="/icon/chevron-left.svg"
          alt="add-app"
          width={20}
          height={20}
        />
      </div>
      <div className="w-full flex  items-center gap-3">
        <Image src="/icon/add.svg" alt="add-app" width={20} height={20} />

        <span className="text-sm font-lama text-secondary">اضافة تطبيق</span>
      </div>
    </div>
  );
};

export default ApplicationsSection;
