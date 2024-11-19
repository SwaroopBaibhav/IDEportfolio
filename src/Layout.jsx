import { Outlet } from "react-router-dom";
import { Header, Footer, SideBar, SidebarStyle } from "./components";

import React from 'react'

function Layout() {
  return (
    <>
        <Header />
        <div className="flex">
            <SideBar />
            <Outlet />
        </div>
        <Footer />
    </>
  )
}

export default Layout