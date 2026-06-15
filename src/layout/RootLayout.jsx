import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div>
      <h1>chatang</h1>
      <Outlet></Outlet>
    </div>
  );
};

export default RootLayout;
