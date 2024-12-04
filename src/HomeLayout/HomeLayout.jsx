import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";


const HomeLayout = () => {
	return (
		<div>
			<div className="mb-10 border-b-1 py-6  border-opacity-85 shadow-xl">
			<Header></Header>
			</div>
			<div className="min-h-[80vh]">
				<Outlet></Outlet>
			</div>
			<Footer></Footer>
		</div>
	);
};

export default HomeLayout;