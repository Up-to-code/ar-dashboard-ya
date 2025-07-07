import Image from "next/image";
import Link from "next/link";
import React from "react";

const SidebarHeader: React.FC = () => {
  return (
    <div className="flex items-center justify-between w-full max-w-xs  gap-2 py-3">
      {/* Profile Image */}
      <div className="flex-shrink-0 w-12 h-12 rounded-full">
        <Image
          className="w-12 h-12 rounded-full object-cover"
          src="/images/profile.jpg"
          alt="Profile"
          width={48}
          height={48}
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col  gap-1 text-right w-full">
        {/* Store Name */}
        <h3 className="text-slate-700  font-bold font-lama leading-tight text-right">
          متجر الهدايــا
        </h3>

        <Link href="/" className="w-full">
          {/* Visit Store Link */}
          <div className="flex items-center gap-2">
            <span className="text-primary text-sm font-medium font-lama">
              زيـــارة المتجـر
            </span>
            <Image
              src="/icon/arrow-right.svg"
              alt="arrow-right"
              width={14}
              height={14}
              className="-mr-1 -mb-1"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SidebarHeader;
