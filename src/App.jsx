import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import DailyWorkReportEmail from './emailTemplates.jsx/DailyWorkReportEmail';
import SystemInvitationLinkEmail from './emailTemplates.jsx/SystemInvitationLinkEmail';
import CompletionEmail from './emailTemplates.jsx/CompletionEmail';
import JobOverviewEmail from './emailTemplates.jsx/JobOverviewEmail';
import JobOverview2 from './emailTemplates.jsx/DailyWorkReportEmail';
import StatusChangeEmail from './emailTemplates.jsx/StatusChangeEmail';
import StaffInactivityEmail from './emailTemplates.jsx/StaffInactivityEmail';
import SecurityEmail from './emailTemplates.jsx/SecurityEmail';
import TaskDeadlineEmail from './emailTemplates.jsx/TaskDeadlineEmail';
import TaskCompletionEmail from './emailTemplates.jsx/TaskCompletionEmail';

function App() {
  return (
    <PrimeReactProvider>
      {/* <Package /> */}
      <Router>
        <Routes>

          <Route path="/job-overview-emailtemplate-1" element={<JobOverviewEmail/>} />
          <Route path="/daily-work-report-email-final" element={<JobOverview2/>} /> 
          <Route path="/job-completion-email1" element={<CompletionEmail/>} />
          <Route path="/task-completion-email" element={<TaskCompletionEmail/>} />
          <Route path="/task-deadline-email" element={<TaskDeadlineEmail/>} />        
          <Route path="/daily-work-report-email" element={<DailyWorkReportEmail/>} />
          <Route path="/system-invitation-email" element={<SystemInvitationLinkEmail />} />
          <Route path="/staff-inactivity-email" element={<StaffInactivityEmail/>} />
          <Route path="/security-email" element={<SecurityEmail/>} />
          <Route path="/status-change-email" element={<StatusChangeEmail/>} />

          </Routes> 
      </Router> 
    </PrimeReactProvider>
    
  );
}

export default App;
