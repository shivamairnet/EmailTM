import React from 'react';
import { Link2, Key, LogIn, Shield } from 'lucide-react';
import CompanyLogo from '../assets/Iconslatestpackage/TM Email Icons/soodcompanylogo.png';
// import TaskTitle from 'assets/Iconslatestpackage/TM Email Icons/TaskTitle.png';
import Calendar from '../assets/Iconslatestpackage/TM Email Icons/Calendar (3).png';
// import Task from '..assets/Iconslatestpackage/'

import DeadLine from '../assets/Iconslatestpackage/TM Email Icons/Deadline.png';
import TaskTitle from '../assets/Iconslatestpackage/TM Email Icons/TaskTitle.png';
import User from '../assets/Iconslatestpackage/TM Email Icons/Staff Name 2.png';

const TaskDeadlineEmail = ({ 
  companyLogo, 
  companyName, 
  invitationDetails = {
    userName: 'Jane Doe',
    userEmail: 'jane.doe@company.com',
    invitationLink: 'https://taskmgmt.com/invite/unique-token-123',
    expirationDate: '2024-12-10'
  }
}) => {
  return (
    <div className="max-w-2xl mx-auto bg-yellow shadow-lg rounded-xl overflow-hidden font-sans">
      <div className='mt-4 mb-4'>
        <img src={CompanyLogo} alt="Logo" className='w-72 h-12 mx-auto' />
      </div>
         <div className="bg-gray-100 text-center py-6">
          <div className="bg-white w-12 h-12 mx-auto rounded-full flex items-center justify-center text-orange-500 text-xl font-bold">
            <Key className="mr-2" size={20} />
          </div>
          <h2 className="text-orange-500 text-xl font-bold mt-4">
          Task Deadline Approaching
          </h2>
          <p className="text-gray-900 mt-2">
          Upcoming Task Deadlines Under [Job Name]
          </p>
        </div>


      {/* Email Body */}
      <div className="p-6">

        <div className="mb-4 text-left">
          <p className="text-lg" style={{ color: 'black'}}>
            Hello 
            <strong> Admin, </strong>
          </p>
          <p className="mt-2 text-base" style={{ color: 'black' }}>
          
          Please find the below details of the task whose deadlines are approaching.
          </p>
        </div>

         {/* Task Details Section */}
         <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 shadow-sm mb-6">
          <h2 className="font-bold text-md text-gray-800 mb-4 border-b-2 border-white pb-2 text-left">
            Task Approaching Deadlines
          </h2>
          
          <div className="grid grid-cols-2 gap-4 text-left">
  {/* Task Title */}
  <div className="flex items-start">
    <img
      src={TaskTitle}
      alt="Task Title Icon"
      className="w-6 h-6 mr-2"
    />
    <div>
      <p className="font-medium text-gray-800">
        <strong>Task Title:</strong>
      </p>
      <p className="text-gray-600">Website Redesign</p>
    </div>
  </div>

  {/* Assigned To */}
  <div className="flex items-start">
    <img
      src={User}
      alt="Assigned To Icon"
      className="w-6 h-6 mr-2"
    />
    <div>
      <p className="font-medium text-gray-800">
        <strong>Assigned To:</strong>
      </p>
      <p className="text-gray-600">[Staff Name]</p>
    </div>
  </div>

  {/* Deadline */}
  <div className="flex items-start">
    <img
      src={DeadLine}
      alt="Deadline Icon"
      className="w-6 h-6 mr-2"
    />
    <div>
      <p className="font-medium text-gray-800">
        <strong>Deadline:</strong>
      </p>
      <p className="text-orange-500 font-semibold">5 Days Remaining</p>
    </div>
  </div>

  {/* Due Date */}
  <div className="flex items-start">
    <img
      src={Calendar}
      alt="Due Date Icon"
      className="w-6 h-6 mr-2"
    />
    <div>
      <p className="font-medium text-gray-800">
        <strong>Due Date:</strong>
      </p>
      <p className="text-gray-600">28/11/2024</p>
    </div>
  </div>
</div>

        </div>

        {/* Call to Action */}
        <div className="rounded-lg p-4 text-center">
          <button 
            onClick={() => navigator.clipboard.writeText(invitationDetails.invitationLink)}
            className="inline-block bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            View Task Details
          </button>
        </div>
      </div>

      {/* Email Footer */}
      <div className="bg-gray-200 p-4 text-center text-gray-800 text-sm border-t">
          <span>This is an automated message. Please do not reply to this email.</span>
          <p>© 2024 Sood & Company. All rights reserved.</p>
      </div>
    </div>
  );
};

export default TaskDeadlineEmail;