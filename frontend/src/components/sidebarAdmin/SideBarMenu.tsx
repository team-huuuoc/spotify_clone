import {
    BoxIcon,
    Calendar,
    ChevronDown,
    ChevronRight,
    LayoutDashboard,
    Search,
    Settings,
    ShoppingBasket
} from "lucide-react"
import {useState} from "react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar" // Hãy đảm bảo đường dẫn này chính xác trong dự án của bạn
import {Link} from "react-router-dom";

// Dữ liệu items với một vài gợi ý chỉnh sửa tên và URL cho rõ ràng hơn
const items = [
    {
        title: "Thống kê",
        url: "/admin",
        icon: LayoutDashboard,
    },
    {
        title: "Quản lý sản phẩm",
        // url: "/admin/products", // URL này có thể không cần nếu luôn có children và cha không click để đi đâu cả
        icon: BoxIcon ,
        children: [
            {
                title: "Danh sách sản phẩm",
                url: "/admin/products", // URL cụ thể hơn
            },
            {
                title: "Biến thể sản phẩm", // Sửa tên
                url: "/admin/collections",  // URL riêng
            },
            {
                title: "Bộ sưu tập", // Sửa tên
                url: "/admin/collections",  // URL riêng
            },
        ],
    },
    {
        title: "Quản lý đơn hàng",
        // url: "/admin/orders", // Tương tự, nếu chỉ để toggle thì không cần url ở đây
        icon: ShoppingBasket , // Có thể đổi icon nếu Settings dùng cho chỗ khác
        children: [
            {
                title: "Danh sách đơn hàng",
                url: "/admin/orders",
            },
            {
                title: "Cài đặt vận chuyển",
                url: "/admin/settings/shipping", // URL cụ thể
            },
        ],
    },
    {
        title: "Calendar",
        url: "/admin/calendar", // URL cụ thể
        icon: Calendar,
    },
    {
        title: "Search",
        url: "/admin/search",
        icon: Search,
    },
];

export function SideBarMenu() {
    const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({})

    const toggleMenu = (title: string) => {
        setOpenMenus((prev) => ({
            ...prev,
            [title]: !prev[title],
        }))
    }

    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        {/* SỬA ĐỔI CHÍNH Ở ĐÂY */}
                                        {item.children ? (
                                            // Nếu có children, render button để toggle
                                            <button
                                                type="button"
                                                className="flex items-center justify-between w-full cursor-pointer px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md text-left"
                                                onClick={() => toggleMenu(item.title)}
                                            >
                                                <div className="flex items-center gap-2">
                                                    <item.icon className="w-5 h-5" />
                                                    <span>{item.title}</span>
                                                </div>
                                                {/* Chevron chỉ hiển thị khi có children */}
                                                {openMenus[item.title] ? (
                                                    <ChevronDown className="w-4 h-4" />
                                                ) : (
                                                    <ChevronRight className="w-4 h-4" />
                                                )}
                                            </button>
                                        ) : (
                                            // Nếu không có children, render Link để điều hướng
                                            <Link
                                                to={item.url} // Đảm bảo item.url được cung cấp
                                                className="flex items-center justify-between w-full cursor-pointer px-2 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                                            >
                                                <div className="flex items-center gap-2">
                                                    <item.icon className="w-5 h-5" />
                                                    <span>{item.title}</span>
                                                </div>
                                                {/* Không có chevron ở đây vì không có children */}
                                            </Link>
                                        )}
                                    </SidebarMenuButton>

                                    {/* Submenu (logic không đổi) */}
                                    {item.children && openMenus[item.title] && (
                                        <div className="ml-6 mt-1 space-y-1">
                                            {item.children.map((child) => (
                                                <SidebarMenuItem key={child.title}>
                                                    <SidebarMenuButton asChild>
                                                        <Link
                                                            to={child.url}
                                                            className="block px-2 py-1 text-sm text-muted-foreground hover:text-foreground hover:underline"
                                                        >
                                                            {child.title}
                                                        </Link>
                                                    </SidebarMenuButton>
                                                </SidebarMenuItem>
                                            ))}
                                        </div>
                                    )}
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}