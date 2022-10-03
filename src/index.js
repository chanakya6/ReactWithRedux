import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
// import RouterClass from "./classComponents/RouterClass";
import "./index.css";
// import ClassApp from "./ClassApp";
// import RouterFunc from "./context/RouterFunc";
// import Component1 from "./context/Component1";
// import Page404 from './classComponents/Page404';
// import App from './App';
// import Book from './classComponents/Book';
// import MyComponent from './classComponents/MyComponent';
// import Avengers from './assests/avengers.jpg';
// import CA from './assests/CA.jpg';
// import Stark from './assests/download.png';
// import EventComponent from './classComponents/EventComponent';
// import FormEvents from './classComponents/FormEvents';
// import SimpleCounter from './Assignments/SimpleCounter';
// import TemperatureControl from './Assignments/TemperatureControl';
// import TodoList from './Assignments/TodoList';
// import MyComponentFunc from "./functionalComonents/MyComponentFunc";
// import dataContext from "./context/contextAPI";
// import BookFunc from './functionalComonents/BookFunc';
// import LoginComponent from "./LoginComponent";
import { Provider } from "react-redux";
import store from "./redux/store";
import Counter from "./components/Counter";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    <Provider store={store}>
      <Counter />
    </Provider>
  </div>
);

/* <LoginComponent />; */

// // <dataContext.Provider value="Hi I am root index">
// //   <div>
// //     <MyComponentFunc func={(data) => console.log(data)} />

//     {/* <BookFunc color="pink" author="Shanmukh's" /> props concept */}
//     {/* <BookFunc /> */}
//     {/* <RouterClass /> */}
//     {/* <Page404 /> */}
//     {/* <TodoList /> */}
//     {/* <SimpleCounter />
//   <TemperatureControl /> */}
//     {/* <FormEvents /> */}
//     {/* <EventComponent /> */}
//     {/* <MyComponent displayValue="none"/> */}
//     {/* <MyComponent displayValue="">
//     <img src={Avengers} alt="Avengers Pic" width="200px" height="200px" />
//     <img src={CA} alt="CA Pic" width="200px" height="200px" />
//     <img src={ Stark} alt="Stark Pic" width="200px" height="200px" />
//   </MyComponent> */}

//     {/* <Book year={[1,2,3,4,5,6,]} year1={[1,2,3,4,5]}  /> */}
//     {/* <App  alertMsg="alert message" variant="danger" />  */}
//     {/* <App name="Sai" alertMsg="alert in green"  variant="success"/>  */}
// //   </div>
// // </dataContext.Provider>
