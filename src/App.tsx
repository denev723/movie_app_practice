import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/common/Layout";
import MoviePage from "./pages/MoviePage";
import TvPage from "./pages/TvPage";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="/movies" replace />} />
            <Route path="movies" element={<MoviePage />} />
            <Route path="tv" element={<TvPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
