import React from 'react';

const Card = ({ Name, Address, Accept, Reject }) => (
  <div className="bg-white p-4 rounded-2xl flex flex-col shadow-md mb-2">
    <div>
      <h3 className="text-3xl font-semibold">{Name}</h3>
      <p className="text-2xl text-blue-500 mt-2">{Address}</p>
    </div>
    <div>
      <button className='text-xl text-white py-3 px-7 mt-3 rounded-full border-green-500 bg-green-500'>{Accept}</button>
      <button className='text-xl text-white py-3 px-8 ml-5 rounded-full border-red-600 bg-red-600'>{Reject}</button>
    </div>
  </div>
);

const MainContentBuy = ({ userData }) => (
  <div className="flex-1 p-4 overflow-y-auto h-auto w-full">
    <header className='text-2xl w-full m-3 '>
      <nav>
        <ul>
          <a className='text-white hover:font-[500] hover:text-white hover:text-[--btnColor--] hover:underline border bg-[--btnColor--] px-6 py-2 rounded-xl'>Buy</a>
        </ul>
      </nav>
    </header>
    <div className='flex h-auto'>
      <div className="flex-1 gap-4 mt-4 ml-6 h-1/4 w-2/3 ">
        {userData.requests.map((request, index) => (
          <Card
            key={index}
            Name={`Request from ${request.requesterEmail}`}
            Address={`Location: ${request.requesterLocation.coordinates[1]}, ${request.requesterLocation.coordinates[0]}`}
            Accept="Accept"
            Reject="Reject"
          />
        ))}
      </div>
    </div>
  </div>
);

export default MainContentBuy;
