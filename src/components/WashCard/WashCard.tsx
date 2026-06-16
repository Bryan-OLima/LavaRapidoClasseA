import iconConfiguration from '../../config/IconConfiguration';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EditIcon from '@mui/icons-material/Edit';
import WatchLaterIcon from '@mui/icons-material/WatchLater';

import './style.css';
import { useState } from 'react';
import CustomDialog from '../Dialogs/CustomDialog/CustomDialog';
import type { Wash } from '../../interfaces/Washes';
import { DateFormater } from '../../utils/dateFormater';

interface WashCardProps {
  wash: Wash;
  service: any;
}

function WashCard({ wash, service }: WashCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="card">
      <div className="card-info">
        <span className="card-title">{wash.car.model}</span>
        <span className="card-plate"> {wash.car.plate} </span>
      </div>

      <span className="card-name">{wash.client.name}</span>
      <div className="card-schedule">
        <span className="card-text t-yellow">
          <WatchLaterIcon sx={{ fontSize: iconConfiguration.card.textIcon }} />{' '}
          Valor: R$ {wash.service.value},00
        </span>
        <span className="card-text">
          <WatchLaterIcon sx={{ fontSize: iconConfiguration.card.textIcon }} />{' '}
          Saída: {wash.timestamps.exit}
        </span>
      </div>

      <div className="card-obs card-text">
        <EditIcon sx={{ fontSize: iconConfiguration.card.textIcon }} /> Notas: "
        {`${wash.service.os}. ${wash.service.obs}`}"
      </div>

      <div className="card-btn-area">
        <button className="card-btn btn-edt">EDITAR</button>
        <button
          className="card-btn btn-rmv"
          onClick={() => {
            handleIsOpen();
          }}
        >
          REMOVER
        </button>
        <CustomDialog
          id={wash.id}
          HtmlCodeBlock={
            <>
              Você tem certeza que quer remover a lavagem do carro{' '}
              <span className="warn">{wash.car.model}</span> do cliente{' '}
              <span className="warn">{wash.client.name}</span>?
            </>
          }
          handleIsOpen={handleIsOpen}
          isStateOpen={isOpen}
          buttons={{
            confirmationButton: { color: '#e2361f', name: 'REMOVER' },
            secundaryButton: { color: '#fff', name: 'CANCELAR' },
          }}
        />
        <button
          className="card-btn btn-ok"
          onClick={() => {
            console.log(wash.timestamps.hour);
            console.log(wash.timestamps.data);
          }}
        >
          <CheckCircleIcon sx={{ fontSize: iconConfiguration.card.fontSize }} />
          CONCLUIR
        </button>
      </div>
    </div>
  );
}

export default WashCard;
