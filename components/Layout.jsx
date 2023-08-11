import Navbar from "./Navbar";
import Footer from "./Footer";

import Breadcrumb from "../components/Breadcrumb";

export default function Layout({ children, showMessage }) {
  return (
    <>
      <div
        className={`bg-emerald-400 text-white fixed right-0 top-32 w-auto p-4 ease-in-out duration-300 rounded-md z-50  
        ${
          showMessage !== true
            ? "translate-x-48 opacity-0"
            : "opacity-100 -translate-x-9"
        }`}
      >
        Success add items to cart !
      </div>

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
