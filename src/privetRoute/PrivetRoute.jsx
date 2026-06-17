import { useEffect } from "react";
import { useNavigate } from "react-router";

const PrivetRoute = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, [navigate]);

  return localStorage.getItem("token") ? children : null;
};

export default PrivetRoute;
