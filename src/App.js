import "./App.css";
//import MainNavigation from "./components/Layout/MainNavigation";
// import UserInput from "./components/UserInput";
import HomePage from "./pages/HomePage";
import { Switch, Route } from "react-router-dom";
import EmployeeList from "./pages/EmployeeList";
import Layout from "./components/Layout/Layout";
import UserInput from "./components/UserInput";

function App() {
  return (
    <div className="App">
      <Switch>
        <Layout>
          <header className="App-header">
            <Route path="/">
              <HomePage />
            </Route>
            <Route path="/form">
              <UserInput />
            </Route>
            <Route path="/list">
              <EmployeeList />
            </Route>
          </header>
        </Layout>
      </Switch>
    </div>
  );
}

export default App;
