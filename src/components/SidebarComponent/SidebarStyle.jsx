import React from 'react'

function SidebarStyle({heading='title', children=(<h1>This is the sidebar</h1>)}) {
  return (
    <div className="h-screen bg-slate-950 w-48 text-sm pt-3">
        <div className=" text-white">
            <p className='text-white font-thin ml-5'>{heading}</p>
            <div className='flex flex-col overflow-hidden gap-2 my-3'>
                {children}
            </div>
        </div>
    </div>
  )
}

export default SidebarStyle