import React, { useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { addToPaste, updateToPaste } from '../Redux/PasteSlice';
function ViewPaste() {

    const {id} = useParams();
    const pastes = useSelector((state) => state.paste.pastes);

    const paste = pastes.filter((p) => p._id === id)[0];
    
  return (
    <div className="flex flex-col items-center p-8 min-h-screen bg-gray-900 text-gray-100">
            <Toaster position="top-center" reverseOrder={false} />

            {/* Title Input */}
            <div className="w-full max-w-lg mb-6">
                <input
                    type="text"
                    value={paste.title}
                    disabled
                    placeholder="Enter Title Here..."
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full p-3 bg-gray-800 text-gray-100 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* Textarea */}
            <div className="w-full max-w-lg">
                <textarea
                    placeholder="Enter Content Here..."
                    value={paste.content}
                    disabled
                    onChange={(e) => setContent(e.target.value)}
                    rows={10}
                    className="w-full p-3 bg-gray-800 text-gray-100 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
            </div>
        </div>
  )
}

export default ViewPaste
