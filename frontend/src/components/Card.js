const Card = ({ title, value }) => {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-2xl mt-2">{value}</p>
    </div>
  );
};

export default Card;
