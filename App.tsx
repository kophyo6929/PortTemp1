import React from "react";
import { WebGLShader } from "./components/ui/web-gl-shader";
import { Zap } from "lucide-react";

export default function App() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <WebGLShader />
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <div className="flex flex-col items-center gap-8">
          <div className="text-center space-y-4 relative z-20">
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400">
              Next-Gen Integration
            </h1>
            <p className="text-slate-400 max-w-md mx-auto">
              Seamlessly connect your data streams with our high-performance neural infrastructure.
            </p>
          </div>
          
          <button className="bg-slate-800 w-[320px] z-40 h-[80px] md:h-[120px] no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block">
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </span>
            <div className="relative flex justify-center w-full h-full text-center space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10">
              <Zap className="w-6 h-6 md:w-8 md:h-8 text-sky-400 mr-2" />
              <span className="md:text-4xl text-xl inline-block bg-clip-text text-transparent bg-gradient-to-r from-neutral-300 via-neutral-600 to-neutral-300">
                Start Now
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}