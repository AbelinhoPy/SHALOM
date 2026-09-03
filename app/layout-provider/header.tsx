import React from "react";
import {Menu} from "lucide-react";
import { IUser } from "@/app/interfaces";
import MenuItems from "./menu-items";
import useUserGlobalStore from "../store/user-global-store";
function Header() {
  const { user } = useUserGlobalStore();
  const [openMenuItems, setOpenMenuItems] = React.useState(false);
  return (
    <div className="bg-black p-5 text-white flex justify-between">
      <h1 className="font-bold text-white text-2xl">
        SHALOM
      </h1>

      <div className="flex gap-5 items-center">
        <h1 className="text-sm!">
          {user?.name}
        </h1>

        <Menu 
        className="text-orange-500  cursor-pointer"
        size={15}

        onClick={() => setOpenMenuItems(true)}


        />
      </div>

      {openMenuItems && (
        <MenuItems 
        openMenuItems={openMenuItems} 
        setOpenMenuItems={setOpenMenuItems} 
        />
        )}
    </div>
  );
}

export default Header;