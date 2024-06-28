import React from 'react'
import { Footer } from 'flowbite-react'
import { Link } from 'react-router-dom'
import { BsFacebook, BsTwitterX, BsGithub, BsInstagram, BsLinkedin, BsDribbble } from "react-icons/bs";

const FooterCom = () => {
  return (
    <Footer container className='border border-t-8 border-cyan-500'>
        <div className="w-full mx-auto max-w-7xl">
            <div className="grid w-full justify-between sm:flex md:grid-cols-1">
                <div className="mt-5">
                <Link to = '/' className='font-bold dark:text-white text-xl'>
                    <div className='text-gray-200 text-center px-2 py-1 bg-gradient-to-br from-purple-600 to-cyan-500 rounded-lg' >
                        LearnLabs
                    </div>
                </Link>
                </div>
                <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
                    <div>
                    <Footer.Title title='About'/>
                    <Footer.LinkGroup col>
                        <Footer.Link
                            href='/about'
                            target='_blank'
                            rel='noopener noreferer'
                        >
                            LearnLabs
                        </Footer.Link>
                        <Footer.Link
                            href='/'
                            target='_blank'
                            rel='noopener noreferer'
                        >
                            All Blogs
                        </Footer.Link>
                    </Footer.LinkGroup>
                    </div>
                    <div>
                    <Footer.Title title='Follow us'/>
                    <Footer.LinkGroup col>
                        <Footer.Link
                            href='https://github.com/nafees-alam'
                            target='_blank'
                            rel='noopener noreferer'
                        >
                            GitHub
                        </Footer.Link>
                        <Footer.Link
                            href='#'
                        >
                            Discord
                        </Footer.Link>
                    </Footer.LinkGroup>
                    </div>
                    <div>
                    <Footer.Title title='Legal'/>
                    <Footer.LinkGroup col>
                        <Footer.Link
                            href='#'
                        >
                            Privacy Policy
                        </Footer.Link>
                        <Footer.Link
                            href='#'
                        >
                            Terms &amp; conditions
                        </Footer.Link>
                    </Footer.LinkGroup>
                    </div>
                    
                </div>
            </div>
            <Footer.Divider />
            <div className="w-full sm:flex sm:items-center sm:justify-between">
                <Footer.Copyright 
                    href='#'
                    by='LearnLabs'
                    year={new Date().getFullYear()}
                />
                <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
                    <Footer.Icon href='#' icon={BsFacebook}/>
                    <Footer.Icon href='#' icon={BsTwitterX}/>
                    <Footer.Icon href='#' icon={BsGithub}/>
                    <Footer.Icon href='#' icon={BsInstagram}/>
                    <Footer.Icon href='#' icon={BsDribbble}/>
                </div>
            </div>

        </div>
    </Footer>
  )
}

export default FooterCom