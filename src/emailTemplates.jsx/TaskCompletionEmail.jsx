import React from 'react';
import JobTitle from '../assets/Iconslatestpackage/TM Email Icons/Job Title.png';
import Staff from '../assets/Iconslatestpackage/TM Email Icons/Staff Name.png';
import Client from '../assets/Iconslatestpackage/TM Email Icons/Clinet Name.png';
import StartDate from '../assets/Iconslatestpackage/TM Email Icons/Calendar (2).png';
import TimeCompletion from '../assets/Iconslatestpackage/TM Email Icons/Task Completion.png';
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

const TaskCompletionEmail = () => {
  return (
    <div className="max-w-2xl mx-auto shadow-md overflow-hidden font-sans">
      <div className="flex items-center justify-center w-180 py-6">
        <span className="text-lg font-bold text-gray-600"><img src={CompanyLogo} height={280} width={280} alt="Company" /></span>
      </div>

      {/* Completion Banner */}
      <div className="bg-green-100 text-center py-6 border-y border-green-200">
        <div className="bg-white w-12 h-12 mx-auto rounded-full flex items-center justify-center text-green-500 text-xl font-bold">
          ✓
        </div>
        <h2 className="text-green-600 text-xl font-bold mt-4">
          Task Completed
        </h2>
        
      </div>

      <div>
        <p className="text-black mt-4 p-2 text-left">Hello,<strong> Admin</strong></p>
        <p className="text-black p-2 text-left mb-4">
        All the jobs related to the [Task Name] have been completed. Please review the details and proceed with invoice generation.</p>
        </div>

      <div className='p-4 m-2'>
        <h2 className='font-bold text-left border-b-2 border-gray-100 text-md pb-2'>Task Details</h2>
        <div className="flex flex-col gap-5 pt-2">
  
  {/* First Row */}
  <div className="flex justify-between items-center">
    <div className="flex flex-col items-start w-1/3">
    <div className='flex'>
      <img src={JobTitle} height={20} width={20} alt="Job" />
      <div className="font-semibold text-gray-900">Task Title:</div>
      </div>
      <div className="text-gray-600">[Task Title]</div>
    </div>
    <div className="flex flex-col items-start w-1/3">
    <div className='flex'>
    <img src={Staff} height={20} width={20} alt="Staff" />
      <div className="font-semibold text-gray-900">Staff Name:</div>
      </div>
      <div className="text-gray-600">[Staff Name]</div>
    </div>
    <div className="flex flex-col items-start w-1/3">
    <div className='flex'>
    <img src={Client} height={20} width={20} alt="Client" />
      <div className="font-semibold text-gray-900">Client Name:</div>
      </div>
      <div className="text-gray-600">[Client Name]</div>
    </div>
  </div>

  {/* Second Row */}
  <div className="flex justify-between items-center">
    <div className="flex flex-col items-start w-1/3">
    <div className='flex'>
      <img src={StartDate} height={20} width={20} alt="Staff" />
      <div className="font-semibold text-gray-900">Start Date:</div>
      </div>
      <div className="text-gray-600">[Start Date]</div>
    </div>
    <div className="flex flex-col items-start w-1/3">
    <div className='flex'>
     <img src={StartDate} height={20} width={20} alt="Staff" />
      <div className="font-semibold text-gray-900">End Date:</div>
      </div>
      <div className="text-gray-600">[End Date]</div>
    </div>
    <div className="flex flex-col items-start w-1/3">
    <div className='flex'>
     <img src={TimeCompletion} height={20} width={20} alt="Staff" />
      <div className="font-semibold text-gray-900">Task Completion:</div>
      </div>
      <div className="text-gray-600">[Task Completion]</div>
    </div>
  </div>
</div>
</div>


      {/* Completed Tasks Summary */}
      <div className="bg-gray-50 p-3 mt-5 border-b border-gray-200 rounded-md">
        <h3 className="text-gray-800 text-lg font-bold text-left">
          Completed Jobs
        </h3>
        <div className="mt-2 border-t-2 border-gray-200">
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
                  Completed {task.completedDate}
                </p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-gray-600 text-sm italic text-right mt-4">
          All jobs completed on Dec 20, 2024 at 2:30 PM
        </p>
      </div>

      {/* Action */}
      <div className="text-center py-6">
        <a
          href="#"
          className="bg-orange-600 text-white px-6 py-2 rounded-md font-medium hover:bg-green-600 mr-5"
        >
          Review Jobs
        </a>
        <a
          href="#"
          className="bg-green-500 text-white px-6 py-2 rounded-md font-medium hover:bg-green-600"
        >
          Generate Invoice
        </a>
      </div>

      {/* Footer */}
      <div className="bg-gray-50 text-center py-4 text-gray-600 text-xs border-t border-gray-200">
        <p>This is an automated message. Please do not reply to this email.</p>
        <p>© 2024 Sood & Company. All rights reserved.</p>
      </div>
    </div>
    
  )
}

export default TaskCompletionEmail
