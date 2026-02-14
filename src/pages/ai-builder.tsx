import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Coins, User, Sparkles } from 'lucide-react';
import { useChat } from '@/hooks/use-chat';
import { ChatPanel } from '@/components/builder/chat-panel';
import { ChatInput } from '@/components/builder/chat-input';
import { PreviewPanel } from '@/components/builder/preview-panel';
import { PopularStrategies } from '@/components/builder/popular-strategies';

export function AIBuilder() {
    const { messages, currentStrategy, isLoading, sendMessage, messagesEndRef } = useChat();
    const [hasStarted, setHasStarted] = useState(false);
    const [inputValue, setInputValue] = useState("");

    const handleInitialSearch = (term?: string) => {
        const message = term || inputValue;
        if (!message.trim()) return;

        setHasStarted(true);
        sendMessage(message);
    };

    return (
        <div className="h-screen flex flex-col bg-background-base overflow-hidden">
            {/* Header */}
            <header className="bg-background-base/80 backdrop-blur-md border-b border-white/5 px-6 py-4 flex items-center justify-between z-50">
                <div className="flex items-center gap-4">
                    <Link
                        to="/"
                        className="text-text-secondary hover:text-white transition-colors flex items-center gap-2 font-mono text-sm"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Platform
                    </Link>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-background-card rounded-full border border-white/5">
                        <Coins className="w-4 h-4 text-flame" />
                        <span className="text-xs font-mono text-text-primary">20 Tokens</span>
                    </div>
                    <button className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 border border-white/10 flex items-center justify-center transition-colors hover:border-flame/50">
                        <User className="w-4 h-4 text-text-secondary" />
                    </button>
                </div>
            </header>

            <AnimatePresence mode="wait">
                {!hasStarted ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="flex-1 w-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-800"
                    >
                        <div className="min-h-full flex flex-col items-center justify-center p-6 relative">
                            {/* Background Effects */}
                            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-flame/10 rounded-full blur-[128px] pointer-events-none" />
                            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px] pointer-events-none" />

                            {/* Hero Content */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                className="text-center max-w-3xl mx-auto mb-12 space-y-6"
                            >
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-flame/10 border border-flame/20 text-flame text-xs font-mono mb-4">
                                    <Sparkles className="w-3 h-3" />
                                    <span>AI-Powered Strategy Builder</span>
                                </div>

                                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
                                    Build something <span className="text-flame">Profitable</span>
                                </h1>
                                <p className="text-lg text-text-secondary max-w-xl mx-auto">
                                    Describe your trading strategy in plain English, and let our AI build, validate, and backtest it for you.
                                </p>
                            </motion.div>

                            {/* Central Input */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="w-full max-w-2xl relative z-10 group"
                            >
                                <div className="relative bg-background-card/50 backdrop-blur-xl border border-white/10 rounded-2xl p-2 shadow-2xl transition-all duration-300 group-hover:border-flame/30 group-hover:shadow-flame/5">
                                    <textarea
                                        value={inputValue}
                                        onChange={(e) => setInputValue(e.target.value)}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter' && !e.shiftKey) {
                                                e.preventDefault();
                                                handleInitialSearch();
                                            }
                                        }}
                                        placeholder="Describe your strategy (e.g., 'Buy when RSI < 30 and price is above 200 EMA')..."
                                        className="w-full bg-transparent text-lg text-white placeholder:text-gray-500 p-4 min-h-[60px] resize-none outline-none font-mono focus:placeholder:text-gray-400"
                                    />
                                    <div className="flex justify-between items-center px-4 pb-2">
                                        <div className="flex gap-2">
                                            <button className="p-2 rounded-lg hover:bg-white/5 text-gray-400 hover:text-white transition-colors">
                                                <Sparkles className="w-4 h-4" />
                                            </button>
                                        </div>
                                        <button
                                            onClick={() => handleInitialSearch()}
                                            disabled={!inputValue.trim()}
                                            className="bg-flame hover:bg-flame-dark text-white px-4 py-2 rounded-xl font-medium text-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                                        >
                                            Generate
                                            <ArrowLeft className="w-4 h-4 rotate-180" />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Popular Strategies Section */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="w-full pb-20"
                            >
                                <PopularStrategies onSelect={handleInitialSearch} />
                            </motion.div>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="builder-interface"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex-1 flex overflow-hidden"
                    >
                        {/* Chat Panel (60%) */}
                        <div className="w-full lg:w-[60%] flex flex-col border-r border-white/5 relative">
                            {/* Chat Header for Context */}
                            <div className="absolute top-0 left-0 w-full p-4 bg-gradient-to-b from-background-base to-transparent z-10 pointer-events-none"></div>

                            <ChatPanel
                                messages={messages}
                                isLoading={isLoading}
                                messagesEndRef={messagesEndRef}
                            />
                            <div className="p-4 bg-background-base border-t border-white/5">
                                <ChatInput onSend={sendMessage} isLoading={isLoading} />
                            </div>
                        </div>

                        {/* Preview Panel (40%) */}
                        <div className="hidden lg:block lg:w-[40%] bg-background-card/20">
                            <PreviewPanel strategy={currentStrategy} />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
