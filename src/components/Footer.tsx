export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Logo / Brand */}
        <h2 className="text-2xl font-bold tracking-wide">
           KanbanPro
        </h2>

        <p className="text-sm mt-3 text-gray-200">
          Organize smarter. Work faster. Deliver better.
        </p>

        {/* Divider */}
        <div className="w-20 h-1 bg-white mx-auto my-6 rounded-full opacity-70"></div>

        {/* Company Links */}
        <div>
          <h3 className="font-semibold mb-3 text-lg">Company</h3>
          <div className="flex justify-center gap-8 text-sm font-medium">
            <span className="hover:text-yellow-300 hover:scale-110 transition duration-300 cursor-pointer">
              About
            </span>
            <span className="hover:text-yellow-300 hover:scale-110 transition duration-300 cursor-pointer">
              Careers
            </span>
            <span className="hover:text-yellow-300 hover:scale-110 transition duration-300 cursor-pointer">
              Blog
            </span>
            <span className="hover:text-yellow-300 hover:scale-110 transition duration-300 cursor-pointer">
              Contact
            </span>
          </div>
        </div>

        {/* Bottom Text */}
        <p className="text-xs mt-8 text-gray-200 opacity-80">
          © {new Date().getFullYear()} KanbanPro. All rights reserved.
        </p>

      </div>
    </footer>
  );
}
