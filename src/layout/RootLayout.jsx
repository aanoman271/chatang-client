import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />

      <h1>chatang</h1>
      <Outlet></Outlet>
    </div>
  );
};

export default RootLayout;
