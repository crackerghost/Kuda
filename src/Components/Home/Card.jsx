const Card = ({ title, description, icon }) => (
  <div className="flex items-start space-x-4 p-4">
    <img src={icon} alt={`${title} icon`} className="w-12 h-12" />
    <div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  </div>
);

export default Card;
