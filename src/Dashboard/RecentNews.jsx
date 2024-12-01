import React from 'react'
import DashboardLayout from '../Layout/DasboardLayout'
import RecentNewsTable from '../Components/RecentNewsTable'
const RecentNews = () => {
  return (
   <RecentNewsTable/>
  )
}

export default DashboardLayout(RecentNews)