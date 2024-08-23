import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react'
import React from 'react'
import { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { signInStart, signInSuccess, signInFailure } from '../redux/user/userSlice'
import OAuth from '../components/OAuth'

const SignIn = () => {

  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const {loading, error: errMessage} = useSelector(state => state.user);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value.trim()})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!formData.email || !formData.password){
      return dispatch(signInFailure('All fields are required'));
    }
    try {
      dispatch(signInStart());
      const res = await fetch('/server/auth/signin', {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(formData)
      })
      const data = await res.json();

      if(data.success === false){
        return dispatch(signInFailure(data.message));
      }
      if(res.ok){
        dispatch(signInSuccess(data));
        navigate('/');
      }
    }
    catch(err){
        dispatch(signInFailure(err.message)); 
    }
  }

  

  return (
    <div className='min-h-screen mt-20'>
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left */}
        <div className="flex-1">
          <Link to = '/' className='font-bold dark:text-white text-4xl'>
          <div className='text-gray-200 text-center px-2 py-1 bg-gradient-to-br from-purple-600 to-cyan-500 rounded-lg' >
          LearnLabs
          </div>
          </Link>
          <p className='text-sm mt-5'>
            Where you feel the magic of science.  
            You can signin using email or through google account.
          </p>
        </div>
        {/* right */}
        <div className="flex-1">
          <form className=' flex flex-col gap-4 ' onSubmit={handleSubmit}>
            <div>
              <Label value='Your email'/>
              <TextInput type='email' placeholder='example@email.com' id='email' onChange={handleChange}/>
            </div>
            <div>
              <Label value='Your password'/>
              <TextInput type='password' placeholder='password' id='password' onChange={handleChange}/>
            </div>
            <Button gradientDuoTone='purpleToBlue' type='submit' disabled={loading}>
            {
                loading ? (
                  <>
                  <Spinner size='sm'/>
                  <span>Loading...</span>
                  </>
                )
                : 'Sign In'
              }
            </Button>
            <OAuth />
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Don't have an account?</span>
            <Link to='/signup' className='text-blue-500'>
              Sign Up
            </Link>
          </div>
          {
            errMessage && (
              <Alert className='mt-5' color='failure'>
                {errMessage}
              </Alert>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default SignIn