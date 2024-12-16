import React, { useEffect, useState } from 'react'

function Explorer() {

    const [openDirs, setOpenDirs] = useState({});

    let dirs = [
        {
            name: 'portfolio',
            isDirectory: true,
            child: [
                { name: 'resume.pdf', isDirectory: false, child: [] },
            ]
            // name: 'portfolio',
            // isDirectory: true,
            // child: [
            //   { name: 'images', isDirectory: true, child: [] },
            //   { name: 'js', isDirectory: true, child: [] },
            //   { name: 'css', isDirectory: true, child: [] }
            // ]
        },
        {
          name: 'readMe.md',
        }
    ]
    
    const handelToggle = (item) => {
      if (item.isDirectory){
        setOpenDirs((prev) => ({
            ...prev, [item.name]: !prev[item.name]
          }))
        }
        else{
          console.log(item);
        }
      }

    // const handleSelect = (item) => {
    //   console.log(item);
    // }

  return (
    <div className="bg-slate-950 w-48 text-sm">
    <div className=" text-white">
    <div className='flex flex-col gap-2'>
  {dirs.map((dir) => (
    <div
      className="flex flex-col content-center hover:cursor-pointer"
      key={dir.name}
    >
      {dir.isDirectory ? (
        <div key={dir.name} className="flex hover:bg-slate-700" onClick={() => handelToggle(dir)}>
          <svg
            id={dir.name}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5L15.75 12 8.25 19.5"
            />
          </svg>
          <span className="p-0.5">{dir.name}</span>
        </div>
      ) : (
        <div className="flex content-center hover:bg-slate-700 hover:cursor-pointer">
          <span className="p-0.5 pl-6" onClick={() => handelToggle(dir)}>{dir.name}</span>
        </div>
      )}
      {dir.isDirectory && openDirs[dir.name] ? 
      (
        <div className="pl-4">
          {dir.child.map((child) =>
            child.isDirectory ? (
              <div
                className="flex hover:bg-slate-700 mt-2"
                key={child.name}
                onClick={() => handelToggle(child)}
                >
                <svg
                  id={child.name}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                  >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5L15.75 12 8.25 19.5"
                    />
                </svg>
                <span className="p-0.5">{child.name}</span>
              </div>
            ) : (
              <div
              className="flex content-center hover:bg-slate-700 hover:cursor-pointer mt-2"
                onClick={() => handelToggle(child)}
                key={child.name}
              >
                <span className="p-0.5 pl-6">{child.name}</span>
              </div>
            )
          )}
        </div>
      ) : 
      null }
      {/* {dir.isDirectory && openDirs[dir.name] && (
        <div className="pl-4">
          {dir.child.map((child) =>
            child.isDirectory ? (
              <div
                className="flex"
                key={child.name}
                onClick={() => handelToggle(child)}
              >
                <svg
                  id={child.name}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5L15.75 12 8.25 19.5"
                  />
                </svg>
                <span className="p-0.5">{child.name}</span>
              </div>
            ) : (
              <div
                className="flex content-center hover:bg-slate-700 hover:cursor-pointer"
                key={child.name}
              >
                <span className="p-0.5 pl-6">{child.name}</span>
              </div>
            )
          )}
        </div>
      )} */}
    </div>
  ))}
</div>

    </div>

</div>
  )
}

export default Explorer