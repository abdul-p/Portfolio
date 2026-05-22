import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-950/95 backdrop-blur-md shadow-lg border-b border-gray-900"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.a 
          href="#" 
          className="text-xl font-bold flex items-center gap-0.5"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-white">Abdul</span>
          <motion.span 
            className="text-green-400"
            animate={{ scale: [1, 1.4, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >.</motion.span>
        </motion.a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.href}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -1 }}
              className="text-sm text-gray-400 hover:text-green-400 transition"
            >
              {link.label}
            </motion.a>
          ))}
          <motion.a
            href="/resume.pdf"
            target="_blank"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: navLinks.length * 0.1 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(74, 222, 128, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="text-sm border border-green-400 text-green-400 px-4 py-2 rounded-lg hover:bg-green-400 hover:text-gray-950 transition font-medium"
          >
            Resume
          </motion.a>
        </div>

        <button
          className="md:hidden text-gray-400 hover:text-white transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-gray-900 border-t border-gray-800 px-6 py-4 flex flex-col gap-4 overflow-hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-gray-400 hover:text-green-400 transition block py-1"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              className="text-sm border border-green-400 text-green-400 px-4 py-2 rounded-lg text-center block"
            >
              Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}