import React, { FC, useState} from "react";
import {
	Link,
	Outlet,
	useLocation
} from "react-router-dom";

import logo from "assets/img/streamaccess-logos/streamaccess-logos-transparent.png";

import { Home, Video, Music, Settings, Smile } from "react-feather";
import './sidebar.scss'

import Header from '../header/Header';


const iconSize = 19;
const navItems = [
	{
		label: "Dashboard",
		icon: () => <Home className="" size={iconSize} color="white" />,
		path: "/",
		link: <Link to="/">Home</Link>
	},
	{
		label: "Video Sources",
		icon: () => <Video className="" size={iconSize} color="white" />,
		path:  "/app",
		link: <Link to="/app">Video</Link>
	},
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


];




type NavButtonProps = {
	label: string,
	path: string,
	link: () => React.ReactNode,
	icon: () => React.ReactNode
}

const NavButton: FC<NavButtonProps> = ({ label, path, icon, link }: NavButtonProps) => {
	const { pathname } = useLocation();
	console.log(pathname);
	return (
		<button className={`navButton  ${(pathname === path) ? "bg-slate-700" : "bg-blackBg" } hover:bg-darkslategray rounded-lg
		hover:shadow flex flex-row items-center content-center px-2 mx-2 py-2 m-2`}>
			<div className="pr-1">
				{icon()}
			</div>
			<div className="navButtonText text-white text-center text-xs pl-4 ">{link}</div>
		</button>
	)
}

export default function SidebarExample() {
	const [shown, setShown] = useState(false);

	return (<>
		<Header />
		<div className="flex flex-no-wrap rounded-full">
			
			{/* Sidebar starts */}
			{/* Remove class [ hidden ] and replace [ sm:flex ] with [ flex ] */}
			<div style={{ "minHeight": '100vh' }} className="w-64 absolute sm:relative bg-blackBg shadow md:h-full flex-col justifybetween hidden sm:flex">
				<div className="logo mt-5">
					<img style={{
						"objectFit": "contain"
					}} src={logo} alt="Logo" />
					
				</div>


				<nav className="navItems flex flex-col">
					{
						navItems.map((navItem, indx) => (
							<NavButton key={indx} label={navItem.label} icon={navItem.icon} path={navItem.path} link={navItem.link}>
							</NavButton>
						))
					}

				</nav>

				<div className="mb-auto">
					{}
				</div>

			</div>

           {/* className="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6" */} 
		   
			<div className="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6">
				{/* Remove className [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
				<div className="rounded border-dashed border-2 border-gray-300">
					<Outlet />
				</div>

			</div>
		</div>
		</>
	);
}