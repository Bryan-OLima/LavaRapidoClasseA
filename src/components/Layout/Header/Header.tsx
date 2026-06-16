import { useState } from 'react';
import './style.css';
import FormsDialog from '../../Dialogs/FormsDialog/FormsDialog';
import type { Wash } from '../../../interfaces/Washes';
// import logo from '../../assets/classea.png';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedWash, setSelectedWash] = useState<Wash | undefined>(undefined);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="main">
      <div className="main-logo">
        {/* <img src={logo} className="main-logo__image" /> */}
        <span className="main-logo__text">CLASSEA</span>
      </div>
      <div className="main-checkin">
        <button
          className="main-checkin-button"
          onClick={() => {
            console.log('Botão clickado:  criar novo checkin');
            setSelectedWash(undefined);
            handleIsOpen();
          }}
        >
          <span className="main-checkin-button__cross"> + </span>
        </button>
        <FormsDialog
          handleIsOpen={handleIsOpen}
          isOpenState={isOpen}
          initialData={selectedWash}
        />
        <div className="main-checkin-button__text">Novo</div>
      </div>
    </div>
  );
}

export default Header;
