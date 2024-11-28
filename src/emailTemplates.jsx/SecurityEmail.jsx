import React from 'react';
import { AlertTriangle, User, Mail, Lock } from 'lucide-react';
import CompanyLogo from '../assets/Iconslatestpackage/TM Email Icons/soodcompanylogo.png';
import Alert from '../assets/Iconslatestpackage/TM Email Icons/Security Alert.png';
import Staff from '../assets/Iconslatestpackage/TM Email Icons/Staff Name 2.png';
import Password from '../assets/Iconslatestpackage/TM Email Icons/Password.png';
import Email from '../assets/Iconslatestpackage/TM Email Icons/Email.png';


const SecurityEmail = () => {
  return (
    <div className="max-w-2xl mx-auto bg-yellow shadow-lg rounded-xl overflow-hidden font-sans">
      <div className='mt-4 mb-4'>
        <img src={CompanyLogo} alt="Logo" className='w-72 h-12 mx-auto' />
      </div>
         <div className="bg-gray-100 text-center py-6">
          <div className="bg-white w-12 h-12 mx-auto rounded-full flex items-center justify-center text-orange-500 text-xl font-bold">
            <img src={Alert} className="w-12 h-12"  />
          </div>
          <h2 className="text-orange-500 text-xl font-bold mt-4">
          Security Alert!
          </h2>
          <p className="text-gray-900 mt-2">
          {/* Upcoming Task Deadlines Under [Job Name] */}
          </p>
        </div>


       {/* Body Section */}
       <div className="text-gray-700 text-left mt-3 p-2">
        <p className="mb-1">
          Hello <span className="ont-bold text-black"><strong>Admin</strong></span>,
        </p>
        <p className="mb-6">
        
        This is an important notification regarding a recent credential change of the [Staff Name]. Please review the details below to ensure the security of the system.
        </p>

        {/* Credentials Comparison */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {/* Original Credentials */}
          <div className='bg-gray-100 p-3 rounded-md'>
            <h2 className="font-semibold mb-4 text-left">Staff Credentials</h2>
            <div className="space-y-3">
              <div className="flex items-left gap-2">
                <img src={Staff} className="w-5 h-5" />
                <span className="text-sm">Staff Name<br/>[Staff Name]</span>
              </div>
              <div className="flex items-left gap-2">
                <img src={Email} className="w-5 h-5" />
                <span className="text-sm">Staff Email<br/>[Staff Email]</span>
              </div>
              <div className="flex items-left gap-2">
                <img src={Password} className="w-5 h-5" />
                <span className="text-sm">Password<br/>[password]</span>
              </div>
            </div>
          </div>

          {/* Updated Credentials */}
          <div className='bg-gray-100 p-3 rounded-md'>
            <h2 className="font-semibold mb-4 text-left">Staff Updated Credentials</h2>
            <div className="space-y-3">
              <div className="flex items-left gap-2">
                <img src={Staff} className="w-5 h-5" />
                <span className="text-sm">Staff Name<br/>[Staff Name]</span>
              </div>
              <div className="flex items-left gap-2">
                <img src={Email} className="w-5 h-5" />
                <span className="text-sm">Staff Email<br/>[Staff Email]</span>
              </div>
              <div className="flex items-left gap-2">
                <img src={Password} className="w-5 h-5" />
                <span className="text-sm">Password<br/>[password]</span>
              </div>
            </div>
          </div>
        </div>

        {/* Security Recommendations */}
        <div className="mb-6 bg-white border border-orange-500 rounded-lg p-4">
          <h3 className="font-semibold mb-2 text-left">Security Recommendations</h3>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li className='text-left'>Verify this credential change was authorized.</li>
            <li className='text-left'>If unauthorized, contact the staff member immediately.</li>
            <li className='text-left'>Review recent account activity in the platform.</li>
          </ul>
        </div>

        {/* Button Section */}
        <div className="text-center mt-3 mb-3">
          <button className="bg-orange-500 text-white font-semibold py-2 px-6 rounded-md hover:bg-orange-700 transition">
            View Activity
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

export default SecurityEmail
