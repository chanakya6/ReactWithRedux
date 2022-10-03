import React from "react";
import dataContext from "../context/contextAPI";
// { useState, useEffect }
// import axios from "axios";

const BookFunc = () => {
  //   const [userData, setUserData] = useState([]);

  // const fetchUserData = () => {
  //     axios.get(`https://jsonplaceholder.typicode.com/users`)
  //         .then((response) => (response.data)).then(data=>setUserData(data));

  // }
  // useEffect(() => {
  //     fetchUserData();

  // },[])
  return (
    //     <ul>
    //          {
    //         userData.map((data) =>
    //             <li>{data.name }</li>
    //            )
    //        }
    //    </ul>

    <dataContext.Consumer>{(value) => <h1>{value}</h1>}</dataContext.Consumer>
  );
};

export default BookFunc;
