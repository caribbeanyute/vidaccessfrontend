import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";

import './header.scss'
import { toggleSidebar } from "../../state/actions/uiActions";


type HeaderProps = {
	className?: string,
}


const Header: FC<HeaderProps> = ({ className }: HeaderProps) => {
	const dispatch = useDispatch();

	const onToggleSidebar = () => {
		dispatch(toggleSidebar());
	}

	return (
		<nav className={`bg-gray-800 border-gray-200 px-2 sm:px-4 py-1 dark:bg-gray-800 ${className}`}>
			<div className="container flex flex-wrap justify-between items-center mr-auto">

				<button onClick={onToggleSidebar} data-collapse-toggle="mobile-menu-3" type="button" className="inline-flex items-center cursor-pointer p-2 ml-3 text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-3" aria-expanded="false">
					<span className="sr-only">Open main menu</span>
					<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
					<svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
				</button>

				<div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-3">
					<ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">

					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Header;