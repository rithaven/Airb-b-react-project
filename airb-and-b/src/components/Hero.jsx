import React from 'react'

export default function Hero() {
    return (
        <div className='flex flex-col items-center p-5 '>
        <img className='items-center w-96' src="/images/photo-grid.png" />
        <h1 className='mb-4 text-3xl font-bold'>Online Experiences</h1>
        <p className='mt-0 text-lg text-gray-500'>Join unique interactive activities led by 
        one-of-a-kind hosts—all without leaving home.</p>
    </div>
    )
}