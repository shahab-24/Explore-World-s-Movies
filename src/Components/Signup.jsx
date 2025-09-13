import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Signup = () => {
  const { createUser, setUser, manageUpdateProfile, handleGoogleLogin } =
    useContext(AuthContext);
  const [err, setErr] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    if (!name || !email || !photo || !password) {
      Swal.fire({
        icon: "warning",
        title: "Validation Failed",
        text: "All fields are required.",
      });
      return;
    }

    if (!passwordRegex.test(password)) {
      Swal.fire({
        icon: "warning",
        title: "Invalid Password",
        text: "Password must be at least 6 characters, include uppercase, lowercase, number, and a special character.",
      });
      return;
    }

    setErr("");

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        fetch("https://explore-world-s-movies-server-production.up.railway.app/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then(() => manageUpdateProfile(name, photo));

        setUser(user);
        navigate("/");

        Swal.fire({
          position: "top-center",
          icon: "success",
          title: `Welcome, ${user.name}`,
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Signup Failed",
          text: error.message,
        });
        setErr(error.message);
      });
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center py-10"
      style={{
        backgroundImage: "url('https://i.ibb.co/6R51DRP/marldive-water-2.jpg')",
      }}
    >
      <div
        className="bg-base text-gray-600 bg-opacity-90 shadow-lg p-8 rounded-lg max-w-lg w-full z-20"
        style={{ backdropFilter: "blur(10px)" }}
      >
        <h2 className="font-bold text-center text-purple-700 text-3xl mb-4">
          Sign Up to Your Account
        </h2>
        <form onSubmit={handleSignup}>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text font-semibold">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text font-semibold">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text font-semibold">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mb-4 relative">
            <label className="label">
              <span className="label-text font-semibold">Password</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Your Password"
              className="input input-bordered"
              required
            />
            <button
              type="button"
              onClick={handleShowPassword}
              className="absolute right-4 top-12 text-gray-600"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <button
            type="submit"
            className="btn btn-primary w-full mt-4 text-white font-semibold"
          >
            Register
          </button>
          {err && <p className="text-red-600 mt-2">{err}</p>}
        </form>
        <p className="mt-4 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-purple-700 font-semibold">
            Login
          </Link>
        </p>
        <div className="mt-6 flex flex-col items-center gap-4">
          <button
            onClick={handleGoogleLogin}
            className="btn btn-outline w-full flex items-center gap-2"
          >
            Login with Google
            <img
              src="https://img.icons8.com/color/48/google-logo.png"
              alt="Google"
              className="w-6"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
