import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Search() {

  const repos = useLoaderData()

  return (
    <div className="bg-slate-950 w-48 text-sm">
      <div className=" text-white">
        <div className='flex flex-col gap-2'>
         {repos.map((e) => (
          <div className="flex content-center hover:bg-slate-700 hover:cursor-pointer">

            <a key={e.name} href={e.html_url} target='_blank' className="p-0.5 pl-6 flex gap-3">
              {e.name}

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>

            </a>
            
          </div>
         ))}
        </div>
      </div>
    </div>
  )
}

export const loadRepos = async() => {
  const response = await fetch('https://api.github.com/users/SwaroopBaibhav/repos')
  return response.json()
}


export default Search