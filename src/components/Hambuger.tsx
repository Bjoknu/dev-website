import { useState } from "react";

interface NavLink {
  name: string;
  href: string;
}

interface HamburgerProps {
  links: NavLink[];
}

function Hamburger({ links }: HamburgerProps) {
  // Holder styr på om mobilmenyen er synlig.
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      {/* Knappen bytter mellom menyikonet og lukk-ikonet. */}
      <button
        type="button"
        aria-label={isOpen ? "Lukk meny" : "Åpne meny"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen((open) => !open)}
        className="flex size-11 items-center justify-center rounded-md text-amber-200 hover:bg-amber-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200"
      >
        <svg
          aria-hidden="true"
          className="size-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18 18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Viser navigasjonslenkene bare mens mobilmenyen er åpen. */}
      {isOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobilnavigasjon"
          className="absolute left-0 top-full w-full bg-amber-950/95 px-6 pb-4 shadow-lg"
        >
          <div className="container mx-auto flex flex-col">
            {/* Menyen lukkes når brukeren velger en lenke. */}
            {links.map((link) => (
              <a
                href={link.href}
                key={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-md px-4 py-3 text-lg text-amber-200 hover:bg-amber-900 hover:text-amber-300"
              >
                {link.name}
              </a>
            ))}
          </div>
        </nav>
      )}
    </div>
  );
}

export default Hamburger;
