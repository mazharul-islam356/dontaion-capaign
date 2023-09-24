import { NavLink } from "react-router-dom";

const LinkRoute = () => {
  return (
    <div>
      <ul className="flex gap-5 text-xl font-bold px-8">
        <li>

        <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-400 underline" : ""
              }
            >
              Home
            </NavLink>

        </li>
        <li>

        <NavLink
              to="/donation"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-400 underline" : ""
              }
            >
              Donation
            </NavLink>

        </li>
        <li>

        <NavLink
              to="/statistics"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-red-400 underline" : ""
              }
            >
              Statistic
            </NavLink>

        </li>
        
      </ul>
    </div>
  );
};

export default LinkRoute;
