import {BrowserRouter, Route, Switch} from "react-router-dom";
import MainPage from "./components/mainPage";

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={MainPage} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
