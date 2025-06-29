import Image from "next/image";
import React from "react";
import { Input } from "../ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function Header() {
  return (
    <div className="w-full h-20 px-10 flex items-center justify-between py-6">
      {/* Logo Section */}
      <div className="flex items-center w-[258px]">
        <Image src="/icon/Logo.svg" alt="logo" width={72} height={72} />
      </div>

      {/* Search Section */}
      <div className="flex items-center gap-4 w-[500px]">
        {/* Search Icon */}
        <div className="p-3 bg-primary rounded-full">
          <Image src="/icon/Search.svg" alt="search" width={18} height={18} />
        </div>

        {/* Search Input */}
        <div className="flex items-center w-full h-[48px] border border-secondary/20 rounded-full px-2 bg-white shadow-none focus-within:ring-0 focus-within:border-secondary">
          <Input
            type="text"
            placeholder="ابحث عن ما تريد"
            className="w-full h-full outline-none border-none bg-white focus:border-secondary"
          />

          {/* Dropdown Filter */}
          <div className="flex items-center justify-center border-l border-secondary/20 px-2">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <div className="flex items-center gap-1">
                  <span className="text-sm text-primary font-bold">الطلبات</span>
                  <Image
                    src="/icon/Filter.svg"
                    alt="filter"
                    width={24}
                    height={24}
                    className="cursor-pointer text-primary"
                  />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="text-secondary w-[150px]">
                <DropdownMenuItem className="text-primary font-bold text-end">
                  الطلبات
                </DropdownMenuItem>
                <DropdownMenuItem>المنتجات</DropdownMenuItem>
                <DropdownMenuItem>الموظفين</DropdownMenuItem>
                <DropdownMenuItem>الموردين</DropdownMenuItem>
                <DropdownMenuItem>العملاء</DropdownMenuItem>
                <DropdownMenuItem>الموظفين</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

{/* User & Notifications */}
<div className="flex items-center gap-4">
  {/* Bell Icon */}
  <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full border border-secondary/20">
    <Image src="/icon/bell.svg" alt="bell" width={24} height={24} className="cursor-pointer" />
  </div>

  {/* User Icon */}
  <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full border border-secondary/20">
    <Image src="/icon/user.svg" alt="user" width={24} height={24} />
  </div>

  {/* User Name and Role */}
  <div className="text-end">
    <div className="text-secondary font-bold text-sm">أ. فراس</div>
    <div className="text-muted-foreground text-xs">Admin</div>
  </div>

  {/* Dropdown Arrow */}
  <div className="flex items-center justify-center">
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Image src="/icon/DropdownMenuUser.svg" alt="dropdown" width={20} height={20} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="text-secondary w-[150px]">
        <DropdownMenuItem className="text-primary font-bold text-end">
          تسجيل الخروج
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
</div>

    </div>
  );
}

export default Header;
