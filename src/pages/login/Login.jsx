import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { signinUser } from "../../apiCalls/auth";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  // 1. Initialize state for email and password
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  // 2. Track what the user types
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // 3. Handle submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await signinUser(credentials);

      if (response?.success) {
        toast.success(response.message || "Signed in successfully!");
        localStorage.setItem("token", response.token);
        navigate("/");
      } else {
        toast.error(response?.message || "Signin failed!");
      }
    } catch (err) {
      // ব্যাকএন্ড থেকে আসা আসল মেসেজটি আগে চেক করবে
      const errorMsg =
        err.response?.data?.message || err.message || "Something went wrong!";
      toast.error(errorMsg);
    }
  };

  return (
    <div className="container">
      <div className="container-back-img"></div>
      <div className="container-back-color"></div>
      <div className="card">
        <div className="card_title">
          <h1>Login Here</h1>
        </div>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={credentials.email}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={credentials.password}
              onChange={handleChange}
            />
            <button type="submit">Login</button>
          </form>
        </div>
        <div className="card_terms">
          <span>
            Don't have an account yet?
            <Link to="/register">Signup Here</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
