"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const EditProfilePage = () => {

  const [loading, setLoading] =
    useState(false);

  const [formData, setFormData] =
    useState({
      businessName: "",
      contactNumber: "",
      businessImage: "",
      businessDescription: "",
    });

  useEffect(() => {

    async function getProfile() {

      const response = await fetch(
        "/api/profile"
      );

      const data = await response.json();

      setFormData({
        businessName:
          data.businessName || "",

        contactNumber:
          data.contactNumber || "",

        businessImage:
          data.businessImage || "",

        businessDescription:
          data.businessDescription || "",
      });
    }

    getProfile();

  }, []);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    try {

      setLoading(true);

      const response = await fetch(
        "/api/profile",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {

        toast.success(
          "Profile updated successfully!"
        );

      } else {

        toast.error(
          "Something went wrong"
        );
      }

    } catch (error) {

      toast.error(
        "Server error occurred"
      );

    } finally {

      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-sm">

        <h1 className="mb-8 text-4xl font-bold">
          Edit Profile
        </h1>

        <form
          onSubmit={handleSubmit}
        >

          {/* Business Name */}
          <div className="mb-5">

            <label className="mb-2 block font-medium">
              Business Name
            </label>

            <input
              type="text"
              name="businessName"
              value={
                formData.businessName
              }
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 p-3 outline-none focus:border-indigo-500"
            />
          </div>

          {/* Contact Number */}
          <div className="mb-5">

            <label className="mb-2 block font-medium">
              Contact Number
            </label>

            <input
              type="text"
              name="contactNumber"
              value={
                formData.contactNumber
              }
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 p-3 outline-none focus:border-indigo-500"
            />
          </div>

          {/* Business Image */}
          <div className="mb-5">

            <label className="mb-2 block font-medium">
              Business Image URL
            </label>

            <input
              type="text"
              name="businessImage"
              value={
                formData.businessImage
              }
              onChange={handleChange}
              placeholder="Paste image URL"
              className="w-full rounded-xl border border-gray-300 p-3 outline-none focus:border-indigo-500"
            />
          </div>

          {/* Description */}
          <div className="mb-6">

            <label className="mb-2 block font-medium">
              Business Description
            </label>

            <textarea
              name="businessDescription"
              value={
                formData.businessDescription
              }
              onChange={handleChange}
              rows={5}
              className="w-full rounded-xl border border-gray-300 p-3 outline-none focus:border-indigo-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700 disabled:opacity-70"
          >
            {loading
              ? "Saving..."
              : "Save Changes"}
          </button>

        </form>
      </div>
    </div>
  );
};

export default EditProfilePage;