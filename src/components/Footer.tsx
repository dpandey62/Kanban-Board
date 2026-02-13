export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 via-indigo-900 to-purple-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Top Section with Logo and Tagline */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black tracking-tight bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent drop-shadow-lg mb-4">
            KanbanPro
          </h2>
          <p className="text-lg text-gray-200 max-w-md mx-auto leading-relaxed">
            Organize smarter. Work faster. Deliver better.
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          
          {/* Company Links */}
          <div className="text-center md:text-left">
            <h3 className="font-bold text-xl mb-6 text-yellow-300">Company</h3>
            <div className="space-y-3">
              <span className="block hover:text-yellow-300 hover:translate-x-2 transition-all duration-300 cursor-pointer font-medium">
                About
              </span>
              <span className="block hover:text-yellow-300 hover:translate-x-2 transition-all duration-300 cursor-pointer font-medium">
                Careers
              </span>
              <span className="block hover:text-yellow-300 hover:translate-x-2 transition-all duration-300 cursor-pointer font-medium">
                Blog
              </span>
              <span className="block hover:text-yellow-300 hover:translate-x-2 transition-all duration-300 cursor-pointer font-medium">
                Contact
              </span>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:flex items-center justify-center">
            <div className="w-px h-48 bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-xs text-gray-300">
            © {new Date().getFullYear()} KanbanPro. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
