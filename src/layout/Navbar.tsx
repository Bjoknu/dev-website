import Logo from "../assets/Logo.png";

/* Navigation links */
const navlinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

function navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black">
      <nav>
        {/* Logo */}
        <img src={Logo} />
      </nav>
    </header>
  );
}

export default navbar;
