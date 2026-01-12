import React from 'react'
import RightCard from './RightCard'


const RightContent = () => {
  return (
    <div className='h-full rounded-4xl overflow-x-auto flex flex-nowrap gap-10 w-2/3 p-6'>
        <RightCard />
        <RightCard />
        <RightCard />
    </div>
  )
}

export default RightContent