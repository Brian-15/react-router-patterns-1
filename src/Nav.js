import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

const Nav = ({ names }) => {
  return (
    <ul>
      <li key={uuid()}><Link to="/dogs">Home</Link></li>
      {names.map(name => <li key={uuid()}><Link to={`/dogs/${name}`}>{name}</Link></li>)}
    </ul>
  )
};

export default Nav;