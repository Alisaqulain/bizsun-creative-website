"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send, Bot, User, Sparkles, CheckCircle2, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface Message {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

const initialBotMessage: Message = {
  id: "1",
  text: "Hello! 👋 Welcome to Bizsun Creative. I'm here to help you learn more about our digital branding and marketing services. How can I assist you today?",
  sender: "bot",
  timestamp: new Date(),
}

const quickReplies = [
  "Our Services",
  "Pricing & Packages",
  "Contact Information",
  "View Portfolio",
]

const botResponses: Record<string, string> = {
  "our services": "We offer comprehensive digital solutions:\n\n✨ Brand Identity & Logo Design\n🌐 Website Design & Development\n📱 Social Media Marketing\n🔍 SEO & Digital Marketing\n📊 Content Creation\n🎨 Creative Design Services\n\nWhich service interests you most?",
  "pricing & packages": "Our pricing is tailored to your needs:\n\n💼 Starter Package - Perfect for small businesses\n🚀 Growth Package - For expanding companies\n⭐ Enterprise Package - Custom solutions\n\nAll packages include consultation and support. Would you like to discuss your specific requirements?",
  "contact information": "Get in touch with us:\n\n📧 Email: hello@bizsuncreative.com\n📞 Phone: Available on our contact page\n📍 Location: Visit our contact page for details\n💬 Live Chat: You're using it right now!\n\nWe typically respond within 24 hours. For urgent matters, please call us!",
  "view portfolio": "Great choice! Our portfolio showcases:\n\n🎯 Branding projects across industries\n💻 Modern website designs\n📈 Successful marketing campaigns\n🎨 Creative design work\n\nVisit our Portfolio page to see detailed case studies. What type of work would you like to see?",
}

export function Chatbox() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [messages, setMessages] = React.useState<Message[]>([initialBotMessage])
  const [inputValue, setInputValue] = React.useState("")
  const [isTyping, setIsTyping] = React.useState(false)
  const messagesEndRef = React.useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  React.useEffect(() => {
    scrollToBottom()
  }, [messages])

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase().trim()
    
    // Check for exact matches in quick replies (improved matching)
    for (const [key, response] of Object.entries(botResponses)) {
      if (lowerMessage.includes(key) || lowerMessage === key) {
        return response
      }
    }

    // Service-related queries
    if (lowerMessage.includes("service") || lowerMessage.includes("what do you do") || lowerMessage.includes("what can you do") || lowerMessage.includes("offer")) {
      return "We specialize in:\n\n✨ Digital Branding & Identity\n🌐 Web Design & Development\n📱 Social Media Marketing\n🔍 SEO & Digital Marketing\n📊 Content Strategy\n🎨 Creative Design\n\nWhich service would you like to know more about?"
    }
    
    // Pricing queries
    if (lowerMessage.includes("price") || lowerMessage.includes("cost") || lowerMessage.includes("how much") || lowerMessage.includes("budget") || lowerMessage.includes("afford")) {
      return "Our pricing is customized based on your project needs:\n\n💼 We offer flexible packages for all business sizes\n📋 Each project includes a free consultation\n💰 Competitive rates with transparent pricing\n\nWould you like to discuss your specific requirements? I can help you find the right package!"
    }
    
    // Contact queries
    if (lowerMessage.includes("contact") || lowerMessage.includes("email") || lowerMessage.includes("phone") || lowerMessage.includes("reach") || lowerMessage.includes("get in touch")) {
      return "You can reach us through:\n\n📧 Email: hello@bizsuncreative.com\n📞 Phone: Check our contact page\n🌐 Website: Visit our contact page for a form\n💬 Live Chat: Right here, right now!\n\nWe respond within 24 hours. How can we help you today?"
    }
    
    // Portfolio/work queries
    if (lowerMessage.includes("portfolio") || lowerMessage.includes("work") || lowerMessage.includes("project") || lowerMessage.includes("example") || lowerMessage.includes("case study")) {
      return "Our portfolio features:\n\n🎯 Successful branding transformations\n💻 Modern, responsive websites\n📈 Growth-driven marketing campaigns\n🎨 Award-winning creative designs\n\nVisit our Portfolio page to explore detailed case studies. What industry interests you?"
    }
    
    // Branding queries
    if (lowerMessage.includes("brand") || lowerMessage.includes("logo") || lowerMessage.includes("identity")) {
      return "Our branding services include:\n\n🎨 Logo Design & Brand Identity\n📐 Visual Identity Systems\n📝 Brand Guidelines\n🎯 Brand Strategy & Positioning\n\nWe help create memorable brands that resonate with your audience. Tell me about your brand vision!"
    }
    
    // Website queries
    if (lowerMessage.includes("website") || lowerMessage.includes("web design") || lowerMessage.includes("web development") || lowerMessage.includes("site")) {
      return "Our web services cover:\n\n🌐 Custom Website Design\n📱 Responsive & Mobile-First\n⚡ Fast & SEO-Optimized\n🛠️ Modern Development\n🔧 Maintenance & Support\n\nWe create websites that convert visitors into customers. What type of website do you need?"
    }
    
    // Marketing queries
    if (lowerMessage.includes("marketing") || lowerMessage.includes("seo") || lowerMessage.includes("social media") || lowerMessage.includes("advertising")) {
      return "Our marketing services:\n\n📱 Social Media Management\n🔍 SEO & Search Marketing\n📊 Content Marketing\n📈 Analytics & Reporting\n🎯 Paid Advertising\n\nWe help businesses grow their online presence and reach their target audience. What's your marketing goal?"
    }
    
    // Greetings
    if (lowerMessage.includes("hello") || lowerMessage.includes("hi") || lowerMessage.includes("hey") || lowerMessage.includes("good morning") || lowerMessage.includes("good afternoon") || lowerMessage.includes("good evening")) {
      return "Hello! 👋 Great to meet you! I'm here to help you learn about Bizsun Creative's services. What would you like to know?\n\nYou can ask about:\n• Our services\n• Pricing\n• Portfolio\n• How to contact us"
    }
    
    // Thank you responses
    if (lowerMessage.includes("thank") || lowerMessage.includes("thanks")) {
      return "You're very welcome! 😊\n\nIs there anything else I can help you with? Feel free to ask about our services, pricing, or portfolio. Or visit our contact page to speak with our team directly!"
    }
    
    // Help requests
    if (lowerMessage.includes("help") || lowerMessage.includes("assist")) {
      return "I'm here to help! I can provide information about:\n\n✨ Our Services\n💰 Pricing & Packages\n📁 Portfolio & Case Studies\n📞 Contact Information\n\nWhat would you like to know more about?"
    }

    // Generic response with helpful suggestions
    return "I'd be happy to help! 🤔\n\nI can provide information about:\n• Our digital services and solutions\n• Pricing and package options\n• Portfolio and case studies\n• Contact information\n\nFeel free to ask me anything, or visit our website pages for more detailed information!"
  }

  const handleSendMessage = (text?: string) => {
    const messageText = text || inputValue.trim()
    if (!messageText) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate bot response delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(messageText),
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botResponse])
      setIsTyping(false)
    }, 1000 + Math.random() * 1000)
  }

  const handleQuickReply = (reply: string) => {
    handleSendMessage(reply)
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0, rotate: -180 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0, opacity: 0, rotate: 180 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <div className="relative">
              {/* Pulsing ring animation */}
              <motion.div
                className="absolute inset-0 rounded-full bg-primary/20"
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute inset-0 rounded-full bg-primary/10"
                animate={{
                  scale: [1, 1.6, 1],
                  opacity: [0.3, 0, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
              {/* Notification badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 flex items-center justify-center border-2 border-background"
              >
                <span className="text-[10px] font-bold text-white">1</span>
              </motion.div>
              <Button
                onClick={() => setIsOpen(true)}
                size="lg"
                className="relative h-16 w-16 rounded-full shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-110 bg-primary hover:bg-primary/90"
                aria-label="Open chat"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                >
                  <MessageCircle className="h-7 w-7" />
                </motion.div>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-2rem)]"
          >
            <Card className="flex flex-col h-[600px] max-h-[calc(100vh-8rem)] shadow-2xl border-2 overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-primary/10 to-primary/5">
                <div className="flex items-center gap-3">
                  <motion.div
                    className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg"
                    animate={{
                      boxShadow: [
                        "0 0 0 0 rgba(25, 95%, 53%, 0.4)",
                        "0 0 0 8px rgba(25, 95%, 53%, 0)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  >
                    <Bot className="h-6 w-6 text-primary-foreground" />
                  </motion.div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-sm">Bizsun Support</h3>
                      <motion.div
                        className="h-2 w-2 rounded-full bg-green-500"
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </div>
                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      Usually replies in seconds
                    </p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="h-8 w-8 hover:bg-destructive/10 hover:text-destructive transition-colors"
                  aria-label="Close chat"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-muted/30">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={cn(
                      "flex gap-2",
                      message.sender === "user" ? "justify-end" : "justify-start"
                    )}
                  >
                    {message.sender === "bot" && (
                      <div className="h-9 w-9 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center flex-shrink-0 shadow-md">
                        <Bot className="h-5 w-5 text-primary-foreground" />
                      </div>
                    )}
                    <div
                      className={cn(
                        "max-w-[80%] rounded-2xl px-4 py-3 shadow-md",
                        message.sender === "user"
                          ? "bg-primary text-primary-foreground rounded-br-sm"
                          : "bg-card border-2 border-primary/20 text-card-foreground rounded-bl-sm"
                      )}
                    >
                      <p className="text-sm whitespace-pre-wrap leading-relaxed">{message.text}</p>
                      <div className="flex items-center gap-1 mt-2">
                        <p className="text-xs opacity-70">
                          {message.timestamp.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </p>
                        {message.sender === "user" && (
                          <CheckCircle2 className="h-3 w-3 opacity-70" />
                        )}
                      </div>
                    </div>
                    {message.sender === "user" && (
                      <div className="h-9 w-9 rounded-full bg-gradient-to-br from-muted to-muted/80 flex items-center justify-center flex-shrink-0 shadow-md border-2 border-primary/20">
                        <User className="h-5 w-5" />
                      </div>
                    )}
                  </motion.div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex gap-2 justify-start"
                  >
                    <div className="h-9 w-9 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center flex-shrink-0 shadow-md">
                      <Bot className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div className="bg-card border-2 border-primary/20 rounded-2xl rounded-bl-sm px-5 py-3 shadow-md">
                      <div className="flex gap-1.5 items-center">
                        <motion.div
                          className="h-2.5 w-2.5 rounded-full bg-primary"
                          animate={{ 
                            y: [0, -8, 0],
                            opacity: [0.5, 1, 0.5]
                          }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                        />
                        <motion.div
                          className="h-2.5 w-2.5 rounded-full bg-primary"
                          animate={{ 
                            y: [0, -8, 0],
                            opacity: [0.5, 1, 0.5]
                          }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                        />
                        <motion.div
                          className="h-2.5 w-2.5 rounded-full bg-primary"
                          animate={{ 
                            y: [0, -8, 0],
                            opacity: [0.5, 1, 0.5]
                          }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Quick Replies (only show if it's the initial message) */}
                {messages.length === 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-2 pt-2"
                  >
                    <p className="text-xs text-muted-foreground px-2 flex items-center gap-1">
                      <Sparkles className="h-3 w-3" />
                      Quick replies:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {quickReplies.map((reply, index) => (
                        <motion.div
                          key={reply}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleQuickReply(reply)}
                            className="text-xs h-auto py-2 px-4 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200 hover:scale-105"
                          >
                            {reply}
                          </Button>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-4 border-t bg-background">
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    handleSendMessage()
                  }}
                  className="flex gap-2"
                >
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 border-2 focus:border-primary transition-colors"
                    disabled={isTyping}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault()
                        handleSendMessage()
                      }
                    }}
                  />
                  <Button
                    type="submit"
                    size="icon"
                    disabled={!inputValue.trim() || isTyping}
                    className="flex-shrink-0 h-10 w-10 hover:scale-110 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
                <p className="text-[10px] text-muted-foreground mt-2 text-center">
                  Press Enter to send • Shift+Enter for new line
                </p>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

