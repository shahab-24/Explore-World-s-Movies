import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import Swal from "sweetalert2"; 
import "daisyui/dist/full.css"; 

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(loading);


  useEffect(() => {
    if (loading) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [loading]);


  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen">
  
        <div className="w-64 h-64 mb-4 bg-gray-200 animate-pulse rounded-lg"></div>


        <div className="w-full max-w-xs">
          <div className="mb-4">
            <div className="h-12 bg-gray-200 animate-pulse rounded-md"></div>
          </div>
          <div className="mb-4">
            <div className="h-12 bg-gray-200 animate-pulse rounded-md"></div>
          </div>
          <div className="mb-4">
            <div className="h-12 bg-gray-200 animate-pulse rounded-md"></div>
          </div>
        </div>
      </div>
    );
  }


  if (!user) {
    Swal.fire({
      title: "Unauthorized",
      text: "Please log in to access this page.",
      icon: "warning",
      confirmButtonText: "OK",
    });

    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;
