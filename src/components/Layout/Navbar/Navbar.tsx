import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import PaidIcon from '@mui/icons-material/Paid';
import iconConfiguration from '../../../config/IconConfiguration';
import HistoryIcon from '@mui/icons-material/History';

import './style.css';

function Navbar() {
  return (
    <nav className="nav">
      <li className="nav-link">
        <Link to="/history">
          <button className="nav-link-btn btn">
            <HistoryIcon
              sx={{
                color: iconConfiguration.navbar.color,
                fontSize: iconConfiguration.navbar.fontSize,
              }}
            />
            Histórico
          </button>
        </Link>
      </li>

      <li className="nav-link">
        <Link to="/">
          <button className="nav-link-btn btn">
            <HomeIcon
              sx={{
                color: iconConfiguration.navbar.color,
                fontSize: iconConfiguration.navbar.fontSize,
              }}
            />
            Home
          </button>
        </Link>
      </li>

      <li className="nav-link">
        <Link to="/finance">
          <button className="nav-link-btn btn">
            <PaidIcon
              sx={{
                color: iconConfiguration.navbar.color,
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
