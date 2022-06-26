import "./App.css";
import MainNavigation from "./components/Layout/MainNavigation";
import UserInput from "./components/UserInput";
import HomePage from "./pages/HomePage";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MainNavigation />
        <HomePage />

        <UserInput />

        {/* <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/Form">
          <UserInput />
        </Route> */}
      </header>
    </div>
  );
}

export default App;
