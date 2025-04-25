// ❌ DO NOT put 'use client' here

import React from 'react';
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const featuredProducts = [
  {
    id: "1",
    name: "Star Cookies",
    description: "A delightful classic vanilla cookie.",
    image: "/images/12-pack.jpg",
  },
  {
    id: "2",
    name: "Fancy Cakes",
    description: "Soft, delicious spiral cakes. A Breakfast special..",
    image: "/images/fancy.jpg",
  },
  {
    id: "3",
    name: "Heart Cookies",
    description: "Crunchy and sweet cookie with a touch of vanilla.",
    image: "/images/heart.jpg",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Our Signature Products</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Discover our range of delicious wholesale bakery products, crafted with quality ingredients and care
          </p>

          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {featuredProducts.map((product) => (
                <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <div className="overflow-hidden h-full">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="object-cover transition-transform hover:scale-105 duration-300 w-full h-64"
                      />
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                        <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                        <Button asChild variant="outline" className="w-full">
                          <a href={`/products#${product.id}`}>View Details</a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>
    </div>
  );
}

