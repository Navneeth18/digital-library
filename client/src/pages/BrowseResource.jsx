import React from "react";
import BrowseHeader from "../components/BrowseHeader";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import SidebarWithFilters from "../components/SidebarWithFilter";
import ResourceCard from "../components/ResourceCard";
import FilteredResourceExplorer from "../components/FilteredResourceExplore";

const resources = [
  {
    title: "Advances in Machine Learning: A Comprehensive Survey",
    authors: "J. Smith, A. Johnson",
    publisher: "IEEE Transactions on Neural Networks",
    date: "2023-04-15",
    tags: ["Research Paper", "Computer Science"],
    description:
      "This paper provides a comprehensive survey of recent advances in machine learning, focusing on deep learning, reinforcement learning, and their applications.",
  },
  {
    title: "Sustainable Energy Solutions for Urban Development",
    authors: "M. Garcia, L. Chen",
    publisher: "Journal of Environmental Engineering",
    date: "2023-04-10",
    tags: ["Research Paper", "Environmental Science"],
    description:
      "The study explores sustainable energy systems tailored for urban environments, including solar, wind, and smart grid integration.",
  },
  {
    title: "Modern Cryptography: Principles and Applications",
    authors: "R. Williams",
    publisher: "Springer",
    date: "2023-04-05",
    tags: ["Book", "Computer Science"],
    description:
      "This book presents foundational concepts and practical applications of cryptographic techniques used in modern computing.",
  },
  {
    title: "Quantum Computing: Current State and Future Prospects",
    authors: "D. Brown, S. Lee",
    publisher: "Nature Quantum Information",
    date: "2023-04-01",
    tags: ["Research Paper", "Physics"],
    description:
      "An overview of the principles of quantum computing, current hardware implementations, and potential impacts across various industries.",
  },
  {
    title: "Introduction to Artificial Intelligence",
    authors: "S. Russell, P. Norvig",
    publisher: "Pearson",
    date: "2022-12-15",
    tags: ["Textbook", "Computer Science"],
    description:
      "A textbook that covers the theory and practice of AI including problem-solving, machine learning, and robotics.",
  },
  {
    title: "Climate Change: Global Impacts and Mitigation Strategies",
    authors: "J. Hansen, M. Mann",
    publisher: "Nature Climate Change",
    date: "2022-11-10",
    tags: ["Research Paper", "Environmental Science"],
    description:
      "This paper analyzes the global effects of climate change and outlines various strategies for mitigation and adaptation.",
  },
  {
    title: "Principles of Economics",
    authors: "N. G. Mankiw",
    publisher: "Cengage Learning",
    date: "2022-10-05",
    tags: ["Textbook", "Economics"],
    description:
      "A comprehensive introduction to economic theory, including microeconomics and macroeconomics fundamentals.",
  },
  {
    title: "CRISPR-Cas9: A Revolutionary Gene Editing Technology",
    authors: "F. Zhang, J. Doudna",
    publisher: "Science",
    date: "2022-09-20",
    tags: ["Research Paper", "Biology"],
    description:
      "This research paper discusses the mechanisms of CRISPR-Cas9 and its implications for genetic engineering and biotechnology.",
  },
];

function BrowseResource() {
  return (
    <div className="">
      <div className="flex min-h-screen bg-black">
        {/* <Sidebar /> */}
        <div className="flex-1 flex flex-col">
          {/* <Navbar /> */}
          <BrowseHeader />
          <div className="flex">
            {/* <SidebarWithFilters /> */}

            {/* <div className="mx-4">
              {resources.map((res, index) => (
                <ResourceCard key={index} resource={res} />
              ))}
            </div> */}
            <FilteredResourceExplorer/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrowseResource;
