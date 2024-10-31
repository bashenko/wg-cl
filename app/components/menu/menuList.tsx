export default function MenuList({ closeMenu }: { closeMenu?: () => void }) {
    return (
      <ul>
        <li>
          <a href="/#about" onClick={closeMenu}>
            About
          </a>
        </li>
        <li>
          <a href="/#forum" onClick={closeMenu}>
            GSF 2025
          </a>
        </li>
        <li>
          <a href="/#international" onClick={closeMenu}>
            GSF International
          </a>
        </li>
        <li>
          <a href="/#reports" onClick={closeMenu}>
            Reports
          </a>
        </li>
        <li>
          <a href="/#gallery" onClick={closeMenu}>
            Gallery
          </a>
        </li>
      </ul>
    );
  }