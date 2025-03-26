import { Outlet } from "react-router";
import Header from "./Header";
import styled from "styled-components";
import Footer from "./Footer";

// styles for Layout
const Wrap = styled.div`
  height: 100%;
`;

const Main = styled.main`
  height: 100%;
`;

export default function Layout() {
  return (
    <>
      <Header />
      <Main>
        <Wrap>
          <Outlet />
        </Wrap>
      </Main>
      <Footer />
    </>
  );
}
