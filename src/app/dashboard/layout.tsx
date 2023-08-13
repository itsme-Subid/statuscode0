"use client";

import Sidebar from "@/components/sidebar";
import { useAuth0 } from "@auth0/auth0-react";
import { getCookie } from "./page";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { logout } = useAuth0();
  if (getCookie("role") !== "user") {
    logout();
    window.location.href = "/";
  }
  return (
    <div className="flex min-h-screen bg-default">
      <Sidebar />
      <div className="relative m-8 flex-1">{children}</div>
    </div>
  );
};

export default Layout;
