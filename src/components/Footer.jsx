import React from "react";
import { Link } from "react-router-dom";
import { TrendingUp, Github, Linkedin, Twitter, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/*Grid*/}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 gap-y-8 md:gap-8 py-10 max-w-sm mx-auto sm:max-w-3xl lg:max-w-full">
          <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
            <a
              href="https://optiseo.vercel.app/"
              className="flex justify-center lg:justify-start"
            >
              <TrendingUp className="w-8 h-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-indigo-600">
                OptiSEO
              </span>
            </a>
            <p className="py-8 text-sm text-gray-500 lg:max-w-xs text-center lg:text-left">
              Optimize Your Website with Our Powerful SEO Tools. Unlock the
              Power of SEO with OptiSEO.
            </p>
            <a
              href="/tools"
              className="py-2.5 px-5 h-9 block w-fit bg-indigo-600 rounded-full shadow-sm text-xs text-white mx-auto transition-all  duration-500 hover:bg-indigo-700 lg:mx-0"
            >
              Get Started
            </a>
          </div>
          {/*End Col*/}
          <div className="lg:mx-auto text-left ">
            <h4 className="text-lg text-gray-900 font-medium mb-7">OptiSEO</h4>
            <ul className="text-sm  transition-all duration-500">
              <li className="mb-6">
                <a href="/" className="text-gray-600 hover:text-gray-900">
                  Home
                </a>
              </li>
              <li className="mb-6">
                <a href="/about" className=" text-gray-600 hover:text-gray-900">
                  About
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className=" text-gray-600 hover:text-gray-900"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/*End Col*/}
          <div className="lg:mx-auto text-left ">
            <h4 className="text-lg text-gray-900 font-medium mb-7">
              SEO Tools
            </h4>
            <ul className="text-sm  transition-all duration-500">
              <li className="mb-6">
                <a
                  href="/open-graph-checker"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Open Graph Checker
                </a>
              </li>
              <li className="mb-6">
                <a
                  href="/keyword-suggestion-tool"
                  className=" text-gray-600 hover:text-gray-900"
                >
                  Keyword Suggestion
                </a>
              </li>
              <li>
                <a
                  href="/domain-age-checker"
                  className=" text-gray-600 hover:text-gray-900"
                >
                  Domain Name Age
                </a>
              </li>
            </ul>
          </div>
          {/*End Col*/}
          <div className="lg:mx-auto text-left ">
            <h4 className="text-lg text-gray-900 font-medium mb-7">Support</h4>
            <ul className="text-sm  transition-all duration-500">
              <li className="mb-6">
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Customer Support
                </a>
              </li>
              <li className="mb-6">
                <a href="#" className=" text-gray-600 hover:text-gray-900">
                  Terms &amp; Conditions
                </a>
              </li>
              <li>
                <a href="#" className=" text-gray-600 hover:text-gray-900">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          {/*End Col*/}
          <div className="lg:mx-auto text-left ">
            <h4 className="text-lg text-gray-900 font-medium mb-7">
              Subscribe
            </h4>
            <p className="text-sm text-gray-500 leading-6 mb-7">
              Subscribe to get the latest news from us
            </p>
            <a
              href="#"
              className="flex items-center justify-center gap-2 border border-indigo-600 rounded-full py-3 px-6 w-fit lg:mx-0  text-sm text-indigo-600 font-semibold transition-all duration-500 hover:bg-indigo-50"
            >
              Subscribe
              <svg
                width={15}
                height={12}
                viewBox="0 0 15 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.25 6L13.25 6M9.5 10.5L13.4697 6.53033C13.7197 6.28033 13.8447 6.15533 13.8447 6C13.8447 5.84467 13.7197 5.71967 13.4697 5.46967L9.5 1.5"
                  stroke="#4F46E5"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
        {/*Grid*/}
        <div className="py-7 border-t border-gray-200">
          <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
            <span className="text-sm text-gray-500 ">
              ©<a href="https://optiseo.vercel.app/">OptiSEO</a> 2024, All
              rights reserved.
            </span>
            <div className="flex mt-4 space-x-4 sm:justify-center lg:mt-0 ">
              <a
                href="https://github.com/subhadipbhowmik"
                target="_blank"
                className="w-8 h-8 rounded-full transition-all duration-500 flex justify-center items-center bg-black"
              >
                <Github className="w-4 h-4 text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/shubhadip-bhowmik/"
                target="_blank"
                className="relative w-8 h-8 rounded-full transition-all duration-500 flex justify-center items-center bg-[#0077B5]  
                  "
              >
                <Linkedin className="w-4 h-4 text-white" />
              </a>
              <a
                href="https://x.com/myselfshubhadip"
                target="_blank"
                className="relative w-8 h-8 rounded-full transition-all duration-500 flex justify-center items-center bg-[#337FFF]  hover:bg-gray-900 "
              >
                <Twitter className="w-4 h-4 text-white" />
              </a>
              <a
                href="https://shubhadipbhowmik.vercel.app/"
                target="_blank"
                className="relative w-8 h-8 rounded-full transition-all duration-500 flex justify-center items-center bg-[#FF0000]  hover:bg-gray-900 "
              >
                <Globe className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
