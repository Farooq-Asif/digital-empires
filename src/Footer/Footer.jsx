import React from 'react';
import Copyright from './Copyright';
import icon from '../Assets/Images/star-badge.png'
const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
          <div className="flex flex-col items-start space-y-4">
            <div className="flex items-center space-x-2">
              <img src={icon} alt="Logo" className="w-8 h-8 bg-white rounded" /> {/* Replace with actual logo path */}
              <span className="text-xl font-semibold">Digital Empires</span>
            </div>
            <div className="flex space-x-4">
              <a href="#" aria-label="Peace" className="hover:text-gray-400">✌</a>
              <a href="#" aria-label="LinkedIn" className="hover:text-gray-400">LinkedIn</a>
              <a href="#" aria-label="Twitter" className="hover:text-gray-400">Twitter</a>
              <a href="#" aria-label="GitHub" className="hover:text-gray-400">GitHub</a>
              <a href="#" aria-label="Dribbble" className="hover:text-gray-400">Dribbble</a>
            </div>
          </div>

          <div className="flex space-x-12">
            <div>
              <h4 className="font-semibold">Demand.io</h4>
              <ul className="space-y-2">
                <li><a href="#careers" className="hover:text-gray-400">Careers</a></li>
                <li><a href="#blog" className="hover:text-gray-400">Inside Demand blog</a></li>
                <li><a href="#newsroom" className="hover:text-gray-400">Newsroom</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Products</h4>
              <ul className="space-y-2">
                <li><a href="#simplycodes" className="hover:text-gray-400">Simplycodes</a></li>
                <li><a href="#productai" className="hover:text-gray-400">Product.AI</a></li>
                <li><a href="#dealspotr" className="hover:text-gray-400">Dealspotr</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Connect</h4>
              <ul className="space-y-2">
                <li><a href="#join" className="hover:text-gray-400">Join us</a></li>
                <li><a href="#contact" className="hover:text-gray-400">Contact us</a></li>
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
