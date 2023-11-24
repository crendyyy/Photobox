import React from "react";
import Banner from "./compenents/Layout/Banner";
import Deskripsi from "./compenents/Layout/Deskripsi";

const app = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="w-[928px] border border-solid border-red-200 rounded-xl">
          <div className="flex w-[928px] h-16 border border-solid border-none items-center px-6 font ">
            <h1 className="font-black text-3xl -skew-x-12">LOGO</h1>
          </div>
          <Banner />
          <Deskripsi />
        </div>
      </div>
    </>
  );
};
export default app;
