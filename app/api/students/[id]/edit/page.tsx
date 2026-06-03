"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  useParams,
  useRouter,
} from "next/navigation";

import StudentForm from "@/components/students/StudentForm";

export default function EditStudentPage() {

  const params = useParams();

  const router = useRouter();

  const [student, setStudent] =
    useState<any>(null);

  const [loading, setLoading] =
    useState(false);

  async function fetchStudent() {

    try {

      const token =
        localStorage.getItem(
          "token"
        );

      const response =
        await fetch(
          `http://localhost:3000/api/students/${params.id}`,
          {
            headers: {
              Authorization:
                `Bearer ${token}`,
            },
          }
        );

      const data =
        await response.json();

      if (!response.ok) {

        alert(data.error);
        return;

      }

      setStudent(data);

    } catch (error) {

      console.error(error);

    }
  }

  async function handleUpdateStudent(
    formData: any
  ) {

    try {

      setLoading(true);

      const token =
        localStorage.getItem(
          "token"
        );

      const response =
        await fetch(
          `http://localhost:3000/api/students/${params.id}`,
          {
            method: "PATCH",

            headers: {
              "Content-Type":
                "application/json",

              Authorization:
                `Bearer ${token}`,
            },

            body: JSON.stringify(
              formData
            ),
          }
        );

      const data =
        await response.json();

      if (!response.ok) {

        alert(
          data.error ||
          "Failed to update student"
        );

        return;

      }

      alert(
        "Student updated successfully"
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

  useEffect(() => {

    fetchStudent();

  }, []);

  if (!student) {

    return (
      <div className="text-black">
        Loading...
      </div>
    );

  }

  return (
    <div>

      <div className="mb-6">

        <h1 className="text-3xl font-bold text-black">
          Edit Student
        </h1>

        <p className="text-gray-600">
          Update student details
        </p>

      </div>

      <StudentForm
        initialData={student}
        onSubmit={
          handleUpdateStudent
        }
        loading={loading}
      />

    </div>
  );
}