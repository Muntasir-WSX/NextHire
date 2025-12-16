import React from "react";
import { FaLinkedin, FaGithub, FaEye } from "react-icons/fa";

const JobApplicationsTable = ({ application, index }) => {
  const { title, company, company_logo, applicant, status, linkedIn, github } =
    application;

  return (
    <tr className="hover:bg-gray-50 transition-colors border-b border-gray-100">
      <th>
        <span className="text-gray-400 font-medium">{index + 1}</span>
      </th>
      <td>
        <div className="flex items-center gap-4">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12 bg-white border border-gray-100 shadow-sm">
              {company_logo ? (
                <img
                  src={company_logo}
                  alt={`${company} logo`}
                  className="object-contain p-1"
                />
              ) : (
                <div className="h-full w-full flex items-center justify-center bg-violet-100 text-violet-700 font-bold">
                  {company?.charAt(0)}
                </div>
              )}
            </div>
          </div>
          <div>
            <div className="font-bold text-gray-800">{title}</div>
            <div className="text-xs text-violet-600 font-semibold uppercase tracking-wider">
              {company}
            </div>
          </div>
        </div>
      </td>
      <td>
        <span className="font-medium text-gray-700">{applicant}</span>
        <div className="flex gap-3 mt-2">
          {linkedIn && (
            <a
              href={linkedIn}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              <FaLinkedin size={16} />
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="text-gray-800 hover:text-black transition-colors"
            >
              <FaGithub size={16} />
            </a>
          )}
        </div>
      </td>
      <td>
        <span
          className={`badge badge-sm font-bold py-3 px-4 rounded-full border-none ${
            status === "Hired"
              ? "bg-green-100 text-green-700"
              : status === "Rejected"
              ? "bg-red-100 text-red-700"
              : "bg-violet-100 text-violet-700"
          }`}
        >
          {status || "In Review"}
        </span>
      </td>
      <th className="text-center">
        <button className="btn btn-ghost btn-sm text-violet-700 hover:bg-violet-100 normal-case rounded-lg border border-violet-200">
          <FaEye /> Details
        </button>
      </th>
    </tr>
  );
};

export default JobApplicationsTable;
