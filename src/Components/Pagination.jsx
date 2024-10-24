import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevious = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  // Generate array of page numbers
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center items-center my-4 space-x-2" dir="ltr">
      {/* Previous Button */}
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className="px-4 py-2 text-gray-700 rounded disabled:opacity-50 text-3xl"
      >
        <IoIosArrowBack />
      </button>

      {/* Page Numbers */}
      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 text-2xl ${
            currentPage === page
              ? "text-white bg-main w-10 h-10 rounded-full flex justify-center items-center" // Highlight the current page
              : ""
          } rounded`}
        >
          {page}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="px-4 py-2 text-gray-700 rounded disabled:opacity-50 text-3xl"
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default Pagination;
