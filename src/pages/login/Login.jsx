import { useState } from "react";

const Login = () => {
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
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Credentials Submitted:", credentials);
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
            <a href="#signup">Signup Here</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
