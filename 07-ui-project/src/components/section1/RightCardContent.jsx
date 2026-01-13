import React from 'react'
import { ArrowRight } from 'lucide-react'

const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-5 flex flex-col justify-between'>

        <h2 className='bg-white rounded-full h-8 w-8 flex justify-center text-2xl font-semibold items-center '>{props.id+1}</h2>
        <div>
            <p className='text-xl leading-normal text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quae incidunt reprehenderit dolore tenetur. Praesentium?</p>
        </div>
        <div className='flex justify-between'>
            <button className='bg-blue-600 text-white font-medium rounded-full py-6 px-3'>{props.tag}</button>
            <button className='bg-blue-600 text-white font-medium rounded-full py-3 px-4 '><ArrowRight /></button>
        </div>
    </div>
  )
}

export default RightCardContent