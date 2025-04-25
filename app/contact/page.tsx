"use client"

import type React from "react"

import { useState } from "react"
import { Mail, MapPin, Phone, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export default function ContactPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We'll get back to you soon!",
    })

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
    setIsSubmitting(false)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Have questions about our products or want to place an order? Get in touch with us using any of the methods
          below.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <Card>
          <CardHeader className="text-center">
            <Phone className="w-10 h-10 text-amber-600 mx-auto mb-2" />
            <CardTitle>Call Us</CardTitle>
            <CardDescription>Speak directly with our team</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <a href="tel:0111863355 " className="text-amber-600 hover:underline">
              0111863355 
            </a>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="text-center">
            <Mail className="w-10 h-10 text-amber-600 mx-auto mb-2" />
            <CardTitle>Email Us</CardTitle>
            <CardDescription>Send us an email anytime</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <a href="mailto:bakerstgb@gmail.com" className="text-amber-600 hover:underline">
              bakerstgb@gmail.com
            </a>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="text-center">
            <MapPin className="w-10 h-10 text-amber-600 mx-auto mb-2" />
            <CardTitle>Visit Us</CardTitle>
            <CardDescription>Our bakery location</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p>Utawala</p>
            <p>Nairobi, Kenya</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-2">
              <Label htmlFor="name">Your Name</Label>
              <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message">Your Message</Label>
              <Textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700" disabled={isSubmitting}>
              {isSubmitting ? (
                <span className="flex items-center">
                  Sending... <Send className="ml-2 h-4 w-4 animate-pulse" />
                </span>
              ) : (
                <span className="flex items-center">
                  Send Message <Send className="ml-2 h-4 w-4" />
                </span>
              )}
            </Button>
          </form>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6">Wholesale Inquiries</h2>
          <p className="text-gray-600 mb-6">
            T.G.B Bakers specializes in wholesale bakery products for businesses across Kenya. Whether you're a
            retailer, distributor, or event planner, we can provide high-quality baked goods in bulk quantities.
          </p>
          <div className="space-y-4 mb-8">
            <h3 className="text-lg font-semibold">Our wholesale services include:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Bulk orders for retail stores</li>
              <li>Custom orders for events and celebrations</li>
              <li>Regular supply for hotels and restaurants</li>
              <li>Distribution partnerships</li>
              <li>Corporate gifting solutions</li>
            </ul>
          </div>
          <p className="text-gray-600 mb-6">
            For wholesale pricing and minimum order quantities, please contact our sales team directly via phone or
            email, or fill out the contact form with your specific requirements.
          </p>
          <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
            <h3 className="text-lg font-semibold mb-2">Business Hours</h3>
            <p className="text-gray-600 mb-1">Monday - Friday: 8:00 AM - 5:00 PM</p>
            <p className="text-gray-600 mb-1">Saturday: 9:00 AM - 3:00 PM</p>
            <p className="text-gray-600">Sunday: Closed</p>
          </div>
        </div>
      </div>
    </div>
  )
}
