import React from 'react';
import { Link2, Key, LogIn, Shield } from 'lucide-react';
import CompanyLogo from '../assets/Iconslatestpackage/TM Email Icons/soodcompanylogo.png';
import Copy from '../assets/Iconslatestpackage/TM Email Icons/Copy.png';
// import {companylogo} from '../assets/Iconslatestpackage/TM Email Icons/soodcompanylogo.png'
import AccessKey from '../assets/Iconslatestpackage/TM Email Icons/Access Invitation.png';
// import AccessKey from '../assets/Iconslatestpackage/TM Email Icons/Access Invitation.png';

const SystemInvitationLinkEmail = ({ 
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
    <div className="max-w-2xl mx-auto bg-yellow shadow-md overflow-hidden font-sans">
      <div className='mt-4 mb-4'>
        <img src={CompanyLogo} alt="Logo" className='w-72 h-12 mx-auto' />
      </div>
         <div className="bg-yellow-50 text-center py-6">
          <div className="bg-white w-12 h-12 mx-auto rounded-full flex items-center justify-center text-orange-500 text-xl font-bold">
            <img src={AccessKey} className="mr-2" size={20} />
          </div>
          <h2 className="text-orange-500 text-xl font-bold mt-4">
          Your System Access Invitation
          </h2>
          <p className="text-gray-900 mt-2">
          Welcome Aboard!
          </p>
        </div>


      {/* Email Body */}
      <div className="p-6">

        <div className="mb-4 text-left">
          <p className="text-lg" style={{ color: 'black'}}>
            Hello 
            <strong> [StaffName], </strong>
          </p>
          <p className="mt-2 text-base" style={{ color: 'black' }}>
            Please find your unique invitation link below to access the platform.
          </p>
        </div>

        {/* Invitation Link Section */}
        <div className="bg-gray-100 rounded-lg p-4 mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
            <Shield className="mr-2 text-orange-600 text-left" size={20} />
            Secure Invitation Link
          </h2>
          
          <div className="bg-white border border-blue-200 rounded-lg p-3 mb-4 flex justify-between">
            <p className="text-gray-700 break-all">
              {invitationDetails.invitationLink}
            </p>
            <img src={Copy} alt="link" className='w-5 h-5' />
          </div>
        </div>

        {/* Login Instructions */}
        <div className="bg-green-50 rounded-lg p-4 mb-6 border-l-4 border-green-500">
          <h3 className="text-green-800 font-semibold mb-3 flex items-center text-left">
            <LogIn className="mr-2" size={20} />
            How to Access the System
          </h3>
          <ol className="list-decimal list-inside text-green-700 text-left pl-4">
            <li>Copy the unique invitation link</li>
            <li>Open the link in your web browser</li>
          </ol>
        </div>

        {/* Call to Action */}
        <div className="rounded-lg p-4 text-center">
          <button 
            onClick={() => navigator.clipboard.writeText(invitationDetails.invitationLink)}
            className="inline-block bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Copy Invitation Link
          </button>
        </div>
      </div>

      {/* Email Footer */}
      <div className="bg-gray-200 p-4 text-center text-gray-800 text-sm border-t">
          <span>This is an automated message. Please do not reply to this email.</span>
          <p>© 2024 S. Sood & Company. All rights reserved.</p>
      </div>
    </div>
  );
};

export default SystemInvitationLinkEmail;