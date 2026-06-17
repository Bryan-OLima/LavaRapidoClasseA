import iconConfiguration from '../../config/IconConfiguration';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EditIcon from '@mui/icons-material/Edit';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

import './style.css';
import { useState } from 'react';
import CustomDialog from '../Dialogs/CustomDialog/CustomDialog';
import type { Wash } from '../../interfaces/Washes';

interface WashCardProps {
  wash: Wash;
}

function WashCard({ wash }: WashCardProps) {
  const [isOpenRemove, setIsOpenRemove] = useState(false);
  const [isOpenConclude, setIsOpenConclude] = useState(false);
  const handleIsOpenConclude = () => {
    setIsOpenConclude(!isOpenConclude);
  };
  const handleIsOpenRemove = () => {
    setIsOpenRemove(!isOpenRemove);
  };
  const isDelivered = wash.service.status == 'Entregue';

  return (
    <div className="card" style={{ height: !isDelivered ? '250px' : '100%' }}>
      <div className="card-info">
        <span className="card-title">{wash.car.model}</span>
        <span className="card-plate"> {wash.car.plate} </span>
      </div>

      <span className="card-name">{wash.client.name}</span>

      {isDelivered && <span className="card-name">{wash.client.phone}</span>}

      <div className="card-schedule">
        <span className="card-text">
          <MonetizationOnIcon
            sx={{ fontSize: iconConfiguration.card.textIcon }}
          />{' '}
          Valor: R$ {wash.service.value},00
        </span>
        {isDelivered && (
          <span className="card-text">
            <WatchLaterIcon
              sx={{ fontSize: iconConfiguration.card.textIcon }}
            />{' '}
            Entrada: {wash.timestamps.hour}
          </span>
        )}
        <span
          className="card-text "
          style={{ color: !isDelivered ? '#f9d406' : '#fff' }}
        >
          <WatchLaterIcon
            sx={{ fontSize: iconConfiguration.card.textIcon }}
            style={{ color: !isDelivered ? '#f9d406' : '#fff' }}
          />{' '}
          Saída: {wash.timestamps.exit}
        </span>
        {isDelivered && (
          <span className="card-text t-yellow">
            <WatchLaterIcon
              sx={{ fontSize: iconConfiguration.card.textIcon }}
            />{' '}
            Data: {wash.timestamps.data}
          </span>
        )}
      </div>

      <div className="card-obs card-text">
        <EditIcon sx={{ fontSize: iconConfiguration.card.textIcon }} /> Notas: "
        {`${wash.service.os}. ${wash.service.obs}`}"
      </div>

      {!isDelivered && (
        <div className="card-btn-area">
          <button className="card-btn btn-edt">EDITAR</button>
          <button
            className="card-btn btn-rmv"
            onClick={() => {
              setIsOpenRemove(true);
            }}
          >
            REMOVER
          </button>
          <CustomDialog
            id={wash.id}
            isRemove={true}
            HtmlCodeBlock={
              <>
                Você tem certeza que quer remover a lavagem do carro{' '}
                <span className="warn">{wash.car.model}</span> do cliente{' '}
                <span className="warn">{wash.client.name}</span>?
              </>
            }
            handleIsOpen={handleIsOpenRemove}
            isStateOpen={isOpenRemove}
            buttons={{
              confirmationButton: { color: '#e2361f', name: 'REMOVER' },
              secundaryButton: { color: '#fff', name: 'CANCELAR' },
            }}
          />
          <button
            className="card-btn btn-ok"
            onClick={() => {
              setIsOpenConclude(true);
            }}
          >
            <CheckCircleIcon
              sx={{ fontSize: iconConfiguration.card.fontSize }}
            />
            CONCLUIR
          </button>
          <CustomDialog
            id={wash.id}
            isRemove={false}
            HtmlCodeBlock={
              <>
                Você tem certeza que quer concluir a lavagem do carro{' '}
                <span className="attention">{wash.car.model}</span> do cliente{' '}
                <span className="attention">{wash.client.name}</span>?
              </>
            }
            handleIsOpen={handleIsOpenConclude}
            isStateOpen={isOpenConclude}
            buttons={{
              confirmationButton: { color: '#f9d406', name: 'CONCLUIR' },
              secundaryButton: { color: '#fff', name: 'CANCELAR' },
            }}
          />
        </div>
      )}
    </div>
  );
}

export default WashCard;
