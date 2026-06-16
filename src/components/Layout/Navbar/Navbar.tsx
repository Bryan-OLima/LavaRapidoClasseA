import { Link, useLocation } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import PaidIcon from '@mui/icons-material/Paid';
import iconConfiguration from '../../../config/IconConfiguration';
import HistoryIcon from '@mui/icons-material/History';

import './style.css';

function Navbar() {
  const location = useLocation();

  const getIconColor = (path: string) => {
    return location.pathname === path
      ? '#f9d406'
      : iconConfiguration.navbar.color;
  };
  return (
    <nav className="nav">
      <li className="nav-link">
        <Link to="/history">
          <button
            className="nav-link-btn btn"
            style={{ color: getIconColor('/history') }}
          >
            <HistoryIcon
              sx={{
                color: getIconColor('/history'),
                fontSize: iconConfiguration.navbar.fontSize,
              }}
            />
            Histórico
          </button>
        </Link>
      </li>

      <li className="nav-link">
        <Link to="/">
          <button
            className="nav-link-btn btn"
            style={{ color: getIconColor('/') }}
          >
            <HomeIcon
              sx={{
                color: getIconColor('/'),
                fontSize: iconConfiguration.navbar.fontSize,
              }}
            />
            Home
          </button>
        </Link>
      </li>

      <li className="nav-link">
        <Link to="/finance">
          <button
            className="nav-link-btn btn"
            style={{ color: getIconColor('/finance') }}
          >
            <PaidIcon
              sx={{
                color: getIconColor('/finance'),
                fontSize: iconConfiguration.navbar.fontSize,
              }}
            />
            Finanças
          </button>
        </Link>
      </li>
    </nav>
  );
}

export default Navbar;
