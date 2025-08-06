import React from 'react';
import {SideBarMenu} from "@/components/sidebarAdmin/SideBarMenu";
import {SidebarTrigger} from "@/components/ui/sidebar";

const SideBarAdmin = () => {
  return (
    <>
        <SideBarMenu/>
        <SidebarTrigger />
    </>
  );
};

export default SideBarAdmin;
