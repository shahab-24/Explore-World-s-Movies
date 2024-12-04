import { useContext, useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
// import AOS from "aos";
// import "aos/dist/aos.css"; 
import { FaEyeSlash, FaEye } from "react-icons/fa";

const Login = () => {
  const { userLogin, setUser, handleGoogleLogin } = useContext(AuthContext);
  const [err, setErr] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  
//   useEffect(() => {
//     AOS.init({ duration: 2000, offset: 50 }); 
//   }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

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
        } else {
          return;
        }
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErr(errorMessage);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${errorMessage}`,
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      });
  };


  
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div
      className="w-11/12 mx-auto h-[670px] mt-4 flex justify-center items-center py-10"
      style={{
        backgroundImage: "url('https://i.ibb.co.com/6R51DRP/marldive-water-2.jpg')",
        backgroundSize: "cover",
      }}
    >
      <div
        className="card opacity-8 py-10 h-[600px] transparent max-w-lg w-full shrink-0 shadow-2xl p-10 my-4"
        data-aos="zoom-in" 
      >
        <h2 className="font-bold text-center text-purple-700 text-3xl">
          Login to your Account
        </h2>
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-purple-700 text-xl font-semibold ">
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
          <div className="form-control relative">
            <label className="label">
              <span className="label-text text-purple-700 text-xl font-semibold ">
                Password
              </span>
            </label>
            <input
                          type={showPassword ? "text" : "password"}

              placeholder="password"
              className="input input-bordered text-black"
              name="password"
              required
            />
              
            <button
              type="button"
              onClick={handleShowPassword}
              className="flex items-center justify-center btn btn-sm border-none hover:bg-none bg-transparent absolute right-2 bottom-16 text-white"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
            <label className="label">
             <div className="mt-4 text-center text-black">
          <Link
            to="/forgotPassword"
            state={{ email }} 
            className="text-black hover:underline"
          >
            Forgot Password?
          </Link>
        </div>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
          <p className="text-black font-semibold">
            Don't Have an Account? Please{" "}
            <Link to="/signup">
              <button className="btn btn-primary btn-sm mb-2">
                <span className="text-purple-700 font-semibold">Sign Up</span>
              </button>
              
              <div className="flex justify-center lg:justify-between items-center flex-col lg:flex-row gap-2">
          <div className="flex ">
            <button
              className="btn btn-outline btn-xs flex text-black"
              onClick={handleGoogleLogin}
            >
              Login with GOOGLE
              <img
                className="w-[10%]"
                src="https://img.icons8.com/?size=48&id=17949&format=png"
                alt=""
              />
            </button>
          </div>


          <div className="flex my-2">
            <button className="btn btn-outline btn-xs text-black">
              Login with GITHUB
              <img
                className="w-[10%]"
                src="https://img.icons8.com/?size=50&id=12598&format=png"
                alt=""
              />
            </button>
          </div>
        </div>
            </Link>
          </p>
          {err && <p className="text-red-700 font-semibold">{err}</p>}
        </form>
      
      </div>
    </div>
  );
};

export default Login;
