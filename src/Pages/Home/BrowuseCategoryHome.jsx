import React from "react";
import {
  FaFileAlt,
  FaChartLine,
  FaDollarSign,
  FaUserTie,
  FaBoxOpen,
  FaSearch,
  FaLightbulb,
  FaTasks,
  FaLock,
} from "react-icons/fa";

const categories = [
  {
    title: "Content Writer",
    jobs: 142,
    icon: FaFileAlt,
    color: "text-indigo-600",
  },
  {
    title: "Marketing & Sale",
    jobs: 1526,
    icon: FaChartLine,
    color: "text-violet-600",
  },
  { title: "Finance", jobs: 168, icon: FaDollarSign, color: "text-indigo-600" },
  {
    title: "Human Resource",
    jobs: 165,
    icon: FaUserTie,
    color: "text-violet-600",
  },
  {
    title: "Retail & Products",
    jobs: 563,
    icon: FaBoxOpen,
    color: "text-indigo-600",
  },
  {
    title: "Market Research",
    jobs: 532,
    icon: FaSearch,
    color: "text-violet-600",
  },
  {
    title: "Customer Help",
    jobs: 185,
    icon: FaLightbulb,
    color: "text-indigo-600",
  },
  { title: "Software", jobs: 1856, icon: FaTasks, color: "text-violet-600" },
  { title: "Management", jobs: 945, icon: FaTasks, color: "text-indigo-600" },
  {
    title: "Security Analyst",
    jobs: 254,
    icon: FaLock,
    color: "text-violet-600",
  },
];

const CategoryCard = ({ title, jobs, icon: Icon, color }) => {
  return (
    <div
      className="p-6 bg-white rounded-xl shadow-lg border border-gray-100 
                    transform transition duration-300 hover:scale-[1.02] hover:shadow-2xl cursor-pointer"
    >
      <div className={`text-4xl ${color} mb-3`}>
        <Icon />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-1">{title}</h3>
      <p className="text-sm text-gray-500 font-medium">{jobs} Jobs Available</p>
    </div>
  );
};

const BrowuseCategoryHome = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-2">
            Browse by <span className="text-violet-700">category</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Find the job that's perfect for you, about{" "}
            <span className="font-semibold text-indigo-600">
              800+ new jobs everyday
            </span>
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              title={category.title}
              jobs={category.jobs}
              icon={category.icon}
              color={category.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrowuseCategoryHome;
