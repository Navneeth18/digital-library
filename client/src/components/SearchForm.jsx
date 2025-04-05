import React from "react";

const SearchForm = () => {
  return (
    <div className="bg-black text-white p-6 rounded-lg w-full max-w-4xl ">
      <h2 className="text-xl font-semibold mb-2">Search Parameters</h2>
      <p className="text-sm mb-4">Use the form below to search for academic resources with specific criteria</p>
      
      <input type="text" placeholder="Enter keywords to search for" className="w-full p-2 mb-4 bg-gray-800 border border-gray-600 rounded" />
      <input type="text" placeholder="Enter author name" className="w-full p-2 mb-4 bg-gray-800 border border-gray-600 rounded" />
      
      <select className="w-full p-2 mb-4 bg-gray-800 border border-gray-600 rounded">
        <option>Select a resource type</option>
      </select>
      <select className="w-full p-2 mb-4 bg-gray-800 border border-gray-600 rounded">
        <option>Select a category</option>
      </select>
      <select className="w-full p-2 mb-4 bg-gray-800 border border-gray-600 rounded">
        <option>Select a publisher</option>
      </select>
      <select className="w-full p-2 mb-4 bg-gray-800 border border-gray-600 rounded">
        <option>Select a year</option>
      </select>

      <div className="mb-4">
        <label className="block mb-1">Search In</label>
        <div className="space-y-1">
          <label className="block"><input type="radio" name="searchIn" className="mr-2" /> All Fields</label>
          <label className="block"><input type="radio" name="searchIn" className="mr-2" /> Title Only</label>
          <label className="block"><input type="radio" name="searchIn" className="mr-2" /> Abstract Only</label>
          <label className="block"><input type="radio" name="searchIn" className="mr-2" /> Full Text</label>
        </div>
      </div>
      
      <button className="bg-gray-600 hover:bg-gray-500 text-white py-2 px-4 rounded">Clear Filters</button>
      <button className="bg-white hover:bg-white text-black py-2 px-4 ml-2 rounded">Search</button>
    </div>
  );
};

const MaterialRequestForm = () => {
  return (
    <div className="bg-black text-white p-6 rounded-lg w-full max-w-4xl mx-auto mt-8">
      <h2 className="text-xl font-semibold mb-2">Material Request Form</h2>
      <p className="text-sm mb-4">Fill out this form to request academic materials that are not currently available in our library.</p>

      <input type="text" placeholder="Enter the title of the material" className="w-full p-2 mb-4 bg-gray-800 border border-gray-600 rounded" />
      <input type="text" placeholder="Enter the authors' names" className="w-full p-2 mb-4 bg-gray-800 border border-gray-600 rounded" />
      
      <select className="w-full p-2 mb-4 bg-gray-800 border border-gray-600 rounded">
        <option>Select a resource type</option>
      </select>

      <input type="text" placeholder="Enter the publisher or journal name" className="w-full p-2 mb-4 bg-gray-800 border border-gray-600 rounded" />
      <input type="text" placeholder="YYYY" className="w-full p-2 mb-4 bg-gray-800 border border-gray-600 rounded" />
      <input type="text" placeholder="Enter the DOI if available" className="w-full p-2 mb-4 bg-gray-800 border border-gray-600 rounded" />
      <input type="text" placeholder="Enter a URL if available" className="w-full p-2 mb-4 bg-gray-800 border border-gray-600 rounded" />
      
      <textarea placeholder="Provide a brief description of the material" className="w-full p-2 mb-4 bg-gray-800 border border-gray-600 rounded"></textarea>
      
      <div className="mb-4">
        <label className="block mb-1">Priority</label>
        <div className="space-y-1">
          <label className="block"><input type="radio" name="priority" className="mr-2" /> Low - Not urgent, for general interest</label>
          <label className="block"><input type="radio" name="priority" className="mr-2" /> Medium - Needed for upcoming research or coursework</label>
          <label className="block"><input type="radio" name="priority" className="mr-2" /> High - Urgently needed for current research or assignment</label>
        </div>
      </div>
      
      <textarea placeholder="Explain why you need this material and how it will be used" className="w-full p-2 mb-4 bg-gray-800 border border-gray-600 rounded"></textarea>
      
      <button className="w-full bg-white hover:bg-white text-black py-2 px-4 rounded">Submit Request</button>
      
      <p className="text-sm text-gray-400 mt-4">Requests are typically processed within 3-5 business days. You will receive an email notification when your request has been reviewed.</p>
    </div>
  );
};

const SearchApp = () => {
  return (
    <div className="p-6">
      {/* <SearchForm /> */}
      <MaterialRequestForm />
    </div>
  );
};

export default SearchApp;