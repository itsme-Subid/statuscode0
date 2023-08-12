"use client";

const Topbar = ({
  title = "Dashboard",
  components,
}: {
  title?: string;
  components?: (() => JSX.Element)[];
}) => {
  return (
    <header className="flex items-center justify-between font-montserrat text-4xl font-bold">
      <h2>{title}</h2>
      <div className="right flex items-center gap-4">
        {components?.map((Component, index) => (
          <Component key={index} />
        ))}
      </div>
    </header>
  );
};

export default Topbar;
