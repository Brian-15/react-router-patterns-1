import { Route, Switch, Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { BrowserRouter } from "react-router-dom";
import { v4 as uuid } from "uuid";
import DogList from "./DogList.js";
import DogDetails from "./DogDetails.js"
import Nav from "./Nav.js"
import whiskey from "./images/whiskey.jpg";
import tubby from "./images/tubby.jpg";
import duke from "./images/duke.jpg";
import perry from "./images/perry.jpg";

function App({ dogs }) {
  return (
    <>
      <h1>Dog Finder</h1>
      <BrowserRouter>
        <Nav names={dogs.map(({name}) => name)} />
        <Switch>
          <Route exact path="/dogs">
            <DogList dogs={dogs} key={uuid()} />
          </Route>
          <Route path="/dogs/:name">
            <DogDetails dogs={dogs} key={uuid()} />
          </Route>
          <Redirect to="/dogs" />
        </Switch>
      </BrowserRouter>
    </>
  );
}

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}

export default App;
