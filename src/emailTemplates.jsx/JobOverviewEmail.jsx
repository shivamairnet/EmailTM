import React from "react";
import CompanyLogo from '../assets/Iconslatestpackage/TM Email Icons/soodcompanylogo.png';
import Completed from '../assets/Iconslatestpackage/TM Email Icons/Completed.png';
import Pending from '../assets/Iconslatestpackage/TM Email Icons/Pending.png';
import InProgress from '../assets/Iconslatestpackage/TM Email Icons/In Progress.png';
import Overdue from '../assets/Iconslatestpackage/TM Email Icons/Overdue (2).png';
import DailyReport from '../assets/Iconslatestpackage/TM Email Icons/Daily Report.png';



const JobOverviewEmail = () => {
  return (
    <div className="max-w-2xl mx-auto bg-white shadow-md font-sans">
      {/* Header */}
      <div className="text-center p-3">
        <img
          src={CompanyLogo} // Replace with the actual logo URL
          alt="Company Logo"
          className="mx-auto h-12 w-72"
        />
        <h2 className="text-xl font-bold">Your Current Jobs Overview</h2>
      </div>

{/* Status Cards */}
<div className="flex justify-center">
  <div className="flex justify-between p-1 m-4 shadow-md bg-white rounded-md w-[480px]">
    {[
      {
        label: "Pending",
        count: 94,
        color: "text-orange-500",
        icon: Pending, // Add your image paths here
      },
      {
        label: "In Progress",
        count: 48,
        color: "text-blue-500",
        icon: InProgress,
      },
      {
        label: "Completed",
        count: 128,
        color: "text-green-500",
        icon: Completed,
      },
      {
        label: "Over Due",
        count: 5,
        color: "text-red-500",
        icon: Overdue,
      },
    ].map((status, index, array) => (
      <div
        key={status.label}
        className={`flex items-center p-1 text-center w-full relative ${
          index !== array.length - 1 ? "border-r-2 border-dotted border-blue-400" : ""
        }`}
      >
        
        {/* Text content */}
       
          {/* Image on the left */}
        <img
          src={status.icon}
          alt={`${status.label} Icon`}
          className="w-6 h-6 mr-2"
        />
          {/* <span className={`text-lg font-bold ${status.color}`}>{status.count}</span> */}
      
         
       <div className="pl-2 pr-2 flex flex-col items-center">
        <span className={`text-lg font-bold ${status.color}`}>{status.count}</span>
        <span className="text-sm">{status.label}</span>
        </div>
      </div>
    ))}
  </div>
</div>

      {/* Job Details Section */}
      <div className="p-6">
        <p className="mb-1 text-gray-700 text-left">
          Hello <strong>[Staff Name],</strong></p>
          <p className="text-left mb-2">A new job has been assigned to you.
          Please review the details below.
        </p>

       <div className="border-2 border-gray-200 rounded-lg p-4 mt-4">
        {/* New Job Details Header */}
        <h3 className="text-orange-500 underline text-lg font-semibold text-center mb-4 py-2">
          New Job Details
        </h3>

        {/* Job Info */}
        <div className="space-y-4 p-4">
          <p className="flex justify-start">
            <div className="font-semibold mr-2 text-orange-500">Job ID: </div>
            <div className="flex-grow border-b-2 border-gray-200"></div>
          
            {/* <span> ___________________________________________________</span> */}
          </p>
          <p className="flex justify-start">
            <span className="font-semibold mr-2 text-orange-500">Title: </span>
            <div className="flex-grow border-b-2 border-gray-200"></div>
            {/* <span> _____________________________________________________</span> */}
          </p>
          <p className="flex-col text-left">
            <span className="font-semibold mr-2 text-orange-500 mb-5 pb-5">Task Description: </span>
            <div className="flex-grow border-b-2 border-gray-200 mt-5 pt-5"></div>
            {/* <span> ________________________________________</span> */}
          </p>
          <p className="flex justify-start">
            <span className="font-semibold mr-2 text-orange-500">Assigned By: </span>
            <span> Admin</span>
          </p>
        </div>
        </div>

        {/* View Button */}
        <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg text-sm w-180">
          View Job Details
        </button>
      </div>

      {/* Footer */}
      <footer className="text-center text-xs text-gray-800 bg-gray-200 border-t border-gray-200 p-4">
        This is an automated message. Please do not reply to this email.
        <br />
        © 2024 S. Sood & Company. All rights reserved.
      </footer>
    </div>
  );
};

export default JobOverviewEmail;
