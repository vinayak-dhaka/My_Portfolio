import React, { useState } from "react";

const Chatbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hey there!  I’m Vinayak’s virtual assistant 👋 . How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const simulateTyping = async (fullText) => {
    setIsTyping(true);

    setMessages((prev) => [...prev, { sender: "bot", text: "" }]);

    for (let i = 0; i < fullText.length; i++) {
      const currentChunk = fullText.substring(0, i + 1);

      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = { sender: "bot", text: currentChunk };
        return updated;
      });

      await new Promise((resolve) => setTimeout(resolve, 20));
    }

    setIsTyping(false);
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    const userInput = input;
    setInput("");

    setMessages((prev) => [...prev, userMessage]);

    try {
      const res = await fetch("https://dzas90cz1w1pi.cloudfront.net/api/chat", { ... })
, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userInput }),
      });

      const data = await res.json();

      await simulateTyping(data.reply);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Oops, something went wrong 😅" },
      ]);
    }
  };

  return (
    <>
      <div
        className="chatbot-button"
        onClick={() => setIsOpen(!isOpen)}
        title="Chat with Vinayak's virtual self"
      >
        💬
      </div>

      {isOpen && (
        <div className="chatbox-container">
          <div className="chatbox-header">
            <h4>Chat with Vinayak</h4>
            <button onClick={() => setIsOpen(false)}>✖</button>
          </div>

          <div className="chatbox-body">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`chat-message ${
                  msg.sender === "user" ? "user-msg" : "bot-msg"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <form className="chatbox-input" onSubmit={handleSend}>
            <input
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" disabled={isTyping}>
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbox;
