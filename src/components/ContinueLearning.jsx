import { courses } from "../data/courses";

function ContinueLearning() {
  const inProgressCourses = courses.filter(
    (course) => course.status === "In Progress"
  );

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">

      <h2 className="text-3xl font-bold mb-8">
        Continue Learning
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {inProgressCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >

            {/* Image */}
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-5">

              <h3 className="text-xl font-bold">
                {course.title}
              </h3>

              <p className="text-gray-600 mt-2">
                {course.description}
              </p>

              {/* Progress */}
              <div className="mt-5">

                <div className="flex justify-between mb-2">
                  <span>Progress</span>
                  <span>{course.progress}%</span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-3">

                  <div
                    className="bg-blue-600 h-3 rounded-full"
                    style={{ width: `${course.progress}%` }}
                  ></div>

                </div>

              </div>

              <button className="mt-6 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
                Continue
              </button>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default ContinueLearning;