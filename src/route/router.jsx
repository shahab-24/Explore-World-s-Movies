import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../HomeLayout/HomeLayout";
import Login from "../Components/Login";
import Signup from "../Components/Signup";



const router = createBrowserRouter([
	{
		path:"/",
		element: <HomeLayout></HomeLayout>
	},
	{
		path: "/login",
		element: <Login></Login>
	},
	{
		path: '/signup',
		element: <Signup></Signup>
	}
  


]);

export default router;
