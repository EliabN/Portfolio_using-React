import { Link, useLocation } from 'react-router-dom';

// We assign object variables to their own variable names with Link
function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/About"
          // If the currentPage is `About`, use the active link class else normal link
          className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Projects"
          // If the currentPage is `Projects`, use the active link class else normal link
          className={currentPage === '/Projects' ? 'nav-link active' : 'nav-link'}
        >
          Projects
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
