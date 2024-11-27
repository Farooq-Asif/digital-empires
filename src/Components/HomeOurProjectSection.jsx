import React from "react";

const HomeOurProjectSection = () => {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto sm:space-y-10  md:space-y-20 lg:space-y-20 ">
        <h2 className="sm:text-[50px] lg:text-[65px] xs:text-[35px] text-nowrap font-bold leading-tight   ">
          {" "}
          Our properties & projects.{" "}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Product.AI Card */}
          <div className=" pt-4">
            <h3 className="py-2 border-b border-gray-600 text-orange-500 font-semibold mb-2 text-sm uppercase">
              Consumer App
            </h3>
            <h4 className="text-xl font-bold mb-4">Best Cart Offer</h4>
            <p className="text-gray-400 text-sm mb-4">The LLM for shopping</p>
            <p className="text-gray-400 mb-6">
              Product.AI is a fine-tuned large language model built on top of
              ShopGraph. It can answer product-related questions with accuracy
              and reduced hallucinations. Businesses can use it to create
              customized shopping assistants with revenue-sharing opportunities.
            </p>
            <button className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200">
              Learn more
            </button>
          </div>

          {/* Simplycodes Card */}
          <div className="pt-4">
            <h3 className="text-green-500 border-b border-gray-600 py-2 font-semibold mb-2 text-sm uppercase">
              Consumer App
            </h3>
            <h4 className="text-xl font-bold mb-4">Promo For Discount</h4>
            <p className="text-gray-400 text-sm mb-4">
              The coupon knowledge network
            </p>
            <p className="text-gray-400 mb-6">
              Simplycodes is an AI-based coupon-finding tool offering the
              industry's largest database of discount codes. Its mission is to
              solve the problem of expired coupons and help you find the best
              deal for your purchases.
            </p>
            <button className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200">
              Learn more
            </button>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default HomeOurProjectSection;
