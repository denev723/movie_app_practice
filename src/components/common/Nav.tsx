import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <div>
        <NavLink to="/movies">Movies</NavLink>
        <NavLink to="/tv">TV Shows</NavLink>
      </div>
      <form>
        <input type="text" placeholder="검색어를 입력해주세요..." />
        <button type="submit">검색</button>
      </form>
    </div>
  );
}
