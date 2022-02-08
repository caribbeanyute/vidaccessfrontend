import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom';
import App from '../../App';
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';

import mediaplayer from './images/media_player.svg'
import Input from '../../components/input/Input'
import Button from '../../components/button/Button';

import { loginUser } from '../../state/actions/authActions'



type LoginProps = {
	UI: any,
	loginUser: typeof loginUser,
}

interface StateProps {

}

const Login: React.FC<LoginProps> = ({ UI, ...props }: LoginProps) => {
	const [userName, setUserName] = useState("d")
	const [password, setPassword] = useState("")
	const [errors, setErrors] = useState({});
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (UI.errors) {
			setErrors(UI.errors);
		}
		setLoading(UI.loading);
	}, [UI])

	const handleSubmit = (e: any) => {
		e.preventDefault();
		setLoading(true);
		//your client side validation here
		//after success validation
		const userData = {
			username: userName,
			password: password,
		};
		props.loginUser(userData, "props.history");
	}

	return (
		<div className="container flex flex-col  h-screen w-screen">
			<div className="grid grid-cols-2">
				<div className='bg-white pl-20 pt-40 h-screen '>
					<div className='font-face-rb text-gray-500 text-xs'>VIDEO ACCESS</div>
					<div className='font-face-rb text-black text-4xl pt-4'>Login</div>
					<Input label='username' onChangeText={(text: string) => setUserName(text)} />
					<Input label='password' type='password' onChangeText={(text: string) => setPassword(text)} />
					<div className='flex mt-6'>
						<Button isActive={false} onClick={handleSubmit}>{'Login'}</Button>
					</div>

				</div>
				<div className='flex w-full'>
					<img className='px-20' src={mediaplayer} alt="Logo" />
				</div>
			</div>
		</div>
	)
}

//this map the states to our props in this functional component
const mapStateToProps = (state: any) => ({
	user: state.user,
	UI: state.loginUIReducer
});
//this map actions to our props in this functional component
const mapDispatchToProps: MapDispatchToProps<DispatchProps, LoginProps> = {
	loginUser
};


export default connect(mapStateToProps, mapDispatchToProps)(Login)

