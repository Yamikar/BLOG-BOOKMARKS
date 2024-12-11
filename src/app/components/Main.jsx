import React from "react";
import User from "./User";
import Link from "next/link";
function Main({ title }) {
  return (
    <div className="flex justify-center gap-10 mt-20">
      <div>
        <div className="w-311 h-72 bg-green-300 rounded-md hover:h-96"></div>
        <h2>{title}</h2>
        <h1 className="text-xl font-bold">
          <Link href={"Sayfalar/oflu"}>Bilgi işlem için en iyi kaynaklar</Link>
        </h1>
        <User />
      </div>
      <div>
        <div className="w-311 h-72 bg-green-300 rounded-md hover:h-96"></div>
        <h2>Technology</h2>
        <h1 className="text-xl font-bold">Microsoft MVP nedir ?</h1>
        <User />
      </div>
    </div>
  );
}
export default Main;
