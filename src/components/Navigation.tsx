import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { links, sections } from "../data/portfolio";
export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        }),
      { rootMargin: "-20% 0px -55% 0px" },
    );
    document
      .querySelectorAll("section[id]")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  return (
    <header className="header">
      <nav className="nav wrap" aria-label="Main navigation">
        <a className="logo" href="#top" aria-label="Atul Baliyan home">
          a<span>b.</span>
        </a>
        <div className="desktop-nav">
          {sections.map((s) => (
            <a
              key={s}
              href={`#${s.toLowerCase()}`}
              aria-current={active === s.toLowerCase() ? "location" : undefined}
            >
              {s}
            </a>
          ))}
        </div>
        <a
          className="nav-resume"
          href={links.resume}
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume <ArrowUpRight size={15} />
        </a>
        <button
          className="menu-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
        {open && (
          <div id="mobile-navigation" className="mobile-nav">
            {sections.map((s) => (
              <a
                key={s}
                href={`#${s.toLowerCase()}`}
                onClick={() => setOpen(false)}
              >
                {s}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
