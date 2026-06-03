"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {

  const router = useRouter();

  const [user, setUser] =
    useState<any>(null);

  useEffect(() => {

    const token =
      localStorage.getItem("token");

    const storedUser =
      localStorage.getItem("user");

    if (!token || !storedUser) {

      router.push("/login");
      return;

    }

    setUser(
      JSON.parse(storedUser)
    );

  }, [router]);

  if (!user) {
    return null;
  }

  return (

    <div>

      <div className="mb-6">

        <h1 className="text-3xl font-bold text-black">
          Dashboard
        </h1>

        <p className="text-gray-600">
          Welcome back, {user.name}
        </p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        <div className="bg-blue-100 p-5 rounded-xl shadow">

          <h2 className="font-bold text-black mb-2">
            Name
          </h2>

          <p className="text-gray-800 text-lg">
            {user.name}
          </p>

        </div>

        <div className="bg-green-100 p-5 rounded-xl shadow">

          <h2 className="font-bold text-black mb-2">
            Email
          </h2>

          <p className="text-gray-800 text-lg break-all">
            {user.email}
          </p>

        </div>

        <div className="bg-yellow-100 p-5 rounded-xl shadow">

          <h2 className="font-bold text-black mb-2">
            Role
          </h2>

          <p className="text-gray-800 text-lg">
            {user.role}
          </p>

        </div>

      </div>

    </div>

  );
}