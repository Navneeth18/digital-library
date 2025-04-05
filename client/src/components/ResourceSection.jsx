import React from "react";
import { FaEye, FaDownload } from "react-icons/fa";

const ResourceSection = () => {
  return (
    <div className="bg-black text-white w-full px-8 py-6 flex flex-col lg:flex-row gap-6">
      {/* Recently Added */}
      <div className="bg-[#1a1a1a] border border-gray-600 rounded-md p-4 w-full lg:w-1/2">
        <h2 className="text-xl font-semibold mb-1">Recently Added Resources</h2>
        <p className="text-gray-400 text-sm mb-4">The latest academic materials added to our library</p>

        {[
          {
            title: "Advances in Machine Learning: A Comprehensive Survey",
            authors: "J. Smith, A. Johnson • IEEE Transactions on Neural Networks",
            tags: ["Research Paper", "Computer Science"],
            date: "2023-04-15",
          },
          {
            title: "Sustainable Energy Solutions for Urban Development",
            authors: "M. Garcia, L. Chen • Journal of Environmental Engineering",
            tags: ["Research Paper", "Environmental Science"],
            date: "2023-04-10",
          },
          {
            title: "Modern Cryptography: Principles and Applications",
            authors: "R. Williams • Springer",
            tags: ["Book", "Computer Science"],
            date: "2023-04-05",
          },
          {
            title: "Quantum Computing: Current State and Future Prospects",
            authors: "D. Brown, S. Lee • Nature Quantum Information",
            tags: ["Research Paper", "Physics"],
            date: "2023-04-01",
          },
        ].map((item, i) => (
          <div key={i} className="mb-4">
            <p className="font-semibold">{item.title}</p>
            <p className="text-sm text-gray-400">{item.authors}</p>
            <div className="flex flex-wrap gap-2 mt-1 text-xs">
              {item.tags.map((tag, j) => (
                <span key={j} className="bg-gray-700 px-2 py-0.5 rounded-md">
                  {tag}
                </span>
              ))}
              <span className="text-gray-400 ml-auto">{item.date}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Popular Resources */}
      <div className="bg-[#1a1a1a] border border-gray-600 rounded-md p-4 w-full lg:w-1/2">
        <h2 className="text-xl font-semibold mb-1">Popular Resources</h2>
        <p className="text-gray-400 text-sm mb-4">Most viewed and downloaded materials</p>

        {[
          {
            title: "Introduction to Artificial Intelligence",
            authors: "S. Russell, P. Norvig • Pearson",
            tags: ["Textbook", "Computer Science"],
            views: 1245,
            downloads: 876,
          },
          {
            title: "Climate Change: Global Impacts and Mitigation Strategies",
            authors: "J. Hansen, M. Mann • Nature Climate Change",
            tags: ["Research Paper", "Environmental Science"],
            views: 982,
            downloads: 654,
          },
          {
            title: "Principles of Economics",
            authors: "N. G. Mankiw • Cengage Learning",
            tags: ["Textbook", "Economics"],
            views: 876,
            downloads: 543,
          },
          {
            title: "CRISPR-Cas9: A Revolutionary Gene Editing Technology",
            authors: "F. Zhang, J. Doudna • Science",
            tags: ["Research Paper", "Biology"],
            views: 765,
            downloads: 432,
          },
        ].map((item, i) => (
          <div key={i} className="mb-4">
            <p className="font-semibold">{item.title}</p>
            <p className="text-sm text-gray-400">{item.authors}</p>
            <div className="flex flex-wrap gap-2 mt-1 text-xs items-center">
              {item.tags.map((tag, j) => (
                <span key={j} className="bg-gray-700 px-2 py-0.5 rounded-md">
                  {tag}
                </span>
              ))}
              <div className="flex items-center gap-2 ml-auto text-gray-400">
                <span className="flex items-center gap-1"><FaEye /> {item.views}</span>
                <span className="flex items-center gap-1"><FaDownload /> {item.downloads}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourceSection;