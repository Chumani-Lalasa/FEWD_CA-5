import React, { useState } from 'react';
import {useForm} from 'react-hook-form'
import { setFormData } from '../Redux/Action';
import { connect } from 'react-redux';
import './Register.css'
// import { Redirect } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
const Register = ({setFormData}) => {
    const {register,
        handleSubmit,
        formState:{errors,isSubmitSuccessful},
        reset,
        watch
    } = useForm();

    const [showSuccessMessage, setShowSuccessMessge] = useState(false);
    const [redirect, setRedirect] = useState(false);
    const password = watch('password')
    const [userName,setUsername] = useState('');

    const onSubmit = async(data) => {
        await new Promise((resolve) => setTimeout(resolve,2000))
        console.log(data);
        reset();
        setShowSuccessMessge(true);
        setUsername(data.name);
        setTimeout(() => {
            setShowSuccessMessge(false);
            setRedirect(true);
        },2000)
    }

  return (
    <div className='main'>
        <div className="logo-container">
          <img
            src="https://kalvium.community/images/sidebar-3d-logo.svg"
            alt=""
          />
          <p>Kalvium Books</p> 
        </div>
        <div className='card-container'>
        <div className='registration-status'>
        {isSubmitSuccessful ? showSuccessMessage&&<div>Registration Successful</div>:null}
    </div>
    <div className='form-conatiner'>
        <h1 className='create'>Create Account</h1>
        <form action="" onSubmit={handleSubmit(onSubmit)} className='form'>
            <div className='input-container'>
                <input 
                    type="text" 
                    className='textBox'
                    placeholder='Your name'
                    {...register('name',{
                        required:'name required',
                        pattern:{
                            value:/^[a-zA-Z]+$/,
                            message:'Invalid name'
                        },
                        minLength:{
                            value:3,
                            message:'name must be greater than 3 characters'
                        },
                        maxLength:{
                            value:30,
                            message:'name must be less than 30 character'
                        }
                    })}
                />
                {errors.name && <p style={{color:"red",fontSize:"14px"}}>{errors.name.message}</p>}
            </div>
            <div className='input-container'>
                <input 
                    type="text" 
                    className='textBox'
                    placeholder='Your email'
                    {...register('email',{
                        required:'Email required',
                        validate:(value) => {
                            if(!value.includes('@')){
                                return 'Invalid email'
                            }
                            return true
                        },
                        pattern:{
                            value:/^\S+@\S+\.\S+$/,
                            message:'Invalid email'

                        }
                    })}
                />
                {errors.email && <p style={{color:"red",fontSize:"14px"}}>{errors.email.message}</p>}
            </div>
            <div className='input-container'>
                <input 
                    type="password" 
                    className='textBox'
                    placeholder='password'
                    {...register('password',{
                        required:'password required',
                        minLength:{
                            value:10,
                            message:'Password must be at least 10 characters'
                        },
                        validate:(value) => {
                            if(!/[!@#$%^&*(),.?":{}|<>]/.test(value)){
                                return 'Password must include at least one special character'
                            }
                            return true;
                        },
                    })}
                />
                {errors.password && <p style={{color:"red",fontSize:"14px"}}>{errors.password.message}</p>}
            </div>
            <div className='input-container'>
                <input 
                    type="password" 
                    className='textBox'
                    placeholder='Repeat your password'
                    {...register('repeatPassword',{
                        required:'Repeat password required',
                        validate: value => value===password || 'The passwords do not match'
                    })}
                />
                {errors.repeatPassword && <p style={{color:"red",fontSize:"14px"}}>{errors.repeatPassword.message}</p>}
            </div>
            <div className='input-container'>
                <input type="checkbox"
                    {...register('agree',{
                        required:'Please agree to continue'
                    })}
                    /><span className='agree'> I agree all statements in Terms of Service</span>
                    {errors.agree && <p style={{color:"red",fontSize:"14px"}}>{errors.agree.message}</p>}
            </div>
            <div className='input-container'>
                <button type='submit' className='sign-btn'>
     {redirect && <Navigate to="/" state={{showWelcomeMessage:redirect,userName}}/>}   

                    SIGN UP     
                </button>
            </div>
        </form>
    </div>
        </div>
    
    </div>
  );
}

export default connect(null,{setFormData})(Register);
