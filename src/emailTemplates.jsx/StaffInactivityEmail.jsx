import React from 'react';
import {  User, Clock, Activity,AlertTriangle } from 'lucide-react';
import CompanyLogo from '../assets/Iconslatestpackage/TM Email Icons/soodcompanylogo.png';
import SecurityAlert from '../assets/Iconslatestpackage/TM Email Icons/Security Alert.png';
import Time from '../assets/Iconslatestpackage/TM Email Icons/Time (2).png'
import Staff from '../assets/Iconslatestpackage/TM Email Icons/Staff Name 2.png'

const StaffInactivityEmail = () => {
  // const staffName = 'John Doe',
  // staffEmail = 'john.doe@ssoodcompany.com',
  // departmentName = 'Marketing',
  const inactiveDays = 14
  const lastActivityDate = '2024-06-15'
  const totalProjectTasks = 5
  const completedTasks = 2

  const taskCompletionPercentage = Math.round((completedTasks / totalProjectTasks) * 100);

  return (
    <div className="max-w-2xl mx-auto bg-yellow shadow-lg rounded-xl overflow-hidden font-sans">
    <div className='mt-4 mb-4'>
      <img src={CompanyLogo} alt="Logo" className='w-72 h-12 mx-auto' />
    </div>
       <div className="bg-gray-100 text-center py-6">
        <div className="bg-white w-12 h-12 mx-auto rounded-full flex items-center justify-center text-orange-500 text-xl font-bold">
          
          <img src={SecurityAlert} alt="" />
        </div>
        <h2 className="text-orange-500 text-xl font-bold mt-4">
        Staff Inactivity Alert!
        </h2>
        <p className="text-gray-900 mt-2">
        </p>
      </div>


     {/* Body Section */}
     <div className="text-gray-700 text-left mt-3 p-3">
      <p className="mb-1">
        Hello <span className="text-black"><strong>Admin</strong></span>,
      </p>
      <p className="mb-6">
      This is a critical notification regarding prolonged staff inactivity in the S Sood & Company Task Management Platform. An employee has been inactive for an extended period, which may require immediate attention and intervention.
      </p>
        <div 
          className="bg-gray-100 p-4 rounded-lg mb-4" 
        
        >
          <h2 
            className="text-xl font-semibold pb-2 mb-2 text-left border-b-2 border-white" 
            style={{ color: 'black' }}
          >
            Staff Inactivity Detected
          </h2>
          
          {/* Staff Information */}
          <div className="space-y-3">
            <div className="flex items-center">
              <img src={Staff} className="mr-3 w-6 h-6" size={20} color={'#D97706'} />
              <span className="font-medium" style={{color:'#000'}}>Staff Name: [Staff Name]</span>
            </div>
            
            <div className="flex items-center">
              <img src={Time} className="mr-3 w-6 h-6" size={20}  />
              <span 
                className="font-medium" 
                style={{ color: '#000' }}
              >
                Inactive Time: {inactiveDays}
              </span>
            </div>

            <div className="flex items-center">
              <img src={Time} className="mr-3 w-6 h-6" size={20} />
              <span 
                className="font-medium" 
                style={{ color: '#000' }}
              >
                Last Active Date: {inactiveDays}
              </span>
            </div>       
          </div>
        </div>

        {/* Recommended Actions */}
        <div 
          className="p-4 border-orange-600 rounded-lg mb-4" 
          style={{ 
           
            border: `1px solid orange` 
          }}
        >
          <h3 
            className="text-lg font-semibold mb-2 text-left" 
          >
            Recommended Actions
          </h3>
          <ul className="list-disc list-inside">
            <li className='text-left'>Schedule a one-on-one meeting with the staff member</li>
            <li className='text-left'>Understand reasons for prolonged inactivity</li>
            <li className='text-left'>Review workload and potential support needed</li>
            <li className='text-left'>Discuss any challenges or obstacles</li>
            <li className='text-left'>Consider performance improvement plan if necessary</li>
          </ul>
        </div>

      {/* Button Section */}
      <div className="text-center mt-3 mb-3">
        <button className="bg-orange-500 text-white font-semibold py-2 px-6 rounded-md hover:bg-orange-700 transition">
        View Staff Profile
        </button>
      </div>
    </div>

    {/* Email Footer */}
    <div className="bg-gray-200 p-4 text-center text-gray-800 text-sm border-t">
        <span>This is an automated message. Please do not reply to this email.</span>
        <p>© 2024 S. Sood & Company. All rights reserved.</p>
    </div>
  </div>
  )
}

export default StaffInactivityEmail
