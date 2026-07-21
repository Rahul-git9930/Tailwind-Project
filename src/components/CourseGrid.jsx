import { useState } from "react";
import { courses } from "../data/courses";
import CourseCard from "./CourseCard";
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";

function CourseGrid({ onViewDetails }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || course.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <section id="courses" className="max-w-7xl mx-auto px-6 py-12 scroll-mt-24">
      <h2 className="text-3xl font-bold mb-6">
        Explore Courses
      </h2>

      {/* Search */}
      <SearchBar search={search} setSearch={setSearch} />

      {/* Category Buttons */}
      <CategoryFilter
        category={category}
        setCategory={setCategory}
      />

      {/* Course Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">

        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onViewDetails={onViewDetails}
            />
          ))
        ) : (
          <p className="text-red-500 text-lg">
            No courses found.
          </p>
        )}

      </div>
    </section>
  );
}

export default CourseGrid;
