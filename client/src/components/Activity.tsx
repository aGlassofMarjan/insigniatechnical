"use client"

import { useEffect, useState } from "react";
import axios from "axios";
import { MoveRight } from "lucide-react";
import Image from "next/image";

type Product = {
  title: string;
  description: string;
  category: string;
  images: string[];
  price: number;
};

const Activity = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          'https://dummyjson.com/products?limit=8&select=title,description,category,images,price&skip=5'
        );
        setProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching the products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <div className="mt-8 lg:mt-0 ">
        <div className="w-full flex justify-between items-center mb-4">
          <p className="text-2xl font-semibold">Activity</p>
          <div role="button" className="flex gap-1 hover:text-primary">
            <p>View Timeline </p>
            <MoveRight strokeWidth={1} />
          </div>
        </div>
        <div className="flex-col gap-4 max-h-[70vh] overflow-auto">
          {/* Card List */}
          {products.map((product, index) => (
            <div key={index} className="flex gap-4 my-4">
              <div className="bg-slate-200 min-w-32 h-32 relative">
                {product.images[0] && (
                  <Image
                    src={product.images[1]}
                    alt={product.title}
                    width={128}
                    height={128}
                    className="rounded-md object-cover"
                    loading="lazy"
                  />
                )}
              </div>
              <div className="flex-col gap-y-4">
                <p className="text-2xl">
                  {product.title}{" "}
                  <span className="ml-2 text-sm text-accent italic font-normal">
                    {product.category}
                  </span>
                </p>
                <p className="text-md text-slate-500">{product.description}</p>
                <p className="text-md">${product.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Activity;
