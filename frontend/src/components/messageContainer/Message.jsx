

const Message = () => {
  return (<>
    <div className="chat chat-end">   {/* chat-end class is used to align the chat to the right */}
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img src="https://avatar.iran.liara.run/public/boy" alt="avatar" />
            </div>
        </div>
        <div className="chat-bubble text-white bg-blue-700">
            Hey, Can I Hire You ?
        </div>
        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">12:42</div>
    </div>

    <div className="chat chat-start max-w-[600px]">  {/* chat-start class is used to align the chat to the left */}
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img src="https://avatar.iran.liara.run/public/boy" alt="avatar" />
            </div>
        </div>
        <div className="chat-bubble text-white bg-blue-700">
        Yes, Sure. Please pay me 100$ for each custom prompt. I will do it for you. I am a professional prompt engineer.
        </div>
        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">12:42</div>
    </div>
    </>
  )
}

export default Message