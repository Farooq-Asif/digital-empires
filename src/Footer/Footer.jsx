import React from 'react';
import Copyright from './Copyright';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
          <div className="flex flex-col items-start space-y-4">
            <div className="flex items-center">
            <span className="text-xl  font-extrabold">S<span className="text-[hsl(358.36,95.63%,44.9%)]">KILLPRO</span> LTD
            </span>
            </div>
            <div className="flex space-x-4">
              <Link to="https://www.linkedin.com/company/skillpro-ltd" aria-label="LinkedIn" className="hover:text-gray-400">LinkedIn</Link>
            </div>
          </div>

          <div className="flex space-x-12">
            <div>
              <h4 className="font-semibold">SKILLPRO LTD</h4>
              <ul className="space-y-2">
                <li><a href="#careers" className="hover:text-gray-400">Careers</a></li>
                <li><a href="#blog" className="hover:text-gray-400"> SKILLPRO LTD blog</a></li>
                <li><a href="#newsroom" className="hover:text-gray-400">Newsroom</a></li>
              </ul>
            </div>
            <div>
              {/* <h4 className="font-semibold">Products</h4>
              <ul className="space-y-2">
                <li><a href="#simplycodes" className="hover:text-gray-400">Best Cart Offer</a></li>
                <li><a href="#productai" className="hover:text-gray-400">Sana Blogs</a></li>
                <li><a href="#dealspotr" className="hover:text-gray-400">Many Best Promo
                  </a></li>
              </ul> */}
            </div>
            <div>
              <h4 className="font-semibold">Connect</h4>
              <ul className="space-y-2">
                <li><a href="#join" className="hover:text-gray-400">Join us</a></li>
                <li><Link to="/contactus" className="hover:text-gray-400">Contact us</Link></li>
              </ul>
            </div>
          </div>
        </div>

      <Copyright/>
      </div>
    </footer>
  );
}

export default Footer;
