import React from "react";

const SidebarWithFilters = () => {
  return (
    <div className="w-1/4 bg-[#111] text-white h-screen border-r border-gray-700 flex flex-col overflow-hidden">
      

      {/* MAIN CONTENT OF SIDEBAR */}
      <div className="p-4 flex-1">
        {/* Search */}
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Search</h3>
          <input
            type="text"
            placeholder="Search resources..."
            className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-600 text-white mb-4"
          />

          {/* Categories */}
          <h3 className="font-semibold mb-2">Categories</h3>
          <ul className="space-y-2">
            {[
              "Computer Science",
              "Environmental Science",
              "Physics",
              "Economics",
              "Healthcare",
              "Biology",
              "Mathematics",
              "Engineering",
            ].map((cat) => (
              <li key={cat}>
                <label className="inline-flex items-center">
                  <input type="checkbox" className="mr-2" />
                  {cat}
                </label>
              </li>
            ))}
          </ul>
        </div>

        <hr className="border-gray-600 my-4" />

        {/* Resource Types */}
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Resource Types</h3>
          <ul className="space-y-2">
            {["Research Paper", "Book", "Textbook", "Thesis", "Conference Paper"].map((type) => (
              <li key={type}>
                <label className="inline-flex items-center">
                  <input type="checkbox" className="mr-2" />
                  {type}
                </label>
              </li>
            ))}
          </ul>
        </div>

        {/* Publishers */}
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Publishers</h3>
          <ul className="space-y-2">
            {["IEEE", "Springer", "Elsevier", "Nature", "Science", "ACM", "Wiley", "MIT Press"].map(
              (pub) => (
                <li key={pub}>
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="mr-2" />
                    {pub}
                  </label>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Sort By */}
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Sort By</h3>
          <label className="block mb-2">
            <input type="radio" name="sortBy" className="mr-2" defaultChecked />
            Date
          </label>
          <label className="block">
            <input type="radio" name="sortBy" className="mr-2" />
            Title
          </label>
        </div>

        {/* Sort Order */}
        <div>
          <h3 className="font-semibold mb-2">Sort Order</h3>
          <label className="block mb-2">
            <input type="radio" name="sortOrder" className="mr-2" defaultChecked />
            Descending
          </label>
          <label className="block">
            <input type="radio" name="sortOrder" className="mr-2" />
            Ascending
          </label>
        </div>
      </div>
    </div>
  );
};

export default SidebarWithFilters;