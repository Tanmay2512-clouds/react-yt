import React from 'react'
import { ArrowRight } from 'lucide-react'

const RightCard = () => {
  return (
    <div className='h-full shrink-0 overflow-hidden relative w-60 rounded-4xl'>
        <img className='object-cover w-full h-full' src="https://i.pinimg.com/736x/a2/3c/2f/a23c2ffbdc9eff8cc0c0bf3065831d81.jpg" alt="" srcset="" />
        <div className='absolute top-0 left-0 h-full w-full p-5 flex flex-col justify-between'>
            <h2 className='bg-white rounded-full h-8 w-8 flex justify-center text-2xl font-semibold items-center '>1</h2>
            <div>
                <p className='text-xl leading-normal text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quae incidunt reprehenderit dolore tenetur. Praesentium?</p>
            </div>
            <div className='flex justify-between'>
                <button className='bg-blue-600 text-white font-medium rounded-full py-6 px-3'>Satisfied</button>
                <button className='bg-blue-600 text-white font-medium rounded-full py-3 px-4 '><ArrowRight /></button>
            </div>
        </div>
    </div>
  )
}

export default RightCard