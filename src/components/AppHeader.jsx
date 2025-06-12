import { NavLink } from "react-router-dom";

const AppHeader = () => {
    const navLinks = [
        {
            title: "Homepage",
            url: "/",
        },
        {
            title: "AboutUS",
            url: "/AboutUs",
        },
        {
            title: "PostsList",
            url: "/PostsList",
        },
        {
            title: "CreatePost",
            url: "/CreatePost"
        }
    ];

    return (
    <header className="bg-dark py-3 mb-4">
      <nav className="container d-flex justify-content-center">
        <ul className="nav">
          {navLinks.map((link, index) => (
            <li className="nav-item mx-2" key={index}>
              <NavLink
                to={link.url}
                className={({ isActive }) =>
                  isActive
                    ? "nav-link active fw-bold text-warning"
                    : "nav-link text-light"
                }
              >
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default AppHeader;