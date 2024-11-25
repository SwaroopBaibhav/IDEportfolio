import React, { useState } from 'react';
import { HfInference } from "@huggingface/inference";

function LlamaChat() {

    const [input, setInput] = useState('');
    const [chatting, setChatting] = useState([])

    const handleInput = async (e) => {
        e.preventDefault();
        setChatting((prev) => [...prev, {content: input, role: 'user'}])
        setInput('');
        const res = await getResponse(input);
        setChatting((prev) => [...prev, {content: res.content, role: res.role}])
        // console.log(chatting);
    };

    return (
        // making the h-screen makes it scrollable, while h-full makes it useless
        <div className="flex flex-col h-screen overflow-hidden"> 

            <div className='flex-1 overflow-y-auto p-2 h-fit'>
                
                {chatting.map((message, role) => {      // here the role is actualy the index (reference => 10/trash.js)      
                    return message.role === 'user' ? (
                    <div key={role} id="response" className="flex-1 p-2 overflow-auto m-1 bg-blue-400 text-white rounded break-words">
                        {message.content}
                    </div>
                    ) : (
                        <div id="user" className="flex-1 p-2 overflow-auto m-1 bg-green-500 text-white rounded break-words">
                        {message.content}
                    </div>
                    )
                })}
            </div>  

            <div className="mt-2 flex flex-col fixed bottom-5 mb-3 px-2">
                <input
                    className="w-full p-2 rounded text-black"
                    type="text"
                    placeholder="This is your AI"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button
                    onClick={handleInput}
                    className="mt-2 bg-blue-500 hover:bg-blue-700 text-white w-full p-2 rounded"
                >
                    Send
                </button>
            </div>
      </div>
    );
}

export const getResponse = async (query) => {
    const client = new HfInference("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");
    const chatCompletion = await client.chatCompletion({
        model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
        messages: [
            {
                role: "user",
                content: query
            }
        ],
        max_tokens: 100
    });

    // console.log(chatCompletion.choices[0].message.role);
    
    return {content: chatCompletion.choices[0].message.content, role: chatCompletion.choices[0].message.role}
};

export default LlamaChat;