import React from "react";
import User from "./User";
function Keskın() {
  return (
    <div className="flex flex-wrap gap-20  mt-10 justify-center">
      <div className="flex flex-col items-start w-80">
        <div className="w-80 h-80 bg-purple-500 rounded "></div>
        <p>none</p>
        <h1 className="text-lg font-bold">
          Instagramda veya Youtube Kanal Tavsiyelerim.
        </h1>
        <User />
      </div>

      <div className="flex flex-col items-start w-80">
        <div className="w-80 h-80 bg-purple-500 rounded"></div>
        <p>none</p>
        <h1 className="text-lg font-bold">
          Meslek Lisesi Mezunu Ne iş Yapmalı ?
        </h1>
        <User />
      </div>
      <div className="flex flex-col items-start w-80">
        <div className="w-333 h-80 bg-purple-500 rounded"></div>
        <p>none</p>
        <h1 className="text-lg font-bold">Monotonlaşan Teknoloji Sorunları</h1>
        <User />
      </div>
    </div>
  );
}

export default Keskın;
