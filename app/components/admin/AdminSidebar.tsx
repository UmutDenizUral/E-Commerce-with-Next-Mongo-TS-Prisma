'use client'
import { usePathname } from "next/navigation"
import AdminSidebarItem from "./AdminSidebarItem"
import { MdDashboard } from "react-icons/md"
import { MdBorderOuter } from "react-icons/md"
import { MdOutlineCreate } from "react-icons/md"


const AdminSidebar = () => {
    const pathName = usePathname()
    const adminPanel = [
        {
            name: 'Özetler',
            icon:MdDashboard,
            url: '/admin',
        }, {
            name: 'Ürün Oluştur',
            icon:MdOutlineCreate,
            url: '/admin/create',
        }, {
            name: 'Sipraişlerim',
            icon:MdBorderOuter,
            url: '/admin/order',
        }

    ]
    return (
        <div className="w-1/6 border-r h-screen">
     
                    {adminPanel.map((admin,i)=>(
                        <AdminSidebarItem key={i} selected={pathName== admin.url} url={admin.url} icon={admin.icon} name={admin.name} />

                    ))}
        </div>
    )
}

export default AdminSidebar