import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Statistics from "./components/Statistics";
import ContinueLearning from "./components/ContinueLearning";
import CourseGrid from "./components/CourseGrid";
import Footer from "./components/Footer";
import CourseDetailsModal from "./components/CourseDetailsModal";

function App() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const scrollToCourses = () => {
    document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar />
      <main>
        <HeroSection onExplore={scrollToCourses} />
        <Statistics />
        <ContinueLearning onViewDetails={setSelectedCourse} />
        <CourseGrid onViewDetails={setSelectedCourse} />
      </main>
      <Footer />
      <CourseDetailsModal
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
        onContinue={() => setSelectedCourse(null)}
      />
    </>
  );
}

export default App;
