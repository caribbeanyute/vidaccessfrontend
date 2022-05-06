import React, { Suspense, useState } from "react";
// @ts-ignore
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';



// Root style
import './index.scss';
//Redux
import { store } from './state';
//react-router
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./utils/routes";

import customHistory from "./utils/history";



import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import VideoPage from "./pages/Video";
//const VideoPage = React.lazy(() => import("./pages/Video"));
const Login = React.lazy(() => import("./pages/Login"));
import Welcome from "./pages/Welcome";
const Sidebar = React.lazy(() => import("./components/mainview/MainView"));
import AddStream from "./pages/AddStream";
import Loading from "./components/loading/index";
import { CustomRouter } from "./utils/CustomRouter";


const Index = () => {
	// const [user, setUser] = useState(null);
// TODO reimplement Suspense loading
	return (

		<Provider store={store}>
			<CustomRouter history={customHistory}>
			{/*<BrowserRouter>*/}
				<Routes>
					<Route path="/login" element={<PublicRoute />} >
						<Route index={true} element={<Login />} />
						<Route path={"/login/load"} element={<Loading />} />
					</Route>


					<Route path="/" element={<ProtectedRoute />} >
						<Route path="/" element={<Sidebar />} >
							<Route index={true} element={<Welcome />} />
							<Route path={routes.video} element={<VideoPage />}>

							</Route>
							<Route path={routes.addStream} element={<AddStream />} />

						</Route>
					</Route>
					<Route path="*" element={"Not Found"}></Route>
				</Routes>
			</CustomRouter>
		</Provider>



	)
};


const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(<Index />,);
