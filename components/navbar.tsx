"use client"

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { beynoFont } from "@/app/fonts/beyno/beyno";
import { ThemeToggle } from "./theme-toggle";
import Link from "next/link.js"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="dark:border-b dark:border-gray-700 shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/" className={`text-xl font-bold ${beynoFont.className}`}>
          TV
        </Link>

        {/* Mobile Nav (Hamburger + Theme Toggle) */}
        <div className="flex items-center md:hidden space-x-4">
          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Hamburger Menu */}
          <Button variant="ghost" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex space-x-6">
            <Link href="#about" className="text-gray-900 dark:text-white">About</Link>
          </nav>

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-black shadow-md p-4 dark:border-t dark:border-gray-700">
          <nav className="flex flex-col space-y-4">
            <Link href="#about" className="text-gray-900 dark:text-white" onClick={() => setIsOpen(false)}>About</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
