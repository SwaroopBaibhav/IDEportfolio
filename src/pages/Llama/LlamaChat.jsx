import React, { useState } from 'react';
import { HfInference } from "@huggingface/inference";
import { useLoaderData } from 'react-router-dom';

function LlamaChat() {
    const data = useLoaderData();

    const [response, setResponse] = useState('');
    const [input, setInput] = useState('');

    const handleInput = async (e) => {
        e.preventDefault();
        const res = await getResponse(input);
        setResponse(res);
        setInput('');
    };

    return (
        <div>
            <div className='flex flex-col gap-2 relative'>
                <input 
                    className='text-black'
                    type="text" 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)} 
                />
                <button onClick={handleInput} className='bg-blue-500 hover:bg-blue-800'>Send</button>
                <div id='response'>
                    {response}
                </div>
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

    return chatCompletion.choices[0].message.content;
};

export default LlamaChat;