import { useState } from 'react'

const navigation = [
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Anusha R portfolio home">
        <span className="brand__mark" aria-hidden="true">
          AR
        </span>
        <span className="brand__name">
          Anusha R
          <small>Software Engineer</small>
        </span>
      </a>

      <button
        className="menu-button"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen((current) => !current)}
      >
        <span>{menuOpen ? 'Close' : 'Menu'}</span>
        <span className="menu-button__icon" aria-hidden="true">
          {menuOpen ? '×' : '☰'}
        </span>
      </button>

      <nav
        id="primary-navigation"
        className={menuOpen ? 'primary-nav primary-nav--open' : 'primary-nav'}
        aria-label="Primary navigation"
      >
        {navigation.map((item) => (
          <a key={item.href} href={item.href} onClick={closeMenu}>
            {item.label}
          </a>
        ))}
        <a
          className="primary-nav__cta"
          href="https://github.com/anusha-r-dev"
          target="_blank"
          rel="noreferrer"
          onClick={closeMenu}
        >
          GitHub Profile <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  )
}

export default SiteHeader
