import { menuItems } from '../constants/index';
import MenuItems from './MenuItems';

const Navbar = () => (
  <nav className="flex-1 flex items-center">
    <ul className="flex ml-16">
      {menuItems.map((item, index) => {
        return <MenuItems items={item} key={index} />;
      })}
    </ul>
    <div className="flex-1 flex items-center justify-end">
      <a href="#" className="menu-items">
        Login
      </a>
      <a className="btn-navbar" href="#">
        Register
      </a>
    </div>
  </nav>
);

export default Navbar;
