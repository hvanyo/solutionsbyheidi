import React, { useState, useEffect } from 'react';
import { Link } from "gatsby";
import Logo from './logo';

function Header() {

  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px 
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);  

  return (
    
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top && 'bg-white blur shadow-lg'}`}>
    {/* Header */}
      
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
      {/*  Container */}

        
        <div className="flex items-center justify-between h-16 md:h-20">
        {/* SiteLogoContainer */}

          
          <div className="flex-shrink-0 mr-4">
          {/* Site branding */}

            {/* SiteReturn & SiteLogo */}
            <Link to="/" className="block" aria-label="Solutions By Heidi">
              <Logo />
            </Link>
          </div>

          {/* SiteNav */}
          <nav className="flex flex-grow">
            (/* Menu:Wrapper */)
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              (/* Menu:Item */)
              <li>
                (/* Menu:Title */)
                <Link to="/about/" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">About Me</Link>
              </li>
              <li>
                <Link to="/learnings/" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Learnings</Link>
              </li>
            </ul>

          </nav>

        </div>
      </div>
    </header>
  );
}

export default Header;
