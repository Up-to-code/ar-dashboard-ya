"use client"
import React from 'react';
import SidebarHeader from './SidebarHeader';
import MainNavigation from './MainNavigation';
import ApplicationsSection from './ApplicationsSection';
import DownloadSection from './google';

// Main Sidebar Component
const Sidebar = () => {
  const [activeItem, setActiveItem] = React.useState('home');

  const handleItemClick = (itemId: string) => {
    setActiveItem(itemId);
    console.log(`Navigation clicked: ${itemId}`);
  };

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
              onItemClick={handleItemClick} 
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