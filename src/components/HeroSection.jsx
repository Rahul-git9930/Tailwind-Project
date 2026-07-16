function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 text-white">

      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between gap-12">

        <div className="flex-1">

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Learn Anytime,
            <br />
            Anywhere 🚀
          </h1>

          <p className="mt-6 text-lg text-blue-100">
            Join thousands of students learning modern technologies and
            building successful careers.
          </p>

          <button className="mt-8 bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:scale-105 transition duration-300">
            Explore Courses
          </button>

        </div>

        <div className="flex-1 flex justify-center">

          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700"
            alt="Students"
            className="rounded-3xl shadow-2xl"
          />

        </div>

      </div>

    </section>
  );
}

export default HeroSection;