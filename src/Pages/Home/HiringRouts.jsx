import React from "react";
import LottieWrapper from "lottie-react";
import { FaClock } from "react-icons/fa";

import hiringMainLottie from "../../assets/Lotties/Working Online.json";
import hiringTeamLottie from "../../assets/Lotties/Company employees sharing thoughts and ideas.json";

const Lottie = LottieWrapper.default || LottieWrapper;

const HiringRouts = () => {
  return (
    <div className="bg-gray-50 py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center bg-white rounded-xl shadow-2xl p-6 sm:p-8 lg:p-12 border-t-4 border-b-4 border-indigo-600 overflow-hidden relative">
          <div className="absolute top-0 bottom-0 left-0 w-1/4 md:w-1/3 lg:w-1/4 md:hidden lg:block">
            <Lottie
              style={{ width: "100%", height: "100%" }}
              animationData={hiringMainLottie}
              loop={true}
              className="scale-[1.2] translate-x-[-10%] opacity-80"
            />
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center w-full lg:w-3/4 mx-auto space-y-4 lg:space-y-0 lg:space-x-12 z-10 text-center">
            <div className="shrink-0">
              <p className="text-xl font-semibold uppercase text-gray-600">
                WE ARE
              </p>
              <h1 className="text-6xl sm:text-7xl font-extrabold text-gray-900 leading-none">
                HIRING
              </h1>
            </div>

            <div className="flex-1 max-w-sm">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                Let's <span className="text-violet-600">Work Together</span>
              </h2>
              <p className="text-lg text-gray-600 mt-1">
                & Explore Opportunities
              </p>
            </div>

            <a href="/jobs" className="shrink-0">
              <button className="btn px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-xl transition duration-300 flex items-center space-x-2 text-lg">
                <FaClock className="text-xl" />
                <span>Apply now</span>
              </button>
            </a>
          </div>

          <div className="absolute top-0 bottom-0 right-0 w-1/4 md:w-1/3 lg:w-1/4 md:hidden lg:block">
            <Lottie
              style={{ width: "100%", height: "100%" }}
              animationData={hiringTeamLottie}
              loop={true}
              className="scale-[1.2] translate-x-[10%] opacity-80"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HiringRouts;
