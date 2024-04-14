import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./components/LoginPage";
import RegistrationForm from "./components/RegistrationForm";
import Output from "./components/Output";
import ForgetPassword from "./components/ForgetPassword";
import HomePage from "./components/HomePage";
import ResetPassword from "./components/ResetPassword";

function App() {
  return (
    <>
      

      <Router>
        <Routes>
          <Route path="/" Component={LoginPage} exact />
          <Route path="/register" Component={RegistrationForm} exact />
          <Route path="/welcome" Component={Output} exact />
          <Route path="/forgotpassword" Component={ForgetPassword} exact />
          <Route path="/homePage" Component={HomePage} exact/>
          <Route path="/resetpassword" Component={ResetPassword} exact/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
