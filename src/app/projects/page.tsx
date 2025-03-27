"use client";
import { useState } from "react";
import { Card } from "@/components/projects/Card";
import data from "@/components/projects/data.json";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

const Projects = () => {
  const [visibleCategories, setVisibleCategories] = useState(
    data.map(() => true) // Initialize visibility for all categories as true
  );

  const toggleCategoryVisibility = (index: number) => {
    setVisibleCategories((prev) =>
      prev.map((visible, i) => (i === index ? !visible : visible))
    );
  };

  return (
    <div className="min-h-screen bg-[#51abb2] dark:bg-black text-black dark:text-white p-8">
      <h1 className="text-3xl font-bold text-center mb-8">My Projects</h1>
      <div className="space-y-8">
        {data.map((category, index) => (
          <div key={index}>
            {/* Category Header with Dropdown Icon */}
            <div
              className="flex justify-center items-center mb-4 cursor-pointer"
              onClick={() => toggleCategoryVisibility(index)}
            >
              <h2 className="text-2xl font-semibold flex items-center">
                {category.category}
                {visibleCategories[index] ? (
                  <RiArrowDropUpLine className="text-3xl ml-2" />
                ) : (
                  <RiArrowDropDownLine className="text-3xl ml-2" />
                )}
              </h2>
            </div>

            {/* Projects Row */}
            {visibleCategories[index] && (
              <div className="flex justify-center items-center py-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.cards.map((card, cardIndex) => (
                    <Card
                      key={cardIndex}
                      title={card.title}
                      description={card.description}
                      linkTitle={card.linkTitle}
                      imageUrl={card.imageUrl}
                      href={card.href}
                      githubUrl={card.githubUrl}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
