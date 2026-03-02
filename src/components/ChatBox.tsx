import { motion } from 'motion/react';
import { useState } from 'react';
import { Icon } from 'semantic-ui-react'

const mockMessages = [
  {
    type: 'ai',
    text: "Hi! I'm David's AI assistant. Feel free to ask me anything about his experience and skills!",
  },
  {
    type: 'user',
    text: 'What technologies does David specialize in?',
  },
  {
    type: 'ai',
    text: "David specializes in React, TypeScript, Node.js, and modern web development. He's passionate about creating seamless user experiences.",
  },
];

export const ChatBox = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ 
        opacity: 1, 
        y: 0, 
        scale: 1,
      }}
      transition={{ delay: 1, duration: 0.8, type: 'spring' }}
      className="w-full"
    >
      <motion.div
        animate={
          isExpanded 
            ? { height: 500, maxWidth: '90vw' } 
            : { height: 80, maxWidth: 400 }
        }
        transition={{ duration: 0.5, type: 'spring', stiffness: 200, damping: 25 }}
        className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200 overflow-hidden mx-auto"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
          <div className="flex items-center gap-3">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              className="w-10 h-10 bg-gradient-to-br from-indigo-700 to-indigo-500 rounded-full flex items-center justify-center"
            >
              {/* <Bot className="w-5 h-5 text-white" /> */}
            </motion.div>
            <div>
              <h3 className="font-semibold text-sm">AI Assistant</h3>
              <div className="flex items-center gap-1">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="w-2 h-2 bg-green-500 rounded-full"
                />
                <span className="text-xs text-gray-500">Online</span>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <motion.button
              onClick={() => setIsExpanded(!isExpanded)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label={isExpanded ? 'Minimize' : 'Expand'}
            >
              {isExpanded ? (
                <Icon name="minus square outline" className="w-4 h-4" />
              ) : (
                <Icon name="plus square outline" className="w-4 h-4" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Messages */}
        {isExpanded && (
          <div className="p-6 h-[340px] overflow-y-auto space-y-4">
            {mockMessages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[70%] rounded-2xl px-4 py-3 ${
                    message.type === 'user'
                      ? 'bg-indigo-700 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                </div>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex justify-start"
            >
              <div className="bg-gray-100 rounded-2xl px-4 py-3">
                <div className="flex gap-1">
                  <motion.div
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ repeat: Infinity, duration: 1, delay: 0 }}
                    className="w-2 h-2 bg-gray-400 rounded-full"
                  />
                  <motion.div
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}
                    className="w-2 h-2 bg-gray-400 rounded-full"
                  />
                  <motion.div
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ repeat: Infinity, duration: 1, delay: 0.4 }}
                    className="w-2 h-2 bg-gray-400 rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* Input */}
        {isExpanded && (
          <div className="p-4 border-t border-gray-200 bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Ask me anything..."
                className="flex-1 px-4 py-2 bg-gray-50 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-all"
                disabled
              />
              <button
                className="px-6 py-2 bg-indigo-700 text-white rounded-full text-sm hover:bg-indigo-600 transition-colors disabled:opacity-50"
                disabled
              >
                Send
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}