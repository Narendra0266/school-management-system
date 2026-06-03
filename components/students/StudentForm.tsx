"use client";

import { useState } from "react";

type StudentFormProps = {
  initialData?: any;
  onSubmit: (formData: any) => Promise<void>;
  loading?: boolean;
};

export default function StudentForm({
  initialData,
  onSubmit,
  loading,
}: StudentFormProps) {

  const [formData, setFormData] =
    useState({
      firstName:
        initialData?.firstName || "",

      lastName:
        initialData?.lastName || "",

      email:
        initialData?.email || "",

      phone:
        initialData?.phone || "",

      gender:
        initialData?.gender || "MALE",

      dateOfBirth:
        initialData?.dateOfBirth
          ?.split("T")[0] || "",

      address:
        initialData?.address || "",

      admissionNo:
        initialData?.admissionNo || "",
    });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLSelectElement |
      HTMLTextAreaElement
    >
  ) {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });

  }

  async function handleSubmit(
    e: React.FormEvent
  ) {

    e.preventDefault();

    await onSubmit(formData);

  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow space-y-5"
    >

      {/* FIRST NAME + LAST NAME */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <div>

          <label className="block mb-2 font-medium text-black">
            First Name
          </label>

          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-4 py-3 text-black"
          />

        </div>

        <div>

          <label className="block mb-2 font-medium text-black">
            Last Name
          </label>

          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-4 py-3 text-black"
          />

        </div>

      </div>

      {/* EMAIL + PHONE */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <div>

          <label className="block mb-2 font-medium text-black">
            Email
          </label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-4 py-3 text-black"
          />

        </div>

        <div>

          <label className="block mb-2 font-medium text-black">
            Phone
          </label>

          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-4 py-3 text-black"
          />

        </div>

      </div>

      {/* GENDER + DOB */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <div>

          <label className="block mb-2 font-medium text-black">
            Gender
          </label>

          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3 text-black"
          >

            <option value="MALE">
              Male
            </option>

            <option value="FEMALE">
              Female
            </option>

          </select>

        </div>

        <div>

          <label className="block mb-2 font-medium text-black">
            Date Of Birth
          </label>

          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-4 py-3 text-black"
          />

        </div>

      </div>

      {/* ADMISSION NUMBER */}
      <div>

        <label className="block mb-2 font-medium text-black">
          Admission Number
        </label>

        <input
          type="text"
          name="admissionNo"
          value={formData.admissionNo}
          onChange={handleChange}
          required
          className="w-full border rounded-lg px-4 py-3 text-black"
        />

      </div>

      {/* ADDRESS */}
      <div>

        <label className="block mb-2 font-medium text-black">
          Address
        </label>

        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          rows={4}
          className="w-full border rounded-lg px-4 py-3 text-black"
        />

      </div>

      {/* BUTTON */}
      <button
        type="submit"
        disabled={loading}
        className="bg-black text-white px-6 py-3 rounded-xl"
      >
        {
          loading
            ? "Saving..."
            : "Save Student"
        }
      </button>

    </form>
  );
}