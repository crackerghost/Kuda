import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/");
  };

  return (
    <header className="w-full bg-[--bgColor--] z-20 relative">
      <nav className="w-11/12 mx-auto py-4 ">
        <div className="container mx-auto flex justify-between items-center px-6">
          <div className="text-2xl font-semibold text-gray-800">
            <img src="/assets/Landingpage/Logo.svg" alt="Logo" />
          </div>
          <div className="space-x-6 w-[50%] flex justify-center">
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
          <div className="space-x-4">
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
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
