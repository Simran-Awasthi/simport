const Footer = () => {
  return (
    <footer className="py-20 px-6 sm:px-8 lg:px-16 border-t border-gray-200 mt-20">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-xl sm:text-2xl font-normal mb-8 leading-relaxed">
          i'd love to chat about design, kdramas, or good food!
        </h3>

        <div className="flex items-center gap-2 text-base font-normal mb-12">
          <a
            href="mailto:joannecho.ux@gmail.com"
            className="hover:opacity-60 transition-opacity duration-300 underline decoration-1 underline-offset-4"
          >
            email
          </a>
          <span className="text-gray-300">/</span>
          <a
            href="https://www.instagram.com/joanne.cho/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-60 transition-opacity duration-300 underline decoration-1 underline-offset-4"
          >
            instagram
          </a>
          <span className="text-gray-300">/</span>
          <a
            href="https://www.linkedin.com/in/joanneecho/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-60 transition-opacity duration-300 underline decoration-1 underline-offset-4"
          >
            linkedin
          </a>
        </div>

        <p className="text-sm text-gray-400 font-light">
          designed & developed by peach fan club ✿
        </p>
      </div>
    </footer>
  );
};

export default Footer;
