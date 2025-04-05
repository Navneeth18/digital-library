import { useState } from "react";
import { Search } from "lucide-react";
import { useResources } from "../context/ResourceContext"; // update path as needed

export default function AdvancedSearch() {
  const { resources } = useResources();

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

  const [results, setResults] = useState([]);

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
    setResults([]);
  };

  const handleSearch = () => {
    let filtered = resources.filter((res) => {
      const keyword = filters.keywords.toLowerCase();

      const fieldContent = (field) => (res[field] || "").toLowerCase();

      const matchKeyword = () => {
        if (!keyword) return true;

        if (filters.searchIn === "all") {
          return (
            fieldContent("title").includes(keyword) ||
            fieldContent("abstract").includes(keyword) ||
            fieldContent("fullText").includes(keyword)
          );
        }

        return fieldContent(filters.searchIn).includes(keyword);
      };

      return (
        matchKeyword() &&
        (!filters.author || fieldContent("author").includes(filters.author.toLowerCase())) &&
        (!filters.resourceType || res.resourceType === filters.resourceType) &&
        (!filters.category || res.category === filters.category) &&
        (!filters.publisher || res.publisher === filters.publisher) &&
        (!filters.publicationYear || res.publicationYear === filters.publicationYear)
      );
    });

    if (filters.sortBy === "newest") {
      filtered.sort((a, b) => b.publicationYear - a.publicationYear);
    } else if (filters.sortBy === "oldest") {
      filtered.sort((a, b) => a.publicationYear - b.publicationYear);
    }

    setResults(filtered);
    console.log("Filtered Results:", filtered);
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
          <option value="textbook">TextBook</option>
          <option value="thesis">Thesis</option>
          <option value="research-paper">Research Paper</option>
          <option value="conference-paper">Conference Paper</option>
        </select>

        <select
          name="category"
          className="p-2 rounded bg-gray-800 text-white w-full"
          value={filters.category}
          onChange={handleChange}
        >
          <option value="">Select a category</option>
          <option value="computer-science">Computer Science</option>
          <option value="environmental-science">Environmental Science</option>
          <option value="physics">Physics</option>
          <option value="economics">Economics</option>
          <option value="healthcare">Health care</option>
          <option value="biology">Biology</option>
          <option value="mathematics">Mathematics</option>
          <option value="engineering">Engineering</option>
        </select>

        <select
          name="publisher"
          className="p-2 rounded bg-gray-800 text-white w-full"
          value={filters.publisher}
          onChange={handleChange}
        >
          <option value="">Select a publisher</option>
          <option value="ieee">IEEE</option>
          <option value="springer">Springer</option>
          <option value="elsivier">Elsivier</option>
          <option value="nature">Nature</option>
          <option value="science">Science</option>
          <option value="acm">ACM</option>
          <option value="whiley">Whiley</option>
          <option value="mit-press">MIT press</option>
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

      <div className="mt-4">
        <h3 className="text-lg font-semibold">Search In</h3>
        <div className="flex flex-col gap-2">
          {["all", "title", "abstract", "fullText"].map((option) => (
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

      {results.length > 0 && (
        <div className="mt-6">
          <h3 className="text-xl font-bold mb-2">Search Results</h3>
          <ul className="space-y-4">
            {results.map((res) => (
              <li key={res.id} className="bg-gray-800 p-4 rounded">
                <h4 className="text-lg font-semibold">{res.title}</h4>
                <p className="text-sm text-gray-400">{res.author} • {res.publicationYear}</p>
                <p className="mt-1 text-gray-300">{res.abstract}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
