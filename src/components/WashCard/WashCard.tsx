import iconConfiguration from '../../config/IconConfiguration';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EditIcon from '@mui/icons-material/Edit';
import WatchLaterIcon from '@mui/icons-material/WatchLater';

import './style.css';

interface WashCardProps {
  car: string;
  plate: string;
  client: string;
  entry: string;
  exit?: string;
  obs: string;
}

function WashCard({ car, plate, client, entry, exit, obs }: WashCardProps) {
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
          Entrada: {entry}
        </span>
        <span className="card-text">
          <WatchLaterIcon sx={{ fontSize: iconConfiguration.card.textIcon }} />{' '}
          Saída: {exit}
        </span>
      </div>

      <div className="card-obs card-text">
        <EditIcon sx={{ fontSize: iconConfiguration.card.textIcon }} /> Obs: "
        {obs}"
      </div>

      <div className="card-btn-area">
        <button className="card-btn btn-edt">EDITAR</button>
        <button className="card-btn btn-rmv">REMOVER</button>
        <button className="card-btn btn-ok">
          <CheckCircleIcon sx={{ fontSize: iconConfiguration.card.fontSize }} />
          CONCLUIR
        </button>
      </div>
    </div>
  );
}

export default WashCard;
// return (
//     <div className="card">
//       <div className="card-info">
//         <span className="card-title">TOYOTA COROLLA</span>
//         <span className="card-plate"> BRA2E24 </span>
//       </div>

//       <span className="card-name"> DONA MARIA</span>
//       <div className="card-schedule">
//         <span className="card-text t-yellow">
//           <WatchLaterIcon sx={{ fontSize: iconConfiguration.card.textIcon }} />{' '}
//           Entrada: 14:30
//         </span>
//         <span className="card-text">
//           <WatchLaterIcon sx={{ fontSize: iconConfiguration.card.textIcon }} />{' '}
//           Saída: 16:00
//         </span>
//       </div>

//       <div className="card-obs card-text">
//         <EditIcon sx={{ fontSize: iconConfiguration.card.textIcon }} /> Obs:
//         "Cera de carnaúba, cuidado com retrovisor esquerdo"
//       </div>

//       <div className="card-btn-area">
//         <button className="card-btn btn-edt">EDITAR</button>
//         <button className="card-btn btn-rmv">REMOVER</button>
//         <button className="card-btn btn-ok">
//           <CheckCircleIcon sx={{ fontSize: iconConfiguration.card.fontSize }} />
//           CONCLUIR
//         </button>
//       </div>
//     </div>
//   );
