import React, { useEffect, useState } from 'react'
import { useId } from 'react'

function Explorer() {

    const [openDirs, setOpenDirs] = useState({});

    let dirs = [
        {
            name: 'portfolio',
            isDirectory: true,
            child: [
                'github_readMe.md',
                'projects',
                'curriculumVitae'
            ]
        },
        {
            name: 'index.html',
            isDirectory: false,
            child: []
        },
        {
            name: 'assets',
            isDirectory: true,
            child: [
                'images',
                'js',
                'css'
            ]
        },
        {
            name: 'readMe.md',
            isDirectory: false,
            child: []
        },

    ]
    
    const handelToggle = (item) => {
        setOpenDirs((prev) => ({
            ...prev, [item.name]: !prev[item.name]
        }))
    }

    
    // useEffect(() => {console.log(openDirs);
    //     dirs.map((e) => e.isDirectory ? setOpenDirs((prev) => ({...prev, [e.name] : {}})) : null)
    // },[handelToggle])


  return (
    <div className="h-screen bg-slate-950 w-48 text-sm">
    <div className=" text-white">
        <p className='text-white font-thin ml-5'>Explorer</p>
        <div className='flex flex-col gap-2 my-3'>
            {dirs.map((e) => e.isDirectory ? (
                <div className="flex content-center hover:bg-slate-700 hover:cursor-pointer">
                    <div className='' onClick={() => handelToggle(e)}>
                    <svg id={e.name} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                    </div>
                    <a key={e.name} className="p-0.5">{e.name}</a>
                </div>
                ) :
                (
                <div className="flex content-center hover:bg-slate-700 hover:cursor-pointer">
                    <a key={e.name} className="p-0.5 pl-6">{e.name}</a>
                </div>
                )
            )}
        </div>
    </div>

</div>
  )
}

export default Explorer