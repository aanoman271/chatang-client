import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import Loader from "../components/Loader";
import { Outlet } from "react-router";
import Header from "../components/Header";

const RootLayout = () => {
  const { isLoading } = useSelector((state) => state.loader);
  return (
    <div>
      {isLoading && <Loader></Loader>}
      <Toaster position="top-center" reverseOrder={false} />
      <Header />
      <Outlet></Outlet>
    </div>
  );
};

export default RootLayout;
