import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

/* Navigation items. Add or reorder links here without touching the markup. */
const NAV_LINKS = [
  { to: "/jobs", label: "Jobs" },
  { to: "/login", label: "Login" },
  { to: "/register", label: "Register", variant: "cta" },
];

function getLinkClassName(variant) {
  return ({ isActive }) =>
    [
      "navbar__link",
      variant ? `navbar__link--${variant}` : "",
      isActive ? "navbar__link--active" : "",
    ]
      .filter(Boolean)
      .join(" ");
}

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__inner">
        <Link to="/" className="navbar__brand">
          <span className="navbar__brand-mark" aria-hidden="true">
            JP
          </span>
          <span className="navbar__brand-name">Job Portal</span>
        </Link>

        <nav className="navbar__nav" aria-label="Main navigation">
          <ul className="navbar__links">
            {NAV_LINKS.map(({ to, label, variant }) => (
              <li key={to} className="navbar__item">
                {/* NavLink sets aria-current="page" automatically on the active route */}
                <NavLink to={to} className={getLinkClassName(variant)}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}