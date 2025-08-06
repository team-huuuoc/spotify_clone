"use client"
import React from 'react';
import {Link} from "react-router-dom";
import {Tooltip} from "antd";
import {HomeFilled} from "@ant-design/icons";
import {Download, Search} from "lucide-react";


const Header = () => {
   

    return (
        <header className="sticky w-full h-20 pt-4 shadow-md bg-black text-center dark:bg-black top-0 z-50  dark:text-white">
            <div className="flex items-center justify-between px-4 ">
                {/*logo*/}
                <div className={"text-xl font-bold flex justify-between items-start"}>
                    <Link className={"text-white"} to={"/"}>
                        MOI
                    </Link>
                </div>

                {/* Tìm kiếm và các mục khác */}
                <div className={"flex items-center justify-between gap-4 pl-[700px]"}>
                    <Tooltip  placement="bottom" title="Trang chủ">
                        <button
                            type="button"
                            className={"rounded-[50%] w-12 h-12 bg-gray-900 flex items-center justify-center"}
                            aria-label="Trang chủ"
                        >
                            <HomeFilled className={"text-white"}/>
                        </button>
                    </Tooltip>

                 <div className="relative">
                     <input type={"search"} className={"rounded-[50px] w-[400px] h-12 bg-gray-900 pl-12"} placeholder={"Bạn muốn phát nội dung gì?"}/>
                     <Tooltip  placement="bottom" title="Tìm kiếm">
                             <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white" />
                     </Tooltip>
                 </div>
                </div>

                {/* Các mục khác */}
                <div className={"flex items-center justify-between gap-4"}>
                    <p className="text-lg text-gray-300 transition-transform duration-300 hover:scale-110 hover:text-white">
                        Premium
                    </p>
                    <p className="text-lg text-gray-300 transition-transform duration-300 hover:scale-110 hover:text-white">
                        Hỗ trợ
                    </p>
                    <p className="text-lg text-gray-300 transition-transform duration-300 hover:scale-110 hover:text-white">
                        Tải xuống
                    </p>
                    <div className="h-6 w-px bg-gray-600 mx-2"></div> {/* Tạo một đường kẻ dọc mỏng làm dấu phân cách */}

                    <div className="flex items-center text-lg text-gray-300 transition-transform duration-300 hover:scale-110 hover:text-white">
                        <Download className={"w-4 h-4 mr-1"}/> {/* Biểu tượng cài đặt/tải xuống */}
                        Cài đặt Ứng dụng
                    </div>
                    <p className="text-lg text-gray-300 transition-transform duration-300 hover:scale-110 hover:text-white">
                        Đăng ký
                    </p>
                    <button className="bg-white text-black px-6 py-2 rounded-full text-xl font-semibold transition-transform duration-300 hover:scale-110">
                        Đăng nhập
                    </button>
                </div>

            </div>
        </header>
    );
};


export default Header;
