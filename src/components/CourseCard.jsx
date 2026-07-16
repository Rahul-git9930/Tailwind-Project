function CourseCard({ course }) {
  const statusStyles = {
    Completed: "bg-green-100 text-green-700",
    "In Progress": "bg-yellow-100 text-yellow-700",
    "Not Started": "bg-gray-100 text-gray-700",
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">

      {/* Course Image */}
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-56 object-cover transition duration-300 hover:scale-105"
      />

      {/* Card Content */}
      <div className="p-6">

        {/* Category */}
       <p className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
          {course.category}
        </p>

        {/* Title */}
        <h2 className="text-2xl font-bold mt-3 text-slate-800">
          {course.title}
        </h2>

        {/* Description */}
        <p className="text-gray-500 mt-3 leading-relaxed">
          {course.description}
        </p>

        {/* Status */}
        <div className="mt-4">
          <span
            className={`px-4 py-1 rounded-full text-sm font-semibold shadow ${statusStyles[course.status]}`}
          >
            {course.status}
          </span>
        </div>

        {/* Progress */}
        <div className="mt-5">

          <div className="flex justify-between mb-2">
            <span className="font-medium">Progress</span>
            <span>{course.progress}%</span>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-3">

          <div
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full"
              style={{ width: `${course.progress}%` }}
          ></div>

          </div>

        </div>

        {/* Button */}
        <button className="mt-6 w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:scale-105 transition duration-300">
          Continue Learning
        </button>

      </div>

    </div>
  );
}

export default CourseCard;