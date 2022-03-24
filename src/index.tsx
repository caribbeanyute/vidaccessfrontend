import React, { Suspense } from "react";
import { render } from "react-dom";
import { Provider } from 'react-redux';
import App from "./App";
//import VideoPage from "./pages/Video";
const VideoPage = React.lazy(() => import("./pages/Video"));
//import Login from './pages/Login';
const Login = React.lazy(() => import("./pages/Login"));
//import Welcome from "./pages/Welcome";
const Welcome = React.lazy(() => import("./pages/Welcome"));
//import Sidebar from "./components/mainview/MainView";
const Sidebar = React.lazy(() => import("./components/mainview/MainView"));
import axios from "axios";


// Root style
import './index.scss';
//Redux
import { store } from './state';
//react-router
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CustomRouter } from "./utils/CustomRouter";
import customHistory from "./utils/history";
import routes from "./utils/routes";
//import AddStream from "./pages/AddStream";
const AddStream = React.lazy(() => import("./pages/AddStream"));

axios.defaults.baseURL = "/api";

const Index = () => (
<Suspense fallback={<div>Loading...</div>}>
	<Provider store={store}>
		<CustomRouter history={customHistory}>
			<Routes>
				<Route path={routes.login} element={<Login />} />
				{//<Route path="/app" element={<App/>} />
				}
				<Route path="/" element={<Sidebar />} >
					<Route index={true} element={<Welcome />} />
					<Route path={routes.video} element={<VideoPage />}>
					

					</Route>
					<Route path={routes.addStream} element={<AddStream />} />

				</Route>
				<Route path="*" element={"Not Found"}></Route>
			</Routes>
		</CustomRouter>
	</Provider>
</Suspense>
);

render(<Index />, document.getElementById('root'));