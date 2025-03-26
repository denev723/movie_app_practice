import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import { Main, Wrap } from "./Layout.styled";

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
