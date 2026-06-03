"use client";

export default function Navbar() {
  return (
    <div className="h-16 bg-white shadow px-6 flex items-center justify-between">
      <h1 className="text-2xl font-bold">
        Dashboard
      </h1>

      <button
        className="bg-red-500 text-white px-4 py-2 rounded"
        onClick={() => {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          window.location.href = "/login";
        }}
      >
        Logout
      </button>
    </div>
  );
}