import React, { ReactChild, ReactChildren } from 'react';

type ButtonProps = {
	href: string,
	isActive: boolean,
	children: ReactChild | ReactChildren
	onClick: (e:React.MouseEvent<HTMLElement>) => void
  
  }


export default function Button({ href, isActive, children, onClick }: ButtonProps) {
	return (

		<a
		  href={href}
		  className={`py-2 px-4 mt-4 rounded-full outline outline-offset-2 outline-cyan-500" ${isActive ? 'bg-sky-500 text-white' : 'bg-gray-50'}`}
		  onClick={onClick}
		>
		  {children}
		</a>
	)
  }
  