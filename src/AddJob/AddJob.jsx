import React from "react";

const AddJob = () => {
  return (
    <div>
      <h2>Please Add a job</h2>
      <form>
        {/* Basic Info */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job Basic Info</legend>

          <label className="label">Title</label>
          <input type="text" className="input" placeholder="Job Title" />

          <label className="label">Company</label>
          <input
            type="text"
            name="Company"
            className="input"
            placeholder="Company Name"
          />

          <label className="label">Location</label>

          <input type="text" className="input" placeholder="Company Location" />

          <label className="label">Company Logo</label>
          <input
            type="url"
            name="Company_logo"
            className="input"
            placeholder="Company Logo URL"
          />
        </fieldset>
        {/* Job Type  */}

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job JobType</legend>

          <div className="filter">
            <input
              className="btn filter-reset"
              type="radio"
              name="JobType"
              aria-label="All"
            />
            <input
              className="btn"
              type="radio"
              name="JobType"
              aria-label="On-Site"
            />
            <input
              className="btn"
              type="radio"
              name="JobType"
              aria-label="Hybrid"
            />
            <input
              className="btn"
              type="radio"
              name="JobType"
              aria-label="Remote"
            />
          </div>
        </fieldset>

        {/* Category */}

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job Category</legend>
          <select defaultValue="Job Category" name="category" className="select">
            <option disabled={true}>Select Job Category</option>
            <option>Data Science</option>
            <option>Teaching</option>
            <option>Engineering</option>
            <option>Finance</option>
            <option>Marketing</option>
            <option>Development</option>
            <option>Design</option>
            <option>Management</option>
            <option>Infrastructure</option>
            <option>Quality Assurance</option>
            <option>Product Management</option>
            <option> E-commerce</option>
            <option>IT Support</option>
           
          </select>
        </fieldset>
        {/* Salary Range */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend className="fieldset-legend"> Salary Range</legend>

  <label className="label">Minimum Salary</label>
  <input type="text" name="salaryMin" className="input" placeholder="Minimum Salary" />

  <label className="label"> Maximum Salary</label>
  <input type="text" name="salaryMax" className="input" placeholder="Maximum Salary" />

  <label className="label">Currency</label>
  <select defaultValue="Select a Currency" className="select">
  <option disabled={true}>Select a Currency</option>
  <option>BDT</option>
  <option>USD</option>
  <option>Euro</option>
</select>
</fieldset>

        {/*  salary Range */}

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job Basic Info</legend>

        </fieldset>
        {/* Application deadline  */}

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend"> Application deadline </legend>
          <input type="date" className="input" />
        </fieldset>
      </form>
    </div>
  );
};

export default AddJob;
