import { NavLink } from "react-router";

const Navbar = () => {
  const list = (
    <>
      <li>
        <NavLink
          to="/"
          className="hover:text-2xl transition-transform duration-200 "
          end
        >
          Home
        </NavLink>
      </li>
      {/* <li>
        <NavLink to="/about" className="hover:underline" end>
          About
        </NavLink>
      </li> */}
      <li>
        <NavLink
          to="/education"
          className="hover:text-2xl transition-transform duration-200  "
          end
        >
          Education
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/skill"
          className="hover:text-2xl transition-transform duration-200 "
          end
        >
          Skills
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/projects"
          className="hover:text-2xl transition-transform duration-200  "
          end
        >
          Project
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/exp"
          className="hover:text-2xl transition-transform duration-200  "
          end
        >
          Experience
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/achievement"
          className="hover:text-2xl transition-transform duration-200  "
          end
        >
          Achievements
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar ">
      <div className="navbar-start my-5">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-xl"
          >
            {list}
          </ul>
        </div>
        <a className="btn btn-ghost text-4xl" href="/">
          Sazzad
        </a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl">{list}</ul>
      </div>
    </div>
  );
};

export default Navbar;
