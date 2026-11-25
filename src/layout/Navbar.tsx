import Logo from "../assets/Logo.png";
import Hamburger from "../components/Hambuger";

// Én felles liste brukes både av desktop-navigasjonen og hamburger-menyen.
const navlinks = [
  { name: "Forside", href: "/" },
  { name: "Boliger til salgs", href: "/boliger-til-salgs" },
  { name: "Selge bolig ", href: "/selge-bolig" },
  { name: "Om oss", href: "/om-oss" },
  { name: "Kontakt", href: "kontakt" },
];

function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-amber-950/80">
      <nav className="container mx-auto px-6 flex items-center justify-between">
        {/* Nettstedets logo og navn. */}
        <div className="flex items-center">
          <img src={Logo} className="size-22" />
          <span>
            <a className="text-3xl font-logo text-amber-200">BOLIGSALG</a>
          </span>
        </div>

        {/* Vanlige navigasjonslenker vises fra lg-størrelse og oppover. */}
        <div className="hidden lg:flex items-center gap-1">
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
        {/* Hamburger-menyen vises på mindre skjermer. */}
        <Hamburger links={navlinks} />
      </nav>
    </header>
  );
}

export default Navbar;
