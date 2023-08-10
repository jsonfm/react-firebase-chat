import React from 'react'


interface MessageBubbleProps {
    text?: string;
    user?: any;
    own?: boolean;
}

export const MessageBubble = ({ text, user, own = false }: MessageBubbleProps) => {
    const align = !own ? 'self-start' : 'self-end';
    const background = own ? 'bg-zinc-800' : 'bg-info';
    return (
        <div className={`${align} flex gap-4 items-end`}>
            {!own && (
                <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1592188657297-c6473609e988?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                        className="w-full h-full object-cover"
                    />
                </div>
            )}
            <div className={`${background} px-6 py-4 rounded-2xl max-w-[200px] md:max-w-[350px]`}>
                <p>
                    {text}
                </p>
            </div>
        </div>
    )
}
