import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { AdminPage as Sunny } from "./AdminPage";
import Book from "./Book";
import EventComponent from "./EventComponent";
import FormEvents from "./FormEvents";
import MyComponent from "./MyComponent";
import Page404 from "./Page404";
import TodoList from "../Assignments/TodoList";
import AxiosDataFetch from "./AxiosDataFetch";
import AvengersPic from "../assests/avengers.jpg";
import SingleRecord from "./SingleRecord";
import ControlledComponent from "./ControlledComponent";
// import { Button } from "react-bootstrap";
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

class RouterClass extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <ul className="flex-nav">
          <li>
            <img
              src={AvengersPic}
              alt="Avenger Pic"
              width="150vw"
              height="75vh"
            />
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/book">Book</Link>
          </li>
          <li>
            <Link to="/eventComponent">Event Component</Link>
          </li>
          <li>
            <Link to="/formEvents">Form Events</Link>
          </li>
          <li>
            <Link to="/myComponent">My Component</Link>
          </li>
          <li>
            <Link to="/searchData">Search Data</Link>
          </li>
          <li>
            <Link to="/axiosData">Axios Data</Link>
          </li>
          <li>
            <Link to="/controlledComponent">Controlled Component</Link>
          </li>
          <li>
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-box-arrow-in-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"
                />
                <path
                  fillRule="evenodd"
                  d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                />
              </svg>
            </Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Sunny />} />
          <Route path="/book" element={<Book />} />
          <Route path="/eventComponent" element={<EventComponent />} />
          <Route path="/formEvents" element={<FormEvents />} />
          <Route path="/myComponent" element={<MyComponent />} />
          <Route path="/searchData" element={<TodoList />} />
          <Route path="/axiosData" element={<AxiosDataFetch />} />
          <Route path="/axiosData/:id" element={<SingleRecord />} />
          <Route
            path="/controlledComponent"
            element={<ControlledComponent />}
          />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default RouterClass;
