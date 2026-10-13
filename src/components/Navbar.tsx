import { useEffect, useRef, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const links = [
  { name: "About", id: "home" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("About");
  const [scrolled, setScrolled] = useState(false);

  const scrollTarget = useRef<string | null>(null);
  const lockTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 8;

      // Prevent active link from changing during smooth scrolling
      if (scrollTarget.current) {
        const targetId = scrollTarget.current;
        const target = document.getElementById(targetId);

        const arrived =
          (targetId === "home" && window.scrollY < 30) ||
          (targetId === "contact" && atBottom) ||
          (target !== null &&
            Math.abs(target.getBoundingClientRect().top - 80) < 30);

        if (!arrived) return;

        scrollTarget.current = null;

        if (lockTimer.current) {
          clearTimeout(lockTimer.current);
          lockTimer.current = null;
        }
      }

      let currentSection = "About";

      for (const link of links) {
        const section = document.getElementById(link.id);

        if (section && section.getBoundingClientRect().top <= 150) {
          currentSection = link.name;
        }
      }

      if (atBottom) {
        currentSection = "Contact";
      }

      setActive(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    window.addEventListener("resize", handleScroll);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);

      if (lockTimer.current) {
        clearTimeout(lockTimer.current);
      }
    };
  }, []);

  const handleNavClick = (name: string, id: string) => {
    setActive(name);
    setOpen(false);

    scrollTarget.current = id;

    if (lockTimer.current) {
      clearTimeout(lockTimer.current);
    }

    lockTimer.current = setTimeout(() => {
      scrollTarget.current = null;
      lockTimer.current = null;
    }, 1600);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled || open
          ? "border-b border-white/10 bg-slate-950/90 shadow-lg shadow-black/10 backdrop-blur-xl"
          : "bg-slate-950/40 backdrop-blur-md"
      }`}
    >
      <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        {/* LOGO - LEFT */}
        <a
          href="#home"
          onClick={() => handleNavClick("About", "home")}
          className="group flex shrink-0 items-center"
          aria-label="Go to homepage"
        >
          <span className="text-3xl font-black tracking-tight text-white transition-colors duration-300 group-hover:text-cyan-400">
            EA<span className="text-cyan-400">.</span>
          </span>
        </a>

        {/* DESKTOP NAVIGATION - RIGHT */}
        <ul className="ml-auto hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1.5 md:flex">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => handleNavClick(link.name, link.id)}
                aria-current={active === link.name ? "location" : undefined}
                className={`block rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  active === link.name
                    ? "bg-cyan-400/15 text-cyan-300 shadow-sm"
                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* MOBILE MENU BUTTON - RIGHT */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          className="ml-auto flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-2xl text-white transition-colors hover:bg-white/10 md:hidden"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {/* MOBILE NAVIGATION */}
      {open && (
        <div
          id="mobile-navigation"
          className="absolute inset-x-0 top-full border-b border-white/10 bg-slate-950/95 px-5 pb-5 shadow-2xl backdrop-blur-xl md:hidden"
        >
          <div className="flex flex-col gap-1 border-t border-white/10 pt-4">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => handleNavClick(link.name, link.id)}
                aria-current={active === link.name ? "location" : undefined}
                className={`rounded-xl px-4 py-3.5 text-sm font-medium transition-all ${
                  active === link.name
                    ? "bg-cyan-400/10 text-cyan-300"
                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
