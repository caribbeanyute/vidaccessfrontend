import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	Link,
	Outlet,
	useLocation
} from "react-router-dom";

import './MainView.scss'
import Header from '../header/Header';
import Sidebar from "../sidebar";



export default function MainView() {
	const { sideBarVisibility } = useSelector((state: RootState) => state.ui);
	const dispatch = useDispatch();



	return (
		<div className="flex flex-col h-screen">
			<Header className="w-full" />



			<div className="flex items-center flex-grow">
				{sideBarVisibility && (
					<Sidebar />
				)
				}
				<Outlet />
			</div>




		</div>
	);
}