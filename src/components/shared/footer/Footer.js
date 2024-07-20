import React from 'react'

const Footer = () => {
  return (
    <div className="flex items-end w-full bg-white">
    
        <footer className="w-full text-gray-700 bg-gray-100 body-font">
            <div
                className="container flex flex-col gap-64 flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
                <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
                   <h3>
                   Subscribe to our Newsletter
                   </h3>
                    <p className="mt-2 text-sm text-gray-500">Get updated about admission forms, deadlines and articles to help you through the process.</p>
                    <div>
                    <input type='text' placeholder='Enter emial here' className='border p-3 mr-2'/>
                     <button>Send</button>
                    </div>
                </div>
                <div className="flex flex-wrap gap-32 flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
              
                    <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                        <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">Platform
                        </h2>
                        <nav className="mb-10 list-none">
                            <li className="mt-3">
                                <a className="text-gray-500 cursor-pointer hover:text-gray-900">Terms &amp; Privacy</a>
                            </li>
                            <li className="mt-3">
                                <a className="text-gray-500 cursor-pointer hover:text-gray-900">Pricing</a>
                            </li>
                            <li className="mt-3">
                                <a className="text-gray-500 cursor-pointer hover:text-gray-900">FAQ</a>
                            </li>
                        </nav>
                    </div>
                    <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                        <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">Contact</h2>
                        <nav className="mb-10 list-none">
                            <li className="mt-3">
                                <a className="text-gray-500 cursor-pointer hover:text-gray-900">Send a Message</a>
                            </li>
                            <li className="mt-3">
                                <a className="text-gray-500 cursor-pointer hover:text-gray-900">Request a Quote</a>
                            </li>
                            <li className="mt-3">
                                <a className="text-gray-500 cursor-pointer hover:text-gray-900">+123-456-7890</a>
                            </li>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="bg-gray-300">
                <div className="container px-5 py-4 mx-auto">
                    <p className="text-sm text-gray-700 capitalize xl:text-center">© 2020 All rights reserved </p>
                </div>
            </div>
        </footer>
    
    </div>
  )
}

export default Footer