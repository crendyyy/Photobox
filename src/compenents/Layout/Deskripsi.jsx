import React from "react";

const Deskripsi = () => {
  return (
    <div className="w-1/2 border-r border-solid border-black">
      <div className="flex justify-center pt-20 px-6 pb-8">
        <div className="flex justify-start flex-col w-[416px] gap-8">
          <div>
            <h1 className="text-2xl font-bold text-black mb-2">COMPANY NAME</h1>
            <p className="text-base text-gray-300">
              The 1st Self-Photo Studio in Selatpanjang
            </p>
          </div>
          <div className="gap-4 flex flex-col">
            <p>40 menit (pengambilan gambar bebas)</p>
            <p>40 menit (pengambilan gambar bebas)</p>
            <p>40 menit (pengambilan gambar bebas)</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Deskripsi;
