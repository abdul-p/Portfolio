import { motion } from "framer-motion";
import { ArrowDown, Github, Mail,Linkedin, MessageCircle } from "lucide-react";
 
export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-green-400/10 border border-green-400/20 rounded-full px-4 py-2 mb-6"
        >
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-green-400 text-sm font-medium">
            Available for work
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Hi, I'm{" "}
          <span className="text-green-400">Abdulahi</span>
          <br />
          Sholabi
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Fullstack Software Engineer building efficient, scalable web
          applications with a focus on innovation and clean code.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <a
            href="#projects"
            className="bg-green-400 text-gray-950 px-8 py-3 rounded-xl font-bold hover:bg-green-300 transition"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="border border-gray-700 text-gray-300 px-8 py-3 rounded-xl font-medium hover:border-green-400 hover:text-green-400 transition"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Social Links */}
               

        // Replace the social links div with this:
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center gap-4 mb-16"
        >
        <a 
            href="https://github.com/abdul-p"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-green-400 hover:border-green-400/50 transition"
          >
            <Github size={18} />
          </a>
          <a
            href="mailto:abdulahisholabi@gmail.com"
            className="w-10 h-10 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-green-400 hover:border-green-400/50 transition"
          >
            <Mail size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/abdulahi-sholabi"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-green-400 hover:border-green-400/50 transition"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://wa.me/2348171090918"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-green-400 hover:border-green-400/50 transition"
          >
            <MessageCircle size={18} />
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex justify-center animate-bounce"
        >
          <ArrowDown size={20} className="text-gray-600" />
        </motion.div>
      </div>
    </section>
  );
}