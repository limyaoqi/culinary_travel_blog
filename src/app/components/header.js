"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Header() {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const linkClasses = (path) =>
    router.pathname === path
      ? "text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium bg-gray-200"
      : "text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium";

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={() => {
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }}
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`block h-6 w-6 ${
                  isMobileMenuOpen ? "hidden" : "block"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                className={`h-6 w-6 ${isMobileMenuOpen ? "block" : "hidden"}`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <Link href="/">
                <img
                  className="h-8 w-auto"
                  src="https://cdn-icons-png.flaticon.com/512/5219/5219577.png"
                  alt="Your Company"
                />
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Link
                  href="/experiences"
                  class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  aria-current="page"
                >
                  Culinary Experiences
                </Link>
                <Link
                  href="/reviews"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Restaurant Reviews
                </Link>
                <Link
                  href="/guides"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Food Travel Guides
                </Link>
                <Link
                  href="/about"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <Link
              href="/"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              onClick={() => {
                setIsMobileMenuOpen(false);
              }}
            >
              Home
            </Link>
            <Link
              href="/experiences"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              onClick={() => {
                setIsMobileMenuOpen(false);
              }}
            >
              Culinary Experiences
            </Link>
            <Link
              href="/reviews"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              onClick={() => {
                setIsMobileMenuOpen(false);
              }}
            >
              Restaurant Reviews
            </Link>
            <Link
              href="/guides"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              onClick={() => {
                setIsMobileMenuOpen(false);
              }}
            >
              Food Travel Guides
            </Link>
            <Link
              href="/about"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              onClick={() => {
                setIsMobileMenuOpen(false);
              }}
            >
              About Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
