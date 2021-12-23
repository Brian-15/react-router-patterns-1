import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { v4 as uuid } from "uuid";

const DogDetails = ({ dogs }) => {
  const { name } = useParams();
  const { age, src, facts } = dogs.filter((dog => dog.name === name))[0];
  return (
    <>
      <h1>{ name }</h1>
      <h2>Age: { age } years old</h2>
      <img src={src} alt={name} />
      {facts.map(fact => <p key={uuid()}>{ fact }</p>)}
    </>
  );
};

export default DogDetails;