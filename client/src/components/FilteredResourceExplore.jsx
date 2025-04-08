import React, { useState, useEffect } from "react";
import { useResources } from "../context/ResourceContext"; // Import the custom hook to access the context

const categories = [
  "Computer Science",
  "Environmental Science",
  "Physics",
  "Economics",
  "Healthcare",
  "Biology",
  "Mathematics",
  "Engineering",
];

const types = ["Research Paper", "Book", "Textbook", "Thesis", "Conference Paper"];

const publishers = ["IEEE", "Springer", "Elsevier", "Nature", "Science", "ACM", "Wiley", "MIT Press"];

const FilteredResourceExplorer = () => {
  const { resources, loading } = useResources(); // Get resources and loading state from context
  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedPublishers, setSelectedPublishers] = useState([]);
  const [sortBy, setSortBy] = useState("date");
  const [sortOrder, setSortOrder] = useState("desc");

  const toggleCheckbox = (value, setFunction, current) => {
    setFunction(current.includes(value) ? current.filter((v) => v !== value) : [...current, value]);
  };

  const filteredResources = resources
    .filter((res) => {
      const lowerSearch = search.toLowerCase();
      console.log(res);
      return (
        res.title.toLowerCase().includes(lowerSearch) ||
        res.authors.toLowerCase().includes(lowerSearch) ||
        res.description.toLowerCase().includes(lowerSearch)
      );
    })
    .filter((res) =>
      selectedCategories.length
        ? selectedCategories.some((cat) => res.category?.includes(cat))
        : true
    )
    .filter((res) =>
      selectedTypes.length ? selectedTypes.some((type) => res.resourceType?.includes(type)) : true
    )
    .filter((res) =>
      selectedPublishers.length
        ? selectedPublishers.some((pub) => res.publisher.toLowerCase().includes(pub.toLowerCase()))
        : true
    )
    .sort((a, b) => {
      if (sortBy === "title") {
        return sortOrder === "asc"
          ? a.title.localeCompare(b.title)
          : b.title.localeCompare(a.title);
      } else {
        return sortOrder === "asc"
          ? new Date(a.date) - new Date(b.date)
          : new Date(b.date) - new Date(a.date);
      }
    });

  if (loading) {
    return <p>Loading resources...</p>; // Show loading state while resources are being fetched
  }

  return (
    <div className="flex h-screen w-full bg-[#0d0d0d] text-white">
      <div className="w-1/4 bg-[#111] border-r border-gray-700 p-4 overflow-y-auto">
        {/* <h3 className="font-semibold mb-2">Search</h3> */}
        {/* <input
          type="text"
          placeholder="Search resources..."
          className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-600 text-white mb-4"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        /> */}

        <h3 className="font-semibold mb-2">Categories</h3>
        <ul className="space-y-2 mb-4">
          {categories.map((cat) => (
            <li key={cat}>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={selectedCategories.includes(cat)}
                  onChange={() => toggleCheckbox(cat, setSelectedCategories, selectedCategories)}
                />
                {cat}
              </label>
            </li>
          ))}
        </ul>

        <h3 className="font-semibold mb-2">Resource Types</h3>
        <ul className="space-y-2 mb-4">
          {types.map((type) => (
            <li key={type}>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={selectedTypes.includes(type)}
                  onChange={() => toggleCheckbox(type, setSelectedTypes, selectedTypes)}
                />
                {type}
              </label>
            </li>
          ))}
        </ul>

        <h3 className="font-semibold mb-2">Publishers</h3>
        <ul className="space-y-2 mb-4">
          {publishers.map((pub) => (
            <li key={pub}>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={selectedPublishers.includes(pub)}
                  onChange={() => toggleCheckbox(pub, setSelectedPublishers, selectedPublishers)}
                />
                {pub}
              </label>
            </li>
          ))}
        </ul>

        <h3 className="font-semibold mb-2">Sort By</h3>
        <label className="block mb-2">
          <input
            type="radio"
            name="sortBy"
            className="mr-2"
            checked={sortBy === "date"}
            onChange={() => setSortBy("date")}
          />
          Date
        </label>
        <label className="block mb-4">
          <input
            type="radio"
            name="sortBy"
            className="mr-2"
            checked={sortBy === "title"}
            onChange={() => setSortBy("title")}
          />
          Title
        </label>

        <h3 className="font-semibold mb-2">Sort Order</h3>
        <label className="block mb-2">
          <input
            type="radio"
            name="sortOrder"
            className="mr-2"
            checked={sortOrder === "desc"}
            onChange={() => setSortOrder("desc")}
          />
          Descending
        </label>
        <label className="block">
          <input
            type="radio"
            name="sortOrder"
            className="mr-2"
            checked={sortOrder === "asc"}
            onChange={() => setSortOrder("asc")}
          />
          Ascending
        </label>
      </div>

      <div className="w-3/4 p-6 overflow-y-auto">
        <h1 className="text-2xl font-bold mb-4">Browse Resources</h1>
        {filteredResources.map((resource, index) => (
          <div key={index} className="bg-[#111] border border-gray-700 p-6 rounded-lg mb-4">
            <h2 className="text-xl font-semibold mb-2">{resource.title}</h2>
            <p className="text-sm text-gray-400 mb-1">Authors: {resource.authorName}</p>
            <p className="text-sm text-gray-400 mb-1">Journal/Publisher: {resource.publisher}</p>
            <p className="text-sm text-gray-400 mb-3">Date: {resource.updatedAt}</p>
            <div className="flex gap-2 mb-3">
              {(resource.keywords || []).map((tag) => (
                <span key={tag} className="bg-gray-700 text-sm px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-sm mb-4">{resource.abstract}</p>
            <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition">
              View Details
            </button>
          </div>
        ))}
        {filteredResources.length === 0 && (
          <p className="text-gray-400">No resources match the selected filters.</p>
        )}
      </div>
    </div>
  );
};

export default FilteredResourceExplorer;
