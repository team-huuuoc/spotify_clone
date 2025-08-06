import {ListMusic, Maximize, Mic2, Play, Repeat, Shuffle, SkipBack, SkipForward, Speaker, Volume2} from "lucide-react";

const Footer = () => {


    return (
        <footer>
            <div className=" sticky fixed bottom-0 left-0 w-full bg-black text-white py-4 px-6 flex flex-col justify-center items-center">


                {/* Các nút điều khiển chính giữa */}
                <div className="flex items-center gap-6 mb-4">
                    <Shuffle className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
                    <SkipBack className="w-8 h-8 text-gray-400 hover:text-white cursor-pointer" />
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-black cursor-pointer">
                        <Play className="w-7 h-7" /> {/* Hoặc Pause */}
                    </div>
                    <SkipForward className="w-8 h-8 text-gray-400 hover:text-white cursor-pointer" />
                    <Repeat className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
                </div>
                {/* Thanh tiến trình */}
                <div className="w-full max-w-2xl mb-4 flex items-center justify-center">
                    <div className="w-full h-1 bg-gray-700 rounded-full relative">
                        {/* Track đã phát (có thể thêm dynamic width ở đây) */}
                        <div className="absolute h-full bg-white rounded-full w-[30%]"></div> {/* Ví dụ 30% đã phát */}
                        {/* Đầu kéo (Thumb) */}
                        <div className="absolute left-[30%] -translate-x-1/2 -translate-y-1/2 top-1/2 w-3 h-3 bg-white rounded-full shadow-md"></div>
                    </div>
                </div>

                {/* Các biểu tượng bên phải (thường đặt trong một div riêng để căn chỉnh) */}
                <div className="absolute right-6 bottom-6 flex items-center gap-4">
                    <Mic2 className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                    <ListMusic className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                    <Speaker className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                    <Maximize className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                    {/* Thanh âm lượng */}
                    <div className="flex items-center gap-2">
                        <Volume2 className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                        <div className="w-24 h-1 bg-gray-700 rounded-full relative">
                            <div className="absolute h-full bg-white rounded-full w-[70%]"></div> {/* Ví dụ 70% âm lượng */}
                            <div className="absolute left-[70%] -translate-x-1/2 -translate-y-1/2 top-1/2 w-3 h-3 bg-white rounded-full shadow-md"></div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;