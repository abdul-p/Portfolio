import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";

const info = [
  { icon: MapPin, label: "Location", value: "Lagos, Nigeria" },
  { icon: '/mail.svg', label: "Mail", value: "abdulahisholabi@gmail.com" },
  { icon: '/github.svg', label: "GitHub", value: "github.com/abdul-p" },
  { icon: Calendar, label: "Status", value: "Available for work" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <motion.div 
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative"
            >
              <div className="w-72 h-72 rounded-2xl bg-gradient-to-br from-green-400/20 to-gray-800 border border-green-400/20 overflow-hidden flex items-center justify-center">
                <img src="/abdul.png" alt="Abdulahi Sholabi" className="w-full h-full object-cover" />
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute -bottom-4 -right-4 bg-gray-900 border border-gray-800 rounded-xl px-4 py-2"
              >
                <p className="text-green-400 font-bold text-sm">2+ Years</p>
                <p className="text-gray-500 text-xs">Experience</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="absolute -top-4 -left-4 bg-gray-900 border border-gray-800 rounded-xl px-4 py-2"
              >
                <p className="text-green-400 font-bold text-sm">10+</p>
                <p className="text-gray-500 text-xs">Projects</p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="text-green-400 text-sm font-medium tracking-widest uppercase mb-3">
              About Me
            </p>
            <h2 className="text-4xl font-bold text-white mb-6">
              Passionate about building great software
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              I am a highly motivated software engineer with a problem-solving
              mindset, using critical thinking and minimalism to navigate
              complex challenges. I facilitate efficient software solutions with
              a driving focus on innovation.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              I thrive on fostering growth and embracing challenges. Currently
              serving in the NYSC program while building fullstack web
              applications and expanding into mobile development with React
              Native.
            </p>

            <div className="grid grid-cols-1 gap-3 mb-8">
              {info.map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-green-400/10 border border-green-400/20 flex items-center justify-center shrink-0">
                    {typeof item.icon === "string" ? <img src={item.icon} alt={item.label} width={16} height={16} className="brightness-0 invert opacity-80" /> : <item.icon size={14} className="text-green-400" />}
                  </div>
                  <div>
                    <p className="text-gray-600 text-xs">{item.label}</p>
                    <p className="text-white text-sm font-medium">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-400 text-gray-950 px-6 py-2.5 rounded-xl font-bold hover:bg-green-300 transition text-sm block"
              >
                Hire Me
              </motion.a>
              <motion.a
                href="https://github.com/abdul-p"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-gray-700 text-gray-300 px-6 py-2.5 rounded-xl font-medium hover:border-green-400 hover:text-green-400 transition text-sm flex items-center gap-2"
              >
                <img src="/github.svg" alt="GitHub" width={16} height={16} className="brightness-0 invert opacity-80" />
                GitHub
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}