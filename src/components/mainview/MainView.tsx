import React, { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	Link,
	Outlet,
	useLocation
} from "react-router-dom";

import logo from "assets/img/streamaccess-logos/streamaccess-logos-transparent.png";
import { Home, Video, LogOut } from "react-feather";
import './MainView.scss'
import routes from "../../utils/routes";
import Header from '../header/Header';
import { logoutUser } from '../../state/actions/authActions'

const iconSize = 19;

type LogoutProps = {
	className?: string,
	size: number,
	color: string,
}

const LogOutFC: FC<LogoutProps> = ({ className, size, color }: LogoutProps) => {
	return (
		<LogOut className={className} size={iconSize} color={color} />
	)
}



type NavButtonProps = {
	label: string,
	path: string,
	icon: () => React.ReactNode,
	onClick?: () => void,
}

const NavButton: FC<NavButtonProps> = ({ label, path, icon, onClick }: NavButtonProps) => {
	const { pathname } = useLocation();

	return (
		<Link to={path !== "/logout" ? path : "#"} className={`navButton  ${(pathname === path) ? "bg-slate-700" : "bg-blackBg"} hover:bg-darkslategray rounded-lg
		hover:shadow flex flex-row items-center content-center px-2 mx-2 py-2 m-2`}
			onClick={onClick}>
			<div className="pr-1">
				{icon()}
			</div>
			<div className="navButtonText text-white text-center text-xs pl-4 ">{label}</div>
		</Link>
	)
}


export default function MainView() {
	const { sideBarVisibility } = useSelector((state: RootState) => state.ui);
	const dispatch = useDispatch();

	const navItems = [
		{
			label: 'Home',
			icon: () => <Home className="" size={iconSize} color="white" />,
			path: "/",

		},
		{
			label: "Video",
			icon: () => <Video className="" size={iconSize} color="white" />,
			path: routes.video,

		},
		{
			label: "Logout",
			icon: () => <LogOutFC className="" size={iconSize} onClick color="white" />,
			path: "/logout",
			onClick: () => dispatch(logoutUser())
		}];

	return (
		<div className="flex flex-col h-screen">
			<Header className="w-full" />

			{/* Sidebar starts */}

			<div className="flex flex-grow rounded-full">
				{sideBarVisibility && (
					<div style={{}} className="w-64 z-20 absolute md:relative bg-blackBg shadow h-full flex-col justify-between sm:flex">
						<div className="logo mt-5">
							<img style={{
								"objectFit": "contain"
							}} src={logo} alt="Logo" />

						</div>


						<nav className="navItems flex flex-col">
							{
								navItems.map((navItem, indx) => (
									<NavButton key={indx} label={navItem.label} icon={navItem.icon} path={navItem.path} onClick={navItem.onClick} />
								))
							}

						</nav>

						<div className="mb-auto">
							{ }
						</div>

					</div>)
				}

				<div className="container mx-auto">
					<Outlet />
				</div>
			</div>
		</div>
	);
}