import './style.css';
// import logo from '../../assets/classea.png';

function Header() {
  return (
    <div className="main">
      <div className="main-logo">
        {/* <img src={logo} className="main-logo__image" /> */}
        <span className="main-logo__text">CLASSEA</span>
      </div>
      <div className="main-checkin">
        <button className="main-checkin-button">
          <span className="main-checkin-button__cross"> + </span>
        </button>
        <div className="main-checkin-button__text">Novo</div>
      </div>
    </div>
  );
}

export default Header;
