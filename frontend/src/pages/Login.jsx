import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    GraduationCap,
    Mail,
    Lock,
    Eye,
    EyeOff,
    Github
} from 'lucide-react';

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#1b3173] flex items-center justify-center p-6 font-display">
            {/* Main Card Container */}
            <div className="w-full max-w-5xl h-[700px] flex rounded-xl overflow-hidden shadow-2xl border-2 border-primary/50">

                {/* Left Side (Branding & Image) */}
                <div className="w-1/2 bg-[#e8f1ff] p-12 flex flex-col items-center justify-center relative border-r border-dashed border-slate-300">
                    <div className="w-full max-w-sm flex flex-col items-center text-center space-y-6">
                        <div className="w-full h-80 rounded-2xl overflow-hidden shadow-lg border border-white/20">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                                alt="Students Collaborating"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h2 className="text-[32px] font-black text-[#111827] leading-tight">Connect to NEXUNI</h2>
                        <p className="text-slate-600 text-sm font-medium leading-relaxed px-4">
                            The ultimate platform for university collaboration and academic growth.
                        </p>
                    </div>
                </div>

                {/* Right Side (Form) */}
                <div className="w-1/2 bg-[#314a7e] p-12 flex flex-col justify-center relative">

                    {/* Logo */}
                    <div className="absolute top-10 left-10 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center text-white">
                            <GraduationCap className="w-5 h-5" />
                        </div>
                        <span className="text-xl font-bold text-white tracking-wide">NEXUNI</span>
                    </div>

                    <div className="max-w-sm w-full mx-auto space-y-8 mt-8">
                        {/* Tabs */}
                        <div className="flex border-b border-white/20">
                            <button className="flex-1 pb-3 border-b-2 border-primary text-primary font-bold text-sm">
                                Login
                            </button>
                            <button className="flex-1 pb-3 text-slate-300 font-bold text-sm hover:text-white transition-colors">
                                Sign Up
                            </button>
                        </div>

                        {/* Form Fields */}
                        <div className="space-y-5">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-200">Email Address</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                                        <Mail className="w-4 h-4" />
                                    </div>
                                    <input
                                        type="email"
                                        placeholder="name@university.edu"
                                        className="w-full pl-10 pr-4 py-3 bg-white text-slate-900 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-primary font-medium placeholder:text-slate-400"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <label className="text-xs font-bold text-slate-200">Password</label>
                                    <a href="#" className="text-xs font-bold text-primary hover:text-primary-light transition-colors">Forgot password?</a>
                                </div>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                                        <Lock className="w-4 h-4" />
                                    </div>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Enter your password"
                                        className="w-full pl-10 pr-10 py-3 bg-white text-slate-900 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-primary font-medium placeholder:text-slate-400"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
                                    >
                                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    id="keepLogged"
                                    className="w-3.5 h-3.5 rounded-sm border-white/30 bg-transparent text-primary focus:ring-primary"
                                />
                                <label htmlFor="keepLogged" className="text-xs font-medium text-slate-300 cursor-pointer">
                                    Keep me logged in
                                </label>
                            </div>
                        </div>

                        {/* Sign In Button */}
                        <button
                            onClick={() => navigate('/landing')}
                            className="w-full bg-primary hover:bg-primary-hover text-white py-3 rounded-md font-bold text-sm shadow-md transition-all"
                        >
                            Sign In
                        </button>

                        {/* Divider */}
                        <div className="relative py-2">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-white/20"></div>
                            </div>
                            <div className="relative flex justify-center">
                                <span className="bg-[#314a7e] px-4 text-[10px] uppercase font-bold tracking-widest text-slate-300">
                                    Or Continue With
                                </span>
                            </div>
                        </div>

                        {/* Social Buttons */}
                        <div className="grid grid-cols-2 gap-4">
                            <button className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-md border border-white/20 hover:bg-white/5 transition-colors text-white text-xs font-bold">
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                </svg>
                                Google
                            </button>
                            <button className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-md border border-white/20 hover:bg-white/5 transition-colors text-white text-xs font-bold">
                                <Github className="w-4 h-4" />
                                GitHub
                            </button>
                        </div>

                        {/* Footer Text */}
                        <div className="text-center mt-6">
                            <p className="text-[10px] text-slate-400 font-medium leading-relaxed">
                                By continuing, you agree to NEXUNI&apos;s <a href="#" className="text-slate-300 hover:text-white">Terms of Service</a><br />
                                and <a href="#" className="text-slate-300 hover:text-white">Privacy Policy</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
