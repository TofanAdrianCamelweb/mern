import React from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import TodosList from "./components/Todo/TodosList";
import EditTodo from "./components/Todo/EditTodo";
import CreateTodo from "./components/Todo/CreateTodo";
import LogRocket from "logrocket";

function App() {
    LogRocket.init('yeubse/tst-project');
  return (
      <Router>
          <div className={'container'}>
              <nav className={'navbar navbar-expand-lg navbar-light bg-light'}>
                  <a className={'navbar-brand'}  target="_blank">
                      <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" />
                  </a>
                  <Link to="/" className="navbar-brand">Todo app</Link>
                  <div className="collpase navbar-collapse">
                      <ul className="navbar-nav mr-auto">
                          <li className="navbar-item">
                              <Link to="/" className="nav-link">Todos</Link>
                          </li>
                          <li className="navbar-item">
                              <Link to="/create" className="nav-link">Create Todo</Link>
                          </li>
                      </ul>
                  </div>
              </nav>
              <br/>
              <Route path="/" exact component={TodosList} />
              <Route path="/edit/:id" component={EditTodo} />
              <Route path="/create" component={CreateTodo} />
          </div>
      </Router>
  );
}

export default App;
