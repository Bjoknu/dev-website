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
    <header className="fixed top-0 left-0 w-full z-50 bg-amber-950/80">
      <nav className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src={Logo} className="size-22" />
          <span>
            <a className="text-3xl font-logo text-amber-200">BOLIGSALG</a>
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="md-hidden md:flex items-center gap-1">
          <div className="rounded-full px-2 py-1 flex items-center gap-3">
            {navlinks.map((link) => (
              <a
                href={link.href}
                key={link.href}
                className="px-4 py-2 text-lg hover:text-amber-300 rounded-full  text-amber-200"
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
