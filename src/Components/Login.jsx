import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

import { FaEyeSlash, FaEye } from "react-icons/fa";

const Login = () => {
  const { userLogin, setUser } = useContext(AuthContext);
  const [err, setErr] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

  
    if (!email || !password) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill in both email and password fields.",
      });
      return;
    }

  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Email",
        text: "Please enter a valid email address.",
      });
      return;
    }

    setErr("");
    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        if (user) {
          setUser(user);
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: `Congrats..! ${user.displayName}`,
            showConfirmButton: false,
            timer: 1500,
          });
          navigate(location?.state ? location.state : "/");
          form.reset();
        }
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErr(errorMessage);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${errorMessage}`,
        });
      });
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div
      className="w-full min-h-screen flex justify-center items-center bg-cover bg-center"
      style={{
        backgroundImage: "url('https://i.ibb.co/6R51DRP/marldive-water-2.jpg')",
      }}
    >
      <div
        className="card relative z-10 py-10 max-w-lg w-full shadow-2xl p-10"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          backdropFilter: "blur(10px)",
        }}
      >
        <h2 className="font-bold text-center text-purple-700 text-3xl mb-4">
          Login to your Account
        </h2>
        <form onSubmit={handleLogin}>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text text-purple-700 text-lg font-semibold">
                Email
              </span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-control mb-4 relative">
            <label className="label">
              <span className="label-text text-purple-700 text-lg font-semibold">
                Password
              </span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="password"
              className="input input-bordered"
              name="password"
              required
            />
            <button
              type="button"
              onClick={handleShowPassword}
              className="absolute right-4 top-16 text-black"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <div className="form-control mb-4">
            <button className="btn btn-primary">Login</button>
          </div>
          <p className="text-center text-black font-semibold">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-purple-700 underline">
              Sign Up
            </Link>
          </p>
          {err && <p className="text-red-700 mt-2">{err}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
