import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getLoggedUser } from "../apiCalls/user";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../redux/userSlice";
import Loader from "../components/Loader";

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);

  console.log("after", user);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/login");
        return;
      }

      try {
        const response = await getLoggedUser();

        if (response.success) {
          dispatch(setUser(response.data));
        } else {
          navigate("/login");
        }
      } catch (err) {
        const errorMsg =
          err.response?.data?.message || err.message || "Something went wrong!";

        toast.error(errorMsg);
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [navigate, dispatch]);
  if (loading) {
    return <Loader></Loader>;
  }

  return user ? (
    <>
      <p>{user.firstName}</p>
      {children}
    </>
  ) : null;
};

export default PrivateRoute;
