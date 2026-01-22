const Footer = () => {
  return (
    <footer className="py-20 px-6 sm:px-8 lg:px-16 mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Divider with sparkle */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="flex-1 h-px bg-gray-700"></div>
          <div className="text-2xl">✨</div>
          <div className="flex-1 h-px bg-gray-700"></div>
        </div>

        <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-4 sm:mb-6 leading-relaxed text-gray-900">
          i'd love to chat about ai updates, code, or good food! 💌
        </h3>

        <div className="flex flex-wrap items-center gap-2 text-sm sm:text-base font-semibold mb-6 sm:mb-8 text-gray-900">
          <a
            href="mailto:simranawasthi.cc@gmail.com"
            className="hover:opacity-60 transition-opacity duration-300"
          >
            email
          </a>
          <span className="text-gray-900">/</span>
          <a
            href="https://www.instagram.com/simranawasthiyt/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-60 transition-opacity duration-300"
          >
            instagram
          </a>
          <span className="text-gray-900">/</span>
          <a
            href="https://www.linkedin.com/in/simran-2b2287388/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-60 transition-opacity duration-300"
          >
            linkedin
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
