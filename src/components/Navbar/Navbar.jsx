import { NavLink } from "react-router-dom";

export default function Navbar() {
  const navItems = [
    { name: "About", path: "/" },
    { name: "Resume", path: "/resume" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
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
