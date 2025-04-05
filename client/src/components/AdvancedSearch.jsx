import { useState } from "react";
import { Search } from "lucide-react";

export default function AdvancedSearch() {
  const [filters, setFilters] = useState({
    keywords: "",
    author: "",
    resourceType: "",
    category: "",
    publisher: "",
    publicationYear: "",
    searchIn: "all",
    sortBy: "relevance",
  });

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const clearFilters = () => {
    setFilters({
      keywords: "",
      author: "",
      resourceType: "",
      category: "",
      publisher: "",
      publicationYear: "",
      searchIn: "all",
      sortBy: "relevance",
    });
  };

  const handleSearch = () => {
    console.log("Search filters:", filters);
  };

  return (
    <div className="p-6 bg-black-900 text-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold">Search Parameters</h2>
      <p className="text-gray-400 mb-4">
        Use the form below to search for academic resources with specific criteria
      </p>

      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          name="keywords"
          placeholder="Enter keywords to search for"
          className="p-2 rounded bg-gray-800 text-white focus:outline-none w-full"
          value={filters.keywords}
          onChange={handleChange}
        />
        <input
          type="text"
          name="author"
          placeholder="Enter author name"
          className="p-2 rounded bg-gray-800 text-white focus:outline-none w-full"
          value={filters.author}
          onChange={handleChange}
        />

        <select
          name="resourceType"
          className="p-2 rounded bg-gray-800 text-white w-full"
          value={filters.resourceType}
          onChange={handleChange}
        >
          <option value="">Select a resource type</option>
          <option value="book">Book</option>
          <option value="journal">Journal</option>
          <option value="research-paper">Research Paper</option>
        </select>

        <select
          name="category"
          className="p-2 rounded bg-gray-800 text-white w-full"
          value={filters.category}
          onChange={handleChange}
        >
          <option value="">Select a category</option>
          <option value="science">Science</option>
          <option value="technology">Technology</option>
          <option value="history">History</option>
        </select>

        <select
          name="publisher"
          className="p-2 rounded bg-gray-800 text-white w-full"
          value={filters.publisher}
          onChange={handleChange}
        >
          <option value="">Select a publisher</option>
          <option value="oxford">Oxford</option>
          <option value="springer">Springer</option>
        </select>

        <select
          name="publicationYear"
          className="p-2 rounded bg-gray-800 text-white w-full"
          value={filters.publicationYear}
          onChange={handleChange}
        >
          <option value="">Select a year</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
        </select>
      </div>

      {/* Search Scope (Radio Buttons) */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Search In</h3>
        <div className="flex flex-col gap-2">
          {["all", "title", "abstract", "full"].map((option) => (
            <label key={option} className="flex items-center gap-2">
              <input
                type="radio"
                name="searchIn"
                value={option}
                checked={filters.searchIn === option}
                onChange={handleChange}
              />
              {option.charAt(0).toUpperCase() + option.slice(1)} Fields
            </label>
          ))}
        </div>
      </div>

      {/* Sort By */}
      <select
        name="sortBy"
        className="mt-4 p-2 rounded bg-gray-800 text-white w-full"
        value={filters.sortBy}
        onChange={handleChange}
      >
        <option value="relevance">Relevance</option>
        <option value="newest">Newest First</option>
        <option value="oldest">Oldest First</option>
      </select>

      {/* Buttons */}
      <div className="flex justify-between mt-4">
        <button className="p-2 bg-gray-700 rounded text-white" onClick={clearFilters}>
          Clear Filters
        </button>
        <button
          className="p-2 bg-white rounded text-black flex items-center gap-2 hover:bg-white transition"
          onClick={handleSearch}
        >
          <Search size={16} />
          Search
        </button>
      </div>
    </div>
  );
}