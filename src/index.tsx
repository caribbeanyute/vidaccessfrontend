import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import App from "./App";
import Login from './pages/Login';
import SidebarExample from "./components/sidebar/sidebar";
import axios from "axios";


axios.defaults.baseURL = "/api";


// Root style
import './index.scss';

import { store } from './state';



const Index = () => (

	<Provider store={store}>
		<BrowserRouter>
			<Routes>
				<Route path="/login" element={<Login />} />
				{//<Route path="/app" element={<App/>} />
				}
				<Route path="/" element={<SidebarExample />} >
					<Route path="/app" element={<App/>}>

					</Route>

				</Route>
				<Route path="*" element={"Not Found"}></Route>
			</Routes>
		</BrowserRouter>
	</Provider>
);

render(<Index />, document.getElementById('root'));