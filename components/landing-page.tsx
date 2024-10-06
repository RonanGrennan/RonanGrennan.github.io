'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ChevronRight, Menu, X, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Sun, Moon } from 'react-feather'

export default function MertyMGMTLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <header className="bg-white shadow-sm dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
            <div className="flex items-center lg:w-0 lg:flex-1">
              <Image
                alt="Merty MGMT logo"
                width={50}
                height={50}
                src="https://media.discordapp.net/attachments/168455638681124864/1292291797577502760/photo_2022-04-12_03-53-48-removebg-preview.png?ex=67033406&is=6701e286&hm=49c1d67b11ef2ee960de7006ec929c874dc8e321f9ac5ce13fa9472e9c076da5&=&format=webp&quality=lossless&width=550&height=550"
              />
              <Link href="/">
                <span className="sr-only">Merty MGMT</span>
                <span className="text-2xl font-light text-purple-600">Merty MGMT</span>
              </Link>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <Button variant="ghost" onClick={() => setIsMenuOpen(true)}>
                <span className="sr-only">Open menu</span>
                <Menu className="h-6 w-6" aria-hidden="true" />
              </Button>
            </div>
            <nav className="hidden md:flex space-x-10">
              <Link href="#services" className="text-base font-medium text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                Services
              </Link>
              <Link href="#clients" className="text-base font-medium text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                Clients
              </Link>
              <Link href="#contact" className="text-base font-medium text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                Contact
              </Link>
            </nav>

            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
              >
                {isDarkMode ? <Sun className="h-6 w-6 text-yellow-500" /> : <Moon className="h-6 w-6 text-gray-800" />}
              </button>
              <Link href="#contact">
                <Button className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600">
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

      <main className="flex-grow bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        {/* Hero section */}
        <div className="relative bg-white dark:bg-gray-900 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
              <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                  <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                    <span className="block xl:inline">Elevate Your Brand with</span>{' '}
                    <span className="block text-purple-600 dark:text-purple-400 xl:inline">Merty MGMT</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-500 dark:text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    We&apos;re not just another social media agency. We&apos;re your partners in digital success, crafting strategies that turn followers into fans and clicks into customers.
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                      <Link href="#contact">
                        <Button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 md:py-4 md:text-lg md:px-10">
                          Get started
                        </Button>
                      </Link>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <Button variant="outline" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-purple-700 bg-purple-100 hover:bg-purple-200 dark:text-purple-100 dark:bg-purple-900 dark:hover:bg-purple-800 md:py-4 md:text-lg md:px-10">
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
              className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-96 lg:h-96 lg:m-20 lg:ml-48"
              src="https://media.discordapp.net/attachments/168455638681124864/1292292602007257159/social-media-post-illustration-download-in-svg-png-gif-file-formats--like-logo-app-application-interface-network-pack-entertainment-illustrations-3867961.webp?ex=670334c5&is=6701e345&hm=706b49152412303fe7f31e2ff7a6198283f5e918b938cb367d089458c52658f9&=&format=webp&width=556&height=495"
              alt="Social media marketing illustration"
              width={800}
              height={600}
            />
          </div>
        </div>

        {/* Services section */}
        <div id="services" className="py-28 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-purple-600 font-semibold tracking-wide uppercase">Services</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
                Comprehensive Social Media Solutions
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 lg:mx-auto">
                From strategy to execution, we&apos;ve got you covered across all major platforms.
              </p>
            </div>

            <div className="mt-10">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                {[
                  {
                    name: 'Social Media Management',
                    description: 'Our experienced team can take over and boost your social media pages to a new level.',
                  },
                  {
                    name: 'Content Creation',
                    description: 'Engaging, platform-specific content that resonates with your audience.',
                  },
                  {
                    name: 'Public Relations',
                    description: 'Claim your dream username, get verified and protect your account from false deletions.',
                  },
                  {
                    name: 'Advertising Campaigns',
                    description: 'We can manage purchasing ad placements for your campaign across social media.',
                  },
                ].map((service) => (
                  <div key={service.name} className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                        <ChevronRight className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">{service.name}</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-400">{service.description}</dd>
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
              <div className="col-span-1 flex justify-center items-center bg-white dark:bg-gray-800 rounded-lg p-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KFC_logo.svg-e6OYoIybvc61wnutjReFHzcDfPygSg.png"
                  alt="KFC"
                  width={150}
                  height={150}
                  className="max-h-24 w-auto"
                />
              </div>
              <div className="col-span-1 flex justify-center items-center bg-white dark:bg-gray-800 rounded-lg p-4">
                <Image
                  src="https://media.discordapp.net/attachments/168455638681124864/1292307190136311848/mark-modified.png?ex=6703425c&is=6701f0dc&hm=e6e6c201565ea6ffa7c74bd52899602608720c2602f347b779f0dba422fbb979&=&format=webp&quality=lossless&width=302&height=302"
                  alt="Fashion Nova"
                  width={150}
                  height={150}
                  className="max-h-24 w-auto"
                />
              </div>
              <div className="col-span-1 flex justify-center items-center bg-white dark:bg-gray-800 rounded-lg p-4">
                <Image
                  src="https://media.discordapp.net/attachments/168455638681124864/1292307200580128789/tiktok-logo-on-transparent-background-free-vector-modified.png?ex=6703425e&is=6701f0de&hm=df964d00bd8078ff752461e2cf43583923a49cd8715ed9263ac0c902d87fe456&=&format=webp&quality=lossless&width=675&height=675"
                  alt="TikTok"
                  width={150}
                  height={150}
                  className="max-h-24 w-auto"
                />
              </div>
              <div className="col-span-1 flex justify-center items-center bg-white dark:bg-gray-800 rounded-lg p-4">
                <Image
                  src="https://cdn.discordapp.com/attachments/168455638681124864/1292254945025855670/original-a9926b809fe91d247009c84e82894bfd-photoaidcom-cropped.png?ex=670311b3&is=6701c033&hm=4e5e35901c7858e11c20d1bc02310081312b593f1f41a79e08533c7b38befa63&"
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
        <div id="contact" className="bg-white dark:bg-gray-900 py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
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
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">Contact Us</h2>
              <p className="mt-4 text-lg leading-6 text-gray-500 dark:text-gray-400">
                Ready to take your social media presence to the next level? Get in touch with us today.
              </p>
            </div>
            <div className="mt-12">
              <form action="https://docs.google.com/forms/d/e/1FAIpQLSeEDExxDZCRFQXFSI22z1vbGHaMTwi3447AIiT7DBukmVi-RQ/formResponse" method="POST" className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                    First name
                  </label>
                  <div className="mt-1">
                    <Input
                      type="text"
                      name="entry.1477391780"
                      id="first-name"
                      autoComplete="given-name"
                      className="py-3 px-4 block w-full shadow-sm focus:ring-purple-500 focus:border-purple-500 border-gray-300 dark:border-gray-400 rounded-md"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                    Last name
                  </label>
                  <div className="mt-1">
                    <Input
                      type="text"
                      name="entry.235201040"
                      id="last-name"
                      autoComplete="family-name"
                      className="py-3 px-4 block w-full shadow-sm focus:ring-purple-500 focus:border-purple-500 border-gray-300 dark:border-gray-400 rounded-md"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                    Email
                  </label>
                  <div className="mt-1">
                    <Input
                      id="email"
                      name="entry.2103383712"
                      type="email"
                      autoComplete="email"
                      className="py-3 px-4 block w-full shadow-sm focus:ring-purple-500 focus:border-purple-500 border-gray-300 dark:border-gray-400 rounded-md"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-400">
                    Message
                  </label>
                  <div className="mt-1">
                    <Textarea
                      id="message"
                      name="entry.1727409782"
                      rows={4}
                      className="py-3 px-4 block w-full shadow-sm focus:ring-purple-500 focus:border-purple-500 border border-gray-300 dark:border-gray-400 rounded-md"
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

      <footer className="bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            <Link href="https://www.instagram.com/mertymgmt/" className="text-gray-400 hover:text-gray-500">
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