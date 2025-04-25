import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Products</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover our range of delicious wholesale bakery products, crafted with quality ingredients and care
        </p>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList>
            <TabsTrigger value="all">All Products</TabsTrigger>
            <TabsTrigger value="cookies">Cookies</TabsTrigger>
            <TabsTrigger value="cakes">Cakes</TabsTrigger>
            <TabsTrigger value="other">Other</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="all" className="space-y-16">
          {products.map((product) => (
            <div key={product.id} id={product.id} className="flex flex-col md:flex-row gap-8 scroll-mt-20">
              <div className="md:w-1/2">
                <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
                <p className="text-gray-600 mb-6">{product.description}</p>

                {product.variants && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">Available Variants:</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      {product.variants.map((variant, index) => (
                        <li key={index}>{variant}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <Button asChild className="bg-amber-600 hover:bg-amber-700">
                  <Link href="/contact" className="flex items-center">
                    Inquire About This Product <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </TabsContent>

        <TabsContent value="cookies" className="space-y-16">
          {products
            .filter((product) => product.category === "cookies")
            .map((product) => (
              <div key={product.id} id={product.id} className="flex flex-col md:flex-row gap-8 scroll-mt-20">
                <div className="md:w-1/2">
                  <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-md">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="md:w-1/2">
                  <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
                  <p className="text-gray-600 mb-6">{product.description}</p>

                  {product.variants && (
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-2">Available Variants:</h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        {product.variants.map((variant, index) => (
                          <li key={index}>{variant}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <Button asChild className="bg-amber-600 hover:bg-amber-700">
                    <Link href="/contact" className="flex items-center">
                      Inquire About This Product <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
        </TabsContent>

        <TabsContent value="cakes" className="space-y-16">
          {products
            .filter((product) => product.category === "cakes")
            .map((product) => (
              <div key={product.id} id={product.id} className="flex flex-col md:flex-row gap-8 scroll-mt-20">
                <div className="md:w-1/2">
                  <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-md">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="md:w-1/2">
                  <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
                  <p className="text-gray-600 mb-6">{product.description}</p>

                  {product.variants && (
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-2">Available Variants:</h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        {product.variants.map((variant, index) => (
                          <li key={index}>{variant}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <Button asChild className="bg-amber-600 hover:bg-amber-700">
                    <Link href="/contact" className="flex items-center">
                      Inquire About This Product <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
        </TabsContent>

        <TabsContent value="other" className="space-y-16">
          {products
            .filter((product) => product.category === "other")
            .map((product) => (
              <div key={product.id} id={product.id} className="flex flex-col md:flex-row gap-8 scroll-mt-20">
                <div className="md:w-1/2">
                  <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-md">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="md:w-1/2">
                  <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
                  <p className="text-gray-600 mb-6">{product.description}</p>

                  {product.variants && (
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-2">Available Variants:</h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        {product.variants.map((variant, index) => (
                          <li key={index}>{variant}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <Button asChild className="bg-amber-600 hover:bg-amber-700">
                    <Link href="/contact" className="flex items-center">
                      Inquire About This Product <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
        </TabsContent>
      </Tabs>

      {/* Product Gallery Section */}
      <section className="mt-16 mb-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Product Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="relative aspect-square rounded-lg overflow-hidden shadow-md">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

const products = [
  {
    id: "star-cookies",
    name: "Star Cookies",
    category: "cookies",
    description:
      "Our signature star-shaped cookies are a customer favorite. Made with premium vanilla flavor and available in a variety of vibrant colors. These cookies are perfect for parties, events, or as a sweet treat for any occasion.",
    image: "/images/12-pack.jpg",
    variants: [
      "Red Star Cookies",
      "Yellow Star Cookies",
      "Orange Star Cookies",
      "Green Star Cookies",
      "Vanilla Brown Star Cookies",
      "Chocolate Brown Star Cookies",
    ],
  },
  {
    id: "heart-cookies",
    name: "Heart Cookies",
    category: "cookies",
    description:
      "Our crunchy heart-shaped cookies are made with love and care. These delicious treats are perfect for expressing affection or adding a touch of sweetness to any celebration. Made with quality ingredients for a delightful taste experience.",
    image: "/images/heart.jpg",
  },
  {
    id: "mini-star-belt",
    name: "Mini Star Belt Cookies",
    category: "cookies",
    description:
      "Our Mini Star Belt Cookies come in mixed assorted colors, creating a vibrant and appealing treat. These small star-shaped cookies are perfect for children's parties, festive occasions, or as a colorful addition to your cookie collection. They are especially packaged conveniently for retailers.",
    image: "/images/belt-assorted.jpg",
  },
  {
    id: "fancy-cakes",
    name: "Fancy Cakes",
    category: "cakes",
    description:
      "Our Fancy Cakes are expertly crafted with attention to detail and taste. Perfect for celebrations, these cakes combine beautiful designs with a delicious flavor.",
    image: "/images/fancy.jpg",
  },
  {
    id: "far-far",
    name: "Far Far",
    category: "other",
    description:
      "Far Far is a light, crunchy snack that's popular across Kenya. Made from extruded starch, these colorful treats are a fun addition to any snack selection. They're light, airy, and come in various shapes and colors.",
    image: "/images/far-far.jpg",
  },
  {
    id: "mini-loose-box",
    name: "Mini Loose Box Cookies (1kg)",
    category: "cookies",
    description:
      "Our Mini Loose Box Cookies come in a convenient 1kg package with mixed assorted colors or plain . These small, bite-sized cookies are perfect for serving at events, parties, or keeping as a sweet treat at home or office. They're very convinient for self packagng for retailers.",
    image: "/images/Assorted.jpg",
  },
]

const galleryImages = [
  { src: "/images/assorted-colors.jpg", alt: "Colored loose box mini Cookies" },
  { src: "/images/heart.jpg", alt: "Heart Cookies Display" },
  { src: "/images/belt-assorted.jpg", alt: "Mini Belt Cookies" },
  { src: "/images/fancy-crate.jpg", alt: "Fancy Cake Packaged" },
  { src: "/images/far-far.jpg", alt: "Colorful Far Far Snacks" },
  { src: "/images/Assorted.jpg", alt: "Mini Lose Box Cookies Arrangement" },
  { src: "/images/box.jpg", alt: "Packaging" },
  { src: "/images/12-pack.jpg", alt: "Star Cookies" },
]
