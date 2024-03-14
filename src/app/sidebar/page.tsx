"use client";
import React, { useContext, useState } from 'react'
import { FaBars } from "react-icons/fa6";
import { CiCirclePlus } from "react-icons/ci";
import { FaRegQuestionCircle } from "react-icons/fa";
import { FaClockRotateLeft } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { IoChatbox } from 'react-icons/io5';
import { Context } from '../Context/context';

const SideBar = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const { prevPrompt, recentPrompt,setRecentPrompt ,newChat, onSentMessage }: any = useContext(Context)

    const loadPrompt = async(prompt:any) => {
        setRecentPrompt(prompt)
        await onSentMessage(prompt)
    }

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className={`flex ${isSidebarOpen ? 'w-72' : 'w-24'} flex-col justify-between h-[90vh] md:h-screen bg-slate-100 transition-all duration-300`}>

            <div className="m-8">

                <div className='mb-16 cursor-pointer text-2xl' onClick={toggleSidebar} >
                    <FaBars />
                </div>

                {isSidebarOpen ? (
                    <>
                        <div onClick={newChat} className='bg-slate-200 rounded-full p-2 py-3 cursor-pointer mb-4 z-10'>
                            <button className="flex items-center gap-3 flex-row cursor-pointer">
                                <span className='text-2xl'><CiCirclePlus /></span>
                               <span> New Chat</span>
                            </button>
                        </div>

                        <span className='pt-16 md:text-2xl text-xl font-semibold pl-2'>Recent</span>
                        {prevPrompt.map((prompt: string, index: number) => {
                            return (
                                <div onClick={() => loadPrompt(prompt)} className='mt-4 bg-slate-300 rounded-full p-2 w-full cursor-pointer' key={index}>
                                    <div className='flex flex-row items-center justify-center space-x-2 w-full '>
                                        <IoChatbox />
                                        <span>{prompt.slice(0, 18)}...</span>
                                    </div>
                                 </div>   
                            )
                        })}
                    </>
                ) : (<div>
                    <span onClick={newChat} className='text-5xl cursor-pointer'><CiCirclePlus /></span>
                </div>)}

            </div>



            <div className={`m-8 space-y-6 items-center justify-center pl-2 `}>
                {isSidebarOpen ? (
                    <div className='flex items-center gap-3 cursor-pointer hover:bg-slate-200 rounded-full p-4 text-xl'>
                        <FaRegQuestionCircle />
                        Help
                    </div>
                ) : (
                    <span className='text-5xl flex items-center gap-3 cursor-pointer'></span>
                )}

                {isSidebarOpen ? (
                    <div className='flex items-center gap-3 cursor-pointer hover:bg-slate-200 rounded-full p-4 text-xl'>
                        <FaClockRotateLeft />
                        Activity
                    </div>
                ) : (
                    <span className='text-5xl flex items-center gap-3 cursor-pointer'></span>
                )}

                {isSidebarOpen ? (
                    <div className='flex items-center gap-3 cursor-pointer hover:bg-slate-200 rounded-full p-4 text-xl'>
                        <IoMdSettings />
                        Setting
                    </div>
                ) : (
                    <span className='text-5xl flex items-center gap-3 cursor-pointer'></span>
                )}
            </div>


        </div>

    )
}

export default SideBar