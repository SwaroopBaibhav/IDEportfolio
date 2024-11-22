import React from "react";

function Header(){

    const githubLink = 'https://github.com/SwaroopBaibhav'

    return(
        <header>
            <nav className="bg-black text-white">
                <div className="container p-1">
                <div className="space-x- flex items-center sm:flex sm:gap-2">
                    <div>
                        <img src="https://avatars.githubusercontent.com/u/90084961?v=4" alt="profile" className="mx-3 h-8 rounded-full" />
                    </div>
                    <div className="space-x-1 text-sm">
                    <a href="#" className="rounded px-3 py-2 hover:bg-slate-800 hover:text-gray-200">File</a>
                    <a href="#" className="rounded px-3 py-2 hover:bg-slate-800 hover:text-gray-200">Edit</a>
                    <a href="#" className="rounded px-3 py-2 hover:bg-slate-800 hover:text-gray-200">View</a>
                    <a href="#" className="rounded px-3 py-2 hover:bg-slate-800 hover:text-gray-200">Connect</a>
                    </div>
                    <div className="mx-auto">
                    <input type="text" className="block rounded-lg px-40 text-center bg-slate-900" placeholder="Just a portfolio" disabled='true'/>
                    </div>
                    <a href={githubLink} className="gap-2 px-2 rounded hover:bg-slate-500 sm:hidden lg:flex hover:cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
                    </svg>
                    <p>Github</p>
                    </a>
                </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;