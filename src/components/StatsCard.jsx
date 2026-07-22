function StatsCard({ title, value, icon }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition duration-300">

      <div className="flex justify-between items-center">

        <div>
          <h2 className="text-4xl font-bold text-blue-600">
            {value}
          </h2>

          <p className="text-gray-500 mt-2">
            {title}
          </p>
        </div>

        <div className="text-5xl text-blue-500">
          {icon}
        </div>

      </div>

    </div>
  );
}

export default StatsCard;