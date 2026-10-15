import React from 'react'
import Header from '../others/header'
import TaskListNumber from '../others/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmplyoyeeDashboard = ({data}) => {
  return (
    <div className='p-10 bg-[#1C1C1C] min-h-screen text-white'>
      <Header data={data} />
      <TaskListNumber data={data} />
      <TaskList data={data} />
    </div>
  )
}

export default EmplyoyeeDashboard
