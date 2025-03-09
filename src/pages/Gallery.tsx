import { motion } from "framer-motion";
import { useState } from "react";
import GalleryItem from "../components/GalleryItem";
import gallery from "../data/gallery";

const Gallery = () => {
  const [filter, setFilter] = useState("All");

  // Extract unique tags from all gallery items
  const allTags = [
    "All",
    ...new Set(gallery.flatMap((item) => item.tags || [])),
  ];

  // Filter gallery items based on selected tag
  const filteredGallery =
    filter === "All"
      ? gallery
      : gallery.filter((item) => item.tags && item.tags.includes(filter));

  return (
    <div className="bg-light-bg dark:bg-dark-bg text-black dark:text-white min-h-screen">
      <div className="page-container">
        <motion.h1
          className="section-title"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-6xl font-black mb-12 text-black dark:text-white inline-block relative">
            GALLERY
            <span className="absolute -bottom-3 left-0 w-full h-6 bg-red-500 -z-10 transform -rotate-1"></span>
          </h2>
        </motion.h1>

        <p className="mb-8 text-lg max-w-3xl neo-box p-6 dark:text-white">
          A collection of moments, designs, and behind-the-scenes glimpses from
          my journey as a developer. Browse through project snapshots, workspace
          setups, and creative explorations.
        </p>

        {/* Filter Buttons */}
        <div className="mb-12 overflow-x-auto">
          <h2 className="text-xl font-bold mb-4">Filter by tag:</h2>
          <div className="flex flex-nowrap gap-3 pb-2">
            {allTags.map((tag, index) => (
              <motion.button
                key={tag}
                onClick={() => setFilter(tag)}
                className={`px-4 py-2 border-4 border-black font-bold whitespace-nowrap ${
                  filter === tag
                    ? "bg-black text-white"
                    : "bg-neo-blue dark:bg-neo-pink hover:bg-neo-yellow dark:hover:bg-neo-green"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.05 }}
              >
                {tag}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredGallery.length > 0 ? (
            filteredGallery.map((item, index) => (
              <GalleryItem key={item.id} item={item} index={index} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-2xl font-bold">
                No gallery items found with the selected tag.
              </p>
              <button
                onClick={() => setFilter("All")}
                className="mt-4 neo-button bg-neo-blue dark:bg-neo-pink"
              >
                Show All Items
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
