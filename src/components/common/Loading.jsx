import React from 'react'

export default function Loading() {
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black text-white z-[9999]'>
        <h1 className="text-2xl font-semibold animate-pulse">Loading...</h1>
    </div>
  );
}
