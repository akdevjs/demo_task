import React from "react";

function loading() {
  return (
    <div className="p-10 h-full w-full">
      <div className="w-full h-full flex items-center justify-center bg-pink-200 rounded-lg">
        <h1 className="text-3xl text-pink-950 font-bold max-h-96  text-center">
          Loading...
        </h1>
      </div>
    </div>
  );
}

export default loading;
