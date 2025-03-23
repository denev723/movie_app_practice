import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/common/Layout";
import MoviePage from "./pages/MoviePage";
import TvPage from "./pages/TvPage";
import GlobalStyle from "./styles/GlobalStyle";
import { HelmetProvider } from "react-helmet-async";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <HelmetProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="/movies" replace />} />
            <Route path="movies" element={<MoviePage />} />
            <Route path="tv" element={<TvPage />} />
            <Route path="search" element={<SearchPage />} />
          </Route>
        </Routes>
      </HelmetProvider>
    </BrowserRouter>
  );
}

export default App;
