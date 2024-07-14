import React, { useEffect, useState } from 'react';

const NavBar: React.FC = () => {
  const [navHeight, setNavHeight] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const nav = document.querySelector('nav');
    if (nav) {
      setNavHeight(nav.offsetHeight);
    }
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed left-0 top-0 z-50 w-full" style={{ background: '#eff6ff' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex flex-shrink-0 items-center">
            <a href="/">
              <img src="/logo.svg" alt="Logo" className="h-32 w-32" />
            </a>
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-indigo-900 hover:text-indigo-700 focus:outline-none"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
          <div
            className={`hidden items-center space-x-8 md:flex ${
              isMobileMenuOpen ? 'block' : 'hidden'
            } md:block`}
          >
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-indigo-900 hover:text-indigo-700"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('use-cases')}
              className="text-indigo-900 hover:text-indigo-700"
            >
              Use Cases
            </button>
            <a href="/blog" className="text-indigo-900 hover:text-indigo-700">
              Blog
            </a>{' '}
            {/* Add this line */}
            <a
              href="https://forms.gle/RLKWBvYVtNvdAz6w8"
              target="_blank"
              className="text-indigo-900 hover:text-indigo-700"
              rel="noreferrer"
            >
              Investors
            </a>
            <a
              href="mailto:nigel@swiftwriter.co"
              className="rounded-md bg-indigo-900 px-4 py-2 text-white hover:bg-indigo-800"
            >
              Contact Us →
            </a>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
              <button
                onClick={() => {
                  scrollToSection('how-it-works');
                  toggleMobileMenu();
                }}
                className="block text-indigo-900 hover:text-indigo-700"
              >
                How It Works
              </button>
              <button
                onClick={() => {
                  scrollToSection('use-cases');
                  toggleMobileMenu();
                }}
                className="block text-indigo-900 hover:text-indigo-700"
              >
                Use Cases
              </button>
              <a href="/blog" className="block text-indigo-900 hover:text-indigo-700">
                Blog
              </a>{' '}
              {/* Add this line */}
              <a
                href="https://forms.gle/RLKWBvYVtNvdAz6w8"
                target="_blank"
                className="block text-indigo-900 hover:text-indigo-700"
                rel="noreferrer"
              >
                Investors
              </a>
              <a
                href="mailto:nigel@swiftwriter.co"
                className="block rounded-md bg-indigo-900 px-4 py-2 text-white hover:bg-indigo-800"
              >
                Contact Us →
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
