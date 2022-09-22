import logo from '../images/logo.svg';
import Navbar from './Navbar';
import Hero from './Hero';

const Header = () => (
  <header>
    <div className="flex justify-between items-center mx-8 my-4 ">
      <a href="#">
        <img className="h-6" src={logo} alt="Logo" />
      </a>
      <Navbar />
    </div>
    <div className="w-full flex px-52 pt-16 pb-4 items-center relative">
      <Hero />
    </div>
  </header>
);

export default Header;
