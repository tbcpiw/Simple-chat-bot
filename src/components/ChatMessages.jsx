import { useRef, useEffect  } from 'react'
import { ChatMessage } from './ChatMessage';

function ChatMessages({ chatMessages }) {

  const chatMessagesRef = useRef(null);
  useEffect(() => {
    const containerElem = chatMessagesRef.current;
    if ( containerElem ) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [chatMessages]);
  return (
    <div className = "chat-messages-container"
    ref = {chatMessagesRef}  >
      {chatMessages.map((msg) => {
        return (
          <ChatMessage 
            key = {msg.id}
            message = {msg.message}
            sender = {msg.sender}
          /> 
        )
      })}
    </div>
  );
}

export default ChatMessages;