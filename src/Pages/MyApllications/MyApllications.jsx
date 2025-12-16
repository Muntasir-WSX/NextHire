import React, { Suspense, useMemo } from "react";
import { motion } from "framer-motion"; // অ্যানিমেশনের জন্য
import ApplicationStats from "./ApplicationStats";
import ApplicationsList from "./ApplicationsList";
import UseAuth from "../../Hooks/UseAuth";
import { fetchMyApplications } from "../../API/ApplicationsAPI";
import Others from "../Home/Others";

const MyApllications = () => {
  const { user } = UseAuth();

  const applicationsPromise = useMemo(() => {
    if (user?.email) {
      return fetchMyApplications(user.email);
    }
    return null;
  }, [user?.email]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 min-h-screen bg-gray-50/50">
      {/* --- New Hero/Heading Section --- */}
      <header className="mb-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
            Your <span className="text-violet-700">Career Journey</span> <br />
            At A Glance
          </h1>
          <div className="w-24 h-2 bg-violet-600 rounded-full mt-4 mb-6"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl"
        >
          <p className="text-lg text-gray-600 leading-relaxed">
            Welcome back,{" "}
            <span className="font-bold text-gray-800">
              {user?.displayName || "Candidate"}
            </span>
            ! Here you can track all your job applications, monitor their
            status, and see how your professional profile is performing. Your
            consistency today is the bridge to your dream career tomorrow.
          </p>
        </motion.div>
      </header>
      {/* --- End of Hero Section --- */}

      {/* Stats Section */}
      <ApplicationStats />

      {/* Table Section with dynamic Heading */}
      <section className="mt-16 bg-white rounded-3xl shadow-2xl shadow-violet-100 border border-gray-100 p-6 md:p-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              Recent Applications
            </h2>
            <p className="text-sm text-gray-500">
              Manage and follow up on your submitted resumes
            </p>
          </div>
          <button className="btn btn-outline border-violet-600 text-violet-700 hover:bg-violet-700 hover:text-white hover:border-violet-700 rounded-xl px-6 flex items-center gap-2 group transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5 group-hover:animate-bounce"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M7.5 12 12 16.5m0 0L16.5 12M12 16.5V3"
              />
            </svg>
            <span className="font-bold">Download Report</span>
          </button>
        </div>

        {applicationsPromise ? (
          <Suspense
            fallback={
              <div className="flex justify-center p-20">
                <span className="loading loading-bars loading-lg text-violet-700"></span>
              </div>
            }
          >
            <ApplicationsList myPromise={applicationsPromise} />
          </Suspense>
        ) : (
          <div className="text-center py-20 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
            <p className="text-gray-400">
              Please sign in to view your personalized dashboard.
            </p>
          </div>
        )}
      </section>
      <Others></Others>
    </div>
  );
};

export default MyApllications;
