import React, { Suspense, useState } from "react";
// @ts-ignore
import { createRoot } from 'react-dom/client';
import { render } from "react-dom";
import { Provider } from 'react-redux';



// Root style
import './index.scss';
//Redux
import { store } from './state';
//react-router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CustomRouter } from "./utils/CustomRouter";
import customHistory from "./utils/history";
import routes from "./utils/routes";



import App from "./App";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
//import VideoPage from "./pages/Video";
const VideoPage = React.lazy(() => import("./pages/Video"));
const Login = React.lazy(() => import("./pages/Login"));
const Welcome = React.lazy(() => import("./pages/Welcome"));
const Sidebar = React.lazy(() => import("./components/mainview/MainView"));
const AddStream = React.lazy(() => import("./pages/AddStream"));
import Loading from "./components/loading/index";


const Index = () => {
	const [user, setUser] = useState(null);

	return (
	<Suspense fallback={<Loading />}>
		<Provider store={store}>
			<CustomRouter history={customHistory}>
				<Routes>
					<Route path="/" element={<PublicRoute />} >
						<Route path={routes.login} index={true} element={<Login />} />
						<Route path={"/load"} element={<Loading />} />
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
	</Suspense>
	)
};


const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(<Index />,);
