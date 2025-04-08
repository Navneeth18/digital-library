import React, { useState } from 'react';
import axios from 'axios';

const AddResource = () => {
  const [formData, setFormData] = useState({
    title: '',
    abstract: '',
    content: '',
    keywords: '',
    authorName: '',
    category: '',
    resourceType: '',
    publisher: '',
    access: ['Public'],
  });

  const categories = [
    'Computer Science',
    'Environmental Science',
    'Physics',
    'Economics',
    'Healthcare',
    'Biology',
    'Mathematics',
    'Engineering'
  ];

  const resourceTypes = [
    'Research Paper',
    'Book',
    'Textbook',
    'Thesis',
    'Conference Paper'
  ];

  const publishers = [
    'IEEE',
    'Springer',
    'Elsevier',
    'Nature',
    'Science',
    'ACM',
    'Wiley',
    'MIT Press'
  ];

  const accessLevels = [
    'Public',
    'Student',
    'Faculty'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleKeywordsChange = (e) => {
    setFormData({
      ...formData,
      keywords: e.target.value
    });
  };

  const handleAccessChange = (level) => {
    const currentAccess = [...formData.access];
    if (currentAccess.includes(level)) {
      if (currentAccess.length > 1) {
        setFormData({
          ...formData,
          access: currentAccess.filter(a => a !== level)
        });
      }
    } else {
      setFormData({
        ...formData,
        access: [...currentAccess, level]
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Process keywords from comma-separated string to array
    const processedData = {
      ...formData,
      keywords: formData.keywords.split(',').map(keyword => keyword.trim()).filter(keyword => keyword !== '')
    };

    try {
      // Send a POST request to the backend
      const response = await axios.post('http://localhost:3000/api/admin/add', processedData);
      console.log('Resource added successfully:', response.data);

      alert('Resource added successfully!');

      // Clear form data after successful submission
      setFormData({
        title: '',
        abstract: '',
        content: '',
        keywords: '',
        authorName: '',
        category: '',
        resourceType: '',
        publisher: '',
        access: ['Public']
      });

      // Optionally, you can show a success message or perform other actions here

    } catch (error) {
      console.error('Error adding resource:', error);
      // Optionally, handle error (show error message, etc.)
    }
  };

  return (
    <div className="min-h-screen bg-black text-gray-300 p-6 w-full " >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-2">Add New Resource</h1>
        <p className="text-gray-400 mb-8">Create a new resource in your digital library</p>

        <form onSubmit={handleSubmit}>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">Resource Information</h2>
            
            {/* Title */}
            <div className="mb-6">
              <label htmlFor="title" className="block text-white mb-2">Title</label>
              <input
                id="title"
                name="title"
                type="text"
                value={formData.title}
                onChange={handleChange}
                className="w-full bg-transparent border border-gray-700 rounded-lg p-3 text-gray-300 focus:outline-none focus:border-blue-500"
                placeholder="Enter resource title"
                required
              />
            </div>

            {/* Description/Abstract */}
            <div className="mb-6">
              <label htmlFor="abstract" className="block text-white mb-2">Description</label>
              <textarea
                id="abstract"
                name="abstract"
                value={formData.abstract}
                onChange={handleChange}
                className="w-full bg-transparent border border-gray-700 rounded-lg p-3 text-gray-300 h-32 focus:outline-none focus:border-blue-500"
                placeholder="Enter a brief description"
              />
            </div>

            {/* Content */}
            <div className="mb-6">
              <label htmlFor="content" className="block text-white mb-2">Content</label>
              <textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleChange}
                className="w-full bg-transparent border border-gray-700 rounded-lg p-3 text-gray-300 h-48 focus:outline-none focus:border-blue-500"
                placeholder="Enter the full content of the resource"
              />
            </div>

            {/* Two column layout for Category and Author */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="category" className="block text-white mb-2">Category</label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-gray-700 rounded-lg p-3 text-gray-300 focus:outline-none focus:border-blue-500"
                  required
                >
                  <option value="" disabled className="bg-gray-900">Select a category</option>
                  {categories.map((category) => (
                    <option key={category} value={category} className="bg-gray-900">{category}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="authorName" className="block text-white mb-2">Author</label>
                <input
                  id="authorName"
                  name="authorName"
                  type="text"
                  value={formData.authorName}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-gray-700 rounded-lg p-3 text-gray-300 focus:outline-none focus:border-blue-500"
                  placeholder="Enter author name"
                />
              </div>
            </div>

            {/* Two column layout for Resource Type and Publisher */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="resourceType" className="block text-white mb-2">Resource Type</label>
                <select
                  id="resourceType"
                  name="resourceType"
                  value={formData.resourceType}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-gray-700 rounded-lg p-3 text-gray-300 focus:outline-none focus:border-blue-500"
                  required
                >
                  <option value="" disabled className="bg-gray-900">Select a resource type</option>
                  {resourceTypes.map((type) => (
                    <option key={type} value={type} className="bg-gray-900">{type}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="publisher" className="block text-white mb-2">Publisher</label>
                <select
                  id="publisher"
                  name="publisher"
                  value={formData.publisher}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-gray-700 rounded-lg p-3 text-gray-300 focus:outline-none focus:border-blue-500"
                >
                  <option value="" disabled className="bg-gray-900">Select a publisher</option>
                  {publishers.map((publisher) => (
                    <option key={publisher} value={publisher} className="bg-gray-900">{publisher}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Keywords */}
            <div className="mb-6">
              <label htmlFor="keywords" className="block text-white mb-2">Keywords</label>
              <input
                id="keywords"
                name="keywords"
                type="text"
                value={formData.keywords}
                onChange={handleKeywordsChange}
                className="w-full bg-transparent border border-gray-700 rounded-lg p-3 text-gray-300 focus:outline-none focus:border-blue-500"
                placeholder="Enter keywords separated by commas"
              />
              <p className="text-gray-500 text-sm mt-1">Separate keywords with commas</p>
            </div>

            {/* Access Levels */}
            <div className="mb-6">
              <label className="block text-white mb-2">Access Levels</label>
              <div className="flex flex-wrap gap-4">
                {accessLevels.map((level) => (
                  <div key={level} className="flex items-center">
                    <input
                      id={`access-${level}`}
                      type="checkbox"
                      checked={formData.access.includes(level)}
                      onChange={() => handleAccessChange(level)}
                      className="w-4 h-4 text-blue-600 bg-transparent border-gray-700 rounded focus:ring-blue-500"
                      disabled={formData.access.length === 1 && formData.access.includes(level)}
                    />
                    <label htmlFor={`access-${level}`} className="ml-2 text-gray-300">{level}</label>
                  </div>
                ))}
              </div>
              <p className="text-gray-500 text-sm mt-1">At least one access level must be selected</p>
            </div>

            {/* Submit Button */}
            <div className="mt-8">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300"
              >
                Upload Resource
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddResource;
