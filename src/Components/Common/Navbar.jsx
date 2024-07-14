import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
     
    }
  }, [navigate]); // Ensure the effect runs only once on mount

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full bg-[--bgColor--] z-20 relative">
      <nav className="w-11/12 mx-auto py-4">
        <div className="container mx-auto flex justify-between items-center px-6">
          <Link to="/" className="text-2xl font-semibold text-gray-800">
            <img src="/assets/Wastewise.svg" alt="Logo" />
          </Link>
          <div className="hidden md:flex space-x-6 w-[50%] justify-center">
            <Link to="#features" className="text-gray-600 hover:text-gray-800">
              Features
            </Link>
            <Link to="#services" className="text-gray-600 hover:text-gray-800">
              Service
            </Link>
            <Link to="#listed" className="text-gray-600 hover:text-gray-800">
              Listed
            </Link>
            <Link to="#contact" className="text-gray-600 hover:text-gray-800">
              Contact
            </Link>
          </div>
          <div className="hidden md:flex space-x-4">
            {!isAuthenticated ? (
              <>
                <Link to="/register">
                  <button className="px-4 py-2 text-white bg-[--btnColor--] rounded-xl w-[100px] h-[40px]">
                    Sign up
                  </button>
                </Link>
                <Link to="/login">
                  <button className="px-4 py-2 text-blue-900 border border-blue-900 rounded-xl w-[100px] h-[40px]">
                    Login
                  </button>
                </Link>
              </>
            ) : (
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-white bg-red-600 rounded-xl w-[100px] h-[40px]"
              >
                Logout
              </button>
            )}
          </div>
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-gray-800">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden flex flex-col items-center space-y-4 mt-4">
            <Link to="#features" className="text-gray-600 hover:text-gray-800">
              Features
            </Link>
            <Link to="#services" className="text-gray-600 hover:text-gray-800">
              Service
            </Link>
            <Link to="#listed" className="text-gray-600 hover:text-gray-800">
              Listed
            </Link>
            <Link to="#contact" className="text-gray-600 hover:text-gray-800">
              Contact
            </Link>
            {!isAuthenticated ? (
              <>
                <Link to="/register">
                  <button className="px-4 py-2 text-white bg-[--btnColor--] rounded-xl w-[100px] h-[40px]">
                    Sign up
                  </button>
                </Link>
                <Link to="/login">
                  <button className="px-4 py-2 text-blue-900 border border-blue-900 rounded-xl w-[100px] h-[40px]">
                    Login
                  </button>
                </Link>
              </>
            ) : (
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-white bg-red-600 rounded-xl w-[100px] h-[40px]"
              >
                Logout
              </button>
            )}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
