import { useRef } from "react";
import { useState, useEffect } from "react";
import { submitComment } from "../services";

const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  
  const storeDataEl = useRef();
  useEffect(() => {
    nameEl.current.value = window.localStorage.getItem("name");
    emailEl.current.value = window.localStorage.getItem("email");
  }, []);

  const commentSubmissionHandler = (param) => {
    setError(false);
    const { value: comment } = commentEl.current;
    const { value: name } = nameEl.current;
    const { value: email } = emailEl.current;
    const { checked: storeData } = storeDataEl.current;

    if (!comment || !name || !email) {
      setError(true);
      return;
    }

    const commentItself = {
      name,
      email,
      comment,
      slug,
    };

    if (storeData) {
      // localStorage.setItem("userData", { email, name });
      window.localStorage.setItem("name", name);
      window.localStorage.setItem("email", email);
    } else {
      window.localStorage.removeItem("name", name);
      window.localStorage.removeItem("email", email);
    }

    submitComment(commentItself).then((res) => {
      
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    });
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8 ">
      <h3 className="text-lg mb-8  font-semibold border-b pb-4">
        Leave a Reply
      </h3>

      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea
          className="p-4 outline-none w-full  rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100  resize-none text-gray-700"
          ref={commentEl}
          required
          placeholder="Comment"
          name="comment"
        />
      </div>

      <div className="lg:grid-cols-2 grid grid-cols-1 gap-4 mb-4">
        <input
          className="py-2 px-4 outline-none w-full  rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100  resize-none text-gray-700"
          type="text"
          ref={nameEl}
          placeholder="Name"
          name="name"
          required
        />
        <input
          className="py-2 px-4 outline-none w-full  rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100  resize-none text-gray-700"
          type="email"
          ref={emailEl}
          placeholder="Email"
          name="email"
          required
        />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div>
          <input
            ref={storeDataEl}
            type="checkbox"
            id="storeData"
            name="storeData"
            value="true"
          />
          <label
            className="ml-2  text-gra-500 cursor-pointer"
            htmlFor="storageData"
          >
            Save my email and my name for the next time i comment.
          </label>
        </div>
      </div>
      {error && (
        <p className="text-xs text-red-500">All fields are required.</p>
      )}

      <div className="mt-8 ">
        <button
          className="transition  duration-500 ease cursor-pointer hover:bg-yellow-600
          bg-yellow-500 inline-block text-lg rounded-full text-white px-8 py-3"
          onClick={commentSubmissionHandler}
          type="button"
        >
          Post Comment
        </button>
        {showSuccessMessage && (
          <span className="text-xl float-right font-semibold  text-green-500">
            Comment submitted for review
          </span>
        )}
      </div>
    </div>
  );
};

export default CommentsForm;
