import Dashboard from '@/components/Dashboard'
import React from 'react'
import ProtectedRoute from '../../components/ProtectedRoute'
const DashBoardPage = () => {
  return (
<ProtectedRoute>
    <Dashboard/>
</ProtectedRoute>

  )
}

export default DashBoardPage