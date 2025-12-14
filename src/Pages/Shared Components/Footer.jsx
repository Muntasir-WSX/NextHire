import React from 'react';
import { FaBriefcase, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';


const Footer = () => {
    return (
       
        <footer className="footer sm:footer-horizontal bg-gray-800 text-gray-300 p-10 mt-12">
            
          
            <aside>
                <div className="text-3xl font-extrabold text-white mb-2">
                    <FaBriefcase className="inline text-violet-500 mr-2" />
                    <span className="text-violet-500">Next</span>
                    <span className="text-indigo-400">Hire</span>
                </div>
                <p className='text-sm text-gray-400'>
                    NextHire Technologies Ltd.
                    <br />
                    Connecting top talent with the future of work.
                    <br />
                    © {new Date().getFullYear()} All rights reserved.
                </p>
                <div className="mt-4 space-y-1 text-sm">
                    <p className="flex items-center"> <FaMapMarkerAlt className="mr-2 text-violet-400" /> 123 Job Lane, Tech City, Global</p>
                    <p className="flex items-center"> <FaEnvelope className="mr-2 text-violet-400" /> support@nexthire.com</p>
                    <p className="flex items-center"> <FaPhone className="mr-2 text-violet-400" /> +01 234 567 890</p>
                </div>
            </aside>
            
           
            <nav>
                <h6 className="footer-title text-white border-b border-violet-500 pb-1 mb-2">Services</h6>
                <a className="link link-hover text-gray-400 hover:text-violet-300">Job Posting</a>
                <a className="link link-hover text-gray-400 hover:text-violet-300">Resume Review</a>
                <a className="link link-hover text-gray-400 hover:text-violet-300">Company Profiles</a>
                <a className="link link-hover text-gray-400 hover:text-violet-300">Career Guidance</a>
            </nav>
            
           
            <nav>
                <h6 className="footer-title text-white border-b border-violet-500 pb-1 mb-2">Company</h6>
                <a className="link link-hover text-gray-400 hover:text-violet-300">About NextHire</a>
                <a className="link link-hover text-gray-400 hover:text-violet-300">Team</a>
                <a className="link link-hover text-gray-400 hover:text-violet-300">Open Roles</a>
                <a className="link link-hover text-gray-400 hover:text-violet-300">Blog & News</a>
            </nav>
            
           
            <nav>
                <h6 className="footer-title text-white border-b border-violet-500 pb-1 mb-2">Legal</h6>
                <a className="link link-hover text-gray-400 hover:text-violet-300">Terms of Service</a>
                <a className="link link-hover text-gray-400 hover:text-violet-300">Privacy Policy</a>
                <a className="link link-hover text-gray-400 hover:text-violet-300">Cookie Settings</a>
            </nav>
        </footer>
    );
};

export default Footer;