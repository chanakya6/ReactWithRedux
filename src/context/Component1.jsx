import React from "react";
import Component2 from "./Component2";
import dataContext from "./contextAPI";

const Component1 = () => {
  //   const [user, setUser] = useState("Chanakya");
  return (
    <dataContext.Provider value="Chanakya">
      <h1>Component 1</h1>
      <Component2 />
    </dataContext.Provider>
  );
};

export default Component1;
