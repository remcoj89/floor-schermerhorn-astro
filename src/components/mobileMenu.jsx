import { useState } from 'react';

const navLinks = [
  { name: 'Over', href: '/#over' },
  { name: 'Meedoen', href: '/#floormarkt' },
  { name: 'Programma', href: '/#programma' },
  { name: 'Sponsoren', href: '/#sponsoren' },
  { name: 'Floor-Express', href: '/floor-express' },
  { name: 'Contact', href: '/#contact' },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const close = () => setIsOpen(false);

  return (
    <>
      <button
        className="mobile-menu-trigger"
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
        aria-expanded={isOpen}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>

      {isOpen && (
        <>
          <div className="mobile-menu-backdrop" onClick={close} aria-hidden="true" />
          <div className="mobile-menu-panel" role="dialog" aria-modal="true" aria-label="Navigatiemenu">
            <div className="mobile-menu-header">
              <a href="/" className="mobile-menu-logo" onClick={close}>
                <span className="mobile-menu-logo-badge">Floor</span>
                <span>Feestdagen</span>
              </a>
              <button className="mobile-menu-close" onClick={close} aria-label="Sluit menu">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <nav className="mobile-menu-nav">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="mobile-menu-link"
                  onClick={close}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        </>
      )}
    </>
  );
}
