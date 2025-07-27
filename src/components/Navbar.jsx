import { NavLink } from "react-router-dom";

import '../styles.css'

export default function Navbar() {
  const navItems = [
    { name: "Sobre mí", path: "/" },
    { name: "Currículum", path: "/curriculum" },
    { name: "Certificaciones", path: "/certificaciones" },
    { name: "Portafolio", path: "/portfolio" },
    { name: "Contacto", path: "/contacto" },
  ];

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {navItems.map((item) => (
          <li className="navbar-item" key={item.name}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `navbar-link ${isActive ? "active" : ""}`
              }
              end
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
