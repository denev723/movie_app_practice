import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/common/Layout";
import MoviePage from "./pages/MoviePage";
import TvPage from "./pages/TvPage";
import GlobalStyle from "./styles/GlobalStyle";
import { HelmetProvider } from "react-helmet-async";
import SearchPage from "./pages/SearchPage";
import DetailPage from "./pages/DetailPage";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <HelmetProvider>
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
        </HelmetProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
