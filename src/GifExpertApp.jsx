import { useState } from "react";
import AddCategory from "./components/AddCategory";
import Appbar from "./components/Appbar";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(['like']);

  const onAddCategory = (newCategory) => {
    setCategories([newCategory, ...categories]);
  };

  return (
    <div className="container-app">
      <Appbar />
      <div className="container-body">
        <AddCategory onAddCategory={onAddCategory} />
        {categories.length === 0 ? (
          <div className="container-initial">
              <h1>
                Escribe la categoria...
              </h1>
          </div>
        ) : (
          <>
            {categories.map((category) => (
              <GifGrid key={category} category={category} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default GifExpertApp;

//jcgp