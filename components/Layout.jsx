import Navbar from "./Navbar";
import Footer from "./Footer";

import Breadcrumb from "../components/Breadcrumb";

export default function Layout({ children }) {
  return (
    <>
      <div className="relative h-full min-h-full contianer">
        <div className="fixed w-full top-0 z-10">
          {" "}
          <Navbar />
        </div>

        <main className="z-0 mt-32">
          <div className="py-auto w-screen flex justify-center">
            <Breadcrumb />
          </div>
          {children}
        </main>
        <div className="bottom-0 mt-32">
          {" "}
          <Footer />
        </div>
      </div>
    </>
  );
}
