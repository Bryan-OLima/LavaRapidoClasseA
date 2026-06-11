import iconConfiguration from '../../config/IconConfiguration';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EditIcon from '@mui/icons-material/Edit';
import WatchLaterIcon from '@mui/icons-material/WatchLater';

import './style.css';
import CustomDialog from '../Dialogs/CustomDialog/CustomDialog';

interface WashCardProps {
  id: string;
  car: string;
  plate: string;
  client: string;
  value: number;
  exit?: string;
  notes: string;
}

function WashCard({
  id,
  car,
  plate,
  client,
  value,
  exit,
  notes,
}: WashCardProps) {
  return (
    <div className="card">
      <div className="card-info">
        <span className="card-title">{car}</span>
        <span className="card-plate"> {plate} </span>
      </div>

      <span className="card-name">{client}</span>
      <div className="card-schedule">
        <span className="card-text t-yellow">
          <WatchLaterIcon sx={{ fontSize: iconConfiguration.card.textIcon }} />{' '}
          Valor: R$ {value},00
        </span>
        <span className="card-text">
          <WatchLaterIcon sx={{ fontSize: iconConfiguration.card.textIcon }} />{' '}
          Saída: {exit}
        </span>
      </div>

      <div className="card-obs card-text">
        <EditIcon sx={{ fontSize: iconConfiguration.card.textIcon }} /> Notas: "
        {notes}"
      </div>

      <div className="card-btn-area">
        <button className="card-btn btn-edt">EDITAR</button>
        <CustomDialog id={id} carModel={car} clientName={client} />
        <button className="card-btn btn-ok">
          <CheckCircleIcon sx={{ fontSize: iconConfiguration.card.fontSize }} />
          CONCLUIR
        </button>
      </div>
    </div>
  );
}

export default WashCard;
