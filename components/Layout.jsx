import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <div className="relative h-screen">
        <div className="fixed w-full top-0 z-10">
          {" "}
          <Navbar />
        </div>
        <main className="z-0 mt-32 relative">{children}</main>
        <div className="bottom-0">
          {" "}
          <Footer />
        </div>
      </div>
    </>
  );
}
