import LayoutAdmin from "@/layouts/LayoutAdmin";
import path from "path";
import ListProduct from "@/pages/admin/product/ListProduct";
import DashBoard from "@/pages/admin/dashboard/DashBoard";
import AddProduct from "@/pages/admin/product/AddProduct";
import EditProduct from "@/pages/admin/product/EditProduct";

export const PrivateAdmin = [
  {
    path: "/admin",
    element: <LayoutAdmin/>,
    children: [
      { index: true, element: <DashBoard /> },
      { path: "products", element: <ListProduct /> },
      { path: "products/add", element: <AddProduct /> },
      { path: "products/edit/:id", element: <EditProduct /> },
      // { path: "orders", element: <OrderListPage /> },
      // { path: "blogs", element: <BlogListPage /> },
      // { path: "users", element: <UserListPage /> },
      // { path: "settings", element: <SettingsPage /> },
    ]
  }
]