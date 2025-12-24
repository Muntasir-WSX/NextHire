import React, { use } from "react";
import { useNavigate } from "react-router-dom";
import HotJobsCard from "../Shared Components/HotJobsCard";

const HotJobs = ({ jobsPromise }) => {
    // এপিআই থেকে ডাটা পাওয়ার জন্য use() হুক ব্যবহার
    const jobs = use(jobsPromise);

    const navigate = useNavigate();

    // সেফটি চেক: যদি jobs কোনো কারণে Array না হয়ে অন্য কিছু (যেমন এরর অবজেক্ট) হয়
    // তাহলে এটি অ্যাপ ক্রাশ করা থেকে বাঁচাবে
    const safeJobs = Array.isArray(jobs) ? jobs : [];

    // মাত্র ৮টি জব দেখানোর জন্য স্লাইস করা
    const trendingJobs = safeJobs.slice(0, 8);

    const handleViewAll = () => {
        navigate("/browsejobs");
    };

    // যদি সার্ভার থেকে কোনো ডাটা না আসে বা এরর মেসেজ আসে
    if (!Array.isArray(jobs)) {
        return (
            <div className="py-16 text-center">
                <p className="text-red-500 font-medium">
                    Unable to load jobs. Please check your login or connection.
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
                        Opportunities are waiting. Discover the latest roles that match your profile.
                    </p>
                </div>

                {/* জব কার্ড গ্রিড */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {trendingJobs.map((job) => (
                        <HotJobsCard key={job._id} job={job} />
                    ))}
                </div>

                {/* যদি ৮টির বেশি জব থাকে তবেই ভিউ অল বাটন দেখাবে */}
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

                {/* যদি কোনো জবই না থাকে */}
                {safeJobs.length === 0 && (
                    <p className="text-center text-gray-500 mt-10">No jobs available right now.</p>
                )}
            </div>
        </div>
    );
};

export default HotJobs;