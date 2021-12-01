import { useContext } from "react";
import Link from "next/link";
import Image from "next/image";

const categories = [
  { name: "React", slug: "React" },
  { name: "Red Team", slug: "Python" },
  { name: "Games", slug: "Unity" },
];

const Header = () => {
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

{
  /* <div
  className="relative  hidden lg:inline-grid  
                h-10 w-24 cursor-pointer  "
>
  <Image src="/../public/logo.svg" layout="fill" objectFit="contain" />
</div>; */
}
