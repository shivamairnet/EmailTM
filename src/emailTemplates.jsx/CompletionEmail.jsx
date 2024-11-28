import React from "react";
import CompanyLogo from '../assets/Iconslatestpackage/TM Email Icons/soodcompanylogo.png';

const taskData = [
  {
    id: "#12345",
    title: "Review Q4 Financial Statements",
    completedDate: "Dec 20, 2024",
  },
  {
    id: "#12346",
    title: "Prepare Budget Analysis",
    completedDate: "Dec 20, 2024",
  },
  {
    id: "#12347",
    title: "Generate Executive Summary",
    completedDate: "Dec 20, 2024",
  },
];

const CompletionEmail = () => {
  return (
    <div className="max-w-2xl mx-auto shadow-md overflow-hidden font-sans">
      {/* <div className="max-w-lg w-full bg-white rounded-lg overflow-hidden shadow-md"> */}
        {/* Logo */}
        <div className="flex items-center justify-center w-180 py-6">
          <img src={CompanyLogo} alt="" className='w-72 h-12 mx-auto' />
          {/* <span className="text-lg font-bold text-gray-600">COMPANY LOGO</span> */}
        </div>

        {/* Completion Banner */}
        <div className="bg-green-100 text-center py-6 border-y border-green-200">
          <div className="bg-white w-12 h-12 mx-auto rounded-full flex items-center justify-center text-green-500 text-xl font-bold">
            ✓
          </div>
          <h2 className="text-green-600 text-xl font-bold mt-4">
            Task Completed
          </h2>
          <p className="text-gray-900 mt-2">
            All assigned jobs under the [TaskName] have been successfully completed.
          </p>
        </div>

        {/* Project Info */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex text-left text-gray-600 text-sm">
            <span className="font-semibold text-gray-800 w-32">Task:</span>
            <span className="font-semibold text-gray-800">
              Q4 Financial Review
            </span>
          </div>
          <div className="flex text-left text-gray-600 text-sm mt-2">
            <span className="font-semibold text-gray-800 w-32">Designated Staff:</span>
            <span className="font-semibold text-gray-800">John Smith</span>
          </div>
          <div className="flex text-left text-gray-600 text-sm mt-2">
            <span className="font-semibold text-gray-800 w-32">Department:</span>
            <span className="font-semibold text-gray-800">Finance</span>
          </div>
        </div>

        {/* Completed Tasks Summary */}
        <div className="bg-gray-50 p-6 border-b border-gray-200 m-3 rounded-md">
          <h3 className="text-gray-800 text-lg font-bold text-left">
            Completed Tasks Summary
          </h3>
          <div className="mt-4 border-t-2 border-gray-200">
            {taskData.map((task, index) => (
              <div
                key={index}
                className="flex items-center py-3 border-b last:border-b-0 border-gray-200"
              >
                <div className="w-5 h-5 bg-green-500 text-white rounded-full flex items-center justify-center mr-4 text-xs">
                  ✓
                </div>
                <div className="flex-1 text-left">
                  <p className="font-medium text-gray-800">{task.title}</p>
                  <p className="text-gray-600 text-sm">
                    Task ID: {task.id} • Completed {task.completedDate}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-600 text-sm italic text-right mt-4">
            All tasks completed on Dec 20, 2024 at 2:30 PM
          </p>
        </div>

        {/* Action */}
        <div className="text-center py-6">
          <a
            href="#"
            className="bg-orange-500 text-white px-6 py-2 rounded-md font-medium hover:bg-green-600"
          >
            Review Task
          </a>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 text-center py-4 text-gray-600 text-xs border-t border-gray-200">
          <p>This is an automated message. Please do not reply to this email.</p>
          <p>© 2024 [Company Name]. All rights reserved.</p>
        </div>
      </div>
  
  );
};

export default CompletionEmail;
