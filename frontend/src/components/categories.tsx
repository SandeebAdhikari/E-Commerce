import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useGetCategoriesQuery } from "../api/categoryApi";

const Categories = ({ onCategorySelect }) => {
  const [openCategories, setOpenCategories] = useState({});

  const { data, error, isLoading } = useGetCategoriesQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const categories = data?.payload?.categories;

  if (!Array.isArray(categories)) {
    return <p>Unexpected data format</p>;
  }

  const toggleCategory = (id) => {
    setOpenCategories((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const handleCategoryClick = (seoURL) => {
    onCategorySelect(seoURL);
  };

  return (
    <div>
      <div
        onClick={() => toggleCategory("main")}
        className="flex justify-between items-center mt-8"
      >
        <span className="text-xl font-semibold">Categories</span>
        <span>{openCategories["main"] ? <FaMinus /> : <FaPlus />}</span>
      </div>
      {openCategories["main"] && (
        <ul>
          {categories.map((category) => (
            <li key={category.ID} className="mt-4">
              <div
                onClick={() => toggleCategory(category.ID)}
                className="flex justify-between items-center cursor-pointer"
              >
                <span onClick={() => handleCategoryClick(category.seoURL)}>
                  {category.name}
                </span>
                <span>
                  {openCategories[category.ID] ? <FaMinus /> : <FaPlus />}
                </span>
              </div>
              {openCategories[category.ID] && category.categories && (
                <ul className="ml-4">
                  {category.categories.map((subCategory) => (
                    <li
                      key={subCategory.ID}
                      className="flex gap-4 cursor-pointer"
                      onClick={() => handleCategoryClick(subCategory.seoURL)}
                    >
                      {subCategory.name}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Categories;
