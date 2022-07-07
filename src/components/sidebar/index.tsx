import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	Link,
	NavLink,
	useLocation
} from "react-router-dom";

import logo from "assets/img/streamaccess-logos/streamaccess-logos-transparent.png";
import { Home, Video, LogOut } from "react-feather";
import routes from "../../utils/routes";
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
		<Link to={path !== "/logout" ? path : "#"} className={`flex items-center py-3 pl-[17px] border-l-[3px] ${(pathname === path) ? "border-white" : "border-transparent"} font-medium transition-all text-[#808080] hover:pl-6 hover:border-white hover:text-white hover:bg-[#14131b]`}
		onClick={onClick}>
		<div className="w-6 h-6 mr-5">
				{icon()}
			</div>
		{label}
		{
		/*<span className="flex items-center ml-auto mr-5 px-1 rounded text-[12px] bg-blue-600">185</span>*/
		}
	</Link>
	)
}



function Sidebar() {

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
		<div style={{}} className="w-48 md:w-64 z-20 absolute md:relative bg-blackBg shadow h-full flex-col justify-between">
			<div className="logo mt-5">
				<img style={{
					"objectFit": "contain"
				}} src={logo} alt="Logo" />

			</div>


			<nav className="navItems flex flex-col">
				{navItems.map((navItem, indx) => (
					<NavButton key={indx} label={navItem.label} icon={navItem.icon} path={navItem.path} onClick={navItem.onClick} />
					
				))}

			</nav>

			<div className="mb-auto">

			</div>

		</div>
  );
}

export default Sidebar