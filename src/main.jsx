import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import router from "./route/router.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <div className="bg-blue-50">
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  </StrictMode>
);

// className='inset-0 bg-gradient-to-r from-indigo-900 via-purple-900 to-black'
