import React from "react";
import User from "./User";
function Main({ title }) {
  return (
    <div className="flex justify-center gap-10 mt-20">
      <div>
        <div className="w-311 h-72 bg-green-300 rounded-md"></div>
        <h2>{title}</h2>
        <h1 className="text-xl font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h1>
        <User />
      </div>
      <div>
        <div className="w-311 h-72 bg-green-300 rounded-md"></div>
        <h2>Technology</h2>
        <h1 className="text-xl font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h1>
        <User />
      </div>
    </div>
  );
}
export default Main;
