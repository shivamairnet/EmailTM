import React from "react";
import { CheckCircle, TrendingUp, Briefcase } from 'lucide-react';
import CompanyLogo from '../assets/Iconslatestpackage/TM Email Icons/soodcompanylogo.png';
import Completed from '../assets/Iconslatestpackage/TM Email Icons/Completed.png';
import Pending from '../assets/Iconslatestpackage/TM Email Icons/Pending.png';
import InProgress from '../assets/Iconslatestpackage/TM Email Icons/In Progress.png';
import Overdue from '../assets/Iconslatestpackage/TM Email Icons/Overdue (2).png';
import DailyReport from '../assets/Iconslatestpackage/TM Email Icons/Daily Report.png';



const DailyWorkReportEmail = () => {

  const jobs = {
    overdue: [
      { name: "Job 1", status: "Overdue", startDate: "2024-11-21", dueDate: "2024-11-22" },
    ],
    ongoing: [
      { name: "Job 2", status: "In Progress", startDate: "2024-11-23", dueDate: "2024-11-25" },
    ],
    today: [
      { name: "Job 3", status: "Pending", startDate: "2024-11-23", dueDate: "2024-11-23" },
    ],
  },
  ongoingJobs = [
    { 
      jobName: 'Website Redesign', 
      progress: 65, 
      status: 'In Progress',
      deadline: '2024-07-30'
    },
    { 
      jobName: 'Marketing Campaign', 
      progress: 40, 
      status: 'On Track',
      deadline: '2024-08-15'
    }
  ],
  todayTasks = [
    { 
      taskName: 'Design Homepage Wireframes', 
      jobName: 'Website Redesign',
      priority: 'High'
    },
 
  ]

  return (
    <div className="border-2 border-gray-100 max-w-2xl justify-center px-6 py-8 mx-auto bg-yellow shadow-lg rounded-xl overflow-hidden font-sans">
      {/* Header Section */}
      <div className="p-3 rounded-md text-center">
        <img src={CompanyLogo} alt="Logo" className="mx-auto w-72 h-12" />       
        <h2 className="text-2xl font-bold mt-4">Your Current Jobs Overview</h2>     
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


      {/* Daily Report Section */}
        <div className="bg-gray-100 text-center py-6">
        <div className="bg-white w-12 h-12 mx-auto rounded-full flex items-center justify-center text-orange-500 text-xl font-bold">
          {/* <AlertTriangle className="mr-2" size={20} /> */}
          <img src={DailyReport} alt="" className="w-10 h-10" />
        </div>
        <h2 className="text-orange-500 text-xl font-bold mt-4">
        Daily Work Report!
        </h2>
        <p className="text-gray-900 mt-2">
        {/* Upcoming Task Deadlines Under [Job Name] */}
        </p>
      </div>
        
        <div>
        <p className="text-black mt-4 text-left">Hello<strong> [Staff Name] </strong>,</p>
        <p className="text-black text-left mb-4">Below are the status of task assigned to you.</p>
        </div>


        {/* overdue jobs */}
          <div className="mb-4">
          <h2 
            className="text-lg font-bold text-left mb-2" 
            style={{ color: "red" }}
          >
            <Briefcase className="inline-block mr-2" size={20} />
            Overdue Jobs
          </h2>
          {ongoingJobs.map((job, index) => (
            <div 
              key={index} 
              className="p-3 rounded-lg mb-2 bg-gray-50" 
              style={{ 
           
                borderLeft: `4px solid ${job.progress >= 50 ? "green" : "red"}`
              }}
            >
              <div className="flex justify-between items-center">
                <span className="font-medium">{job.jobName}</span>
                <span 
                  className="font-bold" 
                  style={{ color: job.progress >= 50 ? "green" : "red" }}
                >
                  {job.status}
                </span>
              </div>
              <div className="flex justify-between mt-2">
                <div className="flex items-center">
                  <TrendingUp className="mr-2" size={16} color={"orange"} />
                  <span>Progress: {job.progress}%</span>
                </div>
                <span>Due Date: {job.deadline}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Ongoing Jobs Section */}
        <div className="mb-4">
          <h2 
            className="text-lg font-bold mb-2 text-left" 
            style={{ color: "orange" }}
          >
            <Briefcase className="inline-block mr-2" size={20} />
            Ongoing Jobs
          </h2>
          {ongoingJobs.map((job, index) => (
            <div 
              key={index} 
              className="p-3 rounded-lg mb-2 bg-gray-50" 
              style={{ 
              
                borderLeft: `4px solid ${job.progress >= 50 ? "green" : "red"}`
              }}
            >
              <div className="flex justify-between items-center">
                <span className="font-medium">{job.jobName}</span>
                <span 
                  className="font-bold" 
                  style={{ color: job.progress >= 50 ? "green" : "red" }}
                >
                  {job.status}
                </span>
              </div>
              <div className="flex justify-between mt-2">
                <div className="flex items-center">
                  <TrendingUp className="mr-2" size={16} color={"orange"} />
                  <span>Progress: {job.progress}%</span>
                </div>
                <span>Due Date: {job.deadline}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Today's Tasks Section */}
        <div className="mb-4">
          <h2 
            className="text-lg font-bold mb-2 text-left" 
            style={{ color: "blue" }}
          >
            <CheckCircle className="inline-block mr-2 text-left" size={20} />
            Today's Jobs
          </h2>
          {todayTasks.map((task, index) => (
            <div 
              key={index} 
              className="p-3 rounded-lg mb-2 bg-gray-50" 
              style={{ 
                
                borderLeft: `4px solid blue`
              }}
            >
              <div className="flex justify-between items-center">
                <span className="font-medium">{task.taskName}</span>
                <span 
                  className="font-bold" 
                  // style={{ color: getPriorityColor(task.priority) }}
                ></span>
                  <div className="flex-col">
                  <div className="mt-1">Start Date : 24-Dec-2024 </div>
                  <div >Due Date : 27-Dec-2024 </div>
                  </div>               
              </div>     
            </div>
          ))}
        </div>


        <div className="flex justify-center mt-3 mb-3">
          <button className="bg-orange-500 text-white text-sm px-3 py-2 font-semibold rounded-md">View Dashboard </button>
        </div>

    
      {/* Footer Section */}
      <div className="bg-gray-50 text-center text-sm text-gray-500 mt-6">
        <p>This is an automated message. Replies to this email are not monitored.</p>
        <p className="mt-2">© 2024 Sood & Company. All rights reserved.</p>
      </div>
    </div>
  );
};

export default DailyWorkReportEmail;
