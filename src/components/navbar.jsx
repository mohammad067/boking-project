import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    `px-5 py-2 text-sm rounded-full transition whitespace-nowrap ${
      isActive
        ? "bg-zinc-200 text-black"
        : "text-zinc-600 hover:bg-zinc-100"
    }`;

  return (
    <div className="w-full grid  gap-4  ">
      <div className=" grid-cols-12 gap-4 bg-white shadow-sm  px-8 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1 className="font-semibold text-zinc-800 text-lg  col-span-12 sm:col-span-6 md:col-span-3">
          Boking
        </h1>

        {/* Center Menu */}
        <div className="flex bg-zinc-100 rounded-full p-1 gap-1 col-span-12 sm:col-span-6 md:col-span-3">

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

        </div>

        {/* Login Button */}
        <button className="px-5 py-2 border rounded-full text-sm text-zinc-700 hover:bg-zinc-100 ">
          Login
        </button>

      </div>
    </div>
  );
}