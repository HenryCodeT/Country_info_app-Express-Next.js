"use client";
import Link from "next/link";
import React from "react";

const Redirect = ({ countryCode }: { countryCode: any }) => {
  return (
    <Link
      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition"
      href={`/${countryCode}`}
    >
      View Details
    </Link>
  );
};

export default Redirect;
