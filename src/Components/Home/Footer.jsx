import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-50 py-8">
      <div className="container mx-auto px-8 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold">WasteWise</h2>
        </div>
        <ul className="flex mb-4 md:mb-0">
          <li className="mx-2">
            <a href="#" className="text-sm text-gray-700 hover:text-gray-900">
              Home
            </a>
          </li>
          <li className="mx-2">
            <a href="#" className="text-sm text-gray-700 hover:text-gray-900">
              Features
            </a>
          </li>
          <li className="mx-2">
            <a href="#" className="text-sm text-gray-700 hover:text-gray-900">
              Service
            </a>
          </li>
          <li className="mx-2">
            <a href="#" className="text-sm text-gray-700 hover:text-gray-900">
              Listed
            </a>
          </li>
          <li className="mx-2">
            <a href="#" className="text-sm text-gray-700 hover:text-gray-900">
              Contact
            </a>
          </li>
        </ul>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-gray-700 hover:text-gray-900">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            <FaTwitter size={24} />
          </a>
        </div>
      </div>
      <div className="container mx-auto px-8 mt-8 border-t border-gray-700 pt-4 text-center">
        <p className="text-sm text-gray-700">
          &copy; 2024 WasteWise All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
