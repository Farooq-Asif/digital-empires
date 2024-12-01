import React, { useContext, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { GlobalInfo } from "../App";
import {
  delRecentNews,
  getRecentNews,
} from "../store/recentnews/actions/actionsCreators";
import Skeleton from "react-loading-skeleton";
import { BsEye } from "react-icons/bs";
import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import DeleteModal from "../Models/DeleteMode";
import AddNewsModel from "../Models/AddNewsModel";

const RecentNewsTable = () => {
  const Dispatch = useDispatch();
  const savedTheme = localStorage.getItem("theme");
  const [addNewsModel, setNewsModel] = useState(false);
  const Navigate = useNavigate();
  const { recentNewsData, isLoading } = useSelector((state) => state.news);
  const { token } = useSelector((state) => state.user);
  const { SetTournamentEdit, SetTournamentId } = useContext(GlobalInfo);
  const [showModel, setShowmodel] = useState();
  const [state, setState] = useState(false);
  const [newsId, setNewsId] = useState(null);

  useEffect(() => {
    Dispatch(getRecentNews());
  }, [Dispatch, state]);

  const handleDelTournamentbtn = (id) => {
    setNewsId(id);
    setShowmodel(true);
  };

  const handleCloseModel = () => {
    setShowmodel(false);
  };

  const handleDeleteNews = () => {
    Dispatch(delRecentNews(newsId, token,setState));
    setShowmodel(false);
  };

  const handleEditbtn = (id) => {
    // SetTournamentId(id);
    // SetTournamentEdit(true);
    // Navigate("/dashboard/addtournaments");
  };

  return (
    <>
      <div className="section-main mx-auto mt-10 px-3 py-4  max-w-5xl ">
        <div className="mx-auto text-end">
          <button
            type="submit"
            onClick={() => setNewsModel(true)}
            className={`px-2 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-transparent ${
              savedTheme === "dark"
                ? "bg-[#F2F2F1]  text-black border border-black"
                : "bg-black text-white border border-white"
            }`}
          >
            Add New News
          </button>
        </div>

        <div className="section-main mx-auto mt-10 px-3 pb-3 rounded-lg shadow-lg max-w-5xl bg-white">
            <h1 className='text-xl py-3 font-bold'>All News Table</h1>
          {isLoading ? (
            [...Array(3)].map((_, index) => (
              <div key={index} className="flex justify-between border-b pb-4">
                <div className="w-full">
                  <Skeleton width="60%" height={20} className="mb-2" />
                  <Skeleton width="100%" height={25} />
                </div>
                <Skeleton width={100} height={20} />
              </div>
            ))
          ) : recentNewsData?.recentNewsData?.length > 0 ? (
            <table className="min-w-full table-auto border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 border-b">Title</th>
                  <th className="px-4 py-2 border-b">Publisher Name</th>
                  <th className="px-4 py-2 border-b text-nowrap">
                    Website Link
                  </th>
                  <th className="px-4 py-2 border-b text-nowrap">
                    Publish Date
                  </th>
                  <th className="px-4 py-2 border-b">Actions</th>
                </tr>
              </thead>
              <tbody>
                {recentNewsData.recentNewsData.map((news, index) => {
                  const date = new Date(news.newsDate);
                  const formattedDate = date.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  });

                  return (
                    <tr key={index} className="odd:bg-gray-50 even:bg-gray-200">
                      <td className="px-4 py-2 border-b">
                        <p className="text-lg font-semibold ">
                          {news.newsText}
                        </p>
                      </td>
                      <td className="px-4 py-2 border-b text-sm">
                        {news.publisher}
                      </td>
                      <td className="px-4 py-2 border-b">
                        <Link to={news.websiteLink}>
                          <p className="text-lg font-semibold hover:underline">
                            link
                          </p>
                        </Link>
                      </td>

                      <td className="px-4 py-2 border-b text-sm">
                        {formattedDate}
                      </td>

                      <td className="px-4 py-2 border-b flex space-x-2">
                        <button
                          onClick={() => handleEditbtn(news._id)}
                          className="text-yellow-500 hover:text-yellow-700"
                        >
                          <CiEdit />
                        </button>
                        <button
                          onClick={() => handleDelTournamentbtn(news._id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <AiOutlineDelete />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <p className="text-sm text-center">There is No News</p>
          )}
        </div>
      </div>
      <AddNewsModel
        showModal={addNewsModel}
        onClose={() => setNewsModel(false)}
        setState={setState}
      />
      <DeleteModal
        showModal={showModel}
        onClose={handleCloseModel}
        onDelete={handleDeleteNews}
      />
    </>
  );
};

export default RecentNewsTable;
