import React from 'react'
import { Avatar, Button, Dropdown, Navbar, NavbarLink, TextInput } from 'flowbite-react'
import { Link, useLocation } from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai'
import {FaMoon, FaSun} from 'react-icons/fa'
import {signOutSuccess} from '../redux/user/userSlice.js'
import {useSelector, useDispatch} from 'react-redux'
import { toggleTheme } from '../redux/theme/themeSlice'

const Header = () => {
  const path = useLocation().pathname;
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.user.currentUser);
  const theme = useSelector(state => state.theme);

  const handleSignOut = async() => {
    try {
      const res = await fetch('/server/user/signout', {
        method: 'POST'
      })
      const data = res.json()
      if(!res.ok){
        console.log(data.message);
      } else{
        dispatch(signOutSuccess());
        window.location('/');
      }
    } catch (error) {
      
    }
  }

  return (
    <Navbar className='border-b-2'>
      <Link to = '/' className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
      <div className='px-2 py-1 bg-gradient-to-br from-purple-600 to-cyan-500 rounded-lg text-white' >
        LearnLabs
      </div>
      </Link>
      <form>
        <TextInput 
          type='text'
          placeholder='search...'
          rightIcon={AiOutlineSearch}
          className='hidden lg:inline'
        />
      </form>
      <Button className='w-12 h-10 lg:hidden' color= 'gray' pill>
        <AiOutlineSearch />
      </Button>
      <div className="flex gap-2 md:order-2">
        <Button className='w-12 h-10 hidden sm:inline' color='gray' pill onClick={() => dispatch(toggleTheme())}>
          {theme === 'dark' ? <FaMoon /> : <FaSun />}
        </Button>
        {currentUser ? (
          <Dropdown arrowIcon={false}
            inline
            label={
              <Avatar alt='user' img={currentUser.profilePic} rounded/>
            }
          >
            <Dropdown.Header>
              <span className='block text-sm'>@{currentUser.username}</span>
              <Dropdown.Divider />
              <span className='block text-sm font-medium truncate'>{currentUser.email}</span>
            </Dropdown.Header>
            <Dropdown.Divider />
            <Dropdown.Item>
              Profile
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleSignOut}>
              SignOut
            </Dropdown.Item>
          </Dropdown>
        ) : 
        
        (
          <Link to='/SignIn'>
          <Button gradientDuoTone='purpleToBlue' outline>
            SignIn
          </Button>
          </Link>
        )}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === '/'} as={'div'}>
          <Link to='/'>Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/about'} as={'div'}>
          <Link to='/about'>About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === '/projects'} as={'div'}>
          <Link to='/projects'>Projects</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header