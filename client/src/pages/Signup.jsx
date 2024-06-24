import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import {Link} from 'react-router-dom'

const SignUp = () => {
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
          <form className=' flex flex-col gap-4'>
            <div>
              <Label value='Your username'/>
              <TextInput type='text' placeholder='username' id='username'/>
            </div>
            <div>
              <Label value='Your email'/>
              <TextInput type='email' placeholder='example@email.com' id='email'/>
            </div>
            <div>
              <Label value='Your password'/>
              <TextInput type='password' placeholder='password' id='password'/>
            </div>
            <Button gradientDuoTone='purpleToBlue' type='submit'>
              Sign Up
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to='/signin' className='text-blue-500'>
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp