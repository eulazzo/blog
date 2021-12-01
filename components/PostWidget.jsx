import { useEffect, useState } from "react";
import { getRecentPosts, getSimilarPosts } from "../services";

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => setRelatedPosts(result));
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result));
    } 
  },[slug]);

  console.log(relatedPosts)

  return <div>dfdfdf</div>;
};

export default PostWidget;
