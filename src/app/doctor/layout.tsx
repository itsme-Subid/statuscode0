import Sidebar from "@/components/sidebarDocter";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen bg-default">
      <Sidebar />
      <div className="relative m-8 flex-1">{children}</div>
    </div>
  );
};

export default Layout;
