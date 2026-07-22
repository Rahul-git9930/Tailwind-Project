import StatsCard from "./StatsCard";
import {
  FaBook,
  FaCheckCircle,
  FaSpinner,
  FaAward,
} from "react-icons/fa";

function Statistics() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-8">
        Learning Statistics
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <StatsCard
          title="Total Courses"
          value="12"
          icon={<FaBook className="text-blue-600" />}
        />

        <StatsCard
          title="Completed"
          value="7"
          icon={<FaCheckCircle className="text-green-600" />}
        />

        <StatsCard
          title="In Progress"
          value="4"
          icon={<FaSpinner className="text-yellow-500" />}
        />

        <StatsCard
          title="Certificates"
          value="3"
          icon={<FaAward className="text-purple-600" />}
        />

      </div>
    </section>
  );
}

export default Statistics;