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
      <div className="flex items-center justify-between w-[258px] h-full">
        <div className="flex items-center gap-2">
          <Image src="/icon/Logo.svg" alt="logo" width={72} height={72} />
        </div>
      </div>

      {/* Search */}
      <div className="w-[500px] h-full flex items-center gap-2 ">
        {/* Icon */}
        <div className="p-3 bg-primary rounded-full w-max">
          <Image src="/icon/Search.svg" alt="search" width={18} height={18} />
        </div>
        <div className="w-full  outline-none h-[48px] focus-visible:ring-0 forced-colors:ring-0 focus:border-secondary rounded-full shadow-none px-2 bg-white flex border border-secondary/20 ">
          <Input
            type="text"
            placeholder="ابحث عن ما تريد"
            className="w-full  outline-none h-full focus-visible:ring-0 forced-colors:ring-0 focus:border-secondary rounded-full shadow-none px-2 bg-white border-none"
          />
          <div className="w-[100px] border-r border-secondary/20 my-2 px-1 flex items-center justify-center">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <div className="flex items-center gap-1 justify-around">
                  <span className="text-sm text-primary font-bold">الطلبات</span>
                  <Image src="/icon/Filter.svg" alt="filter" width={24} height={24}  className="cursor-pointer text-primary"/>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="text-secondary w-[100px]">
                <DropdownMenuItem className="text-primary font-bold text-end">الطلبات</DropdownMenuItem>
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



      {/* User */}
      <div className="w-[100px] h-full flex items-center justify-center">
        <Image src="/icon/User.svg" alt="user" width={24} height={24} />
      </div>
    </div>
  );
}

export default Header;
