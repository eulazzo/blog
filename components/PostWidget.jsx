import moment from "moment";
import { useEffect, useState } from "react";
import { getRecentPosts, getSimilarPosts } from "../services";
import Link from "next/link";

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) =>
        setRelatedPosts(result)
      );
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result));
    }
  }, [slug]);

  return (
    <div className="border rounded-lg  p-8 mb-8">
      <h3 className="text-lg mb-8 font-semibold border-b pb-4">
        {slug ? "Related Post" : "Recents Posts"}
      </h3>

      {relatedPosts?.map((post) => (
        <div className="flex items-center w-full mb-4" key={post.title}>
          <div className="w-16 flex-none">
            <img
              className="align-middle rounded-full"
              src={post.featuredImage.url}
              alt={post.title}
              width="60px"
              height="60px"
            />
          </div>

          <div className="flex-grow ml-4">
            <p className="text-gray-500 font-xs">
              {moment(post.createAt).format("MMM DD, YYYY")}
            </p>
            <Link
              className="text-md cursor-pointer  "
              key={post.title}
              href={`/posts/${post.slug}`}
            >
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
