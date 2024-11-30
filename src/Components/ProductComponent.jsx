import React from "react";

const ProductComponent = () => {
    const ProductsData = [
        {
            title: "Sana Blogs",
            link: "https://bestcartoffer.com/",


        },
        {
            title: "Sana Blogs",
            link: "https://bestcartoffer.com/",


        },
    ]
    return (
        <div className=" min-h-screen lg:flex flex-col justify-center items-center xs:hidden sm:hidden">
            {/* Top Section */}
            <div className="flex flex-row space-x-8">
                {/* Product.AI */}
                <a
                    href="https://sanablogs.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#1a1a2e] rounded-[10px] p-20 flex flex-col items-center hover:shadow-lg transition"
                >
                    <img
                        src="https://demand.io/img/home/productai-logo.svg"
                        alt="Product.AI"
                        className="w-56 mb-4"
                    />
                    <p className="text-center text-lg">Sana Blogs</p>
                </a>

                {/* Simplycodes */}
                <a
                    href="https://bestcartoffer.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#1a1a2e] rounded-[10px]  p-20 flex flex-col items-center hover:shadow-lg transition"
                >
                    <img
                        src="https://demand.io/img/logos/simplycodes-new.svg"
                        alt="Simplycodes"
                        className="w-56 mb-4"
                    />
                    <p className="text-center text-lg">Best Cart Offer</p>
                </a>
            </div>
            <img
                src="https://demand.io/img/home/dio-product-family-pipes.svg"
                width={500}
                height={300}
                alt=""
            />
            {/* Bottom Section */}
            <div className=" bg-[#1a1a2e] rounded-[10px]  p-20 flex flex-col items-center hover:shadow-lg transition">
                <img
                    src="https://demand.io/img/logos/shopgraph.svg"
                    alt="ShopGraph"
                    className="w-56 mb-4"
                />
                <p className="text-center text-lg">The shopping knowledge graph</p>
            </div>
        </div>
    );
};

export default ProductComponent;
