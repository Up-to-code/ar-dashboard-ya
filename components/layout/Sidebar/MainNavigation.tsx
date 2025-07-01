import React from 'react';
import NavItem from './NavItem';

interface MainNavigationProps {
  activeItem: string;
  onItemClick: (itemId: string) => void;
}

const MainNavigation: React.FC<MainNavigationProps> = ({ activeItem, onItemClick }) => {
  const navItems = [
    {
      id: 'home',
      title: 'الرئيسية',
      icon: "./icon/home.svg"
    },
    {
      id: 'services',
      title: 'الخدمــــات',
      icon: "./icon/briefcase.svg"
    },
    {
      id: 'orders',
      title: 'الطلبات',
      icon: (
        <>
          <div className="w-2 h-2 left-[11.87px] top-[11.04px] absolute bg-slate-600" />
          <div className="w-1 h-[2.93px] left-[13.91px] top-[13.53px] absolute bg-slate-600" />
          <div className="w-4 h-1.5 left-[2.01px] top-[5.57px] absolute bg-slate-600" />
          <div className="w-[1.25px] h-2 left-[9.38px] top-[9.83px] absolute bg-slate-600" />
          <div className="w-4 h-4 left-[1.36px] top-[1.03px] absolute bg-slate-600" />
        </>
      )
    },
    {
      id: 'reservations',
      title: 'الحجــوزات',
      icon: (
        <>
          <div className="w-4 h-1.5 left-[1.02px] top-[13.54px] absolute bg-slate-600" />
          <div className="w-4 h-3 left-[2.10px] top-[3.54px] absolute bg-slate-600" />
          <div className="w-1.5 h-1 left-[7.29px] top-[1.04px] absolute bg-slate-600" />
          <div className="w-1.5 h-[1.25px] left-[6.88px] top-[8.54px] absolute bg-slate-600" />
        </>
      )
    },
    {
      id: 'customers',
      title: 'العملاء',
      icon: <div className="w-4 h-3.5 left-[1.88px] top-[3.12px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-slate-600" />
    },
    {
      id: 'reports',
      title: 'التقارير',
      icon: <div className="w-3.5 h-3.5 left-[2.50px] top-[2.50px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-slate-600" />
    },
    {
      id: 'marketing',
      title: 'الأدوات التسويقية',
      icon: <div className="w-3.5 h-3.5 left-[2.50px] top-[2.50px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-slate-600" />
    },
    {
      id: 'reviews',
      title: 'الأسئلة و التقييمات',
      icon: <div className="w-4 h-3.5 left-[1.88px] top-[2.50px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-slate-600" />
    },
    {
      id: 'settings',
      title: 'الإعدادات',
      icon: <div className="w-3.5 h-3.5 left-[2.84px] top-[2.50px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-slate-600" />
    }
  ];

  return (
    <div className="self-stretch flex flex-col justify-start items-end gap-2">
      {navItems.map((item) => (
        <NavItem
          key={item.id}
          title={item.title}
          isActive={activeItem === item.id}
          icon={item.icon}
          onClick={() => onItemClick(item.id)}
        />
      ))}
    </div>
  );
};

export default MainNavigation; 