import React from "react";
import BookFunc from "./BookFunc";

const MyComponentFunc = (props) => {
  props.func("Hi i am child component data");
  return (
    <div>
      {/* <h1>{props.desc}</h1> */}
      <BookFunc />
    </div>
  );
};

export default MyComponentFunc;
