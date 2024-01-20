import { routes, routeNames } from "./utils/routes";
import {HashRouter as Router, Routes, Route} from "react-router-dom"
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {routeNames.map((route) => <Route key={route} path={routes.get(route).path} element={routes.get(route).component} />)}
      </Routes>
    </Router>
  );
}

export default App;
