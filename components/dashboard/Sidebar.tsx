"use client";

import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-black text-white p-5">
      <h1 className="text-2xl font-bold mb-10">
        School ERP
      </h1>

      <nav className="flex flex-col gap-4">
        <Link href="/dashboard">
          Dashboard
        </Link>

        <Link href="/dashboard/students">
          Students
        </Link>

        <Link href="/dashboard/teachers">
          Teachers
        </Link>

        <Link href="/dashboard/classes">
          Classes
        </Link>
      </nav>
    </div>
  );
}