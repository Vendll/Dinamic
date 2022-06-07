import Head from "next/head";
import Navbar from "./navigation/Navbar";
import Footer from "./navigation/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Exa SM Online Árajánlat Készítő</title>
      </Head>

      <Navbar />

      <div>{children}</div>

      <Footer />
    </>
  );
};

export default Layout;
