import React, { useState } from "react";
import TextField from "../Components/TextField";
import { useDispatch, useSelector } from "react-redux";
import { addRecentNews } from "../store/recentnews/actions/actionsCreators";

const AddNewsModal = ({ showModal, onClose, setState }) => {
  const { token } = useSelector((state) => state.user);
  const savedTheme = localStorage.getItem("theme");
  const [newsText, setNewsText] = useState("");
  const [publisher, setPublisher] = useState("");
  const [newsDate, setNewsDate] = useState("");
  const [websiteLink, setWebsiteLink] = useState("https://");
  const Dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      publisher,
      newsText,
      newsDate,
      websiteLink,
    };
    Dispatch(addRecentNews(data, token,setState));
    setNewsText("");
    setNewsDate("");
    setWebsiteLink("");
    setPublisher("");

   
    onClose();
  };

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
          <div className="bg-white p-6  text-black rounded-lg w-3/4 sm:w-1/2 md:w-1/3">
            <h2 className="text-xl font-semibold mb-4">Add News</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="mb-4">
                  <label
                    htmlFor="publisher"
                    className="block text-sm font-medium mb-2"
                  >
                    Publisher
                  </label>
                  <TextField
                    type="text"
                    id="publisher"
                    value={publisher}
                    onChange={(e) => setPublisher(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="newsDate"
                    className="block text-sm font-medium mb-2"
                  >
                    News Date
                  </label>
                  <TextField
                    type="date"
                    id="newsDate"
                    value={newsDate}
                    onChange={(e) => setNewsDate(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="mb-4">
                  <label
                    htmlFor="newsText"
                    className="block text-sm font-medium mb-2"
                  >
                    News Text
                  </label>
                  <TextField
                    id="newsText"
                    value={newsText}
                    onChange={(e) => setNewsText(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    rows="4"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="websiteLink"
                    className="block text-sm font-medium mb-2"
                  >
                    Website Link
                  </label>
                  <TextField
                    type="url"
                    id="websiteLink"
                    value={websiteLink}
                    onChange={(e) => setWebsiteLink(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
              </div>

              <div className="flex justify-end space-x-4 mt-4">
                <button
                  onClick={onClose}
                  type="button"
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className={`px-2 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-transparent ${
                    savedTheme === "dark"
                      ? "bg-[#F2F2F1]  text-black border border-black"
                      : "bg-black text-white border border-white"
                  }`}
                >
                  Add News
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AddNewsModal;
