import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import TopBar from "../components/TopBar";
const Login = () => {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    role: "student",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Fake authentication logic
    localStorage.setItem("userRole", credentials.role);

    if (credentials.role === "admin") navigate("/admin");
    else if (credentials.role === "faculty") navigate("/faculty");
    else navigate("/student");
  };

  return (

    <>
    <TopBar />
    <Header />
    <div className="login-page">
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={credentials.email}
          onChange={(e) =>
            setCredentials({ ...credentials, email: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Password"
          value={credentials.password}
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
        />

        <select
          value={credentials.role}
          onChange={(e) =>
            setCredentials({ ...credentials, role: e.target.value })
          }
        >
          <option value="student">Student</option>
          <option value="faculty">Faculty</option>
          <option value="admin">Admin</option>
        </select>

        <button type="submit">Login</button>
      </form>
    </div>
    </>
  );
};

export default Login;