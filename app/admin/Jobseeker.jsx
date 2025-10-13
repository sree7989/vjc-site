"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function VisaDashboard() {
  const [visas, setVisas] = useState([]);
  const [form, setForm] = useState({
    name: "",
    slug: "",
    description: "",
    descriptionImage: "",
    descriptionImageWidth: "300",
    descriptionImageHeight: "auto",
    descriptionImagePosition: "left",
    info: "",
    metaTitle: "",
    metaDescription: "",
    metaKeywords: "",
    image: "", // now always URL
  });
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    fetch("/api/visas")
      .then((res) => res.json())
      .then(setVisas);
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleInfoHtmlFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const text = await file.text();
    setForm({ ...form, info: text });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const visaData = { ...form };

    if (editingIndex !== null) {
      await fetch("/api/visas", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ index: editingIndex, visa: visaData }),
      });
    } else {
      await fetch("/api/visas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(visaData),
      });
    }

    const updated = await fetch("/api/visas").then((r) => r.json());
    setVisas(updated);
    setForm({
      name: "",
      slug: "",
      description: "",
      descriptionImage: "",
      descriptionImageWidth: "300",
      descriptionImageHeight: "auto",
      descriptionImagePosition: "left",
      info: "",
      metaTitle: "",
      metaDescription: "",
      metaKeywords: "",
      image: "",
    });
    setEditingIndex(null);
  };

  const handleEdit = (index) => {
    const v = visas[index];
    setForm({
      name: v.name || "",
      slug: v.slug || "",
      description: v.description || "",
      descriptionImage: v.descriptionImage || "",
      descriptionImageWidth: v.descriptionImageWidth || "300",
      descriptionImageHeight: v.descriptionImageHeight || "auto",
      descriptionImagePosition: v.descriptionImagePosition || "left",
      info: v.info || "",
      metaTitle: v.metaTitle || "",
      metaDescription: v.metaDescription || "",
      metaKeywords: v.metaKeywords || "",
      image: v.image || "",
    });
    setEditingIndex(index);
  };

  const handleDelete = async (index) => {
    await fetch("/api/visas", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ index }),
    });
    const updated = await fetch("/api/visas").then((r) => r.json());
    setVisas(updated);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Visa Dashboard</h1>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="space-y-3 bg-gray-100 p-4 rounded-lg mb-6"
      >
        <input
          type="text"
          name="name"
          placeholder="Visa Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="slug"
          placeholder="Path (slug)"
          value={form.slug}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="metaTitle"
          placeholder="Meta Title"
          value={form.metaTitle}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="metaDescription"
          placeholder="Meta Description"
          value={form.metaDescription}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="metaKeywords"
          placeholder="Meta Keywords (comma separated)"
          value={form.metaKeywords}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        {/* Image URL field */}
        <input
          type="text"
          name="image"
          placeholder="Main Image URL"
          value={form.image}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        {form.image && (
          <div className="mb-2">
            <Image
              src={form.image}
              alt="Visa Image"
              width={120}
              height={80}
              style={{ objectFit: "cover", borderRadius: "8px" }}
              unoptimized
            />
          </div>
        )}

        <textarea
          name="description"
          placeholder="Main Heading Description"
          value={form.description}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          rows="2"
        />

        {/* Description image URL */}
        <input
          type="text"
          name="descriptionImage"
          placeholder="Description Image URL"
          value={form.descriptionImage}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        {form.descriptionImage && (
          <div className="mb-2">
            <Image
              src={form.descriptionImage}
              alt="Description Image"
              width={120}
              height={80}
              style={{ objectFit: "cover", borderRadius: "8px" }}
              unoptimized
            />
          </div>
        )}

        <textarea
          name="info"
          placeholder="Bottom Info Box Content (HTML allowed)"
          value={form.info}
          onChange={handleChange}
          className="w-full p-3 border rounded h-40"
        />
        <input
          type="file"
          accept=".html,.htm,.txt"
          onChange={handleInfoHtmlFileChange}
          className="w-full p-2 border rounded"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          {editingIndex !== null ? "Update Visa" : "+ Add Visa"}
        </button>
      </form>

      {/* List */}
      <h2 className="text-xl font-semibold mb-2">All Visas</h2>
      {visas.length === 0 ? (
        <p className="text-gray-500">No visas added yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Name</th>
                <th className="border p-2">Slug</th>
                <th className="border p-2">Meta Title</th>
                <th className="border p-2">Meta Description</th>
                <th className="border p-2">Meta Keywords</th>
                <th className="border p-2">Image</th>
                <th className="border p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {visas.map((visa, index) => (
                <tr key={index}>
                  <td className="border p-2">{visa.name}</td>
                  <td className="border p-2">/{visa.slug}</td>
                  <td className="border p-2">{visa.metaTitle}</td>
                  <td className="border p-2">{visa.metaDescription}</td>
                  <td className="border p-2">{visa.metaKeywords}</td>
                  <td className="border p-2">
                    {visa.image && (
                      <Image
                        src={visa.image}
                        alt={visa.name}
                        width={60}
                        height={40}
                        style={{ objectFit: "cover", borderRadius: "4px" }}
                        unoptimized
                      />
                    )}
                  </td>
                  <td className="border p-2 space-x-2">
                    <button
                      onClick={() => handleEdit(index)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      className="bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
