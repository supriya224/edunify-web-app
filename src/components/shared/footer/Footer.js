import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="flex items-end w-full text-white ">
      <footer className="w-full  bg-gradient-to-b from-sky-800 to-purple-900  body-font">
        <div className="container flex flex-col xl:gap-64 flex-wrap px-5 py-12 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
          <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
            <h3>Subscribe to our Newsletter</h3>
            <p className="mt-2 text-sm ">
              Get updated about admission forms, deadlines and articles to help
              you through the process.
            </p>
            <div className="flex">
              <input
                type="text"
                placeholder="Enter emial here"
                className="border p-3 mr-2"
              />
              <button className="bg-green-300 p-3" type="button">
                Send
              </button>
            </div>
          </div>
          <div className="flex flex-wrap lg:gap-32 flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium tracking-widest  uppercase title-font">
                Platform
              </h2>
              <nav className="mb-10 list-none">
                <li className="mt-3">
                  <a className=" cursor-pointer">Terms &amp; Privacy</a>
                </li>
                <li className="mt-3">
                  <a className=" cursor-pointer ">Pricing</a>
                </li>
                <li className="mt-3">
                  <a className=" cursor-pointer ">FAQ</a>
                </li>
              </nav>
            </div>
            <div className="w-full px-4 lg:w-1/4 md:w-1/2">
              <h2 className="mb-3 text-sm font-medium tracking-widest  uppercase title-font">
                Contact
              </h2>
              <nav className="mb-10 list-none">
                <li className="mt-3">
                  <a className=" cursor-pointer ">Send a Message</a>
                </li>
                <li className="mt-3">
                  <a className=" cursor-pointer 0">Request a Quote</a>
                </li>
                <li className="mt-3">
                  <a className=" cursor-pointer ">+123-456-7890</a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="">
          <div className="container px-5 py-4 mx-auto flex justify-between">
            <Image
              width={100}
              src="https://uniformapp.in/images/small_logo.png"
              alt=""
              height={100}
            />
            <h3>copywrite:  Uniform Ventures Pvt. Ltd.</h3>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
