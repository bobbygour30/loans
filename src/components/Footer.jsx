import React, { useState } from 'react';
import assets from '../assets/assets';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    setEmail('');
  };

  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <img src={assets.logo} alt="Fyntegra Logo" className="h-12 mb-4" />
          <p className="text-gray-400 text-sm">
            Fyntegra is revolutionizing lending and customer experience with AI-driven solutions and human expertise. Powered by Konexions, we deliver scalable, compliant financial services across India.
          </p>
          <p className="mt-4 text-gray-500 text-xs">© 2025 Fyntegra. All rights reserved.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-red-300">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#loans" className="text-gray-400 hover:text-[#28af5b] transition duration-300">Loans</a></li>
            <li><a href="#eligibility" className="text-gray-400 hover:text-[#28af5b] transition duration-300">Eligibility</a></li>
            <li><a href="#emi" className="text-gray-400 hover:text-[#28af5b] transition duration-300">EMI Calculator</a></li>
            <li><a href="#solutions" className="text-gray-400 hover:text-[#28af5b] transition duration-300">Solutions</a></li>
            <li><a href="#platform" className="text-gray-400 hover:text-[#28af5b] transition duration-300">Platform</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-red-300">Contact Us</h3>
          <p className="text-gray-400 text-sm">Email: support@fyntegra.com</p>
          <p className="text-gray-400 text-sm">Phone: +91-123-456-7890</p>
          <p className="text-gray-400 text-sm">Address: 123 Fintech Lane, Mumbai, India</p>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-red-300">Subscribe to Newsletter</h3>
          <p className="text-gray-400 text-sm mb-4">Stay updated with the latest in lending and financial solutions.</p>
          <form onSubmit={handleSubscribe} className="flex flex-col space-y-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="p-2 rounded-lg border border-gray-700 bg-gray-800 text-white focus:outline-none focus:border-[#28af5b]"
              required
            />
            <button
              type="submit"
              className="px-4 py-2 bg-[#d60000] text-white rounded-lg hover:opacity-90 transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Social Media & Bottom Bar */}
      <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a href="#" className="text-gray-400 hover:text-[#28af5b] transition duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.733-.666 1.585-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 14.008-7.496 14.008-13.986 0-.266-.006-.531-.019-.797.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-[#28af5b] transition duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c-5.524 0-10 4.476-10 10 0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.866-.014-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.461-1.11-1.461-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.091-.646.35-1.086.636-1.336-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.202 2.398.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.163c0-5.524-4.476-10-10-10z" />
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-[#28af5b] transition duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
            </svg>
          </a>
        </div>
        <div className="text-gray-500 text-xs">
          <p>Grievance Redressal Officer: <a href="#" className="underline hover:text-[#deeea5]">Contact GRO</a></p>
          <p>Terms & Conditions | Privacy Policy | Last updated: Sep 10, 2025</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;