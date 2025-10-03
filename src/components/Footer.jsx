

export default function Footer() {
  return (
    <footer className="bg-teal-600 text-white py-10 mt-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between">
        {/* Left - Logo */}
        <div className="mb-6 sm:mb-0">
          <h2 className="text-xl font-bold">SkyPlane</h2>
        </div>

        {/* Right - Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Help</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/faq" className="hover:underline">
                FAQ
              </a>
            </li>
            <li>
              <a href="/customer-service" className="hover:underline">
                Customer Service
              </a>
            </li>
            <li>
              <a href="/guides" className="hover:underline">
                How to Guides
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
