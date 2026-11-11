import Logo from "../assets/Logo.png";

/* Navigation links */
const navlinks = [
  { name: "Forside", href: "/" },
  { name: "Boliger til salgs", href: "/boliger-til-salgs" },
  { name: "Selge bolig ", href: "/selge-bolig" },
  { name: "Om oss", href: "/om-oss" },
  { name: "Kontakt", href: "kontakt" },
];

function navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50  bg-amber-950">
      <nav className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <img src={Logo} className="size-20" />
        <div className="md-hidden md:flex items-center gap-1">
          <div className="rounded-full px-2 py-1 flex items-center gap-1">
            {navlinks.map((link) => (
              <a
                href={link.href}
                key={link.href}
                className="px-4 py-2 text-sm hover:text-amber-300 rounded-full text-amber-200"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default navbar;
