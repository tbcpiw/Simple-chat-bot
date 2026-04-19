import { useState } from 'react'
import './App.css'
import { ChatInput } from './components/ChatInput'
import ChatMessages from './components/ChatMessages'
function Ap() {
  const array = useState( [{
    message: 'hello Chatbot',
    sender: 'user',
    id: "1"
  }, {
    message: 'Hello, How can I help u?', 
    sender: 'robot',
    id: "2"
  }]);
  const [chatMessages, setChatMessages] = array;  // this is array destructuring
  // const chatMessages = array[0];
  // const setChatMessages = array[1]; 

  return (
  <div className = "app-container">
    
    <ChatInput 
      chatMessages = {chatMessages}
      setChatMessages = {setChatMessages}
    />
    <ChatMessages 
      chatMessages = {chatMessages}
    />
    
  </div>
  );
}
export default App
