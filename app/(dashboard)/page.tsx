import { Button_x, Button_xu } from "@/components/common/button";
import TitlePage from "@/components/common/TitlePage";
import WalletInterface from "@/components/dashboard-summary/arabic-wallet-interface";
import DashboardSummary from "@/components/dashboard-summary/DashboardSummary";
import WalletCard from "@/components/dashboard-summary/WalletCard";

export default function page() {
  return (
    <div className="h-full min-h-screen bg-[#F8F8F8] p-4">
      <div className="flex justify-between items-center mb-4">
        <TitlePage title="لوحة التحكم" />
        <div className="text-right flex gap-1">
          <Button_xu>هذا الأسبوع</Button_xu>
          <Button_x>عرض التقارير</Button_x>
        </div>
      </div>
      <div className="flex items-stretch gap-4 w-full">
        <div className="basis-1/3">
          <DashboardSummary />
        </div>
        <div className="basis-2/3  min-h-[350px] flex flex-col">
          <WalletCard />
         
            <WalletInterface />
       
        </div>
      </div>
    </div>
  );
}
