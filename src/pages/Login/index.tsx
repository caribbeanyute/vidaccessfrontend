import React from 'react'
import mediaplayer from './images/media_player.svg'
import Input from '../../components/input/Input'
import { Route } from 'react-router-dom';
import App from '../../App';




type InputProps = {
	label: string
  
  }
  
  const Login = ({ label }: InputProps) => {
	return (
		<div className="container flex flex-col  h-screen w-screen">
			<div className="grid grid-cols-2">
				<div className='bg-white pl-20 pt-40 h-screen '>
					<div className='font-face-rb text-gray-500 text-xs'>VIDEO ACCESS</div>
					<div className='font-face-rb text-black text-4xl pt-4'>Login</div>
					<Input label='username'/>
					<Input label='password'/>
				</div>
				<div className='red flex w-full'>
					<img className='px-20' src={mediaplayer} alt="Logo" />
				</div>
			</div>
		</div>
	)
}


export default Login

