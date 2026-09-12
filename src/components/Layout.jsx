import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { nav, profile } from "../data.js";
import ParallaxField from "./ParallaxField.jsx";
import CursorTrail from "./CursorTrail.jsx";
import { useReveal } from "../useSceneMotion.js";

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useReveal(location.pathname);

  return (
    <div className="shell">
      <ParallaxField />
      <CursorTrail />
      <header className="topbar">
        <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">AI</span>
          <span className="brand-name">Asad Iftikhar</span>
        </NavLink>

        <button
          className="menu-btn"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>

        <nav className={open ? "nav open" : "nav"}>
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main className="page" key={location.pathname}>
        {children}
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} {profile.name}. Karachi · CMS, fintech, .NET, and microservices.</p>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </footer>
    </div>
  );
}
