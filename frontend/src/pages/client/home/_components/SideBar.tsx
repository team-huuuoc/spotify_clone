// components/Sidebar.jsx
import React from 'react';
import { Home, Search, Library, Plus, Heart, Download } from 'lucide-react'; // Các icon từ lucide-react (hoặc react-icons)

const Sidebar = () => {
    return (
        <aside className="bg-black text-gray-300 w-96 p-4 flex flex-col h-full overflow-y-auto custom-scrollbar">
            <div className="mb-6 px-2">
                <img src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Spotify_Logo_RGB_Green.max-1000x1000.png" alt="Spotify Logo" className="h-10" />
            </div>

            <nav className="mb-6">
                <ul>
                    <li className="mb-2">
                        <a href="#" className="flex items-center text-sm font-bold text-white p-2 rounded-md bg-[#282828]"> {/* Active state */}
                            <Home className="w-5 h-5 mr-3" />
                            Trang chủ
                        </a>
                    </li>
                    <li className="mb-2">
                        <a href="#" className="flex items-center text-sm p-2 rounded-md hover:text-white hover:bg-[#282828]">
                            <Search className="w-5 h-5 mr-3" />
                            Tìm kiếm
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center text-sm p-2 rounded-md hover:text-white hover:bg-[#282828]">
                            <Library className="w-5 h-5 mr-3" />
                            Thư viện của bạn
                        </a>
                    </li>
                </ul>
            </nav>

            <div className="mb-6">
                <ul className="space-y-2">
                    <li>
                        <a href="#" className="flex items-center text-sm p-2 rounded-md hover:text-white hover:bg-[#282828]">
                            <div className="bg-gray-400 p-1 rounded-sm mr-3 flex items-center justify-center">
                                <Plus className="w-3 h-3 text-black" />
                            </div>
                            Tạo danh sách phát
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center text-sm p-2 rounded-md hover:text-white hover:bg-[#282828]">
                            <div className="bg-gradient-to-br from-indigo-700 to-white p-1 rounded-sm mr-3 flex items-center justify-center">
                                <Heart className="w-3 h-3 text-white" />
                            </div>
                            Bài hát đã thích
                        </a>
                    </li>
                </ul>
            </div>

            <div className="flex-grow border-t border-gray-800 pt-4 overflow-y-auto custom-scrollbar">
                <ul className="space-y-2">
                    {Array.from({ length: 10 }).map((_, i) => (
                        <li key={i}>
                            <a href="#" className="text-sm text-gray-400 hover:text-white block p-1 rounded-md">
                                Danh sách phát của tôi #{i + 1}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a href="#" className="text-sm text-gray-400 hover:text-white block p-1 rounded-md">
                            <span className="text-green-500">Thuần Podcast</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-sm text-gray-400 hover:text-white block p-1 rounded-md">
                            <span className="text-green-500">Playlist của tôi #1</span>
                        </a>
                    </li>
                    {/* Các avatar người dùng ở dưới cùng */}
                    <li className="flex items-center mt-4">
                        <img src="https://via.placeholder.com/24" alt="User" className="w-6 h-6 rounded-full mr-2"/>
                        <span className="text-sm text-gray-400 hover:text-white">Hà Anh Tuấn</span>
                    </li>
                    <li className="flex items-center">
                        <img src="https://via.placeholder.com/24" alt="User" className="w-6 h-6 rounded-full mr-2"/>
                        <span className="text-sm text-gray-400 hover:text-white">Đen</span>
                    </li>
                    <li className="flex items-center">
                        <img src="https://via.placeholder.com/24" alt="User" className="w-6 h-6 rounded-full mr-2"/>
                        <span className="text-sm text-gray-400 hover:text-white">Sơn Tùng M-TP</span>
                    </li>
                </ul>
            </div>

           
        </aside>
    );
};

export default Sidebar;