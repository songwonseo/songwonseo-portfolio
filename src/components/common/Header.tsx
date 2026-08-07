import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { profile } from "../../data/profile";

const nav = [
  ["about", "ABOUT"],
  ["skills", "SKILLS"],
  ["experience", "EXPERIENCE"],
  ["projects", "PROJECTS"],
  ["contact", "CONTACT"],
];
export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    if (location.pathname !== "/") return;
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        }),
      { rootMargin: "-35% 0px -55%" },
    );
    nav.forEach(([id]) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [location.pathname]);
  const go = (id: string) => {
    setOpen(false);
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
      setTimeout(() => document.getElementById(id)?.scrollIntoView(), 80);
    } else document.getElementById(id)?.scrollIntoView();
  };
  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="header-inner">
        <Link className="brand" to="/" aria-label="홈으로">
          SWS<span>.</span>
        </Link>
        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="메뉴 열기"
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav className={open ? "is-open" : ""} aria-label="주 메뉴">
          {nav.map(([id, label]) => (
            <button
              key={id}
              className={active === id ? "active" : ""}
              onClick={() => go(id)}
            >
              {label}
            </button>
          ))}
          <a href={profile.resume} target="_blank" rel="noreferrer">
            RESUME
          </a>
          <a href={profile.portfolioPdf} target="_blank" rel="noreferrer">
            PORTFOLIO PDF
          </a>
        </nav>
      </div>
    </header>
  );
}
