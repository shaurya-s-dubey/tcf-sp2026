import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 via-gray-900 to-blue-900 text-white flex items-center justify-center px-6">
      <div className="max-w-2xl w-full flex flex-col items-center text-center gap-8">
        {/* Profile Picture */}
        <div className="relative w-40 h-40 rounded-full overflow-hidden ring-4 ring-blue-500 ring-offset-4 ring-offset-gray-900">
          <Image
            src="/profile.jpg"
            alt="Shaurya Dubey"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Name */}
        <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-gray-600 to-blue-500 bg-clip-text text-transparent">
          Shaurya Dubey
        </h1>

        {/* Bio */}
        <p className="text-lg text-gray-300 lealsding-relaxed max-w-xl">
          Computer Science student at Northeastern University (Class of 2029).
          Full stack developer with a passion for web development, machine learning,
          and building interactive applications. Experienced with React, TypeScript,
          Python, and Java.
        </p>

        {/* Social Links */}
        <div className="flex gap-6 mt-2">
          <a
            href="https://github.com/shaurya-s-dubey"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-transparent opacity-60 hover:opacity-100 transition-opacity"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/shaurya-dubey-s/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-transparent opacity-60 hover:opacity-100 transition-opacity"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:dubey.sha@northeastern.edu"
            className="p-3 rounded-full bg-transparent opacity-60 hover:opacity-100 transition-opacity"
          >
            <FaEnvelope className="w-6 h-6" />
          </a>
        </div>
      </div>
    </main>
  );
}