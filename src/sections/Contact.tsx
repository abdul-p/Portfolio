import { motion } from "framer-motion";
import { useState } from "react";
import { Send, } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const contactLinks = [
  {
    icon: '/mail.svg',
    label: "Email",
    value: "abdulahisholabi@gmail.com",
    href: "mailto:abdulahisholabi@gmail.com",
  },
  {
    icon: '/linkedin.svg',
    label: "LinkedIn",
    value: "linkedin.com/in/abdulahi-sholabi",
    href: "https://www.linkedin.com/in/abdulahi-sholabi",
  },
  {
    icon: '/github.svg',
    label: "GitHub",
    value: "github.com/abdul-p",
    href: "https://github.com/abdul-p",
  },
  {
    icon: '/whatsapp.svg',
    label: "WhatsApp",
    value: "+234 817 109 0918",
    href: "https://wa.me/2348171090918",
  },
  {
    icon: '/map-pin.svg',
    label: "Location",
    value: "Lagos, Nigeria",
    href: "#",
  },
];

  return (
    <section id="contact" className="py-24 px-6 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-green-400 text-sm font-medium tracking-widest uppercase mb-3">
            Get In Touch
          </p>
          <h2 className="text-4xl font-bold text-white">Contact Me</h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Have a project in mind or want to work together? Send me a message
            and I'll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-gray-400 leading-relaxed">
              I'm currently open to fullstack and frontend engineering
              opportunities. Whether it's a full-time role, freelance project,
              or just a conversation — feel free to reach out.
            </p>

            <div className="space-y-4">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-gray-900 border border-gray-800 rounded-2xl p-4 hover:border-green-400/30 transition group"
                >
                  <div className="w-10 h-10 rounded-xl bg-green-400/10 border border-green-400/20 flex items-center justify-center shrink-0">
                    <img src={link.icon} alt={link.label} width={18} height={18} className="brightness-0 invert opacity-80" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-xs uppercase tracking-wider">
                      {link.label}
                    </p>
                    <p className="text-white text-sm group-hover:text-green-400 transition">
                      {link.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <div className="bg-green-400/10 border border-green-400/20 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <p className="text-green-400 text-sm font-medium">
                  Available for work
                </p>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed">
                Currently open to fullstack engineering roles, remote or
                on-site in Lagos. Expected to complete NYSC by late 2025.
              </p>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-gray-900 border border-gray-800 rounded-2xl p-8"
          >
            {success ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10">
                <div className="w-16 h-16 rounded-full bg-green-400/10 border border-green-400/20 flex items-center justify-center mb-4">
                  <Send size={24} className="text-green-400" />
                </div>
                <h3 className="text-white font-bold text-xl mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-400 text-sm">
                  Thanks for reaching out. I'll get back to you soon.
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="mt-6 text-green-400 text-sm hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-sm p-3 rounded-lg">
                    {error}
                  </div>
                )}

                <div>
                  <label className="block text-xs text-gray-500 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:border-green-400"
                  />
                </div>

                <div>
                  <label className="block text-xs text-gray-500 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:border-green-400"
                  />
                </div>

                <div>
                  <label className="block text-xs text-gray-500 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:border-green-400 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-green-400 text-gray-950 py-3 rounded-xl text-sm font-bold hover:bg-green-300 transition disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  <Send size={16} />
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}