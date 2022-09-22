import Dropdown from './Dropdown';

const ArrowDown = () => {
  return (
    <svg
      className="ml-1"
      width="10"
      height="6"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path stroke="#686868" stroke-width="1.5" fill="none" d="m1 1 4 4 4-4" />
    </svg>
  );
};

const MenuItems = ({ items }) => {
  return (
    <li className="relative mr-10 last:mr-0">
      {items.subMenu ? (
        <>
          <a href="#" className="flex items-center menu-items">
            {items.title}
            <ArrowDown />
          </a>
          <ul
            className={`absolute ${
              items.title === 'Features' ? 'right-0' : 'left-0'
            } bg-white rounded-lg px-5 py-3 whitespace-nowrap mt-3 dropdown-shadow hidden`}
          >
            <Dropdown subMenus={items.subMenu} />
          </ul>
        </>
      ) : (
        <a href="#" className="menu-items">
          {items.title}
        </a>
      )}
    </li>
  );
};

export default MenuItems;
