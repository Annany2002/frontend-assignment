"use client";

import Link from "next/link";
import { Home } from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = usePathname().substring(1, usePathname().length);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-2xl text-gray-600 mb-4">
          Oops! Page{" "}
          <span className="text-blue-600 underline">{location} </span>
          not found
        </p>
        <Link
          href="/"
          className="flex gap-2 w-full justify-center items-center"
        >
          <Button variant={"link"}>
            <Home size={20} />
            <span className="text-md">Return Home</span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
