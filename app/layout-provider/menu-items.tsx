import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"

import { Calendar, LayoutDashboard, List, MessageCircle, User2 } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import Cookies from "js-cookie"
import toast from "react-hot-toast"
import useUserGlobalStore from '../store/user-global-store'


interface MenuItemsProps {
  openMenuItems: boolean;
  setOpenMenuItems: (openMenuItems: boolean) => void;
}

function MenuItems({ openMenuItems, setOpenMenuItems }: MenuItemsProps) {
  const { user } = useUserGlobalStore();
  const pathname = usePathname();
  const router = useRouter();

  const onLogout = () => {
    try {
        Cookies.remove("token");
        Cookies.remove("role");
        router.push("/login");
        toast.success("Logged out successfully.");

    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };

  const userMenuItems = [
    { title: "Dashboard", route: "/user/dashboard", icon: <LayoutDashboard size={13} /> },
    { title: "Schedule Appointment", route: "/user/schedule-appointment", icon: <Calendar size={13} /> },
    { title: "My Appointments", route: "/user/my-appointments", icon: <List size={13} /> },
    { title: "Profile", route: "/user/profile", icon: <User2 size={13} /> },
  ];

  const salonSpaOwnerMenuItems = [
    { title: "Dashboard", route: "/salon-spa-owner/dashboard", icon: <LayoutDashboard size={13} /> },
    { title: " Salons & Spas", route: "/salon-spa-owner/salons-spas", icon: <List size={13} /> },
    { title: "Appointments", route: "/salon-spa-owner/appointments", icon: <MessageCircle size={13} /> },
    { title: "Feedback / Reviews", route: "/salon-spa-owner/feedback-reviews", icon: <User2 size={13} /> },
    { title: "Profile", route: "/user/profile", icon: <User2 size={13} /> },
  ];

  const menuItemsToRender = user?.role === 'user' ? userMenuItems : salonSpaOwnerMenuItems;

  return (
    <Sheet open={openMenuItems} onOpenChange={setOpenMenuItems}>
      <SheetContent className="lg:min-w-[500px]">
        <SheetHeader>
          <SheetTitle></SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-10 mt-20 px-7">
          {menuItemsToRender.map((menuItem, index) => (
            <div
              className={`flex gap-5 items-center p-2 rounded-md cursor-pointer ${
                pathname === menuItem.route
                  ? "bg-gray-400 border border-gray-500"
                  : "text-gray-500"
              }`}
              key={index}
            >
              <div className="text-black">
                {menuItem.icon}
              </div>
              <span className="text-sm! text-black">{menuItem.title}</span>
            </div>
          ))}

          <button onClick={onLogout} className="text-sm text-black">
            Logout
          </button>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default MenuItems