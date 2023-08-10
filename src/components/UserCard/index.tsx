import React from 'react'


interface UserCardProps {
    user?: any;
}

export const UserCard = ({ user }: UserCardProps) => {
  return (
    <div className="flex items-center p-2 rounded-lg cursor-pointer hover:bg-secondary/10 transition-[.2s]">
        <div className="w-12 h-12 overflow-hidden rounded-full">
            <img
                src="https://images.unsplash.com/photo-1592188657297-c6473609e988?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                className="w-full h-full object-cover"
            />
        </div>
        <div className="px-4">
            <p>
                user name
            </p>
            <span className="text-zinc-400">
                Active 1h ago
            </span>
        </div>
    </div>
  )
}
