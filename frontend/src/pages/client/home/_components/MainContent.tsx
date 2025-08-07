// components/MainContent.jsx
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const MainContent = () => {
    const songItems = [
        { id: 1, title: 'À Lôi', artist: 'Double2T, Masew', image: 'https://via.placeholder.com/120x120?text=Song1' },
        { id: 2, title: 'Lạc Vào Trong Mơ', artist: 'Sonng M-TP, WUY', image: 'https://via.placeholder.com/120x120?text=Song2' },
        { id: 3, title: 'Không biết nên vui hay buồn', artist: 'Bảo Anh, Kai Bình', image: 'https://via.placeholder.com/120x120?text=Song3' },
        { id: 4, title: 'Cưới Đi', artist: '2T', image: 'https://via.placeholder.com/120x120?text=Song4' },
        { id: 5, title: 'Là Do Em Xui Thôi', artist: 'Khởi, Sofia, Châu', image: 'https://via.placeholder.com/120x120?text=Song5' },
        { id: 6, title: 'Chân Tình', artist: 'Quang Trung, Đinh', image: 'https://via.placeholder.com/120x120?text=Song6' },
        { id: 7, title: 'Kia Bóng Dáng Ai?', artist: 'Tăng Duy Tân, DTAP', image: 'https://via.placeholder.com/120x120?text=Song7' },
        { id: 8, title: 'Có Duyên Không Nợ', artist: 'Mạnh Quỳnh', image: 'https://via.placeholder.com/120x120?text=Song8' },
    ];

    const recentlyPlayed = [
        { id: 1, name: 'Sơn Tùng M-TP', image: 'https://via.placeholder.com/120x120?text=Artist1' },
        { id: 2, name: 'Bích Phương', image: 'https://via.placeholder.com/120x120?text=Artist2' },
        { id: 3, name: 'AMEE', image: 'https://via.placeholder.com/120x120?text=Artist3' },
    ];

    return (
        <div className="flex-1 bg-black p-6 overflow-y-auto custom-scrollbar">
            <div className="sticky top-0 bg-black z-10 py-2 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    

                    {/* Các nút "Playlist", "Nghệ sĩ", "Podcast" */}
                    <div className="flex items-center ml-4 space-x-2">
                        <button className="bg-white text-black text-sm px-4 py-1 rounded-full font-semibold">Tất cả</button>
                        <button className="bg-[#282828] text-white text-sm px-4 py-1 rounded-full hover:bg-[#3A3A3A]">Âm nhạc</button>
                        <button className="bg-[#282828] text-white text-sm px-4 py-1 rounded-full hover:bg-[#3A3A3A]">Podcast</button>
                    </div>
                </div>

              
            </div>

            {/* Phần Nội dung chính */}
            <div className="mt-8">
                {/* Tiêu đề và các nghệ sĩ hàng đầu */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Các nghệ sĩ hàng đầu</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                        {recentlyPlayed.map(artist => (
                            <div key={artist.id} className="bg-[#181818] p-4 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-[#282828] transition-colors">
                                <img src={artist.image} alt={artist.name} className="w-24 h-24 rounded-full mb-2 object-cover" />
                                <h3 className="text-base font-semibold text-white truncate w-full text-center">{artist.name}</h3>
                                <p className="text-xs text-gray-400 truncate w-full text-center">Nghệ sĩ</p>
                            </div>
                        ))}
                        {/* Thêm các nghệ sĩ khác từ hình ảnh */}
                        <div className="bg-[#181818] p-4 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-[#282828] transition-colors">
                            <img src="https://via.placeholder.com/120x120?text=Artist4" alt="Vũ Cát Tường" className="w-24 h-24 rounded-full mb-2 object-cover" />
                            <h3 className="text-base font-semibold text-white truncate w-full text-center">Vũ Cát Tường</h3>
                            <p className="text-xs text-gray-400 truncate w-full text-center">Nghệ sĩ</p>
                        </div>
                        <div className="bg-[#181818] p-4 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-[#282828] transition-colors">
                            <img src="https://via.placeholder.com/120x120?text=Artist5" alt="HIẾU THUẬN" className="w-24 h-24 rounded-full mb-2 object-cover" />
                            <h3 className="text-base font-semibold text-white truncate w-full text-center">HIẾU THUẬN</h3>
                            <p className="text-xs text-gray-400 truncate w-full text-center">Nghệ sĩ</p>
                        </div>
                        <div className="bg-[#181818] p-4 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-[#282828] transition-colors">
                            <img src="https://via.placeholder.com/120x120?text=Artist6" alt="SOOBIN" className="w-24 h-24 rounded-full mb-2 object-cover" />
                            <h3 className="text-base font-semibold text-white truncate w-full text-center">SOOBIN</h3>
                            <p className="text-xs text-gray-400 truncate w-full text-center">Nghệ sĩ</p>
                        </div>
                        <div className="bg-[#181818] p-4 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-[#282828] transition-colors">
                            <img src="https://via.placeholder.com/120x120?text=Artist7" alt="ANH TRAI" className="w-24 h-24 rounded-full mb-2 object-cover" />
                            <h3 className="text-base font-semibold text-white truncate w-full text-center">ANH TRAI</h3>
                            <p className="text-xs text-gray-400 truncate w-full text-center">Nghệ sĩ</p>
                        </div>
                    </div>
                </div>

                {/* Phần "Được đề xuất cho hôm nay" */}
                <div className="mb-8">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-2xl font-bold">Được đề xuất cho hôm nay</h2>
                        <a href="#" className="text-sm text-gray-400 hover:underline">Hiện tất cả</a>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4">
                        {songItems.map(item => (
                            <div key={item.id} className="bg-[#181818] p-4 rounded-lg cursor-pointer hover:bg-[#282828] transition-colors">
                                <img src={item.image} alt={item.title} className="w-full h-auto rounded mb-3" />
                                <h3 className="text-base font-semibold text-white truncate">{item.title}</h3>
                                <p className="text-xs text-gray-400 truncate">{item.artist}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Phần "Mới phát gần đây" */}
                <div className="mb-8">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-2xl font-bold">Mới phát gần đây</h2>
                        <a href="#" className="text-sm text-gray-400 hover:underline">Hiện tất cả</a>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4">
                        {recentlyPlayed.map(item => (
                            <div key={item.id} className="bg-[#181818] p-4 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-[#282828] transition-colors">
                                <img src={item.image} alt={item.name} className="w-24 h-24 rounded-full mb-2 object-cover" />
                                <h3 className="text-base font-semibold text-white truncate">{item.name}</h3>
                                <p className="text-xs text-gray-400 truncate">Nghệ sĩ</p> {/* Hoặc Album, Podcast */}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainContent;