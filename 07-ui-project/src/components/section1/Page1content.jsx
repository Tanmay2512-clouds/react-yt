import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1content = () => {
  return (
    <div className='py-10 flex items-center gap-10 h-[90vh]  px-10'>
        <LeftContent />
        <RightContent />

    </div>
  )
}

export default Page1content