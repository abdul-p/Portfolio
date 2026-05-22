import { Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const animatedHeart = (
    <motion.span
      animate={{ scale: [1, 1.25, 1] }}
      transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
      className="inline-block mx-0.5 text-green-400"
    >
      <Heart size={12} fill="currentColor" />
    </motion.span>
  );

  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-gray-950 border-t border-gray-800 py-8 px-6"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} Abdulahi Sholabi. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <motion.a
            href="https://github.com/abdul-p"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="group w-9 h-9 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center hover:border-green-400/50 transition"
          >
            <img src="/github.svg" alt="GitHub" width={16} height={16} className="brightness-0 invert opacity-60 group-hover:opacity-100 transition" />
          </motion.a>
          <motion.a
            href="mailto:abdulahisholabi@gmail.com"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="group w-9 h-9 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center hover:border-green-400/50 transition"
          >
            <img src="/mail.svg" alt="Mail" width={16} height={16} className="brightness-0 invert opacity-60 group-hover:opacity-100 transition" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/abdulahi-sholabi"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="group w-9 h-9 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center hover:border-green-400/50 transition"
          >
            <img src="/linkedin.svg" alt="LinkedIn" width={16} height={16} className="brightness-0 invert opacity-60 group-hover:opacity-100 transition" />
          </motion.a>
          <motion.a
            href="https://wa.me/2348171090918"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="group w-9 h-9 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center hover:border-green-400/50 transition"
          >
            <img src="/whatsapp.svg" alt="WhatsApp" width={16} height={16} className="brightness-0 invert opacity-60 group-hover:opacity-100 transition" />
          </motion.a>
        </div>

        <p className="text-gray-700 text-xs flex items-center gap-1">
          Built with {animatedHeart} React + Tailwind + Framer Motion
        </p>
      </div>
    </motion.footer>
  );
}