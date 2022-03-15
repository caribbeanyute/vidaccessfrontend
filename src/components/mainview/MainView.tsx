import React, { FC, useState } from "react";
import { useSelector } from "react-redux";
import {
	Link,
	Outlet,
	useLocation
} from "react-router-dom";

import logo from "assets/img/streamaccess-logos/streamaccess-logos-transparent.png";
import { Home, Video, Music, Settings, Smile } from "react-feather";
import './MainView.scss'
import routes from "../../utils/routes";
import Header from '../header/Header';


const iconSize = 19;
const navItems = [
	{
		label:'Home',
		icon: () => <Home className="" size={iconSize} color="white" />,
		path: "/",

	},
	{
		label: "Video",
		icon: () => <Video className="" size={iconSize} color="white" />,
		path: routes.video,

	}]/*,
	{
		label: "Audio Sources",
		icon: () => <Music className="" size={iconSize} color="white" />,
		path: "",
		link: <Link to="/app">Audio</Link>
	},
	{
		label: "Manage Source",
		icon: () => <Smile className="" size={iconSize} color="white" />,
		path: "",
		link: <Link to="/app">My Profile</Link>
	},
	{
		label: "Settings",
		icon: () => <Settings className="" size={iconSize} color="white" />,
		path: "",
		link: <Link to="/app">Settings</Link>
	},


];*/




type NavButtonProps = {
	label: string,
	path: string,
	icon: () => React.ReactNode,
}

const NavButton: FC<NavButtonProps> = ({ label, path, icon}: NavButtonProps) => {
	const { pathname } = useLocation();
	console.log(pathname);
	return (
		<Link to={path} className={`navButton  ${(pathname === path) ? "bg-slate-700" : "bg-blackBg"} hover:bg-darkslategray rounded-lg
		hover:shadow flex flex-row items-center content-center px-2 mx-2 py-2 m-2`}>
			<div className="pr-1">
				{icon()}
			</div>
			<div className="navButtonText text-white text-center text-xs pl-4 ">{label}</div>
		</Link>
	)
}

export default function MainView() {
	const { sideBarVisibility } = useSelector((state: RootState) => state.ui);

	return (
		<div className="flex flex-col h-screen">
			<Header className="w-full" />

			{/* Sidebar starts */}
			
			<div className="flex flex-grow rounded-full">
			{ sideBarVisibility && (
				<div style={{}} className="w-64 z-20 absolute md:relative bg-blackBg shadow h-full flex-col justify-between sm:flex">
					<div className="logo mt-5">
						<img style={{
							"objectFit": "contain"
						}} src={logo} alt="Logo" />

					</div>


					<nav className="navItems flex flex-col">
						{
							navItems.map((navItem, indx) => (
								<NavButton key={indx} label={navItem.label} icon={navItem.icon} path={navItem.path} link={navItem.link} />
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