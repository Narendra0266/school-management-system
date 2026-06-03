"use client";

import {
  useEffect,
  useState,
} from "react";

export default function StudentsPage() {

  const [students, setStudents] =
    useState<any[]>([]);

  async function fetchStudents() {

    try {

      const token =
        localStorage.getItem(
          "token"
        );

      const response =
        await fetch(
          "http://localhost:3000/api/students",
          {
            headers: {
              Authorization:
                `Bearer ${token}`,
            },
          }
        );

      const data =
        await response.json();

      setStudents(data);

    } catch (error) {

      console.error(error);

    }
  }

  async function deleteStudent(
    id: string
  ) {

    try {

      const confirmDelete =
        confirm(
          "Delete this student?"
        );

      if (!confirmDelete) {
        return;
      }

      const token =
        localStorage.getItem(
          "token"
        );

      const response =
        await fetch(
          `http://localhost:3000/api/students/${id}`,
          {
            method: "DELETE",
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

      fetchStudents();

    } catch (error) {

      console.error(error);

    }
  }

  useEffect(() => {

    fetchStudents();

  }, []);

  return (

    <div>

      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">

        <div>

          <h1 className="text-3xl font-bold text-black">
            Students
          </h1>

          <p className="text-gray-600">
            Manage all students
          </p>

        </div>

        <button
          onClick={() => {
            window.location.href =
              "/dashboard/students/create";
          }}
          className="bg-black text-white px-5 py-3 rounded-xl hover:bg-gray-800"
        >
          Add Student
        </button>

      </div>

      {/* TABLE */}
      <div className="bg-white rounded-xl shadow overflow-hidden">

        <table className="w-full">

          <thead className="bg-gray-100 border-b">

            <tr>

              <th className="text-left p-4 font-semibold">
                Name
              </th>

              <th className="text-left p-4 font-semibold">
                Email
              </th>

              <th className="text-left p-4 font-semibold">
                Phone
              </th>

              <th className="text-left p-4 font-semibold">
                Gender
              </th>

              <th className="text-left p-4 font-semibold">
                Admission No
              </th>

              <th className="text-left p-4 font-semibold">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {
              students.length > 0 ? (

                students.map(
                  (student) => (

                    <tr
                      key={student.id}
                      className="border-b hover:bg-gray-50"
                    >

                      <td className="p-4">
                        {student.firstName}{" "}
                        {student.lastName}
                      </td>

                      <td className="p-4">
                        {student.email}
                      </td>

                      <td className="p-4">
                        {student.phone}
                      </td>

                      <td className="p-4">
                        {student.gender}
                      </td>

                      <td className="p-4">
                        {student.admissionNo}
                      </td>

                      <td className="p-4">

                        <button
                          onClick={() =>
                            deleteStudent(
                              student.id
                            )
                          }
                          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                        >
                          Delete
                        </button>

                      </td>

                    </tr>

                  )
                )

              ) : (

                <tr>

                  <td
                    colSpan={6}
                    className="text-center p-10 text-gray-500"
                  >
                    No students found
                  </td>

                </tr>

              )
            }

          </tbody>

        </table>

      </div>

    </div>

  );
}