import { useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { hideLoader, showLoader } from "../../redux/loaderSlice";
import { getAllUsers } from "../../apiCalls/user";
import { setAllUsers } from "../../redux/userSlice";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        dispatch(showLoader());
        const response = await getAllUsers();

        if (response?.success) {
          dispatch(setAllUsers(response.data || response));
        } else {
          toast.error(response?.message || "Failed to fetch users");
        }
      } catch (err) {
        const errorMsg =
          err.response?.data?.message || err.message || "Something went wrong!";
        toast.error(errorMsg);
      } finally {
        dispatch(hideLoader());
      }
    };

    fetchUsers();
  }, [dispatch]);

  return (
    <div className="home-page">
      <div className="main-content">
        <Sidebar />
      </div>
    </div>
  );
};

export default Home;
