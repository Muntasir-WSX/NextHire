import React from "react";
import { motion } from "framer-motion";
import team1 from "../../assets/Images/office1.jpg";
import team2 from "../../assets/Images/office2.jpg";

const Banner = () => {
  const colorTransition = {
    animate: {
      color: ["#8B5CF6", "#6366F1", "#3B82F6", "#8B5CF6"],
      transition: {
        duration: 6,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  return (
    <div className="hero bg-gray-50 min-h-[70vh] py-16">
      <div className="hero-content flex-col lg:flex-row-reverse w-full max-w-6xl p-4">
        <div className="flex-1 relative h-100 w-full max-w-lg lg:max-w-none mb-12 lg:mb-0">
          <div className="relative w-full h-full">
            <motion.img
              src={team1}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 10, repeat: Infinity }}
              className="absolute w-56 h-64 sm:w-64 sm:h-72 lg:w-80 lg:h-96 object-cover 
                         rounded-t-3xl rounded-bl-3xl shadow-xl z-20 
                         border-t-8 border-l-8 border-violet-700 
                         top-0 left-0 sm:left-[10%] lg:left-0"
            />

            <motion.img
              src={team2}
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 12, delay: 5, repeat: Infinity }}
              className="absolute w-56 h-64 sm:w-64 sm:h-72 lg:w-80 lg:h-96 object-cover 
                         rounded-b-3xl rounded-tr-3xl shadow-2xl z-10 
                         border-b-8 border-r-8 border-indigo-500 
                         bottom-0 right-0 sm:right-[10%] lg:right-0"
            />
          </div>
        </div>

        <div className="flex-1 p-4 lg:p-0">
          <motion.p
            className="font-bold text-lg mb-2"
            variants={colorTransition}
            animate="animate"
          >
            NEXTHIRE: Your Career, Elevated.
          </motion.p>

          <motion.h1
            className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Find Your Next <span className="text-violet-700">Developer</span> or{" "}
            <span className="text-indigo-600">Designer</span> Job!
          </motion.h1>

          <p className="py-6 text-gray-600 text-lg">
            Forget the clutter. At NextHire, we connect top-tier talent—from
            fresh graduates to seasoned professionals—with the most challenging
            and rewarding roles in development and design across the globe.
          </p>

          <button className="btn bg-violet-600 hover:bg-violet-700 text-white border-none text-lg font-semibold shadow-md transition duration-300">
            Explore All Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
