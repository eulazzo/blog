import { useContext } from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { getCategories } from "../services";

 
const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategory) => setCategories(newCategory));
  }, []);

  console.log(categories);

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b-2 w-full inline-block  py-8">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold  text-4xl">Sigma</span>
          </Link>
        </div>

        <div className="hidden md:float-left md:contents">
          {categories.map((category) => (
            <Link key={category.slug} href={`/category/${category.slug}`}>
              <span className="md:float-right mt-2 align-middle   ml-4 font-semibold cursor-pointer">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;

