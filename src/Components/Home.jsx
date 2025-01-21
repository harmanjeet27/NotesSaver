import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { addToPaste, updateToPaste } from '../Redux/PasteSlice';

function Home() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const pasteId = searchParams.get('pasteId');
    const pastes = useSelector((state) => state.paste.pastes);

    const dispatch = useDispatch();

    function createPaste() {
        if (title === '') {
            toast.error("Empty Title");
        } else {
            const paste = {
                title: title,
                content: content,
                _id: pasteId || Date.now().toString(36) + Math.random().toString(36).substring(2),
                createdAt: new Date().toISOString(),
            };

            if (pasteId) {
                // Update
                dispatch(updateToPaste(paste));
                // toast.success("Paste updated successfully!");
            } else {
                // Create
                dispatch(addToPaste(paste));
                // toast.success("Paste created successfully!");
            }

            setTitle('');
            setContent('');
            setSearchParams([]);
        }
    }

    useEffect(() => {
        if(pasteId)
        {
            const paste = pastes.find((p) => p?._id === pasteId);
            console.log(paste);
            setTitle(paste.title);
            setContent(paste.content)
        }
    }, [pasteId])

    return (
        <div className="flex flex-col items-center p-8 min-h-screen bg-gray-900 text-gray-100">
            <Toaster position="top-center" reverseOrder={false} />

            {/* Title Input */}
            <div className="w-full max-w-lg mb-6">
                <input
                    type="text"
                    value={title}
                    placeholder="Enter Title Here..."
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full p-3 bg-gray-800 text-gray-100 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* Button */}
            <div className="w-full max-w-lg mb-6">
                <button
                    onClick={createPaste}
                    className={`w-full p-3 font-semibold rounded-lg transition-colors ${
                        pasteId
                            ? 'bg-blue-600 hover:bg-blue-700 text-white'
                            : 'bg-green-600 hover:bg-green-700 text-white'
                    }`}
                >
                    {pasteId ? 'Update Paste' : 'Create Paste'}
                </button>
            </div>

            {/* Textarea */}
            <div className="w-full max-w-lg">
                <textarea
                    placeholder="Enter Content Here..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    rows={10}
                    className="w-full p-3 bg-gray-800 text-gray-100 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
            </div>
        </div>
    );
}

export default Home;
