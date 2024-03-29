import { useEffect, useState } from "react";
import moment from "moment";
import parse from "html-react-parser";
import { getComments } from "../services";

const Comments = ({ slug }) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    getComments(slug).then((resp) => setComments(resp));
  }, []);

 

  return (
    <>
      {comments.length > 0 && (
        <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
          <h3 className="text-xl mb-8 font-semibold border-b pb-4">
            {comments.length} Comments
          </h3>
          {comments.map((comment) => (
            <div
              className="border-b boder-gra-100 mb-4 pb-4 "
              key={comment.createdAd}
            >
              <p className="mb-4">
                <span className="font-semibold">{comment.name}</span> on{" "}
                {moment(comment.createdAd).format("MMM DD, YYYY ")}
              </p>
              <p className="whitespace-pre-line text-gray-600 w-full">
                {parse(comment.comment)}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Comments;
