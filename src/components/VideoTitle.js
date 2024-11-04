import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='absolute w-screen aspect-video pt-[15%] px-24 text-white bg-gradient-to-r from-black'>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <h2 className='py-6 text-lg w-1/2'>{overview}</h2>
      <div className='flex gap-1'>
        <button className='bg-white font-medium text-lg text-black p-4 px-16 rounded-md hover:bg-opacity-80'>Play</button>
        <button className='bg-gray-500 font-medium text-lg text-white p-4 px-16 rounded-md bg-opacity-60 hover:bg-slate-600'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
