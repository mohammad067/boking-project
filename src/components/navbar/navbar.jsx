import { NavLink } from "react-router-dom";

 function Navbar() {
  const linkClass = ({ isActive }) =>
    `rounded-full transition whitespace-nowrap
     px-1 py-2 text-[11px]
     sm:px-5 sm:py-2 sm:text-sm
     ${isActive
      ? "bg-zinc-200 text-black"
      : "text-zinc-600 hover:bg-zinc-100"
    }`;

  return (
    <header className="w-full bg-white shadow-sm">
      <div className="px-4 md:px-8 py-4 flex flex-col items-center gap-3 md:flex-row md:justify-between">
        <h1 className="font-semibold text-zinc-800 text-lg text-center">
          Boking
        </h1>

        <nav className="inline-flex items-center justify-center rounded-full bg-zinc-100 p-1 gap-0.5 sm:gap-1">
          <NavLink to="/home" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/explore" className={linkClass}>
            Explore
          </NavLink>
          <NavLink to="/popular" className={linkClass}>
            Popular
          </NavLink>
          <NavLink to="/articles" className={linkClass}>
            Articles
          </NavLink>
        </nav>

        <button className="px-5 py-2 border rounded-full text-sm font-semibold text-zinc-700 hover:bg-zinc-100 active:bg-zinc-200 transition">
          Login
        </button>
      </div>
    </header>
  );
}
export default Navbar;