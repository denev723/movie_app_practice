import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import MoviePage from "./pages/MoviePage";
import TvPage from "./pages/TvPage";
import GlobalStyle from "./styles/GlobalStyle";
import { HelmetProvider } from "react-helmet-async";
import SearchPage from "./pages/SearchPage";
import DetailPage from "./pages/DetailPage";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./styles/theme";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Navigate to="/movies" replace />} />
              <Route path="movies" element={<MoviePage />} />
              <Route path="movie/:id" element={<DetailPage mediaType="movie" />} />
              <Route path="tv" element={<TvPage />} />
              <Route path="tv/:id" element={<DetailPage mediaType="tv" />} />
              <Route path="search" element={<SearchPage />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
