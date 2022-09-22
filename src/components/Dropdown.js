import { ReactComponent as Todo } from '../images/icon-todo.svg';
import { ReactComponent as Calendar } from '../images/icon-calendar.svg';
import { ReactComponent as Reminders } from '../images/icon-reminders.svg';
import { ReactComponent as Planning } from '../images/icon-planning.svg';

const Dropdown = ({ subMenus }) => {
  return subMenus.map((item, index) => (
    <li className="py-1 flex" key={index}>
      {item.title === 'Todo List' ? <Todo className="mr-2" /> : ''}
      {item.title === 'Calendar' ? <Calendar className="mr-2" /> : ''}
      {item.title === 'Reminders' ? <Reminders className="mr-2" /> : ''}
      {item.title === 'Planning' ? <Planning className="mr-2" /> : ''}
      <a className="block" href="#">
        {item.title}
      </a>
    </li>
  ));
};

export default Dropdown;
