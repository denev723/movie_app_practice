import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Nav() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.currentTarget.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimText = query.trim();
    if (!trimText) {
      alert("검색어를 입력해주세요.");
      return;
    }
    if (trimText.length < 2) {
      alert("검색어는 2글자 이상 입력해주세요.");
      return;
    }
    navigate(`/search?query=${encodeURIComponent(trimText)}`);
    setQuery("");
  };

  return (
    <div>
      <div>
        <NavLink to="/movies">Movies</NavLink>
        <NavLink to="/tv">TV Shows</NavLink>
      </div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={query} type="text" placeholder="검색어를 입력해주세요..." />
        <button type="submit">검색</button>
      </form>
    </div>
  );
}
