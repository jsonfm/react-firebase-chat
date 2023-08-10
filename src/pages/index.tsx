import React from 'react'
import { Link } from "react-router-dom";
import { MessageBubble } from '../components/MessageBubble'
import { UserCard } from '../components/UserCard'
import { FiSend } from "react-icons/fi";
import { IoMdLogOut } from "react-icons/io";

const Home = () => {
  return (
    <section>
        <div className="container px-0 w-full min-h-screen flex items-center">
            <div className="flex md:h-[80vh] w-full rounded-lg overflow-hidden">
                <div className="w-1/3 bg-neutral p-4 md:p-8">
                    <h4 className="md:text-xl mb-6">Recent Messages</h4>
                    <div className="flex flex-col gap-4 md:gap-6 h-[80%] overflow-y-auto">
                        <UserCard/>
                        <UserCard/>
                        <UserCard/>
                        <UserCard/>
                    </div>
                    <Link className="mt-4 capitalize flex items-center gap-2 font-bold hover:scale-[1.05] transition-[200ms]" to="/login">
                       <IoMdLogOut size={20}/>
                       <p>logout</p>
                    </Link>
                </div>
                <div className="w-2/3 h-full ">
                    <div className="flex items-center w-full h-[10%] px-4 bg-gradient-to-r from-primary to-neutral">
                        <h4 className="md:text-xl">Room</h4>
                    </div>
                    <div className="p-4 flex flex-col gap-6 h-[80%] w-full overflow-y-auto bg-dark">
                        <MessageBubble text={"This is a sample message"} own={true} />
                        <MessageBubble text={"This is a sample message. This is a sample message. This is a sample message."}/>
                        <MessageBubble text={"This is a sample message. This is a sample message. This is a sample message."}/>
                        <MessageBubble text={"This is a sample message. This is a sample message. This is a sample message."} own={true}/>
                    </div>
                    <div className="flex justify-between items-center h-[10%] bg-dark/50 px-4">
                        <div>
                            <input className="input" placeholder="Write a message.."/>
                        </div>
                        <FiSend/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

Home.auth = true;

export default Home