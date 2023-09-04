import React, { PropsWithChildren } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Providers from "./Providers";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Providers>
        <Navbar />
        {children}
        <Footer />
      </Providers>
    </>
  );
};
export default Layout;
