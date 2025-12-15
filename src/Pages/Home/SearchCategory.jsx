import React from "react";
import { FaBriefcase, FaMapMarkerAlt, FaTh, FaSearch } from "react-icons/fa";

const SearchCategory = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-xl transition duration-300 transform hover:shadow-2xl">
          <form className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4">
            <div className="flex items-center w-full lg:w-1/4 p-3 border border-gray-200 rounded-lg focus-within:ring-2 focus-within:ring-violet-500 transition duration-150">
              <FaBriefcase className="text-gray-400 mr-3 text-lg" />
              <select
                defaultValue="Industry"
                className="w-full appearance-none bg-transparent focus:outline-none text-gray-700 font-medium cursor-pointer"
              >
                <option value="Industry" disabled>
                  Industry
                </option>
                <option>Software</option>
                <option>Developer</option>
                <option>Reqruting</option>
                <option>Management</option>
                <option>Advertising</option>
                <option>Designer</option>
                <option>Marketing</option>
                <option>Finance</option>
              </select>
            </div>

            <div className="flex items-center w-full lg:w-1/4 p-3 border border-gray-200 rounded-lg focus-within:ring-2 focus-within:ring-violet-500 transition duration-150">
              <FaMapMarkerAlt className="text-gray-400 mr-3 text-lg" />
              <select
                defaultValue="Location"
                className="w-full appearance-none bg-transparent focus:outline-none text-gray-700 font-medium cursor-pointer"
              >
                <option value="Location" disabled>
                  Location
                </option>
                <option>Dhaka, Bangladesh</option>
                <option>New York, USA</option>
                <option>London, UK</option>
                <option>Chittagong,Bangladesh</option>
                <option>karachi, Pakistan</option>
                <option>Faisalabad, Pakistan</option>
                <option>RawalPindi, Pakistan</option>
                <option>Sicily, Italy</option>
              </select>
            </div>

            <div className="flex items-center w-full lg:w-1/3 p-3 border border-gray-200 rounded-lg focus-within:ring-2 focus-within:ring-violet-500 transition duration-150">
              <FaTh className="text-gray-400 mr-3 text-lg" />
              <input
                type="text"
                placeholder="Your keyword (e.g., Python, React)"
                className="w-full bg-transparent focus:outline-none text-gray-700 placeholder-gray-400"
              />
            </div>

            <button
              type="submit"
              className="btn w-full lg:w-auto lg:shrink-0 px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg shadow-md transition duration-300 flex items-center justify-center space-x-2"
            >
              <FaSearch className="text-xl" />
              <span className="text-lg">Search</span>
            </button>
          </form>
        </div>

        <div className="mt-8 text-center lg:text-left">
          <p className="text-gray-600 font-semibold mb-2">Popular Searches:</p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-2">
            {[
              "Designer",
              "Web",
              "IOS",
              "Developer",
              "PHP",
              "Senior",
              "Engineer",
            ].map((term) => (
              <span
                key={term}
                className="text-sm cursor-pointer text-indigo-600 hover:text-violet-700 transition duration-150 p-1"
              >
                {term}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchCategory;
