import React from "react";
import User from "./User";

function Section() {
  return (
    <div className="flex flex-wrap gap-20  mt-10 justify-center">
      <div className="flex flex-col items-start w-80">
        <div className="w-80 h-80 bg-purple-500 rounded"></div>
        <p>none</p>
        <h1 className="text-lg font-bold">
          HTML CSS Hayatta kalma içeriğim nasıl kullanır ?
        </h1>
        <User />
      </div>

      <div className="flex flex-col items-start w-80">
        <div className="w-80 h-80 bg-purple-500 rounded"></div>
        <p>none</p>
        <h1 className="text-lg font-bold">
          Frontend Geliştirciler için en iyi sayfalar.
        </h1>
        <User />
      </div>
      <div className="flex flex-col items-start w-80">
        <div className="w-80 h-80 bg-purple-500 rounded"></div>
        <p>none</p>
        <h1 className="text-lg font-bold">SASS Projesi Nasıl Oluşturlur.</h1>
        <User />
      </div>
    </div>
  );
}

export default Section;
