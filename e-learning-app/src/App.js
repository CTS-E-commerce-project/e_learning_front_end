import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./components/LoginPage";
import RegistrationForm from "./components/RegistrationForm";
import Output from "./components/Output";
import HomePage from "./components/HomePage";

function App() {
  return (
    <>
      

      <Router>
        <Routes>
          <Route path="/" Component={LoginPage} exact />
          <Route path="/register" Component={RegistrationForm} exact />
          <Route path="/welcome" Component={Output} exact />
          <Route path="/homePage" Component={HomePage} exact/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
