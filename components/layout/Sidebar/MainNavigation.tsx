import React from 'react';
import NavItem from './NavItem';

interface NavItemData {
  id: string;
  title: string;
  icon?: React.ReactNode | string;
  href?: string;
}

interface MainNavigationProps {
  activeItem: string;
  onItemClick: (itemId: string) => void;
}

const MainNavigation: React.FC<MainNavigationProps> = ({ activeItem, onItemClick }) => {
  const navItems: NavItemData[] = [
    {
      id: 'home',
      title: 'الرئيسية',
      icon: "./icon/home.svg",
      href: "/"
    },
    {
      id: 'services',
      title: 'الخدمــــات',
      icon: "./icon/briefcase.svg",
      href: "/services"
    },
    {
      id: 'orders',
      title: 'الطلبات',
      icon: (
        <svg width="16" height="16" viewBox="0 0 16 16" className="fill-current">
          <rect x="11.87" y="11.04" width="2" height="2" />
          <rect x="13.91" y="13.53" width="1" height="2.93" />
          <rect x="2.01" y="5.57" width="16" height="6" />
          <rect x="9.38" y="9.83" width="1.25" height="8" />
          <rect x="1.36" y="1.03" width="16" height="16" />
        </svg>
      )
    },
    {
      id: 'reservations',
      title: 'الحجــوزات',
      icon: (
        <svg width="16" height="16" viewBox="0 0 16 16" className="fill-current">
          <rect x="2" y="2" width="12" height="12" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <line x1="5" y1="1" x2="5" y2="3" stroke="currentColor" strokeWidth="1.5" />
          <line x1="11" y1="1" x2="11" y2="3" stroke="currentColor" strokeWidth="1.5" />
          <line x1="2" y1="6" x2="14" y2="6" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      )
    },
    {
      id: 'customers',
      title: 'العملاء',
      icon: (
        <svg width="16" height="16" viewBox="0 0 16 16" className="fill-current">
          <rect x="1.88" y="3.12" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </svg>
      )
    },
    {
      id: 'reports',
      title: 'التقارير',
      icon: (
        <svg width="16" height="16" viewBox="0 0 16 16" className="fill-current">
          <rect x="2.5" y="2.5" width="14" height="14" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <line x1="5" y1="6" x2="11" y2="6" stroke="currentColor" strokeWidth="1.5" />
          <line x1="5" y1="8" x2="11" y2="8" stroke="currentColor" strokeWidth="1.5" />
          <line x1="5" y1="10" x2="8" y2="10" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      )
    },
    {
      id: 'marketing',
      title: 'الأدوات التسويقية',
      icon: (
        <svg width="16" height="16" viewBox="0 0 16 16" className="fill-current">
          <path d="M8 1l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </svg>
      )
    },
    {
      id: 'reviews',
      title: 'الأسئلة و التقييمات',
      icon: (
        <svg width="16" height="16" viewBox="0 0 16 16" className="fill-current">
          <path d="M2 2h12c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2H4l-2 2V4c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <circle cx="6" cy="8" r="1" fill="currentColor" />
          <circle cx="8" cy="8" r="1" fill="currentColor" />
          <circle cx="10" cy="8" r="1" fill="currentColor" />
        </svg>
      )
    },
    {
      id: 'settings',
      title: 'الإعدادات',
      icon: (
        <svg width="16" height="16" viewBox="0 0 16 16" className="fill-current">
          <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M8 1v2M8 13v2M15 8h-2M3 8H1M13.657 2.343l-1.414 1.414M4.757 11.243l-1.414 1.414M13.657 13.657l-1.414-1.414M4.757 4.757L3.343 3.343" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      )
    }
  ];

  return (
    <nav className="self-stretch flex flex-col justify-start items-end gap-2" role="navigation" aria-label="Main navigation">
      {navItems.map((item) => (
        <NavItem
          key={item.id}
          title={item.title}
          isActive={activeItem === item.id}
          icon={item.icon}
          href={item.href}
          onClick={() => onItemClick(item.id)}
        />
      ))}
    </nav>
  );
};

export default MainNavigation;