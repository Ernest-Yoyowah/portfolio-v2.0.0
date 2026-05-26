"use client";

import { useState, useRef, useEffect, type KeyboardEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";
import { getResponse, type ChatMessage } from "@/lib/chat";

const SUGGESTED = [
  "Who is Ernest?",
  "What has he built?",
  "What are his skills?",
  "How to contact him?",
];

const GREETING: ChatMessage = {
  role: "assistant",
  content:
    "Hi! I'm Ernest's portfolio assistant. Ask me about his experience, projects, skills, or anything else.",
};

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([GREETING]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [open]);

  function send(text?: string) {
    const q = (text ?? input).trim();
    if (!q) return;
    const reply = getResponse(q);
    setMessages((prev) => [
      ...prev,
      { role: "user", content: q },
      { role: "assistant", content: reply },
    ]);
    setInput("");
  }

  function onKey(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") send();
  }

  const showSuggestions = messages.length === 1;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 16 }}
            transition={{
              duration: 0.22,
              ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
            }}
            className="w-[340px] sm:w-[380px] flex flex-col rounded-2xl border border-white/[0.08] bg-[#111111] shadow-2xl overflow-hidden"
            style={{ height: 480 }}
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.06] shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#22d3ee]/10 border border-[#22d3ee]/20 flex items-center justify-center shrink-0">
                  <span className="text-[10px] font-bold text-[#22d3ee] font-mono">
                    EY
                  </span>
                </div>
                <div>
                  <p className="text-xs font-medium text-foreground leading-none mb-0.5">
                    Ernest&apos;s Assistant
                  </p>
                  <p className="text-[10px] text-muted-foreground">
                    Ask me anything
                  </p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="text-muted-foreground hover:text-foreground transition-colors p-1"
              >
                <X size={15} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-0">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[88%] rounded-xl px-3 py-2 text-sm leading-relaxed whitespace-pre-line ${
                      msg.role === "user"
                        ? "bg-[#22d3ee]/[0.12] text-foreground border border-[#22d3ee]/20"
                        : "bg-white/[0.04] text-muted-foreground border border-white/[0.06]"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {showSuggestions && (
              <div className="px-4 pb-2 flex flex-wrap gap-1.5 shrink-0">
                {SUGGESTED.map((s) => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    className="text-[10px] px-2.5 py-1 rounded-full border border-white/[0.08] text-muted-foreground hover:border-[#22d3ee]/30 hover:text-[#22d3ee] transition-colors"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            <div className="px-4 py-3 border-t border-white/[0.06] flex gap-2 shrink-0">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKey}
                placeholder="Ask something..."
                className="flex-1 bg-white/[0.04] border border-white/[0.08] rounded-xl px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/40 outline-none focus:border-[#22d3ee]/30 transition-colors"
              />
              <button
                onClick={() => send()}
                disabled={!input.trim()}
                aria-label="Send message"
                className="w-9 h-9 rounded-xl bg-[#22d3ee]/10 border border-[#22d3ee]/20 flex items-center justify-center text-[#22d3ee] hover:bg-[#22d3ee]/20 transition-colors disabled:opacity-30 shrink-0"
              >
                <Send size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close assistant" : "Open assistant"}
        className="w-12 h-12 rounded-full bg-[#22d3ee]/10 border border-[#22d3ee]/20 flex items-center justify-center text-[#22d3ee] hover:bg-[#22d3ee]/20 transition-colors shadow-xl"
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="x"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X size={18} />
            </motion.span>
          ) : (
            <motion.span
              key="chat"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <MessageCircle size={18} />
            </motion.span>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
}
