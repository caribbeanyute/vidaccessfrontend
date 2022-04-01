import React, {ButtonHTMLAttributes, ReactChild, ReactChildren} from 'react';

type ButtonProps = {
	isActive: boolean,
	children: ReactChild | ReactChildren
	buttonType? : string
	onClick? : (e:React.MouseEvent<HTMLElement>) => void
  
  }


export default function Button({ isActive, children, onClick, buttonType }: ButtonProps) {
	return (

		<button
		  className={`py-2 px-4 mt-4 rounded-full outline outline-offset-2 outline-cyan-500" ${isActive ? 'bg-sky-500 text-white' : 'bg-gray-50'}`}
		  onClick={onClick}
		  type={buttonType}
		>
		  {children}
		</button>
	)
  }
  