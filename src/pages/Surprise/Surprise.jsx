import React from 'react'

function Surprise() {
    return (
        <div className="flex flex-col h-screen overflow-hidden justify-start"> 
            <div className='bg-blue-500'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam veritatis incidunt sit saepe fuga distinctio officia adipisci! Id deserunt dolor similique quis ut aut, totam, quisquam molestias recusandae sed, atque repellat ducimus voluptates earum mollitia dolores cupiditate distinctio labore dignissimos fuga laudantium. Aliquam dicta est repudiandae tenetur magnam corrupti rerum.
            </div>
            <div className='bg-green-500 mt-2 flex flex-col sticky bottom-5'>
            <input className="w-full p-2 rounded text-black" type="text" placeholder="This is your AI" />
                <button>Submit</button>
            </div>
        </div>
    );
}

export default Surprise