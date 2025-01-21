import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromPaste } from '../Redux/PasteSlice';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import ViewPaste from './ViewPaste';

function PasteList() {
  const pastes = useSelector((state) => state.paste.pastes);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPastes = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  function deletePaste(pasteId){
    dispatch(removeFromPaste(pasteId));
  }

  function copyPaste(content) {
    navigator.clipboard.writeText(content)
      .then(() => {
        toast.success("Paste copied to clipboard!");
      })
      .catch((err) => {
        toast.error("Failed to copy paste.");
      });
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-6">
      {/* Search Input */}
      <div className="mb-8">
        <input
          type="search"
          placeholder="Search Here..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-lg p-3 bg-gray-800 border border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-600"
        />
      </div>

      {/* Paste List */}
      <div className="flex flex-col space-y-6">
        {filteredPastes.length > 0 ? (
          filteredPastes.map((paste) => (
            <div
              key={paste?._id}
              className="bg-gray-800 border border-gray-700 rounded-lg p-4 shadow hover:shadow-md transition-shadow"
            >
              {/* Title */}
              <div className="text-xl font-semibold mb-2">{paste.title}</div>

              {/* Content */}
              <div className="text-gray-300 mb-4 line-clamp-3">
                {paste.content}
              </div>

              {/* Buttons */}
              <div className="flex space-x-4 mb-4 place-content-evenly">
                <button 
                className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600">
                  <Link to={`/?pasteId=${paste?._id}`}>Edit</Link>
                </button>
                <button onClick={() => deletePaste(paste?._id)} className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600">
                  Delete
                </button>
                <button onClick={() => copyPaste(paste.content)} className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600">
                  Copy
                </button>
                <button className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600">
                  Share
                </button>
                <button className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600">
                  <Link to={`/paste/${paste?._id}`} >
                  View
                  </Link>
                </button>
              </div>

              {/* Created At */}
              <div className="text-sm text-gray-400">
  {new Date(paste.createdAt).toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  })}
</div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-400">No pastes found.</div>
        )}
      </div>
    </div>
  );
}

export default PasteList;
