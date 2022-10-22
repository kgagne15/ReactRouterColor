import Colors from "./Colors";
import colorsIdx from "./data";
import ColorDetail from "./ColorDetail";
import ColorForm from "./ColorForm";

import './App.css';

import {BrowserRouter, Route, Redirect, Switch} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/colors">
            <Colors colors={colorsIdx}/>
          </Route>
          <Route exact path="/colors/new">
            <ColorForm colors={colorsIdx}/>
          </Route>
          <Route path="/colors/:color">
            <ColorDetail colors={colorsIdx}/>
          </Route>
          <Redirect to="/colors"/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
