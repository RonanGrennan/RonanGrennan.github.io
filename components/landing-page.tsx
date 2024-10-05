'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ChevronRight, Menu, X, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function MertyMGMTLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link href="/">
                <span className="sr-only">Merty MGMT</span>
                <span className="text-2xl font-bold text-purple-600">Merty MGMT</span>
              </Link>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <Button variant="ghost" onClick={() => setIsMenuOpen(true)}>
                <span className="sr-only">Open menu</span>
                <Menu className="h-6 w-6" aria-hidden="true" />
              </Button>
            </div>
            <nav className="hidden md:flex space-x-10">
              <Link href="#services" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Services
              </Link>
              <Link href="#clients" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Clients
              </Link>
              <Link href="#contact" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Contact
              </Link>
            </nav>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <Link href="#contact">
                <Button className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-purple-600 hover:bg-purple-700">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-purple-600">Merty MGMT</span>
                  </div>
                  <div className="-mr-2">
                    <Button variant="ghost" onClick={() => setIsMenuOpen(false)}>
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    <Link href="#services" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                      <span className="ml-3 text-base font-medium text-gray-900">Services</span>
                    </Link>
                    <Link href="#clients" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                      <span className="ml-3 text-base font-medium text-gray-900">Clients</span>
                    </Link>
                    <Link href="#contact" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                      <span className="ml-3 text-base font-medium text-gray-900">Contact</span>
                    </Link>
                  </nav>
                </div>
              </div>
              <div className="py-6 px-5 space-y-6">
                <Link href="#contact">
                  <Button className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-purple-600 hover:bg-purple-700">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow">
        {/* Hero section */}
        <div className="relative bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
              <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block xl:inline">Elevate Your Brand with</span>{' '}
                    <span className="block text-purple-600 xl:inline">Merty MGMT</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    We&apos;re not just another social media agency. We&apos;re your partners in digital success, crafting strategies that turn followers into fans and clicks into customers.
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                      <Link href="#contact">
                        <Button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 md:py-4 md:text-lg md:px-10">
                          Get started
                        </Button>
                      </Link>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <Button variant="outline" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-purple-700 bg-purple-100 hover:bg-purple-200 md:py-4 md:text-lg md:px-10">
                        Learn more
                      </Button>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <Image
              className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design%20(2)-S7nWnS3VOgzDp3mEYAEwe8ocHx72tQ.png"
              alt="Social media marketing illustration"
              width={800}
              height={600}
            />
          </div>
        </div>

        {/* Services section */}
        <div id="services" className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-purple-600 font-semibold tracking-wide uppercase">Services</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Comprehensive Social Media Solutions
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                From strategy to execution, we&apos;ve got you covered across all major platforms.
              </p>
            </div>

            <div className="mt-10">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                {[
                  {
                    name: 'Strategy Development',
                    description: 'Tailored social media strategies aligned with your business goals.',
                  },
                  {
                    name: 'Content Creation',
                    description: 'Engaging, platform-specific content that resonates with your audience.',
                  },
                  {
                    name: 'Community Management',
                    description: 'Active engagement and community building to foster brand loyalty.',
                  },
                  {
                    name: 'Analytics & Reporting',
                    description: 'In-depth analytics and actionable insights to drive continuous improvement.',
                  },
                ].map((service) => (
                  <div key={service.name} className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                        <ChevronRight className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{service.name}</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">{service.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        {/* Clients section */}
        <div id="clients" className="bg-purple-700 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center mb-12">
              <h2 className="text-base text-purple-200 font-semibold tracking-wide uppercase">Our Clients</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                Trusted by Industry Leaders
              </p>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4">
              <div className="col-span-1 flex justify-center items-center bg-white rounded-lg p-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KFC_logo.svg-e6OYoIybvc61wnutjReFHzcDfPygSg.png"
                  alt="KFC"
                  width={150}
                  height={150}
                  className="max-h-24 w-auto"
                />
              </div>
              <div className="col-span-1 flex justify-center items-center bg-white rounded-lg p-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mark-yGFsAMXXYR8Hfl5x3miw7siSuiyxMs.webp"
                  alt="Fashion Nova"
                  width={150}
                  height={150}
                  className="max-h-24 w-auto"
                />
              </div>
              <div className="col-span-1 flex justify-center items-center bg-white rounded-lg p-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tiktok-logo-on-transparent-background-free-vector-ezeTs3kaBY9ZWWXiGWcvzbZSEfoUUq.jpg"
                  alt="TikTok"
                  width={150}
                  height={150}
                  className="max-h-24 w-auto"
                />
              </div>
              <div className="col-span-1 flex justify-center items-center bg-white rounded-lg p-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/original-a9926b809fe91d247009c84e82894bfd-T3rpDeDRlrlYOknV2oT9vCkhFD9JHq.png"
                  alt="Stake"
                  width={150}
                  height={150}
                  className="max-h-24 w-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Contact form */}
        <div id="contact" className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
          <div className="relative max-w-xl mx-auto">
            <svg
              className="absolute left-full transform translate-x-1/2"
              width={404}
              height={404}
              fill="none"
              viewBox="0 0 404 404"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="85737c0e-0916-41d7-917f-596dc7edfa27"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
            </svg>
            <svg
              className="absolute right-full bottom-0 transform -translate-x-1/2"
              width={404}
              height={404}
              fill="none"
              viewBox="0 0 404 404"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="85737c0e-0916-41d7-917f-596dc7edfa27"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
            </svg>
            <div className="text-center">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Contact Us</h2>
              <p className="mt-4 text-lg leading-6 text-gray-500">
                Ready to take your social media presence to the next level? Get in touch with us today.
              </p>
            </div>
            <div className="mt-12">
              <form action="#" method="POST" className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                    First name
                  </label>
                  <div className="mt-1">
                    <Input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="py-3 px-4 block w-full shadow-sm focus:ring-purple-500 focus:border-purple-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                    Last name
                  </label>
                  <div className="mt-1">
                    <Input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="py-3 px-4 block w-full shadow-sm focus:ring-purple-500 focus:border-purple-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <div className="mt-1">
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="py-3 px-4 block w-full shadow-sm focus:ring-purple-500 focus:border-purple-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <div className="mt-1">
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="py-3 px-4 block w-full shadow-sm focus:ring-purple-500 focus:border-purple-500 border border-gray-300 rounded-md"
                      defaultValue={''}
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <Button type="submit" className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                    Let&apos;s talk
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            <Link href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Instagram</span>
              <Instagram className="h-6 w-6" aria-hidden="true" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-6 w-6" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-gray-400">&copy; 2024 Merty MGMT. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}