import React from "react";
import CompanyLogo from '../assets/Iconslatestpackage/TM Email Icons/soodcompanylogo.png';
import Completed from '../assets/Iconslatestpackage/TM Email Icons/Completed.png';
import Pending from '../assets/Iconslatestpackage/TM Email Icons/Pending.png';
import InProgress from '../assets/Iconslatestpackage/TM Email Icons/In Progress.png';
import Overdue from '../assets/Iconslatestpackage/TM Email Icons/Overdue (2).png';



const StatusChangeEmail = () => {
  return (
    <div className="max-w-2xl mx-auto bg-yellow shadow-md overflow-hidden font-sans">
      {/* Header */}
      <div className="text-center p-3">
        <img
          src={CompanyLogo} 
          alt="Company Logo"
          className="mx-auto w-72 h-12 "
        />
        <h2 className="text-2xl font-bold mt-5 mb-2">Your Current Jobs Overview</h2>
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

<div className="text-md bg-gray-50 p-8">
  Job Status Changed from <span className="bg-orange-500 text-white pl-2 pr-2 pt-1 pb-1 rounded-md">Pending</span> to <span className="bg-yellow-700 text-white pl-2 pr-2 pt-1 pb-1 rounded-md">Progress</span>
</div>

      {/* Job Details Section */}
      <div className="p-6">
        <p className="mb-1 text-gray-700 text-left">
          Hello <strong>Admin,</strong></p>
          <p className="text-left mb-2">The status of the following job has been updated.
          
        </p>

<div className="border-2 border-gray-200 rounded-lg p-2">
        {/* New Job Details Header */}
        <h3 className="text-orange-500 underline text-lg font-semibold text-left mb-4 py-2">
          Job Details
        </h3>

        {/* Job Info */}
        <div className="space-y-4 p-4">
        <p className="flex-col">
            <div className="font-semibold mr-2 text-orange-500 text-left">Updated By: <span className="text-black"> [StaffName]</span> </div>
            <div className="flex-grow border-b-2 border-gray-200"></div>
          </p>
          <p className="flex-col">
            <div className="font-semibold mr-2 text-orange-500 text-left">Job ID: </div>
            <div className="flex-grow border-b-2 border-gray-200"></div>
          </p>
          <p className="flex-col text-left">
            <span className="font-semibold mr-2 text-orange-500 text-left">Title: </span>
            <div className="flex-grow border-b-2 border-gray-200"></div>
          </p>
          <p className="flex-col text-left">
            <span className="font-semibold mr-2 text-orange-500 mb-5 pb-5">Task Description: </span>
            <div className="flex-grow border-b-2 border-gray-200 mt-5 pt-5"></div>
          </p>
          {/* <p className="flex justify-start">
            <span className="font-semibold mr-2 text-orange-500">Assigned By: </span>
            <span> Admin</span>
          </p> */}
          <p className="text-gray-500 text-right text-sm">Latest Updated on Dec 20, 2024 at 2:30 PM</p>
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

export default StatusChangeEmail;
