import React from "react";

const Blogs = () => {
  const blogTopics = [
    { no: 1, name: "Data Science Road Map", link: "https://dev.to/asadullahmasood/data-science-road-map-1e9f" },
    { no: 2, name: "AI in Fintech", link: "https://dev.to/asadullahmasood/ai-in-fintech-e42" },
    { no: 3, name: "A Beginners Guide to Data Mining", link: "https://dev.to/asadullahmasood/a-beginners-guide-to-data-mining-3hn0" },
    { no: 4, name: "Support Vector Machine (SVM) Algorithm", link: "https://dev.to/asadullahmasood/support-vector-machine-svm-algorithm-3nhi" },
    { no: 5, name: "Regression Analysis", link: "https://dev.to/asadullahmasood/regression-analysis-3m0p" },
    { no: 6, name: "What Is Clustering and Common Clustering Algorithms ?", link: "https://dev.to/asadullahmasood/what-is-clustering-and-common-clustering-algorithms--4657" },
    { no: 7, name: "Step-by-Step Guide to Creating Your Own Large Language Model", link: "https://dev.to/asadullahmasood/step-by-step-guide-to-creating-your-own-large-language-model-522o" },
    { no: 8, name: "All About Transfer Learning", link: "https://dev.to/asadullahmasood/all-about-transfer-learning-ipc" },
    { no: 9, name: "What is Computer Vision? & Its Applications", link: "https://dev.to/asadullahmasood/what-is-computer-vision-its-applications-2jpb" },
    { no: 10, name: "Is Agentic AI Taking Over the World?", link: "https://dev.to/asadullahmasood/is-agentic-ai-taking-over-the-world-3a5f" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">xBlogs</h1>
      <table className="table-auto w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100 text-black">
            <th className="border px-4 py-2">NO</th>
            <th className="border px-4 py-2">Topic Name</th>
            <th className="border px-4 py-2">Topic Link</th>
          </tr>
        </thead>
        <tbody>
          {blogTopics.map((topic) => (
            <tr key={topic.no}>
              <td className="border px-4 py-2 text-center">{topic.no}</td>
              <td className="border px-4 py-2">{topic.name}</td>
              <td className="border px-4 py-2">
                <a
                  href={topic.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  {topic.link}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Blogs;
