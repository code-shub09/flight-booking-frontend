import { Outlet, useLocation } from "react-router-dom";

import Footer from "../components/Footer";
import Navbar1 from "../components/Navbar1";


export default function MainLayout() {
  const location = useLocation();

  // Show progress bar only from Stage 3 onwards
  const showProgress =
    location.pathname.startsWith("/fare") ||
    location.pathname.startsWith("/passengers") ||
    location.pathname.startsWith("/extras") ||
    location.pathname.startsWith("/payment") ||
    location.pathname.startsWith("/confirmation");

  return (
    <div className="min-h-screen flex flex-col">
      {/* {showProgress && <ProgressBar />} */}
      <Navbar1></Navbar1>
      <main className="flex-1 pt-2 ">
        <Outlet />
      </main>
      {/* <Footer /> */}

      <Footer></Footer>
    </div>
  );
}
