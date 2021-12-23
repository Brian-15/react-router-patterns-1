import { v4 as uuid } from 'uuid';
import { Link } from 'react-router-dom';

const DogList = ({ dogs }) => {
  return (
    <ul key={uuid()}>
      {dogs.map(({ name, src }) => (
        <li key={uuid()}>
          <Link to={`/dogs/${name}`}>
            <h2>{name}</h2>
            <img src={src} alt={name} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default DogList;