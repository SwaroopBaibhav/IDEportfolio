import { Outlet } from "react-router-dom";
import { Header, Footer, SideBar, SidebarStyle } from "./components";

import React from 'react'

function Layout() {
  return (
    <div className=" flex flex-col h-screen">
        <Header />
        <div className="flex overflow-hidden">
            <SideBar />
            <Outlet />
        </div>
        <Footer />
    </div>
  )
}

export default Layout