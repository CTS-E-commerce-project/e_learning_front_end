import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { Bounce, ToastContainer } from "react-toastify";
import LoginPage from "./components/LoginPage";
import RegistrationForm from "./components/RegistrationForm";
import Output from "./components/Output";

function App() {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />

      <Router>
        <Routes>
          <Route path="/" Component={LoginPage} exact />
          <Route path="/register" Component={RegistrationForm} exact />
          <Route path="/welcome" Component={Output} exact />
        </Routes>
      </Router>
    </>
  );
}

export default App;
