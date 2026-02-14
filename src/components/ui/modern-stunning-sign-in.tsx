"use client"

import * as React from "react"
import { Link } from "react-router-dom";

const SignIn1 = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [error, setError] = React.useState("");

    const validateEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleSignIn = () => {
        if (!email || !password) {
            setError("Please enter both email and password.");
            return;
        }
        if (!validateEmail(email)) {
            setError("Please enter a valid email address.");
            return;
        }
        setError("");
        alert("Sign in successful! (Demo)");
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#121212] relative overflow-hidden w-full">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-flame/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-flame/5 rounded-full blur-[100px]" />
            </div>

            {/* Centered glass card */}
            <div className="relative z-10 w-full max-w-sm rounded-3xl bg-background-elevated backdrop-blur-sm border border-white/10 shadow-2xl p-8 flex flex-col items-center">
                {/* Logo */}
                <div className="flex items-center justify-center mb-6">
                    <img src="/logo.svg" alt="Devise Logo" className="w-20 h-20 object-contain rounded-xl shadow-lg border border-white/10" />
                </div>
                {/* Title */}
                <h2 className="text-2xl font-bold text-white mb-2 text-center font-mono tracking-tight">
                    Welcome Back
                </h2>
                <p className="text-text-secondary text-sm mb-8 text-center font-mono">
                    Sign in to continue building your strategies
                </p>

                {/* Form */}
                <div className="flex flex-col w-full gap-4">
                    <div className="w-full flex flex-col gap-3">
                        <input
                            placeholder="Email"
                            type="email"
                            value={email}
                            className="w-full px-5 py-3 rounded-xl bg-background-base/50 border border-white/10 text-white placeholder-text-muted text-sm focus:outline-none focus:ring-2 focus:ring-flame/50 focus:border-flame transition-all font-mono"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            placeholder="Password"
                            type="password"
                            value={password}
                            className="w-full px-5 py-3 rounded-xl bg-background-base/50 border border-white/10 text-white placeholder-text-muted text-sm focus:outline-none focus:ring-2 focus:ring-flame/50 focus:border-flame transition-all font-mono"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {error && (
                            <div className="text-sm text-red-400 text-left font-mono bg-red-500/10 p-2 rounded border border-red-500/20">{error}</div>
                        )}
                    </div>

                    <div className="flex justify-end">
                        <a href="#" className="text-xs text-text-secondary hover:text-white transition-colors font-mono">Forgot password?</a>
                    </div>

                    <div>
                        <button
                            onClick={handleSignIn}
                            className="w-full bg-flame hover:bg-flame-dark text-white font-bold font-mono px-5 py-3 rounded-xl shadow-lg shadow-flame/20 hover:shadow-flame/40 transition-all duration-300 mb-4 text-sm tracking-wide"
                        >
                            Sign In
                        </button>

                        <div className="relative mb-6">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t border-white/10" />
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-background-elevated px-2 text-text-muted font-mono">
                                    Or continue with
                                </span>
                            </div>
                        </div>

                        {/* Google Sign In */}
                        <button className="w-full flex items-center justify-center gap-3 bg-white text-black hover:bg-gray-100 rounded-xl px-5 py-3 font-medium shadow-lg transition-all duration-300 mb-2 text-sm font-mono tracking-tight">
                            <img
                                src="https://www.svgrepo.com/show/475656/google-color.svg"
                                alt="Google"
                                className="w-5 h-5"
                            />
                            Google
                        </button>

                        <div className="w-full text-center mt-6">
                            <span className="text-xs text-text-secondary font-mono">
                                Don&apos;t have an account?{" "}
                                <Link
                                    to="/signup"
                                    className="underline text-white hover:text-flame transition-colors font-bold"
                                >
                                    Sign up
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Request */}
            <div className="relative z-10 mt-8 text-center">
                <Link to="/" className="text-xs text-text-muted hover:text-white transition-colors font-mono">
                    ← Back to Home
                </Link>
            </div>
        </div>
    );
};

export { SignIn1 };
