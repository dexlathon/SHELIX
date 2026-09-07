import React, { useState, useRef, useEffect } from 'react';
import {
  X,
  Send,
  Sparkles,
  Bot,
  User,
  Trash2,
  HelpCircle,
  Stethoscope,
  Utensils,
  FlaskConical,
  MessageSquare
} from 'lucide-react';
import { BitmojiRenderer } from './BitmojiCreator';
import { generateAIResponse } from '../engine/aiAssistantEngine';

export default function AIAssistantChatModal({
  isOpen,
  onClose,
  assessment,
  bmiData,
  user,
  currentLang = 'en',
  onOpenDoctorsModal,
  t
}) {
  if (!isOpen) return null;

  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState(() => [
    {
      id: 'welcome',
      sender: 'ai',
      text: `Hello ${user?.name || 'there'}! I am **Maya**, your PCOS Clinical AI Assistant. 

I've analyzed your symptom profile (**${assessment?.phenotype?.code || 'Phenotype'} - ${assessment?.compositeScore || 0}% match**). How can I help you today?`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = (textToSend) => {
    const text = textToSend || inputMessage;
    if (!text.trim()) return;

    const userMsg = {
      id: `user_${Date.now()}`,
      sender: 'user',
      text: text.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputMessage('');
    setIsTyping(true);

    // Simulate AI clinical reasoning delay
    setTimeout(() => {
      const aiReplyText = generateAIResponse(
        text,
        { assessment, bmiData, user },
        currentLang
      );

      const aiMsg = {
        id: `ai_${Date.now()}`,
        sender: 'ai',
        text: aiReplyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 650);
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: `welcome_${Date.now()}`,
        sender: 'ai',
        text: `Chat cleared. Ask me anything about your PCOS symptoms, diet, tests, or finding local doctors!`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  };

  const suggestedPrompts = [
    { label: '🚨 Find Local Doctors & ER', text: 'Which local doctors and emergency hospitals should I consult for severe PCOS symptoms?' },
    { label: 'Explain my phenotype', text: 'Explain my PCOS phenotype and primary driver in detail.' },
    { label: 'Best breakfast plan', text: 'What is the best breakfast to stabilize my insulin and energy?' },
    { label: 'Top lab tests to ask doctor', text: 'Which diagnostic lab blood tests are most important for me to request?' },
    { label: 'Acne & hair thinning tips', text: 'How do I reduce androgenic cystic acne and hair shedding naturally?' }
  ];

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px'
      }}
      onClick={onClose}
    >
      <div
        className="doctor-report-view"
        style={{
          width: '100%',
          maxWidth: '520px',
          height: '86vh',
          maxHeight: '750px',
          display: 'flex',
          flexDirection: 'column',
          padding: 0,
          overflow: 'hidden'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Chat Modal Header */}
        <div
          style={{
            backgroundColor: 'var(--primary)',
            color: '#FFFFFF',
            padding: '14px 18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '2px solid rgba(255, 255, 255, 0.2)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ position: 'relative' }}>
              <BitmojiRenderer size={40} outfitColor="#1E40AF" />
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  backgroundColor: '#10B981',
                  border: '2px solid #FFFFFF'
                }}
                title="Maya AI Online"
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '15px', fontWeight: '800' }}>Maya • PCOS Clinical AI</span>
              <span style={{ fontSize: '11px', color: '#DBEAFE', fontWeight: '600' }}>
                Context-Aware Health Advisor
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '6px' }}>
            <button
              className="header-action-btn"
              onClick={() => {
                onClose();
                onOpenDoctorsModal?.();
              }}
              title="Find Local PCOS Doctors & Emergency Clinics"
              style={{ backgroundColor: '#DC2626', borderColor: '#EF4444', color: '#FFFFFF' }}
            >
              <Stethoscope size={15} />
            </button>
            <button
              className="header-action-btn"
              onClick={handleClearChat}
              title="Clear Chat History"
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', borderColor: 'rgba(255,255,255,0.3)', color: '#FFFFFF' }}
            >
              <Trash2 size={15} />
            </button>
            <button
              className="header-action-btn"
              onClick={onClose}
              title="Close"
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', borderColor: 'rgba(255,255,255,0.3)', color: '#FFFFFF' }}
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Suggested Quick Question Chips */}
        <div
          style={{
            backgroundColor: 'var(--bg-subtle)',
            padding: '8px 12px',
            borderBottom: '1.5px solid var(--border-light)',
            display: 'flex',
            gap: '6px',
            overflowX: 'auto',
            whiteSpace: 'nowrap'
          }}
        >
          {suggestedPrompts.map((p, idx) => (
            <button
              key={idx}
              type="button"
              className="progress-category-pill pill-teal"
              onClick={() => handleSendMessage(p.text)}
              style={{ cursor: 'pointer', border: 'none', fontSize: '10.5px' }}
            >
              <Sparkles size={12} />
              {p.label}
            </button>
          ))}
        </div>

        {/* Chat Message Stream */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            backgroundColor: 'var(--bg-app)'
          }}
        >
          {messages.map((msg) => {
            const isAI = msg.sender === 'ai';
            return (
              <div
                key={msg.id}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  alignSelf: isAI ? 'flex-start' : 'flex-end',
                  maxWidth: '88%'
                }}
              >
                {isAI && (
                  <div style={{ marginTop: '2px', flexShrink: 0 }}>
                    <BitmojiRenderer size={32} />
                  </div>
                )}

                <div
                  style={{
                    backgroundColor: isAI ? 'var(--bg-subtle)' : 'var(--primary)',
                    color: isAI ? 'var(--text-main)' : '#FFFFFF',
                    border: `1.5px solid ${isAI ? 'var(--border-mid)' : 'var(--primary)'}`,
                    borderRadius: isAI ? '4px 16px 16px 16px' : '16px 4px 16px 16px',
                    padding: '12px 14px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
                  }}
                >
                  <div
                    style={{
                      fontSize: '13px',
                      lineHeight: '1.45',
                      whiteSpace: 'pre-wrap',
                      fontWeight: isAI ? '500' : '600'
                    }}
                  >
                    {msg.text}
                  </div>
                  <span
                    style={{
                      fontSize: '9.5px',
                      color: isAI ? 'var(--text-light)' : 'rgba(255,255,255,0.7)',
                      alignSelf: 'flex-end',
                      fontWeight: '700'
                    }}
                  >
                    {msg.timestamp}
                  </span>
                </div>
              </div>
            );
          })}

          {isTyping && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', alignSelf: 'flex-start' }}>
              <BitmojiRenderer size={28} />
              <div
                style={{
                  backgroundColor: 'var(--bg-subtle)',
                  border: '1.5px solid var(--border-mid)',
                  borderRadius: '12px',
                  padding: '8px 14px',
                  fontSize: '12px',
                  color: 'var(--text-muted)',
                  fontWeight: '700',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <Sparkles size={14} color="var(--primary)" />
                Maya is thinking...
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          style={{
            backgroundColor: 'var(--bg-card)',
            borderTop: '2px solid var(--border-light)',
            padding: '12px 14px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}
        >
          <input
            type="text"
            className="bmi-input"
            placeholder="Ask Maya about diet, tests, or symptoms..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            style={{
              backgroundColor: 'var(--bg-subtle)',
              border: '1.5px solid var(--border-mid)',
              borderRadius: '12px',
              padding: '10px 14px',
              fontSize: '13.5px',
              color: 'var(--text-main)',
              outline: 'none'
            }}
          />
          <button
            type="submit"
            className="btn-primary"
            disabled={!inputMessage.trim()}
            style={{
              padding: '10px 16px',
              flex: 'none',
              borderRadius: '12px'
            }}
          >
            <Send size={16} />
          </button>
        </form>
      </div>
    </div>
  );
}
