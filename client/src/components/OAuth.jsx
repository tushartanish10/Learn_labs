import { Button } from 'flowbite-react'
import {AiFillGoogleCircle} from 'react-icons/ai'
import React from 'react'
import {app} from '../firebase.js'
import {useDispatch} from 'react-redux'
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'
import {signInSuccess} from '../redux/user/userSlice.js'

const OAuth = () => {
  const auth = getAuth(app);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoogleAuth = async() => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({prompt: 'select_account'});
    try {
      const resultsFromGoogle = await signInWithPopup(auth, provider);
      
      const res = await fetch('/server/auth/google', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          name: resultsFromGoogle.user.displayName,
          email: resultsFromGoogle.user.email,
          googlePhotoUrl: resultsFromGoogle.user.photoURL
        }),
      })

      const data = await res.json()
      if(res.ok){
        dispatch(signInSuccess(data));
        navigate('/');
      }
    } catch (error) {
      console.log(error.message);
      
    }
  }
  return (
    <>
    <Button type='button' gradientDuoTone= 'purpleToBlue' outline onClick={handleGoogleAuth}> <AiFillGoogleCircle className='mr-2 w-6 h-6'/>Continue with Google</Button>
    </>
  )
}

export default OAuth