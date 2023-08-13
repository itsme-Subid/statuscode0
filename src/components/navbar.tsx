"use client";

import Link from "next/link";
import { useAuth0 } from "@auth0/auth0-react";
import { HomeIcon } from "lucide-react";
import { AddIcon, DashboardIcon } from "@/icons";

const Navbar = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  return (
    <nav className="fixed bottom-4 left-0 right-0">
      <ul className="px-8 py-4 flex gap-8 w-fit m-auto bg-slate-100 rounded-full">
        <li className="cursor-pointer" title="Home">
          <Link href="/">
            <HomeIcon />
          </Link>
        </li>
        {isAuthenticated ? (
          <li className="cursor-pointer" title="Dashboard">
            <Link href="/dashboard">
              <DashboardIcon />
            </Link>
          </li>
        ) : (
          <li
            className="cursor-pointer"
            onClick={() => loginWithRedirect()}
            title="Login"
          >
            <button>
              <AddIcon />
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
