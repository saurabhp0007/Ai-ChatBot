"use client";
import React, { useContext } from 'react'
import { FaCompass } from "react-icons/fa6";
import { FaRegLightbulb } from "react-icons/fa6";
import { CiChat2 } from "react-icons/ci";
import { IoCodeSlash } from "react-icons/io5";
import { LuMic } from "react-icons/lu";
import { MdOutlineImageSearch } from "react-icons/md";
import { Context } from "../Context/context";
import { IoSendSharp } from "react-icons/io5";
import { MdOutlineQuestionAnswer } from "react-icons/md";
import { ScrollArea } from "@/components/ui/scroll-area"
import { Skeleton } from '@/components/ui/skeleton';


const Main = () => {
    const { loading, resultData, input, setInput, prevPrompt, recentPrompt, showResult, onSentMessage }: any = useContext(Context)
    const handleEnter = (e: any) => {
        if (e.key === 'Enter') {
            // Call your function here
            onSentMessage();
        }
    };
    return (

        <div className='flex flex-col justify-between w-full h-screen'>
            <div className='text-3xl m-4 items-start'>
                MindMesh
            </div>
            {!showResult ? (
                <>
                    <div className='flex flex-col justify-center items-center '>
                        <span className='md:text-3xl text-xl'> Hello , Saurbh</span>
                        <span className="bg-gradient-to-r from-blue-500 to-orange-500 text-transparent bg-clip-text md:text-5xl text-lg font-bold p-2">
                            How can I help you today
                        </span>
                        <div className='hidden md:flex flex-row justify-center items-center space-x-2 mt-12 sm:hidden mx-2'>
                            <div className='relative hover:bg-slate-200 bg-slate-300 h-[150px] w-[250px] rounded-xl p-2 mb-4 md:w-1/2 lg:w-1/4 cursor-pointer'>
                                <span className='block'>Suggest a beautiful place to visit on an upcoming road trip</span>
                                <FaCompass className='absolute bottom-2 right-2 text-3xl' />
                            </div>
                            <div className='relative hover:bg-slate-200 bg-slate-300 h-[150px] w-[250px] rounded-xl p-2 mb-4 md:w-1/2 lg:w-1/4 cursor-pointer'>
                                <span className='block'>Briefly Explain how something works like an engineer</span>
                                <FaRegLightbulb className='absolute bottom-2 right-2 text-3xl' />
                            </div>
                            <div className='relative hover:bg-slate-200 bg-slate-300 h-[150px] w-[250px] rounded-xl p-2 mb-4 md:w-1/2 lg:w-1/4 cursor-pointer'>
                                <span className='block'>Explain what the keto diet is in simple terms</span>
                                <CiChat2 className='absolute bottom-2 right-2 text-3xl' />
                            </div>
                            <div className='relative hover:bg-slate-200 bg-slate-300 h-[150px] w-[250px] rounded-xl p-2 mb-4 md:w-1/2 lg:w-1/4 cursor-pointer'>
                                <span className='block'>Give me phrases to learn a new language</span>
                                <IoCodeSlash className='absolute bottom-2 right-2 text-3xl' />
                            </div>

                        </div>
                    </div>
                </>
            )
                :
                <>
                    <div className='flex flex-col justify-start items-start m-10'>
                        <div className='flex  justify-center items-start m-2 flex-row'>
                            <MdOutlineQuestionAnswer className='md:text-3xl text-xl' />
                            <span className='md:text-2xl text-xl'> {recentPrompt}</span>
                        </div>
                        {loading ?
                            <div className=' space-y-5'>
                                <div className="flex items-center space-x-4">
                                    <Skeleton className="h-12 md:w-52 w-12 rounded-full" />
                                    <div className="space-y-2">
                                        <Skeleton className="h-4 md:w-[500px] w-[100px]" />
                                        <Skeleton className="h-4 md:w-[400px] w-[100px]" />
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <Skeleton className="h-12 md:w-52 w-12 rounded-full" />
                                    <div className="space-y-2">
                                        <Skeleton className="h-4 md:w-[500px] w-[100px]" />
                                        <Skeleton className="h-4 md:w-[400px] w-[100px]" />
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <Skeleton className="h-12 md:w-52 w-12 rounded-full" />
                                    <div className="space-y-2">
                                        <Skeleton className="h-4 md:w-[500px] w-[100px]" />
                                        <Skeleton className="h-4 md:w-[400px] w-[100px]" />
                                    </div>
                                </div>


                            </div>
                            : (
                                <ScrollArea className="h-[500px] w-full rounded-md border p-4">
                                    <span className='md:text-xl text-xs' dangerouslySetInnerHTML={{ __html: resultData }} />
                                </ScrollArea>
                            )}




                    </div>
                </>}


            <div className='flex justify-center items-center md:mb-16 mb-8 mx-10 relative'>
                <input
                    onChange={(e) => setInput(e.target.value)}
                    value={input}
                    type='text'
                    placeholder='Search...'
                    className='bg-gray-100 p-5 rounded-full pr-16 md:w-3/4 w-full'
                    onKeyDown={handleEnter}
                />
                <button className="absolute right-3 top-0 bottom-0 flex items-center cursor-pointer">
                    <IoSendSharp className='md:text-2xl text-lg' onClick={() => onSentMessage()} />
                </button>
            </div>

        </div>

    )
}

export default Main