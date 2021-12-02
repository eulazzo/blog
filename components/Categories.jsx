import { useState, useEffect } from "react";
import Link from "next/link";
import { getCategories } from "../services";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategory) => setCategories(newCategory));
  }, []);

  console.log(categories);

  return (
    <div className="border rounded-lg  p-8 mb-8 pb-12">
      <h3 className="text-lg mb-8 font-semibold border-b pb-4">categories</h3>
      {categories?.map((categorie) => (
        <Link key={categorie.slug} href={`/category/${categorie.slug}`}>
          <span className='cursor-pointer block pb-3  '>{categorie.name}</span>
        </Link>
      ))}
    </div>
  );
};
export default Categories;
