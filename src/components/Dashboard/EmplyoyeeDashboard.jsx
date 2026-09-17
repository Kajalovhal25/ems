import React from 'react'
import Header from '../others/header'
import TaskListNumber from '../others/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmplyoyeeDashboard = () => {
  return (
    <div className='p-10 bg-[#1C1C1C] min-h-screen text-white'>
      <Header />
      <TaskListNumber />
      <TaskList />
    </div>
  )
}

export default EmplyoyeeDashboard
