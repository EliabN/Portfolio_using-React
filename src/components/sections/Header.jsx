import { Link, useLocation } from 'react-router-dom';

// We assign object variables to their own variable names with Link
function Header() {
  const currentPage = useLocation().pathname;

  // Header component
  return (
    <header>
      <h1>
        <Link
          to="/About"
          // If the currentPage is `About`, use the active link class else normal link
          className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}
        >
          Eliab Lumu
        </Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link
              to="/About"
              // If the currentPage is `About`, use the active link class else normal link
              className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              to="/Projects"
              // If the currentPage is `Projects`, use the active link class else normal link
              className={currentPage === '/Projects' ? 'nav-link active' : 'nav-link'}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/Contact"
              // If the currentPage is `Contact`, use the active link class else normal link
              className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
            >
              Contact Me
            </Link>
          </li>
          <li>
            {/* <Link
              to="/Resume"
              // If the currentPage is `Resume`, use the active link class else normal link
              className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
            >
              Resume
            </Link> */}
            <a href="">Resume</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
