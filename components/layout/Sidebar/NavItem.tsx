import Image from "next/image";
import React from "react";

interface NavItemProps {
  title: string;
  isActive?: boolean;
  icon: string;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({
  title,
  isActive = false,
  icon,
  onClick,
}) => {
  const baseClasses =
    "self-stretch h-9 px-4 py-2 rounded-[34px] inline-flex font-lama text-sm items-center gap-4 cursor-pointer transition-colors hover:bg-primary/10 ";
  const activeClasses = "bg-[#FCEBE9]  ";
  const inactiveClasses = "bg-white";

  return (
    <div
      className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
      onClick={onClick}
    >
      <div className="w-5 h-5 relative overflow-hidden">
        <Image src={icon} alt={title} width={20} height={20} className={`${isActive ? "text-primary" : "text-secondary"}`} />
      </div>
      <div
        className={`text-right font-extrabold font-['Lama_Sans'] text-sm ${
          isActive ? "text-primary" : "text-slate-600"
        }`}
      >
        {title}
      </div>
    </div>
  );
};

export default NavItem;
