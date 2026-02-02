import { Link } from "@/i18n/routing";

const MENU_LINKS = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Portfolio", href: "/portfolio" },
  { title: "Blog", href: "/blog" },
  { title: "Elements", href: "/elements" },
  { title: "Features", href: "/features" },
];

const SideMenu: React.FC<ISideMenu> = ({ isOpen, onClick }) => {
  return (
    <nav
      className={`flex content-center transition-all duration-1000 ${
        isOpen
          ? "bg-white w-full opacity-100 ease-in"
          : "bg-transparent w-1/2 opacity-0 ease-out"
      }`}
    >
      <ul className="content-center">
        {MENU_LINKS.map(({ title, href }) => (
          <Link key={title} {...{ href, onClick }}>
            <li className="text-3xl p-4 pl-6 pr-20">{title}</li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default SideMenu;
