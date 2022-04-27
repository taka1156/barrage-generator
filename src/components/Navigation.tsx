import { Link } from 'react-router-dom';
import { routesNav } from '@/router';
import './Navigation.css';

export const Navigation = () => {
  return (
    <div>
      <nav>
        <ul className="nav">
          {routesNav.map((route, i) => (
            <li key={`nav_${i}`} className="nav__item">
              <Link className="nav__item--link" to={route.path}>
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
