const Footer = () => {
  return (
    <footer className="bg-transparent text-white py-8 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-6 h-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-xs">A</span>
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Artistly.com
            </span>
          </div>
          <p className="text-gray-400 dark:text-gray-200">
            © 2024 Artistly.com. All rights reserved. Connecting event planners
            with amazing artists.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
