function CategoryFilter({ category, setCategory }) {
  const categories = [
    "All",
    "Development",
    "Cloud",
    "Design",
    "DevOps",
  ];

  return (
    <div className="flex flex-wrap gap-4 mt-6">
      {categories.map((item) => (
        <button
          key={item}
          onClick={() => setCategory(item)}
          className={`px-5 py-2 rounded-lg transition ${
            category === item
              ? "bg-blue-600 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;