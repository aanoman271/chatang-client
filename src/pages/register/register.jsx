import { useState } from "react";
import { Link, useNavigate } from "react-router";
import signupUser from "../../apiCalls/auth";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { hideLoader, showLoader } from "../../redux/loaderSlice";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // 1. Initialize state for the form fields
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  // 2. Handle input changes dynamically
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // 3. Handle form submission and console log the fields
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(showLoader());
      const response = await signupUser(formData);

      if (response?.success) {
        toast.success(response.message);
        navigate("/login");
      } else {
        toast.error(response?.message || "Signup failed!");
      }
    } catch (err) {
      const errorMsg =
        err.response?.data?.message || err.message || "Something went wrong!";
      toast.error(errorMsg);
    } finally {
      dispatch(hideLoader());
    }

    console.log("Form Submitted Data:", formData);
  };

  return (
    <div className="container">
      <div className="container-back-img"></div>
      <div className="container-back-color"></div>
      <div className="card">
        <div className="card_title">
          <h1>Create Account</h1>
        </div>
        <div className="form">
          {/* Add onSubmit handler here */}
          <form onSubmit={handleSubmit}>
            <div className="column">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            <button type="submit">Sign Up</button>
          </form>
        </div>
        <div className="card_terms">
          <span>
            Already have an account?
            <Link to="/login">Login Here</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
