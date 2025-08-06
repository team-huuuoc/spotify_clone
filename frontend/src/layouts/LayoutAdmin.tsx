import { SidebarProvider } from "@/components/ui/sidebar"; // Import provider
import { Outlet } from "react-router-dom";
import SideBarAdmin from "@/components/sidebarAdmin/SideBarAdmin";

const LayoutAdmin = () => {
  return (
      <SidebarProvider>
        <div className="flex">
          <SideBarAdmin />
          <main className="flex-1 p-6">
            <Outlet />
          </main>
        </div>
      </SidebarProvider>
  );
};

export default LayoutAdmin;
