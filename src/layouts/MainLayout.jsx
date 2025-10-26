import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div>
      <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 overflow-x-hidden">
        <Navbar />
        <div className="min-h-[60vh]">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
