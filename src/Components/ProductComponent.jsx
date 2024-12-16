import React from "react";
import img1 from "../Assets/Images/promo1.png";
import img2 from "../Assets/Images/promo2.png";
import img3 from "../Assets/Images/promo4.png";
const ProductComponent = () => {
  return (
    <div className=" min-h-screen lg:flex flex-col justify-center items-center xs:hidden sm:hidden">
      <div className="flex flex-row space-x-8">
        <a
          href="https://bestcartoffer.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#1a1a2e] rounded-[10px] p-20 flex flex-col items-center hover:shadow-lg transition"
        >
          <img
            src={img1}
            alt="BestcartOfferPromo"
            className="object-cover mb-4"
          />
        </a>

        <a
          href="https://sanablogs.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#1a1a2e] rounded-[10px]  p-20 flex flex-col items-center hover:shadow-lg transition"
        >
          <img src={img2} alt="Sana Blogs" className="object-cover mb-4" />
        </a>
      </div>
      <img
        src="https://demand.io/img/home/dio-product-family-pipes.svg"
        width={500}
        height={300}
        alt="pipes"
      />
      <div className=" bg-[#1a1a2e] rounded-[10px]  p-20 flex flex-col items-center hover:shadow-lg transition">
        <a
          href="https://favelycodes.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#1a1a2e] rounded-[10px]  p-10 flex flex-col items-center hover:shadow-lg transition"
        >
          <img src={img3} alt="favelycodes" className="	mb-4 " width={280}/>
        </a>
      </div>
    </div>
  );
};

export default ProductComponent;
