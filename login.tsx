import React, { useState } from 'react';
import { Mail, User, Calendar, MapPin, Lock, ShieldCheck, ArrowRight } from 'lucide-react';

export default function LoginScreen() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col justify-center font-sans text-slate-200 p-4">
      {/* 
        This wrapper keeps it looking like a phone app even on Web/Windows 
        The max-w-md constraint is the secret to perfect cross-platform sizing.
      */}
      <div className="w-full max-w-md mx-auto py-12">
        
        {/* Header & Logo Section */}
        <div className="flex flex-col items-center mb-10">
          <div className="w-16 h-16 bg-blue-600 rounded-3xl flex items-center justify-center mb-4 shadow-lg shadow-blue-500/40">
            <span className="text-3xl font-black text-white">₹</span>
          </div>
          <h1 className="text-4xl font-black text-white tracking-tight mb-2">UniMoney</h1>
          <p className="text-slate-400 text-center px-4">
            {isLogin 
              ? 'Enter your credentials to access your trips.' 
              : 'Become an Admin. Create your account and start your first trip.'}
          </p>
        </div>

        {/* Interactive Tab Switcher */}
        <div className="flex bg-slate-900 p-1 rounded-2xl mb-8 border border-slate-800">
          <button 
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-3 rounded-xl flex items-center justify-center transition-all duration-300 ${isLogin ? 'bg-slate-800 shadow-sm' : 'hover:bg-slate-800/50'}`}
          >
            <span className={`font-bold text-sm ${isLogin ? 'text-white' : 'text-slate-500'}`}>Sign In</span>
          </button>
          
          <button 
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-3 rounded-xl flex items-center justify-center transition-all duration-300 ${!isLogin ? 'bg-slate-800 shadow-sm' : 'hover:bg-slate-800/50'}`}
          >
            <span className={`font-bold text-sm ${!isLogin ? 'text-white' : 'text-slate-500'}`}>Register Admin</span>
          </button>
        </div>

        {/* Form Fields Section */}
        <div className="space-y-4">
          
          {/* Fields only visible during Sign Up */}
          {!isLogin && (
            <div className="space-y-3 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-slate-500" />
                </div>
                <input 
                  type="text"
                  placeholder="Full Name" 
                  className="w-full bg-slate-900/50 text-white pl-11 pr-4 py-4 rounded-2xl border border-slate-800 focus:border-blue-500 focus:bg-slate-800 transition-colors outline-none"
                />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-slate-500" />
                </div>
                <input 
                  type="email"
                  placeholder="Email Address" 
                  className="w-full bg-slate-900/50 text-white pl-11 pr-4 py-4 rounded-2xl border border-slate-800 focus:border-blue-500 focus:bg-slate-800 transition-colors outline-none"
                />
              </div>

              <div className="flex gap-3">
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Calendar className="h-5 w-5 text-slate-500" />
                  </div>
                  <input 
                    type="text"
                    placeholder="DD/MM/YY" 
                    className="w-full bg-slate-900/50 text-white pl-11 pr-4 py-4 rounded-2xl border border-slate-800 focus:border-blue-500 focus:bg-slate-800 outline-none"
                  />
                </div>
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <MapPin className="h-5 w-5 text-slate-500" />
                  </div>
                  <input 
                    type="text"
                    placeholder="Trip Type" 
                    className="w-full bg-slate-900/50 text-white pl-11 pr-4 py-4 rounded-2xl border border-slate-800 focus:border-blue-500 focus:bg-slate-800 outline-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Username & Password (Used for both) */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <ShieldCheck className="h-5 w-5 text-slate-500" />
            </div>
            <input 
              type="text"
              placeholder="Unique Username" 
              className="w-full bg-slate-900/50 text-white pl-11 pr-4 py-4 rounded-2xl border border-slate-800 focus:border-blue-500 focus:bg-slate-800 transition-colors outline-none mb-3"
            />
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-slate-500" />
            </div>
            <input 
              type="password"
              placeholder="Password" 
              className="w-full bg-slate-900/50 text-white pl-11 pr-4 py-4 rounded-2xl border border-slate-800 focus:border-blue-500 focus:bg-slate-800 transition-colors outline-none mb-6"
            />
          </div>

          {/* Forgot Password Link (Only on Login) */}
          {isLogin && (
            <div className="flex justify-end mb-6 -mt-2">
              <button className="text-blue-400 hover:text-blue-300 font-semibold text-sm transition-colors">
                Forgot Password?
              </button>
            </div>
          )}

          {/* Main Action Button */}
          <button className="w-full py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 transition-all active:scale-[0.98]">
            <span className="text-white font-black text-lg tracking-wide">
              {isLogin ? 'ACCESS TRIPS' : 'INITIALIZE ADMIN'}
            </span>
            <ArrowRight className="w-5 h-5 text-white" />
          </button>

        </div>
      </div>
    </div>
  );
}