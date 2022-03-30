import React, {ReactChild, ReactChildren } from 'react';

import {PlusCircle} from 'react-feather';

type AddButtonProps = {
    className: string,
    href: string,
    isActive?: boolean,
    label: string,
    type?: string,
    children: ReactChild | ReactChildren
}

export default function AddButton({className, label}: AddButtonProps) {
    return (
        <button disabled type="button" className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4
		 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2
		  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center ` + className}
        >
            <PlusCircle className='inline mr-3 w-4 h-4 text-white'></PlusCircle>
            {label}
        </button>
    )
}
