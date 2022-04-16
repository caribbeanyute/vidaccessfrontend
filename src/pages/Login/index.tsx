import React, {useState, useEffect} from 'react'
import {connect, MapDispatchToProps} from 'react-redux';
import { useNavigate } from 'react-router-dom';

import mediaplayer from './images/media_player.svg'
import Button from '../../components/button/Button';

import {loginUser} from '../../state/actions/authActions'

import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';


type LoginProps = {
    UI: {
        loading: boolean,
        loggedIn: boolean,
        error: boolean,
        errorStatus: any
    },
    loginUser: typeof loginUser,
}


const default_error =  {"a": "Whoops 😢", "b": "Something went wrong please try again later"}


const errorMessageOptions: { "0": { a: string; b: string }; "401": { a: string; b: string } } | null
    = {
    0: {"a": "Whoops 😢", "b": "Something went wrong please try again later"},
    401: {"a": "🔐", "b": "Incorrect username or password"}

}

const errorMessage = Object.assign({}, default_error, errorMessageOptions)

const LoginSchema = Yup.object().shape({
    username: Yup.string().min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    password: Yup.string().min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),

})

const Login: React.FC<LoginProps> = ({UI, ...props}: LoginProps) => {
    const [error, setError] = useState<boolean>(false);
    const [errorMsg, setErrorMsg] = useState<typeof errorMessage>({});
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();


    useEffect(() => {
        setError(UI.error)
        if (UI.error) {
            setErrorMsg(errorMessage[UI.errorStatus])
        }

        if(UI.loggedIn){
            navigate('/');
        }
        
    }, [UI])

    const handleSubmit = (values: object) => {
        setLoading(true);
        const userData = {
            username: values.username,
            password: values.password,
        };
        props.loginUser(userData);
    }

    return (
        <div className="lg:flex">
            <div className="grid md:grid-cols-2 grid-cols-1">
                <div className='bg-white px-10 pt-10 md:px-40 md:pt-40 h-screen'>

                    <div className='font-face-rb text-gray-500 text-xs'>VIDEO ACCESS</div>
                    <div className='font-face-rb text-black text-4xl pt-4'>Login</div>
                    {error && (<div className="bg-red-100 rounded-lg py-5 px-6 text-base text-red-700 my-3"
                                       role="alert">
                        {errorMsg.a} - {errorMsg.b}
                    </div>)}
                    <Formik
                        initialValues={{username: '', password: '',}}
                        validationSchema={LoginSchema}
                        onSubmit={(values, {setSubmitting}) => {
                            handleSubmit(values);
                            setSubmitting(false);
                        }} >
                        {({errors, touched, submitForm}) => (
                            <Form>
                                <div className="my-4 flex flex-col">


                                <label className='font-face-rb text-black text-xs pt-4' htmlFor="username">
                                    username
                                </label>
                                <Field
                                    name='username'
                                    type='text'
                                    placeholder='username'
                                    className={`text-black py-2 px-4 mt-4 rounded-full outline outline-offset-2 outline-1 ${errors.username ? "outline-red-500" : "outline-gray-900"} `}
                                    as=''

                                />
                                {errors.username && touched.username ? (
                                    <p className="text-red-500 text-xs italic pl-2 pt-1">{errors.username}</p>
                                ) : null}
                                </div>

                                <div className="my-4 flex flex-col">
                                    <label className='font-face-rb text-black text-xs pt-4' htmlFor="username">
                                        password
                                    </label>
                                <Field
                                    name='password'
                                    type='password'
                                    placeholder='username'
                                    className={`text-black py-2 px-4 mt-4 rounded-full outline outline-offset-2 outline-1 ${errors.password ? "outline-red-500" : "outline-gray-900"} `}
                                    as=''

                                />
                                {errors.password && touched.password ? (
                                    <p className="text-red-500 text-xs italic pl-2 pt-1">{errors.password}</p>
                                ) : null}
                                </div>
                                <div className='flex mt-6'>
                                    <Button isActive={false} buttonType={"submit"} >{'Login'}</Button>
                                </div>
                            </Form>
                        )}
                    </Formik>

                </div>
                <div className='flex w-full hidden md:block md:px-20 md:pt-40'>
                    <img className='px-20' src={mediaplayer} alt="Logo"/>
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

