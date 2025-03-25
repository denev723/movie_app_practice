import { Outlet } from "react-router";
import Header from "./Header";
import styled from "styled-components";
import Footer from "./Footer";

// styles for Layout
const Wrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Wrap>
          <Outlet />
        </Wrap>
      </main>
      <Footer />
    </>
  );
}
