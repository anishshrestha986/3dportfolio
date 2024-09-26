'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { BiSolidMessageAltDetail } from 'react-icons/bi';
import {     FaArrowAltCircleLeft, FaArrowAltCircleRight,     FaFileCode,      FaPaperclip } from 'react-icons/fa';
import {  FaHouseChimney } from 'react-icons/fa6';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const router = usePathname();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const MenuItem = ({ icon, name, route }:{icon:React.ReactNode, name?:string, route:string}) => {

    return (
        <Link
            href={route}
            onClick={() => {
                setIsOpen(oldVal => !oldVal);
            }}
            className={`flex [&>*]:my-auto text-md p-3 `}
        >
            <div className="text-2xl flex [&>*]:mx-auto ">
                {icon}
            </div>
            <div>{name && name}</div>
        </Link>
    )
}

  return (
    <div className={'relative'}>
      {/* Sidebar */}
      <div
        className={`clip fixed flex items-center justify-center top-[25vh] left-[1rem] h-[45vh] w-30 bg-white text-black rounded-tr-full rounded-br-full transition-transform transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <ul className="p-4 space-y-10 ">
          <MenuItem icon={<FaHouseChimney color={router === '/' || '/dashboard'? '1b73d3':'98DBFF'}/>} route="/dashboard" />
          <MenuItem icon={<FaFileCode color={router === '/projects' ? '1b73d3':'98DBFF'}/>} route="/projects" />
          <MenuItem icon={<FaPaperclip color={router === '/skills' ? '1b73d3':'98DBFF'}/>} route="/resume" />
          <MenuItem icon={<BiSolidMessageAltDetail color={router === '/contact' ? '1b73d3':'98DBFF'}/>} route="/contact" />

        </ul>
      </div>

      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className={`fixed top-[46vh] left-[82px] rounded-full text-2xl bg-white ${isOpen? 'translate-x-0': '-translate-x-10' } hover:bg-[#1b73d3] text- transition-transform transform`}
      >
        {isOpen? <FaArrowAltCircleLeft color='98DBFF'/> :<FaArrowAltCircleRight color='98DBFF'/>}
      </button>
    </div>
  );
};

export default Sidebar;
