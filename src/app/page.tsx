'use client';

import { FaSearch, FaFilter, FaUserCircle, FaUsers, FaCog, FaCommentDots, FaPlus, FaChevronDown, FaSyncAlt, FaQuestionCircle, FaPaperclip, FaSmile, FaMicrophone, FaCheckDouble } from 'react-icons/fa';
import { MdOutlineLabel } from 'react-icons/md';
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

type Message = {
  id: number;
  sender: string;
  senderType: 'me' | 'other';
  text: string;
  time: string;
  date: string;
  phone: string;
};

const messages: Message[] = [
  { id: 1, sender: 'Roshnaq Airtel', senderType: 'other', text: 'Hello, South Euna!', time: '08:01', date: '22-01-2025', phone: '+91 63846 47925' },
  { id: 2, sender: 'Roshnaq Airtel', senderType: 'other', text: 'Hello, Livonia!', time: '08:01', date: '23-01-2025', phone: '+91 63846 47925' },
  { id: 3, sender: 'Roshnaq Airtel', senderType: 'other', text: 'CDERT', time: '09:49', date: '23-01-2025', phone: '+91 63846 47925' },
  { id: 4, sender: 'Periskope', senderType: 'me', text: 'hello', time: '12:07', date: '23-01-2025', phone: '+91 99718 44008' },
  { id: 5, sender: 'Periskope', senderType: 'me', text: 'test el centro', time: '09:49', date: '23-01-2025', phone: '+91 99718 44008' },
  { id: 6, sender: 'Periskope', senderType: 'me', text: 'testing', time: '09:49', date: '23-01-2025', phone: '+91 99718 44008' },
];

function groupMessagesByDate(messages: Message[]) {
  const grouped: { [date: string]: Message[] } = {};
  messages.forEach((msg: Message) => {
    if (!grouped[msg.date]) grouped[msg.date] = [];
    grouped[msg.date].push(msg);
  });
  return grouped;
}

function ChatArea() {
  const [input, setInput] = useState('');
  const groupedMessages = groupMessagesByDate(messages);

  return (
    <section className="flex flex-col h-full bg-[#f7f8fa]">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-white">
        <div>
          <h2 className="font-bold text-lg text-gray-800">Test El Centro</h2>
          <div className="text-xs text-gray-500">
            Roshnaq Airtel, Roshnaq Jio, Bharat Kumar Ramesh, Periskope
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-gray-400 hover:text-green-500"><FaSyncAlt size={18} /></button>
          <button className="text-gray-400 hover:text-green-500"><FaQuestionCircle size={18} /></button>
          {/* Avatars */}
          <div className="flex -space-x-2">
            <div className="w-7 h-7 rounded-full bg-green-200 flex items-center justify-center text-xs font-bold text-green-800 border-2 border-white">H</div>
            <div className="w-7 h-7 rounded-full bg-green-400 flex items-center justify-center text-xs font-bold text-white border-2 border-white">R</div>
            <div className="w-7 h-7 rounded-full bg-gray-300 flex items-center justify-center text-xs font-bold text-gray-700 border-2 border-white">B</div>
            <div className="w-7 h-7 rounded-full bg-green-500 flex items-center justify-center text-xs font-bold text-white border-2 border-white">P</div>
            <div className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-700 border-2 border-white">+3</div>
          </div>
        </div>
      </header>
      {/* Messages */}
      <main className="flex-1 overflow-y-auto px-8 py-6" style={{ backgroundImage: "url('/whatsapp-bg.png')" }}>
        {Object.entries(groupedMessages).map(([date, msgs]) => (
          <div key={date}>
            <div className="flex justify-center my-4">
              <span className="text-xs bg-gray-100 text-gray-500 px-3 py-1 rounded-full">{date}</span>
            </div>
            {msgs.map((msg: Message) => (
              <div key={msg.id} className={`flex ${msg.senderType === 'me' ? 'justify-end' : 'justify-start'} mb-2`}>
                <div className={`max-w-md ${msg.senderType === 'me' ? 'bg-green-100' : 'bg-white'} rounded-lg px-4 py-2 shadow-sm`}>
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`font-semibold text-sm ${msg.senderType === 'me' ? 'text-green-700' : 'text-green-600'}`}>{msg.sender}</span>
                    <span className="text-xs text-gray-400">{msg.phone}</span>
                  </div>
                  <div className="text-gray-800 text-sm">{msg.text}</div>
                  <div className="flex items-center justify-end gap-1 mt-1">
                    <span className="text-xs text-gray-400">{msg.time}</span>
                    {msg.senderType === 'me' && <FaCheckDouble className="text-green-500 text-xs" />}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </main>
      {/* Input */}
      <footer className="px-6 py-4 bg-white border-t border-gray-200 flex items-center gap-2">
        <button className="text-gray-400 hover:text-green-500"><FaSmile size={20} /></button>
        <button className="text-gray-400 hover:text-green-500"><FaPaperclip size={20} /></button>
        <input
          type="text"
          className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200"
          placeholder="Message..."
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button className="text-gray-400 hover:text-green-500"><FaMicrophone size={20} /></button>
        <button className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition">
          <svg width="24" height="24" fill="none"><path d="M4 20L20 12L4 4V10L16 12L4 14V20Z" fill="currentColor"/></svg>
        </button>
        <div className="ml-2 flex items-center gap-1 border border-gray-200 rounded-lg px-2 py-1 cursor-pointer">
          <span className="text-green-700 font-semibold">Periskope</span>
          <FaChevronDown className="text-gray-400" />
        </div>
      </footer>
    </section>
  );
}

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
        <ChatArea />
      </main>
    </div>
  );
}