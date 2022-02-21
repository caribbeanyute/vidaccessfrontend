import React, { FC, useState } from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
	Outlet
} from "react-router-dom";

import logo from "../../assets/img/streamaccess-logos/streamaccess-logos-transparent.png";

import { Home, Video, Music, Settings } from "react-feather";
import './sidebar.scss'


const iconSize = 19;
const navItems = [
	{
		label: "Dashboard",
		icon: () => <Home className="" size={iconSize} color="white" />,
		path: "/home"
	},
	{
		label: "Video Sources",
		icon: () => <Video className="" size={iconSize} color="white" />,
		path: "/home"
	},
	{
		label: "Audio Sources",
		icon: () => <Music className="" size={iconSize} color="white" />,
		path: "/home"
	}, {
		label: "Manage Source",
		icon: () => <Settings className="" size={iconSize} color="white" />,
		path: "/home"
	},

];




type NavButtonProps = {
	label: string,
	path: string,
	icon: () => React.FC
}

const NavButton: FC<NavButtonProps> = ({ label, path = 'text', icon }: NavButtonProps) => {
	return (
		<button className="navButton bg-blackBg hover:bg-darkslategray rounded-lg
		hover:shadow flex flex-row items-center content-center px-2 mx-2 py-2 m-2">
			<div className="pr-1">
				{icon()}
				{//<Home className="" size={20} color="white"/>
				}
			</div>
			<div className="navButtonText text-white text-center text-xs pl-6 ">{label}</div>
		</button>
	)
}

export default function SidebarExample() {
	const [shown, setShown] = useState(false);

	return (
		<div className="flex flex-no-wrap">
			{/* Sidebar starts */}
			{/* Remove class [ hidden ] and replace [ sm:flex ] with [ flex ] */}
			<div style={{ "minHeight": '100vh' }} className="w-64 absolute sm:relative bg-blackBg shadow md:h-full flex-col justifybetween hidden sm:flex">
				<div className="logo mt-5">
					<img style={{
						"objectFit": "contain"
					}} src={logo} alt="Logo" />
				</div>


				<div className="navItems flex flex-col">
					{
						navItems.map((navItem, indx) => (
							<NavButton key={indx} label={navItem.label} icon={navItem.icon}></NavButton>
						))
					}

				</div>

			</div>
			<div className="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6">
				{/* Remove className [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
				<div className="w-full h-full rounded border-dashed border-2 border-gray-300">
					<Outlet />
				</div>

			</div>
		</div>

	);
}