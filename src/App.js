import {BrowserRouter, Route, Switch} from "react-router-dom";
import MainPage from "./components/mainPage";
import History from "./components/History";

function App() {
  return (
      <BrowserRouter history={History}>
        <Switch>
          <Route exact path='/' component={MainPage} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
