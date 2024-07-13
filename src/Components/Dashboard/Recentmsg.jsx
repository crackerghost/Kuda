const RecentMessages = () => {
    const messages = [
      { image: '/assets/Dashboard/photo.png', name: 'James Benny', message: 'Hey, Let me know if you\'re still available...' },
      { image: '/assets/Dashboard/photo.png', name: 'William Chyntia', message: 'Okay thanks' },
      { image: '/assets/Dashboard/photo.png', name: 'Henry David', message: 'Alright I\'ll get back to you ASAP' },
      { image: '/assets/Dashboard/photo.png', name: 'Charlotte Flair', message: 'Sounds good buddy' },
    ];
  
    return (
      <div className="p-4 bg-white shadow-md rounded-2xl h-auto">
        <h2 className="text-lg font-semibold mb-4">Recent Messages</h2>
        <ul>
          {messages.map((msg, index) => (
            <li key={index} className="mb-4">
              <p className="font-semibold">{msg.name}</p>
              <p className="text-gray-500">{msg.message}</p>
            </li>
          ))}
        </ul>
        <div className="bg-white h-[50vh]">
          <h2 className="text-lg font-semibold mb-2">Map View</h2>
          <div className="h-5/6 bg-gray-200 rounded">
          <div id="map" className="w-full h-full">
            
          </div>
          </div>
        </div>
      </div>
    );
  };
  export default RecentMessages;