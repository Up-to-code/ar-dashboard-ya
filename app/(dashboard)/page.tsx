import { Button_x, Button_xu } from "@/components/common/button";
import TitlePage from "@/components/common/TitlePage";
import DashboardSummary from "@/components/dashboard-summary/DashboardSummary";

export default function page() {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <TitlePage title="لوحة التحكم" />
        <div className="text-right flex gap-1 ">
          <Button_xu>هذا الأسبوع</Button_xu>
          <Button_x>عرض التقارير</Button_x>
        </div>
      </div>
      <div className="flex   items-center gap-4 w-full">
        <div className="flex-1/3">
          <DashboardSummary />
        </div>
        <div className="flex-1">sd</div>
      </div>
    </div>
  );
}
