
import { Link } from 'react-router-dom';

const LeftSidebar = ({ userData }) => {
    return (
      <div className="bg-blue-900 text-white w-60 p-4 flex flex-col rounded-2xl m-4">
        <div className="mb-8">
          <img
            className="rounded-full w-24 h-24 mx-auto"
            src="/assets/Dashboard/photo.png"
            alt="User"
          />
          <h2 className="text-center mt-4 text-2xl">{userData ? `${userData.firstName} ${userData.lastName}` : 'Loading...'}</h2>
          <h2 className="text-center mt-2 text-gray-400 mb-4">{userData ? userData.email : 'Loading...'}</h2>
          <h2 className="text-center mt-2 text-gray-400 mb-4">{userData ? userData.cityName : 'Loading...'}</h2>
        </div>
        <ul>
        <li className="mb-5">
          <Link to="/buyer" className="flex items-center p-2 rounded hover:border hover:border-black bg-black transition duration-300">
            <span className="material-symbols-outlined mr-2">dashboard</span> Dashboard
          </Link>
        </li>
        <li className="mb-5">
          <Link to="/inbox" className="flex items-center p-2 rounded hover:border hover:border-black hover:bg-black transition duration-300">
            <span className="material-symbols-outlined mr-2">sms</span> Inbox
          </Link>
        </li>
        <li className="mb-5">
          <Link to="/add-items" className="flex items-center p-2 rounded hover:border hover:border-black hover:bg-black transition duration-300">
            <span className="material-symbols-outlined mr-2">settings</span> Add Items
          </Link>
        </li>
        </ul>
      </div>
    );
  };
  
  export default LeftSidebar;
  