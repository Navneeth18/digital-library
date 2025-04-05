import React from 'react';

export default function AddResourceForm() {
  return (
    <div className="w-4/5 h-[95vh] ml-10 mt-6 mr-6 p-6 bg-zinc-900 text-white rounded-2xl shadow-lg overflow-y-auto border-2 border-white">
      <h2 className="text-2xl font-bold mb-6">Add New Resource</h2>
      <p className="mb-8 text-zinc-400">Create a new resource in your digital library</p>

      <form className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-4">Resource Information</h3>

          <label className="block text-sm font-semibold mb-2">Title</label>
          <input type="text" placeholder="Enter resource title" className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg placeholder-zinc-500" />

          <label className="block text-sm font-semibold mt-6 mb-2">Description</label>
          <textarea placeholder="Enter a brief description" className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg placeholder-zinc-500 h-24"></textarea>

          <label className="block text-sm font-semibold mt-6 mb-2">Content</label>
          <textarea placeholder="Enter the full content of the resource" className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg placeholder-zinc-500 h-40"></textarea>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold mb-2">Category</label>
            <select className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white">
              <option>Select category</option>
              <option>Computer Science</option>
              <option>Programming</option>
              <option>Artificial Intelligence</option>
              <option>Web Development</option>
              <option>Database</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Author</label>
            <input type="text" placeholder="Enter author name" className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg placeholder-zinc-500" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold mb-2">Format</label>
            <select className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white">
              <option>Text</option>
              <option>PDF</option>
              <option>Video</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Status</label>
            <div className="flex items-center space-x-6 mt-2">
              <label className="flex items-center space-x-2">
                <input type="radio" name="status" className="accent-white" defaultChecked />
                <span>Draft</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="status" className="accent-white" />
                <span>Published</span>
              </label>
            </div>
          </div>
        </div>

        <div className="flex justify-end space-x-4 pt-6">
          <button type="button" className="px-6 py-2 bg-zinc-700 rounded-lg hover:bg-zinc-600">Cancel</button>
          <button type="submit" className="px-6 py-2 bg-white text-black font-semibold rounded-lg hover:bg-zinc-200">Add Resource</button>
        </div>
      </form>
    </div>
  );
}