import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="relative h-10 w-10">
                <Image
                  src="/images/logo.jpg"
                  alt="T.G.B Bakers Logo"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
              <span className="text-xl font-bold">T.G.B Bakers</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Kenya's premier wholesale bakery, crafting delicious cookies and confectioneries with quality ingredients
            .
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products#star-cookies" className="text-gray-400 hover:text-white transition-colors">
                  Star Cookies
                </Link>
              </li>
              <li>
                <Link href="/products#heart-cookies" className="text-gray-400 hover:text-white transition-colors">
                  Heart Cookies
                </Link>
              </li>
              <li>
                <Link href="/products#mini-star-belt" className="text-gray-400 hover:text-white transition-colors">
                  Mini Star Belt Cookies
                </Link>
              </li>
              <li>
                <Link href="/products#fancy-cakes" className="text-gray-400 hover:text-white transition-colors">
                  Fancy Cakes
                </Link>
              </li>
              <li>
                <Link href="/products#far-far" className="text-gray-400 hover:text-white transition-colors">
                  Far Far
                </Link>
              </li>
              <li>
                <Link href="/products#mini-lose-box" className="text-gray-400 hover:text-white transition-colors">
                  Mini Lose Box Cookies
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                <span className="text-gray-400">Utawala, Nairobi, Kenya</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-amber-500 shrink-0" />
                <Link href="tel:0111863355 / 0114007130" className="text-gray-400 hover:text-white transition-colors">
                  0111863355 / 0114007130
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-amber-500 shrink-0" />
                <Link href="mailto:info@tgbbakers.co.ke" className="text-gray-400 hover:text-white transition-colors">
                  info@tgbbakers.co.ke
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} T.G.B Bakers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
