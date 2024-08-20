"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  const linkClasses = (path) =>
    router.pathname === path
      ? "text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium bg-gray-200"
      : "text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium";

  return (
    <nav className="bg-slate-400 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <h1 className="text-start text-xl font-bold text-gray-900">
            Culinary Travel Blog
          </h1>
          <div className="hidden sm:flex sm:space-x-8">
            <Link
              href="/"
              className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </Link>
            <Link
              href="/experiences"
              className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Culinary Experiences
            </Link>
            <Link
              href="/reviews"
              className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Restaurant Reviews
            </Link>
            <Link
              href="/guides"
              className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Food Travel Guides
            </Link>
            <Link
              href="/about"
              className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              About Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
