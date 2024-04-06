import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";
import React from "react";

const Catagory = ({ params }) => {
  return (
    <div className=" min-h-screen w-full md:py-20">
      <Wrapper>
        <div className=" text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className=" font-semibold leading-tight md:text-[34px] text-[34px]"> {params.id}</div>
        </div>
        {/* products grid start */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Wrapper>
    </div>
  );
};

export default Catagory;
