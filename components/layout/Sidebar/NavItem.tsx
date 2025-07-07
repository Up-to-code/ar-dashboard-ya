import Image from "next/image";
import Link from "next/link";
import React from "react";

interface NavItemProps {
  title: string;
  isActive?: boolean;
  icon?: string | React.ReactNode;
  onClick: () => void;
  href?: string;
}

const NavItem: React.FC<NavItemProps> = ({
  title,
  isActive = false,
  icon,
  onClick,
  href,
}) => {
  const baseClasses = 
    "self-stretch h-9 px-4 py-2 pb-3 rounded-[34px] inline-flex font-lama text-sm items-center gap-4 cursor-pointer transition-all duration-200 hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary/20";
  const activeClasses = "bg-[#FCEBE9] ";
  const inactiveClasses = "bg-white ";

  const renderIcon = () => {
    if (!icon) return null;
    
    // If icon is a string (image path)
    if (typeof icon === 'string') {
      return (
        <div className="w-5 h-5 relative overflow-hidden flex-shrink-0">
          <Image 
            src={icon} 
            alt={`${title} icon`} 
            width={20} 
            height={20} 
            className={`object-contain ${isActive ? "filter brightness-0 saturate-100" : "filter brightness-0 saturate-100 opacity-60"}`}
            style={{
              filter: isActive 
                ? 'brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%)' 
                : 'brightness(0) saturate(100%) invert(50%) sepia(8%) saturate(1171%) hue-rotate(179deg) brightness(94%) contrast(86%)'
            }}
          />
        </div>
      );
    }
    
    // If icon is a React node (SVG component)
    return (
      <div className={`w-5 h-5 flex-shrink-0 ${isActive ? "text-primary" : "text-slate-600"}`}>
        {icon}
      </div>
    );
  };

  const handleClick = (e: React.MouseEvent) => {
    onClick();
    // If there's no href, prevent default link behavior
    if (!href) {
      e.preventDefault();
    }
  };

  const content = (
    <>
      {renderIcon()}
      <span
        className={`text-right font-extrabold font-['Lama_Sans'] text-sm flex-1 ${
          isActive ? "text-primary" : "text-slate-600"
        }`}
      >
        {title}
      </span>
    </>
  );

  // If href is provided, wrap with Link
  if (href) {
    return (
      <Link
        href={href}
        className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
        onClick={handleClick}
        aria-pressed={isActive}
        aria-label={title}
      >
        {content}
      </Link>
    );
  }

  // If no href, render as button
  return (
    <button
      type="button"
      className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
      onClick={handleClick}
      aria-pressed={isActive}
      aria-label={title}
    >
      {content}
    </button>
  );
};

export default NavItem;