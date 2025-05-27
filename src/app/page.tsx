'use client';

import { FaSearch, FaFilter, FaUserCircle, FaUsers, FaCog, FaCommentDots, FaPlus, FaChevronDown } from 'react-icons/fa';
import { MdOutlineLabel, MdOutlineGroupAdd } from 'react-icons/md';
import { useState } from 'react';

const chats = [
  // Example chat data, replace with real data from Supabase later
  {
    id: 1,
    name: 'Test Skope Final 5',
    lastMessage: "Support2: This doesn't go on Tuesday...",
    date: 'Yesterday',
    unread: false,
    label: 'Demo',
    phone: '+91 99718 44008',
    avatar: '', // can use a placeholder or react-icons
  },
  {
    id: 2,
    name: 'Periskope Team Chat',
    lastMessage: 'Periskope: Test message',
    date: '28-Feb-25',
    unread: true,
    label: 'internal',
    phone: '+91 99718 44008',
    avatar: '', // can use a placeholder or react-icons
  },
  // ...add more as needed
];

export default function HomePage() {
  const [selectedChat, setSelectedChat] = useState(chats[0]?.id);

  return (
    <div className="flex h-screen bg-[#f7f8fa]">
      {/* Sidebar */}
      <aside className="w-[340px] bg-white border-r border-gray-200 flex flex-col">
        {/* App Logo and Nav */}
        <div className="flex items-center gap-2 p-4 border-b border-gray-100">
          <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white text-2xl font-bold">P</div>
          <span className="font-bold text-lg text-gray-800">chats</span>
        </div>
        {/* Custom Filter/Search */}
        <div className="flex items-center gap-2 px-4 py-3">
          <button className="bg-green-100 text-green-700 px-3 py-1 rounded-lg font-semibold text-sm">Custom filter</button>
          <button className="ml-auto text-gray-400 hover:text-gray-600"><FaPlus /></button>
        </div>
        <div className="flex items-center gap-2 px-4 pb-2">
          <div className="relative flex-1">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-200"
            />
          </div>
          <button className="text-green-500 hover:bg-green-100 p-2 rounded-lg"><FaFilter /></button>
        </div>
        {/* Chat List */}
        <nav className="flex-1 overflow-y-auto">
          {chats.map(chat => (
            <button
              key={chat.id}
              onClick={() => setSelectedChat(chat.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-green-50 transition text-left ${
                selectedChat === chat.id ? 'bg-green-50' : ''
              }`}
            >
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-xl">
                {chat.avatar ? <img src={chat.avatar} alt={chat.name} className="w-full h-full rounded-full" /> : <FaUserCircle />}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-gray-800">{chat.name}</span>
                  {chat.label && (
                    <span className="ml-2 text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded">{chat.label}</span>
                  )}
                </div>
                <div className="text-xs text-gray-500 truncate">{chat.lastMessage}</div>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-xs text-gray-400">{chat.date}</span>
                {chat.unread && <span className="w-2 h-2 bg-green-500 rounded-full mt-1"></span>}
              </div>
            </button>
          ))}
        </nav>
        {/* Bottom Nav (optional, for icons/settings) */}
        <div className="flex items-center justify-between p-4 border-t border-gray-100">
          <button className="text-gray-400 hover:text-green-500"><FaUsers size={20} /></button>
          <button className="text-gray-400 hover:text-green-500"><MdOutlineLabel size={20} /></button>
          <button className="text-gray-400 hover:text-green-500"><FaCog size={20} /></button>
        </div>
      </aside>
      {/* Main Chat Area */}
      <main className="flex-1 flex flex-col">
        {/* Placeholder for now */}
        <div className="flex-1 flex items-center justify-center text-gray-400 text-2xl">
          Select a chat to start messaging
        </div>
      </main>
    </div>
  );
}