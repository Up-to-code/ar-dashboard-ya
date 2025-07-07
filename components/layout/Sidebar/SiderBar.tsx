"use client"
import React from 'react';
import SidebarHeader from './SidebarHeader';
import MainNavigation from './MainNavigation';
import ApplicationsSection from './ApplicationsSection';
import DownloadSection from './google';
import { usePathname } from 'next/navigation';

// Main Sidebar Component
const Sidebar = () => {
  const pathname = usePathname();

  // Define navItems here to use for smart matching
  const navItems = [
    { id: 'home', href: '/' },
    { id: 'services', href: '/services' },
    { id: 'orders', href: '/orders' },
    { id: 'reservations', href: '/reservations' },
    { id: 'customers', href: '/customers' },
    { id: 'reports', href: '/reports' },
    { id: 'marketing', href: '/marketing' },
    { id: 'reviews', href: '/reviews' },
    { id: 'settings', href: '/settings' },
  ];

  // Find the navItem with the longest href that matches the start of the pathname
  const getActiveItem = () => {
    let active = '';
    let maxLength = 0;
    for (const item of navItems) {
      if (
        item.href === '/' ? pathname === '/' : pathname.startsWith(item.href)
      ) {
        if (item.href.length > maxLength) {
          active = item.id;
          maxLength = item.href.length;
        }
      }
    }
    return active;
  };

  const activeItem = getActiveItem();

  return (
    <div className="h-[911px] px-6 py-6 bg-white rounded-[30px] shadow outline  outline-offset-[-1px] outline-black/10 inline-flex flex-col justify-end items-end gap-7 overflow-hidden" >
      {/* Header Section */}
      <SidebarHeader />
      {/* Main Content */}
      <div className="self-stretch h-[781px] flex flex-col justify-between items-end">
        <div className="w-56 inline-flex justify-end items-start gap-4">
          <div className="flex-1 inline-flex flex-col justify-start items-end gap-6">
            {/* Main Navigation */}
            <MainNavigation 
              activeItem={activeItem} 
              onItemClick={() => {}} 
            />
            {/* Applications Section */}
            <ApplicationsSection />
          </div>
        </div>
        {/* Download Section */}
        <DownloadSection />
      </div>
    </div>
  );
};

export default Sidebar;