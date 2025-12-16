import React, { use } from "react";
import JobApplicationsTable from "./JobApplicationsTable";

const ApplicationsList = ({ myPromise }) => {
  const applications = use(myPromise);

  return (
    <div className="animate-in fade-in duration-700">
      <div className="flex items-center justify-between mb-6 bg-violet-50 p-4 rounded-xl border border-violet-100">
        <h3 className="text-lg font-bold text-violet-800">
          Total Applied Jobs:{" "}
          <span className="text-2xl ml-2">{applications.length}</span>
        </h3>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
        <table className="table table-zebra w-full overflow-hidden">
          <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
            <tr>
              <th className="py-4">#</th>
              <th>Company & Job Title</th>
              <th>Contact Email</th>
              <th>Status</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>

          <tbody className="text-sm">
            {applications.length > 0 ? (
              applications.map((application, index) => (
                <JobApplicationsTable
                  key={application._id}
                  index={index}
                  application={application}
                />
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-16">
                  <p className="text-gray-400 text-lg">
                    You haven't applied to any jobs yet.
                  </p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplicationsList;
