"use client";

import Link from "next/link";
import React from "react";

const RedirectBase = () => {
  return (
    <Link href="/">
      <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition">
        Home
      </button>
    </Link>
  );
};

export default RedirectBase;
