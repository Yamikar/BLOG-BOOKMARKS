import React from "react";

function User() {
  const date = ["14.20.2024"];
  const UserName = ["Yılmaz Keskin"];
  return (
    <div>
      <div className="flex gap-3">
        <div className="flex gap-2">
          <div className="w-8 h-8 bg-red-600 rounded-full"></div>
          <p>{UserName}</p>
        </div>
        <div>{date}</div>
      </div>
    </div>
  );
}

export default User;
