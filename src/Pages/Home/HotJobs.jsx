import React from "react";
import { useNavigate } from "react-router-dom";
import HotJobsCard from "../Shared Components/HotJobsCard";

// jobsPromise এর বদলে এখন সরাসরি jobs রিসিভ করবে
const HotJobs = ({ jobs }) => {
  const navigate = useNavigate();

  // নিশ্চিত করা হচ্ছে যে jobs একটি অ্যারে, নাহলে খালি অ্যারে নিবে
  const safeJobs = Array.isArray(jobs) ? jobs : [];

  // প্রথম ৮টি জব দেখানোর জন্য
  const trendingJobs = safeJobs.slice(0, 8);

  const handleViewAll = () => {
    navigate("/browsejobs");
  };

  // যদি ডেটা অ্যারে না হয় বা কোনো সমস্যা থাকে
  if (!Array.isArray(jobs)) {
    return (
      <div className="py-16 text-center">
        <p className="text-red-500 font-medium">
          Unable to load jobs. Please check your connection.
        </p>
      </div>
    );
  }

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-2">
            <span className="text-violet-700">Trending Jobs</span> for You
          </h2>
          <p className="text-gray-600 text-lg">
            Opportunities are waiting. Discover the latest roles that match your
            profile.
          </p>
        </div>

        {/* জব লিস্ট গ্রিড */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {trendingJobs.map((job) => (
            <HotJobsCard key={job._id} job={job} />
          ))}
        </div>

        {/* View All বাটন */}
        {safeJobs.length > 8 && (
          <div className="text-center mt-12">
            <button
              onClick={handleViewAll}
              className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md transition duration-300"
            >
              View All Jobs ({safeJobs.length})
            </button>
          </div>
        )}

        {/* যদি কোনো জব না থাকে */}
        {safeJobs.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            No jobs available right now.
          </p>
        )}
      </div>
    </div>
  );
};

export default HotJobs;