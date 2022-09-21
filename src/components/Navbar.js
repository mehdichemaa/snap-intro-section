import logo from '../images/logo.svg';
import { navLinks } from '../constants';

const ArrowDown = () => (
  <svg
    className="ml-1"
    width="10"
    height="6"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path stroke="#686868" stroke-width="1.5" fill="none" d="m1 1 4 4 4-4" />
  </svg>
);

const Navbar = () => (
  <nav className="navbar">
    <img className="h-6" src={logo} alt="Logo" />
    <ul className="flex ml-16">
      {navLinks.map((link) => (
        <li className="navbar__links mr-5">
          {link.title}
          {link.title === 'Features' ? <ArrowDown /> : ''}
          {link.title === 'Company' ? <ArrowDown /> : ''}
        </li>
      ))}
    </ul>
    <div className="flex-1 flex items-center justify-end">
      <a href="#">Login</a>
      <a className="btn--navbar" href="#">
        Register
      </a>
    </div>
  </nav>
);

export default Navbar;
