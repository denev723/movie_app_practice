import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <NavLink to="/movies">Movies</NavLink>
      <NavLink to="/tv">TV Shows</NavLink>
    </div>
  );
}
