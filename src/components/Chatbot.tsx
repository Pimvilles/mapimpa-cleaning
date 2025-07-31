import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm here to help answer any questions about Mapimpa Cleaning Division. How can I assist you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const companyInfo = {
    services: [
      "Carpet & upholstery cleaning",
      "Tiles and hard floor polishing", 
      "Couches and mattress cleaning",
      "Pest control & fumigation services",
      "Deep cleaning",
      "Scene clean-up",
      "Industrial warehouse cleaning",
      "Corporate, residential & commercial cleaning"
    ],
    contact: {
      phones: ["+27 67 805 5830", "+27 83 595 0616"],
      email: "info@mapimpagroup.co.za",
      social: "@mapimpa_cleaning"
    },
    hours: "Monday-Friday: 8AM-6PM, Saturday: 9AM-4PM, Sunday: Emergency only",
    guarantee: "100% satisfaction guarantee",
    experience: "5+ years of professional cleaning experience"
  };

  const generateBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('service') || message.includes('clean')) {
      return `We offer comprehensive cleaning services including: ${companyInfo.services.slice(0, 4).join(', ')}, and more! Would you like details about any specific service?`;
    }
    
    if (message.includes('price') || message.includes('cost') || message.includes('quote')) {
      return "Our pricing depends on the specific service and property size. For a free personalized quote, please contact us at +27 67 805 5830 or fill out our contact form. We offer competitive rates with no hidden fees!";
    }
    
    if (message.includes('contact') || message.includes('phone') || message.includes('call')) {
      return `You can reach us at:\n📞 ${companyInfo.contact.phones[0]}\n📞 ${companyInfo.contact.phones[1]}\n📧 ${companyInfo.contact.email}\n📱 ${companyInfo.contact.social}`;
    }
    
    if (message.includes('hour') || message.includes('time') || message.includes('when')) {
      return `Our business hours are: ${companyInfo.hours}. We also offer 24/7 emergency cleaning services!`;
    }
    
    if (message.includes('emergency')) {
      return "Yes! We provide 24/7 emergency cleaning services for urgent situations. Call us anytime at +27 67 805 5830 for immediate assistance.";
    }
    
    if (message.includes('experience') || message.includes('how long')) {
      return `Mapimpa Cleaning Division has ${companyInfo.experience} serving residential, commercial, and industrial clients. We're licensed, insured, and committed to excellence!`;
    }
    
    if (message.includes('guarantee') || message.includes('satisfaction')) {
      return `We offer a ${companyInfo.guarantee}! If you're not completely satisfied with our work, we'll make it right at no additional cost.`;
    }
    
    if (message.includes('pest') || message.includes('fumigation')) {
      return "Yes, we provide professional pest control and fumigation services! Our trained technicians use safe, effective treatments for both residential and commercial properties.";
    }
    
    if (message.includes('carpet') || message.includes('upholstery')) {
      return "Our carpet and upholstery cleaning uses professional-grade equipment and eco-friendly solutions to deep clean and restore your furniture and carpets to like-new condition!";
    }
    
    if (message.includes('commercial') || message.includes('office') || message.includes('business')) {
      return "We specialize in commercial cleaning for offices, retail spaces, warehouses, and industrial facilities. We offer flexible scheduling and customized cleaning plans for businesses of all sizes.";
    }

    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! Welcome to Mapimpa Cleaning Division. I'm here to help with any questions about our professional cleaning services. What would you like to know?";
    }
    
    // Default response
    return "Thank you for your question! For detailed information about our cleaning services, pricing, or to schedule a service, please contact us at +27 67 805 5830 or info@mapimpagroup.co.za. Our team will be happy to assist you!";
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateBotResponse(inputMessage),
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-primary hover:bg-primary/90 shadow-lg z-50"
          size="icon"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-96 h-[500px] shadow-2xl z-50 flex flex-col border-primary/20">
          <CardHeader className="bg-primary text-primary-foreground p-4 rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <img 
                  src="/lovable-uploads/bc07171a-9fe9-423c-8061-9db7ed6b748b.png" 
                  alt="Mapimpa Logo" 
                  className="w-6 h-6 rounded"
                />
                <CardTitle className="text-lg">Tebatso A.I Assistant</CardTitle>
              </div>
              <Button
                onClick={() => setIsOpen(false)}
                variant="ghost"
                size="icon"
                className="text-primary-foreground hover:bg-primary-foreground/20 h-8 w-8"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-sm text-primary-foreground/90">Ask me anything about our cleaning services!</p>
          </CardHeader>

          <CardContent className="flex-1 p-0 flex flex-col">
            {/* Messages */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        message.sender === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-secondary text-secondary-foreground'
                      }`}
                    >
                      <div className="flex items-start space-x-2">
                        {message.sender === 'bot' && <Bot className="w-4 h-4 mt-0.5 flex-shrink-0" />}
                        {message.sender === 'user' && <User className="w-4 h-4 mt-0.5 flex-shrink-0" />}
                        <p className="text-sm whitespace-pre-line">{message.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-secondary text-secondary-foreground p-3 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <Bot className="w-4 h-4" />
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>

            {/* Input */}
            <div className="p-4 border-t border-border">
              <div className="flex space-x-2">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1"
                />
                <Button 
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim()}
                  size="icon"
                  className="bg-primary hover:bg-primary/90"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default Chatbot;