import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from "react-router-dom";

import './sidebar.scss'

// Each logical "route" has two components, one for
// the sidebar and one for the main area. We want to
// render both of them in different places when the
// path matches the current URL.

// We are going to use this route config in 2
// spots: once for the sidebar and once in the main
// content section. All routes are in the same
// order they would appear in a <Switch>.
const routes = [
	{
		path: "/",
		exact: true,
		sidebar: () => <div>home!</div>,
		main: () => <h2>Home</h2>
	},
	{
		path: "/bubblegum",
		sidebar: () => <div>bubblegum!</div>,
		main: () => <h2>Bubblegum</h2>
	},
	{
		path: "/shoelaces",
		sidebar: () => <div>shoelaces!</div>,
		main: () => <h2>Shoelaces</h2>
	}
];

export default function SidebarExample() {
	return (

		/*       <ul style={{ listStyleType: "none", padding: 0 }}>
			 <li>
			   <Link to="/">Home</Link>
			 </li>
			 <li>
			   <Link to="/bubblegum">Bubblegum</Link>
			 </li>
			 <li>
			   <Link to="/shoelaces">Shoelaces</Link>
			 </li>
		   </ul> */


		<div className="flex flex-no-wrap">
			{/* Sidebar starts */}
			{/* Remove class [ hidden ] and replace [ sm:flex ] with [ flex ] */}
			<div style={{ "minHeight": '716px' }} className="w-64 absolute sm:relative bg-gray-800 shadow md:h-full flex-col justify-between hidden sm:flex">
				<div className="px-8">
					<div className="h-16 w-full flex items-center">
						<img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light_with_icons_at_bottom-svg1.svg" alt="Logo" />
					</div>
					<ul className="mt-12">
						<li className="flex w-full justify-between text-gray-300 cursor-pointer items-center mb-6">
							<a href="javascript:void(0)" className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
								<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" width="18" height="18" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
									<path stroke="none" d="M0 0h24v24H0z"></path>
									<rect x="4" y="4" width="6" height="6" rx="1"></rect>
									<rect x="14" y="4" width="6" height="6" rx="1"></rect>
									<rect x="4" y="14" width="6" height="6" rx="1"></rect>
									<rect x="14" y="14" width="6" height="6" rx="1"></rect>
								</svg>
								<span className="text-sm ml-2">Home</span>
							</a>
							<div className="py-1 px-3 bg-gray-600 rounded text-gray-300 flex items-center justify-center text-xs">5</div>
						</li>
						<li className="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6">
							<a href="javascript:void(0)" className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
								<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-puzzle" width="18" height="18" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
									<path stroke="none" d="M0 0h24v24H0z"></path>
									<path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1"></path>
								</svg>
								<span className="text-sm ml-2">Products</span>
							</a>
							<div className="py-1 px-3 bg-gray-600 rounded text-gray-300 flex items-center justify-center text-xs">8</div>
						</li>
						<li className="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6">
							<a href="javascript:void(0)" className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
								<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-compass" width="18" height="18" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
									<path stroke="none" d="M0 0h24v24H0z"></path>
									<polyline points="8 16 10 10 16 8 14 14 8 16"></polyline>
									<circle cx="12" cy="12" r="9"></circle>
								</svg>
								<span className="text-sm ml-2">Performance</span>
							</a>
						</li>
						<li className="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6">
							<a href="javascript:void(0)" className="flex items-center focus:outline-none focus:ring-2 focus:ring-white" >
								<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-code" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
									<path stroke="none" d="M0 0h24v24H0z"></path>
									<polyline points="7 8 3 12 7 16"></polyline>
									<polyline points="17 8 21 12 17 16"></polyline>
									<line x1="14" y1="4" x2="10" y2="20"></line>
								</svg>
								<span className="text-sm ml-2">Deliverables</span>
							</a>
						</li>
						<li className="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6">
							<a href="javascript:void(0)" className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
								<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-puzzle" width="18" height="18" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
									<path stroke="none" d="M0 0h24v24H0z"></path>
									<path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1"></path>
								</svg>
								<span className="text-sm ml-2">Invoices</span>
							</a>
							<div className="py-1 px-3 bg-gray-600 rounded text-gray-300 flex items-center justify-center text-xs">25</div>
						</li>
						<li className="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6">
							<a href="javascript:void(0)" className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
								<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-stack" width="18" height="18" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
									<path stroke="none" d="M0 0h24v24H0z" />
									<polyline points="12 4 4 8 12 12 20 8 12 4" />
									<polyline points="4 12 12 16 20 12" />
									<polyline points="4 16 12 20 20 16" />
								</svg>
								<span className="text-sm ml-2">Inventory</span>
							</a>
						</li>
						<li className="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center">
							<a href="javascript:void(0)" className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
								<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-settings" width="18" height="18" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
									<path stroke="none" d="M0 0h24v24H0z" />
									<path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
									<circle cx="12" cy="12" r="3" />
								</svg>
								<span className="text-sm ml-2">Settings</span>
							</a>
						</li>
					</ul>
					<div className="flex justify-center mt-48 mb-4 w-full">
						<div className="relative">
							<div className="text-gray-300 absolute ml-4 inset-0 m-auto w-4 h-4">
								<img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light_with_icons_at_bottom-svg2.svg" alt="Search" />
							</div>
							<input className="bg-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-100 rounded w-full text-sm text-gray-300 placeholder-gray-400 bg-gray-100 pl-10 py-2" type="text" placeholder="Search" />
						</div>
					</div>
				</div>
				<div className="px-8 border-t border-gray-700">
					<ul className="w-full flex items-center justify-between bg-gray-800">
						<li className="cursor-pointer text-white pt-5 pb-3">
							<button aria-label="show notifications" className="focus:outline-none focus:ring-2 rounded focus:ring-gray-300">
								<img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light_with_icons_at_bottom-svg3.svg" alt="notifications" />
							</button>
						</li>
						<li className="cursor-pointer text-white pt-5 pb-3">
							<button aria-label="open chats" className="focus:outline-none focus:ring-2 rounded focus:ring-gray-300">
								<img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light_with_icons_at_bottom-svg4.svg" alt="chat" />
							</button>
						</li>
						<li className="cursor-pointer text-white pt-5 pb-3">
							<button aria-label="open settings" className="focus:outline-none focus:ring-2 rounded focus:ring-gray-300">
								<img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light_with_icons_at_bottom-svg5.svg" alt="settings" />
							</button>
						</li>
						<li className="cursor-pointer text-white pt-5 pb-3">
							<button aria-label="open logs" className="focus:outline-none focus:ring-2 rounded focus:ring-gray-300">
								<img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light_with_icons_at_bottom-svg6.svg" alt="drawer" />
							</button>
						</li>
					</ul>
				</div>
			</div>
			<div className="w-64 z-40 absolute bg-gray-800 shadow md:h-full flex-col justify-between sm:hidden transition duration-150 ease-in-out" id="mobile-nav">
				<button aria-label="toggle sidebar" id="openSideBar" className="h-10 w-10 bg-gray-800 absolute right-0 mt-16 -mr-10 flex items-center shadow rounded-tr rounded-br justify-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 rounded focus:ring-gray-800" onClick={()=>"sidebarHandler(true)"}>
					<img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light_with_icons_at_bottom-svg7.svg" alt="toggler" />
				</button>
				<button aria-label="Close sidebar" id="closeSideBar" className="hidden h-10 w-10 bg-gray-800 absolute right-0 mt-16 -mr-10 flex items-center shadow rounded-tr rounded-br justify-center cursor-pointer text-white" onClick={ () =>"sidebarHandler(false)"}>
					<img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light_with_icons_at_bottom-svg8.svg" alt="cross" />
				</button>
				<div className="px-8">
					<div className="h-16 w-full flex items-center">
						<img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light_with_icons_at_bottom-svg1.svg" alt="Logo" />
					</div>
					<ul className="mt-12">
						<li className="flex w-full justify-between text-gray-300 hover:text-gray-500 cursor-pointer items-center mb-6">
							<a href="javascript:void(0)" className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
								<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" width="18" height="18" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
									<path stroke="none" d="M0 0h24v24H0z"></path>
									<rect x="4" y="4" width="6" height="6" rx="1"></rect>
									<rect x="14" y="4" width="6" height="6" rx="1"></rect>
									<rect x="4" y="14" width="6" height="6" rx="1"></rect>
									<rect x="14" y="14" width="6" height="6" rx="1"></rect>
								</svg>
								<span className="text-sm ml-2">Dashboard</span>
							</a>
							<div className="py-1 px-3 bg-gray-600 rounded text-gray-300 flex items-center justify-center text-xs">5</div>
						</li>
						<li className="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6">
							<a href="javascript:void(0)" className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
								<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-puzzle" width="18" height="18" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
									<path stroke="none" d="M0 0h24v24H0z"></path>
									<path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1"></path>
								</svg>
								<span className="text-sm ml-2">Products</span>
							</a>
							<div className="py-1 px-3 bg-gray-600 rounded text-gray-300 flex items-center justify-center text-xs">8</div>
						</li>
						<li className="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6">
							<a href="javascript:void(0)" className="flex items-center focus:outline-none focus:ring-2 focus:ring-white" >
								<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-compass" width="18" height="18" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
									<path stroke="none" d="M0 0h24v24H0z"></path>
									<polyline points="8 16 10 10 16 8 14 14 8 16"></polyline>
									<circle cx="12" cy="12" r="9"></circle>
								</svg>
								<span className="text-sm ml-2">Performance</span>
							</a>
						</li>
						<li className="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6">
							<a href="javascript:void(0)" className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
								<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-code" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
									<path stroke="none" d="M0 0h24v24H0z"></path>
									<polyline points="7 8 3 12 7 16"></polyline>
									<polyline points="17 8 21 12 17 16"></polyline>
									<line x1="14" y1="4" x2="10" y2="20"></line>
								</svg>
								<span className="text-sm ml-2">Deliverables</span>
							</a>
						</li>
						<li className="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6">
							<a href="javascript:void(0)" className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
								<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-puzzle" width="18" height="18" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
									<path stroke="none" d="M0 0h24v24H0z"></path>
									<path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1"></path>
								</svg>
								<span className="text-sm ml-2">Invoices</span>
							</a>
							<div className="py-1 px-3 bg-gray-600 rounded text-gray-300 flex items-center justify-center text-xs">25</div>
						</li>
						<li className="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6">
							<a href="javascript:void(0)" className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
								<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-stack" width="18" height="18" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
									<path stroke="none" d="M0 0h24v24H0z" />
									<polyline points="12 4 4 8 12 12 20 8 12 4" />
									<polyline points="4 12 12 16 20 12" />
									<polyline points="4 16 12 20 20 16" />
								</svg>
								<span className="text-sm ml-2">Inventory</span>
							</a>
						</li>
						<li className="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center">
							<a href="javascript:void(0)" className="flex items-center focus:outline-none focus:ring-2 focus:ring-white">
								<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-settings" width="18" height="18" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
									<path stroke="none" d="M0 0h24v24H0z" />
									<path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
									<circle cx="12" cy="12" r="3" />
								</svg>
								<span className="text-sm ml-2">Settings</span>
							</a>
						</li>
					</ul>
					<div className="flex justify-center mt-48 mb-4 w-full">
						<div className="relative">
							<div className="text-gray-300 absolute ml-4 inset-0 m-auto w-4 h-4">
								<img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light_with_icons_at_bottom-svg2.svg" alt="Search" />
							</div>
							<input className="bg-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-100  rounded w-full text-sm text-gray-300 placeholder-gray-400 bg-gray-100 pl-10 py-2" type="text" placeholder="Search" />
						</div>
					</div>
				</div>
				<div className="px-8 border-t border-gray-700">
					<ul className="w-full flex items-center justify-between bg-gray-800">
						<li className="cursor-pointer text-white pt-5 pb-3">
							<button aria-label="show notifications" className="focus:outline-none focus:ring-2 rounded focus:ring-gray-300">
								<img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light_with_icons_at_bottom-svg3.svg" alt="notifications" />
							</button>
						</li>
						<li className="cursor-pointer text-white pt-5 pb-3">
							<button aria-label="open chats" className="focus:outline-none focus:ring-2 rounded focus:ring-gray-300">
								<img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light_with_icons_at_bottom-svg4.svg" alt="chat" />
							</button>
						</li>
						<li className="cursor-pointer text-white pt-5 pb-3">
							<button aria-label="open settings" className="focus:outline-none focus:ring-2 rounded focus:ring-gray-300">
								<img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light_with_icons_at_bottom-svg5.svg" alt="settings" />
							</button>
						</li>
						<li className="cursor-pointer text-white pt-5 pb-3">
							<button aria-label="open logs" className="focus:outline-none focus:ring-2 rounded focus:ring-gray-300">
								<img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/light_with_icons_at_bottom-svg6.svg" alt="drawer" />
							</button>
						</li>
					</ul>
				</div>
			</div>
			{/* Sidebar ends */}
			{/* Remove className [ h-64 ] when adding a card block */}
			<div className="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6">
				{/* Remove className [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
				<div className="w-full h-full rounded border-dashed border-2 border-gray-300">
					{/* Place your content here */}
				</div>
			</div>
		</div>




	);
}