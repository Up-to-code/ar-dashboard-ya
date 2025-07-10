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
    <div className="h-[90vh] min-h-[910px] w-64  bg-white rounded-[30px] shadow-lg  flex flex-col">
      {/* Header Section */}
      <div className="p-6">
        <SidebarHeader />
      </div>
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-between px-6 pb-6">
        {/* Navigation and Applications */}
        <div className="flex flex-col gap-6">
          {/* Main Navigation */}
          <MainNavigation 
            activeItem={activeItem} 
            onItemClick={() => {}} 
          />
          {/* Applications Section */}
          <ApplicationsSection />
        </div>
        
        {/* Download Section */}
        <DownloadSection />
      </div>
    </div>
  );
};

export default Sidebar;