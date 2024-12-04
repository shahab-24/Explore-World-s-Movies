import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";
// import AOS from "aos";
// import "aos/dist/aos.css"; 

const Signup = () => {
  const { createUser, setUser, manageUpdateProfile,handleGoogleLogin } = useContext(AuthContext);
  const [err, setErr] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  
//   useEffect(() => {
//     AOS.init({ duration: 2000, offset: 50 }); 
//   }, []);

  const handleSignup = (e) => {
    e.preventDefault(); 

    const form = e.target; 
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    console.log(name, email, photo, password);

    
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    if (!passwordRegex.test(password)) {
      setErr(
        "Password must be at least 6 characters, include uppercase, lowercase, number, and a special character."
      );
      return; 
    }

    
    setErr("");

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        manageUpdateProfile(name, photo);

        setUser(user);

        Swal.fire({
          position: "top-center",
          icon: "success",
          title: `Congrats..! ${user.name}`,
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error.message);
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
      className="w-11/12 mt-40 pt-20 mx-auto flex justify-center items-center h-[780px]"
      style={{
        backgroundImage: "url('https://i.ibb.co.com/6R51DRP/marldive-water-2.jpg')",
        backgroundSize: "cover",
      }}
    >
      <div
        className="card opacity-80 py-4 h-auto transparent max-w-lg w-full shrink-0 shadow-2xl p-6 mb-6"
        data-aos="fade-down"
        data-aos-easing="ease-out-cubic" 
        data-aos-anchor-placement="top-center" 
      >
        <h2 className="font-bold text-center text-purple-700 text-3xl">
          Sign Up to your Account
        </h2>
        <form onSubmit={handleSignup} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-purple-700 text-xl font-semibold">
                Name
              </span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-purple-700 text-xl font-semibold">
                PhotoURL
              </span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="Photo URL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-purple-700 text-xl font-semibold">
                Email
              </span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control relative">
            <label className="label">
              <span className="label-text text-purple-700 text-xl font-semibold">
                Password
              </span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <button
              type="button"
              onClick={handleShowPassword}
              className="absolute flex items-center justify-center btn btn-sm btn-outline hover:bg-none bg-transparent right-4 top-14"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>

          
          </div>

          <div className="form-control mt-4">
            <button
              type="submit"
              className="btn btn-primary text-purple-700 text-xl font-semibold"
            >
              Sign Up
            </button>
          </div>

          <p className="text-black mb-4">
            Already Have an Account? Please{" "}
            <Link to="/login">
              <span className="text-purple-700 text-xl font-semibold">
                Login
              </span>
            </Link>
          </p>
          {err && (
            <p className="text-red-600 text-sm mt-2 absolute -bottom-4">
              {err}
            </p>
          )}
        </form>
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
      </div>
      
      
    </div>
  );
};

export default Signup;