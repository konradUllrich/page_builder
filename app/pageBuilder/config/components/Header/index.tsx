const toEditModeHref = (url: string) => `editor/${url}`;

const NavItem = ({ label, href }: { label: string; href: string }) => {
  // const navPath = window.location.pathname.replace("/edit", "") || "/";

  // const isActive = navPath === (href.replace("/edit", "") || "/");

  const El = href ? "a" : "span";

  return (
    <El
      href={href || "/"}
      style={{
        textDecoration: "none",
        // color: isActive
        //   ? "var(--puck-color-grey-02)"
        //   : "var(--puck-color-grey-06)",
        // fontWeight: isActive ? "600" : "400",
      }}
    >
      {label}
    </El>
  );
};

const Header = ({ editMode }: { editMode: boolean }) => (
  <header className="flex items-center mx-auto max-w-7xl fixed top-0 left-0 right-0 z-10 bg-white h-20">
    <div className={"text-2xl font-extrabold"}>LOGO</div>
    <nav className={"flex gap-6 ml-auto"}>
      <NavItem label="Home" href={`${editMode ? "" : "/"}`} />
      <NavItem label="Pricing" href={editMode ? "" : "/pricing"} />
      <NavItem label="About" href={editMode ? "" : "/about"} />
    </nav>
  </header>
);

export { Header };
