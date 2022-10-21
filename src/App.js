import Colors from "./Colors";
import colorsIdx from "./data";
import ColorDetail from "./ColorDetail";
import './App.css';

import {BrowserRouter, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/colors">
          <Colors colors={colorsIdx}/>
        </Route>
        <Route path="/colors/:color">
          <ColorDetail/>
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
