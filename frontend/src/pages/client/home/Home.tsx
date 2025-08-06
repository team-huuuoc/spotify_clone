import React from 'react';
import Sidebar from "@/pages/client/home/_components/SideBar";
import MainContent from "@/pages/client/home/_components/MainContent";
import MusicPlayerControls from "@/pages/client/home/_components/MusicPlayerControls";


const Home = () => {
  return (
      <div className="flex h-screen bg-black text-white">
        <Sidebar />

        <div className="flex-1 flex flex-col overflow-hidden">
          <MainContent />
        </div>

        {/*<MusicPlayerControls />*/}
      </div>
  );
};

export default Home;
