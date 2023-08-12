"use client";

import { twMerge } from "tailwind-merge";
import { LogoutIcon, StoreAddIcon, StoreIcon } from "@/icons/index";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Sidebar = () => {
  const [tabs, setTabs] = useState([
    {
      icon: <StoreIcon />,
      title: "My Store",
      active: false,
      link: "/seller",
    },
  ]);
  const pathname = usePathname();
  useEffect(() => {
    setTabs(
      tabs.map((tab) => {
        if (tab.link === pathname) {
          tab.active = true;
        } else {
          tab.active = false;
        }
        return tab;
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);
  return (
    <div className="sticky top-0 h-screen w-full min-w-fit basis-1/5 p-8 pr-0">
      <div className="sidebar-container flex h-full w-full flex-col justify-center gap-4 rounded-[1.875rem] bg-black px-10 py-14 text-white">
        <h1 className="text-3xl font-bold">Board.</h1>
        <ul className="flex flex-1 flex-col">
          {tabs.map((tab, index) => (
            <li
              className="my-4 cursor-pointer select-none"
              key={index}
              onClick={() => {
                setTabs(
                  tabs.map((tab, tabIndex) => {
                    if (tabIndex === index) {
                      tab.active = true;
                    } else {
                      tab.active = false;
                    }
                    return tab;
                  })
                );
              }}
            >
              <Link href={tab.link} className="flex items-center gap-4" shallow>
                <span className={tab.active ? "text-white" : "text-gray-400"}>
                  {tab.icon}
                </span>
                <span
                  className={twMerge(
                    "text-sm font-medium tracking-wider",
                    tab.active ? "font-bold text-white" : "text-gray-400"
                  )}
                >
                  {tab.title}
                </span>
              </Link>
            </li>
          ))}
          <li
            className="my-4 cursor-pointer select-none"
            onClick={() => {
              window.location.href = "/";
            }}
          >
            <button className="flex items-center gap-4">
              <span className="text-gray-400">
                <LogoutIcon />
              </span>
              <span className="text-sm font-medium tracking-wider text-gray-400">
                Logout
              </span>
            </button>
          </li>
          <li className="font-sm mt-auto cursor-pointer font-light text-gray-400">
            Help
          </li>
          <li className="font-sm cursor-pointer font-light text-gray-400">
            Contact Us
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
