"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import StudentForm from "@/components/students/StudentForm";

export default function CreateStudentPage() {

  const router = useRouter();

  const [loading, setLoading] =
    useState(false);

  async function handleCreateStudent(
    formData: any
  ) {

    try {

      setLoading(true);

      const token =
        localStorage.getItem(
          "token"
        );

      const user =
        JSON.parse(
          localStorage.getItem(
            "user"
          ) || "{}"
        );

      const response =
        await fetch(
          "http://localhost:3000/api/students",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",

              Authorization:
                `Bearer ${token}`,
            },

            body: JSON.stringify({
              ...formData,

              institutionId:
                user.institutionId,
            }),
          }
        );

      const data =
        await response.json();

      if (!response.ok) {

        alert(
          data.error ||
          "Failed to create student"
        );

        return;

      }

      alert(
        "Student created successfully"
      );

      router.push(
        "/dashboard/students"
      );

    } catch (error) {

      console.error(error);

      alert(
        "Something went wrong"
      );

    } finally {

      setLoading(false);

    }
  }

  return (
    <div>

      {/* PAGE HEADER */}
      <div className="mb-6">

        <h1 className="text-3xl font-bold text-black">
          Create Student
        </h1>

        <p className="text-gray-600">
          Add a new student
        </p>

      </div>

      {/* FORM */}
      <StudentForm
        onSubmit={
          handleCreateStudent
        }
        loading={loading}
      />

    </div>
  );
}