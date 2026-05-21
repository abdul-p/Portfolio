import { Github, Mail, Heart, Linkedin, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} Abdulahi Sholabi. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/abdul-p"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-500 hover:text-green-400 hover:border-green-400/50 transition"
          >
            <Github size={16} />
          </a>
          <a
            href="mailto:abdulahisholabi@gmail.com"
            className="w-9 h-9 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-500 hover:text-green-400 hover:border-green-400/50 transition"
          >
            <Mail size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/abdulahi-sholabi"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-500 hover:text-green-400 hover:border-green-400/50 transition"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="https://wa.me/2348171090918"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-500 hover:text-green-400 hover:border-green-400/50 transition"
          >
            <MessageCircle size={16} />
          </a>
        </div>





        <p className="text-gray-700 text-xs flex items-center gap-1">
          Built with <Heart size={12} className="text-green-400" /> React + Tailwind + Framer Motion
        </p>
      </div>
    </footer>
  );
}