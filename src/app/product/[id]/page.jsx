"use client";
import ProductDetailCarousel from "@/components/ProductDetailCarousel";
import RelatedProduct from "@/components/RelatedProduct";
import Wrapper from "@/components/Wrapper";
import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";

const Product = () => {
  return (
    <div className=" min-h-screen w-full md:py-16">
      <Wrapper>
        <div className="flex  lg:flex-row flex-col md:px-24 gap-[50px] lg:gap-[100px]">
          {/* left */}
          <div className=" w-full flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductDetailCarousel />
          </div>
          {/* right */}
          <div className="flex-[1] py-3">
            {/* PRODUCT TITLE */}
            <div className="text-[34px] font-semibold mb-2 leading-tight">Jordan</div>

            {/* PRODUCT SUBTITLE */}
            <div className="text-lg font-semibold mb-5">Men&apos;s golf shoes</div>
            {/* PRODUCT PRICE */}
            <div className="flex items-center">
              <p className="mr-2 text-lg font-semibold">MRP : &#8377;11999</p>

              <p className="text-base  font-medium line-through">&#8377;13299</p>
              <p className="ml-auto text-base font-medium text-green-500">20% off</p>
            </div>
            <div className="text-md font-medium text-black/[0.5]">incl. of taxes</div>
            <div className="text-md font-medium text-black/[0.5] mb-20">{`(Also includes all applicable duties)`}</div>
            {/* product size */}
            <div className=" mb-10 ">
              <div className="flex justify-between mb-2">
                {/* heding */}
                <div className="text-md font-semibold"> Select Size</div>
                <div className="text-md font-medium text-black/[0.5] cursor-pointer">Select Guide</div>
              </div>
              {/* size */}
              <div className="grid grid-cols-3 gap-2">
                <div className={`border rounded-lg text-center py-3 font-medium hover:border-black cursor-pointer`}>UK 6</div>
                <div className={`border rounded-lg text-center py-3 font-medium hover:border-black cursor-pointer`}>UK 6</div>
                <div className={`border rounded-lg text-center py-3 font-medium hover:border-black cursor-pointer`}>UK 6</div>
                <div className={`border rounded-lg text-center py-3 font-medium hover:border-black cursor-pointer`}>UK 6</div>
                <div className={`border rounded-lg text-center py-3 font-medium hover:border-black cursor-pointer`}>UK 6</div>
                <div className={`border rounded-lg text-center py-3 font-medium hover:border-black cursor-pointer`}>UK 6</div>
                <div className={`border rounded-lg text-center py-3 font-medium hover:border-black cursor-pointer`}>UK 6</div>
                <div className={`border rounded-lg text-center py-3 font-medium hover:border-black cursor-pointer`}>UK 6</div>
                <div className={`border rounded-lg text-center py-3 font-medium hover:border-black cursor-pointer`}>UK 6</div>
              </div>
            </div>
            {/* ADD TO CART BUTTON START */}
            <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">Add to Cart</button>
            {/* ADD TO CART BUTTON END */}

            {/* WHISHLIST BUTTON START */}
            <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
              Whishlist
              <IoMdHeartEmpty size={20} />
            </button>
            {/* WHISHLIST BUTTON END */}
            <div>
              <div className="text-lg font-bold mb-5">Product Details</div>
              <div className="markdown text-md mb-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti fugit consequuntur consectetur tenetur maxime voluptate voluptatibus qui nulla voluptas, nesciunt amet omnis cumque
                inventore in tempore accusamus. Culpa maxime veniam ducimus fugit libero temporibus pariatur! Perferendis quasi, blanditiis et atque autem soluta quae possimus dolorem accusamus, ex
                dicta. Ad, accusamus.
              </div>
              <div className="markdown text-md mb-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti fugit consequuntur consectetur tenetur maxime voluptate voluptatibus qui nulla voluptas, nesciunt amet omnis cumque
                inventore in tempore accusamus. Culpa maxime veniam ducimus fugit libero temporibus pariatur! Perferendis quasi, blanditiis et atque autem soluta quae possimus dolorem accusamus, ex
                dicta. Ad, accusamus.
              </div>
            </div>
          </div>
        </div>

        {/* related product */}
        <RelatedProduct />
      </Wrapper>
    </div>
  );
};

export default Product;
