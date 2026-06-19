import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getLoggedUser } from "../apiCalls/user";
import toast from "react-hot-toast";

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
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
          setUser(response.data);
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
  }, [navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return user ? (
    <>
      <p>{user.firstName}</p>
      {children}
    </>
  ) : null;
};

export default PrivateRoute;
