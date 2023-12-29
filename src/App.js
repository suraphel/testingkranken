import "./App.css";
//import MainNavigation from "./components/Layout/MainNavigation";
// import UserInput from "./components/UserInput";
// import HomePage from "./pages/HomePage";
// import { Switch, Route } from "react-router-dom";
// import EmployeeList from "./pages/EmployeeList";
// import Layout from "./components/Layout/Layout";
// import UserInput from "./components/UserInput";
import { Account } from "./components/Account/Account";

function App() {
  return (
    <div className="App">
      <p> This is comin from the MSI laptop</p>
      <p> This is comin from the MSI laptop</p>
      <p> This is comin from the MSI laptop on the 12/29 of 2023</p>
      <Account />
      <Account />
      <Account />
      <Account />
      <h1> updated the git file directly!! on the 29/12/2023 </h1>

<p> Let us see the difference between the git fetch and git pull is </p> 

      {/* <Switch>
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
      </Switch> */}
    </div>
  );
}

export default App;
