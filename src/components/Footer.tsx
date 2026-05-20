export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} Abdulahi Sholabi. All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/abdul-p"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-green-400 transition text-sm"
          >
            GitHub
          </a>
          <a
            href="mailto:abdulahisholabi@gmail.com"
            className="text-gray-600 hover:text-green-400 transition text-sm"
          >
            Email
          </a>
        </div>

        <p className="text-gray-700 text-xs">
          Built with React + Tailwind + Framer Motion
        </p>
      </div>
    </footer>
  );
}