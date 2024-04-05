import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Navbar(props) {
  return (
    <>
    <nav className="navbar navbar-dark bg-custom justify-content-between">
      <span className="navbar-text mb-0 h5 ml-3 text-light font-weight-bold">{props.heading}</span>

      <nav className="ml-auto mr-3">
        <Link className="btn btn-success" to={`${props.path}`}>
          {props.name}
        </Link>
      </nav>
    </nav>
  </>
  );
}
