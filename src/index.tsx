import React from "react";
import { render } from "react-dom";
import { Provider } from 'react-redux';
import App from "./App";
import VideoPage from "./pages/Video";
import Login from './pages/Login';
import Welcome from "./pages/Welcome";
import Sidebar from "./components/mainview/MainView";
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

axios.defaults.baseURL = "/api";

const Index = () => (

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

				</Route>
				<Route path="*" element={"Not Found"}></Route>
			</Routes>
		</CustomRouter>
	</Provider>
);

render(<Index />, document.getElementById('root'));