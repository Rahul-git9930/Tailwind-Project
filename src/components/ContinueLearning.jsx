import { courses } from "../data/courses";

function ContinueLearning({ onViewDetails }) {
  const inProgressCourses = courses.filter(
    (course) => course.status === "In Progress"
  );

  return (
    <section id="learning" className="max-w-7xl mx-auto px-6 py-12 scroll-mt-24">

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

              <div className="mt-6 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => onViewDetails(course)}
                  className="rounded-lg bg-green-600 py-2 text-white transition hover:bg-green-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 active:scale-95"
                >
                  Continue
                </button>
                <button
                  type="button"
                  onClick={() => onViewDetails(course)}
                  className="rounded-lg border border-slate-300 py-2 font-medium text-slate-700 transition hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:scale-95"
                >
                  Details
                </button>
              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default ContinueLearning;
